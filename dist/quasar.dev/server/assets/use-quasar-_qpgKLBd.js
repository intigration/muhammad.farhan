import{mergeProps as b,withCtx as p,createTextVNode as a,unref as e,createVNode as n,useSSRContext as d}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as w}from"./page-utils-C-QWsEHe.js";import{D as j,a as q}from"./DocPage-DKr-0pQn.js";import{D as $}from"./DocPrerender-DPOnWPFO.js";import{C as l}from"./CopyButton-l3ndfN49.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"use-quasar",__ssrInlineRender:!0,setup(y){const m=[{name:"The $q object",category:"Options & Helpers",path:"/options/the-q-object"}],k=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(S,h,x,Q)=>{h(u(j,b({title:"useQuasar composable",desc:"What is useQuasar() composable and how you can use it",heading:"","edit-link":"vue-composables/use-quasar",toc:k,related:m},Q),{default:p((O,o,g,c)=>{if(o)o(`<p${c}>The useQuasar composable is used in order to get access to the `),o(u(q,{to:"/options/the-q-object"},{default:p((i,t,r,s)=>{if(t)t("$q Object");else return[a("$q Object")]}),_:1},g,c)),o(`.</p><h2 id="syntax" class="doc-heading doc-h2"${c}>Syntax</h2>`),o(u(e($),null,{default:p((i,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(u(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},g,c)),o(`<h2 id="example" class="doc-heading doc-h2"${c}>Example</h2>`),o(u(e($),null,{default:p((i,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
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
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(l,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},g,c));else return[n("p",null,[a("The useQuasar composable is used in order to get access to the "),n(q,{to:"/options/the-q-object"},{default:p(()=>[a("$q Object")]),_:1}),a(".")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:i=>e(w)("syntax")},"Syntax",8,["onClick"]),n(e($),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:i=>e(w)("example")},"Example",8,["onClick"]),n(e($),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1})]}),_:1},x))}}},v=f.setup;f.setup=(y,m)=>{const k=d();return(k.modules||(k.modules=new Set)).add("src/pages/vue-composables/use-quasar.md"),v?v(y,m):void 0};const F=C(f,[["__file","use-quasar.md"]]);export{F as default};
