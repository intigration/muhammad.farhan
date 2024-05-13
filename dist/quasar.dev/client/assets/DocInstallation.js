import{r as C,c as r,b as m,d as V,w as l,h,e as t,n as D,q as I,F as $,s as q,t as k,i as S,v as x,x as A,y as L,k as p,z as T}from"./vendor.js";import{D as d}from"./DocCode.js";import{D as j}from"./DocCardTitle.js";import{s as w}from"./utils.js";import{_ as B}from"./index.js";const E={class:"header-toolbar row items-center"},N={__name:"DocInstallation",props:{components:[Array,String],directives:[Array,String],plugins:[Array,String],config:String,title:{type:String,default:"Installation"}},setup(g){const n=g,v=["Quasar CLI","Vite plugin / Vue CLI","UMD"],i=C("Quasar CLI"),b=r(()=>w(n.title));function u(e,s,a=!0){const f=a?c=>`'${c}'`:c=>c;return Array.isArray(e)?e.map(f).join(`,
`+"".padStart(s," ")):f(e)}const o=r(()=>n.config!==void 0?`${n.config}: /* look at QuasarConfOptions from the API card */`:null),y=r(()=>{if(n.plugins===void 0&&o.value===null)return`/*
 * No installation step is necessary.
 * It gets installed by default by @quasar/app-vite or @quasar/app-webpack.
 */`;const e=[];return n.plugins!==void 0&&e.push(`plugins: [
      ${u(n.plugins,6)}
    ]`),o.value!==null&&e.push(`config: {
      ${o.value}
    }`),`// quasar.config file

return {
  framework: {
    ${e.join(`,
    `)}
  }
}`}),_=r(()=>`/*
 * No installation step is necessary.
 * It gets installed by default.
 */`+(o.value!==null?`

// Optional;
// Place the global quasarConfig Object in a script tag BEFORE your Quasar script tag
app.use(Quasar, {
  config: {
    ${o.value}
  }
}`:"")),Q=r(()=>{const e=[],s=["Quasar"];return["components","directives","plugins"].forEach(a=>{n[a]!==void 0&&(s.push(u(n[a],2,!1)),e.push(`${a}: {
    ${u(n[a],4,!1)}
  }`))}),o.value!==null&&e.push(`config: {
    ${o.value}
  }`),`// main.js

import {
  ${s.join(`,
  `)}
} from 'quasar'

app.use(Quasar, {
  ${e.join(`,
  `)}
})`});return(e,s)=>(m(),V(T,{id:b.value,class:"doc-installation q-my-xl",flat:"",bordered:""},{default:l(()=>[h("div",E,[t(j,{title:n.title},null,8,["title"])]),t(D,{class:"header-tabs",modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=a=>i.value=a),align:"left","active-color":"brand-primary","indicator-color":"brand-primary",dense:"",breakpoint:0,shrink:""},{default:l(()=>[(m(),I($,null,q(v,a=>t(k,{key:`installation-${a}`,name:a,class:"header-btn","no-caps":""},{default:l(()=>[S(x(a),1)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"]),t(A),t(L,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=a=>i.value=a),animated:""},{default:l(()=>[t(p,{class:"q-pa-none",name:"Quasar CLI"},{default:l(()=>[t(d,{code:y.value},null,8,["code"])]),_:1}),t(p,{class:"q-pa-none",name:"Vite plugin / Vue CLI"},{default:l(()=>[t(d,{code:Q.value},null,8,["code"])]),_:1}),t(p,{class:"q-pa-none",name:"UMD"},{default:l(()=>[t(d,{code:_.value},null,8,["code"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["id"]))}},z=B(N,[["__file","DocInstallation.vue"]]);export{z as D};
