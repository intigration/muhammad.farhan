import{mergeProps as x,withCtx as p,createTextVNode as a,unref as i,createVNode as n,useSSRContext as v}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import"quasar";import{D as B,a as g}from"./DocPage-DKr-0pQn.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as T}from"../server-entry.js";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"background-hooks",__ssrInlineRender:!0,setup(m){return(b,k,h,y)=>{k(u(B,x({title:"Background Hooks",desc:"(@quasar/app-webpack) How to communicate using your background script with other parts of your Browser Extension (BEX).",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-browser-extensions/background-hooks"},y),{default:p((O,e,d,t)=>{if(e)e(`<p${t}><code class="doc-token"${t}>src-bex/js/background-hooks.js</code> is essentially a standard `),e(u(g,{to:"https://developer.chrome.com/extensions/background_pages"},{default:p(($,o,l,s)=>{if(o)o("background script");else return[a("background script")]}),_:1},d,t)),e(` and you are welcome to use it as such. Background scripts can communicate with <strong${t}>all</strong> Web Pages, Dev Tools, Options and Popups running under your BEX.</p><p${t}>The added benefit of this file is this function:</p>`),e(u(i(r),null,{default:p(($,o,l,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> bexBackground <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>bexBackground</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>bridge<span class="token punctuation"${s}>,</span> activeConnections</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>//</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(u(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" bexBackground "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"bexBackground"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("bridge"),n("span",{class:"token punctuation"},","),a(" activeConnections")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"//"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},d,t)),e(`<p${t}>This function is called automatically via the Quasar BEX build chain and injects a bridge which is shared between all parts of the BEX meaning you can communicate with any part of your BEX.</p><p${t}>The <code class="doc-token"${t}>bridge</code> param is the bridge to use for communication. The <code class="doc-token"${t}>activeConnections</code> param provides a map of all the BEX connections registered via the bridge i.e All the Web Page, Options, Popup and Dev Tools BEX’s used by the same Quasar App.</p><p${t}>For example, let’s say we want to listen for a new tab being opened in the web browser and then react to it in our Quasar App. First, we’d need to listen for the new tab being opened and emit a new event to tell the Quasar App this has happened:</p>`),e(u(i(r),null,{default:p(($,o,l,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>chrome<span class="token punctuation"${s}>.</span>tabs<span class="token punctuation"${s}>.</span>onUpdated<span class="token punctuation"${s}>.</span><span class="token function"${s}>addListener</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>tabId<span class="token punctuation"${s}>,</span> changeInfo<span class="token punctuation"${s}>,</span> tab</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  bridge<span class="token punctuation"${s}>.</span><span class="token function"${s}>send</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;bex.tab.opened&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>url</span><span class="token operator"${s}>:</span> tab<span class="token punctuation"${s}>.</span>url <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(u(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("chrome"),n("span",{class:"token punctuation"},"."),a("tabs"),n("span",{class:"token punctuation"},"."),a("onUpdated"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("tabId"),n("span",{class:"token punctuation"},","),a(" changeInfo"),n("span",{class:"token punctuation"},","),a(" tab")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  bridge`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bex.tab.opened'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),a(" tab"),n("span",{class:"token punctuation"},"."),a("url "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]}),_:1},d,t)),e(`<p${t}>Then in our Quasar App, we’d listen for this in one of our component lifecycle hooks, like so:</p>`),e(u(i(r),null,{default:p(($,o,l,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> onBeforeUnmount <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// Our function which receives the URL sent by the background script.</span>
    <span class="token keyword"${s}>function</span> <span class="token function"${s}>doOnTabOpened</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>url</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;New Browser Tab Openend: &#39;</span><span class="token punctuation"${s}>,</span> url<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token comment"${s}>// Add our listener</span>
    $q<span class="token punctuation"${s}>.</span>bex<span class="token punctuation"${s}>.</span><span class="token function"${s}>on</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;bex.tab.opened&#39;</span><span class="token punctuation"${s}>,</span> doOnTabOpened<span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// Don&#39;t forget to clean it up</span>
    <span class="token function"${s}>onBeforeUnmount</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      $q<span class="token punctuation"${s}>.</span>bex<span class="token punctuation"${s}>.</span><span class="token function"${s}>off</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;bex.tab.opened&#39;</span><span class="token punctuation"${s}>,</span> doOnTabOpened<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span><span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(c,null,null,l,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// Our function which receives the URL sent by the background script."),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"doOnTabOpened"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"url"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'New Browser Tab Openend: '"),n("span",{class:"token punctuation"},","),a(" url"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// Add our listener"),a(`
    $q`),n("span",{class:"token punctuation"},"."),a("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bex.tab.opened'"),n("span",{class:"token punctuation"},","),a(" doOnTabOpened"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// Don't forget to clean it up"),a(`
    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),a("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"off"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bex.tab.opened'"),n("span",{class:"token punctuation"},","),a(" doOnTabOpened"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},d,t)),e(`<p${t}>There are wide variety of events available to the browser extension background script - Google is your friend if you’re trying to do something in this area.</p><p${t}>What if you want to modify the underlying web page content in some way? That’s where we’d use <code class="doc-token"${t}>content-hooks.js</code>. Let’s look at that in the next section.</p>`);else return[n("p",null,[n("code",{class:"doc-token"},"src-bex/js/background-hooks.js"),a(" is essentially a standard "),n(g,{to:"https://developer.chrome.com/extensions/background_pages"},{default:p(()=>[a("background script")]),_:1}),a(" and you are welcome to use it as such. Background scripts can communicate with "),n("strong",null,"all"),a(" Web Pages, Dev Tools, Options and Popups running under your BEX.")]),n("p",null,"The added benefit of this file is this function:"),n(i(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" bexBackground "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"bexBackground"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("bridge"),n("span",{class:"token punctuation"},","),a(" activeConnections")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"//"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("p",null,"This function is called automatically via the Quasar BEX build chain and injects a bridge which is shared between all parts of the BEX meaning you can communicate with any part of your BEX."),n("p",null,[a("The "),n("code",{class:"doc-token"},"bridge"),a(" param is the bridge to use for communication. The "),n("code",{class:"doc-token"},"activeConnections"),a(" param provides a map of all the BEX connections registered via the bridge i.e All the Web Page, Options, Popup and Dev Tools BEX’s used by the same Quasar App.")]),n("p",null,"For example, let’s say we want to listen for a new tab being opened in the web browser and then react to it in our Quasar App. First, we’d need to listen for the new tab being opened and emit a new event to tell the Quasar App this has happened:"),n(i(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("chrome"),n("span",{class:"token punctuation"},"."),a("tabs"),n("span",{class:"token punctuation"},"."),a("onUpdated"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("tabId"),n("span",{class:"token punctuation"},","),a(" changeInfo"),n("span",{class:"token punctuation"},","),a(" tab")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  bridge`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bex.tab.opened'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),a(" tab"),n("span",{class:"token punctuation"},"."),a("url "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(c)]),_:1}),n("p",null,"Then in our Quasar App, we’d listen for this in one of our component lifecycle hooks, like so:"),n(i(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// Our function which receives the URL sent by the background script."),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"doOnTabOpened"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"url"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'New Browser Tab Openend: '"),n("span",{class:"token punctuation"},","),a(" url"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// Add our listener"),a(`
    $q`),n("span",{class:"token punctuation"},"."),a("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bex.tab.opened'"),n("span",{class:"token punctuation"},","),a(" doOnTabOpened"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// Don't forget to clean it up"),a(`
    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),a("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"off"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bex.tab.opened'"),n("span",{class:"token punctuation"},","),a(" doOnTabOpened"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,"There are wide variety of events available to the browser extension background script - Google is your friend if you’re trying to do something in this area."),n("p",null,[a("What if you want to modify the underlying web page content in some way? That’s where we’d use "),n("code",{class:"doc-token"},"content-hooks.js"),a(". Let’s look at that in the next section.")])]}),_:1},h))}}},w=f.setup;f.setup=(m,b)=>{const k=v();return(k.modules||(k.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-browser-extensions/background-hooks.md"),w?w(m,b):void 0};const N=T(f,[["__file","background-hooks.md"]]);export{N as default};
