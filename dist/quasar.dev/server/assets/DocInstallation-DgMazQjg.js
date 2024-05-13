import{ref as G,computed as D,resolveComponent as b,mergeProps as H,withCtx as a,createTextVNode as A,toDisplayString as j,openBlock as O,createBlock as B,Fragment as P,renderList as T,createVNode as e,useSSRContext as J}from"vue";import{ssrRenderComponent as o,ssrRenderList as K,ssrInterpolate as W}from"vue/server-renderer";import{D as r}from"./DocCode-BVg0tuSc.js";import{D as h}from"./DocCardTitle-BSnqQsiz.js";import"quasar";import{s as X}from"./utils-DKnLoYai.js";import{_ as Y}from"../server-entry.js";const M={__name:"DocInstallation",__ssrInlineRender:!0,props:{components:[Array,String],directives:[Array,String],plugins:[Array,String],config:String,title:{type:String,default:"Installation"}},setup(U){const n=U,_=["Quasar CLI","Vite plugin / Vue CLI","UMD"],d=G("Quasar CLI"),z=D(()=>X(n.title));function x(l,v,p=!0){const Q=p?V=>`'${V}'`:V=>V;return Array.isArray(l)?l.map(Q).join(`,
`+"".padStart(v," ")):Q(l)}const f=D(()=>n.config!==void 0?`${n.config}: /* look at QuasarConfOptions from the API card */`:null),I=D(()=>{if(n.plugins===void 0&&f.value===null)return`/*
 * No installation step is necessary.
 * It gets installed by default by @quasar/app-vite or @quasar/app-webpack.
 */`;const l=[];return n.plugins!==void 0&&l.push(`plugins: [
      ${x(n.plugins,6)}
    ]`),f.value!==null&&l.push(`config: {
      ${f.value}
    }`),`// quasar.config file

return {
  framework: {
    ${l.join(`,
    `)}
  }
}`}),k=D(()=>`/*
 * No installation step is necessary.
 * It gets installed by default.
 */`+(f.value!==null?`

// Optional;
// Place the global quasarConfig Object in a script tag BEFORE your Quasar script tag
app.use(Quasar, {
  config: {
    ${f.value}
  }
}`:"")),L=D(()=>{const l=[],v=["Quasar"];return["components","directives","plugins"].forEach(p=>{n[p]!==void 0&&(v.push(x(n[p],2,!1)),l.push(`${p}: {
    ${x(n[p],4,!1)}
  }`))}),f.value!==null&&l.push(`config: {
    ${f.value}
  }`),`// main.js

import {
  ${v.join(`,
  `)}
} from 'quasar'

app.use(Quasar, {
  ${l.join(`,
  `)}
})`});return(l,v,p,Q)=>{const V=b("q-card"),R=b("q-tabs"),w=b("q-tab"),E=b("q-separator"),N=b("q-tab-panels"),i=b("q-tab-panel");v(o(V,H({id:z.value,class:"doc-installation q-my-xl",flat:"",bordered:""},Q),{default:a((Z,g,S,C)=>{if(g)g(`<div class="header-toolbar row items-center"${C}>`),g(o(h,{title:n.title},null,S,C)),g("</div>"),g(o(R,{class:"header-tabs",modelValue:d.value,"onUpdate:modelValue":t=>d.value=t,align:"left","active-color":"brand-primary","indicator-color":"brand-primary",dense:"",breakpoint:0,shrink:""},{default:a((t,u,y,$)=>{if(u)u("<!--[-->"),K(_,s=>{u(o(w,{key:`installation-${s}`,name:s,class:"header-btn","no-caps":""},{default:a((c,m,q,ee)=>{if(m)m(`${W(s)}`);else return[A(j(s),1)]}),_:2},y,$))}),u("<!--]-->");else return[(O(),B(P,null,T(_,s=>e(w,{key:`installation-${s}`,name:s,class:"header-btn","no-caps":""},{default:a(()=>[A(j(s),1)]),_:2},1032,["name"])),64))]}),_:1},S,C)),g(o(E,null,null,S,C)),g(o(N,{modelValue:d.value,"onUpdate:modelValue":t=>d.value=t,animated:""},{default:a((t,u,y,$)=>{if(u)u(o(i,{class:"q-pa-none",name:"Quasar CLI"},{default:a((s,c,m,q)=>{if(c)c(o(r,{code:I.value},null,m,q));else return[e(r,{code:I.value},null,8,["code"])]}),_:1},y,$)),u(o(i,{class:"q-pa-none",name:"Vite plugin / Vue CLI"},{default:a((s,c,m,q)=>{if(c)c(o(r,{code:L.value},null,m,q));else return[e(r,{code:L.value},null,8,["code"])]}),_:1},y,$)),u(o(i,{class:"q-pa-none",name:"UMD"},{default:a((s,c,m,q)=>{if(c)c(o(r,{code:k.value},null,m,q));else return[e(r,{code:k.value},null,8,["code"])]}),_:1},y,$));else return[e(i,{class:"q-pa-none",name:"Quasar CLI"},{default:a(()=>[e(r,{code:I.value},null,8,["code"])]),_:1}),e(i,{class:"q-pa-none",name:"Vite plugin / Vue CLI"},{default:a(()=>[e(r,{code:L.value},null,8,["code"])]),_:1}),e(i,{class:"q-pa-none",name:"UMD"},{default:a(()=>[e(r,{code:k.value},null,8,["code"])]),_:1})]}),_:1},S,C));else return[e("div",{class:"header-toolbar row items-center"},[e(h,{title:n.title},null,8,["title"])]),e(R,{class:"header-tabs",modelValue:d.value,"onUpdate:modelValue":t=>d.value=t,align:"left","active-color":"brand-primary","indicator-color":"brand-primary",dense:"",breakpoint:0,shrink:""},{default:a(()=>[(O(),B(P,null,T(_,t=>e(w,{key:`installation-${t}`,name:t,class:"header-btn","no-caps":""},{default:a(()=>[A(j(t),1)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue","onUpdate:modelValue"]),e(E),e(N,{modelValue:d.value,"onUpdate:modelValue":t=>d.value=t,animated:""},{default:a(()=>[e(i,{class:"q-pa-none",name:"Quasar CLI"},{default:a(()=>[e(r,{code:I.value},null,8,["code"])]),_:1}),e(i,{class:"q-pa-none",name:"Vite plugin / Vue CLI"},{default:a(()=>[e(r,{code:L.value},null,8,["code"])]),_:1}),e(i,{class:"q-pa-none",name:"UMD"},{default:a(()=>[e(r,{code:k.value},null,8,["code"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]}),_:1},p))}}},F=M.setup;M.setup=(U,n)=>{const _=J();return(_.modules||(_.modules=new Set)).add("src/components/DocInstallation.vue"),F?F(U,n):void 0};const ie=Y(M,[["__file","DocInstallation.vue"]]);export{ie as D};
