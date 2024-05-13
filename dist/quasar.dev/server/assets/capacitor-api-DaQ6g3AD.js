import{mergeProps as x,withCtx as p,createTextVNode as a,unref as l,createVNode as n,useSSRContext as A}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as G,a as m}from"./DocPage-DKr-0pQn.js";import{D as r}from"./DocPrerender-DPOnWPFO.js";import{C as c}from"./CopyButton-l3ndfN49.js";import{_ as S}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"capacitor-api",__ssrInlineRender:!0,setup(h){const f=[{id:"capacitor-apis",title:"2. Capacitor APIs"},{id:"using-a-capacitor-api",title:"3. Using a Capacitor API"},{id:"example-geolocation",title:"3.1. Example: Geolocation",sub:!0},{id:"example-camera",title:"3.2. Example: Camera",sub:!0},{id:"example-device",title:"3.3. Example: Device",sub:!0}];return(w,P,C,b)=>{P(u(G,x({title:"Capacitor APIs",desc:"(@quasar/app-webpack) How to use the Capacitor plugins in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-capacitor-apps/capacitor-api",toc:f},b),{default:p((q,e,$,t)=>{if(e)e(`<p${t}>You can hook into the native device APIs by using `),e(u(m,{to:"https://capacitor.ionicframework.com/docs/apis"},{default:p((k,o,i,s)=>{if(o)o("Capacitor APIs");else return[a("Capacitor APIs")]}),_:1},$,t)),e(`.</p><h2 id="capacitor-apis" class="doc-heading doc-h2"${t}>Capacitor APIs</h2><p${t}>A few examples of such APIs:</p><ul${t}><li${t}>Background Task</li><li${t}>Camera</li><li${t}>Console</li><li${t}>Device</li><li${t}>Filesystem</li><li${t}>Geolocation</li><li${t}>Motion</li><li${t}>Network</li><li${t}>Push Notifications</li><li${t}>Share</li><li${t}>Splash Screen</li><li${t}>Status Bar</li></ul><h2 id="using-a-capacitor-api" class="doc-heading doc-h2"${t}>Using a Capacitor API</h2><p${t}>Let’s learn by taking some examples, assuming you’ve added Capacitor mode to your Quasar project already.</p><h3 id="example-geolocation" class="doc-heading doc-h3"${t}>Example: Geolocation</h3><p${t}>First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s `),e(u(m,{to:"https://capacitor.ionicframework.com/docs/apis/geolocation"},{default:p((k,o,i,s)=>{if(o)o("Geolocation API");else return[a("Geolocation API")]}),_:1},$,t)),e(`.</p><p${t}>Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:</p>`),e(u(l(r),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin&#39;s page;
// the rest of things here are of no importance

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    GPS position: <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>strong</span><span class="token punctuation"${s}>&gt;</span></span>{{ position }}<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>strong</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref<span class="token punctuation"${s}>,</span> onMounted<span class="token punctuation"${s}>,</span> onBeforeUnmount <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Geolocation <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;@capacitor/geolocation&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> position <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;determining...&#39;</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>function</span> <span class="token function"${s}>getCurrentPosition</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      Geolocation<span class="token punctuation"${s}>.</span><span class="token function"${s}>getCurrentPosition</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>.</span><span class="token function"${s}>then</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>newPosition</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Current&#39;</span><span class="token punctuation"${s}>,</span> newPosition<span class="token punctuation"${s}>)</span>
        position<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> newPosition
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>let</span> geoId

    <span class="token function"${s}>onMounted</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      <span class="token function"${s}>getCurrentPosition</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

      <span class="token comment"${s}>// we start listening</span>
      geoId <span class="token operator"${s}>=</span> Geolocation<span class="token punctuation"${s}>.</span><span class="token function"${s}>watchPosition</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span><span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>newPosition<span class="token punctuation"${s}>,</span> err</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;New GPS position&#39;</span><span class="token punctuation"${s}>)</span>
        position<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> newPosition
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token function"${s}>onBeforeUnmount</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// we do cleanup</span>
      Geolocation<span class="token punctuation"${s}>.</span><span class="token function"${s}>clearWatch</span><span class="token punctuation"${s}>(</span>geoId<span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      position
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),o(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    GPS position: `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("{{ position }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Geolocation "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/geolocation'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" position "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'determining...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Geolocation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newPosition"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Current'"),n("span",{class:"token punctuation"},","),a(" newPosition"),n("span",{class:"token punctuation"},")"),a(`
        position`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` newPosition
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"let"),a(` geoId

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token comment"},"// we start listening"),a(`
      geoId `),n("span",{class:"token operator"},"="),a(" Geolocation"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"watchPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("newPosition"),n("span",{class:"token punctuation"},","),a(" err")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'New GPS position'"),n("span",{class:"token punctuation"},")"),a(`
        position`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` newPosition
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we do cleanup"),a(`
      Geolocation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearWatch"),n("span",{class:"token punctuation"},"("),a("geoId"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      position
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},$,t)),e(`<h3 id="example-camera" class="doc-heading doc-h3"${t}>Example: Camera</h3><p${t}>First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s `),e(u(m,{to:"https://capacitor.ionicframework.com/docs/apis/camera"},{default:p((k,o,i,s)=>{if(o)o("Camera API");else return[a("Camera API")]}),_:1},$,t)),e(`.</p><p${t}>Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:</p>`),e(u(l(r),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin&#39;s page;
// the rest of things here are of no importance

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-btn</span> <span class="token attr-name"${s}>color</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>primary<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Get Picture<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>@click</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>captureImage<span class="token punctuation"${s}>&quot;</span></span> <span class="token punctuation"${s}>/&gt;</span></span>

    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>img</span> <span class="token attr-name"${s}>:src</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>imageSrc<span class="token punctuation"${s}>&quot;</span></span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Camera<span class="token punctuation"${s}>,</span> CameraResultType <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;@capacitor/camera&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> imageSrc <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;&#39;</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>async</span> <span class="token keyword"${s}>function</span> <span class="token function"${s}>captureImage</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token keyword"${s}>const</span> image <span class="token operator"${s}>=</span> <span class="token keyword"${s}>await</span> Camera<span class="token punctuation"${s}>.</span><span class="token function"${s}>getPhoto</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>quality</span><span class="token operator"${s}>:</span> <span class="token number"${s}>90</span><span class="token punctuation"${s}>,</span>
        <span class="token literal-property property"${s}>allowEditing</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
        <span class="token literal-property property"${s}>resultType</span><span class="token operator"${s}>:</span> CameraResultType<span class="token punctuation"${s}>.</span>Uri
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

      <span class="token comment"${s}>// The result will vary on the value of the resultType option.</span>
      <span class="token comment"${s}>// CameraResultType.Uri - Get the result from image.webPath</span>
      <span class="token comment"${s}>// CameraResultType.Base64 - Get the result from image.base64String</span>
      <span class="token comment"${s}>// CameraResultType.DataUrl - Get the result from image.dataUrl</span>
      imageSrc<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> image<span class="token punctuation"${s}>.</span>webPath
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      imageSrc<span class="token punctuation"${s}>,</span>
      captureImage
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),o(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
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
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Camera"),n("span",{class:"token punctuation"},","),a(" CameraResultType "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/camera'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imageSrc "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"captureImage"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" image "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(" Camera"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPhoto"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"quality"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"allowEditing"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"resultType"),n("span",{class:"token operator"},":"),a(" CameraResultType"),n("span",{class:"token punctuation"},"."),a(`Uri
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token comment"},"// The result will vary on the value of the resultType option."),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.Uri - Get the result from image.webPath"),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.Base64 - Get the result from image.base64String"),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.DataUrl - Get the result from image.dataUrl"),a(`
      imageSrc`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" image"),n("span",{class:"token punctuation"},"."),a(`webPath
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imageSrc`),n("span",{class:"token punctuation"},","),a(`
      captureImage
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},$,t)),e(`<p${t}>Some Capacitor plugins, such as Camera, have a web-based UI available when not running natively but in a standard web browser. To enable these controls, add @ionic/pwa-elements to your project:</p>`),e(u(l(r),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>$ <span class="token function"${s}>npm</span> <span class="token function"${s}>install</span> @ionic/pwa-elements</code></pre>`),o(u(c,{lang:"bash"},null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" @ionic/pwa-elements")])]),n(c,{lang:"bash"})]}),_:1},$,t)),e(`<p${t}>Then create a boot file to initialize them, for example <code class="doc-token"${t}>src/boot/capacitor.js</code>:</p>`),e(u(l(r),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> defineCustomElements <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;@ionic/pwa-elements/loader&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>defineCustomElements</span><span class="token punctuation"${s}>(</span>window<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineCustomElements "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ionic/pwa-elements/loader'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"defineCustomElements"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]}),_:1},$,t)),e(`<p${t}>Don’t forget to call the boot script in the <code class="doc-token"${t}>quasar.config</code> file:</p>`),e(u(l(r),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>boot</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;capacitor&#39;</span><span class="token punctuation"${s}>]</span></code></pre>`),o(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'capacitor'"),n("span",{class:"token punctuation"},"]")])]),n(c)]}),_:1},$,t)),e(`<p${t}>Now you are able to use the Camera API not just in native Android or iOS, but also in web based projects like a SPA or PWA.</p><h3 id="example-device" class="doc-heading doc-h3"${t}>Example: Device</h3><p${t}>First step is to read the documentation of the Capacitor API that we want to use. Look at the Capacitor’s `),e(u(m,{to:"https://capacitor.ionicframework.com/docs/apis/device"},{default:p((k,o,i,s)=>{if(o)o("Device API");else return[a("Device API")]}),_:1},$,t)),e(`.</p><p${t}>Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:</p>`),e(u(l(r),null,{default:p((k,o,i,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin&#39;s page;
// the rest of things here are of no importance

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>Model: {{ model }}<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>div</span><span class="token punctuation"${s}>&gt;</span></span>Manufacturer: {{ manufacturer }}<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>div</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> ref<span class="token punctuation"${s}>,</span> onMounted <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> Device <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;@capacitor/device&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token function"${s}>setup</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token keyword"${s}>const</span> model <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Please wait...&#39;</span><span class="token punctuation"${s}>)</span>
    <span class="token keyword"${s}>const</span> manufacturer <span class="token operator"${s}>=</span> <span class="token function"${s}>ref</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Please wait...&#39;</span><span class="token punctuation"${s}>)</span>

    <span class="token function"${s}>onMounted</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      Device<span class="token punctuation"${s}>.</span><span class="token function"${s}>getInfo</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>.</span><span class="token function"${s}>then</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>info</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        model<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> info<span class="token punctuation"${s}>.</span>model
        manufacturer<span class="token punctuation"${s}>.</span>value <span class="token operator"${s}>=</span> info<span class="token punctuation"${s}>.</span>manufacturer
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      model<span class="token punctuation"${s}>,</span>
      manufacturer
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),o(u(c,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Model: {{ model }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Manufacturer: {{ manufacturer }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Device "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/device'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Please wait...'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" manufacturer "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Please wait...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Device`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"info"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        model`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" info"),n("span",{class:"token punctuation"},"."),a(`model
        manufacturer`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" info"),n("span",{class:"token punctuation"},"."),a(`manufacturer
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      model`),n("span",{class:"token punctuation"},","),a(`
      manufacturer
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]}),_:1},$,t));else return[n("p",null,[a("You can hook into the native device APIs by using "),n(m,{to:"https://capacitor.ionicframework.com/docs/apis"},{default:p(()=>[a("Capacitor APIs")]),_:1}),a(".")]),n("h2",{id:"capacitor-apis",class:"doc-heading doc-h2",onClick:k=>l(g)("capacitor-apis")},"Capacitor APIs",8,["onClick"]),n("p",null,"A few examples of such APIs:"),n("ul",null,[n("li",null,"Background Task"),n("li",null,"Camera"),n("li",null,"Console"),n("li",null,"Device"),n("li",null,"Filesystem"),n("li",null,"Geolocation"),n("li",null,"Motion"),n("li",null,"Network"),n("li",null,"Push Notifications"),n("li",null,"Share"),n("li",null,"Splash Screen"),n("li",null,"Status Bar")]),n("h2",{id:"using-a-capacitor-api",class:"doc-heading doc-h2",onClick:k=>l(g)("using-a-capacitor-api")},"Using a Capacitor API",8,["onClick"]),n("p",null,"Let’s learn by taking some examples, assuming you’ve added Capacitor mode to your Quasar project already."),n("h3",{id:"example-geolocation",class:"doc-heading doc-h3",onClick:k=>l(g)("example-geolocation")},"Example: Geolocation",8,["onClick"]),n("p",null,[a("First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s "),n(m,{to:"https://capacitor.ionicframework.com/docs/apis/geolocation"},{default:p(()=>[a("Geolocation API")]),_:1}),a(".")]),n("p",null,"Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:"),n(l(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    GPS position: `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("{{ position }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Geolocation "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/geolocation'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" position "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'determining...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Geolocation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newPosition"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Current'"),n("span",{class:"token punctuation"},","),a(" newPosition"),n("span",{class:"token punctuation"},")"),a(`
        position`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` newPosition
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"let"),a(` geoId

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token comment"},"// we start listening"),a(`
      geoId `),n("span",{class:"token operator"},"="),a(" Geolocation"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"watchPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("newPosition"),n("span",{class:"token punctuation"},","),a(" err")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'New GPS position'"),n("span",{class:"token punctuation"},")"),a(`
        position`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` newPosition
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we do cleanup"),a(`
      Geolocation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearWatch"),n("span",{class:"token punctuation"},"("),a("geoId"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      position
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("h3",{id:"example-camera",class:"doc-heading doc-h3",onClick:k=>l(g)("example-camera")},"Example: Camera",8,["onClick"]),n("p",null,[a("First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s "),n(m,{to:"https://capacitor.ionicframework.com/docs/apis/camera"},{default:p(()=>[a("Camera API")]),_:1}),a(".")]),n("p",null,"Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:"),n(l(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
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
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Camera"),n("span",{class:"token punctuation"},","),a(" CameraResultType "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/camera'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imageSrc "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"captureImage"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" image "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(" Camera"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPhoto"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"quality"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"allowEditing"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"resultType"),n("span",{class:"token operator"},":"),a(" CameraResultType"),n("span",{class:"token punctuation"},"."),a(`Uri
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token comment"},"// The result will vary on the value of the resultType option."),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.Uri - Get the result from image.webPath"),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.Base64 - Get the result from image.base64String"),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.DataUrl - Get the result from image.dataUrl"),a(`
      imageSrc`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" image"),n("span",{class:"token punctuation"},"."),a(`webPath
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imageSrc`),n("span",{class:"token punctuation"},","),a(`
      captureImage
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1}),n("p",null,"Some Capacitor plugins, such as Camera, have a web-based UI available when not running natively but in a standard web browser. To enable these controls, add @ionic/pwa-elements to your project:"),n(l(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" @ionic/pwa-elements")])]),n(c,{lang:"bash"})]),_:1}),n("p",null,[a("Then create a boot file to initialize them, for example "),n("code",{class:"doc-token"},"src/boot/capacitor.js"),a(":")]),n(l(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineCustomElements "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ionic/pwa-elements/loader'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"defineCustomElements"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(c)]),_:1}),n("p",null,[a("Don’t forget to call the boot script in the "),n("code",{class:"doc-token"},"quasar.config"),a(" file:")]),n(l(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'capacitor'"),n("span",{class:"token punctuation"},"]")])]),n(c)]),_:1}),n("p",null,"Now you are able to use the Camera API not just in native Android or iOS, but also in web based projects like a SPA or PWA."),n("h3",{id:"example-device",class:"doc-heading doc-h3",onClick:k=>l(g)("example-device")},"Example: Device",8,["onClick"]),n("p",null,[a("First step is to read the documentation of the Capacitor API that we want to use. Look at the Capacitor’s "),n(m,{to:"https://capacitor.ionicframework.com/docs/apis/device"},{default:p(()=>[a("Device API")]),_:1}),a(".")]),n("p",null,"Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:"),n(l(r),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Model: {{ model }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Manufacturer: {{ manufacturer }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Device "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/device'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Please wait...'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" manufacturer "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Please wait...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Device`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"info"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        model`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" info"),n("span",{class:"token punctuation"},"."),a(`model
        manufacturer`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" info"),n("span",{class:"token punctuation"},"."),a(`manufacturer
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      model`),n("span",{class:"token punctuation"},","),a(`
      manufacturer
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(c)]),_:1})]}),_:1},C))}}},v=y.setup;y.setup=(h,f)=>{const w=A();return(w.modules||(w.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-capacitor-apps/capacitor-api.md"),v?v(h,f):void 0};const L=S(y,[["__file","capacitor-api.md"]]);export{L as default};
