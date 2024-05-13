import{mergeProps as D,withCtx as l,createTextVNode as s,unref as r,createVNode as n,useSSRContext as C}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as v}from"./page-utils-C-QWsEHe.js";import{D as O,a as k}from"./DocPage-DKr-0pQn.js";import{D as w}from"./DocApi-Df9ryd6x.js";import{D as $}from"./DocPrerender-DPOnWPFO.js";import{C as m}from"./CopyButton-l3ndfN49.js";import{_ as q}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"./DocCardTitle-BSnqQsiz.js";import"./utils-DKnLoYai.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"scroll",__ssrInlineRender:!0,setup(h){const d=[{name:"Scroll Fire",category:"Vue Directives",path:"/vue-directives/scroll-fire"},{name:"Scroll Observer",category:"Observers",path:"/vue-components/scroll-observer"}],g=[{id:"scroll-api",title:"2. Scroll API",deep:!0},{id:"usage",title:"3. Usage"},{id:"determining-scrolling-container",title:"3.1. Determining Scrolling Container",sub:!0}];return(P,S,b,x)=>{S(c(O,D({title:"Directive v-scroll",desc:"Vue directive which triggers an event when user scrolls.",heading:"","edit-link":"vue-directives/scroll",toc:g,related:d},x),{default:l((T,e,p,o)=>{if(e)e(`<p${o}>This is a Vue directive which takes one parameter (a Function) and fires when user scrolls the page containing that DOM node.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIPS</p><ul${o}><li${o}>One alternative to using this directive is to place a `),e(c(k,{to:"/vue-components/scroll-observer"},{default:l((i,t,u,a)=>{if(t)t("QScrollObserver");else return[s("QScrollObserver")]}),_:1},p,o)),e(` component on your page.</li><li${o}>There is one more scrolling-related directive available called `),e(c(k,{to:"/vue-directives/scroll-fire"},{default:l((i,t,u,a)=>{if(t)t("Scroll Fire");else return[s("Scroll Fire")]}),_:1},p,o)),e(".</li></ul></div>"),e(c(w,{file:"Scroll"},null,p,o)),e(`<h2 id="usage" class="doc-heading doc-h2"${o}>Usage</h2>`),e(c(r($),null,{default:l((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;</span>template</span><span class="token punctuation"${a}>&gt;</span></span>
  ...
  <span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;</span>div</span> <span class="token attr-name"${a}>v-scroll</span><span class="token attr-value"${a}><span class="token punctuation attr-equals"${a}>=</span><span class="token punctuation"${a}>&quot;</span>onScroll<span class="token punctuation"${a}>&quot;</span></span><span class="token punctuation"${a}>&gt;</span></span>...<span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;/</span>div</span><span class="token punctuation"${a}>&gt;</span></span>
  ...
<span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;/</span>template</span><span class="token punctuation"${a}>&gt;</span></span>

<span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;</span>script</span><span class="token punctuation"${a}>&gt;</span></span><span class="token script"${a}><span class="token language-javascript"${a}>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>function</span> <span class="token function"${a}>onScroll</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>position</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// when this method is invoked then it means user</span>
      <span class="token comment"${a}>// has scrolled the page to \`position\`</span>
      <span class="token comment"${a}>//</span>
      <span class="token comment"${a}>// \`position\` is an Integer designating the current</span>
      <span class="token comment"${a}>// scroll position in pixels.</span>
    <span class="token punctuation"${a}>}</span>

    <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span> onScroll <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>
