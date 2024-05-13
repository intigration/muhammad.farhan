import{mergeProps as F,withCtx as c,unref as p,createVNode as n,createTextVNode as a,useSSRContext as x}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as m}from"./page-utils-C-QWsEHe.js";import{D as q}from"./DocPage-DKr-0pQn.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as T}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"types-of-bex",__ssrInlineRender:!0,setup(f){const h=[{id:"new-tab",title:"2. New Tab"},{id:"dev-tools-options-and-popup",title:"3. Dev Tools, Options and Popup"},{id:"web-page",title:"4. Web Page"}];return($,b,d,v)=>{b(u(q,F({title:"Types of BEX",desc:"(@quasar/app-webpack) How to configure each type of Browser Extensions in Quasar.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-browser-extensions/types-of-bex",toc:h},v),{default:c((Q,l,g,t)=>{if(l)l(`<p${t}>As already discussed, Quasar can handle the various places where a browser extension can live, namely New Tab, Web Page, Dev Tools Options or Popup. You don’t need a separate Quasar App for each of these. You can do some handy work with the router.</p><h2 id="new-tab" class="doc-heading doc-h2"${t}>New Tab</h2><p${t}>This is the default way in which a BEX will run. It is accessed by clicking on the BEX icon in your browser. The Quasar App will run in that new (blank) tab.</p><h2 id="dev-tools-options-and-popup" class="doc-heading doc-h2"${t}>Dev Tools, Options and Popup</h2><p${t}>These all follow the same pattern, set up a route and configure the <code class="doc-token"${t}>manifest.json</code> file to look at that route when it’s trying to show either one of the types. For instance:</p>`),l(u(p(r),{title:"/src/router/routes.js"},{default:c((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>const</span> routes <span class="token operator"${s}>=</span> <span class="token punctuation"${s}>[</span>
  <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/options&#39;</span><span class="token punctuation"${s}>,</span> <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;pages/OptionsPage.vue&#39;</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/popup&#39;</span><span class="token punctuation"${s}>,</span> <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;pages/PopupPage.vue&#39;</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/devtools&#39;</span><span class="token punctuation"${s}>,</span> <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;pages/DevToolsPage.vue&#39;</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>]</span></code></pre>`),o(u(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/options'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/OptionsPage.vue'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/popup'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/PopupPage.vue'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/devtools'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/DevToolsPage.vue'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(e)]}),_:1},g,t)),l(`<p${t}>You could configure your <code class="doc-token"${t}>manifest.json</code> file with the following so the options page is loaded from that route:</p>`),l(u(p(r),null,{default:c((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;name&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;My extension&quot;</span><span class="token punctuation"${s}>,</span>
  ...
  <span class="token property"${s}>&quot;options_page&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;www/index.html#/options&quot;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// Options Page</span>
  ...
  <span class="token property"${s}>&quot;browser_action&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token property"${s}>&quot;default_popup&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;www/index.html#/popup&quot;</span> <span class="token comment"${s}>// Popup Page</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  ...
  <span class="token property"${s}>&quot;devtools_page&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;www/index.html#/devtools&quot;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// Dev Tools</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"My extension"'),n("span",{class:"token punctuation"},","),a(`
  ...
  `),n("span",{class:"token property"},'"options_page"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"www/index.html#/options"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Options Page"),a(`
  ...
  `),n("span",{class:"token property"},'"browser_action"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"default_popup"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"www/index.html#/popup"'),a(),n("span",{class:"token comment"},"// Popup Page"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  ...
  `),n("span",{class:"token property"},'"devtools_page"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"www/index.html#/devtools"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Dev Tools"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,t)),l(`<h2 id="web-page" class="doc-heading doc-h2"${t}>Web Page</h2><p${t}>This is where the real power comes in. With a little ingenuity we can inject our Quasar application into a web page and use it as an overlay making it seem like our Quasar App is part of the page experience.</p><p${t}>Here’s a brief rundown of how you could achieve this:</p><ul${t}><li${t}><code class="doc-token"${t}>src-bex/js/content-hooks.js</code></li></ul><p${t}>The idea here is to create an IFrame and add our Quasar app into it, then inject that into the page.</p><p${t}>Given our Quasar App might need to take the full height of the window (and thus stop any interaction with the underlying page) we have an event to handle setting the height of the IFrame. By default the IFrame height is just high enough to allow for the Quasar toolbar to show (and in turn allowing interaction with the rest of the page).</p><p${t}>We can call this event from our Quasar App any time we know we’re opening the drawer and thus changing the height of the IFrame to allow the whole draw to be visible.</p>`),l(u(p(r),null,{default:c((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> bexContent <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar/wrappers&#39;</span>

<span class="token keyword"${s}>const</span>
  iFrame <span class="token operator"${s}>=</span> document<span class="token punctuation"${s}>.</span><span class="token function"${s}>createElement</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;iframe&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  defaultFrameHeight <span class="token operator"${s}>=</span> <span class="token string"${s}>&#39;62px&#39;</span>

<span class="token comment"${s}>/**
 * Set the height of our iFrame housing our BEX
 * @param height
 */</span>
<span class="token keyword"${s}>const</span> <span class="token function-variable function"${s}>setIFrameHeight</span> <span class="token operator"${s}>=</span> <span class="token parameter"${s}>height</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  iFrame<span class="token punctuation"${s}>.</span>height <span class="token operator"${s}>=</span> height
<span class="token punctuation"${s}>}</span>

