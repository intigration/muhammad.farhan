import{b as u,d as l,w as t,e as a,f as o,h as n,i as s}from"./vendor.js";import{D as i,a as e}from"./DocPage.js";import{D as p}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as r}from"./index.js";const k=n("blockquote",{class:"doc-note"},[n("p",null,"We recommend selecting Axios during project initialization.")],-1),d=n("p",null,[s("If you haven’t selected Axios during the project initialization then you should create a new boot file "),n("code",{class:"doc-token"},"axios.js"),s(" that looks like this: (Here you can also specify additional settings for your axios instance)")],-1),f=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" boot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" axios "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'axios'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" api "),n("span",{class:"token operator"},"="),s(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://api.example.com'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"boot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// for use inside Vue files (Options API) through this.$axios and this.$api"),s(`

  app`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("globalProperties"),n("span",{class:"token punctuation"},"."),s("$axios "),n("span",{class:"token operator"},"="),s(` axios
  `),n("span",{class:"token comment"},"// ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)"),s(`
  `),n("span",{class:"token comment"},"//       so you won't necessarily have to import axios in each vue file"),s(`

  app`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("globalProperties"),n("span",{class:"token punctuation"},"."),s("$api "),n("span",{class:"token operator"},"="),s(` api
  `),n("span",{class:"token comment"},"// ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)"),s(`
  `),n("span",{class:"token comment"},"//       so you can easily perform requests against your app's API"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token punctuation"},"{"),s(" axios"),n("span",{class:"token punctuation"},","),s(" api "),n("span",{class:"token punctuation"},"}")])],-1),m=n("p",null,[s("Also make sure to yarn/npm install the "),n("code",{class:"doc-token"},"axios"),s(" package.")],-1),y={class:"doc-note doc-note--tip"},h=n("p",{class:"doc-note__title"},"TIP",-1),g=n("code",{class:"doc-token"},"$q = useQuasar()",-1),_=n("code",{class:"doc-token"},"$q.notify",-1),w=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" api "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'boot/axios'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"loadData"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    api`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/api/backend'"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        data`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" response"),n("span",{class:"token punctuation"},"."),s(`data
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        $q`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"notify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'negative'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Loading failed'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'report_problem'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" data"),n("span",{class:"token punctuation"},","),s(" loadData "),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),x=n("p",null,"Usage in Vuex Actions for globally adding headers to axios (such as during authentication):",-1),q=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" api "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'boot/axios'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"register"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" commit "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" form")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/auth/register'"),n("span",{class:"token punctuation"},","),s(" form"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      api`),n("span",{class:"token punctuation"},"."),s("defaults"),n("span",{class:"token punctuation"},"."),s("headers"),n("span",{class:"token punctuation"},"."),s("common"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Authorization'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Bearer '"),s(),n("span",{class:"token operator"},"+"),s(" response"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),s(`token
      `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'login'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"token"),n("span",{class:"token operator"},":"),s(" response"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"user"),n("span",{class:"token operator"},":"),s(" response"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),s("user"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),b={__name:"ajax-requests",setup(A){return(v,P)=>(u(),l(i,{title:"Ajax Requests",desc:"(@quasar/app-vite) Using Axios for fetching data in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/ajax-requests"},{default:t(()=>[k,d,a(o(p),{title:"/src/boot/axios.js"},{default:t(()=>[f,a(c)]),_:1}),m,n("div",y,[h,n("p",null,[s("Be sure to check out "),a(e,{to:"/quasar-cli-vite/prefetch-feature"},{default:t(()=>[s("Prefetch Feature")]),_:1}),s(" if you are using Quasar CLI.")])]),n("p",null,[s("Usage in your single file components methods will be like below. Notice that in the next example we’re using the Quasar’s "),a(e,{to:"/quasar-plugins/notify"},{default:t(()=>[s("Notify plugin")]),_:1}),s(" (through "),g,s(" and "),_,s(") which you’ll need to install (follow the link earlier).")]),a(o(p),null,{default:t(()=>[w,a(c)]),_:1}),x,a(o(p),null,{default:t(()=>[q,a(c)]),_:1}),n("p",null,[s("Also look at "),a(e,{to:"https://github.com/axios/axios"},{default:t(()=>[s("Axios docs")]),_:1}),s(" for more information.")])]),_:1}))}},Q=r(b,[["__file","ajax-requests.md"]]);export{Q as default};
