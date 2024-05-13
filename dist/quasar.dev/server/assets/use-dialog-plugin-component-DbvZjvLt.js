import{mergeProps as v,withCtx as l,createTextVNode as a,unref as p,createVNode as n,useSSRContext as R}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as K,a as y}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as O}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const D={__name:"use-dialog-plugin-component",__ssrInlineRender:!0,setup(h){const g=[{name:"Dialog",category:"Quasar Plugins",path:"/quasar-plugins/dialog"}],i=[{id:"syntax",title:"2. Syntax"},{id:"full-example",title:"3. Full example"}];return(b,w,C,d)=>{w(c(K,v({title:"useDialogPluginComponent composable",desc:"What is Quasar's useDialogPluginComponent() composable and how you can use it",heading:"","edit-link":"vue-composables/use-dialog-plugin-component",toc:i,related:g},d),{default:l((x,e,$,o)=>{if(e)e(`<div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>The useDialogPluginComponent composable is part of `),e(c(y,{to:"/quasar-plugins/dialog#invoking-custom-component"},{default:l((k,s,r,t)=>{if(s)s("Quasar Dialog Plugin");else return[a("Quasar Dialog Plugin")]}),_:1},$,o)),e(` (Invoking custom component). If you haven’t dug into it by now, please have a first read there.</p></div><p${o}>This composable is to be used on the custom components which a Dialog plugin is invoked with. It will bootstrap all the necessary communication of the component with the plugin.</p><h2 id="syntax" class="doc-heading doc-h2"${o}>Syntax</h2>`),e(c(p(m),null,{default:l((k,s,r,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useDialogPluginComponent <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> dialogRef<span class="token punctuation"${t}>,</span> onDialogHide<span class="token punctuation"${t}>,</span> onDialogOK<span class="token punctuation"${t}>,</span> onDialogCancel <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> <span class="token function"${t}>useDialogPluginComponent</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// dialogRef      - Vue ref to be applied to QDialog</span>
  <span class="token comment"${t}>// onDialogHide   - Function to be used as handler for @hide on QDialog</span>
  <span class="token comment"${t}>// onDialogOK     - Function to call to settle dialog with &quot;ok&quot; outcome</span>
  <span class="token comment"${t}>//                    example: onDialogOK() - no payload</span>
  <span class="token comment"${t}>//                    example: onDialogOK({ /*.../* }) - with payload</span>
  <span class="token comment"${t}>// onDialogCancel - Function to call to settle dialog with &quot;cancel&quot; outcome</span>

  <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
    dialogRef<span class="token punctuation"${t}>,</span>
    onDialogHide
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),s(c(u,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
  `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
  `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
  `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
  `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),a(`
  `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    dialogRef`),n("span",{class:"token punctuation"},","),a(`
    onDialogHide
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},$,o)),e(`<h2 id="full-example" class="doc-heading doc-h2"${o}>Full example</h2>`),e(c(p(m),null,{default:l((k,s,r,t)=>{if(s)s(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token comment"${t}>&lt;!-- notice dialogRef here --&gt;</span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-dialog</span> <span class="token attr-name"${t}>ref</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>dialogRef<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@hide</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onDialogHide<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-card</span> <span class="token attr-name"${t}>class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>q-dialog-plugin<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
      <span class="token comment"${t}>&lt;!--
        ...content
        ... use q-card-section for it?
      --&gt;</span>

      <span class="token comment"${t}>&lt;!-- buttons example --&gt;</span>
      <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-card-actions</span> <span class="token attr-name"${t}>align</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>right<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
        <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span> <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>primary<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>OK<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@click</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onOKClick<span class="token punctuation"${t}>&quot;</span></span> <span class="token punctuation"${t}>/&gt;</span></span>
        <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span> <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>primary<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>Cancel<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@click</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onCancelClick<span class="token punctuation"${t}>&quot;</span></span> <span class="token punctuation"${t}>/&gt;</span></span>
      <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-card-actions</span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-card</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-dialog</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useDialogPluginComponent <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>props</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// ...your custom props</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token literal-property property"${t}>emits</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
    <span class="token comment"${t}>// REQUIRED; need to specify some events that your</span>
    <span class="token comment"${t}>// component will emit through useDialogPluginComponent()</span>
    <span class="token operator"${t}>...</span>useDialogPluginComponent<span class="token punctuation"${t}>.</span>emits
  <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// REQUIRED; must be called inside of setup()</span>
    <span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> dialogRef<span class="token punctuation"${t}>,</span> onDialogHide<span class="token punctuation"${t}>,</span> onDialogOK<span class="token punctuation"${t}>,</span> onDialogCancel <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> <span class="token function"${t}>useDialogPluginComponent</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token comment"${t}>// dialogRef      - Vue ref to be applied to QDialog</span>
    <span class="token comment"${t}>// onDialogHide   - Function to be used as handler for @hide on QDialog</span>
    <span class="token comment"${t}>// onDialogOK     - Function to call to settle dialog with &quot;ok&quot; outcome</span>
    <span class="token comment"${t}>//                    example: onDialogOK() - no payload</span>
    <span class="token comment"${t}>//                    example: onDialogOK({ /*.../* }) - with payload</span>
    <span class="token comment"${t}>// onDialogCancel - Function to call to settle dialog with &quot;cancel&quot; outcome</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// This is REQUIRED;</span>
      <span class="token comment"${t}>// Need to inject these (from useDialogPluginComponent() call)</span>
      <span class="token comment"${t}>// into the vue scope for the vue html template</span>
      dialogRef<span class="token punctuation"${t}>,</span>
      onDialogHide<span class="token punctuation"${t}>,</span>

      <span class="token comment"${t}>// other methods that we used in our vue html template;</span>
      <span class="token comment"${t}>// these are part of our example (so not required)</span>
      <span class="token function"${t}>onOKClick</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// on OK, it is REQUIRED to</span>
        <span class="token comment"${t}>// call onDialogOK (with optional payload)</span>
        <span class="token function"${t}>onDialogOK</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
        <span class="token comment"${t}>// or with payload: onDialogOK({ ... })</span>
        <span class="token comment"${t}>// ...and it will also hide the dialog automatically</span>
      <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

      <span class="token comment"${t}>// we can passthrough onDialogCancel directly</span>
      <span class="token literal-property property"${t}>onCancelClick</span><span class="token operator"${t}>:</span> onDialogCancel
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),s(c(u,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- notice dialogRef here -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialogRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),a(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card-actions")]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("OK"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOKClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCancelClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card-actions")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-dialog")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),a(`
    `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),a(`
    `),n("span",{class:"token operator"},"..."),a("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),a(`emits
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// REQUIRED; must be called inside of setup()"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
    `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
    `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),a(`
    `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// This is REQUIRED;"),a(`
      `),n("span",{class:"token comment"},"// Need to inject these (from useDialogPluginComponent() call)"),a(`
      `),n("span",{class:"token comment"},"// into the vue scope for the vue html template"),a(`
      dialogRef`),n("span",{class:"token punctuation"},","),a(`
      onDialogHide`),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// other methods that we used in our vue html template;"),a(`
      `),n("span",{class:"token comment"},"// these are part of our example (so not required)"),a(`
      `),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
        `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),a(`
        `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),a(`
        `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// we can passthrough onDialogCancel directly"),a(`
      `),n("span",{class:"token literal-property property"},"onCancelClick"),n("span",{class:"token operator"},":"),a(` onDialogCancel
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},$,o));else return[n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("The useDialogPluginComponent composable is part of "),n(y,{to:"/quasar-plugins/dialog#invoking-custom-component"},{default:l(()=>[a("Quasar Dialog Plugin")]),_:1}),a(" (Invoking custom component). If you haven’t dug into it by now, please have a first read there.")])]),n("p",null,"This composable is to be used on the custom components which a Dialog plugin is invoked with. It will bootstrap all the necessary communication of the component with the plugin."),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:k=>p(f)("syntax")},"Syntax",8,["onClick"]),n(p(m),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
  `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
  `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
  `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
  `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),a(`
  `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    dialogRef`),n("span",{class:"token punctuation"},","),a(`
    onDialogHide
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("h2",{id:"full-example",class:"doc-heading doc-h2",onClick:k=>p(f)("full-example")},"Full example",8,["onClick"]),n(p(m),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- notice dialogRef here -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialogRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),a(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card-actions")]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("OK"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOKClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCancelClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card-actions")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-dialog")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),a(`
    `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),a(`
    `),n("span",{class:"token operator"},"..."),a("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),a(`emits
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// REQUIRED; must be called inside of setup()"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
    `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
    `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),a(`
    `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// This is REQUIRED;"),a(`
      `),n("span",{class:"token comment"},"// Need to inject these (from useDialogPluginComponent() call)"),a(`
      `),n("span",{class:"token comment"},"// into the vue scope for the vue html template"),a(`
      dialogRef`),n("span",{class:"token punctuation"},","),a(`
      onDialogHide`),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// other methods that we used in our vue html template;"),a(`
      `),n("span",{class:"token comment"},"// these are part of our example (so not required)"),a(`
      `),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
        `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),a(`
        `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),a(`
        `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// we can passthrough onDialogCancel directly"),a(`
      `),n("span",{class:"token literal-property property"},"onCancelClick"),n("span",{class:"token operator"},":"),a(` onDialogCancel
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1})]}),_:1},C))}}},q=D.setup;D.setup=(h,g)=>{const i=R();return(i.modules||(i.modules=new Set)).add("src/pages/vue-composables/use-dialog-plugin-component.md"),q?q(h,g):void 0};const z=O(D,[["__file","use-dialog-plugin-component.md"]]);export{z as default};