<span class="token comment"${s}>/**
 * Reset the iFrame to its default height e.g The height of the top bar.
 */</span>
<span class="token keyword"${s}>const</span> <span class="token function-variable function"${s}>resetIFrameHeight</span> <span class="token operator"${s}>=</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setIFrameHeight</span><span class="token punctuation"${s}>(</span>defaultFrameHeight<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>


<span class="token comment"${s}>/**
 * The code below will get everything going. Initialize the iFrame with defaults and add it to the page.
 * @type {string}
 */</span>
iFrame<span class="token punctuation"${s}>.</span>id <span class="token operator"${s}>=</span> <span class="token string"${s}>&#39;bex-app-iframe&#39;</span>
iFrame<span class="token punctuation"${s}>.</span>width <span class="token operator"${s}>=</span> <span class="token string"${s}>&#39;100%&#39;</span>
<span class="token function"${s}>resetIFrameHeight</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// Assign some styling so it looks seamless</span>
Object<span class="token punctuation"${s}>.</span><span class="token function"${s}>assign</span><span class="token punctuation"${s}>(</span>iFrame<span class="token punctuation"${s}>.</span>style<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>position</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;fixed&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>top</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;0&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>right</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;0&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>bottom</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;0&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>left</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;0&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>border</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;0&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>zIndex</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;9999999&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// Make sure it&#39;s on top</span>
  <span class="token literal-property property"${s}>overflow</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;visible&#39;</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

<span class="token punctuation"${s}>;</span><span class="token punctuation"${s}>(</span><span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// When the page loads, insert our browser extension app.</span>
  iFrame<span class="token punctuation"${s}>.</span>src <span class="token operator"${s}>=</span> chrome<span class="token punctuation"${s}>.</span>runtime<span class="token punctuation"${s}>.</span><span class="token function"${s}>getURL</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;www/index.html&#39;</span><span class="token punctuation"${s}>)</span>
  document<span class="token punctuation"${s}>.</span>body<span class="token punctuation"${s}>.</span><span class="token function"${s}>prepend</span><span class="token punctuation"${s}>(</span>iFrame<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>bexContent</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>bridge</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * When the drawer is toggled set the iFrame height to take the whole page.
   * Reset when the drawer is closed.
   */</span>
  bridge<span class="token punctuation"${s}>.</span><span class="token function"${s}>on</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;wb.drawer.toggle&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> data<span class="token punctuation"${s}>,</span> respond <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>data<span class="token punctuation"${s}>.</span>open<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token function"${s}>setIFrameHeight</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;100%&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span>
      <span class="token function"${s}>resetIFrameHeight</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
    <span class="token function"${s}>respond</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(u(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" bexContent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`

`),n("span",{class:"token keyword"},"const"),a(`
  iFrame `),n("span",{class:"token operator"},"="),a(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'iframe'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  defaultFrameHeight `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'62px'"),a(`

`),n("span",{class:"token comment"},`/**
 * Set the height of our iFrame housing our BEX
 * @param height
 */`),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"setIFrameHeight"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"height"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  iFrame`),n("span",{class:"token punctuation"},"."),a("height "),n("span",{class:"token operator"},"="),a(` height
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},`/**
 * Reset the iFrame to its default height e.g The height of the top bar.
 */`),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetIFrameHeight"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setIFrameHeight"),n("span",{class:"token punctuation"},"("),a("defaultFrameHeight"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`


`),n("span",{class:"token comment"},`/**
 * The code below will get everything going. Initialize the iFrame with defaults and add it to the page.
 * @type {string}
 */`),a(`
iFrame`),n("span",{class:"token punctuation"},"."),a("id "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'bex-app-iframe'"),a(`
iFrame`),n("span",{class:"token punctuation"},"."),a("width "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'100%'"),a(`
`),n("span",{class:"token function"},"resetIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// Assign some styling so it looks seamless"),a(`
Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),a("iFrame"),n("span",{class:"token punctuation"},"."),a("style"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fixed'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"top"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"bottom"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"border"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9999999'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Make sure it's on top"),a(`
  `),n("span",{class:"token literal-property property"},"overflow"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'visible'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// When the page loads, insert our browser extension app."),a(`
  iFrame`),n("span",{class:"token punctuation"},"."),a("src "),n("span",{class:"token operator"},"="),a(" chrome"),n("span",{class:"token punctuation"},"."),a("runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getURL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'www/index.html'"),n("span",{class:"token punctuation"},")"),a(`
  document`),n("span",{class:"token punctuation"},"."),a("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),a("iFrame"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"bexContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"bridge"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * When the drawer is toggled set the iFrame height to take the whole page.
   * Reset when the drawer is closed.
   */`),a(`
  bridge`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'wb.drawer.toggle'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" data"),n("span",{class:"token punctuation"},","),a(" respond "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("open"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"resetIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]}),_:1},g,t)),l(`<ul${t}><li${t}><code class="doc-token"${t}>src-bex/css/content-css.css</code></li></ul><p${t}>Add a margin to the top of our document so our Quasar toolbar doesn’t overlap the actual page content.</p>`),l(u(p(r),null,{default:c((k,o,i,s)=>{if(o)o(`<pre class="doc-code language-css"${s}><code${s}><span class="token selector"${s}>.target-some-header-class</span> <span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>margin-top</span><span class="token punctuation"${s}>:</span> 62px<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(e,null,null,i,s));else return[n("pre",{class:"doc-code language-css"},[n("code",null,[n("span",{class:"token selector"},".target-some-header-class"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 62px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,t)),l(`<ul${t}><li${t}><code class="doc-token"${t}>Quasar App (/src)</code></li></ul><p${t}>Then in our Quasar app (/src), we have a function that toggles the drawer and sends an event to the content script telling it to resize the IFrame thus allowing our whole app to be visible:</p>`),l(u(p(r),null,{default:c((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-drawer</span> <span class="token attr-name"${s}>:model-value</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>drawerIsOpen<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}><span class="token namespace"${s}>@update:</span>model-value</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>drawerToggled<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
  Some Content
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-drawer</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),o(u(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-drawer")]),a(),n("span",{class:"token attr-name"},":model-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("drawerIsOpen"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"@update:"),a("model-value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("drawerToggled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  Some Content
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-drawer")]),n("span",{class:"token punctuation"},">")])])]),n(e)]}),_:1},g,t)),l(u(p(r),null,{default:c((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> useQuasar <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> $q <span class="token operator"${s}>=</span> <span class="token function"${s}>useQuasar</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
  <span class="token keyword"${s}>const</span> drawerIsOpen <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span>

  <span class="token keyword"${s}>async</span> <span class="token keyword"${s}>function</span> <span class="token function"${s}>drawerToggled</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>await</span> $q<span class="token punctuation"${s}>.</span>bex<span class="token punctuation"${s}>.</span><span class="token function"${s}>send</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;wb.drawer.toggle&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>open</span><span class="token operator"${s}>:</span> drawerIsOpen<span class="token punctuation"${s}>.</span>value <span class="token comment"${s}>// So it knows to make it bigger / smaller</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// Only set this once the promise has resolved so we can see the entire slide animation.</span>
    drawerIsOpen<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> <span class="token operator"${s}>!</span>drawerIsOpen<span class="token punctuation"${s}>.</span>value
  <span class="token punctuation"${s}>}</span>

  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span> drawerToggled <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(e,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" drawerIsOpen "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"drawerToggled"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(" $q"),n("span",{class:"token punctuation"},"."),a("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'wb.drawer.toggle'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(" drawerIsOpen"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token comment"},"// So it knows to make it bigger / smaller"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// Only set this once the promise has resolved so we can see the entire slide animation."),a(`
    drawerIsOpen`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("drawerIsOpen"),n("span",{class:"token punctuation"},"."),a(`value
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" drawerToggled "),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,t)),l(`<p${t}>Now you have a Quasar App running in a web page. You can now trigger other events from the Quasar App that the content script can listen to and interact with the underlying page.</p>`);else return[n("p",null,"As already discussed, Quasar can handle the various places where a browser extension can live, namely New Tab, Web Page, Dev Tools Options or Popup. You don’t need a separate Quasar App for each of these. You can do some handy work with the router."),n("h2",{id:"new-tab",class:"doc-heading doc-h2",onClick:k=>p(m)("new-tab")},"New Tab",8,["onClick"]),n("p",null,"This is the default way in which a BEX will run. It is accessed by clicking on the BEX icon in your browser. The Quasar App will run in that new (blank) tab."),n("h2",{id:"dev-tools-options-and-popup",class:"doc-heading doc-h2",onClick:k=>p(m)("dev-tools-options-and-popup")},"Dev Tools, Options and Popup",8,["onClick"]),n("p",null,[a("These all follow the same pattern, set up a route and configure the "),n("code",{class:"doc-token"},"manifest.json"),a(" file to look at that route when it’s trying to show either one of the types. For instance:")]),n(p(r),{title:"/src/router/routes.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/options'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/OptionsPage.vue'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/popup'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/PopupPage.vue'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/devtools'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/DevToolsPage.vue'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(e)]),_:1}),n("p",null,[a("You could configure your "),n("code",{class:"doc-token"},"manifest.json"),a(" file with the following so the options page is loaded from that route:")]),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"My extension"'),n("span",{class:"token punctuation"},","),a(`
  ...
  `),n("span",{class:"token property"},'"options_page"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"www/index.html#/options"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Options Page"),a(`
  ...
  `),n("span",{class:"token property"},'"browser_action"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"default_popup"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"www/index.html#/popup"'),a(),n("span",{class:"token comment"},"// Popup Page"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  ...
  `),n("span",{class:"token property"},'"devtools_page"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"www/index.html#/devtools"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Dev Tools"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("h2",{id:"web-page",class:"doc-heading doc-h2",onClick:k=>p(m)("web-page")},"Web Page",8,["onClick"]),n("p",null,"This is where the real power comes in. With a little ingenuity we can inject our Quasar application into a web page and use it as an overlay making it seem like our Quasar App is part of the page experience."),n("p",null,"Here’s a brief rundown of how you could achieve this:"),n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"src-bex/js/content-hooks.js")])]),n("p",null,"The idea here is to create an IFrame and add our Quasar app into it, then inject that into the page."),n("p",null,"Given our Quasar App might need to take the full height of the window (and thus stop any interaction with the underlying page) we have an event to handle setting the height of the IFrame. By default the IFrame height is just high enough to allow for the Quasar toolbar to show (and in turn allowing interaction with the rest of the page)."),n("p",null,"We can call this event from our Quasar App any time we know we’re opening the drawer and thus changing the height of the IFrame to allow the whole draw to be visible."),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" bexContent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar/wrappers'"),a(`

`),n("span",{class:"token keyword"},"const"),a(`
  iFrame `),n("span",{class:"token operator"},"="),a(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'iframe'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  defaultFrameHeight `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'62px'"),a(`

`),n("span",{class:"token comment"},`/**
 * Set the height of our iFrame housing our BEX
 * @param height
 */`),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"setIFrameHeight"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"height"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  iFrame`),n("span",{class:"token punctuation"},"."),a("height "),n("span",{class:"token operator"},"="),a(` height
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},`/**
 * Reset the iFrame to its default height e.g The height of the top bar.
 */`),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetIFrameHeight"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setIFrameHeight"),n("span",{class:"token punctuation"},"("),a("defaultFrameHeight"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`


`),n("span",{class:"token comment"},`/**
 * The code below will get everything going. Initialize the iFrame with defaults and add it to the page.
 * @type {string}
 */`),a(`
iFrame`),n("span",{class:"token punctuation"},"."),a("id "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'bex-app-iframe'"),a(`
iFrame`),n("span",{class:"token punctuation"},"."),a("width "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'100%'"),a(`
`),n("span",{class:"token function"},"resetIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// Assign some styling so it looks seamless"),a(`
Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),a("iFrame"),n("span",{class:"token punctuation"},"."),a("style"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fixed'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"top"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"bottom"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"border"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'9999999'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// Make sure it's on top"),a(`
  `),n("span",{class:"token literal-property property"},"overflow"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'visible'"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// When the page loads, insert our browser extension app."),a(`
  iFrame`),n("span",{class:"token punctuation"},"."),a("src "),n("span",{class:"token operator"},"="),a(" chrome"),n("span",{class:"token punctuation"},"."),a("runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getURL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'www/index.html'"),n("span",{class:"token punctuation"},")"),a(`
  document`),n("span",{class:"token punctuation"},"."),a("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),a("iFrame"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"bexContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"bridge"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * When the drawer is toggled set the iFrame height to take the whole page.
   * Reset when the drawer is closed.
   */`),a(`
  bridge`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'wb.drawer.toggle'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" data"),n("span",{class:"token punctuation"},","),a(" respond "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("open"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"resetIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(e)]),_:1}),n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"src-bex/css/content-css.css")])]),n("p",null,"Add a margin to the top of our document so our Quasar toolbar doesn’t overlap the actual page content."),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code language-css"},[n("code",null,[n("span",{class:"token selector"},".target-some-header-class"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 62px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"Quasar App (/src)")])]),n("p",null,"Then in our Quasar app (/src), we have a function that toggles the drawer and sends an event to the content script telling it to resize the IFrame thus allowing our whole app to be visible:"),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-drawer")]),a(),n("span",{class:"token attr-name"},":model-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("drawerIsOpen"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"@update:"),a("model-value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("drawerToggled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  Some Content
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-drawer")]),n("span",{class:"token punctuation"},">")])])]),n(e)]),_:1}),n(p(r),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" drawerIsOpen "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"drawerToggled"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"await"),a(" $q"),n("span",{class:"token punctuation"},"."),a("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'wb.drawer.toggle'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(" drawerIsOpen"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token comment"},"// So it knows to make it bigger / smaller"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// Only set this once the promise has resolved so we can see the entire slide animation."),a(`
    drawerIsOpen`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("drawerIsOpen"),n("span",{class:"token punctuation"},"."),a(`value
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" drawerToggled "),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,"Now you have a Quasar App running in a web page. You can now trigger other events from the Quasar App that the content script can listen to and interact with the underlying page.")]}),_:1},d))}}},y=w.setup;w.setup=(f,h)=>{const $=x();return($.modules||($.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-browser-extensions/types-of-bex.md"),y?y(f,h):void 0};const X=T(w,[["__file","types-of-bex.md"]]);export{X as default};
