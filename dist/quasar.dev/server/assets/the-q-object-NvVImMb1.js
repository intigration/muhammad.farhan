import{resolveComponent as x,mergeProps as S,withCtx as o,createTextVNode as a,createVNode as n,unref as i,useSSRContext as A}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as V,a as e}from"./DocPage-DKr-0pQn.js";import{D as g}from"./DocPrerender-DPOnWPFO.js";import{C as k}from"./CopyButton-l3ndfN49.js";import{_ as D}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"the-q-object",__ssrInlineRender:!0,setup(q){const b=[{name:"useQuasar",category:"Vue Composables",path:"/vue-composables/use-quasar"}],w=[{id:"usage",title:"2. Usage"},{id:"composition-api-with-script-setup",title:"2.1. Composition API with “script setup”",sub:!0},{id:"composition-api-without-script-setup",title:"2.2. Composition API without “script setup”",sub:!0},{id:"options-api",title:"2.3. Options API",sub:!0},{id:"outside-of-a-vue-file",title:"2.4. Outside of a .vue file",sub:!0}];return(T,O,C,P)=>{const Q=x("q-markup-table");O(l(V,S({title:"The $q object",desc:"The $q object in Quasar. Why and how to use it.",heading:"","edit-link":"options/the-q-object",toc:w,related:b},P),{default:o((G,r,m,c)=>{if(r)r(`<p${c}>Quasar supplies a <code class="doc-token"${c}>$q</code> object that you can use for various purposes. You will notice it throughout the docs.</p>`),r(l(Q,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o(($,t,u,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Prop name</th><th class="text-left"${s}>Type</th><th class="text-left"${s}>Description</th></tr></thead><tbody${s}><tr${s}><td${s}><code class="doc-token"${s}>$q.version</code></td><td${s}>String</td><td${s}>Quasar version.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>$q.platform</code></td><td${s}>Object</td><td${s}>Same object as `),t(l(e,{to:"/options/platform-detection"},{default:o((f,p,d,v)=>{if(p)p("Platform");else return[a("Platform")]}),_:1},u,s)),t(` import from Quasar.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>$q.screen</code></td><td${s}>Object</td><td${s}>Object supplied by `),t(l(e,{to:"/options/screen-plugin"},{default:o((f,p,d,v)=>{if(p)p("Screen Plugin");else return[a("Screen Plugin")]}),_:1},u,s)),t(`.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>$q.lang</code></td><td${s}>Object</td><td${s}>Quasar Language pack management, containing labels etc (one of `),t(l(e,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:o((f,p,d,v)=>{if(p)p("lang files");else return[a("lang files")]}),_:1},u,s)),t("). Designed for Quasar components, but you can use it in your app components too. More info: "),t(l(e,{to:"/options/quasar-language-packs"},{default:o((f,p,d,v)=>{if(p)p("Quasar Language Packs");else return[a("Quasar Language Packs")]}),_:1},u,s)),t(`.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>$q.iconSet</code></td><td${s}>Object</td><td${s}>Quasar icon set management (one of `),t(l(e,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/icon-set"},{default:o((f,p,d,v)=>{if(p)p("icon set files");else return[a("icon set files")]}),_:1},u,s)),t("). Designed for Quasar components, but you can use it in your app components too. More info: "),t(l(e,{to:"/options/quasar-icon-sets"},{default:o((f,p,d,v)=>{if(p)p("Quasar Icon Sets");else return[a("Quasar Icon Sets")]}),_:1},u,s)),t(`.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>$q.cordova</code></td><td${s}>Object</td><td${s}>Reference to Cordova global object. Available only when running under a Cordova app.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>$q.capacitor</code></td><td${s}>Object</td><td${s}>Reference to Capacitor global object. Available only when running under a Capacitor app.</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Prop name"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.version")]),n("td",null,"String"),n("td",null,"Quasar version.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.platform")]),n("td",null,"Object"),n("td",null,[a("Same object as "),n(e,{to:"/options/platform-detection"},{default:o(()=>[a("Platform")]),_:1}),a(" import from Quasar.")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.screen")]),n("td",null,"Object"),n("td",null,[a("Object supplied by "),n(e,{to:"/options/screen-plugin"},{default:o(()=>[a("Screen Plugin")]),_:1}),a(".")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.lang")]),n("td",null,"Object"),n("td",null,[a("Quasar Language pack management, containing labels etc (one of "),n(e,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:o(()=>[a("lang files")]),_:1}),a("). Designed for Quasar components, but you can use it in your app components too. More info: "),n(e,{to:"/options/quasar-language-packs"},{default:o(()=>[a("Quasar Language Packs")]),_:1}),a(".")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.iconSet")]),n("td",null,"Object"),n("td",null,[a("Quasar icon set management (one of "),n(e,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/icon-set"},{default:o(()=>[a("icon set files")]),_:1}),a("). Designed for Quasar components, but you can use it in your app components too. More info: "),n(e,{to:"/options/quasar-icon-sets"},{default:o(()=>[a("Quasar Icon Sets")]),_:1}),a(".")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.cordova")]),n("td",null,"Object"),n("td",null,"Reference to Cordova global object. Available only when running under a Cordova app.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.capacitor")]),n("td",null,"Object"),n("td",null,"Reference to Capacitor global object. Available only when running under a Capacitor app.")])])]}),_:1},m,c)),r(`<h2 id="usage" class="doc-heading doc-h2"${c}>Usage</h2><p${c}>The following sections will teach you how to use it in .vue files (with both Composition API and Options API) and outside of them.</p><h3 id="composition-api-with-script-setup" class="doc-heading doc-h3"${c}>Composition API with “script setup”</h3><p${c}>The following is a .vue file:</p>`),r(l(i(g),null,{default:o(($,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-if</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>$q.platform.is.ios<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
      Gets rendered only on iOS platform.
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span> <span class="token attr-name"${s}>setup</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>platform<span class="token punctuation"${s}>.</span>is<span class="token punctuation"${s}>.</span>ios<span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// showing an example on a method, but</span>
<span class="token comment"${s}>// can be any part of Vue script</span>
<span class="token keyword"${s}>function</span> <span class="token function"${s}>show</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// prints out Quasar version</span>
  console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>version<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(l(k,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("platform"),n("span",{class:"token punctuation"},"."),a("is"),n("span",{class:"token punctuation"},"."),a("ios"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// showing an example on a method, but"),a(`
`),n("span",{class:"token comment"},"// can be any part of Vue script"),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// prints out Quasar version"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(k)]}),_:1},m,c)),r(`<h3 id="composition-api-without-script-setup" class="doc-heading doc-h3"${c}>Composition API without “script setup”</h3><p${c}>The following is a .vue file:</p>`),r(l(i(g),null,{default:o(($,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-if</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>$q.platform.is.ios<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
      Gets rendered only on iOS platform.
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

    console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>platform<span class="token punctuation"${s}>.</span>is<span class="token punctuation"${s}>.</span>ios<span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// showing an example on a method, but</span>
    <span class="token comment"${s}>// can be any part of Vue script</span>
    <span class="token keyword"${s}>function</span> <span class="token function"${s}>show</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// prints out Quasar version</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>version<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      show
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(l(k,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("platform"),n("span",{class:"token punctuation"},"."),a("is"),n("span",{class:"token punctuation"},"."),a("ios"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// showing an example on a method, but"),a(`
    `),n("span",{class:"token comment"},"// can be any part of Vue script"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// prints out Quasar version"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      show
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(k)]}),_:1},m,c)),r(`<h3 id="options-api" class="doc-heading doc-h3"${c}>Options API</h3><p${c}>The following is a .vue file:</p>`),r(l(i(g),null,{default:o(($,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-if</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>$q.platform.is.ios<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
      Gets rendered only on iOS platform.
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token comment"${s}>// not available here outside</span>
<span class="token comment"${s}>// of the export</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// inside a Vue component script</span>
  <span class="token operator"${s}>...</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// showing an example on a method, but</span>
  <span class="token comment"${s}>// can be any part of Vue script</span>
  <span class="token literal-property property"${s}>methods</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token function"${s}>show</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// prints out Quasar version</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>this</span><span class="token punctuation"${s}>.</span>$q<span class="token punctuation"${s}>.</span>version<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(l(k,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// not available here outside"),a(`
`),n("span",{class:"token comment"},"// of the export"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// inside a Vue component script"),a(`
  `),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// showing an example on a method, but"),a(`
  `),n("span",{class:"token comment"},"// can be any part of Vue script"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// prints out Quasar version"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(k)]}),_:1},m,c)),r(`<h3 id="outside-of-a-vue-file" class="doc-heading doc-h3"${c}>Outside of a .vue file</h3>`),r(l(i(g),null,{default:o(($,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Quasar<span class="token punctuation"${s}>,</span> Platform <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>Quasar<span class="token punctuation"${s}>.</span>version<span class="token punctuation"${s}>)</span>
console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span>Platform<span class="token punctuation"${s}>.</span>is<span class="token punctuation"${s}>.</span>ios<span class="token punctuation"${s}>)</span></code></pre>`),t(l(k,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar"),n("span",{class:"token punctuation"},","),a(" Platform "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Platform"),n("span",{class:"token punctuation"},"."),a("is"),n("span",{class:"token punctuation"},"."),a("ios"),n("span",{class:"token punctuation"},")")])]),n(k)]}),_:1},m,c));else return[n("p",null,[a("Quasar supplies a "),n("code",{class:"doc-token"},"$q"),a(" object that you can use for various purposes. You will notice it throughout the docs.")]),n(Q,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Prop name"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.version")]),n("td",null,"String"),n("td",null,"Quasar version.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.platform")]),n("td",null,"Object"),n("td",null,[a("Same object as "),n(e,{to:"/options/platform-detection"},{default:o(()=>[a("Platform")]),_:1}),a(" import from Quasar.")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.screen")]),n("td",null,"Object"),n("td",null,[a("Object supplied by "),n(e,{to:"/options/screen-plugin"},{default:o(()=>[a("Screen Plugin")]),_:1}),a(".")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.lang")]),n("td",null,"Object"),n("td",null,[a("Quasar Language pack management, containing labels etc (one of "),n(e,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:o(()=>[a("lang files")]),_:1}),a("). Designed for Quasar components, but you can use it in your app components too. More info: "),n(e,{to:"/options/quasar-language-packs"},{default:o(()=>[a("Quasar Language Packs")]),_:1}),a(".")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.iconSet")]),n("td",null,"Object"),n("td",null,[a("Quasar icon set management (one of "),n(e,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/icon-set"},{default:o(()=>[a("icon set files")]),_:1}),a("). Designed for Quasar components, but you can use it in your app components too. More info: "),n(e,{to:"/options/quasar-icon-sets"},{default:o(()=>[a("Quasar Icon Sets")]),_:1}),a(".")])]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.cordova")]),n("td",null,"Object"),n("td",null,"Reference to Cordova global object. Available only when running under a Cordova app.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"$q.capacitor")]),n("td",null,"Object"),n("td",null,"Reference to Capacitor global object. Available only when running under a Capacitor app.")])])]),_:1}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:$=>i(h)("usage")},"Usage",8,["onClick"]),n("p",null,"The following sections will teach you how to use it in .vue files (with both Composition API and Options API) and outside of them."),n("h3",{id:"composition-api-with-script-setup",class:"doc-heading doc-h3",onClick:$=>i(h)("composition-api-with-script-setup")},"Composition API with “script setup”",8,["onClick"]),n("p",null,"The following is a .vue file:"),n(i(g),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("platform"),n("span",{class:"token punctuation"},"."),a("is"),n("span",{class:"token punctuation"},"."),a("ios"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// showing an example on a method, but"),a(`
`),n("span",{class:"token comment"},"// can be any part of Vue script"),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// prints out Quasar version"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(k)]),_:1}),n("h3",{id:"composition-api-without-script-setup",class:"doc-heading doc-h3",onClick:$=>i(h)("composition-api-without-script-setup")},"Composition API without “script setup”",8,["onClick"]),n("p",null,"The following is a .vue file:"),n(i(g),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("platform"),n("span",{class:"token punctuation"},"."),a("is"),n("span",{class:"token punctuation"},"."),a("ios"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// showing an example on a method, but"),a(`
    `),n("span",{class:"token comment"},"// can be any part of Vue script"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// prints out Quasar version"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      show
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(k)]),_:1}),n("h3",{id:"options-api",class:"doc-heading doc-h3",onClick:$=>i(h)("options-api")},"Options API",8,["onClick"]),n("p",null,"The following is a .vue file:"),n(i(g),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// not available here outside"),a(`
`),n("span",{class:"token comment"},"// of the export"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// inside a Vue component script"),a(`
  `),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// showing an example on a method, but"),a(`
  `),n("span",{class:"token comment"},"// can be any part of Vue script"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// prints out Quasar version"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(k)]),_:1}),n("h3",{id:"outside-of-a-vue-file",class:"doc-heading doc-h3",onClick:$=>i(h)("outside-of-a-vue-file")},"Outside of a .vue file",8,["onClick"]),n(i(g),null,{default:o(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar"),n("span",{class:"token punctuation"},","),a(" Platform "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},"."),a("version"),n("span",{class:"token punctuation"},")"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("Platform"),n("span",{class:"token punctuation"},"."),a("is"),n("span",{class:"token punctuation"},"."),a("ios"),n("span",{class:"token punctuation"},")")])]),n(k)]),_:1})]}),_:1},C))}}},j=y.setup;y.setup=(q,b)=>{const w=A();return(w.modules||(w.modules=new Set)).add("src/pages/options/the-q-object.md"),j?j(q,b):void 0};const X=D(y,[["__file","the-q-object.md"]]);export{X as default};
