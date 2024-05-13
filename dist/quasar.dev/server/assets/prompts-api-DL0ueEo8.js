import{resolveComponent as q,mergeProps as P,withCtx as c,unref as o,createVNode as n,createTextVNode as a,useSSRContext as N}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as S,a as $}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"prompts-api",__ssrInlineRender:!0,setup(v){const f=[{id:"questions-format",title:"2. Questions format"},{id:"string",title:"2.1. String",sub:!0},{id:"confirm",title:"2.2. Confirm",sub:!0},{id:"list-of-choices",title:"2.3. List of choices",sub:!0},{id:"the-api-param",title:"3. The API param"},{id:"api-engine",title:"3.1. api.engine",sub:!0},{id:"api-hasvite",title:"3.2. api.hasVite",sub:!0},{id:"api-haswebpack",title:"3.3. api.hasWebpack",sub:!0},{id:"api-extid",title:"3.4. api.extId",sub:!0},{id:"api-resolve",title:"3.5. api.resolve",sub:!0},{id:"api-appdir",title:"3.6. api.appDir",sub:!0},{id:"api-hastypescript",title:"3.7. api.hasTypescript",sub:!0},{id:"api-haslint",title:"3.8. api.hasLint",sub:!0},{id:"api-getstorepackagename",title:"3.9. api.getStorePackageName",sub:!0},{id:"api-getnodepackagername",title:"3.10. api.getNodePackagerName",sub:!0},{id:"api-compatiblewith",title:"3.11. api.compatibleWith",sub:!0},{id:"api-haspackage",title:"3.12. api.hasPackage",sub:!0},{id:"api-hasextension",title:"3.13. api.hasExtension",sub:!0},{id:"api-getpackageversion",title:"3.14. api.getPackageVersion",sub:!0}];return(d,b,x,C)=>{const g=q("q-badge");b(r(S,P({title:"App Extension Prompts API",desc:"Syntax of the questions that the user is going to be asked in order to configure the Quasar App Extension.",heading:"","edit-link":"app-extensions/development-guide/prompts-api",toc:f},C),{default:c((E,l,m,t)=>{if(l)l(`<p${t}>This page refers to <code class="doc-token"${t}>src/prompts.js</code> file which handles the prompts when installing the App Extension. Not all App Extensions will need prompts – this is an optional step.</p><p${t}>The user’s answers are stored into <code class="doc-token"${t}>/quasar.extensions.json</code> (root of project folder), which should not be tampered with unless you really know what you are doing.</p><p${t}>Example of basic structure of the file:</p>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// For @quasar/app-vite 1.6+ and @quasar/app-webpack v3.11+</span>
<span class="token comment"${s}>//   1. It can be async</span>
<span class="token comment"${s}>//   2. It receives the &quot;api&quot; param</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>api</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>[</span>
    <span class="token comment"${s}>// questions</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// For @quasar/app-vite 1.6+ and @quasar/app-webpack v3.11+"),a(`
`),n("span",{class:"token comment"},"//   1. It can be async"),a(`
`),n("span",{class:"token comment"},'//   2. It receives the "api" param'),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// questions"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<p${t}>You will have access to <code class="doc-token"${t}>api.prompts</code> (which holds your App Extension’s answers) in `),l(r($,{to:"/app-extensions/development-guide/install-api"},{default:c((i,e,u,s)=>{if(e)e("Install");else return[a("Install")]}),_:1},m,t)),l(", "),l(r($,{to:"/app-extensions/development-guide/index-api"},{default:c((i,e,u,s)=>{if(e)e("Index");else return[a("Index")]}),_:1},m,t)),l(" and "),l(r($,{to:"/app-extensions/development-guide/uninstall-api"},{default:c((i,e,u,s)=>{if(e)e("Uninstall");else return[a("Uninstall")]}),_:1},m,t)),l(`.</p><p${t}>Let’s now focus on the structure of the returned Array which defines the questions. The sections below offer examples for the most used types of questions.</p><h2 id="questions-format" class="doc-heading doc-h2"${t}>Questions format</h2><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>The following is not an exhaustive list of possible types of questions and by no means it describes the full API available. Check out `),l(r($,{to:"https://github.com/SBoudrias/Inquirer.js#readme"},{default:c((i,e,u,s)=>{if(e)e("Inquirer.js");else return[a("Inquirer.js")]}),_:1},m,t)),l(` for that (which is used by Quasar CLI under the hood).</p></div><h3 id="string" class="doc-heading doc-h3"${t}>String</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// &quot;description&quot; will be the variable</span>
  <span class="token comment"${s}>// storing the answer</span>
  <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;description&#39;</span>
  <span class="token literal-property property"${s}>type</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;input&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>required</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// optional</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Project description&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token keyword"${s}>default</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;A Quasar Framework app&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// optional</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "description" will be the variable'),a(`
  `),n("span",{class:"token comment"},"// storing the answer"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'description'"),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// optional"),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Project description'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'A Quasar Framework app'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// optional"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;source_build&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>type</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;input&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>required</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// optional</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span>
    <span class="token string"${s}>&#39;If you want a separate file to be the source image during production, please specify it here: &#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token function-variable function"${s}>validate</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>input</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...do something ...</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  <span class="token function-variable function"${s}>default</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>answers</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>return</span> answers<span class="token punctuation"${s}>.</span>source_dev <span class="token operator"${s}>||</span> defaultImg
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'source_build'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// optional"),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(`
    `),n("span",{class:"token string"},"'If you want a separate file to be the source image during production, please specify it here: '"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function-variable function"},"validate"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"input"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...do something ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function-variable function"},"default"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"answers"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" answers"),n("span",{class:"token punctuation"},"."),a("source_dev "),n("span",{class:"token operator"},"||"),a(` defaultImg
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="confirm" class="doc-heading doc-h3"${t}>Confirm</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// &quot;featureX&quot; will be the variable</span>
  <span class="token comment"${s}>// storing the answer</span>
  <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;featureX&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>type</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;confirm&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Use Feature X?&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token keyword"${s}>default</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span> <span class="token comment"${s}>// optional</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "featureX" will be the variable'),a(`
  `),n("span",{class:"token comment"},"// storing the answer"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'featureX'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'confirm'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Use Feature X?'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// optional"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="list-of-choices" class="doc-heading doc-h3"${t}>List of choices</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// &quot;iconSet&quot; will be the variable</span>
  <span class="token comment"${s}>// storing the answer</span>
  <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;iconSet&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>type</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;list&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>message</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Choose Icon Set&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>choices</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Material Icons (recommended)&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>value</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;material-icons&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// value of the answer variable</span>
      <span class="token literal-property property"${s}>short</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Material Icons&#39;</span> <span class="token comment"${s}>// Short name displayed after user picks this</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Fontawesome v6&#39;</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>value</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;fontawesome-v6&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// value of the answer variable</span>
      <span class="token literal-property property"${s}>short</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Fontawesome v6&#39;</span> <span class="token comment"${s}>// Short name displayed after user picks this</span>
    <span class="token punctuation"${s}>}</span>
    <span class="token comment"${s}>// ... all other choices</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "iconSet" will be the variable'),a(`
  `),n("span",{class:"token comment"},"// storing the answer"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'iconSet'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'list'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Choose Icon Set'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"choices"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Material Icons (recommended)'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'material-icons'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// value of the answer variable"),a(`
      `),n("span",{class:"token literal-property property"},"short"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Material Icons'"),a(),n("span",{class:"token comment"},"// Short name displayed after user picks this"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Fontawesome v6'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fontawesome-v6'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// value of the answer variable"),a(`
      `),n("span",{class:"token literal-property property"},"short"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Fontawesome v6'"),a(),n("span",{class:"token comment"},"// Short name displayed after user picks this"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token comment"},"// ... all other choices"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h2 id="the-api-param" class="doc-heading doc-h2"${t}>The API param `),l(r(g,{label:"@quasar/app-vite 1.6+"},null,m,t)),l(" "),l(r(g,{label:"@quasar/app-webpack 3.11+"},null,m,t)),l(`</h2><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>COMPATIBILITY WARNING</p><p${t}>The <code class="doc-token"${t}>api</code> param has been introduced in @quasar/app-vite v1.6+ and @quasar/app-webpack v3.11+.</p><p${t}>Older versions of these CLIs will not supply any param.</p></div><h3 id="api-engine" class="doc-heading doc-h3"${t}>api.engine</h3><p${t}>Contains the Quasar CLI engine (as String) being used. Examples: <code class="doc-token"${t}>@quasar/app-vite</code> or <code class="doc-token"${t}>@quasar/app-webpack</code>.</p><h3 id="api-hasvite" class="doc-heading doc-h3"${t}>api.hasVite</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-vite</code> or not.</p><h3 id="api-haswebpack" class="doc-heading doc-h3"${t}>api.hasWebpack</h3><p${t}>Boolean - is running on <code class="doc-token"${t}>@quasar/app-webpack</code> or not.</p><h3 id="api-extid" class="doc-heading doc-h3"${t}>api.extId</h3><p${t}>Contains the <code class="doc-token"${t}>ext-id</code> (String) of this App Extension.</p><h3 id="api-resolve" class="doc-heading doc-h3"${t}>api.resolve</h3><p${t}>Resolves paths within the app on which this App Extension is running. Eliminates the need to import <code class="doc-token"${t}>path</code> and resolve the paths yourself.</p>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// resolves to root of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>app</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;src/my-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>src</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;my-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/public of app</span>
<span class="token comment"${s}>// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>public</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;my-image.png&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-pwa of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>pwa</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-ssr of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>ssr</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-cordova of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>cordova</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;config.xml&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-electron of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>electron</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// resolves to root/src-bex of app</span>
api<span class="token punctuation"${s}>.</span>resolve<span class="token punctuation"${s}>.</span><span class="token function"${s}>bex</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;some-file.js&#39;</span><span class="token punctuation"${s}>)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/public of app"),a(`
`),n("span",{class:"token comment"},"// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"public"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-image.png'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-pwa of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pwa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-ssr of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ssr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-cordova of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cordova"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'config.xml'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-bex of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-appdir" class="doc-heading doc-h3"${t}>api.appDir</h3><p${t}>Contains the full path (String) to the root of the app on which this App Extension is running.</p><h3 id="api-hastypescript" class="doc-heading doc-h3"${t}>api.hasTypescript</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;boolean&gt;} host project has Typescript active or not
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasTypescript</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-haslint" class="doc-heading doc-h3"${t}>api.hasLint</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;boolean&gt;} host project has ESLint or not
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasLint</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getstorepackagename" class="doc-heading doc-h3"${t}>api.getStorePackageName</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;string|undefined&gt;} &#39;pinia&#39; | &#39;vuex&#39; | undefined
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getStorePackageName</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getnodepackagername" class="doc-heading doc-h3"${t}>api.getNodePackagerName</h3>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @return {Promise&lt;&#39;npm&#39; | &#39;yarn&#39; | &#39;pnpm&#39; | &#39;bun&#39;&gt;}
 */</span>
<span class="token keyword"${s}>await</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getNodePackagerName</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-compatiblewith" class="doc-heading doc-h3"${t}>api.compatibleWith</h3><p${t}>Ensure the App Extension is compatible with a package installed in the host app through a semver condition.</p><p${t}>If the semver condition is not met, then Quasar CLI errors out and halts execution.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} packageName
 * @param {string} semverCondition
 */</span>
api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span>packageName<span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;1.x&#39;</span><span class="token punctuation"${s}>)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} semverCondition
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),a("packageName"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'1.x'"),n("span",{class:"token punctuation"},")")])]),n(p)]}),_:1},m,t)),l(r(o(k),{title:"A more complex example:"},{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span>hasVite <span class="token operator"${s}>===</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatibleWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-vite&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>
<span class="token keyword"${s}>else</span> <span class="token punctuation"${s}>{</span>
  api<span class="token punctuation"${s}>.</span><span class="token function"${s}>compatbileWith</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;@quasar/app-webpack&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^4.0.0-beta.1&#39;</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatbileWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-haspackage" class="doc-heading doc-h3"${t}>api.hasPackage</h3><p${t}>Determine if some package is installed in the host app through a semver condition.</p><p${t}>Example of semver condition: <code class="doc-token"${t}>&#39;1.x || &gt;=2.5.0 || 5.0.0 - 7.2.3&#39;</code>.</p>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasPackage</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;vuelidate&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// hey, this app has it (any version of it)</span>
<span class="token punctuation"${s}>}</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasPackage</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;quasar&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;^2.0.0&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// hey, this app has Quasar UI v2 installed</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-hasextension" class="doc-heading doc-h3"${t}>api.hasExtension</h3><p${t}>Check if another app extension is npm installed and Quasar CLI has invoked it.</p>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed &amp; invoked
 */</span>
<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>api<span class="token punctuation"${s}>.</span><span class="token function"${s}>hasExtension</span><span class="token punctuation"${s}>(</span>extId<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// hey, we have it</span>
<span class="token punctuation"${s}>}</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),a("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, we have it"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]}),_:1},m,t)),l(`<h3 id="api-getpackageversion" class="doc-heading doc-h3"${t}>api.getPackageVersion</h3><p${t}>Get the version of a host app package.</p>`),l(r(o(k),null,{default:c((i,e,u,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/**
 * @param {string} packageName
 * @return {string|undefined} version of app&#39;s package
 */</span>
console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span> api<span class="token punctuation"${s}>.</span><span class="token function"${s}>getPackageVersion</span><span class="token punctuation"${s}>(</span>packageName<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>)</span>
<span class="token comment"${s}>// output examples:</span>
<span class="token comment"${s}>//   1.1.3</span>
<span class="token comment"${s}>//   undefined (when package not found)</span></code></pre>`),e(r(p,null,null,u,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),a("packageName"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// output examples:"),a(`
`),n("span",{class:"token comment"},"//   1.1.3"),a(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(p)]}),_:1},m,t));else return[n("p",null,[a("This page refers to "),n("code",{class:"doc-token"},"src/prompts.js"),a(" file which handles the prompts when installing the App Extension. Not all App Extensions will need prompts – this is an optional step.")]),n("p",null,[a("The user’s answers are stored into "),n("code",{class:"doc-token"},"/quasar.extensions.json"),a(" (root of project folder), which should not be tampered with unless you really know what you are doing.")]),n("p",null,"Example of basic structure of the file:"),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// For @quasar/app-vite 1.6+ and @quasar/app-webpack v3.11+"),a(`
`),n("span",{class:"token comment"},"//   1. It can be async"),a(`
`),n("span",{class:"token comment"},'//   2. It receives the "api" param'),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"api"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// questions"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("p",null,[a("You will have access to "),n("code",{class:"doc-token"},"api.prompts"),a(" (which holds your App Extension’s answers) in "),n($,{to:"/app-extensions/development-guide/install-api"},{default:c(()=>[a("Install")]),_:1}),a(", "),n($,{to:"/app-extensions/development-guide/index-api"},{default:c(()=>[a("Index")]),_:1}),a(" and "),n($,{to:"/app-extensions/development-guide/uninstall-api"},{default:c(()=>[a("Uninstall")]),_:1}),a(".")]),n("p",null,"Let’s now focus on the structure of the returned Array which defines the questions. The sections below offer examples for the most used types of questions."),n("h2",{id:"questions-format",class:"doc-heading doc-h2",onClick:i=>o(h)("questions-format")},"Questions format",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("The following is not an exhaustive list of possible types of questions and by no means it describes the full API available. Check out "),n($,{to:"https://github.com/SBoudrias/Inquirer.js#readme"},{default:c(()=>[a("Inquirer.js")]),_:1}),a(" for that (which is used by Quasar CLI under the hood).")])]),n("h3",{id:"string",class:"doc-heading doc-h3",onClick:i=>o(h)("string")},"String",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "description" will be the variable'),a(`
  `),n("span",{class:"token comment"},"// storing the answer"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'description'"),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// optional"),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Project description'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'A Quasar Framework app'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// optional"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'source_build'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// optional"),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(`
    `),n("span",{class:"token string"},"'If you want a separate file to be the source image during production, please specify it here: '"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function-variable function"},"validate"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"input"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...do something ..."),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function-variable function"},"default"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"answers"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(" answers"),n("span",{class:"token punctuation"},"."),a("source_dev "),n("span",{class:"token operator"},"||"),a(` defaultImg
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"confirm",class:"doc-heading doc-h3",onClick:i=>o(h)("confirm")},"Confirm",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "featureX" will be the variable'),a(`
  `),n("span",{class:"token comment"},"// storing the answer"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'featureX'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'confirm'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Use Feature X?'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token comment"},"// optional"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"list-of-choices",class:"doc-heading doc-h3",onClick:i=>o(h)("list-of-choices")},"List of choices",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "iconSet" will be the variable'),a(`
  `),n("span",{class:"token comment"},"// storing the answer"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'iconSet'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'list'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Choose Icon Set'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"choices"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Material Icons (recommended)'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'material-icons'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// value of the answer variable"),a(`
      `),n("span",{class:"token literal-property property"},"short"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Material Icons'"),a(),n("span",{class:"token comment"},"// Short name displayed after user picks this"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Fontawesome v6'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'fontawesome-v6'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// value of the answer variable"),a(`
      `),n("span",{class:"token literal-property property"},"short"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Fontawesome v6'"),a(),n("span",{class:"token comment"},"// Short name displayed after user picks this"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token comment"},"// ... all other choices"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h2",{id:"the-api-param",class:"doc-heading doc-h2",onClick:i=>o(h)("the-api-param")},[a("The API param "),n(g,{label:"@quasar/app-vite 1.6+"}),a(),n(g,{label:"@quasar/app-webpack 3.11+"})],8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"COMPATIBILITY WARNING"),n("p",null,[a("The "),n("code",{class:"doc-token"},"api"),a(" param has been introduced in @quasar/app-vite v1.6+ and @quasar/app-webpack v3.11+.")]),n("p",null,"Older versions of these CLIs will not supply any param.")]),n("h3",{id:"api-engine",class:"doc-heading doc-h3",onClick:i=>o(h)("api-engine")},"api.engine",8,["onClick"]),n("p",null,[a("Contains the Quasar CLI engine (as String) being used. Examples: "),n("code",{class:"doc-token"},"@quasar/app-vite"),a(" or "),n("code",{class:"doc-token"},"@quasar/app-webpack"),a(".")]),n("h3",{id:"api-hasvite",class:"doc-heading doc-h3",onClick:i=>o(h)("api-hasvite")},"api.hasVite",8,["onClick"]),n("p",null,[a("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-vite"),a(" or not.")]),n("h3",{id:"api-haswebpack",class:"doc-heading doc-h3",onClick:i=>o(h)("api-haswebpack")},"api.hasWebpack",8,["onClick"]),n("p",null,[a("Boolean - is running on "),n("code",{class:"doc-token"},"@quasar/app-webpack"),a(" or not.")]),n("h3",{id:"api-extid",class:"doc-heading doc-h3",onClick:i=>o(h)("api-extid")},"api.extId",8,["onClick"]),n("p",null,[a("Contains the "),n("code",{class:"doc-token"},"ext-id"),a(" (String) of this App Extension.")]),n("h3",{id:"api-resolve",class:"doc-heading doc-h3",onClick:i=>o(h)("api-resolve")},"api.resolve",8,["onClick"]),n("p",null,[a("Resolves paths within the app on which this App Extension is running. Eliminates the need to import "),n("code",{class:"doc-token"},"path"),a(" and resolve the paths yourself.")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// resolves to root of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'src/my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"src"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/public of app"),a(`
`),n("span",{class:"token comment"},"// (@quasar/app-webpack v3.4+ or @quasar/app-vite v1+)"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"public"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-image.png'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-pwa of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pwa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-ssr of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ssr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-cordova of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cordova"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'config.xml'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-electron of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"// resolves to root/src-bex of app"),a(`
api`),n("span",{class:"token punctuation"},"."),a("resolve"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-file.js'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-appdir",class:"doc-heading doc-h3",onClick:i=>o(h)("api-appdir")},"api.appDir",8,["onClick"]),n("p",null,"Contains the full path (String) to the root of the app on which this App Extension is running."),n("h3",{id:"api-hastypescript",class:"doc-heading doc-h3",onClick:i=>o(h)("api-hastypescript")},"api.hasTypescript",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has Typescript active or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasTypescript"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-haslint",class:"doc-heading doc-h3",onClick:i=>o(h)("api-haslint")},"api.hasLint",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<boolean>} host project has ESLint or not
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasLint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-getstorepackagename",class:"doc-heading doc-h3",onClick:i=>o(h)("api-getstorepackagename")},"api.getStorePackageName",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<string|undefined>} 'pinia' | 'vuex' | undefined
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getStorePackageName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-getnodepackagername",class:"doc-heading doc-h3",onClick:i=>o(h)("api-getnodepackagername")},"api.getNodePackagerName",8,["onClick"]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @return {Promise<'npm' | 'yarn' | 'pnpm' | 'bun'>}
 */`),a(`
`),n("span",{class:"token keyword"},"await"),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNodePackagerName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n("h3",{id:"api-compatiblewith",class:"doc-heading doc-h3",onClick:i=>o(h)("api-compatiblewith")},"api.compatibleWith",8,["onClick"]),n("p",null,"Ensure the App Extension is compatible with a package installed in the host app through a semver condition."),n("p",null,"If the semver condition is not met, then Quasar CLI errors out and halts execution."),n("p",null,[a("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),a(".")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} semverCondition
 */`),a(`
api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),a("packageName"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'1.x'"),n("span",{class:"token punctuation"},")")])]),n(p)]),_:1}),n(o(k),{title:"A more complex example:"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),a("hasVite "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatibleWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-vite'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
  api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"compatbileWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@quasar/app-webpack'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^4.0.0-beta.1'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-haspackage",class:"doc-heading doc-h3",onClick:i=>o(h)("api-haspackage")},"api.hasPackage",8,["onClick"]),n("p",null,"Determine if some package is installed in the host app through a semver condition."),n("p",null,[a("Example of semver condition: "),n("code",{class:"doc-token"},"'1.x || >=2.5.0 || 5.0.0 - 7.2.3'"),a(".")]),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuelidate'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has it (any version of it)"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasPackage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'^2.0.0'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, this app has Quasar UI v2 installed"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-hasextension",class:"doc-heading doc-h3",onClick:i=>o(h)("api-hasextension")},"api.hasExtension",8,["onClick"]),n("p",null,"Check if another app extension is npm installed and Quasar CLI has invoked it."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */`),a(`
`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasExtension"),n("span",{class:"token punctuation"},"("),a("extId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// hey, we have it"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(p)]),_:1}),n("h3",{id:"api-getpackageversion",class:"doc-heading doc-h3",onClick:i=>o(h)("api-getpackageversion")},"api.getPackageVersion",8,["onClick"]),n("p",null,"Get the version of a host app package."),n(o(k),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */`),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPackageVersion"),n("span",{class:"token punctuation"},"("),a("packageName"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token comment"},"// output examples:"),a(`
`),n("span",{class:"token comment"},"//   1.1.3"),a(`
`),n("span",{class:"token comment"},"//   undefined (when package not found)")])]),n(p)]),_:1})]}),_:1},x))}}},w=y.setup;y.setup=(v,f)=>{const d=N();return(d.modules||(d.modules=new Set)).add("src/pages/app-extensions/development-guide/prompts-api.md"),w?w(v,f):void 0};const O=j(y,[["__file","prompts-api.md"]]);export{O as default};
