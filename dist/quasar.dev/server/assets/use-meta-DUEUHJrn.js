import{mergeProps as q,withCtx as p,createTextVNode as a,unref as u,createVNode as n,useSSRContext as b}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as w}from"./page-utils-C-QWsEHe.js";import{D as C,a as h}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as T}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"use-meta",__ssrInlineRender:!0,setup(g){const f=[{name:"Meta",category:"Quasar Plugins",path:"/quasar-plugins/meta"}],m=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(A,v,M,x)=>{v(l(C,q({title:"useMeta composable",desc:"What is Quasar's useMeta() composable and how you can use it",heading:"","edit-link":"vue-composables/use-meta",toc:m,related:f},x),{default:p((S,o,$,e)=>{if(o)o(`<p${e}>The useMeta composable is part of `),o(l(h,{to:"/quasar-plugins/meta"},{default:p((r,s,i,t)=>{if(s)s("Quasar Meta Plugin");else return[a("Quasar Meta Plugin")]}),_:1},$,e)),o(`. If you haven’t dug into it by now, please have a first read there.</p><h2 id="syntax" class="doc-heading doc-h2"${e}>Syntax</h2><p${e}>For static meta configuration (non-reactive):</p>`),o(l(u(k),null,{default:p((r,s,i,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useMeta <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>useMeta</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* meta config */</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>}</span></code></pre>`),s(l(c,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMeta "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* meta config */"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},$,e)),o(`<p${e}>For dynamic meta configuration (reactive):</p>`),o(l(u(k),null,{default:p((r,s,i,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useMeta <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// essentially acting as a computed property</span>
  <span class="token function"${t}>useMeta</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// compute or reference other stuff</span>
    <span class="token comment"${t}>// in your component</span>
    <span class="token comment"${t}>// then return:</span>
    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* meta config */</span> <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>}</span></code></pre>`),s(l(c,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMeta "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// essentially acting as a computed property"),a(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// compute or reference other stuff"),a(`
    `),n("span",{class:"token comment"},"// in your component"),a(`
    `),n("span",{class:"token comment"},"// then return:"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* meta config */"),a(),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},$,e)),o(`<h2 id="example" class="doc-heading doc-h2"${e}>Example</h2>`),o(l(u(k),null,{default:p((r,s,i,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useMeta <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>const</span> title <span class="token operator"${t}>=</span> <span class="token function"${t}>ref</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;Some title&#39;</span><span class="token punctuation"${t}>)</span> <span class="token comment"${t}>// we define the &quot;title&quot; prop</span>

    <span class="token comment"${t}>// NOTICE the parameter here is a function</span>
    <span class="token comment"${t}>// Under the hood, it is converted to a Vue computed prop for reactivity</span>
    <span class="token function"${t}>useMeta</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// whenever &quot;title&quot; from above changes, your meta will automatically update</span>
        <span class="token literal-property property"${t}>title</span><span class="token operator"${t}>:</span> title<span class="token punctuation"${t}>.</span>value
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>function</span> <span class="token function"${t}>setAnotherTitle</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      title<span class="token punctuation"${t}>.</span>value <span class="token operator"${t}>=</span> <span class="token string"${t}>&#39;Another title&#39;</span> <span class="token comment"${t}>// will automatically trigger a Meta update due to the binding</span>
    <span class="token punctuation"${t}>}</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
      setAnotherTitle
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),s(l(c,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMeta "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" title "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some title'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// we define the "title" prop'),a(`

    `),n("span",{class:"token comment"},"// NOTICE the parameter here is a function"),a(`
    `),n("span",{class:"token comment"},"// Under the hood, it is converted to a Vue computed prop for reactivity"),a(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},'// whenever "title" from above changes, your meta will automatically update'),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(" title"),n("span",{class:"token punctuation"},"."),a(`value
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"setAnotherTitle"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      title`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'Another title'"),a(),n("span",{class:"token comment"},"// will automatically trigger a Meta update due to the binding"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      setAnotherTitle
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},$,e));else return[n("p",null,[a("The useMeta composable is part of "),n(h,{to:"/quasar-plugins/meta"},{default:p(()=>[a("Quasar Meta Plugin")]),_:1}),a(". If you haven’t dug into it by now, please have a first read there.")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:r=>u(w)("syntax")},"Syntax",8,["onClick"]),n("p",null,"For static meta configuration (non-reactive):"),n(u(k),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMeta "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* meta config */"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"For dynamic meta configuration (reactive):"),n(u(k),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMeta "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// essentially acting as a computed property"),a(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// compute or reference other stuff"),a(`
    `),n("span",{class:"token comment"},"// in your component"),a(`
    `),n("span",{class:"token comment"},"// then return:"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* meta config */"),a(),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:r=>u(w)("example")},"Example",8,["onClick"]),n(u(k),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useMeta "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" title "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some title'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},'// we define the "title" prop'),a(`

    `),n("span",{class:"token comment"},"// NOTICE the parameter here is a function"),a(`
    `),n("span",{class:"token comment"},"// Under the hood, it is converted to a Vue computed prop for reactivity"),a(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},'// whenever "title" from above changes, your meta will automatically update'),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(" title"),n("span",{class:"token punctuation"},"."),a(`value
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"setAnotherTitle"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      title`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'Another title'"),a(),n("span",{class:"token comment"},"// will automatically trigger a Meta update due to the binding"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      setAnotherTitle
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1})]}),_:1},M))}}},d=y.setup;y.setup=(g,f)=>{const m=b();return(m.modules||(m.modules=new Set)).add("src/pages/vue-composables/use-meta.md"),d?d(g,f):void 0};const W=T(y,[["__file","use-meta.md"]]);export{W as default};