</span></span><span class="token tag"${a}><span class="token tag"${a}><span class="token punctuation"${a}>&lt;/</span>script</span><span class="token punctuation"${a}>&gt;</span></span></code></pre>`),t(c(m,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onScroll"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// when this method is invoked then it means user"),s(`
      `),n("span",{class:"token comment"},"// has scrolled the page to `position`"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
      `),n("span",{class:"token comment"},"// `position` is an Integer designating the current"),s(`
      `),n("span",{class:"token comment"},"// scroll position in pixels."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" onScroll "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])]),n(m)]}),_:1},p,o)),e(c(r($),null,{default:l((i,t,u,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> debounce <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> <span class="token punctuation"${a}>{</span>
  <span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>function</span> <span class="token function"${a}>onScroll</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>position</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// when this method is invoked then it means user</span>
      <span class="token comment"${a}>// has scrolled the page to \`position\`</span>
      <span class="token comment"${a}>//</span>
      <span class="token comment"${a}>// \`position\` is an Integer designating the current</span>
      <span class="token comment"${a}>// scroll position in pixels.</span>
    <span class="token punctuation"${a}>}</span>

    <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>onScroll</span><span class="token operator"${a}>:</span> <span class="token function"${a}>debounce</span><span class="token punctuation"${a}>(</span>onScroll<span class="token punctuation"${a}>,</span> <span class="token number"${a}>200</span><span class="token punctuation"${a}>)</span> <span class="token comment"${a}>// debounce for 200ms</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(m,null,null,u,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" debounce "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// when this method is invoked then it means user"),s(`
      `),n("span",{class:"token comment"},"// has scrolled the page to `position`"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
      `),n("span",{class:"token comment"},"// `position` is an Integer designating the current"),s(`
      `),n("span",{class:"token comment"},"// scroll position in pixels."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"onScroll"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),s("onScroll"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// debounce for 200ms"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(m)]}),_:1},p,o)),e(`<h3 id="determining-scrolling-container" class="doc-heading doc-h3"${o}>Determining Scrolling Container</h3><p${o}>Please read `),e(c(k,{to:"/vue-components/scroll-observer#determining-scrolling-container"},{default:l((i,t,u,a)=>{if(t)t("here");else return[s("here")]}),_:1},p,o)),e(" about how Quasar determines the container to attach scrolling events to.</p>");else return[n("p",null,"This is a Vue directive which takes one parameter (a Function) and fires when user scrolls the page containing that DOM node."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIPS"),n("ul",null,[n("li",null,[s("One alternative to using this directive is to place a "),n(k,{to:"/vue-components/scroll-observer"},{default:l(()=>[s("QScrollObserver")]),_:1}),s(" component on your page.")]),n("li",null,[s("There is one more scrolling-related directive available called "),n(k,{to:"/vue-directives/scroll-fire"},{default:l(()=>[s("Scroll Fire")]),_:1}),s(".")])])]),n(w,{file:"Scroll"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:i=>r(v)("usage")},"Usage",8,["onClick"]),n(r($),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onScroll"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// when this method is invoked then it means user"),s(`
      `),n("span",{class:"token comment"},"// has scrolled the page to `position`"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
      `),n("span",{class:"token comment"},"// `position` is an Integer designating the current"),s(`
      `),n("span",{class:"token comment"},"// scroll position in pixels."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" onScroll "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])]),n(m)]),_:1}),n(r($),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" debounce "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// when this method is invoked then it means user"),s(`
      `),n("span",{class:"token comment"},"// has scrolled the page to `position`"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
      `),n("span",{class:"token comment"},"// `position` is an Integer designating the current"),s(`
      `),n("span",{class:"token comment"},"// scroll position in pixels."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"onScroll"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),s("onScroll"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// debounce for 200ms"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(m)]),_:1}),n("h3",{id:"determining-scrolling-container",class:"doc-heading doc-h3",onClick:i=>r(v)("determining-scrolling-container")},"Determining Scrolling Container",8,["onClick"]),n("p",null,[s("Please read "),n(k,{to:"/vue-components/scroll-observer#determining-scrolling-container"},{default:l(()=>[s("here")]),_:1}),s(" about how Quasar determines the container to attach scrolling events to.")])]}),_:1},b))}}},y=f.setup;f.setup=(h,d)=>{const g=C();return(g.modules||(g.modules=new Set)).add("src/pages/vue-directives/scroll.md"),y?y(h,d):void 0};const W=q(f,[["__file","scroll.md"]]);export{W as default};
