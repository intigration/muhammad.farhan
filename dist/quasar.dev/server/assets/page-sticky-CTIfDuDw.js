import{provide as f,mergeProps as b,withCtx as k,createVNode as t,unref as l,useSSRContext as x}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c}from"./page-utils-C-QWsEHe.js";import{D as Q}from"./DocPage-DKr-0pQn.js";import{D as n}from"./DocExample-BcaABDtE.js";import{D as u}from"./DocApi-Df9ryd6x.js";import{_ as v}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const p={__name:"page-sticky",__ssrInlineRender:!0,setup(d){f("_q_ex",{name:"QPageSticky"});const r=[{name:"Layout",category:"Layout and Grid",path:"/layout/layout"},{name:"Layout Page",category:"Layout and Grid",path:"/layout/page"}],a=[{id:"qpagesticky-api",title:"2. QPageSticky API",deep:!0},{id:"usage",title:"3. Usage"},{id:"basic",title:"3.1. Basic",sub:!0},{id:"expanded",title:"3.2. Expanded",sub:!0}];return(P,g,w,y)=>{g(i(Q,b({title:"Layout QPageSticky",desc:"How to use the QPageSticky component. Statically place components on the layout without overlapping with header/footer/sidebars.",heading:"","edit-link":"layout/page-sticky",toc:a,related:r},y),{default:k((S,o,s,e)=>{if(o)o(`<p${e}>The QPageSticky component helps in placing DOM elements / components wrapped by it into a static position within the content area of your QPage, no matter where the user scrolls.</p><p${e}>The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or drawer(s), even if those are not configured to be fixed. In the latter case, the position will be offset so that the overlap won’t occur. Try it out with a non-fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won’t overlap with the footer.</p>`),o(i(u,{file:"QPageSticky"},null,s,e)),o(`<h2 id="usage" class="doc-heading doc-h2"${e}>Usage</h2><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>Since QPageSticky needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QPageSticky.</p></div><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><ul${e}><li${e}>In order for QPageSticky to work, it must be placed within a QLayout component.</li><li${e}>QPageSticky must be the last child element within its parent, so it can display on top of other content</li></ul></div><h3 id="basic" class="doc-heading doc-h3"${e}>Basic</h3><p${e}>In the example below, click on the menu buttons to show/hide Drawers, scroll the inner page, and resize the browser window so that the enclosing QLayout hits the Drawer’s 700px and 500px breakpoints.</p>`),o(i(n,{title:"Basic",file:"Basic"},null,s,e)),o(`<h3 id="expanded" class="doc-heading doc-h3"${e}>Expanded</h3><p${e}>In the example below, click on the menu buttons to show/hide Drawers, scroll the inner page, and resize the browser window so that the enclosing QLayout hits the Drawer’s 700px and 500px breakpoints.</p><p${e}>By using expanded QPageSticky you can, for example, have a page-specific QToolbar as below.</p>`),o(i(n,{title:"Expanded",file:"Expanded"},null,s,e));else return[t("p",null,"The QPageSticky component helps in placing DOM elements / components wrapped by it into a static position within the content area of your QPage, no matter where the user scrolls."),t("p",null,"The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or drawer(s), even if those are not configured to be fixed. In the latter case, the position will be offset so that the overlap won’t occur. Try it out with a non-fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won’t overlap with the footer."),t(u,{file:"QPageSticky"}),t("h2",{id:"usage",class:"doc-heading doc-h2",onClick:h=>l(c)("usage")},"Usage",8,["onClick"]),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"Since QPageSticky needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QPageSticky.")]),t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("ul",null,[t("li",null,"In order for QPageSticky to work, it must be placed within a QLayout component."),t("li",null,"QPageSticky must be the last child element within its parent, so it can display on top of other content")])]),t("h3",{id:"basic",class:"doc-heading doc-h3",onClick:h=>l(c)("basic")},"Basic",8,["onClick"]),t("p",null,"In the example below, click on the menu buttons to show/hide Drawers, scroll the inner page, and resize the browser window so that the enclosing QLayout hits the Drawer’s 700px and 500px breakpoints."),t(n,{title:"Basic",file:"Basic"}),t("h3",{id:"expanded",class:"doc-heading doc-h3",onClick:h=>l(c)("expanded")},"Expanded",8,["onClick"]),t("p",null,"In the example below, click on the menu buttons to show/hide Drawers, scroll the inner page, and resize the browser window so that the enclosing QLayout hits the Drawer’s 700px and 500px breakpoints."),t("p",null,"By using expanded QPageSticky you can, for example, have a page-specific QToolbar as below."),t(n,{title:"Expanded",file:"Expanded"})]}),_:1},w))}}},m=p.setup;p.setup=(d,r)=>{const a=x();return(a.modules||(a.modules=new Set)).add("src/pages/layout/page-sticky.md"),m?m(d,r):void 0};const j=v(p,[["__file","page-sticky.md"]]);export{j as default};
