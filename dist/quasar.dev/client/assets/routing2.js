import{b as e,d as c,w as n,h as t,i as s,e as o,f as p}from"./vendor.js";import{D as u,a}from"./DocPage.js";import{D as r}from"./DocPrerender.js";import{C as i}from"./CopyButton.js";import{_ as l}from"./index.js";const k=t("p",null,[s("You’ll notice that your Quasar project contains a "),t("code",{class:"doc-token"},"/src/router"),s(" folder. This holds the routing configuration of your website/app:")],-1),d=t("ul",null,[t("li",null,"“/src/router/index.js” holds the Vue Router initialization code"),t("li",null,"“/src/router/routes.js” holds the routes of your website/app")],-1),h={class:"doc-note doc-note--warning"},f=t("p",{class:"doc-note__title"},"WARNING",-1),_=t("code",{class:"doc-token"},"/src/router/routes.js",-1),m=t("p",null,[s("When using Vuex the store is not directly importable from other scripts, but it is passed to the exported function of "),t("code",{class:"doc-token"},"/src/router/index.js"),s(", so it can be accessed from there. For example you can use the "),t("code",{class:"doc-token"},"Router.beforeEach"),s(" method to check authentication in the router:")],-1),y=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"export"),s(),t("span",{class:"token keyword"},"default"),s(),t("span",{class:"token keyword"},"function"),s(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),s(" store "),t("span",{class:"token comment"},"/*, ssrContext */"),s(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s(),t("span",{class:"token punctuation"},"{"),s(`
  `),t("span",{class:"token comment"},"// ..."),s(`
  Router`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"beforeEach"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[s("to"),t("span",{class:"token punctuation"},","),s(" from"),t("span",{class:"token punctuation"},","),s(" next")]),t("span",{class:"token punctuation"},")"),s(),t("span",{class:"token operator"},"=>"),s(),t("span",{class:"token punctuation"},"{"),s(`
    `),t("span",{class:"token keyword"},"if"),s(),t("span",{class:"token punctuation"},"("),s("to"),t("span",{class:"token punctuation"},"."),s("matched"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"some"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"record"),s(),t("span",{class:"token operator"},"=>"),s(" record"),t("span",{class:"token punctuation"},"."),s("meta"),t("span",{class:"token punctuation"},"."),s("requiresAuth"),t("span",{class:"token punctuation"},")"),s(),t("span",{class:"token operator"},"&&"),s(),t("span",{class:"token operator"},"!"),s("store"),t("span",{class:"token punctuation"},"."),s("getters"),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'auth/isSignedIn'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),s(),t("span",{class:"token punctuation"},"{"),s(`
      `),t("span",{class:"token function"},"next"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},"'account-signin'"),t("span",{class:"token punctuation"},","),s(),t("span",{class:"token literal-property property"},"query"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s(),t("span",{class:"token literal-property property"},"next"),t("span",{class:"token operator"},":"),s(" to"),t("span",{class:"token punctuation"},"."),s("fullPath "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s(`
    `),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"else"),s(),t("span",{class:"token punctuation"},"{"),s(`
      `),t("span",{class:"token function"},"next"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),s(`
    `),t("span",{class:"token punctuation"},"}"),s(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s(`
  `),t("span",{class:"token comment"},"// ..."),s(`
`),t("span",{class:"token punctuation"},"}")])],-1),g={class:"doc-note doc-note--tip"},w=t("p",{class:"doc-note__title"},"TIP",-1),b={__name:"routing",setup(x){return(R,v)=>(e(),c(u,{title:"App Routing",desc:"(@quasar/app-webpack) How to use the Vue Router in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/routing"},{default:n(()=>[k,d,t("div",h,[f,t("p",null,[s("Quasar documentation assumes you are already familiar with "),o(a,{to:"https://github.com/vuejs/vue-router"},{default:n(()=>[s("Vue Router")]),_:1}),s(". Below it’s described only the basics of how to make use of it in a Quasar CLI project. For the full list of its features please visit the "),o(a,{to:"https://router.vuejs.org/"},{default:n(()=>[s("Vue Router documentation")]),_:1}),s(".")])]),t("p",null,[s("The "),_,s(" needs to import your website/app’s Pages and Layouts. Read more on "),o(a,{to:"/layout/routing-with-layouts-and-pages"},{default:n(()=>[s("Routing with Layouts and Pages")]),_:1}),s(" documentation page.")]),m,o(p(r),null,{default:n(()=>[y,o(i)]),_:1}),t("div",g,[w,t("p",null,[s("If you are developing a SSR app, then you can check out the "),o(a,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:n(()=>[s("ssrContext")]),_:1}),s(" Object that gets supplied server-side.")])])]),_:1}))}},P=l(b,[["__file","routing.md"]]);export{P as default};
