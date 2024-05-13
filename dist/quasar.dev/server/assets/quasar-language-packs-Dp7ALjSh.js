import{resolveComponent as R,mergeProps as D,withCtx as p,createTextVNode as a,unref as k,createVNode as n,useSSRContext as U}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as W,a as y}from"./DocPage-DKr-0pQn.js";import{D as C}from"./DocApi-Df9ryd6x.js";import{D as x}from"./DocInstallation-DgMazQjg.js";import{D as g}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as N}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"./DocCardTitle-BSnqQsiz.js";import"./utils-DKnLoYai.js";import"./DocCode-BVg0tuSc.js";import"prismjs";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const Q={__name:"quasar-language-packs",__ssrInlineRender:!0,setup(v){const q=[{name:"RTL Support",category:"Options & Helpers",path:"/options/rtl-support"},{name:"App Internationalization",category:"Options & Helpers",path:"/options/app-internationalization"}],h=[{id:"lang-api",title:"2. Lang API",deep:!0},{id:"configuration",title:"3. Configuration",deep:!0},{id:"configuring-the-default-language-pack",title:"4. Configuring the default Language Pack"},{id:"hardcoded",title:"4.1. Hardcoded",sub:!0},{id:"dynamical-non-ssr-",title:"4.2. Dynamical (non-SSR)",sub:!0},{id:"dynamical-ssr-",title:"4.3. Dynamical (SSR)",sub:!0},{id:"change-quasar-language-pack-at-runtime",title:"5. Change Quasar Language Pack at Runtime"},{id:"using-quasar-language-pack-in-app-space",title:"6. Using Quasar Language Pack in App Space"},{id:"detecting-locale",title:"7. Detecting Locale"}];return(O,P,j,S)=>{const d=R("q-tab-panel");P(u(W,D({title:"Quasar Language Packs",desc:"How to configure the Quasar language packs in a Quasar app.",heading:"","edit-link":"options/quasar-language-packs",toc:h,related:q},S),{default:p((E,l,m,o)=>{if(l)l(`<p${o}>A Quasar Language Pack refers to the internationalization of Quasar’s own components, some of which have labels.</p>`),l(u(C,{file:"Lang"},null,m,o)),l(u(x,{title:"Configuration",config:"lang"},null,m,o)),l(`<div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>WARNING</p><p${o}>It should be noted that what is described below is the internationalization of Quasar components only. If you need to internationalize your own components, read `),l(u(y,{to:"/options/app-internationalization"},{default:p((r,e,i,s)=>{if(e)e("App Internationalization");else return[a("App Internationalization")]}),_:1},m,o)),l(` documentation page.</p></div><p${o}>As mentioned above, some Quasar components have their own labels. When it comes to internationalization, one option is to configure labels through the label properties on each instance of Quasar components (like QTable). This is how you can customize the text to match the selected language. This however, takes time and adds unnecessary complexity to your website/app. <strong${o}>Instead</strong>, you can use the Quasar Language Packs which have a number of standard label definitions translated for you, like “Cancel”, “Clear”, “Select”, “Update”, etc. No need to translate these again! And it comes out of the box.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>For a complete list of available Quasar Languages, check `),l(u(y,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:p((r,e,i,s)=>{if(e)e("Quasar Languages on GitHub");else return[a("Quasar Languages on GitHub")]}),_:1},m,o)),l(`. <br${o}><br${o}><strong${o}>If your desired language is not on that list</strong>, then feel free to submit a PR to add it. It takes from 5 to 10 minutes at most. We kindly welcome any language!</p></div><h2 id="configuring-the-default-language-pack" class="doc-heading doc-h2"${o}>Configuring the default Language Pack</h2><p${o}>Unless configured otherwise (see below), Quasar uses the <code class="doc-token"${o}>en-US</code> Language Pack by default.</p><h3 id="hardcoded" class="doc-heading doc-h3"${o}>Hardcoded</h3><p${o}>If the default Quasar Language Pack is not dynamically determined (does not depend on cookies for example), then you can:</p><h4 id="quasar-cli" class="doc-heading doc-h4"${o}>Quasar CLI</h4><p${o}>Edit the <code class="doc-token"${o}>/quasar.config</code> file:</p>`),l(u(k(g),{title:"/quasar.config file"},{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>lang</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;de&#39;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'de'"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,o)),l(`<h4 id="quasar-vite-plugin" class="doc-heading doc-h4"${o}>Quasar Vite Plugin</h4><p${o}>Edit your <code class="doc-token"${o}>main.js</code>:</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// ...</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Quasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token comment"${s}>// ...</span>
<span class="token keyword"${s}>import</span> langDe <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/lang/de&#39;</span>
<span class="token comment"${s}>// ...</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span>Quasar<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...,</span>
  <span class="token literal-property property"${s}>lang</span><span class="token operator"${s}>:</span> langDe
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(" langDe "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/lang/de'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...,"),a(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),a(` langDe
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,o)),l(`<h4 id="vue-cli" class="doc-heading doc-h4"${o}>Vue CLI</h4><p${o}>Edit your <code class="doc-token"${o}>main.js</code>:</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// ...</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Quasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token comment"${s}>// ...</span>
<span class="token keyword"${s}>import</span> langDe <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/lang/de&#39;</span>
<span class="token comment"${s}>// ...</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span>Quasar<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...,</span>
  <span class="token literal-property property"${s}>lang</span><span class="token operator"${s}>:</span> langDe
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(" langDe "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/lang/de'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...,"),a(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),a(` langDe
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},m,o)),l(`<h4 id="quasar-umd" class="doc-heading doc-h4"${o}>Quasar UMD</h4><p${o}>Include the language pack JS tag for your Quasar version and also tell Quasar to use it. Example:</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>&lt;!-- include this after Quasar JS tag --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span> <span class="token attr-name"${s}>src</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>https://cdn.jsdelivr.net/npm/quasar@2/dist/lang/de.umd.prod.js<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
  Quasar<span class="token punctuation"${s}>.</span>lang<span class="token punctuation"${s}>.</span><span class="token function"${s}>set</span><span class="token punctuation"${s}>(</span>Quasar<span class="token punctuation"${s}>.</span>lang<span class="token punctuation"${s}>.</span>de<span class="token punctuation"${s}>)</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"<!-- include this after Quasar JS tag -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cdn.jsdelivr.net/npm/quasar@2/dist/lang/de.umd.prod.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),a("de"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},m,o)),l(`<p${o}>Check what tags you need to include in your HTML files on `),l(u(y,{to:"/start/umd"},{default:p((r,e,i,s)=>{if(e)e("UMD / Standalone");else return[a("UMD / Standalone")]}),_:1},m,o)),l(` page.</p><h3 id="dynamical-non-ssr-" class="doc-heading doc-h3"${o}>Dynamical (non-SSR)</h3><p${o}>Quasar CLI: If your desired Quasar Language Pack must be dynamically selected (example: depends on a cookie), then you need to create a boot file: <code class="doc-token"${o}>$ quasar new boot quasar-lang-pack [--format ts]</code>. This will create <code class="doc-token"${o}>/src/boot/quasar-lang-pack.js</code> file. Edit it to:</p>`),l(u(k(g),{tabs:["With @quasar/app-vite","With @quasar/app-webpack"]},{default:p((r,e,i,s)=>{if(e)e(u(d,{class:"q-pa-none",name:"With @quasar/app-vite"},{default:p((b,$,w,t)=>{if($)$(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Quasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token comment"${t}>// relative path to your node_modules/quasar/..</span>
<span class="token comment"${t}>// change to YOUR path</span>
<span class="token keyword"${t}>const</span> langList <span class="token operator"${t}>=</span> <span class="token keyword"${t}>import</span><span class="token punctuation"${t}>.</span>meta<span class="token punctuation"${t}>.</span><span class="token function"${t}>glob</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;../../node_modules/quasar/lang/*.mjs&#39;</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// or just a select few (example below with only DE and FR):</span>
<span class="token comment"${t}>// import.meta.glob(&#39;../../node_modules/quasar/lang/(de|fr).mjs&#39;)</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token keyword"${t}>async</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> langIso <span class="token operator"${t}>=</span> <span class="token string"${t}>&#39;de&#39;</span> <span class="token comment"${t}>// ... some logic to determine it (use Cookies Plugin?)</span>

  <span class="token keyword"${t}>try</span> <span class="token punctuation"${t}>{</span>
    langList<span class="token punctuation"${t}>[</span> <span class="token template-string"${t}><span class="token template-punctuation string"${t}>\`</span><span class="token string"${t}>../../node_modules/quasar/lang/</span><span class="token interpolation"${t}><span class="token interpolation-punctuation punctuation"${t}>\${</span> langIso <span class="token interpolation-punctuation punctuation"${t}>}</span></span><span class="token string"${t}>.mjs</span><span class="token template-punctuation string"${t}>\`</span></span> <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>lang</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      Quasar<span class="token punctuation"${t}>.</span>lang<span class="token punctuation"${t}>.</span><span class="token function"${t}>set</span><span class="token punctuation"${t}>(</span>lang<span class="token punctuation"${t}>.</span>default<span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
  <span class="token keyword"${t}>catch</span> <span class="token punctuation"${t}>(</span>err<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// Requested Quasar Language Pack does not exist,</span>
    <span class="token comment"${t}>// let&#39;s not break the app, so catching error</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),$(u(c,null,null,w,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// relative path to your node_modules/quasar/.."),a(`
`),n("span",{class:"token comment"},"// change to YOUR path"),a(`
`),n("span",{class:"token keyword"},"const"),a(" langList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"glob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../node_modules/quasar/lang/*.mjs'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// or just a select few (example below with only DE and FR):"),a(`
`),n("span",{class:"token comment"},"// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    langList`),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"../../node_modules/quasar/lang/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a(" langIso "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".mjs"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},i,s)),e(u(d,{class:"q-pa-none",name:"With @quasar/app-webpack"},{default:p((b,$,w,t)=>{if($)$(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Quasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token keyword"${t}>async</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> langIso <span class="token operator"${t}>=</span> <span class="token string"${t}>&#39;de&#39;</span> <span class="token comment"${t}>// ... some logic to determine it (use Cookies Plugin?)</span>

  <span class="token keyword"${t}>try</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>await</span> <span class="token keyword"${t}>import</span><span class="token punctuation"${t}>(</span>
      <span class="token comment"${t}>/* webpackInclude: /(de|en-US)\\.js$/ */</span>
      <span class="token string"${t}>&#39;quasar/lang/&#39;</span> <span class="token operator"${t}>+</span> langIso
    <span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>lang</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      Quasar<span class="token punctuation"${t}>.</span>lang<span class="token punctuation"${t}>.</span><span class="token function"${t}>set</span><span class="token punctuation"${t}>(</span>lang<span class="token punctuation"${t}>.</span>default<span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
  <span class="token keyword"${t}>catch</span> <span class="token punctuation"${t}>(</span>err<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// Requested Quasar Language Pack does not exist,</span>
    <span class="token comment"${t}>// let&#39;s not break the app, so catching error</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),$(u(c,null,null,w,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
      `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` langIso
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},i,s));else return[n(d,{class:"q-pa-none",name:"With @quasar/app-vite"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// relative path to your node_modules/quasar/.."),a(`
`),n("span",{class:"token comment"},"// change to YOUR path"),a(`
`),n("span",{class:"token keyword"},"const"),a(" langList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"glob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../node_modules/quasar/lang/*.mjs'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// or just a select few (example below with only DE and FR):"),a(`
`),n("span",{class:"token comment"},"// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    langList`),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"../../node_modules/quasar/lang/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a(" langIso "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".mjs"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n(d,{class:"q-pa-none",name:"With @quasar/app-webpack"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
      `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` langIso
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]}),_:1},m,o)),l(`<p${o}>Then register this boot file into the <code class="doc-token"${o}>/quasar.config</code> file:</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>boot</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
  <span class="token string"${s}>&#39;quasar-lang-pack&#39;</span>
<span class="token punctuation"${s}>]</span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token string"},"'quasar-lang-pack'"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(c)]}),_:1},m,o)),l(`<div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>Always constrain a dynamic import</p><p${o}>Notice the use of the `),l(u(y,{to:"https://webpack.js.org/api/module-methods/#magic-comments"},{default:p((r,e,i,s)=>{if(e)e("Webpack magic comment");else return[a("Webpack magic comment")]}),_:1},m,o)),l(` - <code class="doc-token"${o}>webpackInclude</code>. Otherwise all the available language packs will be bundled, resulting in an increase in the compilation time and the bundle size. See `),l(u(y,{to:"https://quasar.dev/quasar-cli/lazy-loading#Caveat-for-dynamic-imports"},{default:p((r,e,i,s)=>{if(e)e("Caveat for dynamic imports");else return[a("Caveat for dynamic imports")]}),_:1},m,o)),l(`</p></div><h3 id="dynamical-ssr-" class="doc-heading doc-h3"${o}>Dynamical (SSR)</h3><p${o}>When dealing with SSR, we can’t use singleton objects because that would pollute sessions. As a result, as opposed to the dynamical example above (read it first!), you must also specify the <code class="doc-token"${o}>ssrContext</code> from your boot file:</p>`),l(u(k(g),{tabs:["With @quasar/app-vite","With @quasar/app-webpack"]},{default:p((r,e,i,s)=>{if(e)e(u(d,{class:"q-pa-none",name:"With @quasar/app-vite"},{default:p((b,$,w,t)=>{if($)$(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Quasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token comment"${t}>// relative path to your node_modules/quasar/..</span>
<span class="token comment"${t}>// change to YOUR path</span>
<span class="token keyword"${t}>const</span> langList <span class="token operator"${t}>=</span> <span class="token keyword"${t}>import</span><span class="token punctuation"${t}>.</span>meta<span class="token punctuation"${t}>.</span><span class="token function"${t}>glob</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;../../node_modules/quasar/lang/*.mjs&#39;</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// or just a select few (example below with only DE and FR):</span>
<span class="token comment"${t}>// import.meta.glob(&#39;../../node_modules/quasar/lang/(de|fr).mjs&#39;)</span>

<span class="token comment"${t}>// ! NOTICE ssrContext param:</span>
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token keyword"${t}>async</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> ssrContext <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> langIso <span class="token operator"${t}>=</span> <span class="token string"${t}>&#39;de&#39;</span> <span class="token comment"${t}>// ... some logic to determine it (use Cookies Plugin?)</span>

  <span class="token keyword"${t}>try</span> <span class="token punctuation"${t}>{</span>
    langList<span class="token punctuation"${t}>[</span> <span class="token template-string"${t}><span class="token template-punctuation string"${t}>\`</span><span class="token string"${t}>../../node_modules/quasar/lang/</span><span class="token interpolation"${t}><span class="token interpolation-punctuation punctuation"${t}>\${</span> langIso <span class="token interpolation-punctuation punctuation"${t}>}</span></span><span class="token string"${t}>.mjs</span><span class="token template-punctuation string"${t}>\`</span></span> <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>lang</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      Quasar<span class="token punctuation"${t}>.</span>lang<span class="token punctuation"${t}>.</span><span class="token function"${t}>set</span><span class="token punctuation"${t}>(</span>lang<span class="token punctuation"${t}>.</span>default<span class="token punctuation"${t}>,</span> ssrContext<span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
  <span class="token keyword"${t}>catch</span> <span class="token punctuation"${t}>(</span>err<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// Requested Quasar Language Pack does not exist,</span>
    <span class="token comment"${t}>// let&#39;s not break the app, so catching error</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),$(u(c,null,null,w,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// relative path to your node_modules/quasar/.."),a(`
`),n("span",{class:"token comment"},"// change to YOUR path"),a(`
`),n("span",{class:"token keyword"},"const"),a(" langList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"glob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../node_modules/quasar/lang/*.mjs'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// or just a select few (example below with only DE and FR):"),a(`
`),n("span",{class:"token comment"},"// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')"),a(`

`),n("span",{class:"token comment"},"// ! NOTICE ssrContext param:"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    langList`),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"../../node_modules/quasar/lang/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a(" langIso "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".mjs"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},i,s)),e(u(d,{class:"q-pa-none",name:"With @quasar/app-webpack"},{default:p((b,$,w,t)=>{if($)$(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> Quasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token comment"${t}>// ! NOTICE ssrContext param:</span>
<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token keyword"${t}>async</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> ssrContext <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>const</span> langIso <span class="token operator"${t}>=</span> <span class="token string"${t}>&#39;de&#39;</span> <span class="token comment"${t}>// ... some logic to determine it (use Cookies Plugin?)</span>

  <span class="token keyword"${t}>try</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>await</span> <span class="token keyword"${t}>import</span><span class="token punctuation"${t}>(</span>
      <span class="token comment"${t}>/* webpackInclude: /(de|en-US)\\.js$/ */</span>
      <span class="token string"${t}>&#39;quasar/lang/&#39;</span> <span class="token operator"${t}>+</span> langIso
    <span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>.</span><span class="token function"${t}>then</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>lang</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      Quasar<span class="token punctuation"${t}>.</span>lang<span class="token punctuation"${t}>.</span><span class="token function"${t}>set</span><span class="token punctuation"${t}>(</span>lang<span class="token punctuation"${t}>.</span>default<span class="token punctuation"${t}>,</span> ssrContext<span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
  <span class="token punctuation"${t}>}</span>
  <span class="token keyword"${t}>catch</span> <span class="token punctuation"${t}>(</span>err<span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// Requested Quasar Language Pack does not exist,</span>
    <span class="token comment"${t}>// let&#39;s not break the app, so catching error</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),$(u(c,null,null,w,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// ! NOTICE ssrContext param:"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
      `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` langIso
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},i,s));else return[n(d,{class:"q-pa-none",name:"With @quasar/app-vite"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// relative path to your node_modules/quasar/.."),a(`
`),n("span",{class:"token comment"},"// change to YOUR path"),a(`
`),n("span",{class:"token keyword"},"const"),a(" langList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"glob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../node_modules/quasar/lang/*.mjs'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// or just a select few (example below with only DE and FR):"),a(`
`),n("span",{class:"token comment"},"// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')"),a(`

`),n("span",{class:"token comment"},"// ! NOTICE ssrContext param:"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    langList`),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"../../node_modules/quasar/lang/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a(" langIso "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".mjs"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n(d,{class:"q-pa-none",name:"With @quasar/app-webpack"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// ! NOTICE ssrContext param:"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
      `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` langIso
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]}),_:1},m,o)),l(`<h2 id="change-quasar-language-pack-at-runtime" class="doc-heading doc-h2"${o}>Change Quasar Language Pack at Runtime</h2><p${o}>Example with a QSelect to dynamically change the Quasar components language:</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-select</span>
    <span class="token attr-name"${s}>v-model</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>lang<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token attr-name"${s}>:options</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>langOptions<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Quasar Language<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token attr-name"${s}>dense</span>
    <span class="token attr-name"${s}>borderless</span>
    <span class="token attr-name"${s}>emit-value</span>
    <span class="token attr-name"${s}>map-options</span>
    <span class="token attr-name"${s}>options-dense</span>
    <span class="token special-attr"${s}><span class="token attr-name"${s}>style</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span><span class="token value css language-css"${s}><span class="token property"${s}>min-width</span><span class="token punctuation"${s}>:</span> 150px</span><span class="token punctuation"${s}>&quot;</span></span></span>
  <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token keyword"${s}>import</span> languages <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/lang/index.json&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref<span class="token punctuation"${s}>,</span> watch <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>const</span> appLanguages <span class="token operator"${s}>=</span> languages<span class="token punctuation"${s}>.</span><span class="token function"${s}>filter</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>lang</span> <span class="token operator"${s}>=&gt;</span>
  <span class="token punctuation"${s}>[</span> <span class="token string"${s}>&#39;de&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;en-US&#39;</span> <span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>.</span><span class="token function"${s}>includes</span><span class="token punctuation"${s}>(</span>lang<span class="token punctuation"${s}>.</span>isoName<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>const</span> langOptions <span class="token operator"${s}>=</span> appLanguages<span class="token punctuation"${s}>.</span><span class="token function"${s}>map</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>lang</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>label</span><span class="token operator"${s}>:</span> lang<span class="token punctuation"${s}>.</span>nativeName<span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>value</span><span class="token operator"${s}>:</span> lang<span class="token punctuation"${s}>.</span>isoName
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
    <span class="token keyword"${s}>const</span> lang <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span>$q<span class="token punctuation"${s}>.</span>lang<span class="token punctuation"${s}>.</span>isoName<span class="token punctuation"${s}>)</span>

    <span class="token function"${s}>watch</span><span class="token punctuation"${s}>(</span>lang<span class="token punctuation"${s}>,</span> <span class="token parameter"${s}>val</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// dynamic import, so loading on demand only</span>
      <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span>
        <span class="token comment"${s}>/* webpackInclude: /(de|en-US)\\.js$/ */</span>
        <span class="token string"${s}>&#39;quasar/lang/&#39;</span> <span class="token operator"${s}>+</span> val
        <span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>.</span><span class="token function"${s}>then</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>lang</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
          $q<span class="token punctuation"${s}>.</span>lang<span class="token punctuation"${s}>.</span><span class="token function"${s}>set</span><span class="token punctuation"${s}>(</span>lang<span class="token punctuation"${s}>.</span>default<span class="token punctuation"${s}>)</span>
        <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      lang<span class="token punctuation"${s}>,</span>
      langOptions
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lang"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("langOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Quasar Language"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"dense"),a(`
    `),n("span",{class:"token attr-name"},"borderless"),a(`
    `),n("span",{class:"token attr-name"},"emit-value"),a(`
    `),n("span",{class:"token attr-name"},"map-options"),a(`
    `),n("span",{class:"token attr-name"},"options-dense"),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"min-width"),n("span",{class:"token punctuation"},":"),a(" 150px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" languages "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/lang/index.json'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" appLanguages "),n("span",{class:"token operator"},"="),a(" languages"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(`
  `),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token string"},"'de'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'en-US'"),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("isoName"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" langOptions "),n("span",{class:"token operator"},"="),a(" appLanguages"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(" lang"),n("span",{class:"token punctuation"},"."),a("nativeName"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" lang"),n("span",{class:"token punctuation"},"."),a(`isoName
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" lang "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),a("isoName"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// dynamic import, so loading on demand only"),a(`
      `),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
        `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` val
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          $q`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      lang`),n("span",{class:"token punctuation"},","),a(`
      langOptions
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},m,o)),l(`<h2 id="using-quasar-language-pack-in-app-space" class="doc-heading doc-h2"${o}>Using Quasar Language Pack in App Space</h2><p${o}>Although the Quasar Language Packs <strong${o}>are designed only for Quasar components internal usage</strong>, you can still use their labels for your own website/app components too.</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}>&quot;Close&quot; label in current Quasar Language Pack is:
{{ $q.lang.label.close }}</code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,`"Close" label in current Quasar Language Pack is:
{{ $q.lang.label.close }}`)]),n(c)]}),_:1},m,o)),l(`<p${o}>Check a Quasar Language Pack on `),l(u(y,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:p((r,e,i,s)=>{if(e)e("GitHub");else return[a("GitHub")]}),_:1},m,o)),l(` to see the structure of <code class="doc-token"${o}>$q.lang</code>.</p><h2 id="detecting-locale" class="doc-heading doc-h2"${o}>Detecting Locale</h2><p${o}>There’s also a method to determine user locale which is supplied by Quasar out of the box:</p>`),l(u(k(g),null,{default:p((r,e,i,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// outside of a Vue file</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Quasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
Quasar<span class="token punctuation"${s}>.</span>lang<span class="token punctuation"${s}>.</span><span class="token function"${s}>getLocale</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// returns a string</span>

<span class="token comment"${s}>// inside of a Vue file</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  $q<span class="token punctuation"${s}>.</span>lang<span class="token punctuation"${s}>.</span><span class="token function"${s}>getLocale</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// returns a string</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// outside of a Vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// returns a string"),a(`

`),n("span",{class:"token comment"},"// inside of a Vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// returns a string"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},m,o));else return[n("p",null,"A Quasar Language Pack refers to the internationalization of Quasar’s own components, some of which have labels."),n(C,{file:"Lang"}),n(x,{title:"Configuration",config:"lang"}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("It should be noted that what is described below is the internationalization of Quasar components only. If you need to internationalize your own components, read "),n(y,{to:"/options/app-internationalization"},{default:p(()=>[a("App Internationalization")]),_:1}),a(" documentation page.")])]),n("p",null,[a("As mentioned above, some Quasar components have their own labels. When it comes to internationalization, one option is to configure labels through the label properties on each instance of Quasar components (like QTable). This is how you can customize the text to match the selected language. This however, takes time and adds unnecessary complexity to your website/app. "),n("strong",null,"Instead"),a(", you can use the Quasar Language Packs which have a number of standard label definitions translated for you, like “Cancel”, “Clear”, “Select”, “Update”, etc. No need to translate these again! And it comes out of the box.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("For a complete list of available Quasar Languages, check "),n(y,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:p(()=>[a("Quasar Languages on GitHub")]),_:1}),a(". "),n("br"),n("br"),n("strong",null,"If your desired language is not on that list"),a(", then feel free to submit a PR to add it. It takes from 5 to 10 minutes at most. We kindly welcome any language!")])]),n("h2",{id:"configuring-the-default-language-pack",class:"doc-heading doc-h2",onClick:r=>k(f)("configuring-the-default-language-pack")},"Configuring the default Language Pack",8,["onClick"]),n("p",null,[a("Unless configured otherwise (see below), Quasar uses the "),n("code",{class:"doc-token"},"en-US"),a(" Language Pack by default.")]),n("h3",{id:"hardcoded",class:"doc-heading doc-h3",onClick:r=>k(f)("hardcoded")},"Hardcoded",8,["onClick"]),n("p",null,"If the default Quasar Language Pack is not dynamically determined (does not depend on cookies for example), then you can:"),n("h4",{id:"quasar-cli",class:"doc-heading doc-h4",onClick:r=>k(f)("quasar-cli")},"Quasar CLI",8,["onClick"]),n("p",null,[a("Edit the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(k(g),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'de'"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("h4",{id:"quasar-vite-plugin",class:"doc-heading doc-h4",onClick:r=>k(f)("quasar-vite-plugin")},"Quasar Vite Plugin",8,["onClick"]),n("p",null,[a("Edit your "),n("code",{class:"doc-token"},"main.js"),a(":")]),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(" langDe "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/lang/de'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...,"),a(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),a(` langDe
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h4",{id:"vue-cli",class:"doc-heading doc-h4",onClick:r=>k(f)("vue-cli")},"Vue CLI",8,["onClick"]),n("p",null,[a("Edit your "),n("code",{class:"doc-token"},"main.js"),a(":")]),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token keyword"},"import"),a(" langDe "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/lang/de'"),a(`
`),n("span",{class:"token comment"},"// ..."),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ...,"),a(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),a(` langDe
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("h4",{id:"quasar-umd",class:"doc-heading doc-h4",onClick:r=>k(f)("quasar-umd")},"Quasar UMD",8,["onClick"]),n("p",null,"Include the language pack JS tag for your Quasar version and also tell Quasar to use it. Example:"),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"<!-- include this after Quasar JS tag -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cdn.jsdelivr.net/npm/quasar@2/dist/lang/de.umd.prod.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("Quasar"),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),a("de"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("p",null,[a("Check what tags you need to include in your HTML files on "),n(y,{to:"/start/umd"},{default:p(()=>[a("UMD / Standalone")]),_:1}),a(" page.")]),n("h3",{id:"dynamical-non-ssr-",class:"doc-heading doc-h3",onClick:r=>k(f)("dynamical-non-ssr-")},"Dynamical (non-SSR)",8,["onClick"]),n("p",null,[a("Quasar CLI: If your desired Quasar Language Pack must be dynamically selected (example: depends on a cookie), then you need to create a boot file: "),n("code",{class:"doc-token"},"$ quasar new boot quasar-lang-pack [--format ts]"),a(". This will create "),n("code",{class:"doc-token"},"/src/boot/quasar-lang-pack.js"),a(" file. Edit it to:")]),n(k(g),{tabs:["With @quasar/app-vite","With @quasar/app-webpack"]},{default:p(()=>[n(d,{class:"q-pa-none",name:"With @quasar/app-vite"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// relative path to your node_modules/quasar/.."),a(`
`),n("span",{class:"token comment"},"// change to YOUR path"),a(`
`),n("span",{class:"token keyword"},"const"),a(" langList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"glob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../node_modules/quasar/lang/*.mjs'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// or just a select few (example below with only DE and FR):"),a(`
`),n("span",{class:"token comment"},"// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    langList`),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"../../node_modules/quasar/lang/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a(" langIso "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".mjs"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n(d,{class:"q-pa-none",name:"With @quasar/app-webpack"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
      `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` langIso
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]),_:1}),n("p",null,[a("Then register this boot file into the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token string"},"'quasar-lang-pack'"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(c)]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Always constrain a dynamic import"),n("p",null,[a("Notice the use of the "),n(y,{to:"https://webpack.js.org/api/module-methods/#magic-comments"},{default:p(()=>[a("Webpack magic comment")]),_:1}),a(" - "),n("code",{class:"doc-token"},"webpackInclude"),a(". Otherwise all the available language packs will be bundled, resulting in an increase in the compilation time and the bundle size. See "),n(y,{to:"https://quasar.dev/quasar-cli/lazy-loading#Caveat-for-dynamic-imports"},{default:p(()=>[a("Caveat for dynamic imports")]),_:1})])]),n("h3",{id:"dynamical-ssr-",class:"doc-heading doc-h3",onClick:r=>k(f)("dynamical-ssr-")},"Dynamical (SSR)",8,["onClick"]),n("p",null,[a("When dealing with SSR, we can’t use singleton objects because that would pollute sessions. As a result, as opposed to the dynamical example above (read it first!), you must also specify the "),n("code",{class:"doc-token"},"ssrContext"),a(" from your boot file:")]),n(k(g),{tabs:["With @quasar/app-vite","With @quasar/app-webpack"]},{default:p(()=>[n(d,{class:"q-pa-none",name:"With @quasar/app-vite"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// relative path to your node_modules/quasar/.."),a(`
`),n("span",{class:"token comment"},"// change to YOUR path"),a(`
`),n("span",{class:"token keyword"},"const"),a(" langList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),a("meta"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"glob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'../../node_modules/quasar/lang/*.mjs'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// or just a select few (example below with only DE and FR):"),a(`
`),n("span",{class:"token comment"},"// import.meta.glob('../../node_modules/quasar/lang/(de|fr).mjs')"),a(`

`),n("span",{class:"token comment"},"// ! NOTICE ssrContext param:"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    langList`),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"../../node_modules/quasar/lang/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a(" langIso "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},".mjs"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n(d,{class:"q-pa-none",name:"With @quasar/app-webpack"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// ! NOTICE ssrContext param:"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" langIso "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'de'"),a(),n("span",{class:"token comment"},"// ... some logic to determine it (use Cookies Plugin?)"),a(`

  `),n("span",{class:"token keyword"},"try"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
      `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
      `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` langIso
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},","),a(" ssrContext"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"catch"),a(),n("span",{class:"token punctuation"},"("),a("err"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// Requested Quasar Language Pack does not exist,"),a(`
    `),n("span",{class:"token comment"},"// let's not break the app, so catching error"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]),_:1}),n("h2",{id:"change-quasar-language-pack-at-runtime",class:"doc-heading doc-h2",onClick:r=>k(f)("change-quasar-language-pack-at-runtime")},"Change Quasar Language Pack at Runtime",8,["onClick"]),n("p",null,"Example with a QSelect to dynamically change the Quasar components language:"),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lang"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("langOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Quasar Language"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"dense"),a(`
    `),n("span",{class:"token attr-name"},"borderless"),a(`
    `),n("span",{class:"token attr-name"},"emit-value"),a(`
    `),n("span",{class:"token attr-name"},"map-options"),a(`
    `),n("span",{class:"token attr-name"},"options-dense"),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"min-width"),n("span",{class:"token punctuation"},":"),a(" 150px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" languages "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/lang/index.json'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" appLanguages "),n("span",{class:"token operator"},"="),a(" languages"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(`
  `),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token string"},"'de'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'en-US'"),a(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("isoName"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(" langOptions "),n("span",{class:"token operator"},"="),a(" appLanguages"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(" lang"),n("span",{class:"token punctuation"},"."),a("nativeName"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" lang"),n("span",{class:"token punctuation"},"."),a(`isoName
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" lang "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a("$q"),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),a("isoName"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// dynamic import, so loading on demand only"),a(`
      `),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token comment"},"/* webpackInclude: /(de|en-US)\\.js$/ */"),a(`
        `),n("span",{class:"token string"},"'quasar/lang/'"),a(),n("span",{class:"token operator"},"+"),a(` val
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"lang"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          $q`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("lang"),n("span",{class:"token punctuation"},"."),a("default"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      lang`),n("span",{class:"token punctuation"},","),a(`
      langOptions
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("h2",{id:"using-quasar-language-pack-in-app-space",class:"doc-heading doc-h2",onClick:r=>k(f)("using-quasar-language-pack-in-app-space")},"Using Quasar Language Pack in App Space",8,["onClick"]),n("p",null,[a("Although the Quasar Language Packs "),n("strong",null,"are designed only for Quasar components internal usage"),a(", you can still use their labels for your own website/app components too.")]),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,`"Close" label in current Quasar Language Pack is:
{{ $q.lang.label.close }}`)]),n(c)]),_:1}),n("p",null,[a("Check a Quasar Language Pack on "),n(y,{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"},{default:p(()=>[a("GitHub")]),_:1}),a(" to see the structure of "),n("code",{class:"doc-token"},"$q.lang"),a(".")]),n("h2",{id:"detecting-locale",class:"doc-heading doc-h2",onClick:r=>k(f)("detecting-locale")},"Detecting Locale",8,["onClick"]),n("p",null,"There’s also a method to determine user locale which is supplied by Quasar out of the box:"),n(k(g),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// outside of a Vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Quasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
Quasar`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// returns a string"),a(`

`),n("span",{class:"token comment"},"// inside of a Vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  $q`),n("span",{class:"token punctuation"},"."),a("lang"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// returns a string"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1})]}),_:1},j))}}},L=Q.setup;Q.setup=(v,q)=>{const h=U();return(h.modules||(h.modules=new Set)).add("src/pages/options/quasar-language-packs.md"),L?L(v,q):void 0};const on=N(Q,[["__file","quasar-language-packs.md"]]);export{on as default};
