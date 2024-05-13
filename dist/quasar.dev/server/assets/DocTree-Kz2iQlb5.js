import{resolveComponent as s,mergeProps as L,withCtx as o,unref as d,createTextVNode as x,toDisplayString as l,createVNode as q,openBlock as a,createBlock as i,withModifiers as g,createCommentVNode as m,Fragment as M,useSSRContext as P}from"vue";import{ssrRenderComponent as f,ssrInterpolate as C}from"vue/server-renderer";import{mdiLaunch as S,mdiInformationOutline as N}from"@quasar/extras/mdi-v6";import{_ as h}from"../server-entry.js";const b={__name:"DocTree",__ssrInlineRender:!0,props:{def:Object},setup(_){const u=_;let c=0;const y=n=>(n.id=c++,n.c!==void 0&&(n.l+="/",n.c.forEach(y)),n),V=[y(u.def)];return(n,B,I,O)=>{const j=s("q-tree"),v=s("q-btn"),T=s("q-icon"),k=s("q-tooltip");B(f(j,L({class:"doc-tree",nodes:V,"node-key":"id","children-key":"c","default-expand-all":""},O),{"default-header":o((e,t,D,r)=>{if(t)t(`<div class="doc-tree__label text-no-wrap"${r}>${C(e.node.l)}</div>`),e.node.url?t(f(v,{class:"doc-tree__btn q-ml-sm",padding:"0",color:"brand-accent",flat:"",icon:d(S),href:e.node.url,target:"_blank",onClick:()=>{}},null,D,r)):t("<!---->"),e.node.e?(t("<!--[-->"),e.node.e?t(f(T,{name:d(N),class:"q-ml-sm lt-sm",color:"grey",onClick:()=>{},onTouchstart:()=>{}},{default:o((z,w,E,F)=>{if(w)w(f(k,null,{default:o((A,$,G,H)=>{if($)$(`${C(e.node.e)}`);else return[x(l(e.node.e),1)]}),_:2},E,F));else return[q(k,null,{default:o(()=>[x(l(e.node.e),1)]),_:2},1024)]}),_:2},D,r)):t("<!---->"),e.node.e?t(`<div class="doc-tree__explanation text-grey q-ml-sm gt-xs"${r}># ${C(e.node.e)}</div>`):t("<!---->"),t("<!--]-->")):t("<!---->");else return[q("div",{class:"doc-tree__label text-no-wrap"},l(e.node.l),1),e.node.url?(a(),i(v,{key:0,class:"doc-tree__btn q-ml-sm",padding:"0",color:"brand-accent",flat:"",icon:d(S),href:e.node.url,target:"_blank",onClick:g(()=>{},["stop"])},null,8,["icon","href","onClick"])):m("",!0),e.node.e?(a(),i(M,{key:1},[e.node.e?(a(),i(T,{key:0,name:d(N),class:"q-ml-sm lt-sm",color:"grey",onClick:g(()=>{},["stop"]),onTouchstart:g(()=>{},["stop"])},{default:o(()=>[q(k,null,{default:o(()=>[x(l(e.node.e),1)]),_:2},1024)]),_:2},1032,["name","onClick","onTouchstart"])):m("",!0),e.node.e?(a(),i("div",{key:1,class:"doc-tree__explanation text-grey q-ml-sm gt-xs"},"# "+l(e.node.e),1)):m("",!0)],64)):m("",!0)]}),_:1},I))}}},R=b.setup;b.setup=(_,u)=>{const c=P();return(c.modules||(c.modules=new Set)).add("src/components/DocTree.vue"),R?R(_,u):void 0};const W=h(b,[["__file","DocTree.vue"]]);export{W as D};
