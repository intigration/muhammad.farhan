import{provide as z,resolveComponent as D,mergeProps as x,withCtx as k,unref as i,createVNode as n,createTextVNode as a,useSSRContext as G}from"vue";import{ssrRenderComponent as e}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as Q}from"./DocPage-DKr-0pQn.js";import{D as p}from"./DocExample-BcaABDtE.js";import{D as L}from"./DocApi-Df9ryd6x.js";import{D as b}from"./DocInstallation-DgMazQjg.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as W}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"loading",__ssrInlineRender:!0,setup($){z("_q_ex",{name:"Loading"});const y=[{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress"},{name:"Circular Progress",category:"Vue Components",path:"/vue-components/circular-progress"},{name:"Inner Loading",category:"Vue Components",path:"/vue-components/inner-loading"},{name:"Spinners",category:"Vue Components",path:"/vue-components/spinners"},{name:"Skeleton",category:"Vue Components",path:"/vue-components/skeleton"},{name:"Loading Bar",category:"Quasar Plugins",path:"/quasar-plugins/loading-bar"},{name:"Ajax Bar",category:"Vue Components",path:"/vue-components/ajax-bar"}],d=[{id:"loading-api",title:"2. Loading API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"usage",title:"4. Usage"},{id:"default-options",title:"4.1. Default options",sub:!0},{id:"customization",title:"4.2. Customization",sub:!0},{id:"content-sanitization",title:"4.3. Content sanitization",sub:!0},{id:"multiple-groups-in-parallel",title:"4.4. Multiple groups in parallel",sub:!0},{id:"setting-up-defaults",title:"4.5. Setting Up Defaults",sub:!0}];return(P,S,C,q)=>{const w=D("q-badge");S(e(Q,x({title:"Loading Plugin",desc:"A Quasar plugin which can display a loading state for your app through an overlay with a spinner and a message.",heading:"","edit-link":"quasar-plugins/loading",toc:d,related:y},q),{default:k((V,o,l,t)=>{if(o)o(`<p${t}>Loading is a feature that you can use to display an overlay with a spinner on top of your App’s content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.</p>`),o(e(L,{file:"Loading"},null,l,t)),o(e(b,{plugins:"Loading",config:"loading"},null,l,t)),o(`<h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><p${t}>Loading uses a delay (500ms) to display itself so that quick operations won’t make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.</p><p${t}>Inside a Vue component:</p>`),o(e(i(m),null,{default:k((r,c,h,s)=>{if(c)c(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  $q<span class="token punctuation"${s}>.</span>loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>show</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>delay</span><span class="token operator"${s}>:</span> <span class="token number"${s}>400</span> <span class="token comment"${s}>// ms</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

  $q<span class="token punctuation"${s}>.</span>loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>hide</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),c(e(u,null,null,h,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"delay"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"400"),a(),n("span",{class:"token comment"},"// ms"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},l,t)),o(`<p${t}>Outside of a Vue component:</p>`),o(e(i(m),null,{default:k((r,c,h,s)=>{if(c)c(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span>
  Loading<span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// optional!, for example below</span>
  <span class="token comment"${s}>// with custom spinner</span>
  QSpinnerGears
<span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token comment"${s}>// default options</span>
Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>show</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// fully customizable</span>
Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>show</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>spinner</span><span class="token operator"${s}>:</span> QSpinnerGears<span class="token punctuation"${s}>,</span>
  <span class="token comment"${s}>// other props</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>hide</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),c(e(u,null,null,h,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  Loading`),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional!, for example below"),a(`
  `),n("span",{class:"token comment"},"// with custom spinner"),a(`
  QSpinnerGears
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// default options"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// fully customizable"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"spinner"),n("span",{class:"token operator"},":"),a(" QSpinnerGears"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// other props"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(u)]}),_:1},l,t)),o(`<h3 id="default-options" class="doc-heading doc-h3"${t}>Default options</h3>`),o(e(p,{title:"Default options",file:"Default"},null,l,t)),o(`<h3 id="customization" class="doc-heading doc-h3"${t}>Customization</h3>`),o(e(p,{title:"With message",file:"WithMessage"},null,l,t)),o(e(p,{title:"With customized box",file:"WithBox"},null,l,t)),o(e(p,{title:"Customized",file:"Customized"},null,l,t)),o(e(p,{title:"Show and Change",file:"ShowAndChange"},null,l,t)),o(`<h3 id="content-sanitization" class="doc-heading doc-h3"${t}>Content sanitization</h3>`),o(e(p,{title:"With unsafe message, but sanitized",file:"WithMessageSanitized"},null,l,t)),o(`<h3 id="multiple-groups-in-parallel" class="doc-heading doc-h3"${t}>Multiple groups in parallel `),o(e(w,{label:"v2.8+"},null,l,t)),o(`</h3><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>When you have multiple processes that occur in parallel then you can group Loading instances so that you can manage the Loading state per group (individually).</p></div><p${t}>Specify the <code class="doc-token"${t}>group</code> property when spawning each of your Loading instances and you can update or hide them by using the returned function.</p><p${t}>Obviously, we can only display one group at a time, so the order in which they are spawned determines the priority in which they are shown (the last one has priority over the previous ones; LIFO).</p>`),o(e(p,{title:"Multiple groups",file:"MultipleGroups"},null,l,t)),o(`<p${t}>You can play with the returning function to show/update/hide the group or just call <code class="doc-token"${t}>Loading.show({ group: &#39;..group_name..&#39;, ... })</code> or <code class="doc-token"${t}>Loading.hide(&#39;..group_name..&#39;)</code>.</p><p${t}>The following two ways are perfectly equivalent (and you can even mix the calls between them):</p>`),o(e(i(m),null,{default:k((r,c,h,s)=>{if(c)c(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * First way
 */</span>

<span class="token comment"${s}>// we spawn the group</span>
<span class="token keyword"${s}>const</span> myLoadingGroup <span class="token operator"${s}>=</span> Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>show</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>group</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;my-group&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Some message&#39;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// with params, so we update this group</span>
<span class="token function"${s}>myLoadingGroup</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Second message&#39;</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// no params, so we instruct Quasar to hide the group</span>
<span class="token function"${s}>myLoadingGroup</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>/**
 * Second, equivalent way
 */</span>

<span class="token comment"${s}>// we spawn the group</span>
Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>show</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>group</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;my-group&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Some message&#39;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// we update the group (in this case we need to specify the group name)</span>
Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>show</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>group</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;my-group&#39;</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Second message&#39;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// we hide this specific group</span>
Loading<span class="token punctuation"${s}>.</span><span class="token function"${s}>hide</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;my-group&#39;</span><span class="token punctuation"${s}>)</span></code></pre>`),c(e(u,null,null,h,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * First way
 */`),a(`

`),n("span",{class:"token comment"},"// we spawn the group"),a(`
`),n("span",{class:"token keyword"},"const"),a(" myLoadingGroup "),n("span",{class:"token operator"},"="),a(" Loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Some message'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// with params, so we update this group"),a(`
`),n("span",{class:"token function"},"myLoadingGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Second message'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// no params, so we instruct Quasar to hide the group"),a(`
`),n("span",{class:"token function"},"myLoadingGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},`/**
 * Second, equivalent way
 */`),a(`

`),n("span",{class:"token comment"},"// we spawn the group"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Some message'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// we update the group (in this case we need to specify the group name)"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-group'"),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Second message'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// we hide this specific group"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},")")])]),n(u)]}),_:1},l,t)),o(`<div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Please remember that calling <code class="doc-token"${t}>Loading.hide()</code> with no parameters will hide all the groups. So if you use groups, you may want to always call the hide() method with a group name.</p></div><h3 id="setting-up-defaults" class="doc-heading doc-h3"${t}>Setting Up Defaults</h3><p${t}>Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.config file &gt; framework &gt; config &gt; loading: {…} or by calling <code class="doc-token"${t}>Loading.setDefaults({...})</code> or <code class="doc-token"${t}>$q.loading.setDefaults({...})</code>.</p>`);else return[n("p",null,"Loading is a feature that you can use to display an overlay with a spinner on top of your App’s content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations."),n(L,{file:"Loading"}),n(b,{plugins:"Loading",config:"loading"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:r=>i(g)("usage")},"Usage",8,["onClick"]),n("p",null,"Loading uses a delay (500ms) to display itself so that quick operations won’t make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion."),n("p",null,"Inside a Vue component:"),n(i(m),null,{default:k(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"delay"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"400"),a(),n("span",{class:"token comment"},"// ms"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

  $q`),n("span",{class:"token punctuation"},"."),a("loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,"Outside of a Vue component:"),n(i(m),null,{default:k(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  Loading`),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// optional!, for example below"),a(`
  `),n("span",{class:"token comment"},"// with custom spinner"),a(`
  QSpinnerGears
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// default options"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// fully customizable"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"spinner"),n("span",{class:"token operator"},":"),a(" QSpinnerGears"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// other props"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(u)]),_:1}),n("h3",{id:"default-options",class:"doc-heading doc-h3",onClick:r=>i(g)("default-options")},"Default options",8,["onClick"]),n(p,{title:"Default options",file:"Default"}),n("h3",{id:"customization",class:"doc-heading doc-h3",onClick:r=>i(g)("customization")},"Customization",8,["onClick"]),n(p,{title:"With message",file:"WithMessage"}),n(p,{title:"With customized box",file:"WithBox"}),n(p,{title:"Customized",file:"Customized"}),n(p,{title:"Show and Change",file:"ShowAndChange"}),n("h3",{id:"content-sanitization",class:"doc-heading doc-h3",onClick:r=>i(g)("content-sanitization")},"Content sanitization",8,["onClick"]),n(p,{title:"With unsafe message, but sanitized",file:"WithMessageSanitized"}),n("h3",{id:"multiple-groups-in-parallel",class:"doc-heading doc-h3",onClick:r=>i(g)("multiple-groups-in-parallel")},[a("Multiple groups in parallel "),n(w,{label:"v2.8+"})],8,["onClick"]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"When you have multiple processes that occur in parallel then you can group Loading instances so that you can manage the Loading state per group (individually).")]),n("p",null,[a("Specify the "),n("code",{class:"doc-token"},"group"),a(" property when spawning each of your Loading instances and you can update or hide them by using the returned function.")]),n("p",null,"Obviously, we can only display one group at a time, so the order in which they are spawned determines the priority in which they are shown (the last one has priority over the previous ones; LIFO)."),n(p,{title:"Multiple groups",file:"MultipleGroups"}),n("p",null,[a("You can play with the returning function to show/update/hide the group or just call "),n("code",{class:"doc-token"},"Loading.show({ group: '..group_name..', ... })"),a(" or "),n("code",{class:"doc-token"},"Loading.hide('..group_name..')"),a(".")]),n("p",null,"The following two ways are perfectly equivalent (and you can even mix the calls between them):"),n(i(m),null,{default:k(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * First way
 */`),a(`

`),n("span",{class:"token comment"},"// we spawn the group"),a(`
`),n("span",{class:"token keyword"},"const"),a(" myLoadingGroup "),n("span",{class:"token operator"},"="),a(" Loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Some message'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// with params, so we update this group"),a(`
`),n("span",{class:"token function"},"myLoadingGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Second message'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// no params, so we instruct Quasar to hide the group"),a(`
`),n("span",{class:"token function"},"myLoadingGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},`/**
 * Second, equivalent way
 */`),a(`

`),n("span",{class:"token comment"},"// we spawn the group"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Some message'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// we update the group (in this case we need to specify the group name)"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'my-group'"),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Second message'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// we hide this specific group"),a(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},")")])]),n(u)]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Please remember that calling "),n("code",{class:"doc-token"},"Loading.hide()"),a(" with no parameters will hide all the groups. So if you use groups, you may want to always call the hide() method with a group name.")])]),n("h3",{id:"setting-up-defaults",class:"doc-heading doc-h3",onClick:r=>i(g)("setting-up-defaults")},"Setting Up Defaults",8,["onClick"]),n("p",null,[a("Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.config file > framework > config > loading: {…} or by calling "),n("code",{class:"doc-token"},"Loading.setDefaults({...})"),a(" or "),n("code",{class:"doc-token"},"$q.loading.setDefaults({...})"),a(".")])]}),_:1},C))}}},v=f.setup;f.setup=($,y)=>{const d=G();return(d.modules||(d.modules=new Set)).add("src/pages/quasar-plugins/loading.md"),v?v($,y):void 0};const tn=W(f,[["__file","loading.md"]]);export{tn as default};
