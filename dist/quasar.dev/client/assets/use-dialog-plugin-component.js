import{c}from"./_examples_frameless-electron-window.js";import{D as r,a as m}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as g}from"./index.js";import{b as d,d as h,w as o,h as n,i as a,e as s,f as e}from"./vendor.js";const f={class:"doc-note doc-note--tip"},D=n("p",{class:"doc-note__title"},"TIP",-1),y=n("p",null,"This composable is to be used on the custom components which a Dialog plugin is invoked with. It will bootstrap all the necessary communication of the component with the plugin.",-1),w=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
  `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
  `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
  `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
  `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),a(`
  `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    dialogRef`),n("span",{class:"token punctuation"},","),a(`
    onDialogHide
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])],-1),C=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token comment"},"<!-- notice dialogRef here -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-dialog")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dialogRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),a(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-card-actions")]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("OK"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOKClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Cancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCancelClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card-actions")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-card")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-dialog")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'quasar'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// ...your custom props"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),a(`
    `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),a(`
    `),n("span",{class:"token operator"},"..."),a("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),a(`emits
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// REQUIRED; must be called inside of setup()"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" dialogRef"),n("span",{class:"token punctuation"},","),a(" onDialogHide"),n("span",{class:"token punctuation"},","),a(" onDialogOK"),n("span",{class:"token punctuation"},","),a(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),a(`
    `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),a(`
    `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),a(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),a(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),a(`
    `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// This is REQUIRED;"),a(`
      `),n("span",{class:"token comment"},"// Need to inject these (from useDialogPluginComponent() call)"),a(`
      `),n("span",{class:"token comment"},"// into the vue scope for the vue html template"),a(`
      dialogRef`),n("span",{class:"token punctuation"},","),a(`
      onDialogHide`),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// other methods that we used in our vue html template;"),a(`
      `),n("span",{class:"token comment"},"// these are part of our example (so not required)"),a(`
      `),n("span",{class:"token function"},"onOKClick"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),a(`
        `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),a(`
        `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),a(`
        `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// we can passthrough onDialogCancel directly"),a(`
      `),n("span",{class:"token literal-property property"},"onCancelClick"),n("span",{class:"token operator"},":"),a(` onDialogCancel
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])],-1),q={__name:"use-dialog-plugin-component",setup(_){const u=[{name:"Dialog",category:"Quasar Plugins",path:"/quasar-plugins/dialog"}],i=[{id:"syntax",title:"2. Syntax"},{id:"full-example",title:"3. Full example"}];return(v,t)=>(d(),h(r,{title:"useDialogPluginComponent composable",desc:"What is Quasar's useDialogPluginComponent() composable and how you can use it",heading:"","edit-link":"vue-composables/use-dialog-plugin-component",toc:i,related:u},{default:o(()=>[n("div",f,[D,n("p",null,[a("The useDialogPluginComponent composable is part of "),s(m,{to:"/quasar-plugins/dialog#invoking-custom-component"},{default:o(()=>[a("Quasar Dialog Plugin")]),_:1}),a(" (Invoking custom component). If you haven’t dug into it by now, please have a first read there.")])]),y,n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=k=>e(c)("syntax"))},"Syntax"),s(e(l),null,{default:o(()=>[w,s(p)]),_:1}),n("h2",{id:"full-example",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=k=>e(c)("full-example"))},"Full example"),s(e(l),null,{default:o(()=>[C,s(p)]),_:1})]),_:1}))}},Q=g(q,[["__file","use-dialog-plugin-component.md"]]);export{Q as default};
