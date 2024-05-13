import{mergeProps as E,withCtx as l,unref as c,createVNode as n,createTextVNode as s,useSSRContext as C}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as S,a as y}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as O}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"dom-utils",__ssrInlineRender:!0,setup(g){const $=[{id:"helping-tree-shake",title:"1.1. Helping Tree-Shake",sub:!0},{id:"offset-on-screen-viewport",title:"2. Offset on screen viewport"},{id:"get-computed-style",title:"3. Get Computed Style"},{id:"get-height-width",title:"4. Get Height / Width"},{id:"apply-css-properties-in-batch",title:"5. Apply CSS Properties in Batch"},{id:"execute-when-dom-is-ready",title:"6. Execute when DOM is ready"},{id:"handling-event-on-a-dom-event-handler",title:"7. Handling event on a DOM event handler"}];return(d,v,D,b)=>{v(u(S,E({title:"DOM Utils",desc:"A set of Quasar methods for DOM elements which helps you in retrieving the offset on screen viewport, getting and setting styles, waiting for the DOM to be ready and morphing DOM elements.",heading:"","edit-link":"quasar-utils/dom-utils",toc:$},b),{default:l((x,p,m,o)=>{if(p)p(`<h3 id="helping-tree-shake" class="doc-heading doc-h3"${o}>Helping Tree-Shake</h3><p${o}>You will notice all examples import different parts of Quasar. However, if you need only one specific util method, then you can use ES6 destructuring to help Tree Shaking embed only that method and not all around it.</p><p${o}>Example with <code class="doc-token"${o}>dom</code> utils:</p>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> offset <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> dom

<span class="token comment"${t}>// Offset on screen</span>
console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token function"${t}>offset</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// { top: 10, left: 100 }</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" offset "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Offset on screen"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"offset"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// { top: 10, left: 100 }")])]),n(e)]}),_:1},m,o)),p(`<p${o}>You can also import all of dom utils and use whatever you need like this (but note that your bundle will contain unused methods too):</p>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

<span class="token comment"${t}>// Offset on screen</span>
console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span>dom<span class="token punctuation"${t}>.</span><span class="token function"${t}>offset</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// { top: 10, left: 100 }</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token comment"},"// Offset on screen"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("dom"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"offset"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// { top: 10, left: 100 }")])]),n(e)]}),_:1},m,o)),p(`<div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>For usage with the UMD build see `),p(u(y,{to:"/start/umd#quasar-global-object"},{default:l((r,a,i,t)=>{if(a)a("here");else return[s("here")]}),_:1},m,o)),p(`.</p></div><h2 id="offset-on-screen-viewport" class="doc-heading doc-h2"${o}>Offset on screen viewport</h2>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> offset <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> dom

<span class="token comment"${t}>// Offset on screen</span>
console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token function"${t}>offset</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// { top: 10, left: 100 }</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" offset "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Offset on screen"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"offset"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// { top: 10, left: 100 }")])]),n(e)]}),_:1},m,o)),p(`<h2 id="get-computed-style" class="doc-heading doc-h2"${o}>Get Computed Style</h2><p${o}>This applies only when DomElement is visible! It returns the <strong${o}>computed</strong> browser style, so the property you are asking for doesn’t necessary has to be applied within a <code class="doc-token"${o}>style</code> attribute.</p>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> style <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> dom

<span class="token comment"${t}>// Get COMPUTED style (when DomElement is visible!)</span>
<span class="token comment"${t}>// Computed means a DomElement might not have &quot;height&quot; CSS property set,</span>
<span class="token comment"${t}>// but that does not mean it doesn&#39;t have a height when it&#39;s displayed.</span>
<span class="token comment"${t}>// The following method accesses the computed CSS provided by the browser:</span>
console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token function"${t}>style</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;height&#39;</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// &#39;10px&#39; &lt;&lt;&lt; notice it returns a String ending in &#39;px&#39;</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" style "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Get COMPUTED style (when DomElement is visible!)"),s(`
`),n("span",{class:"token comment"},'// Computed means a DomElement might not have "height" CSS property set,'),s(`
`),n("span",{class:"token comment"},"// but that does not mean it doesn't have a height when it's displayed."),s(`
`),n("span",{class:"token comment"},"// The following method accesses the computed CSS provided by the browser:"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"style"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'height'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// '10px' <<< notice it returns a String ending in 'px'")])]),n(e)]}),_:1},m,o)),p(`<h2 id="get-height-width" class="doc-heading doc-h2"${o}>Get Height / Width</h2>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> height<span class="token punctuation"${t}>,</span> width <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> dom


<span class="token comment"${t}>// Some aliases of the previous method for &quot;width&quot; and &quot;height&quot; which</span>
<span class="token comment"${t}>// returns Numbers instead of Strings:</span>
console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span>
  <span class="token function"${t}>height</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>,</span>
  <span class="token function"${t}>width</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>)</span>
<span class="token comment"${t}>// 10 100</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" height"),n("span",{class:"token punctuation"},","),s(" width "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom


`),n("span",{class:"token comment"},'// Some aliases of the previous method for "width" and "height" which'),s(`
`),n("span",{class:"token comment"},"// returns Numbers instead of Strings:"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"height"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"width"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 10 100")])]),n(e)]}),_:1},m,o)),p(`<h2 id="apply-css-properties-in-batch" class="doc-heading doc-h2"${o}>Apply CSS Properties in Batch</h2>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> css <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> dom

<span class="token comment"${t}>// Apply a list of CSS properties to a DomNode</span>
<span class="token function"${t}>css</span><span class="token punctuation"${t}>(</span>DomElement<span class="token punctuation"${t}>,</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>height</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;10px&#39;</span><span class="token punctuation"${t}>,</span>
  <span class="token literal-property property"${t}>display</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;flex&#39;</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" css "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Apply a list of CSS properties to a DomNode"),s(`
`),n("span",{class:"token function"},"css"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'10px'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'flex'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},m,o)),p(`<h2 id="execute-when-dom-is-ready" class="doc-heading doc-h2"${o}>Execute when DOM is ready</h2>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> dom <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> ready <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> dom

<span class="token comment"${t}>// Execute a Function when DOM is ready:</span>
<span class="token function"${t}>ready</span><span class="token punctuation"${t}>(</span><span class="token keyword"${t}>function</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// ....</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ready "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Execute a Function when DOM is ready:"),s(`
`),n("span",{class:"token function"},"ready"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},m,o)),p(`<h2 id="handling-event-on-a-dom-event-handler" class="doc-heading doc-h2"${o}>Handling event on a DOM event handler</h2><p${o}>It’s cross-browser.</p>`),p(u(c(k),null,{default:l((r,a,i,t)=>{if(a)a(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> event <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>

node<span class="token punctuation"${t}>.</span><span class="token function"${t}>addEventListener</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;click&#39;</span><span class="token punctuation"${t}>,</span> <span class="token parameter"${t}>evt</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// left clicked?</span>
  <span class="token punctuation"${t}>(</span>Boolean<span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>leftClick</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// middle clicked?</span>
  <span class="token punctuation"${t}>(</span>Boolean<span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>middleClick</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// right clicked?</span>
  <span class="token punctuation"${t}>(</span>Boolean<span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>rightClick</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// key in number format</span>
  <span class="token punctuation"${t}>(</span>Number<span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>getEventKey</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// Mouse wheel distance (in pixels)</span>
  <span class="token punctuation"${t}>(</span>Object <span class="token punctuation"${t}>{</span>x<span class="token punctuation"${t}>,</span> y<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>getMouseWheelDistance</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// position on viewport</span>
  <span class="token comment"${t}>// works both for mouse and touch events!</span>
  <span class="token punctuation"${t}>(</span>Object <span class="token punctuation"${t}>{</span>top<span class="token punctuation"${t}>,</span> left<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>position</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// get target DOM Element on which mouse or touch</span>
  <span class="token comment"${t}>// event has fired upon</span>
  <span class="token punctuation"${t}>(</span><span class="token constant"${t}>DOM</span> Element<span class="token punctuation"${t}>)</span> event<span class="token punctuation"${t}>.</span><span class="token function"${t}>targetElement</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>

  <span class="token comment"${t}>// call stopPropagation and preventDefault</span>
  event<span class="token punctuation"${t}>.</span><span class="token function"${t}>stopAndPrevent</span><span class="token punctuation"${t}>(</span>evt<span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span></code></pre>`),a(u(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" event "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

node`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"evt"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// left clicked?"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Boolean"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"leftClick"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// middle clicked?"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Boolean"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"middleClick"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// right clicked?"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Boolean"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rightClick"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// key in number format"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Number"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getEventKey"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Mouse wheel distance (in pixels)"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Object "),n("span",{class:"token punctuation"},"{"),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMouseWheelDistance"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// position on viewport"),s(`
  `),n("span",{class:"token comment"},"// works both for mouse and touch events!"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Object "),n("span",{class:"token punctuation"},"{"),s("top"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"position"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// get target DOM Element on which mouse or touch"),s(`
  `),n("span",{class:"token comment"},"// event has fired upon"),s(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"DOM"),s(" Element"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"targetElement"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// call stopPropagation and preventDefault"),s(`
  event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopAndPrevent"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},m,o));else return[n("h3",{id:"helping-tree-shake",class:"doc-heading doc-h3",onClick:r=>c(f)("helping-tree-shake")},"Helping Tree-Shake",8,["onClick"]),n("p",null,"You will notice all examples import different parts of Quasar. However, if you need only one specific util method, then you can use ES6 destructuring to help Tree Shaking embed only that method and not all around it."),n("p",null,[s("Example with "),n("code",{class:"doc-token"},"dom"),s(" utils:")]),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" offset "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Offset on screen"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"offset"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// { top: 10, left: 100 }")])]),n(e)]),_:1}),n("p",null,"You can also import all of dom utils and use whatever you need like this (but note that your bundle will contain unused methods too):"),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token comment"},"// Offset on screen"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("dom"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"offset"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// { top: 10, left: 100 }")])]),n(e)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("For usage with the UMD build see "),n(y,{to:"/start/umd#quasar-global-object"},{default:l(()=>[s("here")]),_:1}),s(".")])]),n("h2",{id:"offset-on-screen-viewport",class:"doc-heading doc-h2",onClick:r=>c(f)("offset-on-screen-viewport")},"Offset on screen viewport",8,["onClick"]),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" offset "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Offset on screen"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"offset"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// { top: 10, left: 100 }")])]),n(e)]),_:1}),n("h2",{id:"get-computed-style",class:"doc-heading doc-h2",onClick:r=>c(f)("get-computed-style")},"Get Computed Style",8,["onClick"]),n("p",null,[s("This applies only when DomElement is visible! It returns the "),n("strong",null,"computed"),s(" browser style, so the property you are asking for doesn’t necessary has to be applied within a "),n("code",{class:"doc-token"},"style"),s(" attribute.")]),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" style "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Get COMPUTED style (when DomElement is visible!)"),s(`
`),n("span",{class:"token comment"},'// Computed means a DomElement might not have "height" CSS property set,'),s(`
`),n("span",{class:"token comment"},"// but that does not mean it doesn't have a height when it's displayed."),s(`
`),n("span",{class:"token comment"},"// The following method accesses the computed CSS provided by the browser:"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"style"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'height'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// '10px' <<< notice it returns a String ending in 'px'")])]),n(e)]),_:1}),n("h2",{id:"get-height-width",class:"doc-heading doc-h2",onClick:r=>c(f)("get-height-width")},"Get Height / Width",8,["onClick"]),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" height"),n("span",{class:"token punctuation"},","),s(" width "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom


`),n("span",{class:"token comment"},'// Some aliases of the previous method for "width" and "height" which'),s(`
`),n("span",{class:"token comment"},"// returns Numbers instead of Strings:"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token function"},"height"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"width"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 10 100")])]),n(e)]),_:1}),n("h2",{id:"apply-css-properties-in-batch",class:"doc-heading doc-h2",onClick:r=>c(f)("apply-css-properties-in-batch")},"Apply CSS Properties in Batch",8,["onClick"]),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" css "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Apply a list of CSS properties to a DomNode"),s(`
`),n("span",{class:"token function"},"css"),n("span",{class:"token punctuation"},"("),s("DomElement"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'10px'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"display"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'flex'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1}),n("h2",{id:"execute-when-dom-is-ready",class:"doc-heading doc-h2",onClick:r=>c(f)("execute-when-dom-is-ready")},"Execute when DOM is ready",8,["onClick"]),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" dom "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ready "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` dom

`),n("span",{class:"token comment"},"// Execute a Function when DOM is ready:"),s(`
`),n("span",{class:"token function"},"ready"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1}),n("h2",{id:"handling-event-on-a-dom-event-handler",class:"doc-heading doc-h2",onClick:r=>c(f)("handling-event-on-a-dom-event-handler")},"Handling event on a DOM event handler",8,["onClick"]),n("p",null,"It’s cross-browser."),n(c(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" event "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

node`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"evt"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// left clicked?"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Boolean"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"leftClick"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// middle clicked?"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Boolean"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"middleClick"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// right clicked?"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Boolean"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rightClick"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// key in number format"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Number"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getEventKey"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Mouse wheel distance (in pixels)"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Object "),n("span",{class:"token punctuation"},"{"),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMouseWheelDistance"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// position on viewport"),s(`
  `),n("span",{class:"token comment"},"// works both for mouse and touch events!"),s(`
  `),n("span",{class:"token punctuation"},"("),s("Object "),n("span",{class:"token punctuation"},"{"),s("top"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"position"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// get target DOM Element on which mouse or touch"),s(`
  `),n("span",{class:"token comment"},"// event has fired upon"),s(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"DOM"),s(" Element"),n("span",{class:"token punctuation"},")"),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"targetElement"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// call stopPropagation and preventDefault"),s(`
  event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopAndPrevent"),n("span",{class:"token punctuation"},"("),s("evt"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1})]}),_:1},D))}}},w=h.setup;h.setup=(g,$)=>{const d=C();return(d.modules||(d.modules=new Set)).add("src/pages/quasar-utils/dom-utils.md"),w?w(g,$):void 0};const Y=O(h,[["__file","dom-utils.md"]]);export{Y as default};
