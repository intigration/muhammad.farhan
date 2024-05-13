import{mergeProps as v,withCtx as c,unref as p,createVNode as n,createTextVNode as s,useSSRContext as A}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as w}from"./page-utils-C-QWsEHe.js";import{D as R}from"./DocPage-DKr-0pQn.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as h}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"use-split-attrs",__ssrInlineRender:!0,setup(g){const $=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(m,b,S,x)=>{b(l(R,v({title:"useSplitAttrs composable",desc:"What is useSplitAttrs() composable and how you can use it",badge:"Quasar v2.15+",heading:"","edit-link":"vue-composables/use-split-attrs",toc:$},x),{default:c((V,u,f,e)=>{if(u)u(`<p${e}>Vue’s <code class="doc-token"${e}>attrs</code> in a component can contain both listeners and real HTML attributes. The <code class="doc-token"${e}>useSplitAttrs()</code> composable breaks down this Vue attr object into the two categories and keeps them updated.</p><h2 id="syntax" class="doc-heading doc-h2"${e}>Syntax</h2>`),u(l(p(r),null,{default:c((i,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useSplitAttrs <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
    attributes<span class="token punctuation"${a}>,</span>
    listeners
  <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useSplitAttrs</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// ...</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(l(o,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSplitAttrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    attributes`),n("span",{class:"token punctuation"},","),s(`
    listeners
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e)),u(l(p(r),null,{default:c((i,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> Ref <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue&#39;</span>

<span class="token keyword"${a}>function</span> <span class="token function"${a}>useSplitAttrs</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>attributes</span><span class="token operator"${a}>:</span> Ref<span class="token operator"${a}>&lt;</span>Record<span class="token operator"${a}>&lt;</span>string<span class="token punctuation"${a}>,</span> string <span class="token operator"${a}>|</span> <span class="token keyword"${a}>null</span> <span class="token operator"${a}>|</span> <span class="token keyword"${a}>undefined</span><span class="token operator"${a}>&gt;&gt;</span><span class="token punctuation"${a}>;</span>
  <span class="token literal-property property"${a}>listeners</span><span class="token operator"${a}>:</span> Ref<span class="token operator"${a}>&lt;</span>Record<span class="token operator"${a}>&lt;</span>string<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token operator"${a}>...</span>args<span class="token operator"${a}>:</span> any<span class="token punctuation"${a}>[</span><span class="token punctuation"${a}>]</span></span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> any<span class="token operator"${a}>&gt;&gt;</span><span class="token punctuation"${a}>;</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>;</span></code></pre>`),t(l(o,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(" string "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token literal-property property"},"listeners"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" any"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(o)]}),_:1},f,e)),u(`<h2 id="example" class="doc-heading doc-h2"${e}>Example</h2>`),u(l(p(r),null,{default:c((i,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useSplitAttrs <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
    attributes<span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// is a Vue ref()</span>
    listeners <span class="token comment"${a}>// is a Vue ref()</span>
  <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useSplitAttrs</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span>attributes<span class="token punctuation"${a}>.</span>value<span class="token punctuation"${a}>)</span>
  <span class="token comment"${a}>// prints out a key-value object</span>

  console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span>listeners<span class="token punctuation"${a}>.</span>value<span class="token punctuation"${a}>)</span>
  <span class="token comment"${a}>// prints out a key-value object</span>

  <span class="token comment"${a}>// ...</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(l(o,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSplitAttrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    attributes`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// is a Vue ref()"),s(`
    listeners `),n("span",{class:"token comment"},"// is a Vue ref()"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("attributes"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// prints out a key-value object"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("listeners"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// prints out a key-value object"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e));else return[n("p",null,[s("Vue’s "),n("code",{class:"doc-token"},"attrs"),s(" in a component can contain both listeners and real HTML attributes. The "),n("code",{class:"doc-token"},"useSplitAttrs()"),s(" composable breaks down this Vue attr object into the two categories and keeps them updated.")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:i=>p(w)("syntax")},"Syntax",8,["onClick"]),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSplitAttrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    attributes`),n("span",{class:"token punctuation"},","),s(`
    listeners
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(" string "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token literal-property property"},"listeners"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" any"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(o)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:i=>p(w)("example")},"Example",8,["onClick"]),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSplitAttrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    attributes`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// is a Vue ref()"),s(`
    listeners `),n("span",{class:"token comment"},"// is a Vue ref()"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("attributes"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// prints out a key-value object"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("listeners"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// prints out a key-value object"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1})]}),_:1},S))}}},d=y.setup;y.setup=(g,$)=>{const m=A();return(m.modules||(m.modules=new Set)).add("src/pages/vue-composables/use-split-attrs.md"),d?d(g,$):void 0};const z=h(y,[["__file","use-split-attrs.md"]]);export{z as default};
