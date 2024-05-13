import{mergeProps as y,withCtx as l,createTextVNode as a,unref as p,createVNode as n,useSSRContext as R}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as L,a as d}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as D}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const $={__name:"animations",__ssrInlineRender:!0,setup(b){const f=[{id:"installation",title:"2. Installation"},{id:"usage",title:"3. Usage"},{id:"built-in-animation-classes",title:"3.1. Built-in animation classes",sub:!0},{id:"modifier-classes",title:"3.2. Modifier classes",sub:!0},{id:"wrapping-multiple-elements",title:"3.3. Wrapping Multiple Elements",sub:!0}];return(h,v,q,w)=>{v(i(L,y({title:"Animations",desc:"Helper CSS animations supplied by Animate.css for a Quasar app.",heading:"","edit-link":"options/animations",toc:f},w),{default:l((B,o,m,s)=>{if(o)o(`<p${s}>CSS Transitions can be handled by the `),o(i(d,{to:"https://vuejs.org/api/built-in-components.html"},{default:l((r,e,u,t)=>{if(e)e("Vue Transition Component");else return[a("Vue Transition Component")]}),_:1},m,s)),o(`. The transitions are used for entering (appearing) or leaving (disappearing) animations.</p><p${s}>However, Quasar can supply a big list of ready to use CSS animations. The animation effects are borrowed from `),o(i(d,{to:"https://animate.style/"},{default:l((r,e,u,t)=>{if(e)e("Animate.css");else return[a("Animate.css")]}),_:1},m,s)),o(`. So there are 80+ animation types available for you to use out of the box. Check the list either on Animate.css website or on the demo available for this page.</p><blockquote class="doc-note"${s}><p${s}>Please refer to `),o(i(d,{to:"https://vuejs.org/api/built-in-components.html#transition"},{default:l((r,e,u,t)=>{if(e)e("Vue");else return[a("Vue")]}),_:1},m,s)),o(` documentation for learning on how to use the Vue supplied <code class="doc-token"${s}>&lt;transition&gt;</code> component.</p></blockquote><h2 id="installation" class="doc-heading doc-h2"${s}>Installation</h2><p${s}>Edit the <code class="doc-token"${s}>/quasar.config</code> file:</p>`),o(i(p(k),{title:"/quasar.config file"},{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// embedding all animations</span>
<span class="token literal-property property"${t}>animations</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;all&#39;</span>

<span class="token comment"${t}>// or embedding only specific animations</span>
<span class="token literal-property property"${t}>animations</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
  <span class="token string"${t}>&#39;bounceInLeft&#39;</span><span class="token punctuation"${t}>,</span>
  <span class="token string"${t}>&#39;bounceOutRight&#39;</span>
<span class="token punctuation"${t}>]</span></code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// embedding all animations"),a(`
`),n("span",{class:"token literal-property property"},"animations"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'all'"),a(`

`),n("span",{class:"token comment"},"// or embedding only specific animations"),a(`
`),n("span",{class:"token literal-property property"},"animations"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token string"},"'bounceInLeft'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'bounceOutRight'"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(c)]}),_:1},m,s)),o(`<p${s}>If you are building a website, you can also skip configuring the quasar.config file and use a CDN link which points to Animate.css like this (following is just an example, Google for latest link). Remember this will require an Internet connection for your user, as opposed to bundling from within the quasar.config file.</p>`),o(i(p(k),null,{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>&lt;!-- @quasar/app-vite: /index.html --&gt;</span>
<span class="token comment"${t}>&lt;!-- @quasar/app-webpack: src/index.template.html --&gt;</span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>head</span><span class="token punctuation"${t}>&gt;</span></span>
  ...

  <span class="token comment"${t}>&lt;!-- CDN example for Animate.css --&gt;</span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>link</span>
    <span class="token attr-name"${t}>rel</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>stylesheet<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>href</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>head</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"<!-- @quasar/app-vite: /index.html -->"),a(`
`),n("span",{class:"token comment"},"<!-- @quasar/app-webpack: src/index.template.html -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("head")]),n("span",{class:"token punctuation"},">")]),a(`
  ...

  `),n("span",{class:"token comment"},"<!-- CDN example for Animate.css -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("link")]),a(`
    `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("stylesheet"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("head")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},m,s)),o(`<div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}>It should be noted that when you import Animate.css through the <code class="doc-token"${s}>&lt;link&gt;</code> tag, all animation CSS classes must be prefixed with <code class="doc-token"${s}>animate__</code>. This is a breaking change in the migration of Animate.css from v3 to v4. If you want to avoid using prefixes, you can import the `),o(i(d,{to:"https://animate.style/#migration"},{default:l((r,e,u,t)=>{if(e)e("compat version");else return[a("compat version")]}),_:1},m,s)),o(`. <br${s}><br${s}> However, if you’re using the <strong${s}>Quasar CLI</strong>, no additional changes are needed.</p></div><div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}><strong${s}>Windows Developers</strong> If you’re developing on Windows and the animations don’t appear to be working, it’s likely an OS level setting that’s to blame. Try changing <strong${s}>Visual Effects</strong> to <strong${s}>Adjust for Best Appearance</strong>.</p><ol${s}><li${s}>Right click <code class="doc-token"${s}>My Computer</code> and select <code class="doc-token"${s}>Properties</code></li><li${s}>Click <code class="doc-token"${s}>Advanced System Settings</code></li><li${s}>Click the <code class="doc-token"${s}>Settings</code> button under <code class="doc-token"${s}>Performance</code></li><li${s}>Under the <code class="doc-token"${s}>Visual Effects</code> tab, change the radio option to: <code class="doc-token"${s}>Adjust for Best Appearance</code></li></ol></div><h2 id="usage" class="doc-heading doc-h2"${s}>Usage</h2><div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}>Notice the string <code class="doc-token"${s}>animated</code> in front of the actual animation class name.</p></div>`),o(i(p(k),{title:"Example with wrapping only one DOM element / component"},{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>transition</span>
  <span class="token attr-name"${t}>appear</span>
  <span class="token attr-name"${t}>enter-active-class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>animated fadeIn<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>leave-active-class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>animated fadeOut<span class="token punctuation"${t}>&quot;</span></span>
<span class="token punctuation"${t}>&gt;</span></span>
  <span class="token comment"${t}>&lt;!-- Wrapping only one DOM element, defined by QBtn --&gt;</span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span>
    <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>secondary<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>icon</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>mail<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>Email<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token punctuation"${t}>/&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>transition</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("transition")]),a(`
  `),n("span",{class:"token attr-name"},"appear"),a(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeIn"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Wrapping only one DOM element, defined by QBtn -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mail"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Email"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("transition")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},m,s)),o(`<h3 id="built-in-animation-classes" class="doc-heading doc-h3"${s}>Built-in animation classes</h3><p${s}>Quasar also provides some built-in classes to animate the active state between both enter and leave transitions. The animations provided are separated into three groups (click on them to expand):</p><details class="doc-note doc-note--details"${s}><summary class="doc-note__title"${s}>General classes</summary>`),o(i(p(k),null,{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>bounce
flash
flip
headShake
heartBeat
hinge
jello
pulse
rubberBand
shake
shakeX
shakeY
swing
tada
wobble</code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,`bounce
flash
flip
headShake
heartBeat
hinge
jello
pulse
rubberBand
shake
shakeX
shakeY
swing
tada
wobble`)]),n(c)]}),_:1},m,s)),o(`</details><details class="doc-note doc-note--details"${s}><summary class="doc-note__title"${s}>&quot;In&quot; classes</summary>`),o(i(p(k),null,{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>backInDown
backInLeft
backInRight
backInUp
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
fadeIn
fadeInBottomLeft
fadeInBottomRight
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInTopLeft
fadeInTopRight
fadeInUp
fadeInUpBig
flipInX
flipInY
jackInTheBox
lightSpeedInLeft
lightSpeedInRight
rollIn
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
slideInDown
slideInLeft
slideInRight
slideInUp
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp</code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,`backInDown
backInLeft
backInRight
backInUp
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
fadeIn
fadeInBottomLeft
fadeInBottomRight
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInTopLeft
fadeInTopRight
fadeInUp
fadeInUpBig
flipInX
flipInY
jackInTheBox
lightSpeedInLeft
lightSpeedInRight
rollIn
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
slideInDown
slideInLeft
slideInRight
slideInUp
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp`)]),n(c)]}),_:1},m,s)),o(`</details><details class="doc-note doc-note--details"${s}><summary class="doc-note__title"${s}>&quot;Out&quot; classes</summary>`),o(i(p(k),null,{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>backOutDown
backOutLeft
backOutRight
backOutUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeOut
fadeOutBottomLeft
fadeOutBottomRight
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutTopLeft
fadeOutTopRight
fadeOutUp
fadeOutUpBig
flipOutX
flipOutY
lightSpeedOutLeft
lightSpeedOutRight
rollOut
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
slideOutDown
slideOutLeft
slideOutRight
slideOutUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp</code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,`backOutDown
backOutLeft
backOutRight
backOutUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeOut
fadeOutBottomLeft
fadeOutBottomRight
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutTopLeft
fadeOutTopRight
fadeOutUp
fadeOutUpBig
flipOutX
flipOutY
lightSpeedOutLeft
lightSpeedOutRight
rollOut
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
slideOutDown
slideOutLeft
slideOutRight
slideOutUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp`)]),n(c)]}),_:1},m,s)),o(`</details><p${s}>You can also go to the `),o(i(d,{to:"https://vuejs.org/guide/built-ins/transition.html#custom-transition-classes"},{default:l((r,e,u,t)=>{if(e)e("official Vue documention");else return[a("official Vue documention")]}),_:1},m,s)),o(` for more information about the use of these classes.</p><h3 id="modifier-classes" class="doc-heading doc-h3"${s}>Modifier classes</h3><p${s}>There are additional classes which delay or repeat or change the speed of the animations (click to expand):</p><details class="doc-note doc-note--details"${s}><summary class="doc-note__title"${s}>Modifier classes</summary>`),o(i(p(k),null,{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>repeat
repeat<span class="token operator"${t}>-</span><span class="token number"${t}>1</span>
repeat<span class="token operator"${t}>-</span><span class="token number"${t}>2</span>
delay<span class="token operator"${t}>-</span>1s
delay<span class="token operator"${t}>-</span>5s
slower
slow
fast
faster</code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`repeat
repeat`),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),a(`
repeat`),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),a(`
delay`),n("span",{class:"token operator"},"-"),a(`1s
delay`),n("span",{class:"token operator"},"-"),a(`5s
slower
slow
fast
faster`)])]),n(c)]}),_:1},m,s)),o(`</details><p${s}>Example:</p>`),o(i(p(k),null,{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>transition</span>
  <span class="token attr-name"${t}>appear</span>
  <span class="token attr-name"${t}>enter-active-class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>animated fadeIn slower delay-5s repeat-2<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>leave-active-class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>animated fadeOut<span class="token punctuation"${t}>&quot;</span></span>
<span class="token punctuation"${t}>&gt;</span></span>
  <span class="token comment"${t}>&lt;!-- Wrapping only one DOM element, defined by QBtn --&gt;</span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span>
    <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>secondary<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>icon</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>mail<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>Email<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token punctuation"${t}>/&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>transition</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("transition")]),a(`
  `),n("span",{class:"token attr-name"},"appear"),a(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeIn slower delay-5s repeat-2"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Wrapping only one DOM element, defined by QBtn -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mail"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Email"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("transition")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},m,s)),o(`<h3 id="wrapping-multiple-elements" class="doc-heading doc-h3"${s}>Wrapping Multiple Elements</h3><p${s}>You can also group components or DOM elements in a transition so that the same effects are applied to all of them simultaneously.</p>`),o(i(p(k),{title:"Example with wrapping multiple DOM elements / components"},{default:l((r,e,u,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>transition-group</span>
  <span class="token attr-name"${t}>appear</span>
  <span class="token attr-name"${t}>enter-active-class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>animated fadeIn<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>leave-active-class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>animated fadeOut<span class="token punctuation"${t}>&quot;</span></span>
<span class="token punctuation"${t}>&gt;</span></span>
  <span class="token comment"${t}>&lt;!-- We wrap a &quot;p&quot; tag and a QBtn --&gt;</span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>p</span> <span class="token attr-name"${t}>key</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>text<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
     Lorem Ipsum
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>p</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span>
    <span class="token attr-name"${t}>key</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>email-button<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>secondary<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>icon</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>mail<span class="token punctuation"${t}>&quot;</span></span>
    <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>Email<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token punctuation"${t}>/&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>transition-group</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(i(c,null,null,u,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("transition-group")]),a(`
  `),n("span",{class:"token attr-name"},"appear"),a(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeIn"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},'<!-- We wrap a "p" tag and a QBtn -->'),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
     Lorem Ipsum
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
    `),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email-button"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mail"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Email"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("transition-group")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},m,s)),o(`<p${s}>Please note some things in the above example:</p><ol${s}><li${s}>Note <code class="doc-token"${s}>&lt;transition-group&gt;</code> instead of <code class="doc-token"${s}>&lt;transition&gt;</code>.</li><li${s}>The components and DOM elements must be keyed, like <code class="doc-token"${s}>key=&quot;text&quot;</code> or <code class="doc-token"${s}>key=&quot;email-button&quot;</code> in the example above.</li><li${s}>Both examples above have the Boolean property <code class="doc-token"${s}>appear</code> specified, which makes the entering animation kick in right after component(s) have been rendered. This property is optional.</li></ol>`);else return[n("p",null,[a("CSS Transitions can be handled by the "),n(d,{to:"https://vuejs.org/api/built-in-components.html"},{default:l(()=>[a("Vue Transition Component")]),_:1}),a(". The transitions are used for entering (appearing) or leaving (disappearing) animations.")]),n("p",null,[a("However, Quasar can supply a big list of ready to use CSS animations. The animation effects are borrowed from "),n(d,{to:"https://animate.style/"},{default:l(()=>[a("Animate.css")]),_:1}),a(". So there are 80+ animation types available for you to use out of the box. Check the list either on Animate.css website or on the demo available for this page.")]),n("blockquote",{class:"doc-note"},[n("p",null,[a("Please refer to "),n(d,{to:"https://vuejs.org/api/built-in-components.html#transition"},{default:l(()=>[a("Vue")]),_:1}),a(" documentation for learning on how to use the Vue supplied "),n("code",{class:"doc-token"},"<transition>"),a(" component.")])]),n("h2",{id:"installation",class:"doc-heading doc-h2",onClick:r=>p(g)("installation")},"Installation",8,["onClick"]),n("p",null,[a("Edit the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(p(k),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// embedding all animations"),a(`
`),n("span",{class:"token literal-property property"},"animations"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'all'"),a(`

`),n("span",{class:"token comment"},"// or embedding only specific animations"),a(`
`),n("span",{class:"token literal-property property"},"animations"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token string"},"'bounceInLeft'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'bounceOutRight'"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(c)]),_:1}),n("p",null,"If you are building a website, you can also skip configuring the quasar.config file and use a CDN link which points to Animate.css like this (following is just an example, Google for latest link). Remember this will require an Internet connection for your user, as opposed to bundling from within the quasar.config file."),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"<!-- @quasar/app-vite: /index.html -->"),a(`
`),n("span",{class:"token comment"},"<!-- @quasar/app-webpack: src/index.template.html -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("head")]),n("span",{class:"token punctuation"},">")]),a(`
  ...

  `),n("span",{class:"token comment"},"<!-- CDN example for Animate.css -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("link")]),a(`
    `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("stylesheet"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("head")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("It should be noted that when you import Animate.css through the "),n("code",{class:"doc-token"},"<link>"),a(" tag, all animation CSS classes must be prefixed with "),n("code",{class:"doc-token"},"animate__"),a(". This is a breaking change in the migration of Animate.css from v3 to v4. If you want to avoid using prefixes, you can import the "),n(d,{to:"https://animate.style/#migration"},{default:l(()=>[a("compat version")]),_:1}),a(". "),n("br"),n("br"),a(" However, if you’re using the "),n("strong",null,"Quasar CLI"),a(", no additional changes are needed.")])]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[n("strong",null,"Windows Developers"),a(" If you’re developing on Windows and the animations don’t appear to be working, it’s likely an OS level setting that’s to blame. Try changing "),n("strong",null,"Visual Effects"),a(" to "),n("strong",null,"Adjust for Best Appearance"),a(".")]),n("ol",null,[n("li",null,[a("Right click "),n("code",{class:"doc-token"},"My Computer"),a(" and select "),n("code",{class:"doc-token"},"Properties")]),n("li",null,[a("Click "),n("code",{class:"doc-token"},"Advanced System Settings")]),n("li",null,[a("Click the "),n("code",{class:"doc-token"},"Settings"),a(" button under "),n("code",{class:"doc-token"},"Performance")]),n("li",null,[a("Under the "),n("code",{class:"doc-token"},"Visual Effects"),a(" tab, change the radio option to: "),n("code",{class:"doc-token"},"Adjust for Best Appearance")])])]),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:r=>p(g)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Notice the string "),n("code",{class:"doc-token"},"animated"),a(" in front of the actual animation class name.")])]),n(p(k),{title:"Example with wrapping only one DOM element / component"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("transition")]),a(`
  `),n("span",{class:"token attr-name"},"appear"),a(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeIn"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Wrapping only one DOM element, defined by QBtn -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mail"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Email"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("transition")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("h3",{id:"built-in-animation-classes",class:"doc-heading doc-h3",onClick:r=>p(g)("built-in-animation-classes")},"Built-in animation classes",8,["onClick"]),n("p",null,"Quasar also provides some built-in classes to animate the active state between both enter and leave transitions. The animations provided are separated into three groups (click on them to expand):"),n("details",{class:"doc-note doc-note--details"},[n("summary",{class:"doc-note__title"},"General classes"),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,`bounce
flash
flip
headShake
heartBeat
hinge
jello
pulse
rubberBand
shake
shakeX
shakeY
swing
tada
wobble`)]),n(c)]),_:1})]),n("details",{class:"doc-note doc-note--details"},[n("summary",{class:"doc-note__title"},'"In" classes'),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,`backInDown
backInLeft
backInRight
backInUp
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
fadeIn
fadeInBottomLeft
fadeInBottomRight
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInTopLeft
fadeInTopRight
fadeInUp
fadeInUpBig
flipInX
flipInY
jackInTheBox
lightSpeedInLeft
lightSpeedInRight
rollIn
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
slideInDown
slideInLeft
slideInRight
slideInUp
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp`)]),n(c)]),_:1})]),n("details",{class:"doc-note doc-note--details"},[n("summary",{class:"doc-note__title"},'"Out" classes'),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,`backOutDown
backOutLeft
backOutRight
backOutUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeOut
fadeOutBottomLeft
fadeOutBottomRight
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutTopLeft
fadeOutTopRight
fadeOutUp
fadeOutUpBig
flipOutX
flipOutY
lightSpeedOutLeft
lightSpeedOutRight
rollOut
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
slideOutDown
slideOutLeft
slideOutRight
slideOutUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp`)]),n(c)]),_:1})]),n("p",null,[a("You can also go to the "),n(d,{to:"https://vuejs.org/guide/built-ins/transition.html#custom-transition-classes"},{default:l(()=>[a("official Vue documention")]),_:1}),a(" for more information about the use of these classes.")]),n("h3",{id:"modifier-classes",class:"doc-heading doc-h3",onClick:r=>p(g)("modifier-classes")},"Modifier classes",8,["onClick"]),n("p",null,"There are additional classes which delay or repeat or change the speed of the animations (click to expand):"),n("details",{class:"doc-note doc-note--details"},[n("summary",{class:"doc-note__title"},"Modifier classes"),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`repeat
repeat`),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),a(`
repeat`),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),a(`
delay`),n("span",{class:"token operator"},"-"),a(`1s
delay`),n("span",{class:"token operator"},"-"),a(`5s
slower
slow
fast
faster`)])]),n(c)]),_:1})]),n("p",null,"Example:"),n(p(k),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("transition")]),a(`
  `),n("span",{class:"token attr-name"},"appear"),a(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeIn slower delay-5s repeat-2"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Wrapping only one DOM element, defined by QBtn -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mail"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Email"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("transition")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("h3",{id:"wrapping-multiple-elements",class:"doc-heading doc-h3",onClick:r=>p(g)("wrapping-multiple-elements")},"Wrapping Multiple Elements",8,["onClick"]),n("p",null,"You can also group components or DOM elements in a transition so that the same effects are applied to all of them simultaneously."),n(p(k),{title:"Example with wrapping multiple DOM elements / components"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("transition-group")]),a(`
  `),n("span",{class:"token attr-name"},"appear"),a(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeIn"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},'<!-- We wrap a "p" tag and a QBtn -->'),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
     Lorem Ipsum
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
    `),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("email-button"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("secondary"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mail"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Email"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("transition-group")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("p",null,"Please note some things in the above example:"),n("ol",null,[n("li",null,[a("Note "),n("code",{class:"doc-token"},"<transition-group>"),a(" instead of "),n("code",{class:"doc-token"},"<transition>"),a(".")]),n("li",null,[a("The components and DOM elements must be keyed, like "),n("code",{class:"doc-token"},'key="text"'),a(" or "),n("code",{class:"doc-token"},'key="email-button"'),a(" in the example above.")]),n("li",null,[a("Both examples above have the Boolean property "),n("code",{class:"doc-token"},"appear"),a(" specified, which makes the entering animation kick in right after component(s) have been rendered. This property is optional.")])])]}),_:1},q))}}},O=$.setup;$.setup=(b,f)=>{const h=R();return(h.modules||(h.modules=new Set)).add("src/pages/options/animations.md"),O?O(b,f):void 0};const Y=D($,[["__file","animations.md"]]);export{Y as default};
