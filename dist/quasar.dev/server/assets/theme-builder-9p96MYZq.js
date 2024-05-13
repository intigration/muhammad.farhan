import{reactive as ue,ref as ae,watch as ze,computed as O,resolveComponent as f,resolveDirective as Le,mergeProps as ne,withCtx as t,createVNode as e,toDisplayString as W,unref as x,createTextVNode as P,openBlock as me,createBlock as pe,createCommentVNode as fe,withDirectives as le,useSSRContext as Ce}from"vue";import{ssrRenderAttrs as Me,ssrRenderList as ve,ssrRenderComponent as l,ssrInterpolate as te,ssrRenderClass as ye,ssrGetDirectiveProps as Qe}from"vue/server-renderer";import{setCssVar as Pe,colors as Re}from"quasar";import{D as Te}from"./DocPage-DKr-0pQn.js";import{fasSquare as ge,fasCircle as be,fasPlay as qe}from"@quasar/extras/fontawesome-v6";import{mdiArrowLeft as $e,mdiMagnify as ke,mdiMenu as xe,mdiMapMarkerRadius as Be}from"@quasar/extras/mdi-v6";import{D as o}from"./DocCode-BVg0tuSc.js";import{_ as Se}from"../server-entry.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const oe={__name:"ThemePicker",__ssrInlineRender:!0,setup(R){const{luminosity:E}=Re,a=ue({primary:"#1976d2",secondary:"#26A69A",accent:"#9C27B0",dark:"#1d1d1d","dark-page":"#121212",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}),C=ue({primary:!0,secondary:!0,accent:!0,dark:!0,"dark-page":!0,positive:!0,negative:!0,info:!1,warning:!1}),z=ae(!1),T=ae(!1),$=ae("sass");function B(g,s){Pe(g,s,document.getElementById("theme-picker")),C[g]=E(s)<=.4}const G=["primary","secondary","accent","dark","dark-page","positive","negative","info","warning"];G.forEach(g=>{ze(()=>a[g],s=>{B(g,s)})});const Q=O(()=>z.value===!0?"theme-picker__bg-dark text-white":"bg-white text-black"),A=O(()=>`// src/css/quasar.variables.sass

$primary   : ${a.primary}
$secondary : ${a.secondary}
$accent    : ${a.accent}

$dark      : ${a.dark}
$dark-page : ${a["dark-page"]}

$positive  : ${a.positive}
$negative  : ${a.negative}
$info      : ${a.info}
$warning   : ${a.warning}`),j=O(()=>`// src/css/quasar.variables.scss

$primary   : ${a.primary};
$secondary : ${a.secondary};
$accent    : ${a.accent};

$dark      : ${a.dark};
$dark-page : ${a["dark-page"]};

$positive  : ${a.positive};
$negative  : ${a.negative};
$info      : ${a.info};
$warning   : ${a.warning};`),F=O(()=>`// quasar.config file

