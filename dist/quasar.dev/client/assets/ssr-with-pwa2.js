import{b as a,d as n,w as t,e as s,f as r,h as e,i as o}from"./vendor.js";import{D as i,a as c}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as u}from"./index.js";const d=e("p",null,[o("With Quasar CLI you can build your app with the killer combo of SSR + PWA. In order to enable PWA for SSR builds, you need to edit your "),e("code",{class:"doc-token"},"/quasar.config"),o(" file first:")],-1),h=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token keyword"},"return"),o(),e("span",{class:"token punctuation"},"{"),o(`
  `),e("span",{class:"token comment"},"// ..."),o(`
  `),e("span",{class:"token literal-property property"},"ssr"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token literal-property property"},"pwa"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token boolean"},"true"),o(`
  `),e("span",{class:"token punctuation"},"}"),o(`
`),e("span",{class:"token punctuation"},"}")])],-1),f=e("p",null,[o("The first request of a "),e("strong",null,"new"),o(" client will be served from the webserver (so SSR supplies the initial page content). The PWA gets installed then it takes over on client side. All further requests will be served from cache (unless you have some custom configuration to change that).")],-1),k={class:"doc-note"},w={__name:"ssr-with-pwa",setup(_){return(m,b)=>(a(),n(i,{title:"SSR with PWA Client Takeover",desc:"(@quasar/app-webpack) How to configure your Quasar server-side rendered app to become a Progressive Web App on the client side.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-ssr/ssr-with-pwa"},{default:t(()=>[d,s(r(l),{title:"/quasar.config file"},{default:t(()=>[h,s(p)]),_:1}),f,e("blockquote",k,[e("p",null,[o("For more information on PWA, head on to "),s(c,{to:"/quasar-cli-webpack/developing-pwa/introduction"},{default:t(()=>[o("PWA Introduction")]),_:1}),o(" and read the whole PWA Guide section.")])])]),_:1}))}},q=u(w,[["__file","ssr-with-pwa.md"]]);export{q as default};
