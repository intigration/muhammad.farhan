import{mergeProps as q,withCtx as e,unref as r,createVNode as n,createTextVNode as a,useSSRContext as A}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import"quasar";import{D as d,a as k}from"./DocPage-DKr-0pQn.js";import{D as $}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as v}from"../server-entry.js";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"ajax-requests",__ssrInlineRender:!0,setup(g){return(w,m,h,b)=>{m(c(d,q({title:"Ajax Requests",desc:"(@quasar/app-vite) Using Axios for fetching data in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/ajax-requests"},b),{default:e((P,p,i,t)=>{if(p)p(`<blockquote class="doc-note"${t}><p${t}>We recommend selecting Axios during project initialization.</p></blockquote><p${t}>If you haven’t selected Axios during the project initialization then you should create a new boot file <code class="doc-token"${t}>axios.js</code> that looks like this: (Here you can also specify additional settings for your axios instance)</p>`),p(c(r($),{title:"/src/boot/axios.js"},{default:e((f,o,l,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> boot <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>
<span class="token keyword"${s}>import</span> axios <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;axios&#39;</span>

<span class="token keyword"${s}>const</span> api <span class="token operator"${s}>=</span> axios<span class="token punctuation"${s}>.</span><span class="token function"${s}>create</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>baseURL</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;https://api.example.com&#39;</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>boot</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> app <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// for use inside Vue files (Options API) through this.$axios and this.$api</span>

  app<span class="token punctuation"${s}>.</span>config<span class="token punctuation"${s}>.</span>globalProperties<span class="token punctuation"${s}>.</span>$axios <span class="token operator"${s}>=</span> axios
  <span class="token comment"${s}>// ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)</span>
  <span class="token comment"${s}>//       so you won&#39;t necessarily have to import axios in each vue file</span>

  app<span class="token punctuation"${s}>.</span>config<span class="token punctuation"${s}>.</span>globalProperties<span class="token punctuation"${s}>.</span>$api <span class="token operator"${s}>=</span> api
  <span class="token comment"${s}>// ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)</span>
  <span class="token comment"${s}>//       so you can easily perform requests against your app&#39;s API</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>export</span> <span class="token punctuation"${s}>{</span> axios<span class="token punctuation"${s}>,</span> api <span class="token punctuation"${s}>}</span></code></pre>`),o(c(u,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" boot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" axios "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'axios'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" api "),n("span",{class:"token operator"},"="),a(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://api.example.com'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"boot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// for use inside Vue files (Options API) through this.$axios and this.$api"),a(`

  app`),n("span",{class:"token punctuation"},"."),a("config"),n("span",{class:"token punctuation"},"."),a("globalProperties"),n("span",{class:"token punctuation"},"."),a("$axios "),n("span",{class:"token operator"},"="),a(` axios
  `),n("span",{class:"token comment"},"// ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)"),a(`
  `),n("span",{class:"token comment"},"//       so you won't necessarily have to import axios in each vue file"),a(`

  app`),n("span",{class:"token punctuation"},"."),a("config"),n("span",{class:"token punctuation"},"."),a("globalProperties"),n("span",{class:"token punctuation"},"."),a("$api "),n("span",{class:"token operator"},"="),a(` api
  `),n("span",{class:"token comment"},"// ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)"),a(`
  `),n("span",{class:"token comment"},"//       so you can easily perform requests against your app's API"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token punctuation"},"{"),a(" axios"),n("span",{class:"token punctuation"},","),a(" api "),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},i,t)),p(`<p${t}>Also make sure to yarn/npm install the <code class="doc-token"${t}>axios</code> package.</p><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Be sure to check out `),p(c(k,{to:"/quasar-cli-vite/prefetch-feature"},{default:e((f,o,l,s)=>{if(o)o("Prefetch Feature");else return[a("Prefetch Feature")]}),_:1},i,t)),p(` if you are using Quasar CLI.</p></div><p${t}>Usage in your single file components methods will be like below. Notice that in the next example we’re using the Quasar’s `),p(c(k,{to:"/quasar-plugins/notify"},{default:e((f,o,l,s)=>{if(o)o("Notify plugin");else return[a("Notify plugin")]}),_:1},i,t)),p(` (through <code class="doc-token"${t}>$q = useQuasar()</code> and <code class="doc-token"${t}>$q.notify</code>) which you’ll need to install (follow the link earlier).</p>`),p(c(r($),null,{default:e((f,o,l,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> api <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;boot/axios&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token keyword"${s}>const</span> data <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>null</span><span class="token punctuation"${s}>)</span>

  <span class="token keyword"${s}>function</span> <span class="token function"${s}>loadData</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    api<span class="token punctuation"${s}>.</span><span class="token function"${s}>get</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;/api/backend&#39;</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>.</span><span class="token function"${s}>then</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>response</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        data<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> response<span class="token punctuation"${s}>.</span>data
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>.</span><span class="token function"${s}>catch</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        $q<span class="token punctuation"${s}>.</span><span class="token function"${s}>notify</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
          <span class="token literal-property property"${s}>color</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;negative&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>position</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;top&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Loading failed&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>icon</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;report_problem&#39;</span>
        <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span> data<span class="token punctuation"${s}>,</span> loadData <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(c(u,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" api "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'boot/axios'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"loadData"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/api/backend'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        data`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" response"),n("span",{class:"token punctuation"},"."),a(`data
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'negative'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Loading failed'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'report_problem'"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" data"),n("span",{class:"token punctuation"},","),a(" loadData "),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},i,t)),p(`<p${t}>Usage in Vuex Actions for globally adding headers to axios (such as during authentication):</p>`),p(c(r($),null,{default:e((f,o,l,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> api <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;boot/axios&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>function</span> <span class="token function"${s}>register</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> commit <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> form</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>post</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;/auth/register&#39;</span><span class="token punctuation"${s}>,</span> form<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>.</span><span class="token function"${s}>then</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>response</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      api<span class="token punctuation"${s}>.</span>defaults<span class="token punctuation"${s}>.</span>headers<span class="token punctuation"${s}>.</span>common<span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;Authorization&#39;</span><span class="token punctuation"${s}>]</span> <span class="token operator"${s}>=</span> <span class="token string"${s}>&#39;Bearer &#39;</span> <span class="token operator"${s}>+</span> response<span class="token punctuation"${s}>.</span>data<span class="token punctuation"${s}>.</span>token
      <span class="token function"${s}>commit</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;login&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span><span class="token literal-property property"${s}>token</span><span class="token operator"${s}>:</span> response<span class="token punctuation"${s}>.</span>data<span class="token punctuation"${s}>.</span>token<span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>user</span><span class="token operator"${s}>:</span> response<span class="token punctuation"${s}>.</span>data<span class="token punctuation"${s}>.</span>user<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(c(u,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" api "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'boot/axios'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"register"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" commit "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" form")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/auth/register'"),n("span",{class:"token punctuation"},","),a(" form"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      api`),n("span",{class:"token punctuation"},"."),a("defaults"),n("span",{class:"token punctuation"},"."),a("headers"),n("span",{class:"token punctuation"},"."),a("common"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Authorization'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'Bearer '"),a(),n("span",{class:"token operator"},"+"),a(" response"),n("span",{class:"token punctuation"},"."),a("data"),n("span",{class:"token punctuation"},"."),a(`token
      `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"token"),n("span",{class:"token operator"},":"),a(" response"),n("span",{class:"token punctuation"},"."),a("data"),n("span",{class:"token punctuation"},"."),a("token"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(" response"),n("span",{class:"token punctuation"},"."),a("data"),n("span",{class:"token punctuation"},"."),a("user"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]}),_:1},i,t)),p(`<p${t}>Also look at `),p(c(k,{to:"https://github.com/axios/axios"},{default:e((f,o,l,s)=>{if(o)o("Axios docs");else return[a("Axios docs")]}),_:1},i,t)),p(" for more information.</p>");else return[n("blockquote",{class:"doc-note"},[n("p",null,"We recommend selecting Axios during project initialization.")]),n("p",null,[a("If you haven’t selected Axios during the project initialization then you should create a new boot file "),n("code",{class:"doc-token"},"axios.js"),a(" that looks like this: (Here you can also specify additional settings for your axios instance)")]),n(r($),{title:"/src/boot/axios.js"},{default:e(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" boot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" axios "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'axios'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" api "),n("span",{class:"token operator"},"="),a(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://api.example.com'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"boot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" app "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// for use inside Vue files (Options API) through this.$axios and this.$api"),a(`

  app`),n("span",{class:"token punctuation"},"."),a("config"),n("span",{class:"token punctuation"},"."),a("globalProperties"),n("span",{class:"token punctuation"},"."),a("$axios "),n("span",{class:"token operator"},"="),a(` axios
  `),n("span",{class:"token comment"},"// ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)"),a(`
  `),n("span",{class:"token comment"},"//       so you won't necessarily have to import axios in each vue file"),a(`

  app`),n("span",{class:"token punctuation"},"."),a("config"),n("span",{class:"token punctuation"},"."),a("globalProperties"),n("span",{class:"token punctuation"},"."),a("$api "),n("span",{class:"token operator"},"="),a(` api
  `),n("span",{class:"token comment"},"// ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)"),a(`
  `),n("span",{class:"token comment"},"//       so you can easily perform requests against your app's API"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token punctuation"},"{"),a(" axios"),n("span",{class:"token punctuation"},","),a(" api "),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,[a("Also make sure to yarn/npm install the "),n("code",{class:"doc-token"},"axios"),a(" package.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Be sure to check out "),n(k,{to:"/quasar-cli-vite/prefetch-feature"},{default:e(()=>[a("Prefetch Feature")]),_:1}),a(" if you are using Quasar CLI.")])]),n("p",null,[a("Usage in your single file components methods will be like below. Notice that in the next example we’re using the Quasar’s "),n(k,{to:"/quasar-plugins/notify"},{default:e(()=>[a("Notify plugin")]),_:1}),a(" (through "),n("code",{class:"doc-token"},"$q = useQuasar()"),a(" and "),n("code",{class:"doc-token"},"$q.notify"),a(") which you’ll need to install (follow the link earlier).")]),n(r($),null,{default:e(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" api "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'boot/axios'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"loadData"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/api/backend'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        data`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" response"),n("span",{class:"token punctuation"},"."),a(`data
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'negative'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Loading failed'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'report_problem'"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" data"),n("span",{class:"token punctuation"},","),a(" loadData "),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,"Usage in Vuex Actions for globally adding headers to axios (such as during authentication):"),n(r($),null,{default:e(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" api "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'boot/axios'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"register"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" commit "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(" form")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/auth/register'"),n("span",{class:"token punctuation"},","),a(" form"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      api`),n("span",{class:"token punctuation"},"."),a("defaults"),n("span",{class:"token punctuation"},"."),a("headers"),n("span",{class:"token punctuation"},"."),a("common"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Authorization'"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'Bearer '"),a(),n("span",{class:"token operator"},"+"),a(" response"),n("span",{class:"token punctuation"},"."),a("data"),n("span",{class:"token punctuation"},"."),a(`token
      `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"token"),n("span",{class:"token operator"},":"),a(" response"),n("span",{class:"token punctuation"},"."),a("data"),n("span",{class:"token punctuation"},"."),a("token"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),a(" response"),n("span",{class:"token punctuation"},"."),a("data"),n("span",{class:"token punctuation"},"."),a("user"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(u)]),_:1}),n("p",null,[a("Also look at "),n(k,{to:"https://github.com/axios/axios"},{default:e(()=>[a("Axios docs")]),_:1}),a(" for more information.")])]}),_:1},h))}}},x=y.setup;y.setup=(g,w)=>{const m=A();return(m.modules||(m.modules=new Set)).add("src/pages/quasar-cli-vite/ajax-requests.md"),x?x(g,w):void 0};const S=v(y,[["__file","ajax-requests.md"]]);export{S as default};
