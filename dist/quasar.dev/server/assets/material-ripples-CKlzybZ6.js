import{provide as k,mergeProps as C,withCtx as $,createVNode as i,createTextVNode as a,unref as r,useSSRContext as D}from"vue";import{ssrRenderComponent as n}from"vue/server-renderer";import{c as s}from"./page-utils-C-QWsEHe.js";import{D as R}from"./DocPage-DKr-0pQn.js";import{D as o}from"./DocExample-BcaABDtE.js";import{D as u}from"./DocApi-Df9ryd6x.js";import{D as m}from"./DocInstallation-DgMazQjg.js";import{_ as w}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"material-ripples",__ssrInlineRender:!0,setup(g){k("_q_ex",{name:"Ripple"});const d=[{id:"ripple-api",title:"2. Ripple API",deep:!0},{id:"configuration",title:"3. Configuration",deep:!0},{id:"usage",title:"4. Usage"},{id:"basic",title:"4.1. Basic",sub:!0},{id:"coloring",title:"4.2. Coloring",sub:!0},{id:"positioning",title:"4.3. Positioning",sub:!0},{id:"triggering-early",title:"4.4. Triggering early",sub:!0},{id:"disable",title:"4.5. Disable",sub:!0}];return(p,y,v,b)=>{y(n(R,C({title:"Material Ripples",desc:"Vue directive for easily adding material ripples to your components and DOM elements.",heading:"","edit-link":"vue-directives/material-ripples",toc:d},b),{default:$((S,t,l,e)=>{if(t)t(`<p${e}>Material Ripple effect can easily be added to any DOM element (or component) through the <code class="doc-token"${e}>v-ripple</code> Quasar directive.</p><div class="doc-note doc-note--danger"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Do not use this directive on components that already have material ripples baked in (example: <code class="doc-token"${e}>QBtn</code>). Rather configure the internal ripples through those component’s <code class="doc-token"${e}>ripple</code> property.</p></div>`),t(n(u,{file:"Ripple"},null,l,e)),t(n(m,{title:"Configuration",config:"ripple"},null,l,e)),t(`<h2 id="usage" class="doc-heading doc-h2"${e}>Usage</h2><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Make sure that your DOM element or component has CSS <code class="doc-token"${e}>position: relative</code> or Quasar CSS helper class <code class="doc-token"${e}>relative-position</code> attached to it.</p></div><h3 id="basic" class="doc-heading doc-h3"${e}>Basic</h3>`),t(n(o,{title:"Basic",file:"Basic"},null,l,e)),t(`<h3 id="coloring" class="doc-heading doc-h3"${e}>Coloring</h3><p${e}>The Material Ripple takes the CSS color of text by default, but you can configure it:</p>`),t(n(o,{title:"Colored",file:"Colored"},null,l,e)),t(`<h3 id="positioning" class="doc-heading doc-h3"${e}>Positioning</h3><p${e}>You can also configure if the ripple should always start from center or not, regardless of the touch point:</p>`),t(n(o,{title:"Positioning",file:"Positioning"},null,l,e)),t(`<h3 id="triggering-early" class="doc-heading doc-h3"${e}>Triggering early</h3><p${e}>By default, the Ripple directive is triggered on click or keyup. However, you can change that and make it trigger earlier, on the first user interaction (mousedown, touchstart, keydown). Please note that in most situations the event sets may overlap (small delay between first and last user interaction) and there is no difference in the user perception, but in certain conditions it may lead to misleading the user.</p><p${e}>This is especially noticeable on touchscreens where if a user accidentally moves their finger after the touchstart it can sometimes be interpreted as a very small scroll event instead of a click so the click event isn’t triggered but there is still a ripple.</p>`),t(n(o,{title:"Triggering immediately",file:"Early"},null,l,e)),t(`<h3 id="disable" class="doc-heading doc-h3"${e}>Disable</h3><p${e}>If for some reason you have a scenario where the ripples need to be disabled, then you can assign a Boolean as value for the directive:</p>`),t(n(o,{title:"Disable",file:"Disable"},null,l,e));else return[i("p",null,[a("Material Ripple effect can easily be added to any DOM element (or component) through the "),i("code",{class:"doc-token"},"v-ripple"),a(" Quasar directive.")]),i("div",{class:"doc-note doc-note--danger"},[i("p",{class:"doc-note__title"},"WARNING"),i("p",null,[a("Do not use this directive on components that already have material ripples baked in (example: "),i("code",{class:"doc-token"},"QBtn"),a("). Rather configure the internal ripples through those component’s "),i("code",{class:"doc-token"},"ripple"),a(" property.")])]),i(u,{file:"Ripple"}),i(m,{title:"Configuration",config:"ripple"}),i("h2",{id:"usage",class:"doc-heading doc-h2",onClick:c=>r(s)("usage")},"Usage",8,["onClick"]),i("div",{class:"doc-note doc-note--warning"},[i("p",{class:"doc-note__title"},"WARNING"),i("p",null,[a("Make sure that your DOM element or component has CSS "),i("code",{class:"doc-token"},"position: relative"),a(" or Quasar CSS helper class "),i("code",{class:"doc-token"},"relative-position"),a(" attached to it.")])]),i("h3",{id:"basic",class:"doc-heading doc-h3",onClick:c=>r(s)("basic")},"Basic",8,["onClick"]),i(o,{title:"Basic",file:"Basic"}),i("h3",{id:"coloring",class:"doc-heading doc-h3",onClick:c=>r(s)("coloring")},"Coloring",8,["onClick"]),i("p",null,"The Material Ripple takes the CSS color of text by default, but you can configure it:"),i(o,{title:"Colored",file:"Colored"}),i("h3",{id:"positioning",class:"doc-heading doc-h3",onClick:c=>r(s)("positioning")},"Positioning",8,["onClick"]),i("p",null,"You can also configure if the ripple should always start from center or not, regardless of the touch point:"),i(o,{title:"Positioning",file:"Positioning"}),i("h3",{id:"triggering-early",class:"doc-heading doc-h3",onClick:c=>r(s)("triggering-early")},"Triggering early",8,["onClick"]),i("p",null,"By default, the Ripple directive is triggered on click or keyup. However, you can change that and make it trigger earlier, on the first user interaction (mousedown, touchstart, keydown). Please note that in most situations the event sets may overlap (small delay between first and last user interaction) and there is no difference in the user perception, but in certain conditions it may lead to misleading the user."),i("p",null,"This is especially noticeable on touchscreens where if a user accidentally moves their finger after the touchstart it can sometimes be interpreted as a very small scroll event instead of a click so the click event isn’t triggered but there is still a ripple."),i(o,{title:"Triggering immediately",file:"Early"}),i("h3",{id:"disable",class:"doc-heading doc-h3",onClick:c=>r(s)("disable")},"Disable",8,["onClick"]),i("p",null,"If for some reason you have a scenario where the ripples need to be disabled, then you can assign a Boolean as value for the directive:"),i(o,{title:"Disable",file:"Disable"})]}),_:1},v))}}},f=h.setup;h.setup=(g,d)=>{const p=D();return(p.modules||(p.modules=new Set)).add("src/pages/vue-directives/material-ripples.md"),f?f(g,d):void 0};const K=w(h,[["__file","material-ripples.md"]]);export{K as default};
