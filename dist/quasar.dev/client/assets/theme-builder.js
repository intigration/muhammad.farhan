import{C as V,r as $,ax as O,c,b as m,q as b,h as n,F as T,s as D,e,w as s,v as w,ay as R,aN as G,g as i,a2 as x,ak as C,G as f,f as d,aO as J,aP as W,a0 as H,aK as X,W as Y,J as S,K as Z,i as v,aw as B,d as P,D as ee,z as E,aQ as ae,x as q,n as te,t as y,y as se,k as u,a7 as ne,a8 as oe,ac as le,a6 as re,aR as ie,aS as de}from"./vendor.js";import{D as ce}from"./DocPage.js";import{_ as z,j as ue,k as pe,n as me}from"./index.js";import{D as p}from"./DocCode.js";import"./CopyButton.js";const ge={id:"theme-picker"},fe={class:"row items-stretch"},ye={class:"theme-picker__colors flex q-gutter-sm"},ve={class:"text-weight-light"},he={class:"text-capitalize"},_e={class:"theme-picker__content col"},ke={class:"q-px-md q-py-lg"},$e={class:"row q-col-gutter-md"},be={class:"text-h6 row no-wrap items-center"},we={class:"ellipsis text-capitalize"},xe={class:"col-12 row items-center justify-end q-gutter-md"},Ce={__name:"ThemePicker",setup(M){const{luminosity:h}=de,a=V({primary:"#1976d2",secondary:"#26A69A",accent:"#9C27B0",dark:"#1d1d1d","dark-page":"#121212",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}),l=V({primary:!0,secondary:!0,accent:!0,dark:!0,"dark-page":!0,positive:!0,negative:!0,info:!1,warning:!1}),_=$(!1),k=$(!1),g=$("sass");function U(r,o){ie(r,o,document.getElementById("theme-picker")),l[r]=h(o)<=.4}const Q=["primary","secondary","accent","dark","dark-page","positive","negative","info","warning"];Q.forEach(r=>{O(()=>a[r],o=>{U(r,o)})});const A=c(()=>_.value===!0?"theme-picker__bg-dark text-white":"bg-white text-black"),I=c(()=>`// src/css/quasar.variables.sass

$primary   : ${a.primary}
$secondary : ${a.secondary}
$accent    : ${a.accent}

$dark      : ${a.dark}
$dark-page : ${a["dark-page"]}

$positive  : ${a.positive}
$negative  : ${a.negative}
$info      : ${a.info}
$warning   : ${a.warning}`),L=c(()=>`// src/css/quasar.variables.scss

$primary   : ${a.primary};
$secondary : ${a.secondary};
$accent    : ${a.accent};

$dark      : ${a.dark};
$dark-page : ${a["dark-page"]};

$positive  : ${a.positive};
$negative  : ${a.negative};
$info      : ${a.info};
$warning   : ${a.warning};`),N=c(()=>`// quasar.config file

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
}`),F=c(()=>`app.use(Quasar, {
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
}`),j=["secondary","dark","positive","negative","info","warning"];return(r,o)=>(m(),b("div",ge,[n("div",fe,[n("div",ye,[(m(),b(T,null,D(Q,t=>e(i,{key:`picker-${t}`,color:t,"text-color":l[t]===!0?"white":"black","no-caps":"",glossy:"",unelevated:""},{default:s(()=>[n("div",ve,[n("div",he,w(t),1),n("div",null,w(a[t]),1)]),e(R,{anchor:"top start",self:"top start"},{default:s(()=>[e(G,{modelValue:a[t],"onUpdate:modelValue":K=>a[t]=K},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["color","text-color"])),64))]),n("div",_e,[n("div",{class:x(["relative-position fit rounded-borders shadow-2 bg-white overflow-hidden",A.value])},[n("div",{class:x(`bg-primary text-${l.primary===!0?"white shadow-2":"black"}`)},[e(J,{dense:"",dark:l.primary},{default:s(()=>[e(C),e(f,{class:"q-mr-xs",name:d(ue),size:"12px",style:{opacity:"0.5"}},null,8,["name"]),e(f,{class:"q-mr-xs",name:d(pe),size:"12px",style:{opacity:"0.5"}},null,8,["name"]),e(f,{class:"q-mr-sm rotate-90",name:d(me),size:"12px",style:{opacity:"0.5"}},null,8,["name"])]),_:1},8,["dark"]),e(S,null,{default:s(()=>[e(i,{flat:"",dense:"",round:"",icon:d(W)},null,8,["icon"]),e(C),e(H,{class:"q-mr-sm",dense:"",modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=t=>_.value=t),dark:l.primary,color:"red",label:"Dark page"},null,8,["modelValue","dark"]),e(i,{flat:"",dense:"",round:"",icon:d(X)},null,8,["icon"]),e(i,{flat:"",dense:"",round:"",icon:d(Y)},null,8,["icon"])]),_:1}),e(S,{inset:""},{default:s(()=>[e(Z,null,{default:s(()=>[v("Quasar")]),_:1})]),_:1})],2),n("div",ke,[n("div",$e,[(m(),b(T,null,D(j,t=>n("div",{class:"col-12 col-sm-6 col-md-4 col-lg-3",key:`card-${t}`},[e(E,{flat:"",class:x(`bg-${t} text-${l[t]===!0?"white":"black"}`)},{default:s(()=>[e(B,null,{default:s(()=>[n("div",be,[n("div",we,w(t),1),e(C),t!=="secondary"&&t!=="dark"?(m(),P(f,{key:0,name:r.$q.iconSet.type[t],size:"24px"},null,8,["name"])):ee("",!0)])]),_:2},1024),e(B,null,{default:s(()=>[v("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")]),_:1})]),_:2},1032,["class"])])),64))]),e(i,{class:"absolute",fab:"",icon:d(ae),color:"accent","text-color":l.accent===!0?"white":"black",style:{bottom:"16px",right:"16px"}},null,8,["icon","text-color"])])],2)])]),e(q,{class:"q-mt-lg q-mb-sm"}),n("div",xe,[e(i,{class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Export",onClick:o[1]||(o[1]=t=>k.value=!0)})]),e(re,{modelValue:k.value,"onUpdate:modelValue":o[4]||(o[4]=t=>k.value=t)},{default:s(()=>[e(E,null,{default:s(()=>[e(te,{class:"theme-picker__tabs text-grey-7",modelValue:g.value,"onUpdate:modelValue":o[2]||(o[2]=t=>g.value=t),"active-color":"brand-primary",align:"justify"},{default:s(()=>[e(y,{name:"sass","no-caps":"",label:"Sass"}),e(y,{name:"scss","no-caps":"",label:"SCSS"}),e(y,{name:"quasar-cli","no-caps":"",label:"Quasar CLI"}),e(y,{name:"umd","no-caps":"",label:"Vite / UMD / Vue CLI"})]),_:1},8,["modelValue"]),e(q),e(se,{modelValue:g.value,"onUpdate:modelValue":o[3]||(o[3]=t=>g.value=t),animated:""},{default:s(()=>[e(u,{class:"q-pa-none",name:"sass"},{default:s(()=>[e(p,{copy:"",code:I.value},null,8,["code"])]),_:1}),e(u,{class:"q-pa-none",name:"scss"},{default:s(()=>[e(p,{copy:"",code:L.value},null,8,["code"])]),_:1}),e(u,{class:"q-pa-none",name:"quasar-cli"},{default:s(()=>[e(p,{copy:"",code:N.value},null,8,["code"])]),_:1}),e(u,{class:"q-pa-none",name:"umd"},{default:s(()=>[e(p,{copy:"",code:F.value},null,8,["code"])]),_:1}),e(u,{class:"q-pa-none",name:"vue-cli"},{default:s(()=>[e(p,{copy:"",code:r.vueCliExport},null,8,["code"])]),_:1})]),_:1},8,["modelValue"]),e(q),e(ne,{align:"right"},{default:s(()=>[oe(e(i,{class:"call-to-action-btn","no-caps":"",padding:"8px 16px",label:"Close"},null,512),[[le]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},qe=z(Ce,[["__file","ThemePicker.vue"]]),Qe=n("p",null,"One of the most important parts of a website/app is to build a brand for it. First step is to choose the brand colors that you are going to use and this is what the tool below helps you with.",-1),Ve=n("p",null,[v("Click on the colored buttons besides the layout below and when you are ready, hit the "),n("code",{class:"doc-token"},"Export"),v(" button at the bottom.")],-1),Te={__name:"theme-builder",setup(M){const h=[{name:"Dark Mode",category:"Style & Identity",path:"/style/dark-mode"}];return(a,l)=>(m(),P(ce,{title:"Theme Builder",desc:"Theme builder for a Quasar app with which you can play with the brand colors.",heading:"","edit-link":"style/theme-builder/theme-builder",related:h},{default:s(()=>[Qe,Ve,e(qe,{class:"q-py-lg"})]),_:1}))}},ze=z(Te,[["__file","theme-builder.md"]]);export{ze as default};
