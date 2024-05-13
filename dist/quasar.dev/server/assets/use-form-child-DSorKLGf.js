import{mergeProps as g,withCtx as e,createTextVNode as a,unref as i,createVNode as n,useSSRContext as x}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as b}from"./page-utils-C-QWsEHe.js";import{D as Q,a as $}from"./DocPage-DKr-0pQn.js";import{D as y}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as S}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const m={__name:"use-form-child",__ssrInlineRender:!0,setup(k){const r=[{name:"Form",category:"Form Components",path:"/vue-components/form"}],c=[{id:"syntax",title:"2. Syntax"}];return(V,w,C,v)=>{w(l(Q,g({title:"useFormChild composable",desc:"What is Quasar's useFormChild() composable and how you can use it",heading:"","edit-link":"vue-composables/use-form-child",toc:c,related:r},v),{default:e((B,o,d,p)=>{if(o)o(`<p${p}>This composable refers to `),o(l($,{to:"/vue-components/form"},{default:e((f,t,h,s)=>{if(t)t("QForm");else return[a("QForm")]}),_:1},d,p)),o(` wrapping your own custom component which you want to communicate with.</p><h2 id="syntax" class="doc-heading doc-h2"${p}>Syntax</h2>`),o(l(i(y),null,{default:e((f,t,h,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useFormChild <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// function validate () { ... }</span>
  <span class="token comment"${s}>// function resetValidation () { ... }</span>

  <span class="token function"${s}>useFormChild</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
    validate<span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// Function; Can be async;</span>
              <span class="token comment"${s}>// Should return a Boolean (or a Promise resolving to a Boolean)</span>
    resetValidation<span class="token punctuation"${s}>,</span>    <span class="token comment"${s}>// Optional function which resets validation</span>
    <span class="token literal-property property"${s}>requiresQForm</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span> <span class="token comment"${s}>// should it error out if no parent QForm is found?</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(u,null,null,h,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useFormChild "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// function validate () { ... }"),a(`
  `),n("span",{class:"token comment"},"// function resetValidation () { ... }"),a(`

  `),n("span",{class:"token function"},"useFormChild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    validate`),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Function; Can be async;"),a(`
              `),n("span",{class:"token comment"},"// Should return a Boolean (or a Promise resolving to a Boolean)"),a(`
    resetValidation`),n("span",{class:"token punctuation"},","),a("    "),n("span",{class:"token comment"},"// Optional function which resets validation"),a(`
    `),n("span",{class:"token literal-property property"},"requiresQForm"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// should it error out if no parent QForm is found?"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},d,p));else return[n("p",null,[a("This composable refers to "),n($,{to:"/vue-components/form"},{default:e(()=>[a("QForm")]),_:1}),a(" wrapping your own custom component which you want to communicate with.")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:f=>i(b)("syntax")},"Syntax",8,["onClick"]),n(i(y),null,{default:e(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useFormChild "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// function validate () { ... }"),a(`
  `),n("span",{class:"token comment"},"// function resetValidation () { ... }"),a(`

  `),n("span",{class:"token function"},"useFormChild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    validate`),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Function; Can be async;"),a(`
              `),n("span",{class:"token comment"},"// Should return a Boolean (or a Promise resolving to a Boolean)"),a(`
    resetValidation`),n("span",{class:"token punctuation"},","),a("    "),n("span",{class:"token comment"},"// Optional function which resets validation"),a(`
    `),n("span",{class:"token literal-property property"},"requiresQForm"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// should it error out if no parent QForm is found?"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1})]}),_:1},C))}}},F=m.setup;m.setup=(k,r)=>{const c=x();return(c.modules||(c.modules=new Set)).add("src/pages/vue-composables/use-form-child.md"),F?F(k,r):void 0};const G=S(m,[["__file","use-form-child.md"]]);export{G as default};
