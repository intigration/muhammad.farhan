import{resolveComponent as S,mergeProps as y,withCtx as c,createVNode as t,createTextVNode as e,unref as p,useSSRContext as v}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as F}from"./page-utils-C-QWsEHe.js";import{D as w}from"./DocPage-DKr-0pQn.js";import{_ as C}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const k={__name:"positioning",__ssrInlineRender:!0,setup(m){const r=[{name:"Typography",category:"Style & Identity",path:"/style/typography"},{name:"Visibility",category:"Style & Identity",path:"/style/visibility"},{name:"Spacing",category:"Style & Identity",path:"/style/spacing"}],a=[{id:"alignment",title:"2. Alignment"}];return(D,$,g,x)=>{const s=S("q-markup-table");$(i(w,y({title:"CSS Positioning Classes",desc:"The list of CSS classes supplied by Quasar to simplify the positioning of a DOM element.",heading:"","edit-link":"style/positioning",toc:a,related:r},x),{default:c((N,n,u,l)=>{if(n)n(`<p${l}>There are CSS classes supplied by Quasar to help you position a DOM element easily:</p>`),n(i(s,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c((f,d,b,o)=>{if(d)d(`<thead${o}><tr${o}><th class="text-left"${o}>Class Name</th><th class="text-left"${o}>Description</th></tr></thead><tbody${o}><tr${o}><td${o}><code class="doc-token"${o}>fullscreen</code></td><td${o}>Fix position covering all window real-estate</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed</code></td><td${o}>Set <code class="doc-token"${o}>position</code> to <code class="doc-token"${o}>fixed</code> without specifying <code class="doc-token"${o}>top</code>, <code class="doc-token"${o}>left</code>, <code class="doc-token"${o}>right</code> or <code class="doc-token"${o}>bottom</code> properties</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-center</code></td><td${o}>Set position to <code class="doc-token"${o}>fixed</code> but in the middle of window.</td></tr><tr${o}><td${o}><code class="doc-token"${o}>absolute</code></td><td${o}>Set <code class="doc-token"${o}>position</code> to <code class="doc-token"${o}>absolute</code> without specifying <code class="doc-token"${o}>top</code>, <code class="doc-token"${o}>left</code>, <code class="doc-token"${o}>right</code> or <code class="doc-token"${o}>bottom</code> properties</td></tr><tr${o}><td${o}><code class="doc-token"${o}>absolute-center</code></td><td${o}>Set position to <code class="doc-token"${o}>absolute</code> but in the middle of the container (container needs relative position).</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-top</code> <code class="doc-token"${o}>absolute-top</code></td><td${o}>Fixed or absolute position to top of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-right</code> <code class="doc-token"${o}>absolute-right</code></td><td${o}>Fixed or absolute position to the right edge of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-bottom</code> <code class="doc-token"${o}>absolute-bottom</code></td><td${o}>Fixed or absolute position to bottom of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-left</code> <code class="doc-token"${o}>absolute-left</code></td><td${o}>Fixed or absolute position to the left edge of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-top-left</code> <code class="doc-token"${o}>absolute-top-left</code></td><td${o}>Fixed or absolute position to top left of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-top-right</code> <code class="doc-token"${o}>absolute-top-right</code></td><td${o}>Fixed or absolute position to top right of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-bottom-left</code> <code class="doc-token"${o}>absolute-bottom-left</code></td><td${o}>Fixed or absolute position to bottom left of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-bottom-right</code> <code class="doc-token"${o}>absolute-bottom-right</code></td><td${o}>Fixed or absolute position to bottom right of screen</td></tr><tr${o}><td${o}><code class="doc-token"${o}>fixed-full</code> <code class="doc-token"${o}>absolute-full</code></td><td${o}>Fixed or absolute position to all screen edges</td></tr><tr${o}><td${o}><code class="doc-token"${o}>relative-position</code></td><td${o}>Set position to <code class="doc-token"${o}>relative</code></td></tr></tbody>`);else return[t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fullscreen")]),t("td",null,"Fix position covering all window real-estate")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed")]),t("td",null,[e("Set "),t("code",{class:"doc-token"},"position"),e(" to "),t("code",{class:"doc-token"},"fixed"),e(" without specifying "),t("code",{class:"doc-token"},"top"),e(", "),t("code",{class:"doc-token"},"left"),e(", "),t("code",{class:"doc-token"},"right"),e(" or "),t("code",{class:"doc-token"},"bottom"),e(" properties")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-center")]),t("td",null,[e("Set position to "),t("code",{class:"doc-token"},"fixed"),e(" but in the middle of window.")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"absolute")]),t("td",null,[e("Set "),t("code",{class:"doc-token"},"position"),e(" to "),t("code",{class:"doc-token"},"absolute"),e(" without specifying "),t("code",{class:"doc-token"},"top"),e(", "),t("code",{class:"doc-token"},"left"),e(", "),t("code",{class:"doc-token"},"right"),e(" or "),t("code",{class:"doc-token"},"bottom"),e(" properties")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"absolute-center")]),t("td",null,[e("Set position to "),t("code",{class:"doc-token"},"absolute"),e(" but in the middle of the container (container needs relative position).")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-top"),e(),t("code",{class:"doc-token"},"absolute-top")]),t("td",null,"Fixed or absolute position to top of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-right"),e(),t("code",{class:"doc-token"},"absolute-right")]),t("td",null,"Fixed or absolute position to the right edge of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-bottom"),e(),t("code",{class:"doc-token"},"absolute-bottom")]),t("td",null,"Fixed or absolute position to bottom of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-left"),e(),t("code",{class:"doc-token"},"absolute-left")]),t("td",null,"Fixed or absolute position to the left edge of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-top-left"),e(),t("code",{class:"doc-token"},"absolute-top-left")]),t("td",null,"Fixed or absolute position to top left of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-top-right"),e(),t("code",{class:"doc-token"},"absolute-top-right")]),t("td",null,"Fixed or absolute position to top right of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-bottom-left"),e(),t("code",{class:"doc-token"},"absolute-bottom-left")]),t("td",null,"Fixed or absolute position to bottom left of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-bottom-right"),e(),t("code",{class:"doc-token"},"absolute-bottom-right")]),t("td",null,"Fixed or absolute position to bottom right of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-full"),e(),t("code",{class:"doc-token"},"absolute-full")]),t("td",null,"Fixed or absolute position to all screen edges")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"relative-position")]),t("td",null,[e("Set position to "),t("code",{class:"doc-token"},"relative")])])])]}),_:1},u,l)),n(`<h2 id="alignment" class="doc-heading doc-h2"${l}>Alignment</h2>`),n(i(s,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c((f,d,b,o)=>{if(d)d(`<thead${o}><tr${o}><th class="text-left"${o}>Class Name</th><th class="text-left"${o}>Description</th></tr></thead><tbody${o}><tr${o}><td${o}><code class="doc-token"${o}>float-left</code></td><td${o}>Float to the left</td></tr><tr${o}><td${o}><code class="doc-token"${o}>float-right</code></td><td${o}>Float to the right</td></tr><tr${o}><td${o}><code class="doc-token"${o}>on-left</code></td><td${o}>Sets a small margin to the right; commonly used for icon elements with other siblings</td></tr><tr${o}><td${o}><code class="doc-token"${o}>on-right</code></td><td${o}>Sets a small margin to the left; commonly used for icon elements with other siblings</td></tr></tbody>`);else return[t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"float-left")]),t("td",null,"Float to the left")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"float-right")]),t("td",null,"Float to the right")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"on-left")]),t("td",null,"Sets a small margin to the right; commonly used for icon elements with other siblings")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"on-right")]),t("td",null,"Sets a small margin to the left; commonly used for icon elements with other siblings")])])]}),_:1},u,l)),n(`<div class="doc-note doc-note--tip"${l}><p class="doc-note__title"${l}>TIP</p><p${l}>Instead of using <code class="doc-token"${l}>float-left</code> or <code class="doc-token"${l}>float-right</code> we recommend that you read on the Quasar Grid System.</p></div><p${l}>Vertical alignment:</p>`),n(i(s,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c((f,d,b,o)=>{if(d)d(`<thead${o}><tr${o}><th class="text-left"${o}>Class Name</th><th class="text-left"${o}>Description</th></tr></thead><tbody${o}><tr${o}><td${o}><code class="doc-token"${o}>vertical-top</code></td><td${o}>Set CSS vertical alignment to <code class="doc-token"${o}>top</code></td></tr><tr${o}><td${o}><code class="doc-token"${o}>vertical-middle</code></td><td${o}>Set CSS vertical alignment to <code class="doc-token"${o}>middle</code></td></tr><tr${o}><td${o}><code class="doc-token"${o}>vertical-bottom</code></td><td${o}>Set CSS vertical alignment to <code class="doc-token"${o}>bottom</code></td></tr></tbody>`);else return[t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"vertical-top")]),t("td",null,[e("Set CSS vertical alignment to "),t("code",{class:"doc-token"},"top")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"vertical-middle")]),t("td",null,[e("Set CSS vertical alignment to "),t("code",{class:"doc-token"},"middle")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"vertical-bottom")]),t("td",null,[e("Set CSS vertical alignment to "),t("code",{class:"doc-token"},"bottom")])])])]}),_:1},u,l));else return[t("p",null,"There are CSS classes supplied by Quasar to help you position a DOM element easily:"),t(s,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c(()=>[t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fullscreen")]),t("td",null,"Fix position covering all window real-estate")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed")]),t("td",null,[e("Set "),t("code",{class:"doc-token"},"position"),e(" to "),t("code",{class:"doc-token"},"fixed"),e(" without specifying "),t("code",{class:"doc-token"},"top"),e(", "),t("code",{class:"doc-token"},"left"),e(", "),t("code",{class:"doc-token"},"right"),e(" or "),t("code",{class:"doc-token"},"bottom"),e(" properties")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-center")]),t("td",null,[e("Set position to "),t("code",{class:"doc-token"},"fixed"),e(" but in the middle of window.")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"absolute")]),t("td",null,[e("Set "),t("code",{class:"doc-token"},"position"),e(" to "),t("code",{class:"doc-token"},"absolute"),e(" without specifying "),t("code",{class:"doc-token"},"top"),e(", "),t("code",{class:"doc-token"},"left"),e(", "),t("code",{class:"doc-token"},"right"),e(" or "),t("code",{class:"doc-token"},"bottom"),e(" properties")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"absolute-center")]),t("td",null,[e("Set position to "),t("code",{class:"doc-token"},"absolute"),e(" but in the middle of the container (container needs relative position).")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-top"),e(),t("code",{class:"doc-token"},"absolute-top")]),t("td",null,"Fixed or absolute position to top of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-right"),e(),t("code",{class:"doc-token"},"absolute-right")]),t("td",null,"Fixed or absolute position to the right edge of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-bottom"),e(),t("code",{class:"doc-token"},"absolute-bottom")]),t("td",null,"Fixed or absolute position to bottom of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-left"),e(),t("code",{class:"doc-token"},"absolute-left")]),t("td",null,"Fixed or absolute position to the left edge of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-top-left"),e(),t("code",{class:"doc-token"},"absolute-top-left")]),t("td",null,"Fixed or absolute position to top left of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-top-right"),e(),t("code",{class:"doc-token"},"absolute-top-right")]),t("td",null,"Fixed or absolute position to top right of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-bottom-left"),e(),t("code",{class:"doc-token"},"absolute-bottom-left")]),t("td",null,"Fixed or absolute position to bottom left of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-bottom-right"),e(),t("code",{class:"doc-token"},"absolute-bottom-right")]),t("td",null,"Fixed or absolute position to bottom right of screen")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"fixed-full"),e(),t("code",{class:"doc-token"},"absolute-full")]),t("td",null,"Fixed or absolute position to all screen edges")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"relative-position")]),t("td",null,[e("Set position to "),t("code",{class:"doc-token"},"relative")])])])]),_:1}),t("h2",{id:"alignment",class:"doc-heading doc-h2",onClick:f=>p(F)("alignment")},"Alignment",8,["onClick"]),t(s,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c(()=>[t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"float-left")]),t("td",null,"Float to the left")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"float-right")]),t("td",null,"Float to the right")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"on-left")]),t("td",null,"Sets a small margin to the right; commonly used for icon elements with other siblings")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"on-right")]),t("td",null,"Sets a small margin to the left; commonly used for icon elements with other siblings")])])]),_:1}),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,[e("Instead of using "),t("code",{class:"doc-token"},"float-left"),e(" or "),t("code",{class:"doc-token"},"float-right"),e(" we recommend that you read on the Quasar Grid System.")])]),t("p",null,"Vertical alignment:"),t(s,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:c(()=>[t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"vertical-top")]),t("td",null,[e("Set CSS vertical alignment to "),t("code",{class:"doc-token"},"top")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"vertical-middle")]),t("td",null,[e("Set CSS vertical alignment to "),t("code",{class:"doc-token"},"middle")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"vertical-bottom")]),t("td",null,[e("Set CSS vertical alignment to "),t("code",{class:"doc-token"},"bottom")])])])]),_:1})]}),_:1},g))}}},h=k.setup;k.setup=(m,r)=>{const a=v();return(a.modules||(a.modules=new Set)).add("src/pages/style/positioning.md"),h?h(m,r):void 0};const z=C(k,[["__file","positioning.md"]]);export{z as default};
