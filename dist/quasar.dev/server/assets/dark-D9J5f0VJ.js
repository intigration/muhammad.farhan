import{mergeProps as C,withCtx as c,createTextVNode as a,unref as l,createVNode as n,useSSRContext as Q}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as A,a as $}from"./DocPage-DKr-0pQn.js";import{D as y}from"./DocApi-Df9ryd6x.js";import{D as q}from"./DocInstallation-DgMazQjg.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as R}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"./DocCardTitle-BSnqQsiz.js";import"./utils-DKnLoYai.js";import"./DocCode-BVg0tuSc.js";import"prismjs";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"dark",__ssrInlineRender:!0,setup(h){const d=[{name:"Dark Mode",category:"Style & Identity",path:"/style/dark-mode"},{name:"Theme Builder",category:"Style & Identity",path:"/style/theme-builder"}],g=[{id:"dark-api",title:"2. Dark API",deep:!0},{id:"configuration",title:"3. Configuration",deep:!0},{id:"usage",title:"4. Usage"},{id:"inside-of-a-vue-file",title:"4.1. Inside of a Vue file",sub:!0},{id:"outside-of-a-vue-file",title:"4.2. Outside of a Vue file",sub:!0},{id:"note-about-ssr",title:"5. Note about SSR"},{id:"watching-for-status-change",title:"6. Watching for status change"}];return(x,D,b,S)=>{D(u(A,C({title:"Dark Plugin",desc:"A Quasar plugin to toggle or configure the Dark Mode state of your app.",heading:"","edit-link":"quasar-plugins/dark",toc:g,related:d},S),{default:c((O,e,r,t)=>{if(e)e(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>For a better understanding of this Quasar plugin, please head to the Style &amp; Identity `),e(u($,{to:"/style/dark-mode"},{default:c((i,o,k,s)=>{if(o)o("Dark Mode");else return[a("Dark Mode")]}),_:1},r,t)),e(" page.</p></div>"),e(u(y,{file:"Dark"},null,r,t)),e(u(q,{title:"Configuration",config:"dark"},null,r,t)),e(`<h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Do not manually assign a value to <code class="doc-token"${t}>isActive</code> or <code class="doc-token"${t}>mode</code> from below. Instead, use the <code class="doc-token"${t}>set(val)</code> method.</p></div><h3 id="inside-of-a-vue-file" class="doc-heading doc-h3"${t}>Inside of a Vue file</h3>`),e(u(l(m),null,{default:c((i,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// get status</span>
  console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>dark<span class="token punctuation"${s}>.</span>isActive<span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// true, false</span>

  <span class="token comment"${s}>// get configured status</span>
  console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>dark<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// &quot;auto&quot;, true, false</span>

  <span class="token comment"${s}>// set status</span>
  $q<span class="token punctuation"${s}>.</span>dark<span class="token punctuation"${s}>.</span><span class="token function"${s}>set</span><span class="token punctuation"${s}>(</span><span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// or false or &quot;auto&quot;</span>

  <span class="token comment"${s}>// toggle</span>
  $q<span class="token punctuation"${s}>.</span>dark<span class="token punctuation"${s}>.</span><span class="token function"${s}>toggle</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(p,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// get status"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),a("isActive"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// true, false"),a(`

  `),n("span",{class:"token comment"},"// get configured status"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// "auto", true, false'),a(`

  `),n("span",{class:"token comment"},"// set status"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// or false or "auto"'),a(`

  `),n("span",{class:"token comment"},"// toggle"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toggle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},r,t)),e(`<p${t}>On a <strong${t}>SSR build</strong>, you may want to set this from your <code class="doc-token"${t}>/src/App.vue</code>:</p>`),e(u(l(m),null,{default:c((i,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// calling here; equivalent to when component is created</span>
    $q<span class="token punctuation"${s}>.</span>dark<span class="token punctuation"${s}>.</span><span class="token function"${s}>set</span><span class="token punctuation"${s}>(</span><span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(p,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// calling here; equivalent to when component is created"),a(`
    $q`),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},r,t)),e(`<h3 id="outside-of-a-vue-file" class="doc-heading doc-h3"${t}>Outside of a Vue file</h3>`),e(u(l(m),null,{default:c((i,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// Warning! This method will not</span>
<span class="token comment"${s}>// work on SSR builds.</span>

<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Dark <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token comment"${s}>// get status</span>
console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>Dark<span class="token punctuation"${s}>.</span>isActive<span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// get configured status</span>
console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>Dark<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// &quot;auto&quot;, true, false</span>

<span class="token comment"${s}>// set status</span>
Dark<span class="token punctuation"${s}>.</span><span class="token function"${s}>set</span><span class="token punctuation"${s}>(</span><span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// or false or &quot;auto&quot;</span>

<span class="token comment"${s}>// toggle</span>
Dark<span class="token punctuation"${s}>.</span><span class="token function"${s}>toggle</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),o(u(p,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// Warning! This method will not"),a(`
`),n("span",{class:"token comment"},"// work on SSR builds."),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dark "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// get status"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Dark"),n("span",{class:"token punctuation"},"."),a("isActive"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// get configured status"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Dark"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// "auto", true, false'),a(`

`),n("span",{class:"token comment"},"// set status"),a(`
Dark`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// or false or "auto"'),a(`

`),n("span",{class:"token comment"},"// toggle"),a(`
Dark`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toggle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},r,t)),e(`<h2 id="note-about-ssr" class="doc-heading doc-h2"${t}>Note about SSR</h2><p${t}>When on a SSR build:</p><ul${t}><li${t}>Import <code class="doc-token"${t}>Dark</code> from ‘quasar’ method of using Dark mode will not error out but it will not work (won’t do anything). But, you can use the `),e(u($,{to:"/quasar-plugins/dark#inside-of-a-vue-file"},{default:c((i,o,k,s)=>{if(o)o("Inside of a Vue file");else return[a("Inside of a Vue file")]}),_:1},r,t)),e(" approach or the "),e(u($,{to:"/quasar-plugins/dark#configuration"},{default:c((i,o,k,s)=>{if(o)o("Configuration");else return[a("Configuration")]}),_:1},r,t)),e(` (recommended) approach.</li><li${t}>It’s preferred to avoid setting Dark mode to ‘auto’ for SSR builds. It’s because the client dark mode preference cannot be inferred, so SSR will always render in light mode then when the client takes over, it will switch to Dark (if it will be the case). As a result, a quick flicker of the screen will occur.</li></ul><h2 id="watching-for-status-change" class="doc-heading doc-h2"${t}>Watching for status change</h2>`),e(u(l(m),null,{default:c((i,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>...<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> watch <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

    <span class="token function"${s}>watch</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> $q<span class="token punctuation"${s}>.</span>dark<span class="token punctuation"${s}>.</span>isActive<span class="token punctuation"${s}>,</span> <span class="token parameter"${s}>val</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>val <span class="token operator"${s}>?</span> <span class="token string"${s}>&#39;On dark mode&#39;</span> <span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;On light mode&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),o(u(p,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" $q"),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),a("isActive"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("val "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'On dark mode'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'On light mode'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]}),_:1},r,t));else return[n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("For a better understanding of this Quasar plugin, please head to the Style & Identity "),n($,{to:"/style/dark-mode"},{default:c(()=>[a("Dark Mode")]),_:1}),a(" page.")])]),n(y,{file:"Dark"}),n(q,{title:"Configuration",config:"dark"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:i=>l(f)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Do not manually assign a value to "),n("code",{class:"doc-token"},"isActive"),a(" or "),n("code",{class:"doc-token"},"mode"),a(" from below. Instead, use the "),n("code",{class:"doc-token"},"set(val)"),a(" method.")])]),n("h3",{id:"inside-of-a-vue-file",class:"doc-heading doc-h3",onClick:i=>l(f)("inside-of-a-vue-file")},"Inside of a Vue file",8,["onClick"]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// get status"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),a("isActive"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// true, false"),a(`

  `),n("span",{class:"token comment"},"// get configured status"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// "auto", true, false'),a(`

  `),n("span",{class:"token comment"},"// set status"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// or false or "auto"'),a(`

  `),n("span",{class:"token comment"},"// toggle"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toggle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("On a "),n("strong",null,"SSR build"),a(", you may want to set this from your "),n("code",{class:"doc-token"},"/src/App.vue"),a(":")]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// calling here; equivalent to when component is created"),a(`
    $q`),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"outside-of-a-vue-file",class:"doc-heading doc-h3",onClick:i=>l(f)("outside-of-a-vue-file")},"Outside of a Vue file",8,["onClick"]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// Warning! This method will not"),a(`
`),n("span",{class:"token comment"},"// work on SSR builds."),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dark "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// get status"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Dark"),n("span",{class:"token punctuation"},"."),a("isActive"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// get configured status"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Dark"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// "auto", true, false'),a(`

`),n("span",{class:"token comment"},"// set status"),a(`
Dark`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// or false or "auto"'),a(`

`),n("span",{class:"token comment"},"// toggle"),a(`
Dark`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toggle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h2",{id:"note-about-ssr",class:"doc-heading doc-h2",onClick:i=>l(f)("note-about-ssr")},"Note about SSR",8,["onClick"]),n("p",null,"When on a SSR build:"),n("ul",null,[n("li",null,[a("Import "),n("code",{class:"doc-token"},"Dark"),a(" from ‘quasar’ method of using Dark mode will not error out but it will not work (won’t do anything). But, you can use the "),n($,{to:"/quasar-plugins/dark#inside-of-a-vue-file"},{default:c(()=>[a("Inside of a Vue file")]),_:1}),a(" approach or the "),n($,{to:"/quasar-plugins/dark#configuration"},{default:c(()=>[a("Configuration")]),_:1}),a(" (recommended) approach.")]),n("li",null,"It’s preferred to avoid setting Dark mode to ‘auto’ for SSR builds. It’s because the client dark mode preference cannot be inferred, so SSR will always render in light mode then when the client takes over, it will switch to Dark (if it will be the case). As a result, a quick flicker of the screen will occur.")]),n("h2",{id:"watching-for-status-change",class:"doc-heading doc-h2",onClick:i=>l(f)("watching-for-status-change")},"Watching for status change",8,["onClick"]),n(l(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" $q"),n("span",{class:"token punctuation"},"."),a("dark"),n("span",{class:"token punctuation"},"."),a("isActive"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("val "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'On dark mode'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'On light mode'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]),_:1})]}),_:1},b))}}},v=w.setup;w.setup=(h,d)=>{const g=Q();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-plugins/dark.md"),v?v(h,d):void 0};const I=R(w,[["__file","dark.md"]]);export{I as default};