return {
  framework: {
    config: {
      brand: {
        primary: '${a.primary}',
        secondary: '${a.secondary}',
        accent: '${a.accent}',

        dark: '${a.dark}',
        'dark-page': '${a["dark-page"]}',

        positive: '${a.positive}',
        negative: '${a.negative}',
        info: '${a.info}',
        warning: '${a.warning}'
      }
    }
  }
}`),N=O(()=>`app.use(Quasar, {
  config: {
    brand: {
      primary: '${a.primary}',
      secondary: '${a.secondary}',
      accent: '${a.accent}',

      dark: '${a.dark}',
      'dark-page': '${a["dark-page"]}',

      positive: '${a.positive}',
      negative: '${a.negative}',
      info: '${a.info}',
      warning: '${a.warning}'
    }
  }
}`),he=["secondary","dark","positive","negative","info","warning"];return(g,s,S,Ue)=>{const k=f("q-btn"),ie=f("q-menu"),X=f("q-color"),De=f("q-bar"),L=f("q-space"),h=f("q-icon"),re=f("q-toolbar"),ce=f("q-toggle"),de=f("q-toolbar-title"),Y=f("q-card"),H=f("q-card-section"),M=f("q-separator"),Ee=f("q-dialog"),Z=f("q-tabs"),y=f("q-tab"),I=f("q-tab-panels"),r=f("q-tab-panel"),ee=f("q-card-actions"),J=Le("close-popup");s(`<div${Me(ne({id:"theme-picker"},Ue))}><div class="row items-stretch"><div class="theme-picker__colors flex q-gutter-sm"><!--[-->`),ve(G,n=>{s(l(k,{key:`picker-${n}`,color:n,"text-color":C[n]===!0?"white":"black","no-caps":"",glossy:"",unelevated:""},{default:t((c,i,d,v)=>{if(i)i(`<div class="text-weight-light"${v}><div class="text-capitalize"${v}>${te(n)}</div><div${v}>${te(a[n])}</div></div>`),i(l(ie,{anchor:"top start",self:"top start"},{default:t((b,u,w,p)=>{if(u)u(l(X,{modelValue:a[n],"onUpdate:modelValue":m=>a[n]=m},null,w,p));else return[e(X,{modelValue:a[n],"onUpdate:modelValue":m=>a[n]=m},null,8,["modelValue","onUpdate:modelValue"])]}),_:2},d,v));else return[e("div",{class:"text-weight-light"},[e("div",{class:"text-capitalize"},W(n),1),e("div",null,W(a[n]),1)]),e(ie,{anchor:"top start",self:"top start"},{default:t(()=>[e(X,{modelValue:a[n],"onUpdate:modelValue":b=>a[n]=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]}),_:2},S))}),s(`<!--]--></div><div class="theme-picker__content col"><div class="${ye([Q.value,"relative-position fit rounded-borders shadow-2 bg-white overflow-hidden"])}"><div class="${ye(`bg-primary text-${C.primary===!0?"white shadow-2":"black"}`)}">`),s(l(De,{dense:"",dark:C.primary},{default:t((n,c,i,d)=>{if(c)c(l(L,null,null,i,d)),c(l(h,{class:"q-mr-xs",name:x(ge),size:"12px",style:{opacity:"0.5"}},null,i,d)),c(l(h,{class:"q-mr-xs",name:x(be),size:"12px",style:{opacity:"0.5"}},null,i,d)),c(l(h,{class:"q-mr-sm rotate-90",name:x(qe),size:"12px",style:{opacity:"0.5"}},null,i,d));else return[e(L),e(h,{class:"q-mr-xs",name:x(ge),size:"12px",style:{opacity:"0.5"}},null,8,["name"]),e(h,{class:"q-mr-xs",name:x(be),size:"12px",style:{opacity:"0.5"}},null,8,["name"]),e(h,{class:"q-mr-sm rotate-90",name:x(qe),size:"12px",style:{opacity:"0.5"}},null,8,["name"])]}),_:1},S)),s(l(re,null,{default:t((n,c,i,d)=>{if(c)c(l(k,{flat:"",dense:"",round:"",icon:x($e)},null,i,d)),c(l(L,null,null,i,d)),c(l(ce,{class:"q-mr-sm",dense:"",modelValue:z.value,"onUpdate:modelValue":v=>z.value=v,dark:C.primary,color:"red",label:"Dark page"},null,i,d)),c(l(k,{flat:"",dense:"",round:"",icon:x(ke)},null,i,d)),c(l(k,{flat:"",dense:"",round:"",icon:x(xe)},null,i,d));else return[e(k,{flat:"",dense:"",round:"",icon:x($e)},null,8,["icon"]),e(L),e(ce,{class:"q-mr-sm",dense:"",modelValue:z.value,"onUpdate:modelValue":v=>z.value=v,dark:C.primary,color:"red",label:"Dark page"},null,8,["modelValue","onUpdate:modelValue","dark"]),e(k,{flat:"",dense:"",round:"",icon:x(ke)},null,8,["icon"]),e(k,{flat:"",dense:"",round:"",icon:x(xe)},null,8,["icon"])]}),_:1},S)),s(l(re,{inset:""},{default:t((n,c,i,d)=>{if(c)c(l(de,null,{default:t((v,b,u,w)=>{if(b)b("Quasar");else return[P("Quasar")]}),_:1},i,d));else return[e(de,null,{default:t(()=>[P("Quasar")]),_:1})]}),_:1},S)),s('</div><div class="q-px-md q-py-lg"><div class="row q-col-gutter-md"><!--[-->'),ve(he,n=>{s('<div class="col-12 col-sm-6 col-md-4 col-lg-3">'),s(l(Y,{flat:"",class:`bg-${n} text-${C[n]===!0?"white":"black"}`},{default:t((c,i,d,v)=>{if(i)i(l(H,null,{default:t((b,u,w,p)=>{if(u)u(`<div class="text-h6 row no-wrap items-center"${p}><div class="ellipsis text-capitalize"${p}>${te(n)}</div>`),u(l(L,null,null,w,p)),u(n!=="secondary"&&n!=="dark"?l(h,{name:g.$q.iconSet.type[n],size:"24px"},null,w,p):"<!---->"),u("</div>");else return[e("div",{class:"text-h6 row no-wrap items-center"},[e("div",{class:"ellipsis text-capitalize"},W(n),1),e(L),n!=="secondary"&&n!=="dark"?(me(),pe(h,{key:0,name:g.$q.iconSet.type[n],size:"24px"},null,8,["name"])):fe("",!0)])]}),_:2},d,v)),i(l(H,null,{default:t((b,u,w,p)=>{if(u)u("Lorem, ipsum dolor sit amet consectetur adipisicing elit.");else return[P("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")]}),_:2},d,v));else return[e(H,null,{default:t(()=>[e("div",{class:"text-h6 row no-wrap items-center"},[e("div",{class:"ellipsis text-capitalize"},W(n),1),e(L),n!=="secondary"&&n!=="dark"?(me(),pe(h,{key:0,name:g.$q.iconSet.type[n],size:"24px"},null,8,["name"])):fe("",!0)])]),_:2},1024),e(H,null,{default:t(()=>[P("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")]),_:1})]}),_:2},S)),s("</div>")}),s("<!--]--></div>"),s(l(k,{class:"absolute",fab:"",icon:x(Be),color:"accent","text-color":C.accent===!0?"white":"black",style:{bottom:"16px",right:"16px"}},null,S)),s("</div></div></div></div>"),s(l(M,{class:"q-mt-lg q-mb-sm"},null,S)),s('<div class="col-12 row items-center justify-end q-gutter-md">'),s(l(k,{class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Export",onClick:n=>T.value=!0},null,S)),s("</div>"),s(l(Ee,{modelValue:T.value,"onUpdate:modelValue":n=>T.value=n},{default:t((n,c,i,d)=>{if(c)c(l(Y,null,{default:t((v,b,u,w)=>{if(b)b(l(Z,{class:"theme-picker__tabs text-grey-7",modelValue:$.value,"onUpdate:modelValue":p=>$.value=p,"active-color":"brand-primary",align:"justify"},{default:t((p,m,V,_)=>{if(m)m(l(y,{name:"sass","no-caps":"",label:"Sass"},null,V,_)),m(l(y,{name:"scss","no-caps":"",label:"SCSS"},null,V,_)),m(l(y,{name:"quasar-cli","no-caps":"",label:"Quasar CLI"},null,V,_)),m(l(y,{name:"umd","no-caps":"",label:"Vite / UMD / Vue CLI"},null,V,_));else return[e(y,{name:"sass","no-caps":"",label:"Sass"}),e(y,{name:"scss","no-caps":"",label:"SCSS"}),e(y,{name:"quasar-cli","no-caps":"",label:"Quasar CLI"}),e(y,{name:"umd","no-caps":"",label:"Vite / UMD / Vue CLI"})]}),_:1},u,w)),b(l(M,null,null,u,w)),b(l(I,{modelValue:$.value,"onUpdate:modelValue":p=>$.value=p,animated:""},{default:t((p,m,V,_)=>{if(m)m(l(r,{class:"q-pa-none",name:"sass"},{default:t((K,q,U,D)=>{if(q)q(l(o,{copy:"",code:A.value},null,U,D));else return[e(o,{copy:"",code:A.value},null,8,["code"])]}),_:1},V,_)),m(l(r,{class:"q-pa-none",name:"scss"},{default:t((K,q,U,D)=>{if(q)q(l(o,{copy:"",code:j.value},null,U,D));else return[e(o,{copy:"",code:j.value},null,8,["code"])]}),_:1},V,_)),m(l(r,{class:"q-pa-none",name:"quasar-cli"},{default:t((K,q,U,D)=>{if(q)q(l(o,{copy:"",code:F.value},null,U,D));else return[e(o,{copy:"",code:F.value},null,8,["code"])]}),_:1},V,_)),m(l(r,{class:"q-pa-none",name:"umd"},{default:t((K,q,U,D)=>{if(q)q(l(o,{copy:"",code:N.value},null,U,D));else return[e(o,{copy:"",code:N.value},null,8,["code"])]}),_:1},V,_)),m(l(r,{class:"q-pa-none",name:"vue-cli"},{default:t((K,q,U,D)=>{if(q)q(l(o,{copy:"",code:g.vueCliExport},null,U,D));else return[e(o,{copy:"",code:g.vueCliExport},null,8,["code"])]}),_:1},V,_));else return[e(r,{class:"q-pa-none",name:"sass"},{default:t(()=>[e(o,{copy:"",code:A.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"scss"},{default:t(()=>[e(o,{copy:"",code:j.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"quasar-cli"},{default:t(()=>[e(o,{copy:"",code:F.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"umd"},{default:t(()=>[e(o,{copy:"",code:N.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"vue-cli"},{default:t(()=>[e(o,{copy:"",code:g.vueCliExport},null,8,["code"])]),_:1})]}),_:1},u,w)),b(l(M,null,null,u,w)),b(l(ee,{align:"right"},{default:t((p,m,V,_)=>{if(m)m(l(k,ne({class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Close"},Qe(g,J)),null,V,_));else return[le(e(k,{class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Close"},null,512),[[J]])]}),_:1},u,w));else return[e(Z,{class:"theme-picker__tabs text-grey-7",modelValue:$.value,"onUpdate:modelValue":p=>$.value=p,"active-color":"brand-primary",align:"justify"},{default:t(()=>[e(y,{name:"sass","no-caps":"",label:"Sass"}),e(y,{name:"scss","no-caps":"",label:"SCSS"}),e(y,{name:"quasar-cli","no-caps":"",label:"Quasar CLI"}),e(y,{name:"umd","no-caps":"",label:"Vite / UMD / Vue CLI"})]),_:1},8,["modelValue","onUpdate:modelValue"]),e(M),e(I,{modelValue:$.value,"onUpdate:modelValue":p=>$.value=p,animated:""},{default:t(()=>[e(r,{class:"q-pa-none",name:"sass"},{default:t(()=>[e(o,{copy:"",code:A.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"scss"},{default:t(()=>[e(o,{copy:"",code:j.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"quasar-cli"},{default:t(()=>[e(o,{copy:"",code:F.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"umd"},{default:t(()=>[e(o,{copy:"",code:N.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"vue-cli"},{default:t(()=>[e(o,{copy:"",code:g.vueCliExport},null,8,["code"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),e(M),e(ee,{align:"right"},{default:t(()=>[le(e(k,{class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Close"},null,512),[[J]])]),_:1})]}),_:1},i,d));else return[e(Y,null,{default:t(()=>[e(Z,{class:"theme-picker__tabs text-grey-7",modelValue:$.value,"onUpdate:modelValue":v=>$.value=v,"active-color":"brand-primary",align:"justify"},{default:t(()=>[e(y,{name:"sass","no-caps":"",label:"Sass"}),e(y,{name:"scss","no-caps":"",label:"SCSS"}),e(y,{name:"quasar-cli","no-caps":"",label:"Quasar CLI"}),e(y,{name:"umd","no-caps":"",label:"Vite / UMD / Vue CLI"})]),_:1},8,["modelValue","onUpdate:modelValue"]),e(M),e(I,{modelValue:$.value,"onUpdate:modelValue":v=>$.value=v,animated:""},{default:t(()=>[e(r,{class:"q-pa-none",name:"sass"},{default:t(()=>[e(o,{copy:"",code:A.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"scss"},{default:t(()=>[e(o,{copy:"",code:j.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"quasar-cli"},{default:t(()=>[e(o,{copy:"",code:F.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"umd"},{default:t(()=>[e(o,{copy:"",code:N.value},null,8,["code"])]),_:1}),e(r,{class:"q-pa-none",name:"vue-cli"},{default:t(()=>[e(o,{copy:"",code:g.vueCliExport},null,8,["code"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),e(M),e(ee,{align:"right"},{default:t(()=>[le(e(k,{class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Close"},null,512),[[J]])]),_:1})]),_:1})]}),_:1},S)),s("</div>")}}},we=oe.setup;oe.setup=(R,E)=>{const a=Ce();return(a.modules||(a.modules=new Set)).add("src/pages/style/theme-builder/ThemePicker.vue"),we?we(R,E):void 0};const Ve=Se(oe,[["__file","ThemePicker.vue"]]),se={__name:"theme-builder",__ssrInlineRender:!0,setup(R){const E=[{name:"Dark Mode",category:"Style & Identity",path:"/style/dark-mode"}];return(a,C,z,T)=>{C(l(Te,ne({title:"Theme Builder",desc:"Theme builder for a Quasar app with which you can play with the brand colors.",heading:"","edit-link":"style/theme-builder/theme-builder",related:E},T),{default:t(($,B,G,Q)=>{if(B)B(`<p${Q}>One of the most important parts of a website/app is to build a brand for it. First step is to choose the brand colors that you are going to use and this is what the tool below helps you with.</p><p${Q}>Click on the colored buttons besides the layout below and when you are ready, hit the <code class="doc-token"${Q}>Export</code> button at the bottom.</p>`),B(l(Ve,{class:"q-py-lg"},null,G,Q));else return[e("p",null,"One of the most important parts of a website/app is to build a brand for it. First step is to choose the brand colors that you are going to use and this is what the tool below helps you with."),e("p",null,[P("Click on the colored buttons besides the layout below and when you are ready, hit the "),e("code",{class:"doc-token"},"Export"),P(" button at the bottom.")]),e(Ve,{class:"q-py-lg"})]}),_:1},z))}}},_e=se.setup;se.setup=(R,E)=>{const a=Ce();return(a.modules||(a.modules=new Set)).add("src/pages/style/theme-builder/theme-builder.md"),_e?_e(R,E):void 0};const ea=Se(se,[["__file","theme-builder.md"]]);export{ea as default};
