import{_ as g,a as h}from"./index.js";import{p as f,b as y,d as b,w as e,h as n,i as s,e as t,f as o,k as r}from"./vendor.js";import{c}from"./_examples_frameless-electron-window.js";import{D as v,a as k}from"./DocPage.js";import{D as l}from"./DocExample.js";import{D as w}from"./DocApi.js";import{D}from"./DocInstallation.js";import{D as u}from"./DocPrerender.js";import{C as i}from"./CopyButton.js";import"./DocCode.js";import"./DocCodepen.js";import"./utils.js";import"./DocCardTitle.js";const _=n("p",null,"Quasar Dialogs are a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).",-1),q=n("p",null,"From a UI perspective, you can think of Dialogs as a type of floating modal, which covers only a portion of the screen. This means Dialogs should only be used for quick user actions.",-1),C={class:"doc-note doc-note--tip"},O=n("p",{class:"doc-note__title"},"TIP",-1),P=n("p",null,"The advantage of using Dialogs as Quasar Plugins as opposed to QDialog component is that the plugin can also be called from outside of Vue space and doesn’t require you to manage their templates. But as a result, their customization cannot be compared to their component counterpart.",-1),Q=n("p",null,[s("However, "),n("strong",null,"you can also supply a component for the Dialog Plugin to render"),s(" (see the “Invoking custom component” section) which is a great way to avoid cluttering your Vue templates with inline dialogs (and it will also help you better organize your project files and also reuse dialogs).")],-1),R=n("p",null,"With the QDialog plugin, you can programmatically build three types of dialogs with the following form content:",-1),I=n("ol",null,[n("li",null,"A prompt dialog - asking the user to fill in some sort of data in an input field."),n("li",null,"A set of options for the user to select from using either radio buttons or toggles (singular selection only) or check boxes (for multiple selections)."),n("li",null,"A simple confirmation dialog, where the user can cancel or give their “ok” for a particular action or input.")],-1),E=n("p",null,[s("In order to create #1, the prompting input form, you have the "),n("code",{class:"doc-token"},"prompt"),s(" property within the "),n("code",{class:"doc-token"},"opts"),s(" object.")],-1),x=n("p",null,[s("In order to create #2, the options selection form, you have the "),n("code",{class:"doc-token"},"options"),s(" property within the "),n("code",{class:"doc-token"},"opts"),s(" object.")],-1),K=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Dialog "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token punctuation"},"("),s("Object"),n("span",{class:"token punctuation"},")"),s(" Dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// inside of a Vue file"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// returns Object"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),U=n("p",null,"Please check the API card to see what the returned Object is.",-1),$=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"For all the examples below, also see the browser console while you check them out.")],-1),T=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"This is not an exhaustive list of what you can do with Dialogs as Quasar Plugins. For further exploration check out the API section.")],-1),H=n("p",null,"You can also supply native HTML attributes to the inner QInput or QOptionGroup components, like in the example below.",-1),j=n("p",null,[s("There is a basic validation system that you can use so that the user won’t be able to submit the dialog (click/tap on “OK” or press "),n("kbd",null,"ENTER"),s(") until the expected values are filled in.")],-1),A=n("p",null,[s("You can use HTML on title and message if you specify the "),n("code",{class:"doc-token"},"html: true"),s(" prop. "),n("strong",null,"Please note that this can lead to XSS attacks"),s(", so make sure that you sanitize the message by yourself.")],-1),F=n("p",null,"You can also invoke your own custom component rather than relying on the default one that the Dialog plugin comes with out of the box. But in this case you will be responsible for handling everything (including your own component props).",-1),B=n("p",null,"This feature is actually the “bread and butter” of the Dialog plugin. It helps you keep your other vue components html templates clean by separating and reusing your dialog’s functionality with ease.",-1),V=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" CustomComponent "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'..path.to.component..'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dialog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(" CustomComponent"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// props forwarded to your custom component"),s(`
    `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'something'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// ...more..props..."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onDismiss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Called on OK or Cancel'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),N=n("p",null,[s("The equivalent of the above with Options API is by directly using "),n("code",{class:"doc-token"},"this.$q.dialog({ ... })"),s(".")],-1),L=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("Your custom component however must follow the interface described below in order to perfectly hook into the Dialog plugin. "),n("strong",null,"Notice the “REQUIRED” comments"),s(" and take it as is – just a bare-bone example, nothing more.")])],-1),M=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-dialog")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dialogRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-card")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),s(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-card-actions")]),s(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-btn")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("OK"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onOKClick"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-btn")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Cancel"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDialogCancel"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-card-actions")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-card")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-dialog")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" props "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"defineProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ...your custom props"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"defineEmits"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),s(`
  `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),s(`
  `),n("span",{class:"token operator"},"..."),s("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),s(`emits
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" dialogRef"),n("span",{class:"token punctuation"},","),s(" onDialogHide"),n("span",{class:"token punctuation"},","),s(" onDialogOK"),n("span",{class:"token punctuation"},","),s(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),s(`
`),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),s(`
`),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),s(`
`),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),s(`
`),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*...*/ }) - with payload"),s(`
`),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),s(`

