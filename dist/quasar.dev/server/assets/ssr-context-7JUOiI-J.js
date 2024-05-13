import{resolveComponent as j,mergeProps as E,withCtx as c,createTextVNode as s,unref as d,createVNode as n,useSSRContext as P}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as T,a as i}from"./DocPage-DKr-0pQn.js";import{D as h}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as O}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const b={__name:"ssr-context",__ssrInlineRender:!0,setup(C){const x=[{id:"usage",title:"2. Usage"},{id:"anatomy-of-ssrcontext",title:"3. Anatomy of ssrContext"}];return(w,v,S,q)=>{const f=j("q-tab-panel");v(l(T,E({title:"The ssrContext Object",desc:"(@quasar/app-webpack) The ssrContext Object in Quasar SSR",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-ssr/ssr-context",toc:x},q),{default:c((A,p,m,e)=>{if(p)p(`<p${e}>The <code class="doc-token"${e}>ssrContext</code> Object is the SSR context with which all the app’s Vue components are rendered with.</p><h2 id="usage" class="doc-heading doc-h2"${e}>Usage</h2><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The <code class="doc-token"${e}>ssrContext</code> Object is available only on SSR builds, on the server-side compilation (when <code class="doc-token"${e}>process∙env∙SERVER === true</code>).</p></div><p${e}>Among other places, it is supplied as parameter to `),p(l(i,{to:"/quasar-cli-webpack/boot-files"},{default:c((k,o,r,t)=>{if(o)o("boot files");else return[s("boot files")]}),_:1},m,e)),p(", to the "),p(l(i,{to:"/quasar-cli-webpack/state-management-pinia-vuex"},{default:c((k,o,r,t)=>{if(o)o("Vuex store");else return[s("Vuex store")]}),_:1},m,e)),p(" and "),p(l(i,{to:"/quasar-cli-webpack/routing"},{default:c((k,o,r,t)=>{if(o)o("Vue Router");else return[s("Vue Router")]}),_:1},m,e)),p(" initialization functions, and to the "),p(l(i,{to:"/quasar-cli-webpack/prefetch-feature"},{default:c((k,o,r,t)=>{if(o)o("preFetch");else return[s("preFetch")]}),_:1},m,e)),p(" method:</p>"),p(l(d(h),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// a boot file</span>
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> <span class="token operator"${t}>...</span><span class="token punctuation"${t}>,</span> ssrContext <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* ... */</span> <span class="token punctuation"${t}>}</span>

<span class="token comment"${t}>// src/router/index.[js|ts]</span>
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token operator"${t}>...</span><span class="token punctuation"${t}>,</span> ssrContext <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* ... */</span> <span class="token punctuation"${t}>}</span>

<span class="token comment"${t}>// src/store/index.[js|ts]</span>
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>{</span> <span class="token operator"${t}>...</span><span class="token punctuation"${t}>,</span> ssrContext <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* ... */</span> <span class="token punctuation"${t}>}</span>

<span class="token comment"${t}>// with preFetch:</span>
<span class="token function"${t}>preFetch</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> <span class="token operator"${t}>...</span><span class="token punctuation"${t}>,</span> ssrContext <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>/* ... */</span> <span class="token punctuation"${t}>}</span></code></pre>`),o(l(u,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// a boot file"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// src/router/index.[js|ts]"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// src/store/index.[js|ts]"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// with preFetch:"),s(`
`),n("span",{class:"token function"},"preFetch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},m,e)),p(`<p${e}>You can also access the ssrContext in your Vue components. Below are two examples, one with Composition API and one with Options API:</p>`),p(l(d(h),{tabs:["Composition API","Options API"]},{default:c((k,o,r,t)=>{if(o)o(l(f,{class:"q-pa-none",name:"Composition API"},{default:c((V,$,y,a)=>{if($)$(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useSSRContext <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// ...</span>
  <span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// we need to guard it and call it only on SSR server-side:</span>
    <span class="token keyword"${a}>const</span> ssrContext <span class="token operator"${a}>=</span> process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>SERVER</span> <span class="token operator"${a}>?</span> <span class="token function"${a}>useSSRContext</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>:</span> <span class="token keyword"${a}>null</span>
    <span class="token comment"${a}>// ...do something with it</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),$(l(u,null,null,y,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSSRContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// we need to guard it and call it only on SSR server-side:"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" ssrContext "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SERVER"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"useSSRContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token comment"},"// ...do something with it"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},r,t)),o(l(f,{class:"q-pa-none",name:"Options API"},{default:c((V,$,y,a)=>{if($)$(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// ...</span>
  <span class="token function"${a}>created</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span> <span class="token comment"${a}>// can be any other Vue component lifecycle hook</span>
    <span class="token keyword"${a}>this</span><span class="token punctuation"${a}>.</span>ssrContext
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),$(l(u,null,null,y,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token function"},"created"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// can be any other Vue component lifecycle hook"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`ssrContext
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},r,t));else return[n(f,{class:"q-pa-none",name:"Composition API"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSSRContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// we need to guard it and call it only on SSR server-side:"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" ssrContext "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SERVER"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"useSSRContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token comment"},"// ...do something with it"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n(f,{class:"q-pa-none",name:"Options API"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token function"},"created"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// can be any other Vue component lifecycle hook"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`ssrContext
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1})]}),_:1},m,e)),p(`<h2 id="anatomy-of-ssrcontext" class="doc-heading doc-h2"${e}>Anatomy of ssrContext</h2>`),p(l(d(h),null,{default:c((k,o,r,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token literal-property property"${t}>ssrContext</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
  req<span class="token punctuation"${t}>,</span>        <span class="token comment"${t}>// Express.js object</span>
  res<span class="token punctuation"${t}>,</span>        <span class="token comment"${t}>// Express.js object</span>
  $q<span class="token punctuation"${t}>,</span>         <span class="token comment"${t}>// The Quasar&#39;s $q Object</span>
  state<span class="token punctuation"${t}>,</span>      <span class="token comment"${t}>// The Vuex state (ONLY if using the Vuex store)</span>

  nonce<span class="token punctuation"${t}>,</span>      <span class="token comment"${t}>// (optional to set it yourself)</span>
              <span class="token comment"${t}>// The global &quot;nonce&quot; attribute to use</span>

  onRendered<span class="token punctuation"${t}>,</span> <span class="token comment"${t}>// Registers a function to be executed server-side after</span>
              <span class="token comment"${t}>// app has been rendered with Vue. You might need this</span>
              <span class="token comment"${t}>// to access ssrContext again after it has been fully processed.</span>
              <span class="token comment"${t}>// Example: ssrContext.onRendered(() =&gt; { /* ... */ })</span>

  rendered    <span class="token comment"${t}>// (optional to set it yourself)</span>
              <span class="token comment"${t}>// Set this to a function which will be executed server-side</span>
              <span class="token comment"${t}>// after the app has been rendered with Vue.</span>
              <span class="token comment"${t}>// We recommend using the &quot;onRendered&quot; instead.</span>
              <span class="token comment"${t}>//</span>
              <span class="token comment"${t}>// Purpose: backward compatibility with Vue ecosystem packages</span>
              <span class="token comment"${t}>// (like @vue/apollo-ssr)</span>
              <span class="token comment"${t}>// Example: ssrContext.rendered = () =&gt; { /* ... */ }</span>
<span class="token punctuation"${t}>}</span></code></pre>`),o(l(u,null,null,r,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"ssrContext"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  req`),n("span",{class:"token punctuation"},","),s("        "),n("span",{class:"token comment"},"// Express.js object"),s(`
  res`),n("span",{class:"token punctuation"},","),s("        "),n("span",{class:"token comment"},"// Express.js object"),s(`
  $q`),n("span",{class:"token punctuation"},","),s("         "),n("span",{class:"token comment"},"// The Quasar's $q Object"),s(`
  state`),n("span",{class:"token punctuation"},","),s("      "),n("span",{class:"token comment"},"// The Vuex state (ONLY if using the Vuex store)"),s(`

  nonce`),n("span",{class:"token punctuation"},","),s("      "),n("span",{class:"token comment"},"// (optional to set it yourself)"),s(`
              `),n("span",{class:"token comment"},'// The global "nonce" attribute to use'),s(`

  onRendered`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Registers a function to be executed server-side after"),s(`
              `),n("span",{class:"token comment"},"// app has been rendered with Vue. You might need this"),s(`
              `),n("span",{class:"token comment"},"// to access ssrContext again after it has been fully processed."),s(`
              `),n("span",{class:"token comment"},"// Example: ssrContext.onRendered(() => { /* ... */ })"),s(`

  rendered    `),n("span",{class:"token comment"},"// (optional to set it yourself)"),s(`
              `),n("span",{class:"token comment"},"// Set this to a function which will be executed server-side"),s(`
              `),n("span",{class:"token comment"},"// after the app has been rendered with Vue."),s(`
              `),n("span",{class:"token comment"},'// We recommend using the "onRendered" instead.'),s(`
              `),n("span",{class:"token comment"},"//"),s(`
              `),n("span",{class:"token comment"},"// Purpose: backward compatibility with Vue ecosystem packages"),s(`
              `),n("span",{class:"token comment"},"// (like @vue/apollo-ssr)"),s(`
              `),n("span",{class:"token comment"},"// Example: ssrContext.rendered = () => { /* ... */ }"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},m,e)),p(`<p${e}>More information on the purpose of the “nonce” property is available on `),p(l(i,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce"},{default:c((k,o,r,t)=>{if(o)o("MDN");else return[s("MDN")]}),_:1},m,e)),p(`.</p><p${e}>The <code class="doc-token"${e}>req</code> and <code class="doc-token"${e}>res</code> are Express.js’s objects for the current server client. One use-case for <code class="doc-token"${e}>req</code> is accessing <code class="doc-token"${e}>req.url</code> to get the URL that the client is requesting.</p><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>Feel free to inject your own stuff into ssrContext too, but do NOT tamper with any of the private props (props that start with an underscore, eg. <code class="doc-token"${e}>_someProp</code>).</p></div>`);else return[n("p",null,[s("The "),n("code",{class:"doc-token"},"ssrContext"),s(" Object is the SSR context with which all the app’s Vue components are rendered with.")]),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:k=>d(g)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("The "),n("code",{class:"doc-token"},"ssrContext"),s(" Object is available only on SSR builds, on the server-side compilation (when "),n("code",{class:"doc-token"},"process∙env∙SERVER === true"),s(").")])]),n("p",null,[s("Among other places, it is supplied as parameter to "),n(i,{to:"/quasar-cli-webpack/boot-files"},{default:c(()=>[s("boot files")]),_:1}),s(", to the "),n(i,{to:"/quasar-cli-webpack/state-management-pinia-vuex"},{default:c(()=>[s("Vuex store")]),_:1}),s(" and "),n(i,{to:"/quasar-cli-webpack/routing"},{default:c(()=>[s("Vue Router")]),_:1}),s(" initialization functions, and to the "),n(i,{to:"/quasar-cli-webpack/prefetch-feature"},{default:c(()=>[s("preFetch")]),_:1}),s(" method:")]),n(d(h),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// a boot file"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// src/router/index.[js|ts]"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// src/store/index.[js|ts]"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// with preFetch:"),s(`
`),n("span",{class:"token function"},"preFetch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},","),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* ... */"),s(),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,"You can also access the ssrContext in your Vue components. Below are two examples, one with Composition API and one with Options API:"),n(d(h),{tabs:["Composition API","Options API"]},{default:c(()=>[n(f,{class:"q-pa-none",name:"Composition API"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSSRContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// we need to guard it and call it only on SSR server-side:"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" ssrContext "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SERVER"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"useSSRContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token comment"},"// ...do something with it"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n(f,{class:"q-pa-none",name:"Options API"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token function"},"created"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// can be any other Vue component lifecycle hook"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`ssrContext
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1})]),_:1}),n("h2",{id:"anatomy-of-ssrcontext",class:"doc-heading doc-h2",onClick:k=>d(g)("anatomy-of-ssrcontext")},"Anatomy of ssrContext",8,["onClick"]),n(d(h),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"ssrContext"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  req`),n("span",{class:"token punctuation"},","),s("        "),n("span",{class:"token comment"},"// Express.js object"),s(`
  res`),n("span",{class:"token punctuation"},","),s("        "),n("span",{class:"token comment"},"// Express.js object"),s(`
  $q`),n("span",{class:"token punctuation"},","),s("         "),n("span",{class:"token comment"},"// The Quasar's $q Object"),s(`
  state`),n("span",{class:"token punctuation"},","),s("      "),n("span",{class:"token comment"},"// The Vuex state (ONLY if using the Vuex store)"),s(`

  nonce`),n("span",{class:"token punctuation"},","),s("      "),n("span",{class:"token comment"},"// (optional to set it yourself)"),s(`
              `),n("span",{class:"token comment"},'// The global "nonce" attribute to use'),s(`

  onRendered`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Registers a function to be executed server-side after"),s(`
              `),n("span",{class:"token comment"},"// app has been rendered with Vue. You might need this"),s(`
              `),n("span",{class:"token comment"},"// to access ssrContext again after it has been fully processed."),s(`
              `),n("span",{class:"token comment"},"// Example: ssrContext.onRendered(() => { /* ... */ })"),s(`

  rendered    `),n("span",{class:"token comment"},"// (optional to set it yourself)"),s(`
              `),n("span",{class:"token comment"},"// Set this to a function which will be executed server-side"),s(`
              `),n("span",{class:"token comment"},"// after the app has been rendered with Vue."),s(`
              `),n("span",{class:"token comment"},'// We recommend using the "onRendered" instead.'),s(`
              `),n("span",{class:"token comment"},"//"),s(`
              `),n("span",{class:"token comment"},"// Purpose: backward compatibility with Vue ecosystem packages"),s(`
              `),n("span",{class:"token comment"},"// (like @vue/apollo-ssr)"),s(`
              `),n("span",{class:"token comment"},"// Example: ssrContext.rendered = () => { /* ... */ }"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,[s("More information on the purpose of the “nonce” property is available on "),n(i,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce"},{default:c(()=>[s("MDN")]),_:1}),s(".")]),n("p",null,[s("The "),n("code",{class:"doc-token"},"req"),s(" and "),n("code",{class:"doc-token"},"res"),s(" are Express.js’s objects for the current server client. One use-case for "),n("code",{class:"doc-token"},"req"),s(" is accessing "),n("code",{class:"doc-token"},"req.url"),s(" to get the URL that the client is requesting.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Feel free to inject your own stuff into ssrContext too, but do NOT tamper with any of the private props (props that start with an underscore, eg. "),n("code",{class:"doc-token"},"_someProp"),s(").")])])]}),_:1},S))}}},R=b.setup;b.setup=(C,x)=>{const w=P();return(w.modules||(w.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-ssr/ssr-context.md"),R?R(C,x):void 0};const K=O(b,[["__file","ssr-context.md"]]);export{K as default};
