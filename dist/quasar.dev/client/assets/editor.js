import{_ as h,a as m}from"./index.js";import{c as i}from"./_examples_frameless-electron-window.js";import{D as f,a as r}from"./DocPage.js";import{D as c}from"./DocExample.js";import{D as k}from"./DocApi.js";import{D as d}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{p as g,b,d as v,w as s,h as t,e as n,i as e,f as a}from"./vendor.js";import"./DocCode.js";import"./DocCodepen.js";import"./utils.js";import"./DocCardTitle.js";const w=t("p",null,[e("The QEditor component is a WYSIWYG (“what you see is what you get”) editor component that enables the user to write and even paste HTML. It uses the so-called Design Mode and the cross-browser "),t("code",{class:"doc-token"},"contentEditable"),e(" interface. Here are some go-to reference pages from the MDN webdocs with more detailed information about the underlying technology:")],-1),y=t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("p",null,[e("In this first example, there are two cards below the editor. The first shows the unparsed html using the double-moustache, whereas the second shows the rendered version using "),t("code",{class:"doc-token"},'v-html="editor"'),e(". Using v-html this way renders your users vulnerable to Cross Site Scripting attacks. If the content is user generated, be sure to sanitize it either on render or server side (or both).")])],-1),_=t("p",null,"By default, QEditor offers most if not all the commands you’d need in a WYSIWYG editor: bold, italic, strike, underline, unordered (list), ordered (list), subscript, superscript, link, fullscreen, quote, left (align), center (align), right (align), justify (align), print, outdent, indent, removeFormat, hr, undo, redo, h1 to h6, p (paragraph), code (code paragraph), size-1 to size-7.",-1),x=t("p",null,"Each of these commands is pre-configured with icons and their own internationalized tooltips. However, if you want to override some of their settings you can do so with the help of definitions Object property.",-1),I=t("pre",{class:"doc-code"},[t("code",null,`:definitions="{
  bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
}"`)],-1),C=t("p",null,"The following is an example that adds custom definitions. In such cases, make sure you don’t overlap the default commands:",-1),q=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("q-editor")]),e(`
  `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("model"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},":toolbar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e(`[
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
  ]`),t("span",{class:"token punctuation"},'"')]),e(`
`),t("span",{class:"token punctuation"},"/>")])])],-1),D=t("p",null,"User can pick only one option from each dropdown.",-1),E=t("ul",null,[t("li",null,"First has icon and label changing based on current selection"),t("li",null,"Second has fixed label but dynamic icon"),t("li",null,"Third has fixed icon but dynamic label")],-1),T=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("q-editor")]),e(`
  `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("model"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},":toolbar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e(`[
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
  ]`),t("span",{class:"token punctuation"},'"')]),e(`
`),t("span",{class:"token punctuation"},"/>")])])],-1),z=t("p",null,[e("There may be occasions where you want to turn off the integrated autocorrect, autocomplete, autocapitalization and spelling correction “features” that many modern browsers offer. To do this, simply wrap the "),t("code",{class:"doc-token"},"<q-editor>"),e(" component in a "),t("code",{class:"doc-token"},"<form>"),e(" element, like this:")],-1),P=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("form")]),e(`
  `),t("span",{class:"token attr-name"},"autocorrect"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("off"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},"autocapitalize"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("off"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},"autocomplete"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("off"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},"spellcheck"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("false"),t("span",{class:"token punctuation"},'"')]),e(`
