import{mergeProps as x,withCtx as p,createTextVNode as a,unref as l,createVNode as n,useSSRContext as S}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as $}from"./page-utils-C-QWsEHe.js";import{D as q,a as g}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as P}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"cordova-plugins",__ssrInlineRender:!0,setup(h){const d=[{id:"cordova-plugins",title:"2. Cordova Plugins"},{id:"deviceready-event",title:"3. Deviceready Event"},{id:"caveat",title:"3.1. Caveat",sub:!0},{id:"using-a-cordova-plugin",title:"4. Using a Cordova Plugin"},{id:"example-battery-status",title:"4.1. Example: Battery Status",sub:!0},{id:"example-camera",title:"4.2. Example: Camera",sub:!0},{id:"example-device",title:"4.3. Example: Device",sub:!0}];return(v,y,b,C)=>{y(c(q,x({title:"Cordova Plugins",desc:"(@quasar/app-webpack) How to use the Cordova plugins in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-cordova-apps/cordova-plugins",toc:d},C),{default:p((B,o,r,s)=>{if(o)o(`<p${s}>You can hook into the native device APIs by using `),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p((i,e,k,t)=>{if(e)e("Cordova Plugins");else return[a("Cordova Plugins")]}),_:1},r,s)),o(`.</p><h2 id="cordova-plugins" class="doc-heading doc-h2"${s}>Cordova Plugins</h2><p${s}>A few examples of such plugins:</p><ul${s}><li${s}>Battery Status</li><li${s}>Camera</li><li${s}>Contacts</li><li${s}>Device</li><li${s}>Device Motion</li><li${s}>Geolocation</li><li${s}>Media</li><li${s}>Media Capture</li><li${s}>Network Information</li><li${s}>Splashscreen</li><li${s}>Vibration</li><li${s}>Statusbar</li></ul><h2 id="deviceready-event" class="doc-heading doc-h2"${s}>Deviceready Event</h2><p${s}>You’ll notice that some Cordova plugins are usable only after the <code class="doc-token"${s}>deviceready</code> event has been triggered. We don’t need to worry about it too much. Quasar listens to this event and takes care of our root Vue component to be mounted <strong${s}>after</strong> this event has been triggered. But if you need some plugin’s own variable and that is initialized after <code class="doc-token"${s}>deviceready</code> you can follow the example of using the plugin device below</p><h3 id="caveat" class="doc-heading doc-h3"${s}>Caveat</h3><p${s}>Let’s take a vue file for example:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  ... we are sure &#39;deviceready&#39; has been triggered here ...
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token comment"${t}>// outside of the default export,</span>
<span class="token comment"${t}>// we need to listen to the event for ourselves:</span>
document<span class="token punctuation"${t}>.</span><span class="token function"${t}>addEventListener</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;deviceready&#39;</span><span class="token punctuation"${t}>,</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// it&#39;s only now that we are sure</span>
  <span class="token comment"${t}>// the event has triggered</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span> <span class="token boolean"${t}>false</span><span class="token punctuation"${t}>)</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// we are sure &#39;deviceready&#39; has been triggered here</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(c(u,null,null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  ... we are sure 'deviceready' has been triggered here ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// outside of the default export,"),a(`
`),n("span",{class:"token comment"},"// we need to listen to the event for ourselves:"),a(`
document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deviceready'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// it's only now that we are sure"),a(`
  `),n("span",{class:"token comment"},"// the event has triggered"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// we are sure 'deviceready' has been triggered here"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},r,s)),o(`<p${s}>The reason is simple. Quasar listens for the event then mounts the root Vue component. But before this, the Vue files are imported into the <code class="doc-token"${s}>/src/router/routes.js</code> file, so the code outside of the default export gets executed.</p><h2 id="using-a-cordova-plugin" class="doc-heading doc-h2"${s}>Using a Cordova Plugin</h2><p${s}>Let’s learn by taking some examples, assuming you’ve added Cordova mode to your Quasar project and installed a platform (android, ios, …) already.</p><h3 id="example-battery-status" class="doc-heading doc-h3"${s}>Example: Battery Status</h3><p${s}>First step is to read the documentation of the Cordova plugin that we want to use. We look at `),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p((i,e,k,t)=>{if(e)e("Cordova Plugins list");else return[a("Cordova Plugins list")]}),_:1},r,s)),o(" and click on "),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html"},{default:p((i,e,k,t)=>{if(e)e("Battery Status doc page");else return[a("Battery Status doc page")]}),_:1},r,s)),o(`.</p><p${s}>We see instructions on how to install this plugin. It’s always a Cordova command. <strong${s}>So we “cd” into <code class="doc-token"${s}>/src-cordova</code></strong> (which is a Cordova generated folder) <strong${s}>and issue the install command form there</strong>:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}># from /src-cordova:</span>
$ cordova plugin <span class="token function"${t}>add</span> cordova-plugin-battery-status</code></pre>`),e(c(u,{lang:"bash"},null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# from /src-cordova:"),a(`
$ cordova plugin `),n("span",{class:"token function"},"add"),a(" cordova-plugin-battery-status")])]),n(u,{lang:"bash"})]}),_:1},r,s)),o(`<p${s}>Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin&#39;s page;
// the rest of things here are of no importance

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
    Battery status is: <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>strong</span><span class="token punctuation"${t}>&gt;</span></span>{{ batteryStatus }}<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>strong</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> ref<span class="token punctuation"${t}>,</span> onBeforeUnmount <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vue&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>const</span> batteryStatus <span class="token operator"${t}>=</span> <span class="token function"${t}>ref</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;determining...&#39;</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>function</span> <span class="token function"${t}>updateBatteryStatus</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>status</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      batteryStatus<span class="token punctuation"${t}>.</span>value <span class="token operator"${t}>=</span> <span class="token template-string"${t}><span class="token template-punctuation string"${t}>\`</span><span class="token string"${t}>Level: </span><span class="token interpolation"${t}><span class="token interpolation-punctuation punctuation"${t}>\${</span>status<span class="token punctuation"${t}>.</span>level<span class="token interpolation-punctuation punctuation"${t}>}</span></span><span class="token string"${t}>, plugged: </span><span class="token interpolation"${t}><span class="token interpolation-punctuation punctuation"${t}>\${</span>status<span class="token punctuation"${t}>.</span>isPlugged<span class="token interpolation-punctuation punctuation"${t}>}</span></span><span class="token template-punctuation string"${t}>\`</span></span>
    <span class="token punctuation"${t}>}</span>

    <span class="token comment"${t}>// we register the event like on plugin&#39;s doc page</span>
    window<span class="token punctuation"${t}>.</span><span class="token function"${t}>addEventListener</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;batterystatus&#39;</span><span class="token punctuation"${t}>,</span> updateBatteryStatus<span class="token punctuation"${t}>,</span> <span class="token boolean"${t}>false</span><span class="token punctuation"${t}>)</span>

    <span class="token function"${t}>onBeforeUnmount</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
      <span class="token comment"${t}>// we do some cleanup;</span>
      <span class="token comment"${t}>// we need to remove the event listener</span>
      window<span class="token punctuation"${t}>.</span><span class="token function"${t}>removeEventListener</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;batterystatus&#39;</span><span class="token punctuation"${t}>,</span> updateBatteryStatus<span class="token punctuation"${t}>,</span> <span class="token boolean"${t}>false</span><span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
      batteryStatus
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(c(u,null,null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    Battery status is: `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("{{ batteryStatus }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" batteryStatus "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'determining...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"updateBatteryStatus"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"status"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      batteryStatus`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Level: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("status"),n("span",{class:"token punctuation"},"."),a("level"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},", plugged: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("status"),n("span",{class:"token punctuation"},"."),a("isPlugged"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// we register the event like on plugin's doc page"),a(`
    window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'batterystatus'"),n("span",{class:"token punctuation"},","),a(" updateBatteryStatus"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we do some cleanup;"),a(`
      `),n("span",{class:"token comment"},"// we need to remove the event listener"),a(`
      window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'batterystatus'"),n("span",{class:"token punctuation"},","),a(" updateBatteryStatus"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      batteryStatus
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},r,s)),o(`<h3 id="example-camera" class="doc-heading doc-h3"${s}>Example: Camera</h3><p${s}>First step is to read the documentation of the Cordova plugin that we want to use. We look at `),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p((i,e,k,t)=>{if(e)e("Cordova Plugins list");else return[a("Cordova Plugins list")]}),_:1},r,s)),o(" and click on "),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html"},{default:p((i,e,k,t)=>{if(e)e("Camera doc page");else return[a("Camera doc page")]}),_:1},r,s)),o(`.</p><p${s}>There’s a mention of the <code class="doc-token"${s}>deviceready</code> event. But we already know how to handle it from the previous sections.</p><p${s}>We read the instructions on how to install this plugin. It’s always a Cordova command. <strong${s}>So we “cd” into <code class="doc-token"${s}>/src-cordova</code></strong> (which is a Cordova generated folder) <strong${s}>and issue the install command form there</strong>:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}># from /src-cordova:</span>
$ cordova plugin <span class="token function"${t}>add</span> cordova-plugin-camera</code></pre>`),e(c(u,{lang:"bash"},null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# from /src-cordova:"),a(`
$ cordova plugin `),n("span",{class:"token function"},"add"),a(" cordova-plugin-camera")])]),n(u,{lang:"bash"})]}),_:1},r,s)),o(`<p${s}>Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin&#39;s page;
// the rest of things here are of no importance

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-btn</span> <span class="token attr-name"${t}>color</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>primary<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>label</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>Get Picture<span class="token punctuation"${t}>&quot;</span></span> <span class="token attr-name"${t}>@click</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>captureImage<span class="token punctuation"${t}>&quot;</span></span> <span class="token punctuation"${t}>/&gt;</span></span>

    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>img</span> <span class="token attr-name"${t}>:src</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>imageSrc<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> useQuasar <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;quasar&#39;</span>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> ref <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vue&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>const</span> $q <span class="token operator"${t}>=</span> <span class="token function"${t}>useQuasar</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span>
    <span class="token keyword"${t}>const</span> imageSrc <span class="token operator"${t}>=</span> <span class="token function"${t}>ref</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;&#39;</span><span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>function</span> <span class="token function"${t}>captureImage</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
      navigator<span class="token punctuation"${t}>.</span>camera<span class="token punctuation"${t}>.</span><span class="token function"${t}>getPicture</span><span class="token punctuation"${t}>(</span>
        <span class="token parameter"${t}>data</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>// on success</span>
          imageSrc<span class="token punctuation"${t}>.</span>value <span class="token operator"${t}>=</span> <span class="token template-string"${t}><span class="token template-punctuation string"${t}>\`</span><span class="token string"${t}>data:image/jpeg;base64,</span><span class="token interpolation"${t}><span class="token interpolation-punctuation punctuation"${t}>\${</span>data<span class="token interpolation-punctuation punctuation"${t}>}</span></span><span class="token template-punctuation string"${t}>\`</span></span>
        <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
        <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span> <span class="token comment"${t}>// on fail</span>
          $q<span class="token punctuation"${t}>.</span><span class="token function"${t}>notify</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;Could not access device camera.&#39;</span><span class="token punctuation"${t}>)</span>
        <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
        <span class="token punctuation"${t}>{</span>
          <span class="token comment"${t}>// camera options</span>
        <span class="token punctuation"${t}>}</span>
      <span class="token punctuation"${t}>)</span>
    <span class="token punctuation"${t}>}</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
      imageSrc<span class="token punctuation"${t}>,</span>
      captureImage
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(c(u,null,null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Get Picture"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("captureImage"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("imageSrc"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imageSrc "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"captureImage"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      navigator`),n("span",{class:"token punctuation"},"."),a("camera"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPicture"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token parameter"},"data"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// on success"),a(`
          imageSrc`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"data:image/jpeg;base64,"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("data"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// on fail"),a(`
          $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Could not access device camera.'"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// camera options"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imageSrc`),n("span",{class:"token punctuation"},","),a(`
      captureImage
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},r,s)),o(`<h3 id="example-device" class="doc-heading doc-h3"${s}>Example: Device</h3><p${s}>First step is to read the documentation of the Cordova plugin that we want to use. Look at the `),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p((i,e,k,t)=>{if(e)e("Cordova Plugins list");else return[a("Cordova Plugins list")]}),_:1},r,s)),o(" and click on "),o(c(g,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/index.html"},{default:p((i,e,k,t)=>{if(e)e("Device doc page");else return[a("Device doc page")]}),_:1},r,s)),o(`.</p><p${s}>This plugin initializes a global variable called <code class="doc-token"${s}>device</code> which describes the device’s hardware and software. So it can be accessed with <code class="doc-token"${s}>window.device</code>.</p><p${s}>Read the instructions on how to install this plugin on its cordova doc page. It’s always a Cordova command. <strong${s}>So we “cd” into <code class="doc-token"${s}>/src-cordova</code></strong> (which is a Cordova generated folder) and <strong${s}>issue the install command from there</strong>:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}># from /src-cordova:</span>
$ cordova plugin <span class="token function"${t}>add</span> cordova-plugin-device</code></pre>`),e(c(u,{lang:"bash"},null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# from /src-cordova:"),a(`
$ cordova plugin `),n("span",{class:"token function"},"add"),a(" cordova-plugin-device")])]),n(u,{lang:"bash"})]}),_:1},r,s)),o(`<p${s}>Now let’s put this plugin to some good use. If you need the information of your device when starting the application, you will have to capture the created event. In one of your Quasar project’s pages/layouts/components Vue file, we write:</p>`),o(c(l(m),null,{default:p((i,e,k,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin&#39;s page;
// the rest of things here are of no importance

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>template</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-page</span> <span class="token attr-name"${t}>class</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>flex flex-center<span class="token punctuation"${t}>&quot;</span></span><span class="token punctuation"${t}>&gt;</span></span>
      <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>div</span><span class="token punctuation"${t}>&gt;</span></span>IMEI: {{ imei }}<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
    <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>q-page</span><span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>div</span><span class="token punctuation"${t}>&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>template</span><span class="token punctuation"${t}>&gt;</span></span>

<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>script</span><span class="token punctuation"${t}>&gt;</span></span><span class="token script"${t}><span class="token language-javascript"${t}>
<span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> ref <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&#39;vue&#39;</span>

<span class="token keyword"${t}>export</span> <span class="token keyword"${t}>default</span> <span class="token punctuation"${t}>{</span>
  <span class="token function"${t}>setup</span> <span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
    <span class="token keyword"${t}>const</span> imei <span class="token operator"${t}>=</span> <span class="token function"${t}>ref</span><span class="token punctuation"${t}>(</span>
      window<span class="token punctuation"${t}>.</span>device <span class="token operator"${t}>===</span> <span class="token keyword"${t}>void</span> <span class="token number"${t}>0</span>
        <span class="token operator"${t}>?</span> <span class="token string"${t}>&#39;Run this on a mobile/tablet device&#39;</span>
        <span class="token operator"${t}>:</span> window<span class="token punctuation"${t}>.</span>device
    <span class="token punctuation"${t}>)</span>

    <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
      imei
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span>
</span></span><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>script</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),e(c(u,null,null,k,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex flex-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("IMEI: {{ imei }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imei "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a(`
      window`),n("span",{class:"token punctuation"},"."),a("device "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token number"},"0"),a(`
        `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'Run this on a mobile/tablet device'"),a(`
        `),n("span",{class:"token operator"},":"),a(" window"),n("span",{class:"token punctuation"},"."),a(`device
    `),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imei
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]}),_:1},r,s));else return[n("p",null,[a("You can hook into the native device APIs by using "),n(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p(()=>[a("Cordova Plugins")]),_:1}),a(".")]),n("h2",{id:"cordova-plugins",class:"doc-heading doc-h2",onClick:i=>l($)("cordova-plugins")},"Cordova Plugins",8,["onClick"]),n("p",null,"A few examples of such plugins:"),n("ul",null,[n("li",null,"Battery Status"),n("li",null,"Camera"),n("li",null,"Contacts"),n("li",null,"Device"),n("li",null,"Device Motion"),n("li",null,"Geolocation"),n("li",null,"Media"),n("li",null,"Media Capture"),n("li",null,"Network Information"),n("li",null,"Splashscreen"),n("li",null,"Vibration"),n("li",null,"Statusbar")]),n("h2",{id:"deviceready-event",class:"doc-heading doc-h2",onClick:i=>l($)("deviceready-event")},"Deviceready Event",8,["onClick"]),n("p",null,[a("You’ll notice that some Cordova plugins are usable only after the "),n("code",{class:"doc-token"},"deviceready"),a(" event has been triggered. We don’t need to worry about it too much. Quasar listens to this event and takes care of our root Vue component to be mounted "),n("strong",null,"after"),a(" this event has been triggered. But if you need some plugin’s own variable and that is initialized after "),n("code",{class:"doc-token"},"deviceready"),a(" you can follow the example of using the plugin device below")]),n("h3",{id:"caveat",class:"doc-heading doc-h3",onClick:i=>l($)("caveat")},"Caveat",8,["onClick"]),n("p",null,"Let’s take a vue file for example:"),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  ... we are sure 'deviceready' has been triggered here ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token comment"},"// outside of the default export,"),a(`
`),n("span",{class:"token comment"},"// we need to listen to the event for ourselves:"),a(`
document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deviceready'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// it's only now that we are sure"),a(`
  `),n("span",{class:"token comment"},"// the event has triggered"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// we are sure 'deviceready' has been triggered here"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1}),n("p",null,[a("The reason is simple. Quasar listens for the event then mounts the root Vue component. But before this, the Vue files are imported into the "),n("code",{class:"doc-token"},"/src/router/routes.js"),a(" file, so the code outside of the default export gets executed.")]),n("h2",{id:"using-a-cordova-plugin",class:"doc-heading doc-h2",onClick:i=>l($)("using-a-cordova-plugin")},"Using a Cordova Plugin",8,["onClick"]),n("p",null,"Let’s learn by taking some examples, assuming you’ve added Cordova mode to your Quasar project and installed a platform (android, ios, …) already."),n("h3",{id:"example-battery-status",class:"doc-heading doc-h3",onClick:i=>l($)("example-battery-status")},"Example: Battery Status",8,["onClick"]),n("p",null,[a("First step is to read the documentation of the Cordova plugin that we want to use. We look at "),n(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p(()=>[a("Cordova Plugins list")]),_:1}),a(" and click on "),n(g,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html"},{default:p(()=>[a("Battery Status doc page")]),_:1}),a(".")]),n("p",null,[a("We see instructions on how to install this plugin. It’s always a Cordova command. "),n("strong",null,[a("So we “cd” into "),n("code",{class:"doc-token"},"/src-cordova")]),a(" (which is a Cordova generated folder) "),n("strong",null,"and issue the install command form there"),a(":")]),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# from /src-cordova:"),a(`
$ cordova plugin `),n("span",{class:"token function"},"add"),a(" cordova-plugin-battery-status")])]),n(u,{lang:"bash"})]),_:1}),n("p",null,"Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:"),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    Battery status is: `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("{{ batteryStatus }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" batteryStatus "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'determining...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"updateBatteryStatus"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"status"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      batteryStatus`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Level: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("status"),n("span",{class:"token punctuation"},"."),a("level"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},", plugged: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("status"),n("span",{class:"token punctuation"},"."),a("isPlugged"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// we register the event like on plugin's doc page"),a(`
    window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'batterystatus'"),n("span",{class:"token punctuation"},","),a(" updateBatteryStatus"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we do some cleanup;"),a(`
      `),n("span",{class:"token comment"},"// we need to remove the event listener"),a(`
      window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'batterystatus'"),n("span",{class:"token punctuation"},","),a(" updateBatteryStatus"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      batteryStatus
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1}),n("h3",{id:"example-camera",class:"doc-heading doc-h3",onClick:i=>l($)("example-camera")},"Example: Camera",8,["onClick"]),n("p",null,[a("First step is to read the documentation of the Cordova plugin that we want to use. We look at "),n(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p(()=>[a("Cordova Plugins list")]),_:1}),a(" and click on "),n(g,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html"},{default:p(()=>[a("Camera doc page")]),_:1}),a(".")]),n("p",null,[a("There’s a mention of the "),n("code",{class:"doc-token"},"deviceready"),a(" event. But we already know how to handle it from the previous sections.")]),n("p",null,[a("We read the instructions on how to install this plugin. It’s always a Cordova command. "),n("strong",null,[a("So we “cd” into "),n("code",{class:"doc-token"},"/src-cordova")]),a(" (which is a Cordova generated folder) "),n("strong",null,"and issue the install command form there"),a(":")]),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# from /src-cordova:"),a(`
$ cordova plugin `),n("span",{class:"token function"},"add"),a(" cordova-plugin-camera")])]),n(u,{lang:"bash"})]),_:1}),n("p",null,"Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:"),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Get Picture"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("captureImage"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("imageSrc"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useQuasar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" $q "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imageSrc "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"captureImage"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      navigator`),n("span",{class:"token punctuation"},"."),a("camera"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPicture"),n("span",{class:"token punctuation"},"("),a(`
        `),n("span",{class:"token parameter"},"data"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// on success"),a(`
          imageSrc`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"data:image/jpeg;base64,"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("data"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"// on fail"),a(`
          $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Could not access device camera.'"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// camera options"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imageSrc`),n("span",{class:"token punctuation"},","),a(`
      captureImage
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1}),n("h3",{id:"example-device",class:"doc-heading doc-h3",onClick:i=>l($)("example-device")},"Example: Device",8,["onClick"]),n("p",null,[a("First step is to read the documentation of the Cordova plugin that we want to use. Look at the "),n(g,{to:"https://cordova.apache.org/docs/en/latest/#plugin-apis"},{default:p(()=>[a("Cordova Plugins list")]),_:1}),a(" and click on "),n(g,{to:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/index.html"},{default:p(()=>[a("Device doc page")]),_:1}),a(".")]),n("p",null,[a("This plugin initializes a global variable called "),n("code",{class:"doc-token"},"device"),a(" which describes the device’s hardware and software. So it can be accessed with "),n("code",{class:"doc-token"},"window.device"),a(".")]),n("p",null,[a("Read the instructions on how to install this plugin on its cordova doc page. It’s always a Cordova command. "),n("strong",null,[a("So we “cd” into "),n("code",{class:"doc-token"},"/src-cordova")]),a(" (which is a Cordova generated folder) and "),n("strong",null,"issue the install command from there"),a(":")]),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# from /src-cordova:"),a(`
$ cordova plugin `),n("span",{class:"token function"},"add"),a(" cordova-plugin-device")])]),n(u,{lang:"bash"})]),_:1}),n("p",null,"Now let’s put this plugin to some good use. If you need the information of your device when starting the application, you will have to capture the created event. In one of your Quasar project’s pages/layouts/components Vue file, we write:"),n(l(m),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex flex-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("IMEI: {{ imei }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imei "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a(`
      window`),n("span",{class:"token punctuation"},"."),a("device "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token number"},"0"),a(`
        `),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'Run this on a mobile/tablet device'"),a(`
        `),n("span",{class:"token operator"},":"),a(" window"),n("span",{class:"token punctuation"},"."),a(`device
    `),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imei
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(u)]),_:1})]}),_:1},b))}}},w=f.setup;f.setup=(h,d)=>{const v=S();return(v.modules||(v.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-cordova-apps/cordova-plugins.md"),w?w(h,d):void 0};const G=P(f,[["__file","cordova-plugins.md"]]);export{G as default};