`),n("span",{class:"token comment"},"// this is part of our example (so not required)"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onOKClick"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),s(`
  `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),s(`
  `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),s(`
  `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])],-1),S=n("p",null,[s("If you want to define "),n("code",{class:"doc-token"},"emits"),s(" in Object form, then (requires Quasar v2.2.5+):")],-1),W=n("pre",{class:"doc-code"},[n("code",null,`defineEmits({
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
})`)],-1),Y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token comment"},"<!-- notice dialogRef here -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-dialog")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dialogRef"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-card")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),s(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-card-actions")]),s(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-btn")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("OK"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onOKClick"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-btn")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Cancel"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onCancelClick"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-card-actions")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-card")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-dialog")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useDialogPluginComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ...your custom props"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// REQUIRED; need to specify some events that your"),s(`
    `),n("span",{class:"token comment"},"// component will emit through useDialogPluginComponent()"),s(`
    `),n("span",{class:"token operator"},"..."),s("useDialogPluginComponent"),n("span",{class:"token punctuation"},"."),s(`emits
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// REQUIRED; must be called inside of setup()"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" dialogRef"),n("span",{class:"token punctuation"},","),s(" onDialogHide"),n("span",{class:"token punctuation"},","),s(" onDialogOK"),n("span",{class:"token punctuation"},","),s(" onDialogCancel "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useDialogPluginComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"// dialogRef      - Vue ref to be applied to QDialog"),s(`
    `),n("span",{class:"token comment"},"// onDialogHide   - Function to be used as handler for @hide on QDialog"),s(`
    `),n("span",{class:"token comment"},'// onDialogOK     - Function to call to settle dialog with "ok" outcome'),s(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK() - no payload"),s(`
    `),n("span",{class:"token comment"},"//                    example: onDialogOK({ /*.../* }) - with payload"),s(`
    `),n("span",{class:"token comment"},'// onDialogCancel - Function to call to settle dialog with "cancel" outcome'),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// This is REQUIRED;"),s(`
      `),n("span",{class:"token comment"},"// Need to inject these (from useDialogPluginComponent() call)"),s(`
      `),n("span",{class:"token comment"},"// into the vue scope for the vue html template"),s(`
      dialogRef`),n("span",{class:"token punctuation"},","),s(`
      onDialogHide`),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// other methods that we used in our vue html template;"),s(`
      `),n("span",{class:"token comment"},"// these are part of our example (so not required)"),s(`
      `),n("span",{class:"token function"},"onOKClick"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),s(`
        `),n("span",{class:"token comment"},"// call onDialogOK (with optional payload)"),s(`
        `),n("span",{class:"token function"},"onDialogOK"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"// or with payload: onDialogOK({ ... })"),s(`
        `),n("span",{class:"token comment"},"// ...and it will also hide the dialog automatically"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// we can passthrough onDialogCancel directly"),s(`
      `),n("span",{class:"token literal-property property"},"onCancelClick"),n("span",{class:"token operator"},":"),s(` onDialogCancel
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])],-1),z=n("p",null,[s("If you want to define "),n("code",{class:"doc-token"},"emits"),s(" in Object form, then (requires Quasar v2.2.5+):")],-1),G=n("pre",{class:"doc-code"},[n("code",null,`emits: {
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emitsObject,

  // ...your own definitions
}`)],-1),X=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-dialog")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dialog"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@hide"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDialogHide"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-card")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("q-dialog-plugin"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token comment"},`<!--
        ...content
        ... use q-card-section for it?
      -->`),s(`

      `),n("span",{class:"token comment"},"<!-- buttons example -->"),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-card-actions")]),s(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-btn")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("OK"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onOKClick"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-btn")]),s(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Cancel"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onCancelClick"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-card-actions")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-card")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-dialog")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ...your custom props"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// REQUIRED"),s(`
    `),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'hide'"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// following method is REQUIRED"),s(`
    `),n("span",{class:"token comment"},`// (don't change its name --> "show")`),s(`
    `),n("span",{class:"token function"},"show"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// following method is REQUIRED"),s(`
    `),n("span",{class:"token comment"},`// (don't change its name --> "hide")`),s(`
    `),n("span",{class:"token function"},"hide"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$refs"),n("span",{class:"token punctuation"},"."),s("dialog"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token function"},"onDialogHide"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// required to be emitted"),s(`
      `),n("span",{class:"token comment"},'// when QDialog emits "hide" event'),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hide'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token function"},"onOKClick"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// on OK, it is REQUIRED to"),s(`
      `),n("span",{class:"token comment"},'// emit "ok" event (with optional payload)'),s(`
      `),n("span",{class:"token comment"},"// before hiding the QDialog"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// or with payload: this.$emit('ok', { ... })"),s(`

      `),n("span",{class:"token comment"},"// then hiding dialog"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token function"},"onCancelClick"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// we just need to hide the dialog"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])],-1),J=n("p",null,"Quasar handles the back button for you by default so it can hide any opened Dialogs instead of the default behavior which is to return to the previous page (which is not a nice user experience).",-1),Z=n("p",null,[s("However, should you wish to disable this behavior, edit your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")],-1),nn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),s(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),s(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),s(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),sn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),s(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),s(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),s(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),tn={__name:"dialog",setup(an){f("_q_ex",{name:"Dialog",list:h(()=>import("./e.Dialog.js"),[])});const d=[{name:"Dialog",category:"Vue Components",path:"/vue-components/dialog"},{name:"Bottom Sheet",category:"Quasar Plugins",path:"/quasar-plugins/bottom-sheet"},{name:"useDialogPluginComponent",category:"Vue Composables",path:"/vue-composables/use-dialog-plugin-component"}],m=[{id:"dialog-api",title:"2. Dialog API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"built-in-component",title:"4. Built-in component"},{id:"usage",title:"4.1. Usage",sub:!0},{id:"native-attributes",title:"4.2. Native attributes",sub:!0},{id:"user-input-validation",title:"4.3. User input validation",sub:!0},{id:"progress",title:"4.4. Progress",sub:!0},{id:"using-html",title:"4.5. Using HTML",sub:!0},{id:"invoking-custom-component",title:"5. Invoking custom component"},{id:"cordova-capacitor-back-button",title:"6. Cordova/Capacitor back button"}];return(on,a)=>(y(),b(v,{title:"Dialog Plugin",desc:"A Quasar plugin that provides an easy way to display a prompt, choice, confirmation or alert in the form of a dialog.",heading:"","edit-link":"quasar-plugins/dialog",toc:m,related:d},{default:e(()=>[_,q,n("div",C,[O,n("p",null,[s("Dialogs can also be used as a component in your Vue file templates (for complex use-cases, like specific form components, selectable options, etc.). For this, go to "),t(k,{to:"/vue-components/dialog"},{default:e(()=>[s("QDialog")]),_:1}),s(" page.")])]),P,Q,R,I,E,x,t(w,{file:"Dialog"}),t(D,{plugins:"Dialog"}),n("h2",{id:"built-in-component",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=p=>o(c)("built-in-component"))},"Built-in component"),t(o(u),{title:"Outside of a Vue file"},{default:e(()=>[K,t(i)]),_:1}),U,n("h3",{id:"usage",class:"doc-heading doc-h3",onClick:a[1]||(a[1]=p=>o(c)("usage"))},"Usage"),$,T,t(l,{title:"Basic",file:"Basic"}),t(l,{title:"Force dark mode",file:"Dark"}),t(l,{title:"Radios, Checkboxes, Toggles",file:"Pickers"}),t(l,{title:"Other options",file:"OtherOptions"}),n("h3",{id:"native-attributes",class:"doc-heading doc-h3",onClick:a[2]||(a[2]=p=>o(c)("native-attributes"))},"Native attributes"),H,t(l,{title:"Using native attributes",file:"NativeAttributes"}),n("h3",{id:"user-input-validation",class:"doc-heading doc-h3",onClick:a[3]||(a[3]=p=>o(c)("user-input-validation"))},"User input validation"),j,t(l,{title:"Prompt with validation",file:"ValidationPrompt"}),t(l,{title:"Options with validation",file:"ValidationOptions"}),n("h3",{id:"progress",class:"doc-heading doc-h3",onClick:a[4]||(a[4]=p=>o(c)("progress"))},"Progress"),t(l,{title:"Showing progress",file:"Progress"}),n("h3",{id:"using-html",class:"doc-heading doc-h3",onClick:a[5]||(a[5]=p=>o(c)("using-html"))},"Using HTML"),A,t(l,{title:"Unsafe HTML message",file:"UnsafeHtml"}),n("h2",{id:"invoking-custom-component",class:"doc-heading doc-h2",onClick:a[6]||(a[6]=p=>o(c)("invoking-custom-component"))},"Invoking custom component"),F,B,t(o(u),null,{default:e(()=>[V,t(i)]),_:1}),N,L,n("h4",{id:"sfc-with-script-setup-and-composition-api-variant",class:"doc-heading doc-h4",onClick:a[7]||(a[7]=p=>o(c)("sfc-with-script-setup-and-composition-api-variant"))},"SFC with script setup (and Composition API) variant"),n("p",null,[s("We will be using the "),t(k,{to:"/vue-composables/use-dialog-plugin-component"},{default:e(()=>[s("useDialogPluginComponent")]),_:1}),s(" composable.")]),t(o(u),null,{default:e(()=>[M,t(i)]),_:1}),S,t(o(u),null,{default:e(()=>[W,t(i)]),_:1}),n("h4",{id:"composition-api-variant",class:"doc-heading doc-h4",onClick:a[8]||(a[8]=p=>o(c)("composition-api-variant"))},"Composition API variant"),n("p",null,[s("We will be using the "),t(k,{to:"/vue-composables/use-dialog-plugin-component"},{default:e(()=>[s("useDialogPluginComponent")]),_:1}),s(" composable.")]),t(o(u),null,{default:e(()=>[Y,t(i)]),_:1}),z,t(o(u),null,{default:e(()=>[G,t(i)]),_:1}),n("h4",{id:"options-api-variant",class:"doc-heading doc-h4",onClick:a[9]||(a[9]=p=>o(c)("options-api-variant"))},"Options API variant"),t(o(u),null,{default:e(()=>[X,t(i)]),_:1}),n("h2",{id:"cordova-capacitor-back-button",class:"doc-heading doc-h2",onClick:a[10]||(a[10]=p=>o(c)("cordova-capacitor-back-button"))},"Cordova/Capacitor back button"),J,Z,t(o(u),{tabs:["For Capacitor","For Cordova"]},{default:e(()=>[t(r,{class:"q-pa-none",name:"For Capacitor"},{default:e(()=>[nn,t(i)]),_:1}),t(r,{class:"q-pa-none",name:"For Cordova"},{default:e(()=>[sn,t(i)]),_:1})]),_:1})]),_:1}))}},bn=g(tn,[["__file","dialog.md"]]);export{bn as default};
