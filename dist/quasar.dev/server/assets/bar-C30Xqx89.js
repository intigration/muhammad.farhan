import{provide as W,mergeProps as C,withCtx as a,createTextVNode as r,createVNode as o,unref as p,useSSRContext as E}from"vue";import{ssrRenderComponent as n}from"vue/server-renderer";import{c as f}from"./page-utils-C-QWsEHe.js";import{D as $,a as c}from"./DocPage-DKr-0pQn.js";import{D as i}from"./DocExample-BcaABDtE.js";import{D as b}from"./DocApi-Df9ryd6x.js";import{_ as B}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"bar",__ssrInlineRender:!0,setup(h){W("_q_ex",{name:"QBar"});const u=[{name:"Frameless Electron Window",category:"Electron mode",path:"/quasar-cli-vite/developing-electron-apps/frameless-electron-window"},{name:"Frameless Electron Window",category:"Electron mode",path:"/quasar-cli-webpack/developing-electron-apps/frameless-electron-window"}],m=[{id:"qbar-api",title:"2. QBar API",deep:!0},{id:"usage",title:"3. Usage"},{id:"styling",title:"3.1. Styling",sub:!0},{id:"with-other-components",title:"3.2. With other components",sub:!0},{id:"frameless-electron-window",title:"3.3. Frameless Electron Window",sub:!0}];return(F,Q,S,k)=>{Q(n($,C({title:"Bar",desc:"The QBar Vue component is used to create the top bar on different platforms.",heading:"","edit-link":"vue-components/bar",toc:m,related:u},k),{default:a((x,t,l,e)=>{if(t)t(`<p${e}>The QBar is a small component for creating the top bar on different types of mobile or desktop websites/apps. For instance, in desktop apps QBar will have things like the close, minimize or maximize buttons and other menu controls for your application.</p><p${e}>QBar is especially useful for frame-less Electron apps where you integrate it in the QHeader.</p>`),t(n(b,{file:"QBar"},null,l,e)),t(`<h2 id="usage" class="doc-heading doc-h2"${e}>Usage</h2><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>For responsiveness, use `),t(n(c,{to:"/style/visibility#Window-Width-Related"},{default:a((d,s,g,y)=>{if(s)s("Visibility");else return[r("Visibility")]}),_:1},l,e)),t(" Quasar CSS Classes. For finer tuning you can go write your own CSS media breakpoints or even go with "),t(n(c,{to:"/vue-components/resize-observer"},{default:a((d,s,g,y)=>{if(s)s("QResizeObserver");else return[r("QResizeObserver")]}),_:1},l,e)),t(`.</p></div><h3 id="styling" class="doc-heading doc-h3"${e}>Styling</h3>`),t(n(i,{title:"MacOS style",file:"MacOS","no-edit":""},null,l,e)),t(n(i,{title:"Windows style",file:"Windows"},null,l,e)),t(n(i,{title:"iOS style",file:"iOS","no-edit":""},null,l,e)),t(n(i,{title:"Android style",file:"Android"},null,l,e)),t(`<h3 id="with-other-components" class="doc-heading doc-h3"${e}>With other components</h3>`),t(n(i,{title:"QMenu",file:"Menu"},null,l,e)),t(n(i,{title:"QDialog",file:"Dialog"},null,l,e)),t(n(i,{title:"QHeader with QToolbar",file:"Header"},null,l,e)),t(`<h3 id="frameless-electron-window" class="doc-heading doc-h3"${e}>Frameless Electron Window</h3><p${e}>QBar component can come in really handy when developing Electron apps, especially if you choose to use a frameless window.</p><p${e}>Read more on `),t(n(c,{to:"/quasar-cli/developing-electron-apps/frameless-electron-window"},{default:a((d,s,g,y)=>{if(s)s("Frameless Electron Window");else return[r("Frameless Electron Window")]}),_:1},l,e)),t(" page.</p>");else return[o("p",null,"The QBar is a small component for creating the top bar on different types of mobile or desktop websites/apps. For instance, in desktop apps QBar will have things like the close, minimize or maximize buttons and other menu controls for your application."),o("p",null,"QBar is especially useful for frame-less Electron apps where you integrate it in the QHeader."),o(b,{file:"QBar"}),o("h2",{id:"usage",class:"doc-heading doc-h2",onClick:d=>p(f)("usage")},"Usage",8,["onClick"]),o("div",{class:"doc-note doc-note--tip"},[o("p",{class:"doc-note__title"},"TIP"),o("p",null,[r("For responsiveness, use "),o(c,{to:"/style/visibility#Window-Width-Related"},{default:a(()=>[r("Visibility")]),_:1}),r(" Quasar CSS Classes. For finer tuning you can go write your own CSS media breakpoints or even go with "),o(c,{to:"/vue-components/resize-observer"},{default:a(()=>[r("QResizeObserver")]),_:1}),r(".")])]),o("h3",{id:"styling",class:"doc-heading doc-h3",onClick:d=>p(f)("styling")},"Styling",8,["onClick"]),o(i,{title:"MacOS style",file:"MacOS","no-edit":""}),o(i,{title:"Windows style",file:"Windows"}),o(i,{title:"iOS style",file:"iOS","no-edit":""}),o(i,{title:"Android style",file:"Android"}),o("h3",{id:"with-other-components",class:"doc-heading doc-h3",onClick:d=>p(f)("with-other-components")},"With other components",8,["onClick"]),o(i,{title:"QMenu",file:"Menu"}),o(i,{title:"QDialog",file:"Dialog"}),o(i,{title:"QHeader with QToolbar",file:"Header"}),o("h3",{id:"frameless-electron-window",class:"doc-heading doc-h3",onClick:d=>p(f)("frameless-electron-window")},"Frameless Electron Window",8,["onClick"]),o("p",null,"QBar component can come in really handy when developing Electron apps, especially if you choose to use a frameless window."),o("p",null,[r("Read more on "),o(c,{to:"/quasar-cli/developing-electron-apps/frameless-electron-window"},{default:a(()=>[r("Frameless Electron Window")]),_:1}),r(" page.")])]}),_:1},S))}}},v=w.setup;w.setup=(h,u)=>{const m=E();return(m.modules||(m.modules=new Set)).add("src/pages/vue-components/bar.md"),v?v(h,u):void 0};const Z=B(w,[["__file","bar.md"]]);export{Z as default};
