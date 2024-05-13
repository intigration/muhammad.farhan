import{provide as h,mergeProps as v,withCtx as C,createVNode as t,unref as y,createTextVNode as l,useSSRContext as x}from"vue";import{ssrRenderComponent as n}from"vue/server-renderer";import{c as P}from"./page-utils-C-QWsEHe.js";import{D as S}from"./DocPage-DKr-0pQn.js";import{D as e}from"./DocExample-BcaABDtE.js";import{D as m}from"./DocApi-Df9ryd6x.js";import{_ as b}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const c={__name:"circular-progress",__ssrInlineRender:!0,setup(u){h("_q_ex",{name:"QCircularProgress"});const s=[{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress"},{name:"Inner Loading",category:"Vue Components",path:"/vue-components/inner-loading"},{name:"Spinners",category:"Vue Components",path:"/vue-components/spinners"},{name:"Skeleton",category:"Vue Components",path:"/vue-components/skeleton"},{name:"Loading",category:"Quasar Plugins",path:"/quasar-plugins/loading"},{name:"Loading Bar",category:"Quasar Plugins",path:"/quasar-plugins/loading-bar"}],i=[{id:"qcircularprogress-api",title:"2. QCircularProgress API",deep:!0},{id:"usage",title:"3. Usage"}];return(z,p,g,f)=>{p(n(S,v({title:"Circular Progress",desc:"The QCircularProgress Vue component displays a colored circular loading indicator. The bar can either have a determinate progress, or an indeterminate animation.",heading:"","edit-link":"vue-components/circular-progress",toc:i,related:s},f),{default:C((Q,o,a,r)=>{if(o)o(`<p${r}>The QCircularProgress component displays a colored circular progress. The bar can either have a determinate progress, or an indeterminate animation. It should be used to inform the user that an action is occurring in the background.</p>`),o(n(m,{file:"QCircularProgress"},null,a,r)),o(`<h2 id="usage" class="doc-heading doc-h2"${r}>Usage</h2><p${r}>By default, QCircularProgress inherits current text color (as arc progress color and inner label color) and current font size (as component size). For customization, you can use the size and color related props.</p>`),o(n(e,{title:"Determined state",file:"Determined"},null,a,r)),o(n(e,{title:"Determinate and reverse",file:"Reverse"},null,a,r)),o(n(e,{title:"Offset angle",file:"Angle"},null,a,r)),o(n(e,{title:"Custom min/max (same model)",file:"CustomMinMax"},null,a,r)),o(`<p${r}>In the example below, <code class="doc-token"${r}>show-value</code> property also enables the default slot, so you can fill it with custom content, like even a QAvatar or a QTooltip. The <code class="doc-token"${r}>font-size</code> prop refers to the inner label font size.</p>`),o(n(e,{title:"Show value",file:"ShowValue"},null,a,r)),o(n(e,{title:"Indeterminate state",file:"Indeterminate"},null,a,r)),o(n(e,{title:"Rounded arc of progress (v2.8.4+)",file:"RoundedStyle"},null,a,r)),o(n(e,{title:"Standard sizes",file:"StandardSizes"},null,a,r));else return[t("p",null,"The QCircularProgress component displays a colored circular progress. The bar can either have a determinate progress, or an indeterminate animation. It should be used to inform the user that an action is occurring in the background."),t(m,{file:"QCircularProgress"}),t("h2",{id:"usage",class:"doc-heading doc-h2",onClick:k=>y(P)("usage")},"Usage",8,["onClick"]),t("p",null,"By default, QCircularProgress inherits current text color (as arc progress color and inner label color) and current font size (as component size). For customization, you can use the size and color related props."),t(e,{title:"Determined state",file:"Determined"}),t(e,{title:"Determinate and reverse",file:"Reverse"}),t(e,{title:"Offset angle",file:"Angle"}),t(e,{title:"Custom min/max (same model)",file:"CustomMinMax"}),t("p",null,[l("In the example below, "),t("code",{class:"doc-token"},"show-value"),l(" property also enables the default slot, so you can fill it with custom content, like even a QAvatar or a QTooltip. The "),t("code",{class:"doc-token"},"font-size"),l(" prop refers to the inner label font size.")]),t(e,{title:"Show value",file:"ShowValue"}),t(e,{title:"Indeterminate state",file:"Indeterminate"}),t(e,{title:"Rounded arc of progress (v2.8.4+)",file:"RoundedStyle"}),t(e,{title:"Standard sizes",file:"StandardSizes"})]}),_:1},g))}}},d=c.setup;c.setup=(u,s)=>{const i=x();return(i.modules||(i.modules=new Set)).add("src/pages/vue-components/circular-progress.md"),d?d(u,s):void 0};const K=b(c,[["__file","circular-progress.md"]]);export{K as default};
