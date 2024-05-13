import{useSSRContext as C,ref as x,reactive as w,computed as o,mergeProps as A,nextTick as M}from"vue";import{ssrRenderAttrs as D,ssrRenderAttr as I}from"vue/server-renderer";import{Quasar as _}from"quasar";import{s as N}from"./utils-DKnLoYai.js";import{_ as k}from"../server-entry.js";const f={__name:"DocCodepen",__ssrInlineRender:!0,props:{title:String},setup(l,{expose:i}){const c=["https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",`https://cdn.jsdelivr.net/npm/quasar@${_.version}/dist/quasar.min.css`].join(";"),j=["https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js",`https://cdn.jsdelivr.net/npm/quasar@${_.version}/dist/quasar.umd.prod.js`].join(";"),g=t=>function(s,n){const e=n.split(",").map(p=>p.trim()).filter(p=>p.length>0).reduce((p,q)=>(p.push(q),p),[]),r=[];return e.length>0&&r.push("const { "+e.join(", ")+" } = "+t),r.join(`
`)},u=l,m=x(!1),d=x(null),a=w({parts:{}}),v=o(()=>(a.parts.Style||"").replace(/(<style.*?>|<\/style>)/g,"").trim()),y=o(()=>{const t=/<style.*lang=["'](.*)["'].*>/.exec(a.parts.Style||"");return t?t[1]:"none"}),h=o(()=>{const t=/import\s+{([^}'\n]+)}\s+from\s+'quasar'/g,s=/import\s+{([^}'\n]+)}\s+from\s+'vue'/g,n=/import ([^'\n]*) from ([^\n]*)/g;let e=/export default {([\s\S]*)}/g.exec(a.parts.Script||"");e=(e&&e[1]||"").trim(),e.length>0&&(e=`
  `+e+`
`);let r=/<script>([\s\S]*)export default {/g.exec(a.parts.Script||"");return r=(r&&r[1]||"").replace(t,g("Quasar")).replace(s,g("Vue")).replace(n,"").trim(),r+=r?`

`:"",r+`const app = Vue.createApp({${e}})

app.use(Quasar, { config: {} })
app.mount('#q-app')
`}),$=o(()=>(a.parts.Template||"").replace(/(<template>|<\/template>$)/g,"").replace(/\n/g,`
  `).replace(/([\w]+=")([^"]*?)(")/g,function(t,s,n,e){return s+n.replace(/>/g,"___TEMP_REPLACEMENT___")+e}).replace(/<(q-[\w-]+|div)([^>]*?)\s*?([\n\r][\t ]+)?\/>/gs,"<$1$2$3></$1>").replace(/(<template[^>]*>)(\s*?(?:[\n\r][\t ]+)?)<(thead|tbody|tfoot)/gs,"$1$2<___PREVENT_TEMPLATE___$3").replace(/<(thead|tbody|tfoot)(.*?)[\n\r]?(\s*)<\/\1>/gs,function(t,s,n,e){return`<template>
`+e+"  <"+s+n.split(/[\n\r]+/g).join(`
  `)+`
`+e+"  </"+s+`>
`+e+"</template>"}).replace(/___PREVENT_TEMPLATE___/g,"").replace(/___TEMP_REPLACEMENT___/g,">").replace(/^\s{2}/gm,"").trim()),T=o(()=>(($.value&&4)|(v.value&&2)|(h.value&&1)).toString(2)),R=o(()=>(typeof document<"u"?document.title.split(" | ")[0]+": ":"")+(u.title?u.title+" - ":"")+`Quasar v${_.version}`),b=o(()=>"example--"+N(u.title)),S=o(()=>{const t={title:R.value,html:`<!--
Forked from:
${window.location.origin+window.location.pathname}#${b.value}
-->
<div id="q-app" style="min-height: 100vh;">
${$.value}
</div>`,head:"",html_pre_processor:"none",css:v.value,css_pre_processor:y.value,css_external:c,js:h.value,js_pre_processor:"babel",js_external:j,editors:T.value};return JSON.stringify(t)});function P(t){if(a.parts=t,m.value){d.value.submit();return}m.value=!0,M(()=>{d.value.submit()})}return i({open:P}),(t,s,n,e)=>{s(`<form${D(A({ref_key:"formRef",ref:d,method:"post",action:"https://codepen.io/pen/define/",target:"_blank",rel:"noopener",class:"hidden"},e))}>`),m.value?s(`<input type="hidden" name="data"${I("value",S.value)}>`):s("<!---->"),s("</form>")}}},E=f.setup;f.setup=(l,i)=>{const c=C();return(c.modules||(c.modules=new Set)).add("src/components/DocCodepen.vue"),E?E(l,i):void 0};const O=k(f,[["__file","DocCodepen.vue"]]);export{O as D};
