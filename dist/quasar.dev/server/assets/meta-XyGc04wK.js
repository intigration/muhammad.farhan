import{mergeProps as T,withCtx as l,createTextVNode as t,unref as p,createVNode as n,useSSRContext as S}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as y}from"./page-utils-C-QWsEHe.js";import{D as q,a as $}from"./DocPage-DKr-0pQn.js";import{D as b}from"./DocInstallation-DgMazQjg.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as r}from"./CopyButton-l3ndfN49.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCardTitle-BSnqQsiz.js";import"./utils-DKnLoYai.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"meta",__ssrInlineRender:!0,setup(w){const h=[{name:"useMeta",category:"Vue Composables",path:"/vue-composables/use-meta"}],g=[{id:"installation",title:"2. Installation",deep:!0},{id:"usage",title:"3. Usage"},{id:"composition-api",title:"3.1. Composition API",sub:!0},{id:"options-api",title:"3.2. Options API",sub:!0},{id:"how-it-works",title:"4. How It Works"},{id:"handling-html-attributes",title:"4.1. Handling HTML attributes",sub:!0},{id:"non-reactive",title:"4.2. Non-reactive",sub:!0},{id:"reactive",title:"4.3. Reactive",sub:!0},{id:"testing-meta",title:"5. Testing Meta"}];return(P,v,x,M)=>{v(c(q,T({title:"Quasar Meta Plugin",desc:"A Quasar plugin to easily handle the meta tags of an app, helping you to add SEO. It manages meta, style and script tags, html and body attributes and page titles.",heading:"","edit-link":"quasar-plugins/meta",toc:g,related:h},M),{default:l((A,o,m,s)=>{if(o)o(`<p${s}><strong${s}>Better SEO for your website!</strong> The Meta plugin can dynamically change page title, manage <code class="doc-token"${s}>&lt;meta&gt;</code> tags, manage <code class="doc-token"${s}>&lt;html&gt;</code> and <code class="doc-token"${s}>&lt;body&gt;</code> DOM element attributes, add/remove/change <code class="doc-token"${s}>&lt;style&gt;</code> and <code class="doc-token"${s}>&lt;script&gt;</code> tags in the head of your document (useful for CDN stylesheets or for json-ld markup, for example), or manage <code class="doc-token"${s}>&lt;noscript&gt;</code> tags.</p><div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>Take full advantage of this feature by using it with <strong${s}>Quasar CLI</strong>, especially <strong${s}>for the SSR (Server-Side Rendering) builds</strong>. It also makes sense to use it for SPA (Single Page Applications). Although the meta information in this case will be added at run-time and not supplied directly by the webserver (as on SSR builds), modern web-crawlers like the `),o(c($,{to:"https://developers.google.com/search/docs/guides/javascript-seo-basics"},{default:l((i,e,u,a)=>{if(e)e("Googlebot");else return[t("Googlebot")]}),_:1},m,s)),o(" will render dynamic pages and extract out the dynamically set meta information.</p></div>"),o(c(b,{plugins:"Meta"},null,m,s)),o(`<h2 id="usage" class="doc-heading doc-h2"${s}>Usage</h2><p${s}>What the Meta plugin does is that it enables the use of a special property in your Vue components called <code class="doc-token"${s}>meta</code>. Take a look at the example below, with almost all of its features.</p><div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>Important!</p><p${s}>Make sure not to duplicate content that already exists in /index.html or /src/index.template.html. If you want to use the Meta plugin, the recommended way is to remove the same tags from the html template. But on use-cases where you know a tag will never change and you always want it rendered, then it’s better to have it only on the html template instead.</p></div><h3 id="composition-api" class="doc-heading doc-h3"${s}>Composition API</h3><p${s}>We will be using the `),o(c($,{to:"/vue-composables/use-meta"},{default:l((i,e,u,a)=>{if(e)e("useMeta");else return[t("useMeta")]}),_:1},m,s)),o(" composable.</p>"),o(c(p(k),{title:"Some .vue file"},{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useMeta <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token keyword"${a}>const</span> metaData <span class="token operator"${a}>=</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// sets document title</span>
  <span class="token literal-property property"${a}>title</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Index Page&#39;</span><span class="token punctuation"${a}>,</span>
  <span class="token comment"${a}>// optional; sets final title as &quot;Index Page - My Website&quot;, useful for multiple level meta</span>
  <span class="token function-variable function"${a}>titleTemplate</span><span class="token operator"${a}>:</span> <span class="token parameter"${a}>title</span> <span class="token operator"${a}>=&gt;</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>title<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}> - My Website</span><span class="token template-punctuation string"${a}>\`</span></span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// meta tags</span>
  <span class="token literal-property property"${a}>meta</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>description</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;description&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Page 1&#39;</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>keywords</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;keywords&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Quasar website&#39;</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>equiv</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token string-property property"${a}>&#39;http-equiv&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Content-Type&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;text/html; charset=UTF-8&#39;</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token comment"${a}>// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server</span>
    <span class="token literal-property property"${a}>ogTitle</span><span class="token operator"${a}>:</span>  <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>property</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;og:title&#39;</span><span class="token punctuation"${a}>,</span>
      <span class="token comment"${a}>// optional; similar to titleTemplate, but allows templating with other meta properties</span>
      <span class="token function"${a}>template</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>ogTitle</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
        <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>ogTitle<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}> - My Website</span><span class="token template-punctuation string"${a}>\`</span></span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// CSS tags</span>
  <span class="token literal-property property"${a}>link</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>material</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>rel</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;stylesheet&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>href</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;https://fonts.googleapis.com/icon?family=Material+Icons&#39;</span> <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// JS tags</span>
  <span class="token literal-property property"${a}>script</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>ldJson</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>type</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;application/ld+json&#39;</span><span class="token punctuation"${a}>,</span>
      <span class="token literal-property property"${a}>innerHTML</span><span class="token operator"${a}>:</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>{ &quot;@context&quot;: &quot;http://schema.org&quot; }</span><span class="token template-punctuation string"${a}>\`</span></span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// &lt;html&gt; attributes</span>
  <span class="token literal-property property"${a}>htmlAttr</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token string-property property"${a}>&#39;xmlns:cc&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;http://creativecommons.org/ns#&#39;</span><span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// generates &lt;html xmlns:cc=&quot;http://creativecommons.org/ns#&quot;&gt;,</span>
    <span class="token literal-property property"${a}>empty</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>undefined</span> <span class="token comment"${a}>// generates &lt;html empty&gt;</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// &lt;body&gt; attributes</span>
  <span class="token literal-property property"${a}>bodyAttr</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token string-property property"${a}>&#39;action-scope&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;xyz&#39;</span><span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// generates &lt;body action-scope=&quot;xyz&quot;&gt;</span>
    <span class="token literal-property property"${a}>empty</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>undefined</span> <span class="token comment"${a}>// generates &lt;body empty&gt;</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// &lt;noscript&gt; tags</span>
  <span class="token literal-property property"${a}>noscript</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>default</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;This is content for browsers with no JS (or disabled JS)&#39;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// needs to be called in setup()</span>
    <span class="token function"${a}>useMeta</span><span class="token punctuation"${a}>(</span>metaData<span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" metaData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// sets document title"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Index Page'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token comment"},'// optional; sets final title as "Index Page - My Website", useful for multiple level meta'),t(`
  `),n("span",{class:"token function-variable function"},"titleTemplate"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"title"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// meta tags"),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Page 1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"keywords"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'keywords'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Quasar website'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"equiv"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token string-property property"},"'http-equiv'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content-Type'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text/html; charset=UTF-8'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server"),t(`
    `),n("span",{class:"token literal-property property"},"ogTitle"),n("span",{class:"token operator"},":"),t("  "),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"property"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'og:title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// optional; similar to titleTemplate, but allows templating with other meta properties"),t(`
      `),n("span",{class:"token function"},"template"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ogTitle"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("ogTitle"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// CSS tags"),t(`
  `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"material"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"rel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'stylesheet'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://fonts.googleapis.com/icon?family=Material+Icons'"),t(),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// JS tags"),t(`
  `),n("span",{class:"token literal-property property"},"script"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"ldJson"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'application/ld+json'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"innerHTML"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'{ "@context": "http://schema.org" }'),n("span",{class:"token template-punctuation string"},"`")]),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <html> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"htmlAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'xmlns:cc'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://creativecommons.org/ns#'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <html xmlns:cc="http://creativecommons.org/ns#">,'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <html empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <body> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"bodyAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'action-scope'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xyz'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <body action-scope="xyz">'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <body empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <noscript> tags"),t(`
  `),n("span",{class:"token literal-property property"},"noscript"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is content for browsers with no JS (or disabled JS)'"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},"// needs to be called in setup()"),t(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),t("metaData"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,s)),o(`<p${s}>If you depend on the state of the component to compute the meta Object, then you can supply a Function instead of the Object itself. For more information, check the “Reactive” section on this page.</p><h3 id="options-api" class="doc-heading doc-h3"${s}>Options API</h3>`),o(c(p(k),{title:"Some .vue file"},{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> createMetaMixin <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token keyword"${a}>const</span> metaData <span class="token operator"${a}>=</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// sets document title</span>
  <span class="token literal-property property"${a}>title</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Index Page&#39;</span><span class="token punctuation"${a}>,</span>
  <span class="token comment"${a}>// optional; sets final title as &quot;Index Page - My Website&quot;, useful for multiple level meta</span>
  <span class="token function-variable function"${a}>titleTemplate</span><span class="token operator"${a}>:</span> <span class="token parameter"${a}>title</span> <span class="token operator"${a}>=&gt;</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>title<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}> - My Website</span><span class="token template-punctuation string"${a}>\`</span></span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// meta tags</span>
  <span class="token literal-property property"${a}>meta</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>description</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;description&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Page 1&#39;</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>keywords</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;keywords&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Quasar website&#39;</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>equiv</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token string-property property"${a}>&#39;http-equiv&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Content-Type&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;text/html; charset=UTF-8&#39;</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token comment"${a}>// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server</span>
    <span class="token literal-property property"${a}>ogTitle</span><span class="token operator"${a}>:</span>  <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>property</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;og:title&#39;</span><span class="token punctuation"${a}>,</span>
      <span class="token comment"${a}>// optional; similar to titleTemplate, but allows templating with other meta properties</span>
      <span class="token function"${a}>template</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>ogTitle</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
        <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>ogTitle<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}> - My Website</span><span class="token template-punctuation string"${a}>\`</span></span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// CSS tags</span>
  <span class="token literal-property property"${a}>link</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>material</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>rel</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;stylesheet&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>href</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;https://fonts.googleapis.com/icon?family=Material+Icons&#39;</span> <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// JS tags</span>
  <span class="token literal-property property"${a}>script</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>ldJson</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>type</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;application/ld+json&#39;</span><span class="token punctuation"${a}>,</span>
      <span class="token literal-property property"${a}>innerHTML</span><span class="token operator"${a}>:</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>{ &quot;@context&quot;: &quot;http://schema.org&quot; }</span><span class="token template-punctuation string"${a}>\`</span></span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// &lt;html&gt; attributes</span>
  <span class="token literal-property property"${a}>htmlAttr</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token string-property property"${a}>&#39;xmlns:cc&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;http://creativecommons.org/ns#&#39;</span><span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// generates &lt;html xmlns:cc=&quot;http://creativecommons.org/ns#&quot;&gt;</span>
    <span class="token literal-property property"${a}>empty</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>undefined</span> <span class="token comment"${a}>// generates &lt;html empty&gt;</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// &lt;body&gt; attributes</span>
  <span class="token literal-property property"${a}>bodyAttr</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token string-property property"${a}>&#39;action-scope&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;xyz&#39;</span><span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// generates &lt;body action-scope=&quot;xyz&quot;&gt;</span>
    <span class="token literal-property property"${a}>empty</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>undefined</span> <span class="token comment"${a}>// generates &lt;body empty&gt;</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// &lt;noscript&gt; tags</span>
  <span class="token literal-property property"${a}>noscript</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>default</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;This is content for browsers with no JS (or disabled JS)&#39;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>mixins</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
    <span class="token function"${a}>createMetaMixin</span><span class="token punctuation"${a}>(</span>metaData<span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>]</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createMetaMixin "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" metaData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// sets document title"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Index Page'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token comment"},'// optional; sets final title as "Index Page - My Website", useful for multiple level meta'),t(`
  `),n("span",{class:"token function-variable function"},"titleTemplate"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"title"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// meta tags"),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Page 1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"keywords"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'keywords'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Quasar website'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"equiv"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token string-property property"},"'http-equiv'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content-Type'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text/html; charset=UTF-8'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server"),t(`
    `),n("span",{class:"token literal-property property"},"ogTitle"),n("span",{class:"token operator"},":"),t("  "),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"property"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'og:title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// optional; similar to titleTemplate, but allows templating with other meta properties"),t(`
      `),n("span",{class:"token function"},"template"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ogTitle"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("ogTitle"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// CSS tags"),t(`
  `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"material"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"rel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'stylesheet'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://fonts.googleapis.com/icon?family=Material+Icons'"),t(),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// JS tags"),t(`
  `),n("span",{class:"token literal-property property"},"script"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"ldJson"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'application/ld+json'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"innerHTML"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'{ "@context": "http://schema.org" }'),n("span",{class:"token template-punctuation string"},"`")]),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <html> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"htmlAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'xmlns:cc'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://creativecommons.org/ns#'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <html xmlns:cc="http://creativecommons.org/ns#">'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <html empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <body> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"bodyAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'action-scope'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xyz'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <body action-scope="xyz">'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <body empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <noscript> tags"),t(`
  `),n("span",{class:"token literal-property property"},"noscript"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is content for browsers with no JS (or disabled JS)'"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token function"},"createMetaMixin"),n("span",{class:"token punctuation"},"("),t("metaData"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,s)),o(`<p${s}>For the Options API approach, if you depend on the state of the component to compute the meta Object, then you can supply a Function instead of the Object itself:</p>`),o(c(p(k),null,{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>mixins</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
    <span class="token function"${a}>createMetaMixin</span><span class="token punctuation"${a}>(</span><span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// &quot;this&quot; here refers to your component</span>
      <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span>
        <span class="token comment"${a}>// assuming \`this.myTitle\` exists in your mixed in component</span>
        <span class="token literal-property property"${a}>title</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>this</span><span class="token punctuation"${a}>.</span>myTitle
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>]</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token function"},"createMetaMixin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},'// "this" here refers to your component'),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// assuming `this.myTitle` exists in your mixed in component"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t(`myTitle
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,s)),o(`<h2 id="how-it-works" class="doc-heading doc-h2"${s}>How It Works</h2><p${s}>Metas are computed from .vue files in the order their vue components are activated by Vue Router (let’s call this a chain for further explanations). Example: App.vue &gt; SomeLayout.vue &gt; IndexPage.vue &gt; …?</p><p${s}>When a component that uses Meta plugin gets rendered or destroyed, it is added/removed to/from the chain and metas are updated accordingly.</p><h3 id="handling-html-attributes" class="doc-heading doc-h3"${s}>Handling HTML attributes</h3><p${s}>When you need to set a Boolean HTML attribute in <code class="doc-token"${s}>meta</code>, <code class="doc-token"${s}>link</code> or <code class="doc-token"${s}>script</code> sections, set its value to Boolean <code class="doc-token"${s}>true</code>.</p>`),o(c(p(k),null,{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token literal-property property"${a}>script</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>myScript</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>src</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;https://...&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>defer</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>
<span class="token comment"${a}>// will output:</span>
<span class="token comment"${a}>// &lt;script src=&quot;https://...&quot;</span>
<span class="token comment"${a}>//         defer</span>
<span class="token comment"${a}>//         data-qmeta=&quot;myScript&quot;&gt;</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"script"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"myScript"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"src"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://...'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"defer"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// will output:"),t(`
`),n("span",{class:"token comment"},'// <script src="https://..."'),t(`
`),n("span",{class:"token comment"},"//         defer"),t(`
`),n("span",{class:"token comment"},'//         data-qmeta="myScript">')])]),n(r)]}),_:1},m,s)),o(`<p${s}>If you have an attribute and you want to set it to the actual value of “true”, then use String form. More details below:</p>`),o(c(p(k),null,{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token literal-property property"${a}>someattribute</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;true&#39;</span>
<span class="token comment"${a}>// will output: someattribute=&quot;true&quot;</span>

<span class="token literal-property property"${a}>someattribute</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span>
<span class="token comment"${a}>// will output: someattribute</span>

<span class="token literal-property property"${a}>someattribute</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>void</span> <span class="token number"${a}>0</span>
<span class="token comment"${a}>// will NOT output the attribute</span>
<span class="token comment"${a}>// (useful when you set it upstream</span>
<span class="token comment"${a}>// and want to remove it downstream)</span>

<span class="token literal-property property"${a}>someattribute</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;&#39;</span>
<span class="token comment"${a}>// will output: someattribute=&quot;&quot;</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'true'"),t(`
`),n("span",{class:"token comment"},'// will output: someattribute="true"'),t(`

`),n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token comment"},"// will output: someattribute"),t(`

`),n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"void"),t(),n("span",{class:"token number"},"0"),t(`
`),n("span",{class:"token comment"},"// will NOT output the attribute"),t(`
`),n("span",{class:"token comment"},"// (useful when you set it upstream"),t(`
`),n("span",{class:"token comment"},"// and want to remove it downstream)"),t(`

`),n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
`),n("span",{class:"token comment"},'// will output: someattribute=""')])]),n(r)]}),_:1},m,s)),o(`<h3 id="non-reactive" class="doc-heading doc-h3"${s}>Non-reactive</h3><p${s}>Notice that all properties (except for title and titleTemplate) are Objects; you can override meta props defined in previous Vue components in the chain by using the same keys again. Example:</p>`),o(c(p(k),null,{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// first loaded Vue component</span>
<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>useMeta</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>meta</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>myKey</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;description&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;My Website&#39;</span> <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>// a subsequent Vue component in the chain;</span>
<span class="token comment"${a}>// this will override the first definition on &quot;myKey&quot;</span>
<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>useMeta</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>meta</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>myKey</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;description&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>content</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;Page 1&#39;</span> <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// first loaded Vue component"),t(`
`),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"myKey"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'My Website'"),t(),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token comment"},"// a subsequent Vue component in the chain;"),t(`
`),n("span",{class:"token comment"},'// this will override the first definition on "myKey"'),t(`
`),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"myKey"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Page 1'"),t(),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,s)),o(`<h3 id="reactive" class="doc-heading doc-h3"${s}>Reactive</h3><p${s}>In the section above, you noticed all of the meta props are “static”. But they can be dynamic (reactive) instead, should you wish. This is how you can manage them just as with a Vue computed property:</p>`),o(c(p(k),{title:"Some .vue file"},{default:l((i,e,u,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useMeta <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>
<span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> ref <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>const</span> title <span class="token operator"${a}>=</span> <span class="token function"${a}>ref</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;Some title&#39;</span><span class="token punctuation"${a}>)</span> <span class="token comment"${a}>// we define the &quot;title&quot; prop</span>

    <span class="token comment"${a}>// NOTICE the parameter here is a function</span>
    <span class="token comment"${a}>// Under the hood, it is converted to a Vue computed prop for reactivity</span>
    <span class="token function"${a}>useMeta</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span>
        <span class="token comment"${a}>// whenever &quot;title&quot; from above changes, your meta will automatically update</span>
        <span class="token literal-property property"${a}>title</span><span class="token operator"${a}>:</span> title<span class="token punctuation"${a}>.</span>value
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>

    <span class="token keyword"${a}>function</span> <span class="token function"${a}>setAnotherTitle</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      title<span class="token punctuation"${a}>.</span>value <span class="token operator"${a}>=</span> <span class="token string"${a}>&#39;Another title&#39;</span> <span class="token comment"${a}>// will automatically trigger a Meta update due to the binding</span>
    <span class="token punctuation"${a}>}</span>

    <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span>
      setAnotherTitle
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(c(r,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" title "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some title'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},'// we define the "title" prop'),t(`

    `),n("span",{class:"token comment"},"// NOTICE the parameter here is a function"),t(`
    `),n("span",{class:"token comment"},"// Under the hood, it is converted to a Vue computed prop for reactivity"),t(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},'// whenever "title" from above changes, your meta will automatically update'),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" title"),n("span",{class:"token punctuation"},"."),t(`value
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setAnotherTitle"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'Another title'"),t(),n("span",{class:"token comment"},"// will automatically trigger a Meta update due to the binding"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      setAnotherTitle
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,s)),o(`<h2 id="testing-meta" class="doc-heading doc-h2"${s}>Testing Meta</h2><p${s}>Before you deploy, you really should make sure that your work on the meta tags is compliant. Although you could just copy and paste your link into a Discord chat, a Facebook post or a Tweet, we recommend verifying with `),o(c($,{to:"https://metatags.io/"},{default:l((i,e,u,a)=>{if(e)e("https://metatags.io/");else return[t("https://metatags.io/")]}),_:1},m,s)),o(`.</p><div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>Important!</p><p${s}><strong${s}>This test will only work for SSR builds</strong> because SSR directly supplies the rendered HTML when accessing the webserver (as opposed to SPA or PWA which supplies an empty page then loads the code that renders the page on client’s browser). Services like above (metatags.io) expect the page to be already rendered when fetching it (it does not run the JS to render it themselves).</p></div>`);else return[n("p",null,[n("strong",null,"Better SEO for your website!"),t(" The Meta plugin can dynamically change page title, manage "),n("code",{class:"doc-token"},"<meta>"),t(" tags, manage "),n("code",{class:"doc-token"},"<html>"),t(" and "),n("code",{class:"doc-token"},"<body>"),t(" DOM element attributes, add/remove/change "),n("code",{class:"doc-token"},"<style>"),t(" and "),n("code",{class:"doc-token"},"<script>"),t(" tags in the head of your document (useful for CDN stylesheets or for json-ld markup, for example), or manage "),n("code",{class:"doc-token"},"<noscript>"),t(" tags.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[t("Take full advantage of this feature by using it with "),n("strong",null,"Quasar CLI"),t(", especially "),n("strong",null,"for the SSR (Server-Side Rendering) builds"),t(". It also makes sense to use it for SPA (Single Page Applications). Although the meta information in this case will be added at run-time and not supplied directly by the webserver (as on SSR builds), modern web-crawlers like the "),n($,{to:"https://developers.google.com/search/docs/guides/javascript-seo-basics"},{default:l(()=>[t("Googlebot")]),_:1}),t(" will render dynamic pages and extract out the dynamically set meta information.")])]),n(b,{plugins:"Meta"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:i=>p(y)("usage")},"Usage",8,["onClick"]),n("p",null,[t("What the Meta plugin does is that it enables the use of a special property in your Vue components called "),n("code",{class:"doc-token"},"meta"),t(". Take a look at the example below, with almost all of its features.")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Important!"),n("p",null,"Make sure not to duplicate content that already exists in /index.html or /src/index.template.html. If you want to use the Meta plugin, the recommended way is to remove the same tags from the html template. But on use-cases where you know a tag will never change and you always want it rendered, then it’s better to have it only on the html template instead.")]),n("h3",{id:"composition-api",class:"doc-heading doc-h3",onClick:i=>p(y)("composition-api")},"Composition API",8,["onClick"]),n("p",null,[t("We will be using the "),n($,{to:"/vue-composables/use-meta"},{default:l(()=>[t("useMeta")]),_:1}),t(" composable.")]),n(p(k),{title:"Some .vue file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" metaData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// sets document title"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Index Page'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token comment"},'// optional; sets final title as "Index Page - My Website", useful for multiple level meta'),t(`
  `),n("span",{class:"token function-variable function"},"titleTemplate"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"title"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// meta tags"),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Page 1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"keywords"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'keywords'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Quasar website'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"equiv"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token string-property property"},"'http-equiv'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content-Type'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text/html; charset=UTF-8'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server"),t(`
    `),n("span",{class:"token literal-property property"},"ogTitle"),n("span",{class:"token operator"},":"),t("  "),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"property"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'og:title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// optional; similar to titleTemplate, but allows templating with other meta properties"),t(`
      `),n("span",{class:"token function"},"template"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ogTitle"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("ogTitle"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// CSS tags"),t(`
  `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"material"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"rel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'stylesheet'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://fonts.googleapis.com/icon?family=Material+Icons'"),t(),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// JS tags"),t(`
  `),n("span",{class:"token literal-property property"},"script"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"ldJson"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'application/ld+json'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"innerHTML"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'{ "@context": "http://schema.org" }'),n("span",{class:"token template-punctuation string"},"`")]),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <html> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"htmlAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'xmlns:cc'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://creativecommons.org/ns#'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <html xmlns:cc="http://creativecommons.org/ns#">,'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <html empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <body> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"bodyAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'action-scope'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xyz'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <body action-scope="xyz">'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <body empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <noscript> tags"),t(`
  `),n("span",{class:"token literal-property property"},"noscript"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is content for browsers with no JS (or disabled JS)'"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},"// needs to be called in setup()"),t(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),t("metaData"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"If you depend on the state of the component to compute the meta Object, then you can supply a Function instead of the Object itself. For more information, check the “Reactive” section on this page."),n("h3",{id:"options-api",class:"doc-heading doc-h3",onClick:i=>p(y)("options-api")},"Options API",8,["onClick"]),n(p(k),{title:"Some .vue file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createMetaMixin "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" metaData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// sets document title"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Index Page'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token comment"},'// optional; sets final title as "Index Page - My Website", useful for multiple level meta'),t(`
  `),n("span",{class:"token function-variable function"},"titleTemplate"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"title"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// meta tags"),t(`
  `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Page 1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"keywords"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'keywords'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Quasar website'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"equiv"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token string-property property"},"'http-equiv'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content-Type'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'text/html; charset=UTF-8'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token comment"},"// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server"),t(`
    `),n("span",{class:"token literal-property property"},"ogTitle"),n("span",{class:"token operator"},":"),t("  "),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"property"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'og:title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// optional; similar to titleTemplate, but allows templating with other meta properties"),t(`
      `),n("span",{class:"token function"},"template"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ogTitle"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("ogTitle"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - My Website"),n("span",{class:"token template-punctuation string"},"`")]),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// CSS tags"),t(`
  `),n("span",{class:"token literal-property property"},"link"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"material"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"rel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'stylesheet'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"href"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://fonts.googleapis.com/icon?family=Material+Icons'"),t(),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// JS tags"),t(`
  `),n("span",{class:"token literal-property property"},"script"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"ldJson"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'application/ld+json'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"innerHTML"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'{ "@context": "http://schema.org" }'),n("span",{class:"token template-punctuation string"},"`")]),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <html> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"htmlAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'xmlns:cc'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://creativecommons.org/ns#'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <html xmlns:cc="http://creativecommons.org/ns#">'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <html empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <body> attributes"),t(`
  `),n("span",{class:"token literal-property property"},"bodyAttr"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token string-property property"},"'action-scope'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xyz'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},'// generates <body action-scope="xyz">'),t(`
    `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"undefined"),t(),n("span",{class:"token comment"},"// generates <body empty>"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token comment"},"// <noscript> tags"),t(`
  `),n("span",{class:"token literal-property property"},"noscript"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is content for browsers with no JS (or disabled JS)'"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token function"},"createMetaMixin"),n("span",{class:"token punctuation"},"("),t("metaData"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"For the Options API approach, if you depend on the state of the component to compute the meta Object, then you can supply a Function instead of the Object itself:"),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"mixins"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token function"},"createMetaMixin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},'// "this" here refers to your component'),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// assuming `this.myTitle` exists in your mixed in component"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t(`myTitle
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("h2",{id:"how-it-works",class:"doc-heading doc-h2",onClick:i=>p(y)("how-it-works")},"How It Works",8,["onClick"]),n("p",null,"Metas are computed from .vue files in the order their vue components are activated by Vue Router (let’s call this a chain for further explanations). Example: App.vue > SomeLayout.vue > IndexPage.vue > …?"),n("p",null,"When a component that uses Meta plugin gets rendered or destroyed, it is added/removed to/from the chain and metas are updated accordingly."),n("h3",{id:"handling-html-attributes",class:"doc-heading doc-h3",onClick:i=>p(y)("handling-html-attributes")},"Handling HTML attributes",8,["onClick"]),n("p",null,[t("When you need to set a Boolean HTML attribute in "),n("code",{class:"doc-token"},"meta"),t(", "),n("code",{class:"doc-token"},"link"),t(" or "),n("code",{class:"doc-token"},"script"),t(" sections, set its value to Boolean "),n("code",{class:"doc-token"},"true"),t(".")]),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"script"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"myScript"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"src"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://...'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"defer"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// will output:"),t(`
`),n("span",{class:"token comment"},'// <script src="https://..."'),t(`
`),n("span",{class:"token comment"},"//         defer"),t(`
`),n("span",{class:"token comment"},'//         data-qmeta="myScript">')])]),n(r)]),_:1}),n("p",null,"If you have an attribute and you want to set it to the actual value of “true”, then use String form. More details below:"),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'true'"),t(`
`),n("span",{class:"token comment"},'// will output: someattribute="true"'),t(`

`),n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token comment"},"// will output: someattribute"),t(`

`),n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"void"),t(),n("span",{class:"token number"},"0"),t(`
`),n("span",{class:"token comment"},"// will NOT output the attribute"),t(`
`),n("span",{class:"token comment"},"// (useful when you set it upstream"),t(`
`),n("span",{class:"token comment"},"// and want to remove it downstream)"),t(`

`),n("span",{class:"token literal-property property"},"someattribute"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),t(`
`),n("span",{class:"token comment"},'// will output: someattribute=""')])]),n(r)]),_:1}),n("h3",{id:"non-reactive",class:"doc-heading doc-h3",onClick:i=>p(y)("non-reactive")},"Non-reactive",8,["onClick"]),n("p",null,"Notice that all properties (except for title and titleTemplate) are Objects; you can override meta props defined in previous Vue components in the chain by using the same keys again. Example:"),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// first loaded Vue component"),t(`
`),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"myKey"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'My Website'"),t(),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token comment"},"// a subsequent Vue component in the chain;"),t(`
`),n("span",{class:"token comment"},'// this will override the first definition on "myKey"'),t(`
`),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"meta"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"myKey"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Page 1'"),t(),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("h3",{id:"reactive",class:"doc-heading doc-h3",onClick:i=>p(y)("reactive")},"Reactive",8,["onClick"]),n("p",null,"In the section above, you noticed all of the meta props are “static”. But they can be dynamic (reactive) instead, should you wish. This is how you can manage them just as with a Vue computed property:"),n(p(k),{title:"Some .vue file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" title "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some title'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},'// we define the "title" prop'),t(`

    `),n("span",{class:"token comment"},"// NOTICE the parameter here is a function"),t(`
    `),n("span",{class:"token comment"},"// Under the hood, it is converted to a Vue computed prop for reactivity"),t(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},'// whenever "title" from above changes, your meta will automatically update'),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" title"),n("span",{class:"token punctuation"},"."),t(`value
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setAnotherTitle"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'Another title'"),t(),n("span",{class:"token comment"},"// will automatically trigger a Meta update due to the binding"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      setAnotherTitle
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("h2",{id:"testing-meta",class:"doc-heading doc-h2",onClick:i=>p(y)("testing-meta")},"Testing Meta",8,["onClick"]),n("p",null,[t("Before you deploy, you really should make sure that your work on the meta tags is compliant. Although you could just copy and paste your link into a Discord chat, a Facebook post or a Tweet, we recommend verifying with "),n($,{to:"https://metatags.io/"},{default:l(()=>[t("https://metatags.io/")]),_:1}),t(".")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Important!"),n("p",null,[n("strong",null,"This test will only work for SSR builds"),t(" because SSR directly supplies the rendered HTML when accessing the webserver (as opposed to SPA or PWA which supplies an empty page then loads the code that renders the page on client’s browser). Services like above (metatags.io) expect the page to be already rendered when fetching it (it does not run the JS to render it themselves).")])])]}),_:1},x))}}},d=f.setup;f.setup=(w,h)=>{const g=S();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-plugins/meta.md"),d?d(w,h):void 0};const Y=C(f,[["__file","meta.md"]]);export{Y as default};
