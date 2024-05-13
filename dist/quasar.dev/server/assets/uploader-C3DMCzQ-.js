import{provide as C,mergeProps as P,withCtx as c,createTextVNode as a,unref as p,createVNode as n,useSSRContext as A}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as x,a as $}from"./DocPage-DKr-0pQn.js";import{D as d}from"./DocExample-BcaABDtE.js";import{D as v}from"./DocApi-Df9ryd6x.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as i}from"./CopyButton-l3ndfN49.js";import{_ as R}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"uploader",__ssrInlineRender:!0,setup(w){C("_q_ex",{name:"QUploader"});const h=[{name:"File picker",category:"Form Components",path:"/vue-components/file"}],g=[{id:"quploader-api",title:"2. QUploader API",deep:!0},{id:"usage",title:"3. Usage"},{id:"design",title:"3.1. Design",sub:!0},{id:"uploading-multiple-files",title:"3.2. Uploading multiple files",sub:!0},{id:"restricting-upload",title:"3.3. Restricting upload",sub:!0},{id:"adding-headers",title:"3.4. Adding headers",sub:!0},{id:"handling-upload",title:"3.5. Handling upload",sub:!0},{id:"factory-function",title:"3.6. Factory function",sub:!0},{id:"slots",title:"3.7. Slots",sub:!0},{id:"server-endpoint-examples",title:"4. Server endpoint examples"},{id:"nodejs",title:"4.1. Nodejs",sub:!0},{id:"asp-net-mvc-core",title:"4.2. ASP.NET MVC/Core",sub:!0},{id:"spring",title:"4.3. Spring",sub:!0},{id:"python-flask",title:"4.4. Python/Flask",sub:!0},{id:"julia-genie",title:"4.5. Julia/Genie",sub:!0},{id:"perl-mojolicious",title:"4.6. Perl/Mojolicious",sub:!0},{id:"supporting-other-services",title:"5. Supporting other services"}];return(F,U,q,T)=>{U(l(x,P({title:"Uploader",desc:"The QUploader Vue component is a way for the user to upload files to a backend server.",heading:"","edit-link":"vue-components/uploader",toc:g,related:h},T),{default:c((S,e,r,t)=>{if(e)e(`<p${t}>Quasar supplies a way for you to upload files through the QUploader component.</p><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>If all you want is an input file, you might want to consider using `),e(l($,{to:"/vue-components/file"},{default:c((u,o,k,s)=>{if(o)o("QFile");else return[a("QFile")]}),_:1},r,t)),e(" picker component instead.</p></div>"),e(l(v,{file:"QUploader"},null,r,t)),e(`<h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>QUploader requires a back-end server to receive the files. The examples below will not actually upload.</p></div><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>QUploader is <code class="doc-token"${t}>drag and drop</code> compliant.</p></div><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>When using vee-validate, you have to rename the “fieldBagName” configuration of vee-validate for the q-uploader to work.</p></div><h3 id="design" class="doc-heading doc-h3"${t}>Design</h3>`),e(l(d,{title:"Basic",file:"Basic"},null,r,t)),e(l(d,{title:"Force dark mode",file:"Dark"},null,r,t)),e(`<h3 id="uploading-multiple-files" class="doc-heading doc-h3"${t}>Uploading multiple files</h3><p${t}>By default, multiple files will be uploaded individually (one thread per file). Should you want all files to be uploaded in a single thread, use the <code class="doc-token"${t}>batch</code> property (second QUploader in the example below).</p>`),e(l(d,{title:"Multiple",file:"Multiple"},null,r,t)),e(`<h3 id="restricting-upload" class="doc-heading doc-h3"${t}>Restricting upload</h3>`),e(l(d,{title:"Basic restrictions",file:"RestrictionBasic"},null,r,t)),e(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>In the example above, we’re using <code class="doc-token"${t}>accept</code> property. Its value must be a comma separated list of unique file type specifiers. Maps to ‘accept’ attribute of native input type=file element. `),e(l($,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers"},{default:c((u,o,k,s)=>{if(o)o("More info");else return[a("More info")]}),_:1},r,t)),e(`.</p></div><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Recommended format for the <code class="doc-token"${t}>accept</code> property is <code class="doc-token"${t}>&lt;mediatype&gt;/&lt;extension&gt;</code>. Examples: “image/jpeg”, “image/png”. QUploader uses an <code class="doc-token"${t}>&lt;input type=&quot;file&quot;&gt;</code> under the hood and it relies entirely on the host browser to trigger the file picker. If the <code class="doc-token"${t}>accept</code> property (that gets applied to the input) is not correct, no file picker will appear on screen or it will appear but it will accept all file types.</p></div><p${t}>You can also apply custom filters (which are executed after user picks files):</p>`),e(l(d,{title:"Filter",file:"RestrictionFilter"},null,r,t)),e(`<h3 id="adding-headers" class="doc-heading doc-h3"${t}>Adding headers</h3><p${t}>Use <code class="doc-token"${t}>headers</code> for setting additional XHR headers to be sent along the upload request. Also check <code class="doc-token"${t}>form-fields</code> prop in the API, if you need additional fields to be embedded.</p>`),e(l(d,{title:"Headers",file:"Headers"},null,r,t)),e(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>These two props (<code class="doc-token"${t}>headers</code> and <code class="doc-token"${t}>form-fields</code>) can be used as a function too (<code class="doc-token"${t}>(files) =&gt; Array</code>), allowing you to dynamically set them based on the files that are to be uploaded.</p></div><p${t}>There is also the <code class="doc-token"${t}>with-credentials</code> property, which sets <code class="doc-token"${t}>withCredentials</code> to <code class="doc-token"${t}>true</code> on the XHR used by the upload process.</p><h3 id="handling-upload" class="doc-heading doc-h3"${t}>Handling upload</h3>`),e(l(d,{title:"Auto upload on file selection",file:"UploadAuto"},null,r,t)),e(l(d,{title:"Custom upload URL",file:"UploadURL"},null,r,t)),e(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>You can also customize the HTTP headers and HTTP method through <code class="doc-token"${t}>headers</code> and <code class="doc-token"${t}>method</code> props. Check QUploader API section.</p></div><h3 id="factory-function" class="doc-heading doc-h3"${t}>Factory function</h3><p${t}>There is a <code class="doc-token"${t}>factory</code> prop you can use which must be a Function. This function can return either an Object or a Promise resolving with an Object (and in case the Promise fails, <code class="doc-token"${t}>@factory-failed</code> event is emitted).</p><p${t}>The Object described above can override the following QUploader props: <code class="doc-token"${t}>url</code>, <code class="doc-token"${t}>method</code>, <code class="doc-token"${t}>headers</code>, <code class="doc-token"${t}>formFields</code>, <code class="doc-token"${t}>fieldName</code>, <code class="doc-token"${t}>withCredentials</code>, <code class="doc-token"${t}>sendRaw</code>). The props of this Object can be Functions as well (of form <code class="doc-token"${t}>(file[s]) =&gt; value</code>):</p>`),e(l(d,{title:"Promise-based factory function",file:"FactoryPromise"},null,r,t)),e(`<p${t}>You can also use the <code class="doc-token"${t}>factory</code> Function prop and return immediately the same Object. This is useful if you want to set multiple props (described above) simultaneously:</p>`),e(l(d,{title:"Immediate return factory function",file:"FactoryImmediate"},null,r,t)),e(`<h3 id="slots" class="doc-heading doc-h3"${t}>Slots</h3><p${t}>In the example below we’re showing the equivalent of the default header. Also notice some Boolean scope properties that you can use: <code class="doc-token"${t}>scope.canAddFiles</code>, <code class="doc-token"${t}>scope.canUpload</code>, <code class="doc-token"${t}>scope.isUploading</code>.</p><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Notice that you must install and use one more component (QUploaderAddTrigger) in order to be able to add files to the queue. This component needs to be placed under a DOM node which has <code class="doc-token"${t}>position: relative</code> (hint: QBtn has it already) and will automatically inject the necessary events when user clicks on its parent (do NOT manually add <code class="doc-token"${t}>@click=&quot;scope.pickFiles&quot;</code>). If the trigger is not working, check if you have an element rendered above it and change the zIndex of QUploaderAddTrigger accordingly.</p></div>`),e(l(d,{title:"Custom header",file:"SlotHeader"},null,r,t)),e(l(d,{title:"Custom files list",file:"SlotList"},null,r,t)),e(`<h2 id="server-endpoint-examples" class="doc-heading doc-h2"${t}>Server endpoint examples</h2><p${t}>QUploader works by default with the HTTP(S) protocol to upload files (but it’s not limited to it as you’ll see in the section following this one).</p><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>It is by no means required to use a Nodejs server or Spring or ASP.NET like below – you can handle file upload however you want, as long as the method you are using fits the HTTP protocol. Example with `),e(l($,{to:"https://secure.php.net/manual/en/features.file-upload.php"},{default:c((u,o,k,s)=>{if(o)o("PHP");else return[a("PHP")]}),_:1},r,t)),e(`.</p></div><h3 id="nodejs" class="doc-heading doc-h3"${t}>Nodejs</h3><p${t}>Below is a basic server example written in Nodejs. It does nothing other than receiving the files, so consider it as a starting point.</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>const</span>
  express <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;express&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  app <span class="token operator"${s}>=</span> <span class="token function"${s}>express</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  formidable <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;formidable&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  path <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;node:path&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  fs <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;node:fs&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  throttle <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;express-throttle-bandwidth&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>const</span>
  port <span class="token operator"${s}>=</span> process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>PORT</span> <span class="token operator"${s}>||</span> <span class="token number"${s}>4444</span><span class="token punctuation"${s}>,</span>
  folder <span class="token operator"${s}>=</span> path<span class="token punctuation"${s}>.</span><span class="token function"${s}>join</span><span class="token punctuation"${s}>(</span>__dirname<span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;files&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span><span class="token operator"${s}>!</span>fs<span class="token punctuation"${s}>.</span><span class="token function"${s}>existsSync</span><span class="token punctuation"${s}>(</span>folder<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  fs<span class="token punctuation"${s}>.</span><span class="token function"${s}>mkdirSync</span><span class="token punctuation"${s}>(</span>folder<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>set</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;port&#39;</span><span class="token punctuation"${s}>,</span> port<span class="token punctuation"${s}>)</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token function"${s}>throttle</span><span class="token punctuation"${s}>(</span><span class="token number"${s}>1024</span> <span class="token operator"${s}>*</span> <span class="token number"${s}>128</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span> <span class="token comment"${s}>// throttling bandwidth</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>req<span class="token punctuation"${s}>,</span> res<span class="token punctuation"${s}>,</span> next</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  res<span class="token punctuation"${s}>.</span><span class="token function"${s}>header</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;*&#39;</span><span class="token punctuation"${s}>)</span>
  res<span class="token punctuation"${s}>.</span><span class="token function"${s}>header</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;Origin, X-Requested-With, Content-Type, Accept&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token function"${s}>next</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>post</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;/upload&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>req<span class="token punctuation"${s}>,</span> res</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>const</span> form <span class="token operator"${s}>=</span> <span class="token keyword"${s}>new</span> <span class="token class-name"${s}>formidable<span class="token punctuation"${s}>.</span>IncomingForm</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

  form<span class="token punctuation"${s}>.</span>uploadDir <span class="token operator"${s}>=</span> folder
  form<span class="token punctuation"${s}>.</span><span class="token function"${s}>parse</span><span class="token punctuation"${s}>(</span>req<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>_<span class="token punctuation"${s}>,</span> fields<span class="token punctuation"${s}>,</span> files</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
    console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;\\n-----------&#39;</span><span class="token punctuation"${s}>)</span>
    console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Fields&#39;</span><span class="token punctuation"${s}>,</span> fields<span class="token punctuation"${s}>)</span>
    console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Received:&#39;</span><span class="token punctuation"${s}>,</span> Object<span class="token punctuation"${s}>.</span><span class="token function"${s}>keys</span><span class="token punctuation"${s}>(</span>files<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
    console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>
    res<span class="token punctuation"${s}>.</span><span class="token function"${s}>send</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;Thank you&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>listen</span><span class="token punctuation"${s}>(</span>port<span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
  console<span class="token punctuation"${s}>.</span><span class="token function"${s}>log</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;\\nUpload server running on http://localhost:&#39;</span> <span class="token operator"${s}>+</span> port<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(`
  express `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'express'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  app `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  formidable `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formidable'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  path `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  fs `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:fs'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  throttle `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'express-throttle-bandwidth'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(`
  port `),n("span",{class:"token operator"},"="),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PORT"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token number"},"4444"),n("span",{class:"token punctuation"},","),a(`
  folder `),n("span",{class:"token operator"},"="),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),a("__dirname"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'files'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("fs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"existsSync"),n("span",{class:"token punctuation"},"("),a("folder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  fs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mkdirSync"),n("span",{class:"token punctuation"},"("),a("folder"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'port'"),n("span",{class:"token punctuation"},","),a(" port"),n("span",{class:"token punctuation"},")"),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"throttle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1024"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"128"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// throttling bandwidth"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("req"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},","),a(" next")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Access-Control-Allow-Origin'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'*'"),n("span",{class:"token punctuation"},")"),a(`
  res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Access-Control-Allow-Headers'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Origin, X-Requested-With, Content-Type, Accept'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("req"),n("span",{class:"token punctuation"},","),a(" res")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" form "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[a("formidable"),n("span",{class:"token punctuation"},"."),a("IncomingForm")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  form`),n("span",{class:"token punctuation"},"."),a("uploadDir "),n("span",{class:"token operator"},"="),a(` folder
  form`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),a("req"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" fields"),n("span",{class:"token punctuation"},","),a(" files")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\\n-----------'"),n("span",{class:"token punctuation"},")"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Fields'"),n("span",{class:"token punctuation"},","),a(" fields"),n("span",{class:"token punctuation"},")"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Received:'"),n("span",{class:"token punctuation"},","),a(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),a("files"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thank you'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),a("port"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\\nUpload server running on http://localhost:'"),a(),n("span",{class:"token operator"},"+"),a(" port"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(i)]}),_:1},r,t)),e(`<h3 id="asp-net-mvc-core" class="doc-heading doc-h3"${t}>ASP.NET MVC/Core</h3><p${t}>QUploader seamlessly integrates with a Microsoft ASP.NET MVC/Core 2.x Web API backend. In your Vue file, configure the QUploader component with the desired Web API endpoint:</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-uploader</span>
  <span class="token attr-name"${s}>url</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>http://localhost:4444/fileuploader/upload<span class="token punctuation"${s}>&quot;</span></span>
  <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Upload<span class="token punctuation"${s}>&quot;</span></span>
  <span class="token special-attr"${s}><span class="token attr-name"${s}>style</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span><span class="token value css language-css"${s}><span class="token property"${s}>max-width</span><span class="token punctuation"${s}>:</span> 300px</span><span class="token punctuation"${s}>&quot;</span></span></span>
<span class="token punctuation"${s}>/&gt;</span></span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-uploader")]),a(`
  `),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://localhost:4444/fileuploader/upload"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
`),n("span",{class:"token punctuation"},"/>")])])]),n(i)]}),_:1},r,t)),e(`<p${t}>If your server requires authentication such as a JWT token, use QUploader’s factory function to specify the xhr header that will be used by QUploader. For example:</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-uploader</span>
    <span class="token attr-name"${s}>label</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>Upload<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token attr-name"${s}>:factory</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>factoryFn<span class="token punctuation"${s}>&quot;</span></span>
    <span class="token special-attr"${s}><span class="token attr-name"${s}>style</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span><span class="token value css language-css"${s}><span class="token property"${s}>max-width</span><span class="token punctuation"${s}>:</span> 300px</span><span class="token punctuation"${s}>&quot;</span></span></span>
  <span class="token punctuation"${s}>/&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span>

<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>script</span><span class="token punctuation"${s}>&gt;</span></span><span class="token script"${s}><span class="token language-javascript"${s}>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>methods</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token function"${s}>factoryFn</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>file</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token keyword"${s}>return</span> <span class="token keyword"${s}>new</span> <span class="token class-name"${s}>Promise</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token parameter"${s}>resolve<span class="token punctuation"${s}>,</span> reject</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// Retrieve JWT token from your store.</span>
        <span class="token keyword"${s}>const</span> token <span class="token operator"${s}>=</span> <span class="token string"${s}>&quot;myToken&quot;</span><span class="token punctuation"${s}>;</span>
        <span class="token function"${s}>resolve</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
          <span class="token literal-property property"${s}>url</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;http://localhost:4444/fileuploader/upload&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>method</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;POST&#39;</span><span class="token punctuation"${s}>,</span>
          <span class="token literal-property property"${s}>headers</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
            <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;Authorization&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>value</span><span class="token operator"${s}>:</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>Bearer </span><span class="token interpolation"${s}><span class="token interpolation-punctuation punctuation"${s}>\${</span>token<span class="token interpolation-punctuation punctuation"${s}>}</span></span><span class="token template-punctuation string"${s}>\`</span></span> <span class="token punctuation"${s}>}</span>
          <span class="token punctuation"${s}>]</span>
        <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span>
</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>script</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-uploader")]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":factory"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("factoryFn"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"factoryFn"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("resolve"),n("span",{class:"token punctuation"},","),a(" reject")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Retrieve JWT token from your store."),a(`
        `),n("span",{class:"token keyword"},"const"),a(" token "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},'"myToken"'),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4444/fileuploader/upload'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Authorization'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Bearer "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("token"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(i)]}),_:1},r,t)),e(`<p${t}>The file(s) payload of QUploader will be a properly formed <code class="doc-token"${t}>IFormFileCollection</code> object that you can read via your ASP.NET Web API controller’s <code class="doc-token"${t}>.Request</code> property. ASP.NET Core 2.2 Controller:</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>[Route(&quot;api/[controller]&quot;)]
[ApiController]
public class FileUploaderController : ControllerBase
{
    [HttpPost]
    public async Task upload()
    {
        // Request&#39;s .Form.Files property will
        // contain QUploader&#39;s files.
        var files = this.Request.Form.Files;
        foreach (var file in files)
        {
            if (file == null || file.Length == 0)
                continue;

            // Do something with the file.
            var fileName = file.FileName;
            var fileSize = file.Length;
            // save to server...
            // ...
        }
    }
}</code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,`[Route("api/[controller]")]
[ApiController]
public class FileUploaderController : ControllerBase
{
    [HttpPost]
    public async Task upload()
    {
        // Request's .Form.Files property will
        // contain QUploader's files.
        var files = this.Request.Form.Files;
        foreach (var file in files)
        {
            if (file == null || file.Length == 0)
                continue;

            // Do something with the file.
            var fileName = file.FileName;
            var fileSize = file.Length;
            // save to server...
            // ...
        }
    }
}`)]),n(i)]}),_:1},r,t)),e(`<h3 id="spring" class="doc-heading doc-h3"${t}>Spring</h3><p${t}>Below is a `),e(l($,{to:"https://spring.io/guides/gs/uploading-files/"},{default:c((u,o,k,s)=>{if(o)o("Spring");else return[a("Spring")]}),_:1},r,t)),e(` example. Attribute <code class="doc-token"${t}>fieldName=&quot;file&quot;</code> is mapping with <code class="doc-token"${t}>@RequestPart(value = &quot;file&quot;)</code>.</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>// java
@RestController
public class UploadRest {
	@PostMapping(&quot;/upload&quot;)
	public void handleFileUpload(@RequestPart(value = &quot;file&quot;) final MultipartFile uploadfile) throws IOException {
		saveUploadedFiles(uploadfile);
	}

	private String saveUploadedFiles(final MultipartFile file) throws IOException {
		final byte[] bytes = file.getBytes();
		final Path path = Paths.get(&quot;YOUR_ABSOLUTE_PATH&quot; + file.getOriginalFilename());
		Files.write(path, bytes);
	}
}

// html
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-uploader</span> <span class="token attr-name"${s}>field-name</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>file<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>url</span><span class="token attr-value"${s}><span class="token punctuation attr-equals"${s}>=</span><span class="token punctuation"${s}>&quot;</span>YOUR_URL_BACK/upload<span class="token punctuation"${s}>&quot;</span></span> <span class="token attr-name"${s}>with-credentials</span> <span class="token punctuation"${s}>/&gt;</span></span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`// java
@RestController
public class UploadRest {
	@PostMapping("/upload")
	public void handleFileUpload(@RequestPart(value = "file") final MultipartFile uploadfile) throws IOException {
		saveUploadedFiles(uploadfile);
	}

	private String saveUploadedFiles(final MultipartFile file) throws IOException {
		final byte[] bytes = file.getBytes();
		final Path path = Paths.get("YOUR_ABSOLUTE_PATH" + file.getOriginalFilename());
		Files.write(path, bytes);
	}
}

// html
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-uploader")]),a(),n("span",{class:"token attr-name"},"field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("file"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YOUR_URL_BACK/upload"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"with-credentials"),a(),n("span",{class:"token punctuation"},"/>")])])]),n(i)]}),_:1},r,t)),e(`<h3 id="python-flask" class="doc-heading doc-h3"${t}>Python/Flask</h3>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}>// python
from flask import Flask, request
from werkzeug import secure_filename
from flask_cors import CORS
import os

app = Flask(__name__)

# This is necessary because QUploader uses an AJAX request
# to send the file
cors = CORS()
cors.init_app(app, resource={r&quot;/api/*&quot;: {&quot;origins&quot;: &quot;*&quot;}})

@app.route(&#39;/upload&#39;, methods=[&#39;POST&#39;])
def upload():
    for fname in request.files:
        f = request.files.get(fname)
        print(f)
        f.save(&#39;./uploads/%s&#39; % secure_filename(fname))

    return &#39;Okay!&#39;

if __name__ == &#39;__main__&#39;:
    if not os.path.exists(&#39;./uploads&#39;):
        os.mkdir(&#39;./uploads&#39;)
    app.run(debug=True)</code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,`// python
from flask import Flask, request
from werkzeug import secure_filename
from flask_cors import CORS
import os

app = Flask(__name__)

# This is necessary because QUploader uses an AJAX request
# to send the file
cors = CORS()
cors.init_app(app, resource={r"/api/*": {"origins": "*"}})

@app.route('/upload', methods=['POST'])
def upload():
    for fname in request.files:
        f = request.files.get(fname)
        print(f)
        f.save('./uploads/%s' % secure_filename(fname))

    return 'Okay!'

if __name__ == '__main__':
    if not os.path.exists('./uploads'):
        os.mkdir('./uploads')
    app.run(debug=True)`)]),n(i)]}),_:1},r,t)),e(`<h3 id="julia-genie" class="doc-heading doc-h3"${t}>Julia/Genie</h3>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}># Julia Genie

using Genie, Genie.Requests, Genie.Renderer

Genie.config.cors_headers[&quot;Access-Control-Allow-Origin&quot;]  =  &quot;*&quot;
Genie.config.cors_headers[&quot;Access-Control-Allow-Headers&quot;] = &quot;Content-Type&quot;
Genie.config.cors_headers[&quot;Access-Control-Allow-Methods&quot;] = &quot;GET,POST,PUT,DELETE,OPTIONS&quot;
Genie.config.cors_allowed_origins = [&quot;*&quot;]

#== server ==#

route(&quot;/&quot;) do
  &quot;File Upload&quot;
end

route(&quot;/upload&quot;, method = POST) do
  if infilespayload(:img)                 # :img is file-name
    @info filename(filespayload(:img))    # file-name=&quot;img&quot;
    @info filespayload(:img).data

    open(&quot;upload/file.jpg&quot;, &quot;w&quot;) do io
      write(io, filespayload(:img).data)
    end
  else
    @info &quot;No image uploaded&quot;
  end

  Genie.Renderer.redirect(:get)
end

isrunning(:webserver) || up()</code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,`# Julia Genie

using Genie, Genie.Requests, Genie.Renderer

Genie.config.cors_headers["Access-Control-Allow-Origin"]  =  "*"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS"
Genie.config.cors_allowed_origins = ["*"]

#== server ==#

route("/") do
  "File Upload"
end

route("/upload", method = POST) do
  if infilespayload(:img)                 # :img is file-name
    @info filename(filespayload(:img))    # file-name="img"
    @info filespayload(:img).data

    open("upload/file.jpg", "w") do io
      write(io, filespayload(:img).data)
    end
  else
    @info "No image uploaded"
  end

  Genie.Renderer.redirect(:get)
end

isrunning(:webserver) || up()`)]),n(i)]}),_:1},r,t)),e(`<h3 id="perl-mojolicious" class="doc-heading doc-h3"${t}>Perl/Mojolicious</h3>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}># Perl

use Mojolicious::Lite -signatures;

# CORS
app-&gt;hook(after_dispatch =&gt; sub {
    my $c = shift;
    $c-&gt;res-&gt;headers-&gt;header(&#39;Access-Control-Allow-Origin&#39; =&gt; &#39;*&#39;);
});
options &#39;*&#39; =&gt; sub ($c) {
   $c-&gt;res-&gt;headers-&gt;header(&#39;Access-Control-Allow-Methods&#39; =&gt; &#39;GET, OPTIONS, POST, DELETE, PUT&#39;);
   $c-&gt;res-&gt;headers-&gt;header(&#39;Access-Control-Allow-Headers&#39; =&gt; &#39;Content-Type&#39;);
   $c-&gt;render(text =&gt; &#39;&#39;);
};

post &#39;/upload&#39; =&gt; sub ($c) {
   my $uploads = $c-&gt;req-&gt;uploads(&#39;files&#39;);

   foreach my $f (@{$uploads}) {
      $f-&gt;move_to(&#39;/tmp/&#39; . $f-&gt;filename);
   }

   $c-&gt;render(text =&gt; &#39;Saved!&#39;);
};

app-&gt;start;</code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,`# Perl

use Mojolicious::Lite -signatures;

# CORS
app->hook(after_dispatch => sub {
    my $c = shift;
    $c->res->headers->header('Access-Control-Allow-Origin' => '*');
});
options '*' => sub ($c) {
   $c->res->headers->header('Access-Control-Allow-Methods' => 'GET, OPTIONS, POST, DELETE, PUT');
   $c->res->headers->header('Access-Control-Allow-Headers' => 'Content-Type');
   $c->render(text => '');
};

post '/upload' => sub ($c) {
   my $uploads = $c->req->uploads('files');

   foreach my $f (@{$uploads}) {
      $f->move_to('/tmp/' . $f->filename);
   }

   $c->render(text => 'Saved!');
};

app->start;`)]),n(i)]}),_:1},r,t)),e(`<h2 id="supporting-other-services" class="doc-heading doc-h2"${t}>Supporting other services</h2><p${t}>QUploader currently supports uploading through the HTTP(S) protocol. But you can extend the component to support other services as well. Like Firebase for example. Here’s how you can do it.</p><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>Help appreciated</p><p${t}>We’d be more than happy to accept PRs on supporting other upload services as well, so others can benefit. Hit the <code class="doc-token"${t}>Edit this page in browser</code> link at bottom of this page or the pencil icon at the top of the page.</p></div><p${t}>Below is an example with the API that you need to supply to the <code class="doc-token"${t}>createUploaderComponent()</code> Quasar util. This will create a Vue component that you can import in your app.</p>`),e(l(p(m),{title:"MyUploader.js"},{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> createUploaderComponent <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span>
<span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span> computed <span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;vue&#39;</span>

<span class="token comment"${s}>// export a Vue component</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token function"${s}>createUploaderComponent</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// defining the QUploader plugin here</span>

  <span class="token literal-property property"${s}>name</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;MyUploader&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// your component&#39;s name</span>

  <span class="token literal-property property"${s}>props</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...your custom props</span>
  <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

  <span class="token literal-property property"${s}>emits</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token comment"${s}>// ...your custom events name list</span>
  <span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

  <span class="token function"${s}>injectPlugin</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}><span class="token punctuation"${s}>{</span> props<span class="token punctuation"${s}>,</span> emit<span class="token punctuation"${s}>,</span> helpers <span class="token punctuation"${s}>}</span></span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// can call any other composables here</span>
    <span class="token comment"${s}>// as this function will run in the component&#39;s setup()</span>

    <span class="token comment"${s}>// [ REQUIRED! ]</span>
    <span class="token comment"${s}>// We&#39;re working on uploading files</span>
    <span class="token keyword"${s}>const</span> isUploading <span class="token operator"${s}>=</span> <span class="token function"${s}>computed</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// return &lt;Boolean&gt;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// [ optional ]</span>
    <span class="token comment"${s}>// Shows overlay on top of the</span>
    <span class="token comment"${s}>// uploader signaling it&#39;s waiting</span>
    <span class="token comment"${s}>// on something (blocks all controls)</span>
    <span class="token keyword"${s}>const</span> isBusy <span class="token operator"${s}>=</span> <span class="token function"${s}>computed</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// return &lt;Boolean&gt;</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>

    <span class="token comment"${s}>// [ REQUIRED! ]</span>
    <span class="token comment"${s}>// Abort and clean up any process</span>
    <span class="token comment"${s}>// that is in progress</span>
    <span class="token keyword"${s}>function</span> <span class="token function"${s}>abort</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// ...</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token comment"${s}>// [ REQUIRED! ]</span>
    <span class="token comment"${s}>// Start the uploading process</span>
    <span class="token keyword"${s}>function</span> <span class="token function"${s}>upload</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
      <span class="token comment"${s}>// ...</span>
    <span class="token punctuation"${s}>}</span>

    <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
      isUploading<span class="token punctuation"${s}>,</span>
      isBusy<span class="token punctuation"${s}>,</span>

      abort<span class="token punctuation"${s}>,</span>
      upload
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" createUploaderComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" computed "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token comment"},"// export a Vue component"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"createUploaderComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// defining the QUploader plugin here"),a(`

  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'MyUploader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// your component's name"),a(`

  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// ...your custom events name list"),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"injectPlugin"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" props"),n("span",{class:"token punctuation"},","),a(" emit"),n("span",{class:"token punctuation"},","),a(" helpers "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// can call any other composables here"),a(`
    `),n("span",{class:"token comment"},"// as this function will run in the component's setup()"),a(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),a(`
    `),n("span",{class:"token comment"},"// We're working on uploading files"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" isUploading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// return <Boolean>"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// [ optional ]"),a(`
    `),n("span",{class:"token comment"},"// Shows overlay on top of the"),a(`
    `),n("span",{class:"token comment"},"// uploader signaling it's waiting"),a(`
    `),n("span",{class:"token comment"},"// on something (blocks all controls)"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" isBusy "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// return <Boolean>"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),a(`
    `),n("span",{class:"token comment"},"// Abort and clean up any process"),a(`
    `),n("span",{class:"token comment"},"// that is in progress"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"abort"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),a(`
    `),n("span",{class:"token comment"},"// Start the uploading process"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"upload"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      isUploading`),n("span",{class:"token punctuation"},","),a(`
      isBusy`),n("span",{class:"token punctuation"},","),a(`

      abort`),n("span",{class:"token punctuation"},","),a(`
      upload
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(i)]}),_:1},r,t)),e(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIPS</p><ul${t}><li${t}>For the default XHR implementation in the form of such a plugin, check out `),e(l($,{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/components/uploader/xhr-uploader-plugin.js"},{default:c((u,o,k,s)=>{if(o)o("source code");else return[a("source code")]}),_:1},r,t)),e(`.</li><li${t}>For the UMD version use <code class="doc-token"${t}>Quasar.createUploaderComponent({ ... })</code>.</li></ul></div><p${t}>Then you register this component globally with Vue or you import it and add it to the “components: {}” in your Vue components.</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// globally registering your component in a boot file</span>
<span class="token keyword"${s}>import</span> MyUploader <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;../../path/to/MyUploader&#39;</span> <span class="token comment"${s}>// the file from above</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span> app <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  app<span class="token punctuation"${s}>.</span><span class="token function"${s}>component</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;MyUploader&#39;</span><span class="token punctuation"${s}>,</span> MyUploader<span class="token punctuation"${s}>)</span>
<span class="token punctuation"${s}>}</span>

<span class="token comment"${s}>// or declaring it in a .vue file</span>
<span class="token keyword"${s}>import</span> MyUploader <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;../../path/to/MyUploader&#39;</span> <span class="token comment"${s}>// the file from above</span>
<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// ...</span>
  <span class="token literal-property property"${s}>components</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// ...</span>
    MyUploader
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// globally registering your component in a boot file"),a(`
`),n("span",{class:"token keyword"},"import"),a(" MyUploader "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../path/to/MyUploader'"),a(),n("span",{class:"token comment"},"// the file from above"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" app "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyUploader'"),n("span",{class:"token punctuation"},","),a(" MyUploader"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// or declaring it in a .vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(" MyUploader "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../path/to/MyUploader'"),a(),n("span",{class:"token comment"},"// the file from above"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    MyUploader
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},r,t)),e(`<p${t}>If you’re using TypeScript, you’d need to register the new component types to allow Volar to autocomplete props and slots for you.</p>`),e(l(p(m),null,{default:c((u,o,k,s)=>{if(o)o(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> <span class="token punctuation"${s}>{</span>
  GlobalComponentConstructor<span class="token punctuation"${s}>,</span>
  QUploaderProps<span class="token punctuation"${s}>,</span>
  QUploaderSlots<span class="token punctuation"${s}>,</span>
<span class="token punctuation"${s}>}</span> <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;quasar&#39;</span><span class="token punctuation"${s}>;</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>MyUploaderProps</span> <span class="token keyword"${s}>extends</span> <span class="token class-name"${s}>QUploaderProps</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// .. add custom props</span>
  <span class="token literal-property property"${s}>freeze</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
  <span class="token comment"${s}>// .. add custom events</span>
  <span class="token literal-property property"${s}>onFreeze</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span>

declare module <span class="token string"${s}>&#39;@vue/runtime-core&#39;</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>GlobalComponents</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>MyUploader</span><span class="token operator"${s}>:</span> GlobalComponentConstructor<span class="token operator"${s}>&lt;</span>MyUploaderProps<span class="token punctuation"${s}>,</span> QUploaderSlots<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>;</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),o(l(i,null,null,k,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  GlobalComponentConstructor`),n("span",{class:"token punctuation"},","),a(`
  QUploaderProps`),n("span",{class:"token punctuation"},","),a(`
  QUploaderSlots`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"MyUploaderProps"),a(),n("span",{class:"token keyword"},"extends"),a(),n("span",{class:"token class-name"},"QUploaderProps"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// .. add custom props"),a(`
  `),n("span",{class:"token literal-property property"},"freeze"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},"// .. add custom events"),a(`
  `),n("span",{class:"token literal-property property"},"onFreeze"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

declare module `),n("span",{class:"token string"},"'@vue/runtime-core'"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"GlobalComponents"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"MyUploader"),n("span",{class:"token operator"},":"),a(" GlobalComponentConstructor"),n("span",{class:"token operator"},"<"),a("MyUploaderProps"),n("span",{class:"token punctuation"},","),a(" QUploaderSlots"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},r,t));else return[n("p",null,"Quasar supplies a way for you to upload files through the QUploader component."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("If all you want is an input file, you might want to consider using "),n($,{to:"/vue-components/file"},{default:c(()=>[a("QFile")]),_:1}),a(" picker component instead.")])]),n(v,{file:"QUploader"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:u=>p(f)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"QUploader requires a back-end server to receive the files. The examples below will not actually upload.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("QUploader is "),n("code",{class:"doc-token"},"drag and drop"),a(" compliant.")])]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"When using vee-validate, you have to rename the “fieldBagName” configuration of vee-validate for the q-uploader to work.")]),n("h3",{id:"design",class:"doc-heading doc-h3",onClick:u=>p(f)("design")},"Design",8,["onClick"]),n(d,{title:"Basic",file:"Basic"}),n(d,{title:"Force dark mode",file:"Dark"}),n("h3",{id:"uploading-multiple-files",class:"doc-heading doc-h3",onClick:u=>p(f)("uploading-multiple-files")},"Uploading multiple files",8,["onClick"]),n("p",null,[a("By default, multiple files will be uploaded individually (one thread per file). Should you want all files to be uploaded in a single thread, use the "),n("code",{class:"doc-token"},"batch"),a(" property (second QUploader in the example below).")]),n(d,{title:"Multiple",file:"Multiple"}),n("h3",{id:"restricting-upload",class:"doc-heading doc-h3",onClick:u=>p(f)("restricting-upload")},"Restricting upload",8,["onClick"]),n(d,{title:"Basic restrictions",file:"RestrictionBasic"}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("In the example above, we’re using "),n("code",{class:"doc-token"},"accept"),a(" property. Its value must be a comma separated list of unique file type specifiers. Maps to ‘accept’ attribute of native input type=file element. "),n($,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers"},{default:c(()=>[a("More info")]),_:1}),a(".")])]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Recommended format for the "),n("code",{class:"doc-token"},"accept"),a(" property is "),n("code",{class:"doc-token"},"<mediatype>/<extension>"),a(". Examples: “image/jpeg”, “image/png”. QUploader uses an "),n("code",{class:"doc-token"},'<input type="file">'),a(" under the hood and it relies entirely on the host browser to trigger the file picker. If the "),n("code",{class:"doc-token"},"accept"),a(" property (that gets applied to the input) is not correct, no file picker will appear on screen or it will appear but it will accept all file types.")])]),n("p",null,"You can also apply custom filters (which are executed after user picks files):"),n(d,{title:"Filter",file:"RestrictionFilter"}),n("h3",{id:"adding-headers",class:"doc-heading doc-h3",onClick:u=>p(f)("adding-headers")},"Adding headers",8,["onClick"]),n("p",null,[a("Use "),n("code",{class:"doc-token"},"headers"),a(" for setting additional XHR headers to be sent along the upload request. Also check "),n("code",{class:"doc-token"},"form-fields"),a(" prop in the API, if you need additional fields to be embedded.")]),n(d,{title:"Headers",file:"Headers"}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("These two props ("),n("code",{class:"doc-token"},"headers"),a(" and "),n("code",{class:"doc-token"},"form-fields"),a(") can be used as a function too ("),n("code",{class:"doc-token"},"(files) => Array"),a("), allowing you to dynamically set them based on the files that are to be uploaded.")])]),n("p",null,[a("There is also the "),n("code",{class:"doc-token"},"with-credentials"),a(" property, which sets "),n("code",{class:"doc-token"},"withCredentials"),a(" to "),n("code",{class:"doc-token"},"true"),a(" on the XHR used by the upload process.")]),n("h3",{id:"handling-upload",class:"doc-heading doc-h3",onClick:u=>p(f)("handling-upload")},"Handling upload",8,["onClick"]),n(d,{title:"Auto upload on file selection",file:"UploadAuto"}),n(d,{title:"Custom upload URL",file:"UploadURL"}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("You can also customize the HTTP headers and HTTP method through "),n("code",{class:"doc-token"},"headers"),a(" and "),n("code",{class:"doc-token"},"method"),a(" props. Check QUploader API section.")])]),n("h3",{id:"factory-function",class:"doc-heading doc-h3",onClick:u=>p(f)("factory-function")},"Factory function",8,["onClick"]),n("p",null,[a("There is a "),n("code",{class:"doc-token"},"factory"),a(" prop you can use which must be a Function. This function can return either an Object or a Promise resolving with an Object (and in case the Promise fails, "),n("code",{class:"doc-token"},"@factory-failed"),a(" event is emitted).")]),n("p",null,[a("The Object described above can override the following QUploader props: "),n("code",{class:"doc-token"},"url"),a(", "),n("code",{class:"doc-token"},"method"),a(", "),n("code",{class:"doc-token"},"headers"),a(", "),n("code",{class:"doc-token"},"formFields"),a(", "),n("code",{class:"doc-token"},"fieldName"),a(", "),n("code",{class:"doc-token"},"withCredentials"),a(", "),n("code",{class:"doc-token"},"sendRaw"),a("). The props of this Object can be Functions as well (of form "),n("code",{class:"doc-token"},"(file[s]) => value"),a("):")]),n(d,{title:"Promise-based factory function",file:"FactoryPromise"}),n("p",null,[a("You can also use the "),n("code",{class:"doc-token"},"factory"),a(" Function prop and return immediately the same Object. This is useful if you want to set multiple props (described above) simultaneously:")]),n(d,{title:"Immediate return factory function",file:"FactoryImmediate"}),n("h3",{id:"slots",class:"doc-heading doc-h3",onClick:u=>p(f)("slots")},"Slots",8,["onClick"]),n("p",null,[a("In the example below we’re showing the equivalent of the default header. Also notice some Boolean scope properties that you can use: "),n("code",{class:"doc-token"},"scope.canAddFiles"),a(", "),n("code",{class:"doc-token"},"scope.canUpload"),a(", "),n("code",{class:"doc-token"},"scope.isUploading"),a(".")]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Notice that you must install and use one more component (QUploaderAddTrigger) in order to be able to add files to the queue. This component needs to be placed under a DOM node which has "),n("code",{class:"doc-token"},"position: relative"),a(" (hint: QBtn has it already) and will automatically inject the necessary events when user clicks on its parent (do NOT manually add "),n("code",{class:"doc-token"},'@click="scope.pickFiles"'),a("). If the trigger is not working, check if you have an element rendered above it and change the zIndex of QUploaderAddTrigger accordingly.")])]),n(d,{title:"Custom header",file:"SlotHeader"}),n(d,{title:"Custom files list",file:"SlotList"}),n("h2",{id:"server-endpoint-examples",class:"doc-heading doc-h2",onClick:u=>p(f)("server-endpoint-examples")},"Server endpoint examples",8,["onClick"]),n("p",null,"QUploader works by default with the HTTP(S) protocol to upload files (but it’s not limited to it as you’ll see in the section following this one)."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("It is by no means required to use a Nodejs server or Spring or ASP.NET like below – you can handle file upload however you want, as long as the method you are using fits the HTTP protocol. Example with "),n($,{to:"https://secure.php.net/manual/en/features.file-upload.php"},{default:c(()=>[a("PHP")]),_:1}),a(".")])]),n("h3",{id:"nodejs",class:"doc-heading doc-h3",onClick:u=>p(f)("nodejs")},"Nodejs",8,["onClick"]),n("p",null,"Below is a basic server example written in Nodejs. It does nothing other than receiving the files, so consider it as a starting point."),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(`
  express `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'express'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  app `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  formidable `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formidable'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  path `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  fs `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:fs'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  throttle `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'express-throttle-bandwidth'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"const"),a(`
  port `),n("span",{class:"token operator"},"="),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PORT"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token number"},"4444"),n("span",{class:"token punctuation"},","),a(`
  folder `),n("span",{class:"token operator"},"="),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),a("__dirname"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'files'"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("fs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"existsSync"),n("span",{class:"token punctuation"},"("),a("folder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  fs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mkdirSync"),n("span",{class:"token punctuation"},"("),a("folder"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'port'"),n("span",{class:"token punctuation"},","),a(" port"),n("span",{class:"token punctuation"},")"),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"throttle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1024"),a(),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token number"},"128"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token comment"},"// throttling bandwidth"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("req"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},","),a(" next")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Access-Control-Allow-Origin'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'*'"),n("span",{class:"token punctuation"},")"),a(`
  res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Access-Control-Allow-Headers'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Origin, X-Requested-With, Content-Type, Accept'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("req"),n("span",{class:"token punctuation"},","),a(" res")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" form "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[a("formidable"),n("span",{class:"token punctuation"},"."),a("IncomingForm")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  form`),n("span",{class:"token punctuation"},"."),a("uploadDir "),n("span",{class:"token operator"},"="),a(` folder
  form`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),a("req"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" fields"),n("span",{class:"token punctuation"},","),a(" files")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\\n-----------'"),n("span",{class:"token punctuation"},")"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Fields'"),n("span",{class:"token punctuation"},","),a(" fields"),n("span",{class:"token punctuation"},")"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Received:'"),n("span",{class:"token punctuation"},","),a(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),a("files"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Thank you'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),a("port"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\\nUpload server running on http://localhost:'"),a(),n("span",{class:"token operator"},"+"),a(" port"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(i)]),_:1}),n("h3",{id:"asp-net-mvc-core",class:"doc-heading doc-h3",onClick:u=>p(f)("asp-net-mvc-core")},"ASP.NET MVC/Core",8,["onClick"]),n("p",null,"QUploader seamlessly integrates with a Microsoft ASP.NET MVC/Core 2.x Web API backend. In your Vue file, configure the QUploader component with the desired Web API endpoint:"),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-uploader")]),a(`
  `),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://localhost:4444/fileuploader/upload"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
`),n("span",{class:"token punctuation"},"/>")])])]),n(i)]),_:1}),n("p",null,"If your server requires authentication such as a JWT token, use QUploader’s factory function to specify the xhr header that will be used by QUploader. For example:"),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-uploader")]),a(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":factory"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("factoryFn"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"factoryFn"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("resolve"),n("span",{class:"token punctuation"},","),a(" reject")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Retrieve JWT token from your store."),a(`
        `),n("span",{class:"token keyword"},"const"),a(" token "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},'"myToken"'),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4444/fileuploader/upload'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Authorization'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Bearer "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("token"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])]),n(i)]),_:1}),n("p",null,[a("The file(s) payload of QUploader will be a properly formed "),n("code",{class:"doc-token"},"IFormFileCollection"),a(" object that you can read via your ASP.NET Web API controller’s "),n("code",{class:"doc-token"},".Request"),a(" property. ASP.NET Core 2.2 Controller:")]),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`[Route("api/[controller]")]
[ApiController]
public class FileUploaderController : ControllerBase
{
    [HttpPost]
    public async Task upload()
    {
        // Request's .Form.Files property will
        // contain QUploader's files.
        var files = this.Request.Form.Files;
        foreach (var file in files)
        {
            if (file == null || file.Length == 0)
                continue;

            // Do something with the file.
            var fileName = file.FileName;
            var fileSize = file.Length;
            // save to server...
            // ...
        }
    }
}`)]),n(i)]),_:1}),n("h3",{id:"spring",class:"doc-heading doc-h3",onClick:u=>p(f)("spring")},"Spring",8,["onClick"]),n("p",null,[a("Below is a "),n($,{to:"https://spring.io/guides/gs/uploading-files/"},{default:c(()=>[a("Spring")]),_:1}),a(" example. Attribute "),n("code",{class:"doc-token"},'fieldName="file"'),a(" is mapping with "),n("code",{class:"doc-token"},'@RequestPart(value = "file")'),a(".")]),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`// java
@RestController
public class UploadRest {
	@PostMapping("/upload")
	public void handleFileUpload(@RequestPart(value = "file") final MultipartFile uploadfile) throws IOException {
		saveUploadedFiles(uploadfile);
	}

	private String saveUploadedFiles(final MultipartFile file) throws IOException {
		final byte[] bytes = file.getBytes();
		final Path path = Paths.get("YOUR_ABSOLUTE_PATH" + file.getOriginalFilename());
		Files.write(path, bytes);
	}
}

// html
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-uploader")]),a(),n("span",{class:"token attr-name"},"field-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("file"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"url"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YOUR_URL_BACK/upload"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"with-credentials"),a(),n("span",{class:"token punctuation"},"/>")])])]),n(i)]),_:1}),n("h3",{id:"python-flask",class:"doc-heading doc-h3",onClick:u=>p(f)("python-flask")},"Python/Flask",8,["onClick"]),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`// python
from flask import Flask, request
from werkzeug import secure_filename
from flask_cors import CORS
import os

app = Flask(__name__)

# This is necessary because QUploader uses an AJAX request
# to send the file
cors = CORS()
cors.init_app(app, resource={r"/api/*": {"origins": "*"}})

@app.route('/upload', methods=['POST'])
def upload():
    for fname in request.files:
        f = request.files.get(fname)
        print(f)
        f.save('./uploads/%s' % secure_filename(fname))

    return 'Okay!'

if __name__ == '__main__':
    if not os.path.exists('./uploads'):
        os.mkdir('./uploads')
    app.run(debug=True)`)]),n(i)]),_:1}),n("h3",{id:"julia-genie",class:"doc-heading doc-h3",onClick:u=>p(f)("julia-genie")},"Julia/Genie",8,["onClick"]),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`# Julia Genie

using Genie, Genie.Requests, Genie.Renderer

Genie.config.cors_headers["Access-Control-Allow-Origin"]  =  "*"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS"
Genie.config.cors_allowed_origins = ["*"]

#== server ==#

route("/") do
  "File Upload"
end

route("/upload", method = POST) do
  if infilespayload(:img)                 # :img is file-name
    @info filename(filespayload(:img))    # file-name="img"
    @info filespayload(:img).data

    open("upload/file.jpg", "w") do io
      write(io, filespayload(:img).data)
    end
  else
    @info "No image uploaded"
  end

  Genie.Renderer.redirect(:get)
end

isrunning(:webserver) || up()`)]),n(i)]),_:1}),n("h3",{id:"perl-mojolicious",class:"doc-heading doc-h3",onClick:u=>p(f)("perl-mojolicious")},"Perl/Mojolicious",8,["onClick"]),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,`# Perl

use Mojolicious::Lite -signatures;

# CORS
app->hook(after_dispatch => sub {
    my $c = shift;
    $c->res->headers->header('Access-Control-Allow-Origin' => '*');
});
options '*' => sub ($c) {
   $c->res->headers->header('Access-Control-Allow-Methods' => 'GET, OPTIONS, POST, DELETE, PUT');
   $c->res->headers->header('Access-Control-Allow-Headers' => 'Content-Type');
   $c->render(text => '');
};

post '/upload' => sub ($c) {
   my $uploads = $c->req->uploads('files');

   foreach my $f (@{$uploads}) {
      $f->move_to('/tmp/' . $f->filename);
   }

   $c->render(text => 'Saved!');
};

app->start;`)]),n(i)]),_:1}),n("h2",{id:"supporting-other-services",class:"doc-heading doc-h2",onClick:u=>p(f)("supporting-other-services")},"Supporting other services",8,["onClick"]),n("p",null,"QUploader currently supports uploading through the HTTP(S) protocol. But you can extend the component to support other services as well. Like Firebase for example. Here’s how you can do it."),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Help appreciated"),n("p",null,[a("We’d be more than happy to accept PRs on supporting other upload services as well, so others can benefit. Hit the "),n("code",{class:"doc-token"},"Edit this page in browser"),a(" link at bottom of this page or the pencil icon at the top of the page.")])]),n("p",null,[a("Below is an example with the API that you need to supply to the "),n("code",{class:"doc-token"},"createUploaderComponent()"),a(" Quasar util. This will create a Vue component that you can import in your app.")]),n(p(m),{title:"MyUploader.js"},{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" createUploaderComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" computed "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token comment"},"// export a Vue component"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"createUploaderComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// defining the QUploader plugin here"),a(`

  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'MyUploader'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// your component's name"),a(`

  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// ...your custom events name list"),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"injectPlugin"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" props"),n("span",{class:"token punctuation"},","),a(" emit"),n("span",{class:"token punctuation"},","),a(" helpers "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// can call any other composables here"),a(`
    `),n("span",{class:"token comment"},"// as this function will run in the component's setup()"),a(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),a(`
    `),n("span",{class:"token comment"},"// We're working on uploading files"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" isUploading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// return <Boolean>"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// [ optional ]"),a(`
    `),n("span",{class:"token comment"},"// Shows overlay on top of the"),a(`
    `),n("span",{class:"token comment"},"// uploader signaling it's waiting"),a(`
    `),n("span",{class:"token comment"},"// on something (blocks all controls)"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" isBusy "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// return <Boolean>"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),a(`
    `),n("span",{class:"token comment"},"// Abort and clean up any process"),a(`
    `),n("span",{class:"token comment"},"// that is in progress"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"abort"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token comment"},"// [ REQUIRED! ]"),a(`
    `),n("span",{class:"token comment"},"// Start the uploading process"),a(`
    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"upload"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// ..."),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      isUploading`),n("span",{class:"token punctuation"},","),a(`
      isBusy`),n("span",{class:"token punctuation"},","),a(`

      abort`),n("span",{class:"token punctuation"},","),a(`
      upload
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(i)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIPS"),n("ul",null,[n("li",null,[a("For the default XHR implementation in the form of such a plugin, check out "),n($,{to:"https://github.com/quasarframework/quasar/blob/dev/ui/src/components/uploader/xhr-uploader-plugin.js"},{default:c(()=>[a("source code")]),_:1}),a(".")]),n("li",null,[a("For the UMD version use "),n("code",{class:"doc-token"},"Quasar.createUploaderComponent({ ... })"),a(".")])])]),n("p",null,"Then you register this component globally with Vue or you import it and add it to the “components: {}” in your Vue components."),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// globally registering your component in a boot file"),a(`
`),n("span",{class:"token keyword"},"import"),a(" MyUploader "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../path/to/MyUploader'"),a(),n("span",{class:"token comment"},"// the file from above"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" app "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyUploader'"),n("span",{class:"token punctuation"},","),a(" MyUploader"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// or declaring it in a .vue file"),a(`
`),n("span",{class:"token keyword"},"import"),a(" MyUploader "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'../../path/to/MyUploader'"),a(),n("span",{class:"token comment"},"// the file from above"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ..."),a(`
    MyUploader
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1}),n("p",null,"If you’re using TypeScript, you’d need to register the new component types to allow Volar to autocomplete props and slots for you."),n(p(m),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  GlobalComponentConstructor`),n("span",{class:"token punctuation"},","),a(`
  QUploaderProps`),n("span",{class:"token punctuation"},","),a(`
  QUploaderSlots`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"MyUploaderProps"),a(),n("span",{class:"token keyword"},"extends"),a(),n("span",{class:"token class-name"},"QUploaderProps"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// .. add custom props"),a(`
  `),n("span",{class:"token literal-property property"},"freeze"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token comment"},"// .. add custom events"),a(`
  `),n("span",{class:"token literal-property property"},"onFreeze"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

declare module `),n("span",{class:"token string"},"'@vue/runtime-core'"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"GlobalComponents"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"MyUploader"),n("span",{class:"token operator"},":"),a(" GlobalComponentConstructor"),n("span",{class:"token operator"},"<"),a("MyUploaderProps"),n("span",{class:"token punctuation"},","),a(" QUploaderSlots"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1})]}),_:1},q))}}},b=y.setup;y.setup=(w,h)=>{const g=A();return(g.modules||(g.modules=new Set)).add("src/pages/vue-components/uploader.md"),b?b(w,h):void 0};const nn=R(y,[["__file","uploader.md"]]);export{nn as default};
