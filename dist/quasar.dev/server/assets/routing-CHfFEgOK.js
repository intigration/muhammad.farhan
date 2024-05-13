import{mergeProps as v,withCtx as p,createTextVNode as t,unref as h,createVNode as n,useSSRContext as R}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import"quasar";import{D as b,a as u}from"./DocPage-DKr-0pQn.js";import{D as y}from"./DocPrerender-DPOnWPFO.js";import{C as m}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"routing",__ssrInlineRender:!0,setup($){return(d,i,x,w)=>{i(c(b,v({title:"App Routing",desc:"(@quasar/app-vite) How to use the Vue Router in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/routing"},w),{default:p((C,e,r,s)=>{if(e)e(`<p${s}>You’ll notice that your Quasar project contains a <code class="doc-token"${s}>/src/router</code> folder. This holds the routing configuration of your website/app:</p><ul${s}><li${s}>“/src/router/index.js” holds the Vue Router initialization code</li><li${s}>“/src/router/routes.js” holds the routes of your website/app</li></ul><div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}>Quasar documentation assumes you are already familiar with `),e(c(u,{to:"https://github.com/vuejs/vue-router"},{default:p((k,o,l,a)=>{if(o)o("Vue Router");else return[t("Vue Router")]}),_:1},r,s)),e(". Below it’s described only the basics of how to make use of it in a Quasar CLI project. For the full list of its features please visit the "),e(c(u,{to:"https://router.vuejs.org/"},{default:p((k,o,l,a)=>{if(o)o("Vue Router documentation");else return[t("Vue Router documentation")]}),_:1},r,s)),e(`.</p></div><p${s}>The <code class="doc-token"${s}>/src/router/routes.js</code> needs to import your website/app’s Pages and Layouts. Read more on `),e(c(u,{to:"/layout/routing-with-layouts-and-pages"},{default:p((k,o,l,a)=>{if(o)o("Routing with Layouts and Pages");else return[t("Routing with Layouts and Pages")]}),_:1},r,s)),e(` documentation page.</p><p${s}>When using Vuex the store is not directly importable from other scripts, but it is passed to the exported function of <code class="doc-token"${s}>/src/router/index.js</code>, so it can be accessed from there. For example you can use the <code class="doc-token"${s}>Router.beforeEach</code> method to check authentication in the router:</p>`),e(c(h(y),null,{default:p((k,o,l,a)=>{if(o)o(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token keyword"${a}>function</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span> store <span class="token comment"${a}>/*, ssrContext */</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// ...</span>
  Router<span class="token punctuation"${a}>.</span><span class="token function"${a}>beforeEach</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>to<span class="token punctuation"${a}>,</span> from<span class="token punctuation"${a}>,</span> next</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>to<span class="token punctuation"${a}>.</span>matched<span class="token punctuation"${a}>.</span><span class="token function"${a}>some</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}>record</span> <span class="token operator"${a}>=&gt;</span> record<span class="token punctuation"${a}>.</span>meta<span class="token punctuation"${a}>.</span>requiresAuth<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>&amp;&amp;</span> <span class="token operator"${a}>!</span>store<span class="token punctuation"${a}>.</span>getters<span class="token punctuation"${a}>[</span><span class="token string"${a}>&#39;auth/isSignedIn&#39;</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      <span class="token function"${a}>next</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>name</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;account-signin&#39;</span><span class="token punctuation"${a}>,</span> <span class="token literal-property property"${a}>query</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>next</span><span class="token operator"${a}>:</span> to<span class="token punctuation"${a}>.</span>fullPath <span class="token punctuation"${a}>}</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>else</span> <span class="token punctuation"${a}>{</span>
      <span class="token function"${a}>next</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token comment"${a}>// ...</span>
<span class="token punctuation"${a}>}</span></code></pre>`),o(c(m,null,null,l,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" store "),n("span",{class:"token comment"},"/*, ssrContext */"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// ..."),t(`
  Router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("to"),n("span",{class:"token punctuation"},","),t(" from"),n("span",{class:"token punctuation"},","),t(" next")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("to"),n("span",{class:"token punctuation"},"."),t("matched"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"record"),t(),n("span",{class:"token operator"},"=>"),t(" record"),n("span",{class:"token punctuation"},"."),t("meta"),n("span",{class:"token punctuation"},"."),t("requiresAuth"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("store"),n("span",{class:"token punctuation"},"."),t("getters"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'auth/isSignedIn'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'account-signin'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"query"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"next"),n("span",{class:"token operator"},":"),t(" to"),n("span",{class:"token punctuation"},"."),t("fullPath "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token comment"},"// ..."),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(m)]}),_:1},r,s)),e(`<div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>If you are developing a SSR app, then you can check out the `),e(c(u,{to:"/quasar-cli-vite/developing-ssr/ssr-context"},{default:p((k,o,l,a)=>{if(o)o("ssrContext");else return[t("ssrContext")]}),_:1},r,s)),e(" Object that gets supplied server-side.</p></div>");else return[n("p",null,[t("You’ll notice that your Quasar project contains a "),n("code",{class:"doc-token"},"/src/router"),t(" folder. This holds the routing configuration of your website/app:")]),n("ul",null,[n("li",null,"“/src/router/index.js” holds the Vue Router initialization code"),n("li",null,"“/src/router/routes.js” holds the routes of your website/app")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[t("Quasar documentation assumes you are already familiar with "),n(u,{to:"https://github.com/vuejs/vue-router"},{default:p(()=>[t("Vue Router")]),_:1}),t(". Below it’s described only the basics of how to make use of it in a Quasar CLI project. For the full list of its features please visit the "),n(u,{to:"https://router.vuejs.org/"},{default:p(()=>[t("Vue Router documentation")]),_:1}),t(".")])]),n("p",null,[t("The "),n("code",{class:"doc-token"},"/src/router/routes.js"),t(" needs to import your website/app’s Pages and Layouts. Read more on "),n(u,{to:"/layout/routing-with-layouts-and-pages"},{default:p(()=>[t("Routing with Layouts and Pages")]),_:1}),t(" documentation page.")]),n("p",null,[t("When using Vuex the store is not directly importable from other scripts, but it is passed to the exported function of "),n("code",{class:"doc-token"},"/src/router/index.js"),t(", so it can be accessed from there. For example you can use the "),n("code",{class:"doc-token"},"Router.beforeEach"),t(" method to check authentication in the router:")]),n(h(y),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" store "),n("span",{class:"token comment"},"/*, ssrContext */"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// ..."),t(`
  Router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("to"),n("span",{class:"token punctuation"},","),t(" from"),n("span",{class:"token punctuation"},","),t(" next")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("to"),n("span",{class:"token punctuation"},"."),t("matched"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"record"),t(),n("span",{class:"token operator"},"=>"),t(" record"),n("span",{class:"token punctuation"},"."),t("meta"),n("span",{class:"token punctuation"},"."),t("requiresAuth"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("store"),n("span",{class:"token punctuation"},"."),t("getters"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'auth/isSignedIn'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'account-signin'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"query"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"next"),n("span",{class:"token operator"},":"),t(" to"),n("span",{class:"token punctuation"},"."),t("fullPath "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token comment"},"// ..."),t(`
`),n("span",{class:"token punctuation"},"}")])]),n(m)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[t("If you are developing a SSR app, then you can check out the "),n(u,{to:"/quasar-cli-vite/developing-ssr/ssr-context"},{default:p(()=>[t("ssrContext")]),_:1}),t(" Object that gets supplied server-side.")])])]}),_:1},x))}}},g=f.setup;f.setup=($,d)=>{const i=R();return(i.modules||(i.modules=new Set)).add("src/pages/quasar-cli-vite/routing.md"),g?g($,d):void 0};const B=j(f,[["__file","routing.md"]]);export{B as default};
