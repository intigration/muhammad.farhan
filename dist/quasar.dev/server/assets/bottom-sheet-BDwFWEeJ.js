import{provide as q,mergeProps as D,withCtx as r,unref as k,createVNode as t,createTextVNode as n,useSSRContext as P}from"vue";import{ssrRenderComponent as e}from"vue/server-renderer";import{c as A}from"./page-utils-C-QWsEHe.js";import{D as C}from"./DocPage-DKr-0pQn.js";import{D as c}from"./DocExample-BcaABDtE.js";import{D as f}from"./DocApi-Df9ryd6x.js";import{D as g}from"./DocInstallation-DgMazQjg.js";import{D as $}from"./DocPrerender-DPOnWPFO.js";import{C as m}from"./CopyButton-l3ndfN49.js";import{_ as x}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"bottom-sheet",__ssrInlineRender:!0,setup(d){q("_q_ex",{name:"BottomSheet"});const l=[{name:"Dialog",category:"Quasar Plugins",path:"/quasar-plugins/dialog"},{name:"Dialog",category:"Vue Components",path:"/vue-components/dialog"}],p=[{id:"bottomsheet-api",title:"2. BottomSheet API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"usage",title:"4. Usage"}];return(V,b,w,S)=>{b(e(C,D({title:"Bottom Sheet Plugin",desc:"A Quasar plugin for displaying a list of user actions that slides up from the bottom edge of the app window.",heading:"","edit-link":"quasar-plugins/bottom-sheet",toc:p,related:l},S),{default:r((T,o,i,s)=>{if(o)o(`<p${s}>Bottom Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Bottom Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation.</p><p${s}>The Bottom Sheet always appears above any other components on the page, and must be dismissed in order to interact with the underlying content. When it is triggered, the rest of the page darkens to give more focus to the Bottom Sheet options.</p><p${s}>Bottom Sheets can be displayed as a list or as a grid, with icons or with avatars. They can be used either as a component in your Vue file templates, or as a globally available method.</p>`),o(e(f,{file:"BottomSheet"},null,i,s)),o(e(g,{plugins:"BottomSheet"},null,i,s)),o(`<h2 id="usage" class="doc-heading doc-h2"${s}>Usage</h2>`),o(e(k($),{title:"Outside of a Vue file"},{default:r((v,u,B,a)=>{if(u)u(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> BottomSheet <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>
BottomSheet<span class="token punctuation"${a}>.</span><span class="token function"${a}>create</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span> <span class="token operator"${a}>...</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span> <span class="token comment"${a}>// returns Object</span>

<span class="token comment"${a}>// inside of a Vue file</span>
<span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> useQuasar <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;quasar&#39;</span>
<span class="token function"${a}>setup</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> $q <span class="token operator"${a}>=</span> <span class="token function"${a}>useQuasar</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
  $q<span class="token punctuation"${a}>.</span><span class="token function"${a}>bottomSheet</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span> <span class="token operator"${a}>...</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span> <span class="token comment"${a}>// returns Object</span>
<span class="token punctuation"${a}>}</span></code></pre>`),u(e(m,null,null,B,a));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" BottomSheet "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`
BottomSheet`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"create"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token operator"},"..."),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token comment"},"// returns Object"),n(`

`),t("span",{class:"token comment"},"// inside of a Vue file"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useQuasar "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`
`),t("span",{class:"token function"},"setup"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token keyword"},"const"),n(" $q "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useQuasar"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
  $q`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"bottomSheet"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token operator"},"..."),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token comment"},"// returns Object"),n(`
`),t("span",{class:"token punctuation"},"}")])]),t(m)]}),_:1},i,s)),o(`<div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>When user hits the phone/tablet back button (only for Cordova apps), the Action Sheet will get closed automatically.</p><p${s}>Also, when on a desktop browser, hitting the <code class="doc-token"${s}>ESCAPE</code> key also closes the Action Sheet.</p></div>`),o(e(c,{title:"List and Grid",file:"Basic"},null,i,s)),o(e(c,{title:"Force dark mode",file:"Dark"},null,i,s)),o(`<div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>For an exhaustive list of options, please check API section.</p></div>`);else return[t("p",null,"Bottom Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Bottom Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation."),t("p",null,"The Bottom Sheet always appears above any other components on the page, and must be dismissed in order to interact with the underlying content. When it is triggered, the rest of the page darkens to give more focus to the Bottom Sheet options."),t("p",null,"Bottom Sheets can be displayed as a list or as a grid, with icons or with avatars. They can be used either as a component in your Vue file templates, or as a globally available method."),t(f,{file:"BottomSheet"}),t(g,{plugins:"BottomSheet"}),t("h2",{id:"usage",class:"doc-heading doc-h2",onClick:v=>k(A)("usage")},"Usage",8,["onClick"]),t(k($),{title:"Outside of a Vue file"},{default:r(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" BottomSheet "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`
BottomSheet`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"create"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token operator"},"..."),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token comment"},"// returns Object"),n(`

`),t("span",{class:"token comment"},"// inside of a Vue file"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useQuasar "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`
`),t("span",{class:"token function"},"setup"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token keyword"},"const"),n(" $q "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useQuasar"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
  $q`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"bottomSheet"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token operator"},"..."),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token comment"},"// returns Object"),n(`
`),t("span",{class:"token punctuation"},"}")])]),t(m)]),_:1}),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"When user hits the phone/tablet back button (only for Cordova apps), the Action Sheet will get closed automatically."),t("p",null,[n("Also, when on a desktop browser, hitting the "),t("code",{class:"doc-token"},"ESCAPE"),n(" key also closes the Action Sheet.")])]),t(c,{title:"List and Grid",file:"Basic"}),t(c,{title:"Force dark mode",file:"Dark"}),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"For an exhaustive list of options, please check API section.")])]}),_:1},w))}}},y=h.setup;h.setup=(d,l)=>{const p=P();return(p.modules||(p.modules=new Set)).add("src/pages/quasar-plugins/bottom-sheet.md"),y?y(d,l):void 0};const nt=x(h,[["__file","bottom-sheet.md"]]);export{nt as default};
