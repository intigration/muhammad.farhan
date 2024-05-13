import{mergeProps as b,withCtx as c,unref as e,createVNode as n,createTextVNode as a,useSSRContext as q}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as d}from"./page-utils-C-QWsEHe.js";import{D as S}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"use-id",__ssrInlineRender:!0,setup(y){const $=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(g,h,v,x)=>{h(l(S,b({title:"useId composable",desc:"What is useId() composable and how you can use it",badge:"Quasar v2.15+",heading:"","edit-link":"vue-composables/use-id",toc:$},x),{default:c((V,u,m,o)=>{if(u)u(`<p${o}>The <code class="doc-token"${o}>useId()</code> composable returns an “id” which is a ref() that can be used as a unique identifier to apply to a DOM node attribute.</p><p${o}>Should you supply a function (<code class="doc-token"${o}>getValue</code> from the typing below) to get the value that the id might have, it will make sure to keep it updated.</p><p${o}>On SSR, it takes into account the process of hydration so that your component won’t generate any such errors.</p><h2 id="syntax" class="doc-heading doc-h2"${o}>Syntax</h2>`),u(l(e(k),null,{default:c((i,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useId <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span> id <span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>useId</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token comment"${s}>// ...</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(p,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useId "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" id "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,o)),u(l(e(k),null,{default:c((i,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>function</span> <span class="token function"${s}>useId</span><span class="token punctuation"${s}>(</span>
  opts<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    getValue<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> string <span class="token operator"${s}>|</span> <span class="token keyword"${s}>null</span> <span class="token operator"${s}>|</span> <span class="token keyword"${s}>undefined</span><span class="token punctuation"${s}>;</span>
    required<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span> <span class="token comment"${s}>// default: true</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>)</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>id</span><span class="token operator"${s}>:</span> Ref<span class="token operator"${s}>&lt;</span>string<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>;</span></code></pre>`),t(l(p,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"useId"),n("span",{class:"token punctuation"},"("),a(`
  opts`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    getValue`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" string "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"null"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),a(`
    required`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// default: true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(" Ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(p)]}),_:1},m,o)),u(`<h2 id="example" class="doc-heading doc-h2"${o}>Example</h2>`),u(l(e(k),null,{default:c((i,t,r,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>:id</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>id<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
    Some component
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useId <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>props</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>for</span><span class="token operator"${s}>:</span> String
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span> id <span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>useId</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
      <span class="token function-variable function"${s}>getValue</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> props<span class="token punctuation"${s}>.</span>for<span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>required</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span> id <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(l(p,null,null,r,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},":id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("id"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    Some component
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useId "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},":"),a(` String
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" id "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function-variable function"},"getValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" props"),n("span",{class:"token punctuation"},"."),a("for"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" id "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]}),_:1},m,o));else return[n("p",null,[a("The "),n("code",{class:"doc-token"},"useId()"),a(" composable returns an “id” which is a ref() that can be used as a unique identifier to apply to a DOM node attribute.")]),n("p",null,[a("Should you supply a function ("),n("code",{class:"doc-token"},"getValue"),a(" from the typing below) to get the value that the id might have, it will make sure to keep it updated.")]),n("p",null,"On SSR, it takes into account the process of hydration so that your component won’t generate any such errors."),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:i=>e(d)("syntax")},"Syntax",8,["onClick"]),n(e(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useId "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" id "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n(e(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"useId"),n("span",{class:"token punctuation"},"("),a(`
  opts`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    getValue`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" string "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"null"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),a(`
    required`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// default: true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(" Ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(p)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:i=>e(d)("example")},"Example",8,["onClick"]),n(e(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},":id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("id"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    Some component
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useId "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},":"),a(` String
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" id "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function-variable function"},"getValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" props"),n("span",{class:"token punctuation"},"."),a("for"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" id "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(p)]),_:1})]}),_:1},v))}}},w=f.setup;f.setup=(y,$)=>{const g=q();return(g.modules||(g.modules=new Set)).add("src/pages/vue-composables/use-id.md"),w?w(y,$):void 0};const A=C(f,[["__file","use-id.md"]]);export{A as default};
