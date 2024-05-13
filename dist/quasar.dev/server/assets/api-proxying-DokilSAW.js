import{mergeProps as P,withCtx as p,createTextVNode as a,unref as h,createVNode as n,useSSRContext as d}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import"quasar";import{D as q,a as $}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as i}from"./CopyButton-l3ndfN49.js";import{_ as A}from"../server-entry.js";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const u={__name:"api-proxying",__ssrInlineRender:!0,setup(k){const l=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}];return(c,x,b,v)=>{x(r(q,P({title:"API Proxying for Dev",desc:"(@quasar/app-vite) How to use an API proxy with the Quasar dev server.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/api-proxying",related:l},v),{default:p((j,o,y,t)=>{if(o)o(`<p${t}>When integrating a project folder (created by Quasar CLI) with an existing backend, a common need is to access the backend API when using the dev server. To achieve this, we can run the dev server and the API backend side-by-side (or remotely), and let the dev server proxy all API requests to the actual backend.</p><p${t}>This is useful if you access relative paths in your API requests. Obviously, these relative paths will probably not work while you are developing. In order to create an environment similar to the one used by your deployed website/app, you can proxy your API requests.</p><p${t}>To configure the proxy rules, edit the <code class="doc-token"${t}>/quasar.config</code> file in <code class="doc-token"${t}>devServer.proxy</code>. Under the hood, it uses <code class="doc-token"${t}>http-proxy</code>. Full list of its options `),o(r($,{to:"https://github.com/http-party/node-http-proxy#options"},{default:p((w,e,g,s)=>{if(e)e("here");else return[a("here")]}),_:1},y,t)),o(".</p>"),o(r(h(m),{title:"/quasar.config file"},{default:p((w,e,g,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>proxy</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// string shorthand</span>
    <span class="token string-property property"${s}>&#39;/foo&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;http://localhost:4567&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token comment"${s}>// with options</span>
    <span class="token string-property property"${s}>&#39;/api&#39;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>target</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>changeOrigin</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
      <span class="token function-variable function"${s}>rewrite</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>path</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> path<span class="token punctuation"${s}>.</span><span class="token function"${s}>replace</span><span class="token punctuation"${s}>(</span><span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>^\\/api</span><span class="token regex-delimiter"${s}>/</span></span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token comment"${s}>// with RegEx</span>
    <span class="token string-property property"${s}>&#39;^/fallback/.*&#39;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>target</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>changeOrigin</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
      <span class="token function-variable function"${s}>rewrite</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>path</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> path<span class="token punctuation"${s}>.</span><span class="token function"${s}>replace</span><span class="token punctuation"${s}>(</span><span class="token regex"${s}><span class="token regex-delimiter"${s}>/</span><span class="token regex-source language-regex"${s}>^\\/fallback</span><span class="token regex-delimiter"${s}>/</span></span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token comment"${s}>// Using the proxy instance</span>
    <span class="token string-property property"${s}>&#39;/api&#39;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>target</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>changeOrigin</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
      <span class="token function-variable function"${s}>configure</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>proxy<span class="token punctuation"${s}>,</span> options</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// proxy will be an instance of &#39;http-proxy&#39;</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token comment"${s}>// Proxying websockets or socket.io</span>
    <span class="token string-property property"${s}>&#39;/socket.io&#39;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>target</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;ws://localhost:3000&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>ws</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(i,null,null,g,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"proxy"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// string shorthand"),a(`
    `),n("span",{class:"token string-property property"},"'/foo'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4567'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// with options"),a(`
    `),n("span",{class:"token string-property property"},"'/api'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://jsonplaceholder.typicode.com'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"rewrite"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"path"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^\\/api"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// with RegEx"),a(`
    `),n("span",{class:"token string-property property"},"'^/fallback/.*'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://jsonplaceholder.typicode.com'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"rewrite"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"path"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^\\/fallback"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// Using the proxy instance"),a(`
    `),n("span",{class:"token string-property property"},"'/api'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://jsonplaceholder.typicode.com'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"configure"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("proxy"),n("span",{class:"token punctuation"},","),a(" options")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// proxy will be an instance of 'http-proxy'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// Proxying websockets or socket.io"),a(`
    `),n("span",{class:"token string-property property"},"'/socket.io'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ws://localhost:3000'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"ws"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},y,t));else return[n("p",null,"When integrating a project folder (created by Quasar CLI) with an existing backend, a common need is to access the backend API when using the dev server. To achieve this, we can run the dev server and the API backend side-by-side (or remotely), and let the dev server proxy all API requests to the actual backend."),n("p",null,"This is useful if you access relative paths in your API requests. Obviously, these relative paths will probably not work while you are developing. In order to create an environment similar to the one used by your deployed website/app, you can proxy your API requests."),n("p",null,[a("To configure the proxy rules, edit the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file in "),n("code",{class:"doc-token"},"devServer.proxy"),a(". Under the hood, it uses "),n("code",{class:"doc-token"},"http-proxy"),a(". Full list of its options "),n($,{to:"https://github.com/http-party/node-http-proxy#options"},{default:p(()=>[a("here")]),_:1}),a(".")]),n(h(m),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"proxy"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// string shorthand"),a(`
    `),n("span",{class:"token string-property property"},"'/foo'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4567'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// with options"),a(`
    `),n("span",{class:"token string-property property"},"'/api'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://jsonplaceholder.typicode.com'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"rewrite"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"path"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^\\/api"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// with RegEx"),a(`
    `),n("span",{class:"token string-property property"},"'^/fallback/.*'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://jsonplaceholder.typicode.com'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"rewrite"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"path"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^\\/fallback"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// Using the proxy instance"),a(`
    `),n("span",{class:"token string-property property"},"'/api'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://jsonplaceholder.typicode.com'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"changeOrigin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"configure"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("proxy"),n("span",{class:"token punctuation"},","),a(" options")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// proxy will be an instance of 'http-proxy'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token comment"},"// Proxying websockets or socket.io"),a(`
    `),n("span",{class:"token string-property property"},"'/socket.io'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ws://localhost:3000'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"ws"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1})]}),_:1},b))}}},f=u.setup;u.setup=(k,l)=>{const c=d();return(c.modules||(c.modules=new Set)).add("src/pages/quasar-cli-vite/api-proxying.md"),f?f(k,l):void 0};const W=A(u,[["__file","api-proxying.md"]]);export{W as default};