`),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("q-editor")]),e(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("editor"),t("span",{class:"token punctuation"},'"')]),e(),t("span",{class:"token punctuation"},"/>")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("form")]),t("span",{class:"token punctuation"},">")])])],-1),S=t("p",null,"Pasting from the buffer and drag & dropping images into the editor is unfortunately different across browsers - and also highly dependent upon how the image got into the buffer in the first place. In fact, up until very recently, you could even resize images within the ContentEditable when using Firefox. If you want to allow image pasting / dropping, we highly recommend writing your own methods.",-1),W=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("q-editor")]),e(`
  `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("editor"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},"@paste.native"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("evt => pasteCapture(evt)"),t("span",{class:"token punctuation"},'"')]),e(`
  `),t("span",{class:"token attr-name"},"@drop.native"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("evt => dropCapture(evt)"),t("span",{class:"token punctuation"},'"')]),e(`
 `),t("span",{class:"token punctuation"},"/>")])])],-1),L=t("p",null,"If the paste event content type is text and depending on the source of text, there may already be a great deal of markup that the contentEditable automatically parses. If you want to paste only “clean, markup-free” text, then you can use the approach in this example (which also turns off spelling correction as mentioned above):",-1),M=t("p",null,"If you don’t set a font (or the user doesn’t choose one), the print dialogue will default to the system font, which can vary depending on browser and underlying operating system. Make sure to take this into consideration.",-1),$={__name:"editor",setup(A){g("_q_ex",{name:"QEditor",list:m(()=>import("./e.QEditor.js"),[])});const u=[{id:"qeditor-api",title:"2. QEditor API",deep:!0},{id:"examples",title:"3. Examples"},{id:"dropdowns",title:"4. Dropdowns"},{id:"types-of-dropdowns",title:"4.1. Types of dropdowns",sub:!0},{id:"dropdowns-with-exclusive-options",title:"4.2. Dropdowns with exclusive options",sub:!0},{id:"caveats",title:"5. Caveats"},{id:"autocorrect-and-spellcheck",title:"5.1. Autocorrect & spellcheck",sub:!0},{id:"images",title:"5.2. Images",sub:!0},{id:"plaintext-pasting",title:"5.3. Plaintext pasting",sub:!0},{id:"printing",title:"5.4. Printing",sub:!0},{id:"internationalization",title:"5.5. Internationalization",sub:!0}];return(B,o)=>(b(),v(f,{title:"Editor (WYSIWYG)",desc:"The QEditor Vue component is a WYSIWYG editor that enables writing and pasting HTML.",heading:"","edit-link":"vue-components/editor",toc:u},{default:s(()=>[w,t("ul",null,[t("li",null,[n(r,{to:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"},{default:s(()=>[e("Making content editable")]),_:1})]),t("li",null,[n(r,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode"},{default:s(()=>[e("Design Mode")]),_:1})]),t("li",null,[n(r,{to:"https://developer.mozilla.org/en-US/docs/Web/API/document/execCommand"},{default:s(()=>[e("execCommand() reference")]),_:1})]),t("li",null,[n(r,{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"},{default:s(()=>[e("contentEditable spec")]),_:1})])]),n(k,{file:"QEditor"}),t("h2",{id:"examples",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=l=>a(i)("examples"))},"Examples"),n(c,{title:"Default editor",file:"Basic"}),y,_,x,n(a(d),null,{default:s(()=>[I,n(p)]),_:1}),n(c,{title:"Redefine bold command",file:"NewBold"}),C,n(c,{title:"Add new commands",file:"NewCommands"}),n(c,{title:"Kitchen sink",file:"KitchenSink"}),n(c,{title:"Custom style",file:"Custom"}),n(c,{title:"Using toolbar slots",file:"ToolbarSlot"}),t("h2",{id:"dropdowns",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=l=>a(i)("dropdowns"))},"Dropdowns"),t("h3",{id:"types-of-dropdowns",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=l=>a(i)("types-of-dropdowns"))},"Types of dropdowns"),n(a(d),null,{default:s(()=>[q,n(p)]),_:1}),t("h3",{id:"dropdowns-with-exclusive-options",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=l=>a(i)("dropdowns-with-exclusive-options"))},"Dropdowns with exclusive options"),D,E,n(a(d),null,{default:s(()=>[T,n(p)]),_:1}),t("h2",{id:"caveats",class:"doc-heading doc-h2",onClick:o[4]||(o[4]=l=>a(i)("caveats"))},"Caveats"),t("h3",{id:"autocorrect-and-spellcheck",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=l=>a(i)("autocorrect-and-spellcheck"))},"Autocorrect & spellcheck"),z,n(a(d),null,{default:s(()=>[P,n(p)]),_:1}),t("h3",{id:"images",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=l=>a(i)("images"))},"Images"),S,n(a(d),null,{default:s(()=>[W,n(p)]),_:1}),t("h3",{id:"plaintext-pasting",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=l=>a(i)("plaintext-pasting"))},"Plaintext pasting"),L,n(c,{title:"Paste Event Override",file:"Pasting"}),t("h3",{id:"printing",class:"doc-heading doc-h3",onClick:o[8]||(o[8]=l=>a(i)("printing"))},"Printing"),M,t("h3",{id:"internationalization",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=l=>a(i)("internationalization"))},"Internationalization"),t("p",null,[e("The tooltips content of QEditor are translated by the "),n(r,{to:"/options/quasar-language-packs"},{default:s(()=>[e("Quasar Language Pack")]),_:1}),e(", so merely changing the language will also change the interface. If your desired language pack is missing - or you find an error, please consider providing the update as PR.")])]),_:1}))}},J=h($,[["__file","editor.md"]]);export{J as default};
