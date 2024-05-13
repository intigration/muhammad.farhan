import{provide as S,mergeProps as E,withCtx as i,createTextVNode as a,unref as c,createVNode as n,useSSRContext as z}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D,a as m}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocExample-BcaABDtE.js";import{D as y}from"./DocApi-Df9ryd6x.js";import{D as h}from"./DocPrerender-DPOnWPFO.js";import{C as p}from"./CopyButton-l3ndfN49.js";import{_ as T}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"editor",__ssrInlineRender:!0,setup($){S("_q_ex",{name:"QEditor"});const g=[{id:"qeditor-api",title:"2. QEditor API",deep:!0},{id:"examples",title:"3. Examples"},{id:"dropdowns",title:"4. Dropdowns"},{id:"types-of-dropdowns",title:"4.1. Types of dropdowns",sub:!0},{id:"dropdowns-with-exclusive-options",title:"4.2. Dropdowns with exclusive options",sub:!0},{id:"caveats",title:"5. Caveats"},{id:"autocorrect-and-spellcheck",title:"5.1. Autocorrect & spellcheck",sub:!0},{id:"images",title:"5.2. Images",sub:!0},{id:"plaintext-pasting",title:"5.3. Plaintext pasting",sub:!0},{id:"printing",title:"5.4. Printing",sub:!0},{id:"internationalization",title:"5.5. Internationalization",sub:!0}];return(b,q,x,C)=>{q(l(D,E({title:"Editor (WYSIWYG)",desc:"The QEditor Vue component is a WYSIWYG editor that enables writing and pasting HTML.",heading:"","edit-link":"vue-components/editor",toc:g},C),{default:i((L,s,u,e)=>{if(s)s(`<p${e}>The QEditor component is a WYSIWYG (“what you see is what you get”) editor component that enables the user to write and even paste HTML. It uses the so-called Design Mode and the cross-browser <code class="doc-token"${e}>contentEditable</code> interface. Here are some go-to reference pages from the MDN webdocs with more detailed information about the underlying technology:</p><ul${e}><li${e}>`),s(l(m,{to:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"},{default:i((r,o,d,t)=>{if(o)o("Making content editable");else return[a("Making content editable")]}),_:1},u,e)),s(`</li><li${e}>`),s(l(m,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode"},{default:i((r,o,d,t)=>{if(o)o("Design Mode");else return[a("Design Mode")]}),_:1},u,e)),s(`</li><li${e}>`),s(l(m,{to:"https://developer.mozilla.org/en-US/docs/Web/API/document/execCommand"},{default:i((r,o,d,t)=>{if(o)o("execCommand() reference");else return[a("execCommand() reference")]}),_:1},u,e)),s(`</li><li${e}>`),s(l(m,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"},{default:i((r,o,d,t)=>{if(o)o("contentEditable spec");else return[a("contentEditable spec")]}),_:1},u,e)),s("</li></ul>"),s(l(y,{file:"QEditor"},null,u,e)),s(`<h2 id="examples" class="doc-heading doc-h2"${e}>Examples</h2>`),s(l(k,{title:"Default editor",file:"Basic"},null,u,e)),s(`<div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>In this first example, there are two cards below the editor. The first shows the unparsed html using the double-moustache, whereas the second shows the rendered version using <code class="doc-token"${e}>v-html=&quot;editor&quot;</code>. Using v-html this way renders your users vulnerable to Cross Site Scripting attacks. If the content is user generated, be sure to sanitize it either on render or server side (or both).</p></div><p${e}>By default, QEditor offers most if not all the commands you’d need in a WYSIWYG editor: bold, italic, strike, underline, unordered (list), ordered (list), subscript, superscript, link, fullscreen, quote, left (align), center (align), right (align), justify (align), print, outdent, indent, removeFormat, hr, undo, redo, h1 to h6, p (paragraph), code (code paragraph), size-1 to size-7.</p><p${e}>Each of these commands is pre-configured with icons and their own internationalized tooltips. However, if you want to override some of their settings you can do so with the help of definitions Object property.</p>`),s(l(c(h),null,{default:i((r,o,d,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}>:definitions=&quot;{
  bold: {label: &#39;Bold&#39;, icon: null, tip: &#39;My bold tooltip&#39;}
}&quot;</code></pre>`),o(l(p,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,`:definitions="{
  bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
}"`)]),n(p)]}),_:1},u,e)),s(l(k,{title:"Redefine bold command",file:"NewBold"},null,u,e)),s(`<p${e}>The following is an example that adds custom definitions. In such cases, make sure you don’t overlap the default commands:</p>`),s(l(k,{title:"Add new commands",file:"NewCommands"},null,u,e)),s(l(k,{title:"Kitchen sink",file:"KitchenSink"},null,u,e)),s(l(k,{title:"Custom style",file:"Custom"},null,u,e)),s(l(k,{title:"Using toolbar slots",file:"ToolbarSlot"},null,u,e)),s(`<h2 id="dropdowns" class="doc-heading doc-h2"${e}>Dropdowns</h2><h3 id="types-of-dropdowns" class="doc-heading doc-h3"${e}>Types of dropdowns</h3>`),s(l(c(h),null,{default:i((r,o,d,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-editor</span>
  <span class="token attr-name"${t}>v-model</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>model<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>:toolbar</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>[
    [
      {
        label: &#39;Icons &amp; Label&#39;,
        icon: &#39;filter_1&#39;,
        fixedLabel: true,
        fixedIcon: true,
        options: [&#39;bold&#39;, &#39;italic&#39;, &#39;strike&#39;, &#39;underline&#39;]
      }
    ],
    [
      {
        label: &#39;Only label&#39;,
        icon: &#39;filter_2&#39;,
        fixedLabel: true,
        fixedIcon: true,
        list: &#39;no-icons&#39;,
        options: [&#39;bold&#39;, &#39;italic&#39;, &#39;strike&#39;, &#39;underline&#39;]
      }
    ],
    [
      {
        label: &#39;Only icons&#39;,
        icon: &#39;filter_3&#39;,
        fixedLabel: true,
        fixedIcon: true,
        list: &#39;only-icons&#39;,
        options: [&#39;bold&#39;, &#39;italic&#39;, &#39;strike&#39;, &#39;underline&#39;]
      }
    ]
  ]<span class="token punctuation"${t}>&quot;</span></span>
<span class="token punctuation"${t}>/&gt;</span></span></code></pre>`),o(l(p,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(`
  `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},":toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
    [
      {
        label: 'Icons & Label',
        icon: 'filter_1',
        fixedLabel: true,
        fixedIcon: true,
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ],
    [
      {
        label: 'Only label',
        icon: 'filter_2',
        fixedLabel: true,
        fixedIcon: true,
        list: 'no-icons',
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ],
    [
      {
        label: 'Only icons',
        icon: 'filter_3',
        fixedLabel: true,
        fixedIcon: true,
        list: 'only-icons',
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ]
  ]`),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},"/>")])])]),n(p)]}),_:1},u,e)),s(`<h3 id="dropdowns-with-exclusive-options" class="doc-heading doc-h3"${e}>Dropdowns with exclusive options</h3><p${e}>User can pick only one option from each dropdown.</p><ul${e}><li${e}>First has icon and label changing based on current selection</li><li${e}>Second has fixed label but dynamic icon</li><li${e}>Third has fixed icon but dynamic label</li></ul>`),s(l(c(h),null,{default:i((r,o,d,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-editor</span>
  <span class="token attr-name"${t}>v-model</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>model<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>:toolbar</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>[
    [
      {
        label: &#39;Dynamic label&#39;,
        icon: &#39;help_outline&#39;,
        options: [&#39;left&#39;, &#39;center&#39;, &#39;right&#39;, &#39;justify&#39;]
      }
    ],
    [
      {
        label: &#39;Static label&#39;,
        fixedLabel: true,
        options: [&#39;left&#39;, &#39;center&#39;, &#39;right&#39;, &#39;justify&#39;]
      }
    ],
    [
      {
        label: &#39;Some label&#39;,
        icon: &#39;account_balance&#39;,
        fixedIcon: true,
        options: [&#39;left&#39;, &#39;center&#39;, &#39;right&#39;, &#39;justify&#39;]
      }
    ]
  ]<span class="token punctuation"${t}>&quot;</span></span>
<span class="token punctuation"${t}>/&gt;</span></span></code></pre>`),o(l(p,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(`
  `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},":toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
    [
      {
        label: 'Dynamic label',
        icon: 'help_outline',
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    [
      {
        label: 'Static label',
        fixedLabel: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    [
      {
        label: 'Some label',
        icon: 'account_balance',
        fixedIcon: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ]
  ]`),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},"/>")])])]),n(p)]}),_:1},u,e)),s(`<h2 id="caveats" class="doc-heading doc-h2"${e}>Caveats</h2><h3 id="autocorrect-and-spellcheck" class="doc-heading doc-h3"${e}>Autocorrect &amp; spellcheck</h3><p${e}>There may be occasions where you want to turn off the integrated autocorrect, autocomplete, autocapitalization and spelling correction “features” that many modern browsers offer. To do this, simply wrap the <code class="doc-token"${e}>&lt;q-editor&gt;</code> component in a <code class="doc-token"${e}>&lt;form&gt;</code> element, like this:</p>`),s(l(c(h),null,{default:i((r,o,d,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>form</span>
  <span class="token attr-name"${t}>autocorrect</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>off<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>autocapitalize</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>off<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>autocomplete</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>off<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>spellcheck</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>false<span class="token punctuation"${t}>&quot;</span></span>
<span class="token punctuation"${t}>&gt;</span></span>
  <span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-editor</span> <span class="token attr-name"${t}>v-model</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>editor<span class="token punctuation"${t}>&quot;</span></span> <span class="token punctuation"${t}>/&gt;</span></span>
<span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;/</span>form</span><span class="token punctuation"${t}>&gt;</span></span></code></pre>`),o(l(p,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),a(`
  `),n("span",{class:"token attr-name"},"autocorrect"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("off"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"autocapitalize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("off"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"autocomplete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("off"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"spellcheck"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editor"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])]),n(p)]}),_:1},u,e)),s(`<h3 id="images" class="doc-heading doc-h3"${e}>Images</h3><p${e}>Pasting from the buffer and drag &amp; dropping images into the editor is unfortunately different across browsers - and also highly dependent upon how the image got into the buffer in the first place. In fact, up until very recently, you could even resize images within the ContentEditable when using Firefox. If you want to allow image pasting / dropping, we highly recommend writing your own methods.</p>`),s(l(c(h),null,{default:i((r,o,d,t)=>{if(o)o(`<pre class="doc-code"${t}><code${t}><span class="token tag"${t}><span class="token tag"${t}><span class="token punctuation"${t}>&lt;</span>q-editor</span>
  <span class="token attr-name"${t}>v-model</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>editor<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>@paste.native</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>evt =&gt; pasteCapture(evt)<span class="token punctuation"${t}>&quot;</span></span>
  <span class="token attr-name"${t}>@drop.native</span><span class="token attr-value"${t}><span class="token punctuation attr-equals"${t}>=</span><span class="token punctuation"${t}>&quot;</span>evt =&gt; dropCapture(evt)<span class="token punctuation"${t}>&quot;</span></span>
 <span class="token punctuation"${t}>/&gt;</span></span></code></pre>`),o(l(p,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(`
  `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editor"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@paste.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evt => pasteCapture(evt)"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@drop.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evt => dropCapture(evt)"),n("span",{class:"token punctuation"},'"')]),a(`
 `),n("span",{class:"token punctuation"},"/>")])])]),n(p)]}),_:1},u,e)),s(`<h3 id="plaintext-pasting" class="doc-heading doc-h3"${e}>Plaintext pasting</h3><p${e}>If the paste event content type is text and depending on the source of text, there may already be a great deal of markup that the contentEditable automatically parses. If you want to paste only “clean, markup-free” text, then you can use the approach in this example (which also turns off spelling correction as mentioned above):</p>`),s(l(k,{title:"Paste Event Override",file:"Pasting"},null,u,e)),s(`<h3 id="printing" class="doc-heading doc-h3"${e}>Printing</h3><p${e}>If you don’t set a font (or the user doesn’t choose one), the print dialogue will default to the system font, which can vary depending on browser and underlying operating system. Make sure to take this into consideration.</p><h3 id="internationalization" class="doc-heading doc-h3"${e}>Internationalization</h3><p${e}>The tooltips content of QEditor are translated by the `),s(l(m,{to:"/options/quasar-language-packs"},{default:i((r,o,d,t)=>{if(o)o("Quasar Language Pack");else return[a("Quasar Language Pack")]}),_:1},u,e)),s(", so merely changing the language will also change the interface. If your desired language pack is missing - or you find an error, please consider providing the update as PR.</p>");else return[n("p",null,[a("The QEditor component is a WYSIWYG (“what you see is what you get”) editor component that enables the user to write and even paste HTML. It uses the so-called Design Mode and the cross-browser "),n("code",{class:"doc-token"},"contentEditable"),a(" interface. Here are some go-to reference pages from the MDN webdocs with more detailed information about the underlying technology:")]),n("ul",null,[n("li",null,[n(m,{to:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"},{default:i(()=>[a("Making content editable")]),_:1})]),n("li",null,[n(m,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode"},{default:i(()=>[a("Design Mode")]),_:1})]),n("li",null,[n(m,{to:"https://developer.mozilla.org/en-US/docs/Web/API/document/execCommand"},{default:i(()=>[a("execCommand() reference")]),_:1})]),n("li",null,[n(m,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"},{default:i(()=>[a("contentEditable spec")]),_:1})])]),n(y,{file:"QEditor"}),n("h2",{id:"examples",class:"doc-heading doc-h2",onClick:r=>c(f)("examples")},"Examples",8,["onClick"]),n(k,{title:"Default editor",file:"Basic"}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("In this first example, there are two cards below the editor. The first shows the unparsed html using the double-moustache, whereas the second shows the rendered version using "),n("code",{class:"doc-token"},'v-html="editor"'),a(". Using v-html this way renders your users vulnerable to Cross Site Scripting attacks. If the content is user generated, be sure to sanitize it either on render or server side (or both).")])]),n("p",null,"By default, QEditor offers most if not all the commands you’d need in a WYSIWYG editor: bold, italic, strike, underline, unordered (list), ordered (list), subscript, superscript, link, fullscreen, quote, left (align), center (align), right (align), justify (align), print, outdent, indent, removeFormat, hr, undo, redo, h1 to h6, p (paragraph), code (code paragraph), size-1 to size-7."),n("p",null,"Each of these commands is pre-configured with icons and their own internationalized tooltips. However, if you want to override some of their settings you can do so with the help of definitions Object property."),n(c(h),null,{default:i(()=>[n("pre",{class:"doc-code"},[n("code",null,`:definitions="{
  bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
}"`)]),n(p)]),_:1}),n(k,{title:"Redefine bold command",file:"NewBold"}),n("p",null,"The following is an example that adds custom definitions. In such cases, make sure you don’t overlap the default commands:"),n(k,{title:"Add new commands",file:"NewCommands"}),n(k,{title:"Kitchen sink",file:"KitchenSink"}),n(k,{title:"Custom style",file:"Custom"}),n(k,{title:"Using toolbar slots",file:"ToolbarSlot"}),n("h2",{id:"dropdowns",class:"doc-heading doc-h2",onClick:r=>c(f)("dropdowns")},"Dropdowns",8,["onClick"]),n("h3",{id:"types-of-dropdowns",class:"doc-heading doc-h3",onClick:r=>c(f)("types-of-dropdowns")},"Types of dropdowns",8,["onClick"]),n(c(h),null,{default:i(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(`
  `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},":toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
    [
      {
        label: 'Icons & Label',
        icon: 'filter_1',
        fixedLabel: true,
        fixedIcon: true,
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ],
    [
      {
        label: 'Only label',
        icon: 'filter_2',
        fixedLabel: true,
        fixedIcon: true,
        list: 'no-icons',
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ],
    [
      {
        label: 'Only icons',
        icon: 'filter_3',
        fixedLabel: true,
        fixedIcon: true,
        list: 'only-icons',
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ]
  ]`),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},"/>")])])]),n(p)]),_:1}),n("h3",{id:"dropdowns-with-exclusive-options",class:"doc-heading doc-h3",onClick:r=>c(f)("dropdowns-with-exclusive-options")},"Dropdowns with exclusive options",8,["onClick"]),n("p",null,"User can pick only one option from each dropdown."),n("ul",null,[n("li",null,"First has icon and label changing based on current selection"),n("li",null,"Second has fixed label but dynamic icon"),n("li",null,"Third has fixed icon but dynamic label")]),n(c(h),null,{default:i(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(`
  `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("model"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},":toolbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
    [
      {
        label: 'Dynamic label',
        icon: 'help_outline',
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    [
      {
        label: 'Static label',
        fixedLabel: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    [
      {
        label: 'Some label',
        icon: 'account_balance',
        fixedIcon: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ]
  ]`),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},"/>")])])]),n(p)]),_:1}),n("h2",{id:"caveats",class:"doc-heading doc-h2",onClick:r=>c(f)("caveats")},"Caveats",8,["onClick"]),n("h3",{id:"autocorrect-and-spellcheck",class:"doc-heading doc-h3",onClick:r=>c(f)("autocorrect-and-spellcheck")},"Autocorrect & spellcheck",8,["onClick"]),n("p",null,[a("There may be occasions where you want to turn off the integrated autocorrect, autocomplete, autocapitalization and spelling correction “features” that many modern browsers offer. To do this, simply wrap the "),n("code",{class:"doc-token"},"<q-editor>"),a(" component in a "),n("code",{class:"doc-token"},"<form>"),a(" element, like this:")]),n(c(h),null,{default:i(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("form")]),a(`
  `),n("span",{class:"token attr-name"},"autocorrect"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("off"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"autocapitalize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("off"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"autocomplete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("off"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"spellcheck"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editor"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("form")]),n("span",{class:"token punctuation"},">")])])]),n(p)]),_:1}),n("h3",{id:"images",class:"doc-heading doc-h3",onClick:r=>c(f)("images")},"Images",8,["onClick"]),n("p",null,"Pasting from the buffer and drag & dropping images into the editor is unfortunately different across browsers - and also highly dependent upon how the image got into the buffer in the first place. In fact, up until very recently, you could even resize images within the ContentEditable when using Firefox. If you want to allow image pasting / dropping, we highly recommend writing your own methods."),n(c(h),null,{default:i(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-editor")]),a(`
  `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editor"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@paste.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evt => pasteCapture(evt)"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"@drop.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evt => dropCapture(evt)"),n("span",{class:"token punctuation"},'"')]),a(`
 `),n("span",{class:"token punctuation"},"/>")])])]),n(p)]),_:1}),n("h3",{id:"plaintext-pasting",class:"doc-heading doc-h3",onClick:r=>c(f)("plaintext-pasting")},"Plaintext pasting",8,["onClick"]),n("p",null,"If the paste event content type is text and depending on the source of text, there may already be a great deal of markup that the contentEditable automatically parses. If you want to paste only “clean, markup-free” text, then you can use the approach in this example (which also turns off spelling correction as mentioned above):"),n(k,{title:"Paste Event Override",file:"Pasting"}),n("h3",{id:"printing",class:"doc-heading doc-h3",onClick:r=>c(f)("printing")},"Printing",8,["onClick"]),n("p",null,"If you don’t set a font (or the user doesn’t choose one), the print dialogue will default to the system font, which can vary depending on browser and underlying operating system. Make sure to take this into consideration."),n("h3",{id:"internationalization",class:"doc-heading doc-h3",onClick:r=>c(f)("internationalization")},"Internationalization",8,["onClick"]),n("p",null,[a("The tooltips content of QEditor are translated by the "),n(m,{to:"/options/quasar-language-packs"},{default:i(()=>[a("Quasar Language Pack")]),_:1}),a(", so merely changing the language will also change the interface. If your desired language pack is missing - or you find an error, please consider providing the update as PR.")])]}),_:1},x))}}},w=v.setup;v.setup=($,g)=>{const b=z();return(b.modules||(b.modules=new Set)).add("src/pages/vue-components/editor.md"),w?w($,g):void 0};const _=T(v,[["__file","editor.md"]]);export{_ as default};
