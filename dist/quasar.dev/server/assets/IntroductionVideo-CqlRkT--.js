import{ref as f,resolveComponent as c,mergeProps as v,withCtx as w,createVNode as x,useSSRContext as b}from"vue";import{ssrRenderAttrs as q,ssrRenderComponent as d}from"vue/server-renderer";import{_ as y}from"../server-entry.js";const n={__name:"IntroductionVideo",__ssrInlineRender:!0,setup(i){const o=f(!1);return(t,e,l,u)=>{const m=c("q-img"),r=c("q-icon");e(`<div${q(v({class:"introduction-video rounded-borders overflow-hidden",style:{"max-width":"530px"}},u))}><div class="introduction-video__thumbnail relative-position">`),o.value?e("<!---->"):e(d(m,{src:"https://cdn.quasar.dev/img/quasar-app-in-30-min.jpg",ratio:1.78},{default:w((g,s,_,p)=>{if(s)s(d(r,{class:"play-button absolute-center",color:"white",name:"play_circle_outline",size:"150px"},null,_,p));else return[x(r,{class:"play-button absolute-center",color:"white",name:"play_circle_outline",size:"150px"})]}),_:1},l)),e("</div>"),o.value?e('<div class="introduction-video__container"><iframe src="https://www.youtube.com/embed/GV-D85D9KJQ?autoplay=1" frameborder="0" allowfullscreen></iframe></div>'):e("<!---->"),e("</div>")}}},a=n.setup;n.setup=(i,o)=>{const t=b();return(t.modules||(t.modules=new Set)).add("src/pages/introduction-to-quasar/IntroductionVideo.vue"),a?a(i,o):void 0};const R=y(n,[["__file","IntroductionVideo.vue"]]);export{R as I};
