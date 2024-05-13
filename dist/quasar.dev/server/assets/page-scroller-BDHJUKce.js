import{provide as v,mergeProps as Q,withCtx as b,createVNode as t,createTextVNode as p,unref as l,useSSRContext as P}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as s}from"./page-utils-C-QWsEHe.js";import{D as S}from"./DocPage-DKr-0pQn.js";import{D as a}from"./DocExample-BcaABDtE.js";import{D as m}from"./DocApi-Df9ryd6x.js";import{_ as x}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"page-scroller",__ssrInlineRender:!0,setup(u){v("_q_ex",{name:"QPageScroller"});const c=[{name:"Layout",category:"Layout and Grid",path:"/layout/layout"},{name:"Layout Page",category:"Layout and Grid",path:"/layout/page"}],i=[{id:"qpagescroller-api",title:"2. QPageScroller API",deep:!0},{id:"usage",title:"3. Usage"},{id:"basic",title:"3.1. Basic",sub:!0},{id:"expanded",title:"3.2. Expanded",sub:!0},{id:"reverse",title:"3.3. Reverse",sub:!0}];return(k,f,y,w)=>{f(r(S,Q({title:"Layout QPageScroller",desc:"How to use the QPageScroller component. Places components that will appear on screen after user scrolls the page.",heading:"","edit-link":"layout/page-scroller",toc:i,related:c},w),{default:b(($,o,n,e)=>{if(o)o(`<p${e}>The QPageScroller component helps in placing DOM elements / components wrapped by it into a static position within the content area of your QPage, no matter where the user scrolls.</p><p${e}>The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or drawer(s), even if those are not configured to be fixed. In the latter case, the position will be offset so that the overlap won’t occur. Try it out with a non-fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won’t overlap with the footer.</p><p${e}>Essentially QPageScroller is very similar to QPageSticky. Whereas a QPageSticky component is always visible, a QPageScroller component only appears after a <code class="doc-token"${e}>scroll-offset</code> (property) is reached. Once visible, the user can click on it to quickly get back to the top of the page via <code class="doc-token"${e}>duration</code> property.</p>`),o(r(m,{file:"QPageScroller"},null,n,e)),o(`<h2 id="usage" class="doc-heading doc-h2"${e}>Usage</h2><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>Since QPageScroller needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QPageScroller.</p></div><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><ul${e}><li${e}>In order for QPageScroller to work, it must be placed within a QLayout component.</li><li${e}>QPageScroller must be the last child element within its parent, so it can display on top of other content</li></ul></div><h3 id="basic" class="doc-heading doc-h3"${e}>Basic</h3>`),o(r(a,{title:"Basic",file:"Basic"},null,n,e)),o(`<h3 id="expanded" class="doc-heading doc-h3"${e}>Expanded</h3>`),o(r(a,{title:"Expanded",file:"Expanded"},null,n,e)),o(`<h3 id="reverse" class="doc-heading doc-h3"${e}>Reverse</h3>`),o(r(a,{title:"Reverse",file:"Reverse"},null,n,e));else return[t("p",null,"The QPageScroller component helps in placing DOM elements / components wrapped by it into a static position within the content area of your QPage, no matter where the user scrolls."),t("p",null,"The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or drawer(s), even if those are not configured to be fixed. In the latter case, the position will be offset so that the overlap won’t occur. Try it out with a non-fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won’t overlap with the footer."),t("p",null,[p("Essentially QPageScroller is very similar to QPageSticky. Whereas a QPageSticky component is always visible, a QPageScroller component only appears after a "),t("code",{class:"doc-token"},"scroll-offset"),p(" (property) is reached. Once visible, the user can click on it to quickly get back to the top of the page via "),t("code",{class:"doc-token"},"duration"),p(" property.")]),t(m,{file:"QPageScroller"}),t("h2",{id:"usage",class:"doc-heading doc-h2",onClick:d=>l(s)("usage")},"Usage",8,["onClick"]),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"Since QPageScroller needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QPageScroller.")]),t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("ul",null,[t("li",null,"In order for QPageScroller to work, it must be placed within a QLayout component."),t("li",null,"QPageScroller must be the last child element within its parent, so it can display on top of other content")])]),t("h3",{id:"basic",class:"doc-heading doc-h3",onClick:d=>l(s)("basic")},"Basic",8,["onClick"]),t(a,{title:"Basic",file:"Basic"}),t("h3",{id:"expanded",class:"doc-heading doc-h3",onClick:d=>l(s)("expanded")},"Expanded",8,["onClick"]),t(a,{title:"Expanded",file:"Expanded"}),t("h3",{id:"reverse",class:"doc-heading doc-h3",onClick:d=>l(s)("reverse")},"Reverse",8,["onClick"]),t(a,{title:"Reverse",file:"Reverse"})]}),_:1},y))}}},g=h.setup;h.setup=(u,c)=>{const i=P();return(i.modules||(i.modules=new Set)).add("src/pages/layout/page-scroller.md"),g?g(u,c):void 0};const J=x(h,[["__file","page-scroller.md"]]);export{J as default};
