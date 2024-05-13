import{mergeProps as x,withCtx as p,unref as c,createVNode as n,createTextVNode as s,useSSRContext as b}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as w}from"./page-utils-C-QWsEHe.js";import{D as S}from"./DocPage-DKr-0pQn.js";import{D as i}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"use-tick",__ssrInlineRender:!0,setup(T){const $=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(f,d,h,v)=>{d(l(S,x({title:"useTick composable",desc:"What is useTick() composable and how you can use it",badge:"Quasar v2.15+",heading:"","edit-link":"vue-composables/use-tick",toc:$},v),{default:p((E,u,m,o)=>{if(u)u(`<p${o}>The <code class="doc-token"${o}>useTick()</code> composable is similar in scope with the <code class="doc-token"${o}>nextTick()</code> from Vue, with some key differences. Once you trigger a nextTick() it will get executed in the next “tick” no matter what. The useTick() on the other hand, can be “cancelled”. You can also override it.</p><p${o}>In other words, if you want to schedule a function on the next Vue “tick” but you might want to override it or even cancel it, this is the composable for you.</p><p${o}>The useTick composable also automatically cancels the next registered “tick” (if any was registered and still pending) when your component gets destroyed.</p><h2 id="syntax" class="doc-heading doc-h2"${o}>Syntax</h2>`),u(l(c(i),null,{default:p((r,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useTick <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
    registerTick<span class="token punctuation"${a}>,</span>
    removeTick
  <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// ...</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(l(e,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    registerTick`),n("span",{class:"token punctuation"},","),s(`
    removeTick
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},m,o)),u(l(c(i),null,{default:p((r,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>function</span> <span class="token function"${a}>useTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>registerTick</span><span class="token punctuation"${a}>(</span><span class="token function-variable function"${a}>fn</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token keyword"${a}>void</span><span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>void</span><span class="token punctuation"${a}>;</span>
  <span class="token function"${a}>removeTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token operator"${a}>:</span> <span class="token keyword"${a}>void</span><span class="token punctuation"${a}>;</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>;</span></code></pre>`),t(l(e,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"registerTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"removeTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]}),_:1},m,o)),u(`<h2 id="example" class="doc-heading doc-h2"${o}>Example</h2>`),u(l(c(i),null,{default:p((r,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useTick <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span> registerTick <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token keyword"${a}>function</span> <span class="token function"${a}>onSomeEvent</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>param</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token function"${a}>registerTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;param is&#39;</span><span class="token punctuation"${a}>,</span> param<span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>

  <span class="token comment"${a}>// ...</span>

  <span class="token comment"${a}>// You can call onSomeEvent() multiple</span>
  <span class="token comment"${a}>// times in a row and only the last</span>
  <span class="token comment"${a}>// registered &quot;tick&quot; will run when it</span>
  <span class="token comment"${a}>// is time for it</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(l(e,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" registerTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onSomeEvent"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"registerTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),s(" param"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),s(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),s(`
  `),n("span",{class:"token comment"},'// registered "tick" will run when it'),s(`
  `),n("span",{class:"token comment"},"// is time for it"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},m,o)),u(`<p${o}>Should you need more than one useTick() per component, simply rename the functions of the returned object:</p>`),u(l(c(i),null,{default:p((r,t,k,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>registerTick</span><span class="token operator"${a}>:</span> registerFirstTick<span class="token punctuation"${a}>,</span>
  <span class="token literal-property property"${a}>removeTick</span><span class="token operator"${a}>:</span> removeFirstTick
<span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

<span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>registerTick</span><span class="token operator"${a}>:</span> registerSecondTick<span class="token punctuation"${a}>,</span>
  <span class="token literal-property property"${a}>removeTick</span><span class="token operator"${a}>:</span> removeSecondTick
<span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>useTick</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span></code></pre>`),t(l(e,null,null,k,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTick"),n("span",{class:"token operator"},":"),s(" registerFirstTick"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTick"),n("span",{class:"token operator"},":"),s(` removeFirstTick
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTick"),n("span",{class:"token operator"},":"),s(" registerSecondTick"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTick"),n("span",{class:"token operator"},":"),s(` removeSecondTick
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},m,o));else return[n("p",null,[s("The "),n("code",{class:"doc-token"},"useTick()"),s(" composable is similar in scope with the "),n("code",{class:"doc-token"},"nextTick()"),s(" from Vue, with some key differences. Once you trigger a nextTick() it will get executed in the next “tick” no matter what. The useTick() on the other hand, can be “cancelled”. You can also override it.")]),n("p",null,"In other words, if you want to schedule a function on the next Vue “tick” but you might want to override it or even cancel it, this is the composable for you."),n("p",null,"The useTick composable also automatically cancels the next registered “tick” (if any was registered and still pending) when your component gets destroyed."),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:r=>c(w)("syntax")},"Syntax",8,["onClick"]),n(c(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    registerTick`),n("span",{class:"token punctuation"},","),s(`
    removeTick
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n(c(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"registerTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"removeTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:r=>c(w)("example")},"Example",8,["onClick"]),n(c(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" registerTick "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onSomeEvent"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"registerTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),s(" param"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),s(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),s(`
  `),n("span",{class:"token comment"},'// registered "tick" will run when it'),s(`
  `),n("span",{class:"token comment"},"// is time for it"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,"Should you need more than one useTick() per component, simply rename the functions of the returned object:"),n(c(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTick"),n("span",{class:"token operator"},":"),s(" registerFirstTick"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTick"),n("span",{class:"token operator"},":"),s(` removeFirstTick
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerTick"),n("span",{class:"token operator"},":"),s(" registerSecondTick"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeTick"),n("span",{class:"token operator"},":"),s(` removeSecondTick
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1})]}),_:1},h))}}},g=y.setup;y.setup=(T,$)=>{const f=b();return(f.modules||(f.modules=new Set)).add("src/pages/vue-composables/use-tick.md"),g?g(T,$):void 0};const z=C(y,[["__file","use-tick.md"]]);export{z as default};
