import{B as u,r as g,C as k,c as n,b as v,q as h,D as C,E as M}from"./vendor.js";import{s as w}from"./utils.js";import{_ as N}from"./index.js";const A=["value"],D={__name:"DocCodepen",props:{title:String},setup(E,{expose:j}){const y=["https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",`https://cdn.jsdelivr.net/npm/quasar@${u.version}/dist/quasar.min.css`].join(";"),$=["https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js",`https://cdn.jsdelivr.net/npm/quasar@${u.version}/dist/quasar.umd.prod.js`].join(";"),m=t=>function(r,o){const e=o.split(",").map(p=>p.trim()).filter(p=>p.length>0).reduce((p,S)=>(p.push(S),p),[]),s=[];return e.length>0&&s.push("const { "+e.join(", ")+" } = "+t),s.join(`
`)},c=E,l=g(!1),i=g(null),a=k({parts:{}}),_=n(()=>(a.parts.Style||"").replace(/(<style.*?>|<\/style>)/g,"").trim()),x=n(()=>{const t=/<style.*lang=["'](.*)["'].*>/.exec(a.parts.Style||"");return t?t[1]:"none"}),d=n(()=>{const t=/import\s+{([^}'\n]+)}\s+from\s+'quasar'/g,r=/import\s+{([^}'\n]+)}\s+from\s+'vue'/g,o=/import ([^'\n]*) from ([^\n]*)/g;let e=/export default {([\s\S]*)}/g.exec(a.parts.Script||"");e=(e&&e[1]||"").trim(),e.length>0&&(e=`
  `+e+`
`);let s=/<script>([\s\S]*)export default {/g.exec(a.parts.Script||"");return s=(s&&s[1]||"").replace(t,m("Quasar")).replace(r,m("Vue")).replace(o,"").trim(),s+=s?`

`:"",s+`const app = Vue.createApp({${e}})

app.use(Quasar, { config: {} })
app.mount('#q-app')
`}),f=n(()=>(a.parts.Template||"").replace(/(<template>|<\/template>$)/g,"").replace(/\n/g,`
  `).replace(/([\w]+=")([^"]*?)(")/g,function(t,r,o,e){return r+o.replace(/>/g,"___TEMP_REPLACEMENT___")+e}).replace(/<(q-[\w-]+|div)([^>]*?)\s*?([\n\r][\t ]+)?\/>/gs,"<$1$2$3></$1>").replace(/(<template[^>]*>)(\s*?(?:[\n\r][\t ]+)?)<(thead|tbody|tfoot)/gs,"$1$2<___PREVENT_TEMPLATE___$3").replace(/<(thead|tbody|tfoot)(.*?)[\n\r]?(\s*)<\/\1>/gs,function(t,r,o,e){return`<template>
`+e+"  <"+r+o.split(/[\n\r]+/g).join(`
  `)+`
`+e+"  </"+r+`>
`+e+"</template>"}).replace(/___PREVENT_TEMPLATE___/g,"").replace(/___TEMP_REPLACEMENT___/g,">").replace(/^\s{2}/gm,"").trim()),T=n(()=>((f.value&&4)|(_.value&&2)|(d.value&&1)).toString(2)),b=n(()=>(typeof document<"u"?document.title.split(" | ")[0]+": ":"")+(c.title?c.title+" - ":"")+`Quasar v${u.version}`),q=n(()=>"example--"+w(c.title)),P=n(()=>{const t={title:b.value,html:`<!--
Forked from:
${window.location.origin+window.location.pathname}#${q.value}
-->
<div id="q-app" style="min-height: 100vh;">
${f.value}
</div>`,head:"",html_pre_processor:"none",css:_.value,css_pre_processor:x.value,css_external:y,js:d.value,js_pre_processor:"babel",js_external:$,editors:T.value};return JSON.stringify(t)});function R(t){if(a.parts=t,l.value){i.value.submit();return}l.value=!0,M(()=>{i.value.submit()})}return j({open:R}),(t,r)=>(v(),h("form",{ref_key:"formRef",ref:i,method:"post",action:"https://codepen.io/pen/define/",target:"_blank",rel:"noopener",class:"hidden"},[l.value?(v(),h("input",{key:0,type:"hidden",name:"data",value:P.value},null,8,A)):C("",!0)],512))}},Q=N(D,[["__file","DocCodepen.vue"]]);export{Q as D};
