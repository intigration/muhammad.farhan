import{mergeProps as b,withCtx as c,unref as p,createVNode as n,createTextVNode as a,useSSRContext as S}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as F}from"./DocPage-DKr-0pQn.js";import{D as u}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"use-interval",__ssrInlineRender:!0,setup(y){const $=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(v,h,d,x)=>{h(l(F,b({title:"useInterval composable",desc:"What is useInterval() composable and how you can use it",badge:"Quasar v2.15.1+",heading:"","edit-link":"vue-composables/use-interval",toc:$},x),{default:c((E,r,m,o)=>{if(r)r(`<p${o}>The <code class="doc-token"${o}>useInterval()</code> composable is similar in scope with the native <code class="doc-token"${o}>setInterval()</code>, with some key differences. The composable takes care of “cancelling” the interval if your component gets destroyed and you can also override the executing Function while it’s running.</p><h2 id="syntax" class="doc-heading doc-h2"${o}>Syntax</h2>`),r(l(p(u),null,{default:c((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useInterval <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span>
    registerInterval<span class="token punctuation"${s}>,</span>
    removeInterval
  <span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>useInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  <span class="token comment"${s}>// ...</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useInterval "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
    registerInterval`),n("span",{class:"token punctuation"},","),a(`
    removeInterval
  `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},m,o)),r(l(p(u),null,{default:c((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>function</span> <span class="token function"${s}>useInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>registerInterval</span><span class="token punctuation"${s}>(</span><span class="token function-variable function"${s}>fn</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>interval</span><span class="token operator"${s}>:</span> string <span class="token operator"${s}>|</span> number<span class="token punctuation"${s}>)</span><span class="token operator"${s}>:</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>
  <span class="token function"${s}>removeInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token operator"${s}>:</span> <span class="token keyword"${s}>void</span><span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>;</span></code></pre>`),t(l(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"registerInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"interval"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token operator"},"|"),a(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token function"},"removeInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]}),_:1},m,o)),r(`<h2 id="example" class="doc-heading doc-h2"${o}>Example</h2>`),r(l(p(u),null,{default:c((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useInterval <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span> registerInterval <span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>useInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  <span class="token keyword"${s}>function</span> <span class="token function"${s}>onSomeEvent</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>param</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token function"${s}>registerInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;param is&#39;</span><span class="token punctuation"${s}>,</span> param<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> <span class="token number"${s}>2000</span><span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// every 2 seconds</span>
  <span class="token punctuation"${s}>}</span>

  <span class="token comment"${s}>// ...</span>

  <span class="token comment"${s}>// You can call onSomeEvent() multiple</span>
  <span class="token comment"${s}>// times in a row and only the last</span>
  <span class="token comment"${s}>// registered Function will run when it</span>
  <span class="token comment"${s}>// is time for it</span>

  <span class="token comment"${s}>// Note that the interval is reset each</span>
  <span class="token comment"${s}>// time you register/override it</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useInterval "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" registerInterval "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onSomeEvent"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"registerInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),a(" param"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// every 2 seconds"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),a(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),a(`
  `),n("span",{class:"token comment"},"// registered Function will run when it"),a(`
  `),n("span",{class:"token comment"},"// is time for it"),a(`

  `),n("span",{class:"token comment"},"// Note that the interval is reset each"),a(`
  `),n("span",{class:"token comment"},"// time you register/override it"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},m,o)),r(`<p${o}>Should you need more than one useInterval() per component, simply rename the functions of the returned object:</p>`),r(l(p(u),null,{default:c((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>registerInterval</span><span class="token operator"${s}>:</span> registerFirstInterval<span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>removeInterval</span><span class="token operator"${s}>:</span> removeFirstInterval
<span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>useInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>registerInterval</span><span class="token operator"${s}>:</span> registerSecondInterval<span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>removeInterval</span><span class="token operator"${s}>:</span> removeSecondInterval
<span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>useInterval</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),t(l(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"registerInterval"),n("span",{class:"token operator"},":"),a(" registerFirstInterval"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"removeInterval"),n("span",{class:"token operator"},":"),a(` removeFirstInterval
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"registerInterval"),n("span",{class:"token operator"},":"),a(" registerSecondInterval"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"removeInterval"),n("span",{class:"token operator"},":"),a(` removeSecondInterval
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},m,o));else return[n("p",null,[a("The "),n("code",{class:"doc-token"},"useInterval()"),a(" composable is similar in scope with the native "),n("code",{class:"doc-token"},"setInterval()"),a(", with some key differences. The composable takes care of “cancelling” the interval if your component gets destroyed and you can also override the executing Function while it’s running.")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:k=>p(g)("syntax")},"Syntax",8,["onClick"]),n(p(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useInterval "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
    registerInterval`),n("span",{class:"token punctuation"},","),a(`
    removeInterval
  `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n(p(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"registerInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"interval"),n("span",{class:"token operator"},":"),a(" string "),n("span",{class:"token operator"},"|"),a(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token function"},"removeInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:k=>p(g)("example")},"Example",8,["onClick"]),n(p(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useInterval "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" registerInterval "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onSomeEvent"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"registerInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),a(" param"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// every 2 seconds"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token comment"},"// ..."),a(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),a(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),a(`
  `),n("span",{class:"token comment"},"// registered Function will run when it"),a(`
  `),n("span",{class:"token comment"},"// is time for it"),a(`

  `),n("span",{class:"token comment"},"// Note that the interval is reset each"),a(`
  `),n("span",{class:"token comment"},"// time you register/override it"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,"Should you need more than one useInterval() per component, simply rename the functions of the returned object:"),n(p(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"registerInterval"),n("span",{class:"token operator"},":"),a(" registerFirstInterval"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"removeInterval"),n("span",{class:"token operator"},":"),a(` removeFirstInterval
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"registerInterval"),n("span",{class:"token operator"},":"),a(" registerSecondInterval"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"removeInterval"),n("span",{class:"token operator"},":"),a(` removeSecondInterval
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1})]}),_:1},d))}}},w=f.setup;f.setup=(y,$)=>{const v=S();return(v.modules||(v.modules=new Set)).add("src/pages/vue-composables/use-interval.md"),w?w(y,$):void 0};const A=C(f,[["__file","use-interval.md"]]);export{A as default};
