import{provide as x,resolveComponent as U,mergeProps as H,withCtx as c,createTextVNode as a,unref as i,createVNode as n,useSSRContext as j}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as F,a as q}from"./DocPage-DKr-0pQn.js";import{D as g}from"./DocExample-BcaABDtE.js";import{D as d}from"./DocApi-Df9ryd6x.js";import{D as O}from"./DocInstallation-DgMazQjg.js";import{D as $}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as T}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const D={__name:"dialog",__ssrInlineRender:!0,setup(C){x("_q_ex",{name:"Dialog"});const w=[{name:"Dialog",category:"Vue Components",path:"/vue-components/dialog"},{name:"Bottom Sheet",category:"Quasar Plugins",path:"/quasar-plugins/bottom-sheet"},{name:"useDialogPluginComponent",category:"Vue Composables",path:"/vue-composables/use-dialog-plugin-component"}],b=[{id:"dialog-api",title:"2. Dialog API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"built-in-component",title:"4. Built-in component"},{id:"usage",title:"4.1. Usage",sub:!0},{id:"native-attributes",title:"4.2. Native attributes",sub:!0},{id:"user-input-validation",title:"4.3. User input validation",sub:!0},{id:"progress",title:"4.4. Progress",sub:!0},{id:"using-html",title:"4.5. Using HTML",sub:!0},{id:"invoking-custom-component",title:"5. Invoking custom component"},{id:"cordova-capacitor-back-button",title:"6. Cordova/Capacitor back button"}];return(B,Q,E,P)=>{const y=U("q-tab-panel");Q(l(F,H({title:"Dialog Plugin",desc:"A Quasar plugin that provides an easy way to display a prompt, choice, confirmation or alert in the form of a dialog.",heading:"","edit-link":"quasar-plugins/dialog",toc:b,related:w},P),{default:c((A,e,k,o)=>{if(e)e(`<p${o}>Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).</p><p${o}>From a UI perspective, you can think of Dialogs as a type of floating modal, which covers only a portion of the screen. This means Dialogs should only be used for quick user actions.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>Dialogs can also be used as a component in your Vue file templates (for complex use-cases, like specific form components, selectable options, etc.). For this, go to `),e(l(q,{to:"/vue-components/dialog"},{default:c((r,p,m,t)=>{if(p)p("QDialog");else return[a("QDialog")]}),_:1},k,o)),e(` page.</p></div><p${o}>The advantage of using Dialogs as Quasar Plugins as opposed to QDialog component is that the plugin can also be called from outside of Vue space and doesn’t require you to manage their templates. But as a result, their customization cannot be compared to their component counterpart.</p><p${o}>However, <strong${o}>you can also supply a component for the Dialog Plugin to render</strong> (see the “Invoking custom component” section) which is a great way to avoid cluttering your Vue templates with inline dialogs (and it will also help you better organize your project files and also reuse dialogs).</p><p${o}>With the QDialog plugin, you can programmatically build three types of dialogs with the following form content:</p><ol${o}><li${o}>A prompt dialog - asking the user to fill in some sort of data in an input field.</li><li${o}>A set of options for the user to select from using either radio buttons or toggles (singular selection only) or check boxes (for multiple selections).</li><li${o}>A simple confirmation dialog, where the user can cancel or give their “ok” for a particular action or input.</li></ol><p${o}>In order to create #1, the prompting input form, you have the <code class="doc-token"${o}>prompt</code> property within the <code class="doc-token"${o}>opts</code> object.</p><p${o}>In order to create #2, the options selection form, you have the <code class="doc-token"${o}>options</code> property within the <code class="doc-token"${o}>opts</code> object.</p>`),e(l(d,{file:"Dialog"},null,k,o)),e(l(O,{plugins:"Dialog"},null,k,o)),e(`<h2 id="built-in-component" class="doc-heading doc-h2"${o}>Built-in component</h2>`),e(l(i($),{title:"Outside of a Vue file"},{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Dialog <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token punctuation"${t}>(</span>Object<span class="token punctuation"${t}>)</span> Dialog<span class="token punctuation"${t}>.</span><span class="token function"${t}>create</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token operator"${t}>...</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

<span class="token comment"${t}>// inside of a Vue file</span>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useQuasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> $q <span class="token operator"${t}>=</span> <span class="token function"${t}>useQuasar</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
  $q<span class="token punctuation"${t}>.</span><span class="token function"${t}>dialog</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token operator"${t}>...</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span> <span class="token comment"${t}>// returns Object</span>
<span class="token punctuation"${t}>}</span></code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dialog "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token punctuation"},"("),a("Object"),n("span",{class:"token punctuation"},")"),a(" Dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// inside of a Vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// returns Object"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},k,o)),e(`<p${o}>Please check the API card to see what the returned Object is.</p><h3 id="usage" class="doc-heading doc-h3"${o}>Usage</h3><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>For all the examples below, also see the browser console while you check them out.</p></div><div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>WARNING</p><p${o}>This is not an exhaustive list of what you can do with Dialogs as Quasar Plugins. For further exploration check out the API section.</p></div>`),e(l(g,{title:"Basic",file:"Basic"},null,k,o)),e(l(g,{title:"Force dark mode",file:"Dark"},null,k,o)),e(l(g,{title:"Radios, Checkboxes, Toggles",file:"Pickers"},null,k,o)),e(l(g,{title:"Other options",file:"OtherOptions"},null,k,o)),e(`<h3 id="native-attributes" class="doc-heading doc-h3"${o}>Native attributes</h3><p${o}>You can also supply native HTML attributes to the inner QInput or QOptionGroup components, like in the example below.</p>`),e(l(g,{title:"Using native attributes",file:"NativeAttributes"},null,k,o)),e(`<h3 id="user-input-validation" class="doc-heading doc-h3"${o}>User input validation</h3><p${o}>There is a basic validation system that you can use so that the user won’t be able to submit the dialog (click/tap on “OK” or press <kbd${o}>ENTER</kbd>) until the expected values are filled in.</p>`),e(l(g,{title:"Prompt with validation",file:"ValidationPrompt"},null,k,o)),e(l(g,{title:"Options with validation",file:"ValidationOptions"},null,k,o)),e(`<h3 id="progress" class="doc-heading doc-h3"${o}>Progress</h3>`),e(l(g,{title:"Showing progress",file:"Progress"},null,k,o)),e(`<h3 id="using-html" class="doc-heading doc-h3"${o}>Using HTML</h3><p${o}>You can use HTML on title and message if you specify the <code class="doc-token"${o}>html: true</code> prop. <strong${o}>Please note that this can lead to XSS attacks</strong>, so make sure that you sanitize the message by yourself.</p>`),e(l(g,{title:"Unsafe HTML message",file:"UnsafeHtml"},null,k,o)),e(`<h2 id="invoking-custom-component" class="doc-heading doc-h2"${o}>Invoking custom component</h2><p${o}>You can also invoke your own custom component rather than relying on the default one that the Dialog plugin comes with out of the box. But in this case you will be responsible for handling everything (including your own component props).</p><p${o}>This feature is actually the “bread and butter” of the Dialog plugin. It helps you keep your other vue components html templates clean by separating and reusing your dialog’s functionality with ease.</p>`),e(l(i($),null,{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useQuasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>import</span> CustomComponent <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;..path.to.component..&#39;</span>

<span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> $q <span class="token operator"${t}>=</span> <span class="token function"${t}>useQuasar</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>

  $q<span class="token punctuation"${t}>.</span><span class="token function"${t}>dialog</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>component</span><span class="token operator"${t}>:</span> CustomComponent<span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// props forwarded to your custom component</span>
    <span class="token literal-property property"${t}>componentProps</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
      <span class="token literal-property property"${t}>text</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;something&#39;</span><span class="token punctuation"${t}>,</span>
      <span class="token comment"${t}>// ...more..props...</span>
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>onOk</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
    console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;OK&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>onCancel</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
    console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;Cancel&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>onDismiss</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
    console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;Called on OK or Cancel&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>}</span></code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" CustomComponent "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'..path.to.component..'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" CustomComponent"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// props forwarded to your custom component"),a(`
    `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'something'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// ...more..props..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onDismiss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Called on OK or Cancel'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},k,o)),e(`<p${o}>The equivalent of the above with Options API is by directly using <code class="doc-token"${o}>this.$q.dialog({ ... })</code>.</p><div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>WARNING</p><p${o}>Your custom component however must follow the interface described below in order to perfectly hook into the Dialog plugin. <strong${o}>Notice the “REQUIRED” comments</strong> and take it as is – just a bare-bone example, nothing more.</p></div><h4 id="sfc-with-script-setup-and-composition-api-variant" class="doc-heading doc-h4"${o}>SFC with script setup (and Composition API) variant</h4><p${o}>We will be using the `),e(l(q,{to:"/vue-composables/use-dialog-plugin-component"},{default:c((r,p,m,t)=>{if(p)p("useDialogPluginComponent");else return[a("useDialogPluginComponent")]}),_:1},k,o)),e(" composable.</p>"),e(l(i($),null,{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-dialog</span> <span class="token attr-name"${t}>ref</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>dialogRef<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@hide</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onDialogHide<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-card</span> <span class="token attr-name"${t}>class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>q-dialog-plugin<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
      <span class="token comment"${t}>&lt;!--
        ...content
        ... use q-card-section for it?
      --&gt;</span>

      <span class="token comment"${t}>&lt;!-- buttons example --&gt;</span>
      <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-card-actions</span> <span class="token attr-name"${t}>align</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>right<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
        <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span> <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>primary<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>OK<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@click</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onOKClick<span class="token punctuation"${t}>&quot;</span></span> <span class="token punctuation"${t}>/&gt;</span></span>
        <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span> <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>primary<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>Cancel<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@click</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onDialogCancel<span class="token punctuation"${t}>&quot;</span></span> <span class="token punctuation"${t}>/&gt;</span></span>
      <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-card-actions</span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-card</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-dialog</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span> <span class="token attr-name"${t}>setup</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useDialogPluginComponent <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token keyword"${t}>const</span> props <span class="token operator"${t}>=</span> <span class="token function"${t}>defineProps</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// ...your custom props</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

<span class="token function"${t}>defineEmits</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>[</span>
  <span class="token comment"${t}>// REQUIRED; need to specify some events that your</span>
  <span class="token comment"${t}>// component will emit through useDialogPluginComponent()</span>
  <span class="token operator"${t}>...</span>useDialogPluginComponent<span class="token punctuation"${t}>.</span>emits
<span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>)</span>

<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> dialogRef<span class="token punctuation"${t}>,</span> onDialogHide<span class="token punctuation"${t}>,</span> onDialogOK<span class="token punctuation"${t}>,</span> onDialogCancel <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> <span class="token function"${t}>useDialogPluginComponent</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// dialogRef      - Vue ref to be applied to QDialog</span>
<span class="token comment"${t}>// onDialogHide   - Function to be used as handler for @hide on QDialog</span>
<span class="token comment"${t}>// onDialogOK     - Function to call to settle dialog with &quot;ok&quot; outcome</span>
<span class="token comment"${t}>//                    example: onDialogOK() - no payload</span>
<span class="token comment"${t}>//                    example: onDialogOK({ /*...*/ }) - with payload</span>
<span class="token comment"${t}>// onDialogCancel - Function to call to settle dialog with &quot;cancel&quot; outcome</span>

<span class="token comment"${t}>// this is part of our example (so not required)</span>
<span class="token keyword"${t}>function</span> <span class="token function"${t}>onOKClick</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// on OK, it is REQUIRED to</span>
  <span class="token comment"${t}>// call onDialogOK (with optional payload)</span>
  <span class="token function"${t}>onDialogOK</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
  <span class="token comment"${t}>// or with payload: onDialogOK({ ... })</span>
  <span class="token comment"${t}>// ...and it will also hide the dialog automatically</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialogRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),a(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card-actions")]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("OK"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOKClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogCancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card-actions")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-dialog")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" props "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"defineProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...your custom props"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token function"},"defineEmits"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),a(`
  `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),a(`
  `),n("span",{class:"token operator"},"..."),a("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),a(`emits
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
`),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
`),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
`),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
`),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*...*/ }) - with payload"),a(`
`),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

`),n("span",{class:"token comment"},"// this is part of our example (so not required)"),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
  `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),a(`
  `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),a(`
  `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},k,o)),e(`<p${o}>If you want to define <code class="doc-token"${o}>emits</code> in Object form, then (requires Quasar v2.2.5+):</p>`),e(l(i($),null,{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}>defineEmits({
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
})</code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,`defineEmits({
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
})`)]),n(u)]}),_:1},k,o)),e(`<h4 id="composition-api-variant" class="doc-heading doc-h4"${o}>Composition API variant</h4><p${o}>We will be using the `),e(l(q,{to:"/vue-composables/use-dialog-plugin-component"},{default:c((r,p,m,t)=>{if(p)p("useDialogPluginComponent");else return[a("useDialogPluginComponent")]}),_:1},k,o)),e(" composable.</p>"),e(l(i($),null,{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
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
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},k,o)),e(`<p${o}>If you want to define <code class="doc-token"${o}>emits</code> in Object form, then (requires Quasar v2.2.5+):</p>`),e(l(i($),null,{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}>emits: {
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
}</code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,`emits: {
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
}`)]),n(u)]}),_:1},k,o)),e(`<h4 id="options-api-variant" class="doc-heading doc-h4"${o}>Options API variant</h4>`),e(l(i($),null,{default:c((r,p,m,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-dialog</span> <span class="token attr-name"${t}>ref</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>dialog<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@hide</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>onDialogHide<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
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
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>props</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// ...your custom props</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token literal-property property"${t}>emits</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
    <span class="token comment"${t}>// REQUIRED</span>
    <span class="token string"${t}>&#39;ok&#39;</span><span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;hide&#39;</span>
  <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

  <span class="token literal-property property"${t}>methods</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// following method is REQUIRED</span>
    <span class="token comment"${t}>// (don&#39;t change its name --&gt; &quot;show&quot;)</span>
    <span class="token function"${t}>show</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$refs<span class="token punctuation"${t}>.</span>dialog<span class="token punctuation"${t}>.</span><span class="token function"${t}>show</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// following method is REQUIRED</span>
    <span class="token comment"${t}>// (don&#39;t change its name --&gt; &quot;hide&quot;)</span>
    <span class="token function"${t}>hide</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>$refs<span class="token punctuation"${t}>.</span>dialog<span class="token punctuation"${t}>.</span><span class="token function"${t}>hide</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

    <span class="token function"${t}>onDialogHide</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// required to be emitted</span>
      <span class="token comment"${t}>// when QDialog emits &quot;hide&quot; event</span>
      <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>$emit</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;hide&#39;</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

    <span class="token function"${t}>onOKClick</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// on OK, it is REQUIRED to</span>
      <span class="token comment"${t}>// emit &quot;ok&quot; event (with optional payload)</span>
      <span class="token comment"${t}>// before hiding the QDialog</span>
      <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>$emit</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;ok&#39;</span><span class="token punctuation"${t}>)</span>
      <span class="token comment"${t}>// or with payload: this.$emit(&#39;ok&#39;, { ... })</span>

      <span class="token comment"${t}>// then hiding dialog</span>
      <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>hide</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

    <span class="token function"${t}>onCancelClick</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// we just need to hide the dialog</span>
      <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>hide</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),p(l(u,null,null,m,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialog"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// REQUIRED"),a(`
    `),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hide'"),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// following method is REQUIRED"),a(`
    `),n("span",{class:"token comment"},`// (don't change its name --> "show")`),a(`
    `),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// following method is REQUIRED"),a(`
    `),n("span",{class:"token comment"},`// (don't change its name --> "hide")`),a(`
    `),n("span",{class:"token function"},"hide"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token function"},"onDialogHide"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// required to be emitted"),a(`
      `),n("span",{class:"token comment"},'// when QDialog emits "hide" event'),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hide'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
      `),n("span",{class:"token comment"},'// emit "ok" event (with optional payload)'),a(`
      `),n("span",{class:"token comment"},"// before hiding the QDialog"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token comment"},"// or with payload: this.$emit('ok', { ... })"),a(`

      `),n("span",{class:"token comment"},"// then hiding dialog"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token function"},"onCancelClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we just need to hide the dialog"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},k,o)),e(`<h2 id="cordova-capacitor-back-button" class="doc-heading doc-h2"${o}>Cordova/Capacitor back button</h2><p${o}>Quasar handles the back button for you by default so it can hide any opened Dialogs instead of the default behavior which is to return to the previous page (which is not a nice user experience).</p><p${o}>However, should you wish to disable this behavior, edit your <code class="doc-token"${o}>/quasar.config</code> file:</p>`),e(l(i($),{tabs:["For Capacitor","For Cordova"]},{default:c((r,p,m,t)=>{if(p)p(l(y,{class:"q-pa-none",name:"For Capacitor"},{default:c((K,f,v,s)=>{if(f)f(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// quasar.config file</span>
<span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>config</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>capacitor</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${s}>backButtonExit</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token operator"${s}>/</span><span class="token string"${s}>&#39;*&#39;</span><span class="token operator"${s}>/</span><span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;/login&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/home&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/my-page&#39;</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

        <span class="token comment"${s}>// On the other hand, the following completely</span>
        <span class="token comment"${s}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${s}>backButton</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),f(l(u,null,null,v,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},m,t)),p(l(y,{class:"q-pa-none",name:"For Cordova"},{default:c((K,f,v,s)=>{if(f)f(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// quasar.config file</span>
<span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>config</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>cordova</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${s}>backButtonExit</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token operator"${s}>/</span><span class="token string"${s}>&#39;*&#39;</span><span class="token operator"${s}>/</span><span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;/login&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/home&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/my-page&#39;</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

        <span class="token comment"${s}>// On the other hand, the following completely</span>
        <span class="token comment"${s}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${s}>backButton</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),f(l(u,null,null,v,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},m,t));else return[n(y,{class:"q-pa-none",name:"For Capacitor"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n(y,{class:"q-pa-none",name:"For Cordova"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1})]}),_:1},k,o));else return[n("p",null,"Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions)."),n("p",null,"From a UI perspective, you can think of Dialogs as a type of floating modal, which covers only a portion of the screen. This means Dialogs should only be used for quick user actions."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Dialogs can also be used as a component in your Vue file templates (for complex use-cases, like specific form components, selectable options, etc.). For this, go to "),n(q,{to:"/vue-components/dialog"},{default:c(()=>[a("QDialog")]),_:1}),a(" page.")])]),n("p",null,"The advantage of using Dialogs as Quasar Plugins as opposed to QDialog component is that the plugin can also be called from outside of Vue space and doesn’t require you to manage their templates. But as a result, their customization cannot be compared to their component counterpart."),n("p",null,[a("However, "),n("strong",null,"you can also supply a component for the Dialog Plugin to render"),a(" (see the “Invoking custom component” section) which is a great way to avoid cluttering your Vue templates with inline dialogs (and it will also help you better organize your project files and also reuse dialogs).")]),n("p",null,"With the QDialog plugin, you can programmatically build three types of dialogs with the following form content:"),n("ol",null,[n("li",null,"A prompt dialog - asking the user to fill in some sort of data in an input field."),n("li",null,"A set of options for the user to select from using either radio buttons or toggles (singular selection only) or check boxes (for multiple selections)."),n("li",null,"A simple confirmation dialog, where the user can cancel or give their “ok” for a particular action or input.")]),n("p",null,[a("In order to create #1, the prompting input form, you have the "),n("code",{class:"doc-token"},"prompt"),a(" property within the "),n("code",{class:"doc-token"},"opts"),a(" object.")]),n("p",null,[a("In order to create #2, the options selection form, you have the "),n("code",{class:"doc-token"},"options"),a(" property within the "),n("code",{class:"doc-token"},"opts"),a(" object.")]),n(d,{file:"Dialog"}),n(O,{plugins:"Dialog"}),n("h2",{id:"built-in-component",class:"doc-heading doc-h2",onClick:r=>i(h)("built-in-component")},"Built-in component",8,["onClick"]),n(i($),{title:"Outside of a Vue file"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dialog "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token punctuation"},"("),a("Object"),n("span",{class:"token punctuation"},")"),a(" Dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// inside of a Vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token operator"},"..."),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// returns Object"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,"Please check the API card to see what the returned Object is."),n("h3",{id:"usage",class:"doc-heading doc-h3",onClick:r=>i(h)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"For all the examples below, also see the browser console while you check them out.")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"This is not an exhaustive list of what you can do with Dialogs as Quasar Plugins. For further exploration check out the API section.")]),n(g,{title:"Basic",file:"Basic"}),n(g,{title:"Force dark mode",file:"Dark"}),n(g,{title:"Radios, Checkboxes, Toggles",file:"Pickers"}),n(g,{title:"Other options",file:"OtherOptions"}),n("h3",{id:"native-attributes",class:"doc-heading doc-h3",onClick:r=>i(h)("native-attributes")},"Native attributes",8,["onClick"]),n("p",null,"You can also supply native HTML attributes to the inner QInput or QOptionGroup components, like in the example below."),n(g,{title:"Using native attributes",file:"NativeAttributes"}),n("h3",{id:"user-input-validation",class:"doc-heading doc-h3",onClick:r=>i(h)("user-input-validation")},"User input validation",8,["onClick"]),n("p",null,[a("There is a basic validation system that you can use so that the user won’t be able to submit the dialog (click/tap on “OK” or press "),n("kbd",null,"ENTER"),a(") until the expected values are filled in.")]),n(g,{title:"Prompt with validation",file:"ValidationPrompt"}),n(g,{title:"Options with validation",file:"ValidationOptions"}),n("h3",{id:"progress",class:"doc-heading doc-h3",onClick:r=>i(h)("progress")},"Progress",8,["onClick"]),n(g,{title:"Showing progress",file:"Progress"}),n("h3",{id:"using-html",class:"doc-heading doc-h3",onClick:r=>i(h)("using-html")},"Using HTML",8,["onClick"]),n("p",null,[a("You can use HTML on title and message if you specify the "),n("code",{class:"doc-token"},"html: true"),a(" prop. "),n("strong",null,"Please note that this can lead to XSS attacks"),a(", so make sure that you sanitize the message by yourself.")]),n(g,{title:"Unsafe HTML message",file:"UnsafeHtml"}),n("h2",{id:"invoking-custom-component",class:"doc-heading doc-h2",onClick:r=>i(h)("invoking-custom-component")},"Invoking custom component",8,["onClick"]),n("p",null,"You can also invoke your own custom component rather than relying on the default one that the Dialog plugin comes with out of the box. But in this case you will be responsible for handling everything (including your own component props)."),n("p",null,"This feature is actually the “bread and butter” of the Dialog plugin. It helps you keep your other vue components html templates clean by separating and reusing your dialog’s functionality with ease."),n(i($),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" CustomComponent "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'..path.to.component..'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" CustomComponent"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// props forwarded to your custom component"),a(`
    `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'something'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// ...more..props..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onDismiss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Called on OK or Cancel'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,[a("The equivalent of the above with Options API is by directly using "),n("code",{class:"doc-token"},"this.$q.dialog({ ... })"),a(".")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Your custom component however must follow the interface described below in order to perfectly hook into the Dialog plugin. "),n("strong",null,"Notice the “REQUIRED” comments"),a(" and take it as is – just a bare-bone example, nothing more.")])]),n("h4",{id:"sfc-with-script-setup-and-composition-api-variant",class:"doc-heading doc-h4",onClick:r=>i(h)("sfc-with-script-setup-and-composition-api-variant")},"SFC with script setup (and Composition API) variant",8,["onClick"]),n("p",null,[a("We will be using the "),n(q,{to:"/vue-composables/use-dialog-plugin-component"},{default:c(()=>[a("useDialogPluginComponent")]),_:1}),a(" composable.")]),n(i($),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialogRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),a(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card-actions")]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("OK"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOKClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogCancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card-actions")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-dialog")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" props "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"defineProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...your custom props"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token function"},"defineEmits"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),a(`
  `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),a(`
  `),n("span",{class:"token operator"},"..."),a("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),a(`emits
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
`),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
`),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
`),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
`),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*...*/ }) - with payload"),a(`
`),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

`),n("span",{class:"token comment"},"// this is part of our example (so not required)"),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
  `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),a(`
  `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),a(`
  `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1}),n("p",null,[a("If you want to define "),n("code",{class:"doc-token"},"emits"),a(" in Object form, then (requires Quasar v2.2.5+):")]),n(i($),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`defineEmits({
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
})`)]),n(u)]),_:1}),n("h4",{id:"composition-api-variant",class:"doc-heading doc-h4",onClick:r=>i(h)("composition-api-variant")},"Composition API variant",8,["onClick"]),n("p",null,[a("We will be using the "),n(q,{to:"/vue-composables/use-dialog-plugin-component"},{default:c(()=>[a("useDialogPluginComponent")]),_:1}),a(" composable.")]),n(i($),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1}),n("p",null,[a("If you want to define "),n("code",{class:"doc-token"},"emits"),a(" in Object form, then (requires Quasar v2.2.5+):")]),n(i($),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`emits: {
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
}`)]),n(u)]),_:1}),n("h4",{id:"options-api-variant",class:"doc-heading doc-h4",onClick:r=>i(h)("options-api-variant")},"Options API variant",8,["onClick"]),n(i($),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialog"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// REQUIRED"),a(`
    `),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hide'"),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// following method is REQUIRED"),a(`
    `),n("span",{class:"token comment"},`// (don't change its name --> "show")`),a(`
    `),n("span",{class:"token function"},"show"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// following method is REQUIRED"),a(`
    `),n("span",{class:"token comment"},`// (don't change its name --> "hide")`),a(`
    `),n("span",{class:"token function"},"hide"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token function"},"onDialogHide"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// required to be emitted"),a(`
      `),n("span",{class:"token comment"},'// when QDialog emits "hide" event'),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hide'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
      `),n("span",{class:"token comment"},'// emit "ok" event (with optional payload)'),a(`
      `),n("span",{class:"token comment"},"// before hiding the QDialog"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token comment"},"// or with payload: this.$emit('ok', { ... })"),a(`

      `),n("span",{class:"token comment"},"// then hiding dialog"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token function"},"onCancelClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we just need to hide the dialog"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1}),n("h2",{id:"cordova-capacitor-back-button",class:"doc-heading doc-h2",onClick:r=>i(h)("cordova-capacitor-back-button")},"Cordova/Capacitor back button",8,["onClick"]),n("p",null,"Quasar handles the back button for you by default so it can hide any opened Dialogs instead of the default behavior which is to return to the previous page (which is not a nice user experience)."),n("p",null,[a("However, should you wish to disable this behavior, edit your "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(i($),{tabs:["For Capacitor","For Cordova"]},{default:c(()=>[n(y,{class:"q-pa-none",name:"For Capacitor"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n(y,{class:"q-pa-none",name:"For Cordova"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1})]),_:1})]}),_:1},E))}}},R=D.setup;D.setup=(C,w)=>{const b=j();return(b.modules||(b.modules=new Set)).add("src/pages/quasar-plugins/dialog.md"),R?R(C,w):void 0};const cn=T(D,[["__file","dialog.md"]]);export{cn as default};
