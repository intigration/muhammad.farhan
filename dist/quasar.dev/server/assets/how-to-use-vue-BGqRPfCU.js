import{resolveComponent as x,mergeProps as C,withCtx as p,createTextVNode as a,unref as c,createVNode as n,useSSRContext as V}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as $}from"./page-utils-C-QWsEHe.js";import{D as N,a as m}from"./DocPage-DKr-0pQn.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as Q}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"how-to-use-vue",__ssrInlineRender:!0,setup(w){const y=[{id:"vue-single-file-components-sfc-",title:"2. Vue Single File Components (SFC)"},{id:"css-preprocessors",title:"2.1. CSS preprocessors",sub:!0},{id:"using-quasar-directives",title:"3. Using Quasar Directives"},{id:"using-quasar-components",title:"4. Using Quasar Components"},{id:"using-quasar-plugins",title:"5. Using Quasar Plugins"},{id:"self-closing-tags",title:"5.1. Self-Closing Tags",sub:!0},{id:"handling-vue-properties",title:"6. Handling Vue Properties"},{id:"boolean-property",title:"6.1. Boolean Property",sub:!0},{id:"string-property",title:"6.2. String Property",sub:!0},{id:"number-property",title:"6.3. Number Property",sub:!0},{id:"object-property",title:"6.4. Object Property",sub:!0},{id:"array-property",title:"6.5. Array Property",sub:!0},{id:"handling-vue-methods",title:"7. Handling Vue Methods"},{id:"handling-vue-events",title:"8. Handling Vue Events"}];return(h,b,q,S)=>{const f=x("q-markup-table");b(u(N,C({title:"How To Use Vue",desc:"Quick tutorial about Vue principles and how to use it with Quasar.",heading:"","edit-link":"start/how-to-use-vue",toc:y},S),{default:p((T,l,g,e)=>{if(l)l(`<p${e}>Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue 3 works. (`),l(u(m,{to:"https://github.com/lukehoban/es6features"},{default:p((k,t,i,s)=>{if(t)t("Quick overview of ES6");else return[a("Quick overview of ES6")]}),_:1},g,e)),l(" and "),l(u(m,{to:"http://es6-features.org/#Constants"},{default:p((k,t,i,s)=>{if(t)t("ES6 complete list of features");else return[a("ES6 complete list of features")]}),_:1},g,e)),l(" – don’t worry, you don’t need to understand ALL of ES6). For devs experienced with reactive UIs, the "),l(u(m,{to:"https://vuejs.org/"},{default:p((k,t,i,s)=>{if(t)t("Vue 3 documentation");else return[a("Vue 3 documentation")]}),_:1},g,e)),l(` itself takes a half-day at most to read top-to-bottom and will help you understand how Quasar components can be used and configured.</p><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>If you are a total beginner to Vue and reactive UI libraries and want a good tutorial, we recommend you take a look at `),l(u(m,{to:"/video-tutorials"},{default:p((k,t,i,s)=>{if(t)t("Vue and Quasar video tutorials");else return[a("Vue and Quasar video tutorials")]}),_:1},g,e)),l(`.</p></div><p${e}>After reading the Vue documentation, let’s clear up some of the most frequently asked questions, like <em${e}>“How can I use Quasar components, Vue properties, methods and events”</em>.</p><h2 id="vue-single-file-components-sfc-" class="doc-heading doc-h2"${e}>Vue Single File Components (SFC)</h2><p${e}>You’ll be building your Quasar app using <code class="doc-token"${e}>*.vue</code> files which contain multiple sections: <code class="doc-token"${e}>template</code> (HTML), <code class="doc-token"${e}>script</code> (Javascript) and <code class="doc-token"${e}>style</code> (CSS/SASS/SCSS/Stylus/Less) all in the same file.</p><p${e}>Currently, it is recommended to use Composition API with <code class="doc-token"${e}>&lt;script setup&gt;</code>. Check out `),l(u(m,{to:"https://vuejs.org/api/sfc-script-setup.html"},{default:p((k,t,i,s)=>{if(t)t("Vue.js documentation");else return[a("Vue.js documentation")]}),_:1},g,e)),l(" for more information.</p>"),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- you define your Vue template here --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span> <span class="token attr-name"${s}>setup</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token comment"${s}>// This is where your Javascript goes</span>
<span class="token comment"${s}>// to define your Vue component, which</span>
<span class="token comment"${s}>// can be a Layout, a Page or your own</span>
<span class="token comment"${s}>// component used throughout the app.</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>style</span><span class="token punctuation"${s}>&gt;</span></span><span class="token style"${s}><span class="token language-css"${s}>
<span class="token comment"${s}>/* This is where your CSS goes */</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>style</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- you define your Vue template here -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// This is where your Javascript goes"),a(`
`),n("span",{class:"token comment"},"// to define your Vue component, which"),a(`
`),n("span",{class:"token comment"},"// can be a Layout, a Page or your own"),a(`
`),n("span",{class:"token comment"},"// component used throughout the app."),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token comment"},"/* This is where your CSS goes */"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<p${e}>But you can still use Composition API without <code class="doc-token"${e}>&lt;script setup&gt;</code> or Options API if you wish. The only difference is within the <code class="doc-token"${e}>&lt;script&gt;</code> tag.</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- you define your Vue template here --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token comment"${s}>// This is where your Javascript goes</span>
<span class="token comment"${s}>// to define your Vue component, which</span>
<span class="token comment"${s}>// can be a Layout, a Page or your own</span>
<span class="token comment"${s}>// component used throughout the app.</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>//</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>style</span><span class="token punctuation"${s}>&gt;</span></span><span class="token style"${s}><span class="token language-css"${s}>
<span class="token comment"${s}>/* This is where your CSS goes */</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>style</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- you define your Vue template here -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// This is where your Javascript goes"),a(`
`),n("span",{class:"token comment"},"// to define your Vue component, which"),a(`
`),n("span",{class:"token comment"},"// can be a Layout, a Page or your own"),a(`
`),n("span",{class:"token comment"},"// component used throughout the app."),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"//"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token comment"},"/* This is where your CSS goes */"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h3 id="css-preprocessors" class="doc-heading doc-h3"${e}>CSS preprocessors</h3><p${e}>For the <code class="doc-token"${e}>&lt;style&gt;</code> tag, you can also use whatever CSS preprocessor you want. `),l(u(m,{to:"https://sass-lang.com"},{default:p((k,t,i,s)=>{if(t)t("Sass/SCSS");else return[a("Sass/SCSS")]}),_:1},g,e)),l(` (recommended) is available out of the box.</p><p${e}>You can specify you want your chosen preprocessor to handle the CSS code that you’re writing:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>&lt;!-- notice lang=&quot;sass&quot; --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>style</span> <span class="token attr-name"${s}>lang</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>sass<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span><span class="token style"${s}><span class="token language-css"${s}>
.some-div
  <span class="token property"${s}>font-size</span><span class="token punctuation"${s}>:</span> 15px
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>style</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token comment"${s}>&lt;!-- notice lang=&quot;scss&quot; --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>style</span> <span class="token attr-name"${s}>lang</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>scss<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span><span class="token style"${s}><span class="token language-css"${s}>
<span class="token selector"${s}>.some-div</span> <span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>font-size</span><span class="token punctuation"${s}>:</span> 15px<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>style</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'<!-- notice lang="sass" -->'),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sass"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
.some-div
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(` 15px
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token comment"},'<!-- notice lang="scss" -->'),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".some-div"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(" 15px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h2 id="using-quasar-directives" class="doc-heading doc-h2"${e}>Using Quasar Directives</h2><p${e}>Quasar comes with a few custom `),l(u(m,{to:"https://vuejs.org/guide/reusability/custom-directives.html"},{default:p((k,t,i,s)=>{if(t)t("Vue Directives");else return[a("Vue Directives")]}),_:1},g,e)),l(`. These directives can be applied on almost any DOM element or Component.</p><p${e}>Example of a Quasar directive:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-ripple</span><span class="token punctuation"${s}>&gt;</span></span>Click Me<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token punctuation"},">")]),a("Click Me"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<blockquote class="doc-note"${e}><p${e}>Notice how Ripple is used in the HTML template as <code class="doc-token"${e}>v-ripple</code>. Vue directives are prefixed with <code class="doc-token"${e}>v-</code>.</p></blockquote>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-touch-pan</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>handler<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>...<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-touch-swipe</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>handler<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>...<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>v-ripple</span><span class="token punctuation"${s}>&gt;</span></span>Click me. I got ripples.<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-touch-pan"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-touch-swipe"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token punctuation"},">")]),a("Click me. I got ripples."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h2 id="using-quasar-components" class="doc-heading doc-h2"${e}>Using Quasar Components</h2><p${e}>Quasar components have names beginning with “Q” like “QBtn” or “QElementResizeObserver”. In order to use them, you need to add a reference to them in the <code class="doc-token"${e}>/quasar.config</code> file.</p><p${e}>Let’s take the following example with a QBtn and QIcon and then we’ll see how to embed these components in our app:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-btn</span> <span class="token attr-name"${s}>@click</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>doSomething<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Do something<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-icon</span> <span class="token attr-name"${s}>name</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>alarm<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("doSomething"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Do something"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("alarm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<blockquote class="doc-note"${e}><p${e}>Notice how QBtn is used in the Vue HTML template as <code class="doc-token"${e}>&lt;q-btn&gt;</code>. If we’d import QElementResizeObserver, then we’d use it in template as <code class="doc-token"${e}>&lt;q-element-resize-observer&gt;</code>.</p></blockquote><h2 id="using-quasar-plugins" class="doc-heading doc-h2"${e}>Using Quasar Plugins</h2><p${e}>Quasar Plugins are features that you can use both in your Vue files as well as outside of them, like Notify, BottomSheet, AppVisibility and so on.</p><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}><strong${e}>Before using them in your app</strong>, you need to add a reference to them in the <code class="doc-token"${e}>/quasar.config</code> file (as shown below).</p></div>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>plugins</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span> <span class="token string"${s}>&#39;Notify&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;BottomSheet&#39;</span> <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token string"},"'Notify'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'BottomSheet'"),a(),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},g,e)),l(`<p${e}>Let’s take Notify as an example and see how we can then use it. In a Vue file, you’d write something like this (Composition API):</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-btn</span>
      <span class="token attr-name"${s}>@click</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>$q.notify(&#39;My message&#39;)<span class="token punctuation"${s}>&quot;</span></span>
      <span class="token attr-name"${s}>color</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>primary<span class="token punctuation"${s}>&quot;</span></span>
      <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Show a notification<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token punctuation"${s}>/&gt;</span></span>

    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-btn</span>
      <span class="token attr-name"${s}>@click</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>showNotification<span class="token punctuation"${s}>&quot;</span></span>
      <span class="token attr-name"${s}>color</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>primary<span class="token punctuation"${s}>&quot;</span></span>
      <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Show another notification<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token punctuation"${s}>/&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>function</span> <span class="token function"${s}>showNotification</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      $q<span class="token punctuation"${s}>.</span><span class="token function"${s}>notify</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Some other message&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      showNotification
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.notify('My message')"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Show a notification"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showNotification"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Show another notification"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"showNotification"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some other message'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showNotification
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<blockquote class="doc-note"${e}><p${e}>Notice that in the template area we’re using <code class="doc-token"${e}>$q.&lt;plugin-name&gt;</code>.</p></blockquote><p${e}>An equivalent script section in Options API:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>methods</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token function"${s}>showNotification</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token keyword"${s}>this</span><span class="token punctuation"${s}>.</span>$q<span class="token punctuation"${s}>.</span><span class="token function"${s}>notify</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Some other message&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showNotification"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some other message'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},g,e)),l(`<p${e}>Now let’s see an example of Notify being used outside of a Vue file:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Notify <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>

<span class="token comment"${s}>// ...</span>
Notify<span class="token punctuation"${s}>.</span><span class="token function"${s}>create</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;My message&#39;</span><span class="token punctuation"${s}>)</span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Notify "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// ..."),a(`
Notify`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'My message'"),n("span",{class:"token punctuation"},")")])]),n(o)]}),_:1},g,e)),l(`<h3 id="self-closing-tags" class="doc-heading doc-h3"${e}>Self-Closing Tags</h3><div class="doc-note doc-note--danger"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Do NOT use self-closing tag form when you are using <strong${e}>Quasar UMD version</strong>. Your browser is interpreting the HTML before Vue parses your DOM elements, so your HTML syntax must be correct. Unknown tags (like Vue components) cannot be self-closing because your browser will interpret those as if you are opening a tag but never closing it.</p></div><p${e}>Some Quasar components do not need you to include HTML content inside of them. In this case, you can use them as self-closing tags. One example with QIcon below:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-icon</span> <span class="token attr-name"${s}>name</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>cloud<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cloud"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])])]),n(o)]}),_:1},g,e)),l(`<p${e}>Self-closing means the above template is the equivalent to:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-icon</span> <span class="token attr-name"${s}>name</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>cloud<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-icon</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cloud"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-icon")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<p${e}>Both forms are valid and can be used, except for UMD where you must explicitly close the tags. It works the same with regular DOM elements:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>class</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>col<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token comment"${s}>&lt;!-- equivalent to: --&gt;</span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span> <span class="token attr-name"${s}>class</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>col<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("col"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token comment"},"<!-- equivalent to: -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("col"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<p${e}>Some eslint-plugin-vue linting rules actually enforce using the self-closing syntax.</p><h2 id="handling-vue-properties" class="doc-heading doc-h2"${e}>Handling Vue Properties</h2><p${e}>Let’s take some examples with a bogus Quasar component (we will call it QBogus) that supports the properties below. We will discuss each of the types of Vue properties in the below sections.</p>`),l(u(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:p((k,t,i,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Vue Property</th><th class="text-left"${s}>Type</th><th class="text-left"${s}>Description</th></tr></thead><tbody${s}><tr${s}><td${s}><code class="doc-token"${s}>infinite</code></td><td${s}>Boolean</td><td${s}>Infinite slides scrolling</td></tr><tr${s}><td${s}><code class="doc-token"${s}>size</code></td><td${s}>String</td><td${s}>Thickness of loading bar.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>speed</code></td><td${s}>Number</td><td${s}>How fast should loading bar update its value (in milliseconds).</td></tr><tr${s}><td${s}><code class="doc-token"${s}>columns</code></td><td${s}>Object</td><td${s}>Object defining columns (see “Columns Definition” below).</td></tr><tr${s}><td${s}><code class="doc-token"${s}>offset</code></td><td${s}>Array</td><td${s}>Array with two numbers. Offset on horizontal and vertical (in pixels).</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Vue Property"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"infinite")]),n("td",null,"Boolean"),n("td",null,"Infinite slides scrolling")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"size")]),n("td",null,"String"),n("td",null,"Thickness of loading bar.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"speed")]),n("td",null,"Number"),n("td",null,"How fast should loading bar update its value (in milliseconds).")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"columns")]),n("td",null,"Object"),n("td",null,"Object defining columns (see “Columns Definition” below).")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"offset")]),n("td",null,"Array"),n("td",null,"Array with two numbers. Offset on horizontal and vertical (in pixels).")])])]}),_:1},g,e)),l(`<h3 id="boolean-property" class="doc-heading doc-h3"${e}>Boolean Property</h3><p${e}>A boolean property means it only accepts a strictly Boolean value. The values will not be cast to Boolean, so you must ensure you are using a true Boolean.</p><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>In Quasar, all Boolean properties have <code class="doc-token"${e}>false</code> as the default value. As a result, you don’t have to explictly assign them the <code class="doc-token"${e}>false</code> value.</p></div><p${e}>If you are trying to control that property and change it dynamically at runtime, then bind it to a variable in your scope:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:infinite</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>myInfiniteVariable<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> myInfiniteVariable <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token boolean"${s}>false</span><span class="token punctuation"${s}>)</span>
    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      myInfiniteVariable
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":infinite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myInfiniteVariable"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myInfiniteVariable "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      myInfiniteVariable
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<p${e}>If, on the other hand, you know this Boolean value is not going to change, you can use the shorthand version of the variable like a component attribute and just specify it. In other words, if you don’t bind the variable to a variable in the component’s scope as it will always be <code class="doc-token"${e}>true</code>:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>infinite</span> <span class="token punctuation"${s}>/&gt;</span></span>

  <span class="token comment"${s}>&lt;!--
    the following is perfectly valid,
    but it&#39;s a longer version
  --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:infinite</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>true<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"infinite"),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},`<!--
    the following is perfectly valid,
    but it's a longer version
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":infinite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h3 id="string-property" class="doc-heading doc-h3"${e}>String Property</h3><p${e}>As you can imagine, Strings are required as a value for this type of property.</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!--
    direct assignment, no need for
    a variable in our scope
  --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>size</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>24px<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>

  <span class="token comment"${s}>&lt;!--
    we can also bind it to a variable
    in our scope so we can dynamically
    change it
  --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:size</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>mySize<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// notice String as value</span>
    <span class="token keyword"${s}>const</span> mySize <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;16px&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      mySize
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    direct assignment, no need for
    a variable in our scope
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("24px"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},`<!--
    we can also bind it to a variable
    in our scope so we can dynamically
    change it
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mySize"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// notice String as value"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" mySize "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'16px'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mySize
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h3 id="number-property" class="doc-heading doc-h3"${e}>Number Property</h3>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!--
    Case 1. Direct assignment.
    Notice the colon (&quot;:&quot;) before property name.
  --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:speed</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>50<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>

  <span class="token comment"${s}>&lt;!-- Case 2. Assignment through a scope variable --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:speed</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>myNumber<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// notice Number as value</span>
    <span class="token keyword"${s}>const</span> myNumber <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token number"${s}>50</span><span class="token punctuation"${s}>)</span>
    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      myNumber
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    Case 1. Direct assignment.
    Notice the colon (":") before property name.
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},"<!-- Case 2. Assignment through a scope variable -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myNumber"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// notice Number as value"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myNumber "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      myNumber
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h3 id="object-property" class="doc-heading doc-h3"${e}>Object Property</h3>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- Case 1. Direct assignment. --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:columns</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>{key: &#39;value&#39;, anotherKey: &#39;another value&#39;}<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- or a more elegant way for Case 1: --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span>
    <span class="token attr-name"${s}>:columns</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>{
      key: &#39;value&#39;,
      anotherKey: &#39;another value&#39;
    }<span class="token punctuation"${s}>&quot;</span></span>
  <span class="token punctuation"${s}>/&gt;</span></span>

  <span class="token comment"${s}>&lt;!-- Case 2. Assignment through a scope variable --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:columns</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>myColumns<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> myColumns <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>key</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;value&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>anotherKey</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;another value&#39;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span> myColumns <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Case 1. Direct assignment. -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{key: 'value', anotherKey: 'another value'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token comment"},"<!-- or a more elegant way for Case 1: -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
      key: 'value',
      anotherKey: 'another value'
    }`),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},"<!-- Case 2. Assignment through a scope variable -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myColumns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"anotherKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'another value'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" myColumns "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h3 id="array-property" class="doc-heading doc-h3"${e}>Array Property</h3>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!-- Case 1. Direct assignment. --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:offset</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>[10, 20]<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>

  <span class="token comment"${s}>&lt;!-- Case 2. Assignment through a scope variable --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>:offset</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>myOffset<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>myOffset</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span><span class="token number"${s}>10</span><span class="token punctuation"${s}>,</span> <span class="token number"${s}>20</span><span class="token punctuation"${s}>]</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Case 1. Direct assignment. -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[10, 20]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},"<!-- Case 2. Assignment through a scope variable -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myOffset"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"myOffset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h2 id="handling-vue-methods" class="doc-heading doc-h2"${e}>Handling Vue Methods</h2><p${e}>You will notice throughout the documentation that some Quasar components have methods that can be called. Example:</p>`),l(u(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:p((k,t,i,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Vue Method</th><th class="text-left"${s}>Description</th></tr></thead><tbody${s}><tr${s}><td${s}><code class="doc-token"${s}>next()</code></td><td${s}>Goes to next slide.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>previous(doneFn)</code></td><td${s}>Goes to previous slide.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>toggleFullscreen()</code></td><td${s}>Toggles fullscreen mode.</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Vue Method"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"next()")]),n("td",null,"Goes to next slide.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"previous(doneFn)")]),n("td",null,"Goes to previous slide.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"toggleFullscreen()")]),n("td",null,"Toggles fullscreen mode.")])])]}),_:1},g,e)),l(`<p${e}>In order for you to access these methods, you will need to set a Vue reference on the component first. Here’s an example with Composition API:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!--
    Notice ref=&quot;myRef&quot;. We will use the name
    assigned to &quot;ref&quot; in the script part below
  --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>ref</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>myRef<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref<span class="token punctuation"${s}>,</span> onMounted <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> myRef <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>null</span><span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// after the component has mounted into DOM:</span>
    <span class="token function"${s}>onMounted</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// we call &quot;next()&quot; method of our component</span>
      myRef<span class="token punctuation"${s}>.</span>value<span class="token punctuation"${s}>.</span><span class="token function"${s}>next</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token comment"${s}>// calling before mount point might result in errors</span>
    <span class="token comment"${s}>// as Vue hasn&#39;t yet prepared the Vue reference</span>

    <span class="token comment"${s}>// we expose myRef to the scope so Vue</span>
    <span class="token comment"${s}>// can use it in the template as well</span>
    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span> myRef <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    Notice ref="myRef". We will use the name
    assigned to "ref" in the script part below
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// after the component has mounted into DOM:"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},'// we call "next()" method of our component'),a(`
      myRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// calling before mount point might result in errors"),a(`
    `),n("span",{class:"token comment"},"// as Vue hasn't yet prepared the Vue reference"),a(`

    `),n("span",{class:"token comment"},"// we expose myRef to the scope so Vue"),a(`
    `),n("span",{class:"token comment"},"// can use it in the template as well"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" myRef "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<p${e}>And here is the same example, but with Options API:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token comment"${s}>&lt;!--
    Notice ref=&quot;myRef&quot;. We will use the name
    assigned to &quot;ref&quot; in the script part below
  --&gt;</span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>ref</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>myRef<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// we can now access \`this.$refs.myRef\`</span>
  <span class="token comment"${s}>// an example on the mounted() Vue component hook</span>
  <span class="token function"${s}>mounted</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// calling &quot;next()&quot; method:</span>
    <span class="token keyword"${s}>this</span><span class="token punctuation"${s}>.</span>$refs<span class="token punctuation"${s}>.</span>myRef<span class="token punctuation"${s}>.</span><span class="token function"${s}>next</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
  <span class="token comment"${s}>// calling before mount point might result in errors</span>
  <span class="token comment"${s}>// as Vue hasn&#39;t yet prepared the Vue reference</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    Notice ref="myRef". We will use the name
    assigned to "ref" in the script part below
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// we can now access `this.$refs.myRef`"),a(`
  `),n("span",{class:"token comment"},"// an example on the mounted() Vue component hook"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},'// calling "next()" method:'),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myRef"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token comment"},"// calling before mount point might result in errors"),a(`
  `),n("span",{class:"token comment"},"// as Vue hasn't yet prepared the Vue reference"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e)),l(`<h2 id="handling-vue-events" class="doc-heading doc-h2"${e}>Handling Vue Events</h2><p${e}>You will notice throughout the documentation that some Quasar components have a section called “Vue Events”.</p><p${e}>Example of “Vue Events”:</p>`),l(u(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:p((k,t,i,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Event Name</th><th class="text-left"${s}>Description</th></tr></thead><tbody${s}><tr${s}><td${s}><code class="doc-token"${s}>@show</code></td><td${s}>Triggered right after the Modal is shown.</td></tr><tr${s}><td${s}><code class="doc-token"${s}>@hide</code></td><td${s}>Triggered right after the Modal is hidden.</td></tr></tbody>`);else return[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Event Name"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"@show")]),n("td",null,"Triggered right after the Modal is shown.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"@hide")]),n("td",null,"Triggered right after the Modal is hidden.")])])]}),_:1},g,e)),l(`<p${e}>In order for you to catch these events, when they are triggered, you will need to add listeners for them on the component itself in the HTML template. Here’s an example:</p>`),l(u(c(r),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-bogus</span> <span class="token attr-name"${s}>@show</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>doSomething<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>@hide</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>doSomethingElse<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>function</span> <span class="token function"${s}>doSomething</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// this method has been called (in this case)</span>
      <span class="token comment"${s}>// because @show event was triggered by QBogus component</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>function</span> <span class="token function"${s}>doSomethingElse</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// this method has been called (in this case)</span>
      <span class="token comment"${s}>// because @hide event was triggered by QBogus component</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      doSomething<span class="token punctuation"${s}>,</span>
      doSomethingElse
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),t(u(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"@show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("doSomething"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("doSomethingElse"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"doSomething"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// this method has been called (in this case)"),a(`
      `),n("span",{class:"token comment"},"// because @show event was triggered by QBogus component"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"doSomethingElse"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// this method has been called (in this case)"),a(`
      `),n("span",{class:"token comment"},"// because @hide event was triggered by QBogus component"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      doSomething`),n("span",{class:"token punctuation"},","),a(`
      doSomethingElse
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]}),_:1},g,e));else return[n("p",null,[a("Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue 3 works. ("),n(m,{to:"https://github.com/lukehoban/es6features"},{default:p(()=>[a("Quick overview of ES6")]),_:1}),a(" and "),n(m,{to:"http://es6-features.org/#Constants"},{default:p(()=>[a("ES6 complete list of features")]),_:1}),a(" – don’t worry, you don’t need to understand ALL of ES6). For devs experienced with reactive UIs, the "),n(m,{to:"https://vuejs.org/"},{default:p(()=>[a("Vue 3 documentation")]),_:1}),a(" itself takes a half-day at most to read top-to-bottom and will help you understand how Quasar components can be used and configured.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("If you are a total beginner to Vue and reactive UI libraries and want a good tutorial, we recommend you take a look at "),n(m,{to:"/video-tutorials"},{default:p(()=>[a("Vue and Quasar video tutorials")]),_:1}),a(".")])]),n("p",null,[a("After reading the Vue documentation, let’s clear up some of the most frequently asked questions, like "),n("em",null,"“How can I use Quasar components, Vue properties, methods and events”"),a(".")]),n("h2",{id:"vue-single-file-components-sfc-",class:"doc-heading doc-h2",onClick:k=>c($)("vue-single-file-components-sfc-")},"Vue Single File Components (SFC)",8,["onClick"]),n("p",null,[a("You’ll be building your Quasar app using "),n("code",{class:"doc-token"},"*.vue"),a(" files which contain multiple sections: "),n("code",{class:"doc-token"},"template"),a(" (HTML), "),n("code",{class:"doc-token"},"script"),a(" (Javascript) and "),n("code",{class:"doc-token"},"style"),a(" (CSS/SASS/SCSS/Stylus/Less) all in the same file.")]),n("p",null,[a("Currently, it is recommended to use Composition API with "),n("code",{class:"doc-token"},"<script setup>"),a(". Check out "),n(m,{to:"https://vuejs.org/api/sfc-script-setup.html"},{default:p(()=>[a("Vue.js documentation")]),_:1}),a(" for more information.")]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- you define your Vue template here -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// This is where your Javascript goes"),a(`
`),n("span",{class:"token comment"},"// to define your Vue component, which"),a(`
`),n("span",{class:"token comment"},"// can be a Layout, a Page or your own"),a(`
`),n("span",{class:"token comment"},"// component used throughout the app."),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token comment"},"/* This is where your CSS goes */"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("p",null,[a("But you can still use Composition API without "),n("code",{class:"doc-token"},"<script setup>"),a(" or Options API if you wish. The only difference is within the "),n("code",{class:"doc-token"},"<script>"),a(" tag.")]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- you define your Vue template here -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// This is where your Javascript goes"),a(`
`),n("span",{class:"token comment"},"// to define your Vue component, which"),a(`
`),n("span",{class:"token comment"},"// can be a Layout, a Page or your own"),a(`
`),n("span",{class:"token comment"},"// component used throughout the app."),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"//"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token comment"},"/* This is where your CSS goes */"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h3",{id:"css-preprocessors",class:"doc-heading doc-h3",onClick:k=>c($)("css-preprocessors")},"CSS preprocessors",8,["onClick"]),n("p",null,[a("For the "),n("code",{class:"doc-token"},"<style>"),a(" tag, you can also use whatever CSS preprocessor you want. "),n(m,{to:"https://sass-lang.com"},{default:p(()=>[a("Sass/SCSS")]),_:1}),a(" (recommended) is available out of the box.")]),n("p",null,"You can specify you want your chosen preprocessor to handle the CSS code that you’re writing:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},'<!-- notice lang="sass" -->'),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sass"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
.some-div
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(` 15px
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token comment"},'<!-- notice lang="scss" -->'),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".some-div"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(" 15px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h2",{id:"using-quasar-directives",class:"doc-heading doc-h2",onClick:k=>c($)("using-quasar-directives")},"Using Quasar Directives",8,["onClick"]),n("p",null,[a("Quasar comes with a few custom "),n(m,{to:"https://vuejs.org/guide/reusability/custom-directives.html"},{default:p(()=>[a("Vue Directives")]),_:1}),a(". These directives can be applied on almost any DOM element or Component.")]),n("p",null,"Example of a Quasar directive:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token punctuation"},">")]),a("Click Me"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("blockquote",{class:"doc-note"},[n("p",null,[a("Notice how Ripple is used in the HTML template as "),n("code",{class:"doc-token"},"v-ripple"),a(". Vue directives are prefixed with "),n("code",{class:"doc-token"},"v-"),a(".")])]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-touch-pan"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-touch-swipe"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handler"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token punctuation"},">")]),a("Click me. I got ripples."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h2",{id:"using-quasar-components",class:"doc-heading doc-h2",onClick:k=>c($)("using-quasar-components")},"Using Quasar Components",8,["onClick"]),n("p",null,[a("Quasar components have names beginning with “Q” like “QBtn” or “QElementResizeObserver”. In order to use them, you need to add a reference to them in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file.")]),n("p",null,"Let’s take the following example with a QBtn and QIcon and then we’ll see how to embed these components in our app:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("doSomething"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Do something"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("alarm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("blockquote",{class:"doc-note"},[n("p",null,[a("Notice how QBtn is used in the Vue HTML template as "),n("code",{class:"doc-token"},"<q-btn>"),a(". If we’d import QElementResizeObserver, then we’d use it in template as "),n("code",{class:"doc-token"},"<q-element-resize-observer>"),a(".")])]),n("h2",{id:"using-quasar-plugins",class:"doc-heading doc-h2",onClick:k=>c($)("using-quasar-plugins")},"Using Quasar Plugins",8,["onClick"]),n("p",null,"Quasar Plugins are features that you can use both in your Vue files as well as outside of them, like Notify, BottomSheet, AppVisibility and so on."),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[n("strong",null,"Before using them in your app"),a(", you need to add a reference to them in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file (as shown below).")])]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token string"},"'Notify'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'BottomSheet'"),a(),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("p",null,"Let’s take Notify as an example and see how we can then use it. In a Vue file, you’d write something like this (Composition API):"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$q.notify('My message')"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Show a notification"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showNotification"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Show another notification"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"showNotification"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some other message'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showNotification
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("blockquote",{class:"doc-note"},[n("p",null,[a("Notice that in the template area we’re using "),n("code",{class:"doc-token"},"$q.<plugin-name>"),a(".")])]),n("p",null,"An equivalent script section in Options API:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showNotification"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some other message'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("p",null,"Now let’s see an example of Notify being used outside of a Vue file:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Notify "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token comment"},"// ..."),a(`
Notify`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'My message'"),n("span",{class:"token punctuation"},")")])]),n(o)]),_:1}),n("h3",{id:"self-closing-tags",class:"doc-heading doc-h3",onClick:k=>c($)("self-closing-tags")},"Self-Closing Tags",8,["onClick"]),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Do NOT use self-closing tag form when you are using "),n("strong",null,"Quasar UMD version"),a(". Your browser is interpreting the HTML before Vue parses your DOM elements, so your HTML syntax must be correct. Unknown tags (like Vue components) cannot be self-closing because your browser will interpret those as if you are opening a tag but never closing it.")])]),n("p",null,"Some Quasar components do not need you to include HTML content inside of them. In this case, you can use them as self-closing tags. One example with QIcon below:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cloud"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")])])]),n(o)]),_:1}),n("p",null,"Self-closing means the above template is the equivalent to:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cloud"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-icon")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("p",null,"Both forms are valid and can be used, except for UMD where you must explicitly close the tags. It works the same with regular DOM elements:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("col"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token comment"},"<!-- equivalent to: -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("col"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("p",null,"Some eslint-plugin-vue linting rules actually enforce using the self-closing syntax."),n("h2",{id:"handling-vue-properties",class:"doc-heading doc-h2",onClick:k=>c($)("handling-vue-properties")},"Handling Vue Properties",8,["onClick"]),n("p",null,"Let’s take some examples with a bogus Quasar component (we will call it QBogus) that supports the properties below. We will discuss each of the types of Vue properties in the below sections."),n(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:p(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Vue Property"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"infinite")]),n("td",null,"Boolean"),n("td",null,"Infinite slides scrolling")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"size")]),n("td",null,"String"),n("td",null,"Thickness of loading bar.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"speed")]),n("td",null,"Number"),n("td",null,"How fast should loading bar update its value (in milliseconds).")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"columns")]),n("td",null,"Object"),n("td",null,"Object defining columns (see “Columns Definition” below).")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"offset")]),n("td",null,"Array"),n("td",null,"Array with two numbers. Offset on horizontal and vertical (in pixels).")])])]),_:1}),n("h3",{id:"boolean-property",class:"doc-heading doc-h3",onClick:k=>c($)("boolean-property")},"Boolean Property",8,["onClick"]),n("p",null,"A boolean property means it only accepts a strictly Boolean value. The values will not be cast to Boolean, so you must ensure you are using a true Boolean."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("In Quasar, all Boolean properties have "),n("code",{class:"doc-token"},"false"),a(" as the default value. As a result, you don’t have to explictly assign them the "),n("code",{class:"doc-token"},"false"),a(" value.")])]),n("p",null,"If you are trying to control that property and change it dynamically at runtime, then bind it to a variable in your scope:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":infinite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myInfiniteVariable"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myInfiniteVariable "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      myInfiniteVariable
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("p",null,[a("If, on the other hand, you know this Boolean value is not going to change, you can use the shorthand version of the variable like a component attribute and just specify it. In other words, if you don’t bind the variable to a variable in the component’s scope as it will always be "),n("code",{class:"doc-token"},"true"),a(":")]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"infinite"),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},`<!--
    the following is perfectly valid,
    but it's a longer version
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":infinite"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h3",{id:"string-property",class:"doc-heading doc-h3",onClick:k=>c($)("string-property")},"String Property",8,["onClick"]),n("p",null,"As you can imagine, Strings are required as a value for this type of property."),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    direct assignment, no need for
    a variable in our scope
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("24px"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},`<!--
    we can also bind it to a variable
    in our scope so we can dynamically
    change it
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mySize"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// notice String as value"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" mySize "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'16px'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mySize
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h3",{id:"number-property",class:"doc-heading doc-h3",onClick:k=>c($)("number-property")},"Number Property",8,["onClick"]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    Case 1. Direct assignment.
    Notice the colon (":") before property name.
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},"<!-- Case 2. Assignment through a scope variable -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myNumber"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// notice Number as value"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myNumber "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      myNumber
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h3",{id:"object-property",class:"doc-heading doc-h3",onClick:k=>c($)("object-property")},"Object Property",8,["onClick"]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Case 1. Direct assignment. -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{key: 'value', anotherKey: 'another value'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token comment"},"<!-- or a more elegant way for Case 1: -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
      key: 'value',
      anotherKey: 'another value'
    }`),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},"<!-- Case 2. Assignment through a scope variable -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myColumns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"anotherKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'another value'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" myColumns "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h3",{id:"array-property",class:"doc-heading doc-h3",onClick:k=>c($)("array-property")},"Array Property",8,["onClick"]),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- Case 1. Direct assignment. -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[10, 20]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token comment"},"<!-- Case 2. Assignment through a scope variable -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},":offset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myOffset"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"myOffset"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h2",{id:"handling-vue-methods",class:"doc-heading doc-h2",onClick:k=>c($)("handling-vue-methods")},"Handling Vue Methods",8,["onClick"]),n("p",null,"You will notice throughout the documentation that some Quasar components have methods that can be called. Example:"),n(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:p(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Vue Method"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"next()")]),n("td",null,"Goes to next slide.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"previous(doneFn)")]),n("td",null,"Goes to previous slide.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"toggleFullscreen()")]),n("td",null,"Toggles fullscreen mode.")])])]),_:1}),n("p",null,"In order for you to access these methods, you will need to set a Vue reference on the component first. Here’s an example with Composition API:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    Notice ref="myRef". We will use the name
    assigned to "ref" in the script part below
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" myRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// after the component has mounted into DOM:"),a(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},'// we call "next()" method of our component'),a(`
      myRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// calling before mount point might result in errors"),a(`
    `),n("span",{class:"token comment"},"// as Vue hasn't yet prepared the Vue reference"),a(`

    `),n("span",{class:"token comment"},"// we expose myRef to the scope so Vue"),a(`
    `),n("span",{class:"token comment"},"// can use it in the template as well"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" myRef "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("p",null,"And here is the same example, but with Options API:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},`<!--
    Notice ref="myRef". We will use the name
    assigned to "ref" in the script part below
  -->`),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("myRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// we can now access `this.$refs.myRef`"),a(`
  `),n("span",{class:"token comment"},"// an example on the mounted() Vue component hook"),a(`
  `),n("span",{class:"token function"},"mounted"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},'// calling "next()" method:'),a(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("$refs"),n("span",{class:"token punctuation"},"."),a("myRef"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token comment"},"// calling before mount point might result in errors"),a(`
  `),n("span",{class:"token comment"},"// as Vue hasn't yet prepared the Vue reference"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1}),n("h2",{id:"handling-vue-events",class:"doc-heading doc-h2",onClick:k=>c($)("handling-vue-events")},"Handling Vue Events",8,["onClick"]),n("p",null,"You will notice throughout the documentation that some Quasar components have a section called “Vue Events”."),n("p",null,"Example of “Vue Events”:"),n(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:p(()=>[n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Event Name"),n("th",{class:"text-left"},"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"@show")]),n("td",null,"Triggered right after the Modal is shown.")]),n("tr",null,[n("td",null,[n("code",{class:"doc-token"},"@hide")]),n("td",null,"Triggered right after the Modal is hidden.")])])]),_:1}),n("p",null,"In order for you to catch these events, when they are triggered, you will need to add listeners for them on the component itself in the HTML template. Here’s an example:"),n(c(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-bogus")]),a(),n("span",{class:"token attr-name"},"@show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("doSomething"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("doSomethingElse"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"doSomething"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// this method has been called (in this case)"),a(`
      `),n("span",{class:"token comment"},"// because @show event was triggered by QBogus component"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"doSomethingElse"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// this method has been called (in this case)"),a(`
      `),n("span",{class:"token comment"},"// because @hide event was triggered by QBogus component"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      doSomething`),n("span",{class:"token punctuation"},","),a(`
      doSomethingElse
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(o)]),_:1})]}),_:1},q))}}},d=v.setup;v.setup=(w,y)=>{const h=V();return(h.modules||(h.modules=new Set)).add("src/pages/start/how-to-use-vue.md"),d?d(w,y):void 0};const W=Q(v,[["__file","how-to-use-vue.md"]]);export{W as default};
