import{mergeProps as b,withCtx as c,unref as p,createVNode as n,createTextVNode as s,useSSRContext as x}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as S}from"./DocPage-DKr-0pQn.js";import{D as i}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as F}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"use-timeout",__ssrInlineRender:!0,setup(T){const $=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(f,h,w,v)=>{h(u(S,b({title:"useTimeout composable",desc:"What is useTimeout() composable and how you can use it",badge:"Quasar v2.15+",heading:"","edit-link":"vue-composables/use-timeout",toc:$},v),{default:c((C,l,m,o)=>{if(l)l(`<p${o}>The <code class="doc-token"${o}>useTimeout()</code> composable is similar in scope with the native <code class="doc-token"${o}>setTimeout()</code>, with some key differences. Once you trigger a setTimeout(fn, delay) it will get executed after the specified delay no matter what. The useTimeout() on the other hand, can be “cancelled”. You can also override the executing Function before the timeout expires.</p><p${o}>In other words, if you want to schedule a function after a delay but you might want to override it or even cancel it before the delay happens, this is the composable for you.</p><p${o}>The useTimeout composable also automatically cancels (if it was registered and still pending) when your component gets destroyed.</p><h2 id="syntax" class="doc-heading doc-h2"${o}>Syntax</h2>`),l(u(p(i),null,{default:c((k,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useTimeout <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
    registerTimeout<span class="token punctuation"${a}>,</span>
    removeTimeout
  <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// ...</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(u(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTimeout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    registerTimeout`),n("span",{class:"token punctuation"},","),s(`
    removeTimeout
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},m,o)),l(u(p(i),null,{default:c((k,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>function</span> <span class="token function"${a}>useTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>registerTimeout</span><span class="token punctuation"${a}>(</span><span class="token function-variable function"${a}>fn</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token keyword"${a}>void</span><span class="token punctuation"${a}>,</span> delay<span class="token operator"${a}>?</span><span class="token operator"${a}>:</span> string <span class="token operator"${a}>|</span> number<span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>void</span><span class="token punctuation"${a}>;</span>
  <span class="token function"${a}>removeTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>void</span><span class="token punctuation"${a}>;</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>;</span></code></pre>`),t(u(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"registerTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),s(" delay"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"removeTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]}),_:1},m,o)),l(`<h2 id="example" class="doc-heading doc-h2"${o}>Example</h2>`),l(u(p(i),null,{default:c((k,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useTimeout <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span> registerTimeout <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token keyword"${a}>function</span> <span class="token function"${a}>onSomeEvent</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>param</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token function"${a}>registerTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;param is&#39;</span><span class="token punctuation"${a}>,</span> param<span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token number"${a}>2000</span><span class="token punctuation"${a}>)</span> <span class="token comment"${a}>// in 2 seconds</span>
  <span class="token punctuation"${a}>}</span>

  <span class="token comment"${a}>// ...</span>

  <span class="token comment"${a}>// You can call onSomeEvent() multiple</span>
  <span class="token comment"${a}>// times in a row and only the last</span>
  <span class="token comment"${a}>// registered Function will run when it</span>
  <span class="token comment"${a}>// is time for it</span>

  <span class="token comment"${a}>// Note that the delay is reset each</span>
  <span class="token comment"${a}>// time you register/override the timeout</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(u(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTimeout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" registerTimeout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onSomeEvent"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"registerTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),s(" param"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// in 2 seconds"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),s(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),s(`
  `),n("span",{class:"token comment"},"// registered Function will run when it"),s(`
  `),n("span",{class:"token comment"},"// is time for it"),s(`

  `),n("span",{class:"token comment"},"// Note that the delay is reset each"),s(`
  `),n("span",{class:"token comment"},"// time you register/override the timeout"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},m,o)),l(`<p${o}>Should you need more than one useTimeout() per component, simply rename the functions of the returned object:</p>`),l(u(p(i),null,{default:c((k,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>registerTimeout</span><span class="token operator"${a}>:</span> registerFirstTimeout<span class="token punctuation"${a}>,</span>
  <span class="token literal-property property"${a}>removeTimeout</span><span class="token operator"${a}>:</span> removeFirstTimeout
<span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

<span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>registerTimeout</span><span class="token operator"${a}>:</span> registerSecondTimeout<span class="token punctuation"${a}>,</span>
  <span class="token literal-property property"${a}>removeTimeout</span><span class="token operator"${a}>:</span> removeSecondTimeout
<span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTimeout</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),t(u(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTimeout"),n("span",{class:"token operator"},":"),s(" registerFirstTimeout"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTimeout"),n("span",{class:"token operator"},":"),s(` removeFirstTimeout
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTimeout"),n("span",{class:"token operator"},":"),s(" registerSecondTimeout"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTimeout"),n("span",{class:"token operator"},":"),s(` removeSecondTimeout
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},m,o));else return[n("p",null,[s("The "),n("code",{class:"doc-token"},"useTimeout()"),s(" composable is similar in scope with the native "),n("code",{class:"doc-token"},"setTimeout()"),s(", with some key differences. Once you trigger a setTimeout(fn, delay) it will get executed after the specified delay no matter what. The useTimeout() on the other hand, can be “cancelled”. You can also override the executing Function before the timeout expires.")]),n("p",null,"In other words, if you want to schedule a function after a delay but you might want to override it or even cancel it before the delay happens, this is the composable for you."),n("p",null,"The useTimeout composable also automatically cancels (if it was registered and still pending) when your component gets destroyed."),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:k=>p(g)("syntax")},"Syntax",8,["onClick"]),n(p(i),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTimeout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    registerTimeout`),n("span",{class:"token punctuation"},","),s(`
    removeTimeout
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n(p(i),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"registerTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),s(" delay"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"removeTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:k=>p(g)("example")},"Example",8,["onClick"]),n(p(i),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTimeout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" registerTimeout "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onSomeEvent"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"registerTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),s(" param"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// in 2 seconds"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),s(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),s(`
  `),n("span",{class:"token comment"},"// registered Function will run when it"),s(`
  `),n("span",{class:"token comment"},"// is time for it"),s(`

  `),n("span",{class:"token comment"},"// Note that the delay is reset each"),s(`
  `),n("span",{class:"token comment"},"// time you register/override the timeout"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,"Should you need more than one useTimeout() per component, simply rename the functions of the returned object:"),n(p(i),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTimeout"),n("span",{class:"token operator"},":"),s(" registerFirstTimeout"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTimeout"),n("span",{class:"token operator"},":"),s(` removeFirstTimeout
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTimeout"),n("span",{class:"token operator"},":"),s(" registerSecondTimeout"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTimeout"),n("span",{class:"token operator"},":"),s(` removeSecondTimeout
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1})]}),_:1},w))}}},d=y.setup;y.setup=(T,$)=>{const f=x();return(f.modules||(f.modules=new Set)).add("src/pages/vue-composables/use-timeout.md"),d?d(T,$):void 0};const z=F(y,[["__file","use-timeout.md"]]);export{z as default};
