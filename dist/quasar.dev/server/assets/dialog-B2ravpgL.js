import{provide as z,resolveComponent as F,mergeProps as T,withCtx as p,createTextVNode as a,unref as c,createVNode as n,useSSRContext as E}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as u}from"./page-utils-C-QWsEHe.js";import{D as V,a as b}from"./DocPage-DKr-0pQn.js";import{D as e}from"./DocExample-BcaABDtE.js";import{D as C}from"./DocApi-Df9ryd6x.js";import{D as Q}from"./DocPrerender-DPOnWPFO.js";import{C as g}from"./CopyButton-l3ndfN49.js";import{_ as H}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"dialog",__ssrInlineRender:!0,setup(D){z("_q_ex",{name:"QDialog"});const $=[{name:"Dialog",category:"Quasar Plugins",path:"/quasar-plugins/dialog"},{name:"Close Popup",category:"Vue Directives",path:"/vue-directives/close-popup"},{name:"Card",category:"Vue Components",path:"/vue-components/card"},{name:"Popup Proxy",category:"Vue Components",path:"/vue-components/popup-proxy"}],h=[{id:"qdialog-api",title:"2. QDialog API",deep:!0},{id:"usage",title:"3. Usage"},{id:"basic",title:"3.1. Basic",sub:!0},{id:"styling",title:"3.2. Styling",sub:!0},{id:"positioning",title:"3.3. Positioning",sub:!0},{id:"various-content",title:"3.4. Various content",sub:!0},{id:"handling-scroll",title:"3.5. Handling scroll",sub:!0},{id:"different-modes",title:"3.6. Different modes",sub:!0},{id:"dialog-in-dialog",title:"3.7. Dialog in dialog",sub:!0},{id:"sizing",title:"3.8. Sizing",sub:!0},{id:"cordova-capacitor-back-button",title:"4. Cordova/Capacitor back button"}];return(O,P,q,S)=>{const m=F("q-tab-panel");P(l(V,T({title:"Dialog",desc:"The QDialog component provides a UI for modals with functionalities like positioning, styling, maximizing and more.",heading:"","edit-link":"vue-components/dialog",toc:h,related:$},S),{default:p((U,s,i,o)=>{if(s)s(`<p${o}>The QDialog component is a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions).</p><p${o}>From a UI perspective, you can think of Dialogs as a type of floating modal, which covers only a portion of the screen. This means Dialogs should only be used for quick user actions, like verifying a password, getting a short App notification or selecting an option or options quickly.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>Dialogs can also be used as a globally available method for more basic use cases, like the native JS alert(), prompt(), etc. For the latter behaviour, go to `),s(l(b,{to:"/quasar-plugins/dialog"},{default:p((r,k,f,y)=>{if(k)k("Dialog Plugin");else return[a("Dialog Plugin")]}),_:1},i,o)),s(` page.</p></div><div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>Masterclass TIP</p><p${o}>Rather than cluttering your .vue templates with QDialogs, it’s best if you write a component for your dialog and use the `),s(l(b,{to:"/quasar-plugins/dialog#invoking-custom-component"},{default:p((r,k,f,y)=>{if(k)k("Dialog Plugin");else return[a("Dialog Plugin")]}),_:1},i,o)),s(" to invoke it from anywhere in your app.</p></div>"),s(l(C,{file:"QDialog"},null,i,o)),s(`<h2 id="usage" class="doc-heading doc-h2"${o}>Usage</h2><div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>Note</p><p${o}>It’s best that your QDialog main content is a QCard. However, if you are planning on using any other component (like QForm) or tag, make sure that the direct child of QDialog is rendered with a <code class="doc-token"${o}>&lt;div&gt;</code> tag (or wrap it with one yourself).</p></div><h3 id="basic" class="doc-heading doc-h3"${o}>Basic</h3>`),s(l(e,{title:"Basic",file:"Basic"},null,i,o)),s(`<h3 id="styling" class="doc-heading doc-h3"${o}>Styling</h3>`),s(l(e,{title:"Styling",file:"Style"},null,i,o)),s(l(e,{title:"Backdrop filter (v2.14.8+)",file:"BackdropFilter"},null,i,o)),s(`<h3 id="positioning" class="doc-heading doc-h3"${o}>Positioning</h3>`),s(l(e,{title:"Positions",file:"Positioning"},null,i,o)),s(`<div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>Do not mistake “position” prop with the show/hide animation. If you want a custom animation, you should use <code class="doc-token"${o}>transition-show</code> and <code class="doc-token"${o}>transition-hide</code> which can be applied regardless of “position” or “maximized”.</p></div>`),s(l(e,{title:"Maximized",file:"Maximized"},null,i,o)),s(`<h3 id="various-content" class="doc-heading doc-h3"${o}>Various content</h3><p${o}>Dialogs can contain any content. Some examples:</p>`),s(l(e,{title:"Various content",file:"VariousContent"},null,i,o)),s(l(e,{title:"With containerized QLayout",file:"Layout"},null,i,o)),s(`<div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>If you are going to use the containerized QLayout, you’ll need to put a width on your QDialog, if using left/right position, or a height, if using top/bottom position. You can use vw and vh units.</p></div><h3 id="handling-scroll" class="doc-heading doc-h3"${o}>Handling scroll</h3>`),s(l(e,{title:"Scrollable dialogs",file:"Scrollable"},null,i,o)),s(`<h3 id="different-modes" class="doc-heading doc-h3"${o}>Different modes</h3><p${o}>User cannot dismiss the Dialog by pressing ESCAPE key or by clicking/tapping on its backdrop.</p>`),s(l(e,{title:"Persistent",file:"Persistent"},null,i,o)),s(`<p${o}>Dialogs can also be a part of the page, without requiring immediate focus. It’s where “seamless” mode comes into play:</p>`),s(l(e,{title:"Seamless",file:"Seamless"},null,i,o)),s(`<h3 id="dialog-in-dialog" class="doc-heading doc-h3"${o}>Dialog in dialog</h3><p${o}>You are able to open dialogs on top of other dialogs, with infinite number of depth levels.</p>`),s(l(e,{title:"Inception",file:"Inception"},null,i,o)),s(`<h3 id="sizing" class="doc-heading doc-h3"${o}>Sizing</h3><p${o}>You are able to customize the size of the Dialogs. Notice we either tamper with the content’s style or we use <code class="doc-token"${o}>full-width</code> or <code class="doc-token"${o}>full-height</code> props:</p>`),s(l(e,{title:"Sizing examples",file:"Sizing"},null,i,o)),s(`<h2 id="cordova-capacitor-back-button" class="doc-heading doc-h2"${o}>Cordova/Capacitor back button</h2><p${o}>Quasar handles the back button for you by default so it can hide any opened Dialogs instead of the default behavior which is to return to the previous page (which is not a nice user experience).</p><p${o}>However, should you wish to disable this behavior, edit your <code class="doc-token"${o}>/quasar.config</code> file:</p>`),s(l(c(Q),{tabs:["For Capacitor","For Cordova"]},{default:p((r,k,f,y)=>{if(k)k(l(m,{class:"q-pa-none",name:"For Capacitor"},{default:p((B,d,v,t)=>{if(d)d(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// quasar.config file</span>
<span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>framework</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>config</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
      <span class="token literal-property property"${t}>capacitor</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${t}>backButtonExit</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token operator"${t}>/</span><span class="token boolean"${t}>false</span><span class="token operator"${t}>/</span><span class="token string"${t}>&#39;*&#39;</span><span class="token operator"${t}>/</span><span class="token punctuation"${t}>[</span><span class="token string"${t}>&#39;/login&#39;</span><span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;/home&#39;</span><span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;/my-page&#39;</span><span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

        <span class="token comment"${t}>// On the other hand, the following completely</span>
        <span class="token comment"${t}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${t}>backButton</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token operator"${t}>/</span><span class="token boolean"${t}>false</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),d(l(g,null,null,v,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]}),_:1},f,y)),k(l(m,{class:"q-pa-none",name:"For Cordova"},{default:p((B,d,v,t)=>{if(d)d(`<pre class="doc-code"${t}><code${t}><span class="token comment"${t}>// quasar.config file</span>
<span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
  <span class="token literal-property property"${t}>framework</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>config</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
      <span class="token literal-property property"${t}>cordova</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${t}>backButtonExit</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token operator"${t}>/</span><span class="token boolean"${t}>false</span><span class="token operator"${t}>/</span><span class="token string"${t}>&#39;*&#39;</span><span class="token operator"${t}>/</span><span class="token punctuation"${t}>[</span><span class="token string"${t}>&#39;/login&#39;</span><span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;/home&#39;</span><span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;/my-page&#39;</span><span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

        <span class="token comment"${t}>// On the other hand, the following completely</span>
        <span class="token comment"${t}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${t}>backButton</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token operator"${t}>/</span><span class="token boolean"${t}>false</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),d(l(g,null,null,v,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]}),_:1},f,y));else return[n(m,{class:"q-pa-none",name:"For Capacitor"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1}),n(m,{class:"q-pa-none",name:"For Cordova"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1})]}),_:1},i,o));else return[n("p",null,"The QDialog component is a great way to offer the user the ability to choose a specific action or list of actions. They also can provide the user with important information, or require them to make a decision (or multiple decisions)."),n("p",null,"From a UI perspective, you can think of Dialogs as a type of floating modal, which covers only a portion of the screen. This means Dialogs should only be used for quick user actions, like verifying a password, getting a short App notification or selecting an option or options quickly."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Dialogs can also be used as a globally available method for more basic use cases, like the native JS alert(), prompt(), etc. For the latter behaviour, go to "),n(b,{to:"/quasar-plugins/dialog"},{default:p(()=>[a("Dialog Plugin")]),_:1}),a(" page.")])]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Masterclass TIP"),n("p",null,[a("Rather than cluttering your .vue templates with QDialogs, it’s best if you write a component for your dialog and use the "),n(b,{to:"/quasar-plugins/dialog#invoking-custom-component"},{default:p(()=>[a("Dialog Plugin")]),_:1}),a(" to invoke it from anywhere in your app.")])]),n(C,{file:"QDialog"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:r=>c(u)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"Note"),n("p",null,[a("It’s best that your QDialog main content is a QCard. However, if you are planning on using any other component (like QForm) or tag, make sure that the direct child of QDialog is rendered with a "),n("code",{class:"doc-token"},"<div>"),a(" tag (or wrap it with one yourself).")])]),n("h3",{id:"basic",class:"doc-heading doc-h3",onClick:r=>c(u)("basic")},"Basic",8,["onClick"]),n(e,{title:"Basic",file:"Basic"}),n("h3",{id:"styling",class:"doc-heading doc-h3",onClick:r=>c(u)("styling")},"Styling",8,["onClick"]),n(e,{title:"Styling",file:"Style"}),n(e,{title:"Backdrop filter (v2.14.8+)",file:"BackdropFilter"}),n("h3",{id:"positioning",class:"doc-heading doc-h3",onClick:r=>c(u)("positioning")},"Positioning",8,["onClick"]),n(e,{title:"Positions",file:"Positioning"}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Do not mistake “position” prop with the show/hide animation. If you want a custom animation, you should use "),n("code",{class:"doc-token"},"transition-show"),a(" and "),n("code",{class:"doc-token"},"transition-hide"),a(" which can be applied regardless of “position” or “maximized”.")])]),n(e,{title:"Maximized",file:"Maximized"}),n("h3",{id:"various-content",class:"doc-heading doc-h3",onClick:r=>c(u)("various-content")},"Various content",8,["onClick"]),n("p",null,"Dialogs can contain any content. Some examples:"),n(e,{title:"Various content",file:"VariousContent"}),n(e,{title:"With containerized QLayout",file:"Layout"}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"If you are going to use the containerized QLayout, you’ll need to put a width on your QDialog, if using left/right position, or a height, if using top/bottom position. You can use vw and vh units.")]),n("h3",{id:"handling-scroll",class:"doc-heading doc-h3",onClick:r=>c(u)("handling-scroll")},"Handling scroll",8,["onClick"]),n(e,{title:"Scrollable dialogs",file:"Scrollable"}),n("h3",{id:"different-modes",class:"doc-heading doc-h3",onClick:r=>c(u)("different-modes")},"Different modes",8,["onClick"]),n("p",null,"User cannot dismiss the Dialog by pressing ESCAPE key or by clicking/tapping on its backdrop."),n(e,{title:"Persistent",file:"Persistent"}),n("p",null,"Dialogs can also be a part of the page, without requiring immediate focus. It’s where “seamless” mode comes into play:"),n(e,{title:"Seamless",file:"Seamless"}),n("h3",{id:"dialog-in-dialog",class:"doc-heading doc-h3",onClick:r=>c(u)("dialog-in-dialog")},"Dialog in dialog",8,["onClick"]),n("p",null,"You are able to open dialogs on top of other dialogs, with infinite number of depth levels."),n(e,{title:"Inception",file:"Inception"}),n("h3",{id:"sizing",class:"doc-heading doc-h3",onClick:r=>c(u)("sizing")},"Sizing",8,["onClick"]),n("p",null,[a("You are able to customize the size of the Dialogs. Notice we either tamper with the content’s style or we use "),n("code",{class:"doc-token"},"full-width"),a(" or "),n("code",{class:"doc-token"},"full-height"),a(" props:")]),n(e,{title:"Sizing examples",file:"Sizing"}),n("h2",{id:"cordova-capacitor-back-button",class:"doc-heading doc-h2",onClick:r=>c(u)("cordova-capacitor-back-button")},"Cordova/Capacitor back button",8,["onClick"]),n("p",null,"Quasar handles the back button for you by default so it can hide any opened Dialogs instead of the default behavior which is to return to the previous page (which is not a nice user experience)."),n("p",null,[a("However, should you wish to disable this behavior, edit your "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(c(Q),{tabs:["For Capacitor","For Cordova"]},{default:p(()=>[n(m,{class:"q-pa-none",name:"For Capacitor"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1}),n(m,{class:"q-pa-none",name:"For Cordova"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// quasar.config file"),a(`
`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(g)]),_:1})]),_:1})]}),_:1},q))}}},x=w.setup;w.setup=(D,$)=>{const h=E();return(h.modules||(h.modules=new Set)).add("src/pages/vue-components/dialog.md"),x?x(D,$):void 0};const ln=H(w,[["__file","dialog.md"]]);export{ln as default};
