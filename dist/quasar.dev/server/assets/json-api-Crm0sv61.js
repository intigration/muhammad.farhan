import{resolveComponent as S,mergeProps as A,withCtx as r,unref as e,createVNode as n,createTextVNode as s,useSSRContext as O}from"vue";import{ssrRenderComponent as c,ssrRenderStyle as $}from"vue/server-renderer";import{c as q}from"./page-utils-C-QWsEHe.js";import{D as N}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"json-api",__ssrInlineRender:!0,setup(h){const g=[{id:"benefits-of-using-json-api",title:"2. Benefits of using JSON API"},{id:"json-data-structures",title:"3. JSON Data Structures"},{id:"quasar-json-api",title:"4. Quasar JSON API"},{id:"general",title:"4.1. General",sub:!0},{id:"props-example",title:"4.2. Props example",sub:!0},{id:"events-example",title:"4.3. Events example",sub:!0},{id:"slots-example",title:"4.4. Slots example",sub:!0},{id:"methods-example",title:"4.5. Methods example",sub:!0}];return(m,x,v,w)=>{const b=S("q-markup-table");x(c(N,A({title:"Quasar JSON API Schema",desc:"The JSON API used to describe Component App Extensions.",heading:"","edit-link":"app-extensions/tips-and-tricks/json-api",toc:g},w),{default:r((M,l,y,o)=>{if(l)l(`<p${o}>This page describes the JSON API Schema used for component App Extensions.</p><h2 id="benefits-of-using-json-api" class="doc-heading doc-h2"${o}>Benefits of using JSON API</h2><ol${o}><li${o}>Describes your existing data format(s)</li><li${o}>Provides clear human- and machine- readable documentation</li><li${o}>Validates data which is useful for: <ul${o}><li${o}>Automated testing</li><li${o}>Ensuring quality of submitted data</li></ul></li></ol><h2 id="json-data-structures" class="doc-heading doc-h2"${o}>JSON Data Structures</h2><p${o}>At its heart, JSON is built on the following data structures:</p><p${o}>object:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token punctuation"${a}>{</span> <span class="token property"${a}>&quot;key1&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;value1&quot;</span><span class="token punctuation"${a}>,</span> <span class="token property"${a}>&quot;key2&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;value2&quot;</span> <span class="token punctuation"${a}>}</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"key1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"value1"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"key2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"value2"'),s(),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},y,o)),l(`<p${o}>array:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;first&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;second&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;third&quot;</span> <span class="token punctuation"${a}>]</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"first"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"second"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"third"'),s(),n("span",{class:"token punctuation"},"]")])]),n(p)]}),_:1},y,o)),l(`<p${o}>number:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token number"${a}>42</span>
<span class="token number"${a}>3.1415926</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token number"},"42"),s(`
`),n("span",{class:"token number"},"3.1415926")])]),n(p)]}),_:1},y,o)),l(`<p${o}>string:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token string"${a}>&quot;This is a string&quot;</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token string"},'"This is a string"')])]),n(p)]}),_:1},y,o)),l(`<p${o}>boolean:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token boolean"${a}>true</span>
<span class="token boolean"${a}>false</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token boolean"},"false")])]),n(p)]}),_:1},y,o)),l(`<p${o}>null:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token null keyword"${a}>null</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token null keyword"},"null")])]),n(p)]}),_:1},y,o)),l(`<h2 id="quasar-json-api" class="doc-heading doc-h2"${o}>Quasar JSON API</h2><p${o}>The unfilled schema typically looks like this:</p>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token punctuation"${a}>{</span>
  <span class="token property"${a}>&quot;props&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;events&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;slots&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;methods&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"slots"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"methods"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},y,o)),l(`<h3 id="general" class="doc-heading doc-h3"${o}>General</h3><p${o}>The first part of a definition is the actual item name itself.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>If in the <code class="doc-token"${o}>props</code> section, this should be the forward facing name. Meaning, if your item being described is in camelCase, then the forward facing item name is in kebab-case. ex: <code class="doc-token"${o}>myProp</code> becomes <code class="doc-token"${o}>my-prop</code>.</p></div><p${o}>The rest of the definitions can be one of the following:</p>`),l(c(b,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:r((i,t,u,a)=>{if(t)t(`<thead${a}><tr${a}><th style="${$({"text-align":"left"})}" class="text-left"${a}>Name</th><th style="${$({"text-align":"left"})}" class="text-left"${a}>Description</th></tr></thead><tbody${a}><tr${a}><td style="${$({"text-align":"left"})}"${a}>type</td><td style="${$({"text-align":"left"})}"${a}>Optional for everything but <code class="doc-token"${a}>props</code>. This can be a single item or array of items. Values are: <code class="doc-token"${a}>[&quot;Array&quot;, &quot;Boolean&quot;, &quot;Function&quot;, &quot;Number&quot;, &quot;Object&quot;, &quot;String&quot;, &quot;Null&quot;, &quot;Any&quot;]</code></td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>desc</td><td style="${$({"text-align":"left"})}"${a}>Any string that describes the item being described</td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>required</td><td style="${$({"text-align":"left"})}"${a}>[true,false]</td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>values</td><td style="${$({"text-align":"left"})}"${a}>an array of constrained values. Ex: <code class="doc-token"${a}>[0, 0.5, 1.0, 1.5, 2.0]</code></td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>definition</td><td style="${$({"text-align":"left"})}"${a}>Describes an object definition. This is an object that pretty much conforms to the base object. It can contain <code class="doc-token"${a}>&quot;type&quot;</code>, <code class="doc-token"${a}>&quot;desc&quot;</code>, <code class="doc-token"${a}>&quot;required&quot;</code>, <code class="doc-token"${a}>&quot;examples&quot;</code>, <code class="doc-token"${a}>&quot;values&quot;</code> and <code class="doc-token"${a}>&quot;definition&quot;</code> (recursive)</td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>params</td><td style="${$({"text-align":"left"})}"${a}>Typically is used to describe parameters to a function. This needs one or more parameters as the key to an object that pretty much conforms to the base object. It can contain <code class="doc-token"${a}>&quot;type&quot;</code>, <code class="doc-token"${a}>&quot;desc&quot;</code>, <code class="doc-token"${a}>&quot;required&quot;</code>, <code class="doc-token"${a}>&quot;examples&quot;</code>, <code class="doc-token"${a}>&quot;values&quot;</code> and <code class="doc-token"${a}>&quot;definition&quot;</code> (recursive)</td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>returns</td><td style="${$({"text-align":"left"})}"${a}>The returned value (for methods or functions)</td></tr><tr${a}><td style="${$({"text-align":"left"})}"${a}>category</td><td style="${$({"text-align":"left"})}"${a}>Used for grouping</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"},class:"text-left"},"Name"),n("th",{style:{"text-align":"left"},class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"type"),n("td",{style:{"text-align":"left"}},[s("Optional for everything but "),n("code",{class:"doc-token"},"props"),s(". This can be a single item or array of items. Values are: "),n("code",{class:"doc-token"},'["Array", "Boolean", "Function", "Number", "Object", "String", "Null", "Any"]')])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"desc"),n("td",{style:{"text-align":"left"}},"Any string that describes the item being described")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"required"),n("td",{style:{"text-align":"left"}},"[true,false]")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"values"),n("td",{style:{"text-align":"left"}},[s("an array of constrained values. Ex: "),n("code",{class:"doc-token"},"[0, 0.5, 1.0, 1.5, 2.0]")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"definition"),n("td",{style:{"text-align":"left"}},[s("Describes an object definition. This is an object that pretty much conforms to the base object. It can contain "),n("code",{class:"doc-token"},'"type"'),s(", "),n("code",{class:"doc-token"},'"desc"'),s(", "),n("code",{class:"doc-token"},'"required"'),s(", "),n("code",{class:"doc-token"},'"examples"'),s(", "),n("code",{class:"doc-token"},'"values"'),s(" and "),n("code",{class:"doc-token"},'"definition"'),s(" (recursive)")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"params"),n("td",{style:{"text-align":"left"}},[s("Typically is used to describe parameters to a function. This needs one or more parameters as the key to an object that pretty much conforms to the base object. It can contain "),n("code",{class:"doc-token"},'"type"'),s(", "),n("code",{class:"doc-token"},'"desc"'),s(", "),n("code",{class:"doc-token"},'"required"'),s(", "),n("code",{class:"doc-token"},'"examples"'),s(", "),n("code",{class:"doc-token"},'"values"'),s(" and "),n("code",{class:"doc-token"},'"definition"'),s(" (recursive)")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"returns"),n("td",{style:{"text-align":"left"}},"The returned value (for methods or functions)")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"category"),n("td",{style:{"text-align":"left"}},"Used for grouping")])])]}),_:1},y,o)),l(`<p${o}>All items are optional, but in the very least you should provide a description.</p><h3 id="props-example" class="doc-heading doc-h3"${o}>Props example</h3>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token property"${a}>&quot;props&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token property"${a}>&quot;value&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Boolean&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for &#39;input&#39; event) OR use v-model directive&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;default&quot;</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
        <span class="token string"${a}>&quot;v-model=\\&quot;footerState\\&quot;&quot;</span>
      <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;category&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;model&quot;</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token property"${a}>&quot;locale&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Object&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Locale formatting options&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;:locale=\\&quot;{ monthsShort: [&#39;Ian&#39;, &#39;Feb&#39;, &#39;Mar&#39;, &#39;...&#39;] }\\&quot;&quot;</span> <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;definition&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;days&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Array&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;List of full day names (DDDD), starting with Sunday&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;[&#39;Duminica&#39;, &#39;Luni&#39;, &#39;Marti&#39;, &#39;...&#39;]&quot;</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;daysShort&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Array&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;List of short day names (DDD), starting with Sunday&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;[&#39;Dum&#39;, &#39;Lun&#39;, &#39;Mar&#39;, &#39;...&#39;]&quot;</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;months&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Array&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;List of full month names (MMMM), starting with January&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;[&#39;Ianuarie&#39;, &#39;Februarie&#39;, &#39;Martie&#39;, &#39;...&#39;]&quot;</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;monthsShort&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Array&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;List of short month names (MMM), starting with January&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;[&#39;Ian&#39;, &#39;Feb&#39;, &#39;Mar&#39;, &#39;...&#39;]&quot;</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span>
      <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;category&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;model&quot;</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token property"${a}>&quot;options&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Function&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Optionally configure what time is the user allowed to set; Overridden by &#39;hour-options&#39;, &#39;minute-options&#39; and &#39;second-options&#39; if those are set&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;params&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;hr&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Hour&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token number"${a}>15</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;min&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Minutes&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token number"${a}>38</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;sec&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Seconds&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token number"${a}>12</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span>
      <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;returns&quot;</span><span class="token operator"${a}>:</span> <span class="token null keyword"${a}>null</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
        <span class="token string"${a}>&quot;:options=\\&quot;(hr, min, sec) =&gt; hr &lt;= 6\\&quot;&quot;</span>
      <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;category&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;behavior&quot;</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token property"${a}>&quot;events&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;Array&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;Function&quot;</span> <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not)&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
        <span class="token string"${a}>&quot;:events=\\&quot;[&#39;2018/11/05&#39;, &#39;2018/11/06&#39;, &#39;2018/11/09&#39;, &#39;2018/11/23&#39;]\\&quot;&quot;</span><span class="token punctuation"${a}>,</span>
        <span class="token string"${a}>&quot;:events=\\&quot;date =&gt; date[9] % 3 === 0\\&quot;&quot;</span>
      <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;category&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;model&quot;</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Boolean"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive"`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"v-model=\\"footerState\\""'),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"model"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"locale"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Locale formatting options"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`":locale=\\"{ monthsShort: ['Ian', 'Feb', 'Mar', '...'] }\\""`),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"definition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"days"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of full day names (DDDD), starting with Sunday"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Duminica', 'Luni', 'Marti', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"daysShort"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of short day names (DDD), starting with Sunday"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Dum', 'Lun', 'Mar', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"months"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of full month names (MMMM), starting with January"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Ianuarie', 'Februarie', 'Martie', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"monthsShort"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of short month names (MMM), starting with January"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Ian', 'Feb', 'Mar', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"model"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Function"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"Optionally configure what time is the user allowed to set; Overridden by 'hour-options', 'minute-options' and 'second-options' if those are set"`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"hr"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hour"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"15"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Minutes"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"38"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"sec"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Seconds"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"12"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'":options=\\"(hr, min, sec) => hr <= 6\\""'),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"behavior"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Function"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not)"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},`":events=\\"['2018/11/05', '2018/11/06', '2018/11/09', '2018/11/23']\\""`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'":events=\\"date => date[9] % 3 === 0\\""'),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"model"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},y,o)),l(`<h3 id="events-example" class="doc-heading doc-h3"${o}>Events example</h3>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token property"${a}>&quot;events&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token property"${a}>&quot;show&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Emitted after component has triggered show()&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;params&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;evt&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Object&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;JS event object&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;required&quot;</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span>
        <span class="token punctuation"${a}>}</span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token property"${a}>&quot;input&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;params&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;value&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;String&quot;</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;reason&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;String&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Reason of the user interaction (what was picked)&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;values&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;year&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;month&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;day&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;today&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;locale&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;mask&quot;</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;details&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Object&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Object of properties on the new model&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;definition&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
            <span class="token property"${a}>&quot;year&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
              <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span>
            <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
            <span class="token property"${a}>&quot;month&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
              <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span>
            <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
            <span class="token property"${a}>&quot;day&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
              <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span>
            <span class="token punctuation"${a}>}</span>
          <span class="token punctuation"${a}>}</span>
        <span class="token punctuation"${a}>}</span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"show"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Emitted after component has triggered show()"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"evt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"JS event object"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"required"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"input"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"String"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reason"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"String"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Reason of the user interaction (what was picked)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"values"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"year"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"month"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"day"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"today"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"locale"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"mask"'),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"details"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object of properties on the new model"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"definition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"year"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"month"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"day"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},y,o)),l(`<h3 id="slots-example" class="doc-heading doc-h3"${o}>Slots example</h3>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token property"${a}>&quot;slots&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token property"${a}>&quot;default&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;This is where Banner content goes&quot;</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

    <span class="token property"${a}>&quot;avatar&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Slot for displaying an avatar (suggestions: QIcon, QAvatar)&quot;</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

    <span class="token property"${a}>&quot;selected-item&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Override default selection slot; Suggestion: QChip&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;scope&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;index&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Selection index&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token number"${a}>0</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;opt&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Any&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Selected option -- its value is taken from model&quot;</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;selected&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Boolean&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Always true -- passed down as prop to QItem (when using QItem)&quot;</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;removeAtIndex&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Function&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Remove selected option located at specific index&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;params&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
            <span class="token property"${a}>&quot;index&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
              <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span><span class="token punctuation"${a}>,</span>
              <span class="token property"${a}>&quot;required&quot;</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>
              <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Index at which to remove selection&quot;</span><span class="token punctuation"${a}>,</span>
              <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token number"${a}>0</span> <span class="token punctuation"${a}>]</span>
            <span class="token punctuation"${a}>}</span>
          <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;returns&quot;</span><span class="token operator"${a}>:</span> <span class="token null keyword"${a}>null</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;toggleOption&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Function&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Add/remove option from model&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;params&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
            <span class="token property"${a}>&quot;opt&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
              <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Any&quot;</span><span class="token punctuation"${a}>,</span>
              <span class="token property"${a}>&quot;required&quot;</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>
              <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Option to add to model&quot;</span><span class="token punctuation"${a}>,</span>
              <span class="token property"${a}>&quot;__exemption&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token string"${a}>&quot;examples&quot;</span> <span class="token punctuation"${a}>]</span>
            <span class="token punctuation"${a}>}</span>
          <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;returns&quot;</span><span class="token operator"${a}>:</span> <span class="token null keyword"${a}>null</span>
        <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;tabindex&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Number&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Tabindex HTML attribute value associated with respective option&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;values&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span> <span class="token number"${a}>0</span><span class="token punctuation"${a}>,</span> <span class="token number"${a}>-1</span> <span class="token punctuation"${a}>]</span>
        <span class="token punctuation"${a}>}</span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"slots"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"This is where Banner content goes"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token property"},'"avatar"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Slot for displaying an avatar (suggestions: QIcon, QAvatar)"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token property"},'"selected-item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Override default selection slot; Suggestion: QChip"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"scope"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"index"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Selection index"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"opt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Any"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Selected option -- its value is taken from model"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"selected"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Boolean"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Always true -- passed down as prop to QItem (when using QItem)"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"removeAtIndex"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Function"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Remove selected option located at specific index"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"index"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"required"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Index at which to remove selection"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"toggleOption"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Function"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Add/remove option from model"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"opt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Any"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"required"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Option to add to model"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"__exemption"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"examples"'),s(),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"tabindex"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tabindex HTML attribute value associated with respective option"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"values"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"-1"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])]),n(p)]}),_:1},y,o)),l(`<h3 id="methods-example" class="doc-heading doc-h3"${o}>Methods example</h3>`),l(c(e(k),null,{default:r((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token property"${a}>&quot;methods&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token property"${a}>&quot;focus&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Focus on first focusable element/component in the form&quot;</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

    <span class="token property"${a}>&quot;validate&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Triggers a validation on all applicable inner Quasar components&quot;</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;params&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;shouldFocus&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
          <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Boolean&quot;</span><span class="token punctuation"${a}>,</span>
          <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Tell if it should focus or not on component with error on submitting form; Overrides &#39;no-focus-error&#39; prop if specified&quot;</span>
        <span class="token punctuation"${a}>}</span>
      <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
      <span class="token property"${a}>&quot;returns&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token property"${a}>&quot;type&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Promise&lt;boolean&gt;&quot;</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;desc&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;Promise is always fulfilled and receives the outcome (true -&gt; validation was a success, false -&gt; invalid models detected)&quot;</span><span class="token punctuation"${a}>,</span>
        <span class="token property"${a}>&quot;examples&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
          <span class="token string"${a}>&quot;validate().then(outcome =&gt; { ... })&quot;</span>
        <span class="token punctuation"${a}>]</span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span></code></pre>`),t(c(p,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"methods"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"focus"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Focus on first focusable element/component in the form"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token property"},'"validate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Triggers a validation on all applicable inner Quasar components"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"shouldFocus"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Boolean"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"Tell if it should focus or not on component with error on submitting form; Overrides 'no-focus-error' prop if specified"`),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Promise<boolean>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"validate().then(outcome => { ... })"'),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},y,o));else return[n("p",null,"This page describes the JSON API Schema used for component App Extensions."),n("h2",{id:"benefits-of-using-json-api",class:"doc-heading doc-h2",onClick:i=>e(q)("benefits-of-using-json-api")},"Benefits of using JSON API",8,["onClick"]),n("ol",null,[n("li",null,"Describes your existing data format(s)"),n("li",null,"Provides clear human- and machine- readable documentation"),n("li",null,[s("Validates data which is useful for: "),n("ul",null,[n("li",null,"Automated testing"),n("li",null,"Ensuring quality of submitted data")])])]),n("h2",{id:"json-data-structures",class:"doc-heading doc-h2",onClick:i=>e(q)("json-data-structures")},"JSON Data Structures",8,["onClick"]),n("p",null,"At its heart, JSON is built on the following data structures:"),n("p",null,"object:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"key1"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"value1"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"key2"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"value2"'),s(),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,"array:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"first"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"second"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"third"'),s(),n("span",{class:"token punctuation"},"]")])]),n(p)]),_:1}),n("p",null,"number:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token number"},"42"),s(`
