import{provide as B,resolveComponent as V,mergeProps as O,withCtx as c,createTextVNode as a,unref as k,createVNode as n,useSSRContext as T}from"vue";import{ssrRenderComponent as p}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D,a as v}from"./DocPage-DKr-0pQn.js";import{D as Q}from"./DocExample-BcaABDtE.js";import{D as C}from"./DocApi-Df9ryd6x.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as l}from"./CopyButton-l3ndfN49.js";import{_ as M}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const b={__name:"form",__ssrInlineRender:!0,setup(F){B("_q_ex",{name:"QForm"});const q=[{name:"Input Textfield",category:"Form Components",path:"/vue-components/input"},{name:"Select",category:"Form Components",path:"/vue-components/select"},{name:"Field (wrapper)",category:"Form Components",path:"/vue-components/field"},{name:"useFormChild",category:"Vue Composables",path:"/vue-composables/use-form-child"}],h=[{id:"qform-api",title:"2. QForm API",deep:!0},{id:"usage",title:"3. Usage"},{id:"turning-off-autocompletion",title:"4. Turning off Autocompletion"},{id:"submitting-to-a-url-native-form-submit-",title:"5. Submitting to a URL (native form submit)"},{id:"child-communication",title:"6. Child communication"}];return(N,S,x,A)=>{const $=V("q-tab-panel");S(p(D,O({title:"Form",desc:"The QForm Vue component renders a form and allows easy validation of child form components like QInput, QSelect or QField.",heading:"","edit-link":"vue-components/form",toc:h,related:q},A),{default:c((R,u,d,o)=>{if(u)u(`<p${o}>The QForm component renders a <code class="doc-token"${o}>&lt;form&gt;</code> DOM element and allows you to easily validate child form components (like `),u(p(v,{to:"/vue-components/input#Internal-validation"},{default:c((f,e,i,s)=>{if(e)e("QInput");else return[a("QInput")]}),_:1},d,o)),u(", "),u(p(v,{to:"/vue-components/select"},{default:c((f,e,i,s)=>{if(e)e("QSelect");else return[a("QSelect")]}),_:1},d,o)),u(" or your "),u(p(v,{to:"/vue-components/field"},{default:c((f,e,i,s)=>{if(e)e("QField");else return[a("QField")]}),_:1},d,o)),u(` wrapped components) that have the <strong${o}>internal validation</strong> (NOT the external one) through <code class="doc-token"${o}>rules</code> associated with them.</p>`),u(p(C,{file:"QForm"},null,d,o)),u(`<h2 id="usage" class="doc-heading doc-h2"${o}>Usage</h2><div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>WARNING</p><p${o}>Please be aware of the following:</p><ul${o}><li${o}>QForm hooks into QInput, QSelect or QField wrapped components</li><li${o}>QInput, QSelect or QField wrapped components must use the internal validation (NOT the external one).</li><li${o}>If you want to take advantage of the <code class="doc-token"${o}>reset</code> functionality, then be sure to also capture the <code class="doc-token"${o}>@reset</code> event on QForm and make its handler reset all of the wrapped components models.</li></ul></div>`),u(p(Q,{title:"Basic",file:"Basic"},null,d,o)),u(`<p${o}>In order for the user to be able to activate the <code class="doc-token"${o}>@submit</code> or <code class="doc-token"${o}>@reset</code> events on the form, create a QBtn with <code class="doc-token"${o}>type</code> set to <code class="doc-token"${o}>submit</code> or <code class="doc-token"${o}>reset</code>:</p>`),u(p(k(m),null,{default:c((f,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-btn</span> <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Submit<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>type</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>submit<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>color</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>primary<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>/&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-btn</span> <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Reset<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>type</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>reset<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>color</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>primary<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>flat</span> <span class="token attr-name"${s}>class</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>q-ml-sm<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(p(l,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Reset"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("reset"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"flat"),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-ml-sm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},d,o)),u(`<p${o}>Alternatively, you can give the QForm a Vue ref name and call the <code class="doc-token"${o}>validate</code> and <code class="doc-token"${o}>resetValidation</code> functions directly:</p>`),u(p(k(m),{tabs:["Composition API variant","Options API variant"]},{default:c((f,e,i,s)=>{if(e)e(p($,{class:"q-pa-none",name:"Composition API variant"},{default:c((w,r,y,t)=>{if(r)r(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// &lt;q-form ref=&quot;myForm&quot;&gt;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> myForm <span class="token operator"${t}>=</span> <span class="token function"${t}>ref</span><span class="token punctuation"${t}>(</span><span class="token keyword"${t}>null</span><span class="token punctuation"${t}>)</span>

  <span class="token keyword"${t}>function</span> <span class="token function"${t}>validate</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    myForm<span class="token punctuation"${t}>.</span>value<span class="token punctuation"${t}>.</span><span class="token function"${t}>validate</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>success</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token keyword"${t}>if</span> <span class="token punctuation"${t}>(</span>success<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// yay, models are correct</span>
      <span class="token punctuation"${t}>}</span>
      <span class="token keyword"${t}>else</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// oh no, user has filled in</span>
        <span class="token comment"${t}>// at least one invalid value</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>

  <span class="token comment"${t}>// to reset validations:</span>
  <span class="token keyword"${t}>function</span> <span class="token function"${t}>reset</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    myForm<span class="token punctuation"${t}>.</span>value<span class="token punctuation"${t}>.</span><span class="token function"${t}>resetValidation</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>

  <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
    myForm<span class="token punctuation"${t}>,</span>
    <span class="token comment"${t}>// ...</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),r(p(l,null,null,y,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'// <q-form ref="myForm">'),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" myForm "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"validate"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("success"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// yay, models are correct"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// oh no, user has filled in"),a(`
        `),n("span",{class:"token comment"},"// at least one invalid value"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// to reset validations:"),a(`
  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"reset"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetValidation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},i,s)),e(p($,{class:"q-pa-none",name:"Options API variant"},{default:c((w,r,y,t)=>{if(r)r(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// &lt;q-form ref=&quot;myForm&quot;&gt;</span>

<span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$refs<span class="token punctuation"${t}>.</span>myForm<span class="token punctuation"${t}>.</span><span class="token function"${t}>validate</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>success</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>if</span> <span class="token punctuation"${t}>(</span>success<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// yay, models are correct</span>
  <span class="token punctuation"${t}>}</span>
  <span class="token keyword"${t}>else</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// oh no, user has filled in</span>
    <span class="token comment"${t}>// at least one invalid value</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

<span class="token comment"${t}>// to reset validations:</span>
<span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$refs<span class="token punctuation"${t}>.</span>myForm<span class="token punctuation"${t}>.</span><span class="token function"${t}>resetValidation</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span></code></pre>`),r(p(l,null,null,y,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'// <q-form ref="myForm">'),a(`

`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myForm"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("success"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// yay, models are correct"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// oh no, user has filled in"),a(`
    `),n("span",{class:"token comment"},"// at least one invalid value"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// to reset validations:"),a(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myForm"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetValidation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(l)]}),_:1},i,s));else return[n($,{class:"q-pa-none",name:"Composition API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'// <q-form ref="myForm">'),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" myForm "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"validate"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("success"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// yay, models are correct"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// oh no, user has filled in"),a(`
        `),n("span",{class:"token comment"},"// at least one invalid value"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// to reset validations:"),a(`
  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"reset"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetValidation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n($,{class:"q-pa-none",name:"Options API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'// <q-form ref="myForm">'),a(`

`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myForm"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("success"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// yay, models are correct"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// oh no, user has filled in"),a(`
    `),n("span",{class:"token comment"},"// at least one invalid value"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// to reset validations:"),a(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myForm"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetValidation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(l)]),_:1})]}),_:1},d,o)),u(`<h2 id="turning-off-autocompletion" class="doc-heading doc-h2"${o}>Turning off Autocompletion</h2><p${o}>If you want to turn off the way that some browsers use autocorrection or spellchecking of all of the input elements of your form, you can also add these pure HTML attributes to the QForm component:</p>`),u(p(k(m),null,{default:c((f,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}>autocorrect=&quot;off&quot;
autocapitalize=&quot;off&quot;
autocomplete=&quot;off&quot;
spellcheck=&quot;false&quot;</code></pre>`),e(p(l,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,`autocorrect="off"
autocapitalize="off"
autocomplete="off"
spellcheck="false"`)]),n(l)]}),_:1},d,o)),u(`<h2 id="submitting-to-a-url-native-form-submit-" class="doc-heading doc-h2"${o}>Submitting to a URL (native form submit)</h2><p${o}>If you are using the native <code class="doc-token"${o}>action</code> and <code class="doc-token"${o}>method</code> attributes on a QForm, please remember to use the <code class="doc-token"${o}>name</code> prop on each Quasar form component, so that the sent formData to actually contain what the user has filled in.</p>`),u(p(k(m),null,{default:c((f,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-form</span> <span class="token attr-name"${s}>action</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>https://some-url.com<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>method</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>post<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-input</span> <span class="token attr-name"${s}>name</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>firstname<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>...</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- ... --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-form</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(p(l,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-form")]),a(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://some-url.com"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("post"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-input")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"..."),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- ... -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-form")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},d,o)),u(`<ul${o}><li${o}>Control the way the form is submitted by setting <code class="doc-token"${o}>action</code>, <code class="doc-token"${o}>method</code>, <code class="doc-token"${o}>enctype</code> and <code class="doc-token"${o}>target</code> attributes of QForm</li><li${o}>If a listener on <code class="doc-token"${o}>@submit</code> IS NOT present on the QForm then the form will be submitted if the validation is successful</li><li${o}>If a listener on <code class="doc-token"${o}>@submit</code> IS present on the QForm then the listener will be called if the validation is successful. In order to do a native submit in this case:</li></ul>`),u(p(k(m),null,{default:c((f,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-form</span> <span class="token attr-name"${s}>action</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>https://some-url.com<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>method</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>post<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>@submit.prevent</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>onSubmit<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-input</span> <span class="token attr-name"${s}>name</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>firstname<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>...</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- ... --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-form</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(p(l,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-form")]),a(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://some-url.com"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("post"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit.prevent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-input")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"..."),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- ... -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-form")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},d,o)),u(p(k(m),null,{default:c((f,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>methods</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>onSubmit</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>evt</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@submit - do something here&#39;</span><span class="token punctuation"${s}>,</span> evt<span class="token punctuation"${s}>)</span>
    evt<span class="token punctuation"${s}>.</span>target<span class="token punctuation"${s}>.</span><span class="token function"${s}>submit</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(p(l,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"onSubmit"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"evt"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit - do something here'"),n("span",{class:"token punctuation"},","),a(" evt"),n("span",{class:"token punctuation"},")"),a(`
    evt`),n("span",{class:"token punctuation"},"."),a("target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"submit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},d,o)),u(`<h2 id="child-communication" class="doc-heading doc-h2"${o}>Child communication</h2><p${o}>By default, all the Quasar form components communicate with the parent QForm instance. If, for some reason, you are creating your own form component (<strong${o}>that doesn’t wrap a Quasar form component</strong>), then you can make QForm aware of it by using:</p>`),u(p(k(m),{tabs:["Composition API variant","Options API variant"]},{default:c((f,e,i,s)=>{if(e)e(p($,{class:"q-pa-none",name:"Composition API variant"},{default:c((w,r,y,t)=>{if(r)r(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useFormChild <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// function validate () { ... }</span>

  <span class="token function"${t}>useFormChild</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span>
    validate<span class="token punctuation"${t}>,</span> <span class="token comment"${t}>// Function; Can be async;</span>
              <span class="token comment"${t}>// Should return a Boolean (or a Promise resolving to a Boolean)</span>
    resetValidation<span class="token punctuation"${t}>,</span>    <span class="token comment"${t}>// Optional function which resets validation</span>
    <span class="token literal-property property"${t}>requiresQForm</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span> <span class="token comment"${t}>// should it error out if no parent QForm is found?</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>}</span></code></pre>`),r(p(l,null,null,y,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useFormChild "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// function validate () { ... }"),a(`

  `),n("span",{class:"token function"},"useFormChild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    validate`),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Function; Can be async;"),a(`
              `),n("span",{class:"token comment"},"// Should return a Boolean (or a Promise resolving to a Boolean)"),a(`
    resetValidation`),n("span",{class:"token punctuation"},","),a("    "),n("span",{class:"token comment"},"// Optional function which resets validation"),a(`
    `),n("span",{class:"token literal-property property"},"requiresQForm"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// should it error out if no parent QForm is found?"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},i,s)),e(p($,{class:"q-pa-none",name:"Options API variant"},{default:c((w,r,y,t)=>{if(r)r(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> QFormChildMixin <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token comment"${t}>// some component</span>
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>mixins</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span> QFormChildMixin <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

  <span class="token literal-property property"${t}>methods</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// required! should return a Boolean</span>
    <span class="token comment"${t}>// or a Promise resolving to a Boolean</span>
    <span class="token function"${t}>validate</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;called my-comp.validate()&#39;</span><span class="token punctuation"${t}>)</span>
      <span class="token keyword"${t}>return</span> <span class="token boolean"${t}>true</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// optional function</span>
    <span class="token function"${t}>resetValidation</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// ...</span>
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// ...</span>
<span class="token punctuation"${t}>}</span></code></pre>`),r(p(l,null,null,y,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" QFormChildMixin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// some component"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(" QFormChildMixin "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// required! should return a Boolean"),a(`
    `),n("span",{class:"token comment"},"// or a Promise resolving to a Boolean"),a(`
    `),n("span",{class:"token function"},"validate"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'called my-comp.validate()'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional function"),a(`
    `),n("span",{class:"token function"},"resetValidation"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]}),_:1},i,s));else return[n($,{class:"q-pa-none",name:"Composition API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useFormChild "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// function validate () { ... }"),a(`

  `),n("span",{class:"token function"},"useFormChild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    validate`),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Function; Can be async;"),a(`
              `),n("span",{class:"token comment"},"// Should return a Boolean (or a Promise resolving to a Boolean)"),a(`
    resetValidation`),n("span",{class:"token punctuation"},","),a("    "),n("span",{class:"token comment"},"// Optional function which resets validation"),a(`
    `),n("span",{class:"token literal-property property"},"requiresQForm"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// should it error out if no parent QForm is found?"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n($,{class:"q-pa-none",name:"Options API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" QFormChildMixin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// some component"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(" QFormChildMixin "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// required! should return a Boolean"),a(`
    `),n("span",{class:"token comment"},"// or a Promise resolving to a Boolean"),a(`
    `),n("span",{class:"token function"},"validate"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'called my-comp.validate()'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional function"),a(`
    `),n("span",{class:"token function"},"resetValidation"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1})]}),_:1},d,o));else return[n("p",null,[a("The QForm component renders a "),n("code",{class:"doc-token"},"<form>"),a(" DOM element and allows you to easily validate child form components (like "),n(v,{to:"/vue-components/input#Internal-validation"},{default:c(()=>[a("QInput")]),_:1}),a(", "),n(v,{to:"/vue-components/select"},{default:c(()=>[a("QSelect")]),_:1}),a(" or your "),n(v,{to:"/vue-components/field"},{default:c(()=>[a("QField")]),_:1}),a(" wrapped components) that have the "),n("strong",null,"internal validation"),a(" (NOT the external one) through "),n("code",{class:"doc-token"},"rules"),a(" associated with them.")]),n(C,{file:"QForm"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:f=>k(g)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"Please be aware of the following:"),n("ul",null,[n("li",null,"QForm hooks into QInput, QSelect or QField wrapped components"),n("li",null,"QInput, QSelect or QField wrapped components must use the internal validation (NOT the external one)."),n("li",null,[a("If you want to take advantage of the "),n("code",{class:"doc-token"},"reset"),a(" functionality, then be sure to also capture the "),n("code",{class:"doc-token"},"@reset"),a(" event on QForm and make its handler reset all of the wrapped components models.")])])]),n(Q,{title:"Basic",file:"Basic"}),n("p",null,[a("In order for the user to be able to activate the "),n("code",{class:"doc-token"},"@submit"),a(" or "),n("code",{class:"doc-token"},"@reset"),a(" events on the form, create a QBtn with "),n("code",{class:"doc-token"},"type"),a(" set to "),n("code",{class:"doc-token"},"submit"),a(" or "),n("code",{class:"doc-token"},"reset"),a(":")]),n(k(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Reset"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("reset"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"flat"),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-ml-sm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1}),n("p",null,[a("Alternatively, you can give the QForm a Vue ref name and call the "),n("code",{class:"doc-token"},"validate"),a(" and "),n("code",{class:"doc-token"},"resetValidation"),a(" functions directly:")]),n(k(m),{tabs:["Composition API variant","Options API variant"]},{default:c(()=>[n($,{class:"q-pa-none",name:"Composition API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'// <q-form ref="myForm">'),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" myForm "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"validate"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("success"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// yay, models are correct"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// oh no, user has filled in"),a(`
        `),n("span",{class:"token comment"},"// at least one invalid value"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// to reset validations:"),a(`
  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"reset"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetValidation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    myForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n($,{class:"q-pa-none",name:"Options API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'// <q-form ref="myForm">'),a(`

`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myForm"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"success"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("success"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// yay, models are correct"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// oh no, user has filled in"),a(`
    `),n("span",{class:"token comment"},"// at least one invalid value"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// to reset validations:"),a(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myForm"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetValidation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(l)]),_:1})]),_:1}),n("h2",{id:"turning-off-autocompletion",class:"doc-heading doc-h2",onClick:f=>k(g)("turning-off-autocompletion")},"Turning off Autocompletion",8,["onClick"]),n("p",null,"If you want to turn off the way that some browsers use autocorrection or spellchecking of all of the input elements of your form, you can also add these pure HTML attributes to the QForm component:"),n(k(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`autocorrect="off"
autocapitalize="off"
autocomplete="off"
spellcheck="false"`)]),n(l)]),_:1}),n("h2",{id:"submitting-to-a-url-native-form-submit-",class:"doc-heading doc-h2",onClick:f=>k(g)("submitting-to-a-url-native-form-submit-")},"Submitting to a URL (native form submit)",8,["onClick"]),n("p",null,[a("If you are using the native "),n("code",{class:"doc-token"},"action"),a(" and "),n("code",{class:"doc-token"},"method"),a(" attributes on a QForm, please remember to use the "),n("code",{class:"doc-token"},"name"),a(" prop on each Quasar form component, so that the sent formData to actually contain what the user has filled in.")]),n(k(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-form")]),a(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://some-url.com"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("post"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-input")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"..."),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- ... -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-form")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1}),n("ul",null,[n("li",null,[a("Control the way the form is submitted by setting "),n("code",{class:"doc-token"},"action"),a(", "),n("code",{class:"doc-token"},"method"),a(", "),n("code",{class:"doc-token"},"enctype"),a(" and "),n("code",{class:"doc-token"},"target"),a(" attributes of QForm")]),n("li",null,[a("If a listener on "),n("code",{class:"doc-token"},"@submit"),a(" IS NOT present on the QForm then the form will be submitted if the validation is successful")]),n("li",null,[a("If a listener on "),n("code",{class:"doc-token"},"@submit"),a(" IS present on the QForm then the listener will be called if the validation is successful. In order to do a native submit in this case:")])]),n(k(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-form")]),a(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://some-url.com"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("post"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit.prevent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-input")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"..."),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- ... -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-form")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1}),n(k(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"onSubmit"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"evt"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit - do something here'"),n("span",{class:"token punctuation"},","),a(" evt"),n("span",{class:"token punctuation"},")"),a(`
    evt`),n("span",{class:"token punctuation"},"."),a("target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"submit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n("h2",{id:"child-communication",class:"doc-heading doc-h2",onClick:f=>k(g)("child-communication")},"Child communication",8,["onClick"]),n("p",null,[a("By default, all the Quasar form components communicate with the parent QForm instance. If, for some reason, you are creating your own form component ("),n("strong",null,"that doesn’t wrap a Quasar form component"),a("), then you can make QForm aware of it by using:")]),n(k(m),{tabs:["Composition API variant","Options API variant"]},{default:c(()=>[n($,{class:"q-pa-none",name:"Composition API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useFormChild "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// function validate () { ... }"),a(`

  `),n("span",{class:"token function"},"useFormChild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    validate`),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Function; Can be async;"),a(`
              `),n("span",{class:"token comment"},"// Should return a Boolean (or a Promise resolving to a Boolean)"),a(`
    resetValidation`),n("span",{class:"token punctuation"},","),a("    "),n("span",{class:"token comment"},"// Optional function which resets validation"),a(`
    `),n("span",{class:"token literal-property property"},"requiresQForm"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// should it error out if no parent QForm is found?"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1}),n($,{class:"q-pa-none",name:"Options API variant"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" QFormChildMixin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// some component"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(" QFormChildMixin "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// required! should return a Boolean"),a(`
    `),n("span",{class:"token comment"},"// or a Promise resolving to a Boolean"),a(`
    `),n("span",{class:"token function"},"validate"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'called my-comp.validate()'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// optional function"),a(`
    `),n("span",{class:"token function"},"resetValidation"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(l)]),_:1})]),_:1})]}),_:1},x))}}},P=b.setup;b.setup=(F,q)=>{const h=T();return(h.modules||(h.modules=new Set)).add("src/pages/vue-components/form.md"),P?P(F,q):void 0};const cn=M(b,[["__file","form.md"]]);export{cn as default};