`),n("span",{class:"token number"},"3.1415926")])]),n(p)]),_:1}),n("p",null,"string:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token string"},'"This is a string"')])]),n(p)]),_:1}),n("p",null,"boolean:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token boolean"},"false")])]),n(p)]),_:1}),n("p",null,"null:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token null keyword"},"null")])]),n(p)]),_:1}),n("h2",{id:"quasar-json-api",class:"doc-heading doc-h2",onClick:i=>e(q)("quasar-json-api")},"Quasar JSON API",8,["onClick"]),n("p",null,"The unfilled schema typically looks like this:"),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"slots"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"methods"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"general",class:"doc-heading doc-h3",onClick:i=>e(q)("general")},"General",8,["onClick"]),n("p",null,"The first part of a definition is the actual item name itself."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("If in the "),n("code",{class:"doc-token"},"props"),s(" section, this should be the forward facing name. Meaning, if your item being described is in camelCase, then the forward facing item name is in kebab-case. ex: "),n("code",{class:"doc-token"},"myProp"),s(" becomes "),n("code",{class:"doc-token"},"my-prop"),s(".")])]),n("p",null,"The rest of the definitions can be one of the following:"),n(b,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:r(()=>[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"},class:"text-left"},"Name"),n("th",{style:{"text-align":"left"},class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"type"),n("td",{style:{"text-align":"left"}},[s("Optional for everything but "),n("code",{class:"doc-token"},"props"),s(". This can be a single item or array of items. Values are: "),n("code",{class:"doc-token"},'["Array", "Boolean", "Function", "Number", "Object", "String", "Null", "Any"]')])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"desc"),n("td",{style:{"text-align":"left"}},"Any string that describes the item being described")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"required"),n("td",{style:{"text-align":"left"}},"[true,false]")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"values"),n("td",{style:{"text-align":"left"}},[s("an array of constrained values. Ex: "),n("code",{class:"doc-token"},"[0, 0.5, 1.0, 1.5, 2.0]")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"definition"),n("td",{style:{"text-align":"left"}},[s("Describes an object definition. This is an object that pretty much conforms to the base object. It can contain "),n("code",{class:"doc-token"},'"type"'),s(", "),n("code",{class:"doc-token"},'"desc"'),s(", "),n("code",{class:"doc-token"},'"required"'),s(", "),n("code",{class:"doc-token"},'"examples"'),s(", "),n("code",{class:"doc-token"},'"values"'),s(" and "),n("code",{class:"doc-token"},'"definition"'),s(" (recursive)")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"params"),n("td",{style:{"text-align":"left"}},[s("Typically is used to describe parameters to a function. This needs one or more parameters as the key to an object that pretty much conforms to the base object. It can contain "),n("code",{class:"doc-token"},'"type"'),s(", "),n("code",{class:"doc-token"},'"desc"'),s(", "),n("code",{class:"doc-token"},'"required"'),s(", "),n("code",{class:"doc-token"},'"examples"'),s(", "),n("code",{class:"doc-token"},'"values"'),s(" and "),n("code",{class:"doc-token"},'"definition"'),s(" (recursive)")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"returns"),n("td",{style:{"text-align":"left"}},"The returned value (for methods or functions)")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"category"),n("td",{style:{"text-align":"left"}},"Used for grouping")])])]),_:1}),n("p",null,"All items are optional, but in the very least you should provide a description."),n("h3",{id:"props-example",class:"doc-heading doc-h3",onClick:i=>e(q)("props-example")},"Props example",8,["onClick"]),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"props"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Boolean"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive"`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'"v-model=\\"footerState\\""'),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"model"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"locale"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Locale formatting options"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`":locale=\\"{ monthsShort: ['Ian', 'Feb', 'Mar', '...'] }\\""`),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"definition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"days"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of full day names (DDDD), starting with Sunday"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Duminica', 'Luni', 'Marti', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"daysShort"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of short day names (DDD), starting with Sunday"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Dum', 'Lun', 'Mar', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"months"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of full month names (MMMM), starting with January"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Ianuarie', 'Februarie', 'Martie', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"monthsShort"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"List of short month names (MMM), starting with January"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},`"['Ian', 'Feb', 'Mar', '...']"`),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"model"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Function"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"Optionally configure what time is the user allowed to set; Overridden by 'hour-options', 'minute-options' and 'second-options' if those are set"`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"hr"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hour"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"15"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"min"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Minutes"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"38"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"sec"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Seconds"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"12"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},'":options=\\"(hr, min, sec) => hr <= 6\\""'),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"behavior"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"Array"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Function"'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not)"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token string"},`":events=\\"['2018/11/05', '2018/11/06', '2018/11/09', '2018/11/23']\\""`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string"},'":events=\\"date => date[9] % 3 === 0\\""'),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"category"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"model"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"events-example",class:"doc-heading doc-h3",onClick:i=>e(q)("events-example")},"Events example",8,["onClick"]),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"events"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"show"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Emitted after component has triggered show()"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"evt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"JS event object"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"required"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"input"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"String"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"reason"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"String"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Reason of the user interaction (what was picked)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"values"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"year"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"month"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"day"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"today"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"locale"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"mask"'),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"details"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Object of properties on the new model"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"definition"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"year"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"month"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"day"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"slots-example",class:"doc-heading doc-h3",onClick:i=>e(q)("slots-example")},"Slots example",8,["onClick"]),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"slots"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"default"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"This is where Banner content goes"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token property"},'"avatar"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Slot for displaying an avatar (suggestions: QIcon, QAvatar)"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token property"},'"selected-item"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Override default selection slot; Suggestion: QChip"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"scope"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"index"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Selection index"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"opt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Any"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Selected option -- its value is taken from model"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"selected"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Boolean"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Always true -- passed down as prop to QItem (when using QItem)"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"removeAtIndex"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Function"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Remove selected option located at specific index"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"index"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"required"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Index at which to remove selection"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"toggleOption"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Function"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Add/remove option from model"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"opt"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Any"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"required"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Option to add to model"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token property"},'"__exemption"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string"},'"examples"'),s(),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token null keyword"},"null"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"tabindex"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Number"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Tabindex HTML attribute value associated with respective option"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"values"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"-1"),s(),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])]),n(p)]),_:1}),n("h3",{id:"methods-example",class:"doc-heading doc-h3",onClick:i=>e(q)("methods-example")},"Methods example",8,["onClick"]),n(e(k),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token property"},'"methods"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"focus"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Focus on first focusable element/component in the form"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token property"},'"validate"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Triggers a validation on all applicable inner Quasar components"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"shouldFocus"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Boolean"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"Tell if it should focus or not on component with error on submitting form; Overrides 'no-focus-error' prop if specified"`),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"returns"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Promise<boolean>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"desc"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"examples"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"validate().then(outcome => { ... })"'),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1})]}),_:1},v))}}},d=f.setup;f.setup=(h,g)=>{const m=O();return(m.modules||(m.modules=new Set)).add("src/pages/app-extensions/tips-and-tricks/json-api.md"),d?d(h,g):void 0};const U=j(f,[["__file","json-api.md"]]);export{U as default};
