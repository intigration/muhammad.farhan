import{c as i}from"./_examples_frameless-electron-window.js";import{D as h,a}from"./DocPage.js";import{D as c}from"./DocTree.js";import{D as m}from"./DocPrerender.js";import{C as g}from"./CopyButton.js";import{_ as f}from"./index.js";import{b as w,d as v,w as r,h as e,f as n,i as o,e as s}from"./vendor.js";const k=e("p",null,"This page refers only to upgrading a Quasar UI v1 app (with Vue 2) to a Quasar UI v2 one (with Vue 3).",-1),_=e("p",null,"The SSR mode for Quasar v2 is an almost complete overhaul of the previous version, significantly improving the developer experience. Some of the changes were needed due to the architectural requirements of Vue 3.",-1),S=e("code",{class:"doc-token"},"index.js",-1),b=e("code",{class:"doc-token"},"extension.js",-1),y=e("li",null,"The exact same middleware can now run on both dev and production builds, not just the old “SSR Extension”.",-1),x=e("li",null,"You can enable linting for SSR middlewares too.",-1),q=e("li",null,"Due to the architecture of Vue 3, you now can (and need!) to define a SSR transformation for each of your custom Vue directives (Quasar supplied Vue directives are excluded from this).",-1),R=e("strong",null,"Out of the box support for Typescript",-1),T=e("code",{class:"doc-token"},"src-ssr",-1),j=e("p",null,[o("The "),e("strong",null,"old"),o(" structure:")],-1),C=e("p",null,[o("The "),e("strong",null,"NEW"),o(" structure:")],-1),D=e("code",{class:"doc-token"},"index.js",-1),Q=e("code",{class:"doc-token"},"extension.js",-1),V=e("p",null,"So here we go:",-1),P=e("ol",null,[e("li",null,[o("We recommend that you save the content of your current "),e("code",{class:"doc-token"},"src-ssr"),o(" folder somewhere else.")]),e("li",null,[o("Remove and add back the Quasar SSR mode ("),e("code",{class:"doc-token"},"$ quasar mode remove ssr"),o(", "),e("code",{class:"doc-token"},"$quasar mode add ssr"),o(").")]),e("li",null,"Declare the middleware files under quasar.config file > ssr > middlewares: []. The array should look like this:")],-1),$=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token literal-property property"},"middlewares"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"["),o(`
  ctx`),e("span",{class:"token punctuation"},"."),o("prod "),e("span",{class:"token operator"},"?"),o(),e("span",{class:"token string"},"'compression'"),o(),e("span",{class:"token operator"},":"),o(),e("span",{class:"token string"},"''"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token string"},"'render'"),o(),e("span",{class:"token comment"},"// should always keep this one as last one"),o(`
`),e("span",{class:"token punctuation"},"]")])],-1),U={start:"4"},E=e("li",null,"You will then have to port the old logic by using the SSR middleware files, which should be really easy (since you’ll end up copy-pasting most of the old code into the middleware files).",-1),N=e("p",null,[o("Also remember that the files that you create in the "),e("code",{class:"doc-token"},"src-ssr/middlewares"),o(" folder need to also be declared under quasar.config file > ssr > middlewares. This is because their order matters, just like how the order of applying any Expressjs middleware matters too. You can use the "),e("code",{class:"doc-token"},"$ quasar new ssrmiddleware <name>"),o(" command to speed things up.")],-1),Y=e("p",null,[o("Always keep the original "),e("code",{class:"doc-token"},"render"),o(" middleware as last one in the list.")],-1),I={__name:"ssr-upgrade-guide",setup(B){const u=[{name:"Configuring SSR",category:"SSR mode",path:"/quasar-cli-webpack/developing-ssr/configuring-ssr"},{name:"ssrContext",category:"SSR mode",path:"/quasar-cli-webpack/developing-ssr/ssr-context"},{name:"SSR Middleware",category:"SSR mode",path:"/quasar-cli-webpack/developing-ssr/ssr-middleware"},{name:"SSR Production Export",category:"SSR mode",path:"/quasar-cli-webpack/developing-ssr/ssr-production-export"}],p=[{id:"upgrading-from-quasar-v1",title:"2. Upgrading from Quasar v1"},{id:"high-overview-of-the-improvements",title:"2.1. High overview of the improvements",sub:!0},{id:"the-src-ssr-folder",title:"2.2. The /src-ssr folder",sub:!0},{id:"performing-the-upgrade",title:"2.3. Performing the upgrade",sub:!0},{id:"tips",title:"2.4. Tips",sub:!0}],d={oldTree:{l:"src-ssr",c:[{l:"index.js",e:"Production Node webserver serving the app"},{l:"extension.js",e:"Common code for production & development server"}]},newTree:{l:"src-ssr",c:[{l:"middlewares/",e:"SSR middleware files"},{l:"production-export.js",e:"SSR webserver production export"}]}};return(H,t)=>(w(),v(h,{title:"Upgrade guide on SSR",desc:"(@quasar/app-webpack) Upgrading instructions from Quasar v1 to v2 when dealing with SSR.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-ssr/ssr-upgrade-guide",toc:p,related:u},{default:r(()=>[k,e("h2",{id:"upgrading-from-quasar-v1",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=l=>n(i)("upgrading-from-quasar-v1"))},"Upgrading from Quasar v1"),_,e("p",null,[o("Please note that currently the only Nodejs supported server is "),s(a,{to:"https://expressjs.com/"},{default:r(()=>[o("Expressjs")]),_:1}),o(".")]),e("h3",{id:"high-overview-of-the-improvements",class:"doc-heading doc-h3",onClick:t[1]||(t[1]=l=>n(i)("high-overview-of-the-improvements"))},"High overview of the improvements"),e("ul",null,[e("li",null,[o("Introducing the concept of "),s(a,{to:"/quasar-cli-webpack/developing-ssr/ssr-middleware"},{default:r(()=>[o("SSR middleware")]),_:1}),o(" files, which also allows for HMR for them while on dev. This replaces the old "),S,o(" and "),b,o(".")]),y,x,q,e("li",null,[R,o(". All .js files under "),T,o(" can be now rewritten as .ts. Make sure to read about "),s(a,{to:"/quasar-cli-webpack/developing-ssr/ssr-with-typescript"},{default:r(()=>[o("SSR with Typescript")]),_:1}),o(" for more information.")])]),e("h3",{id:"the-src-ssr-folder",class:"doc-heading doc-h3",onClick:t[2]||(t[2]=l=>n(i)("the-src-ssr-folder"))},"The /src-ssr folder"),j,s(c,{def:d.oldTree},null,8,["def"]),C,s(c,{def:d.newTree},null,8,["def"]),e("h3",{id:"performing-the-upgrade",class:"doc-heading doc-h3",onClick:t[3]||(t[3]=l=>n(i)("performing-the-upgrade"))},"Performing the upgrade"),e("p",null,[o("The old "),D,o(" and "),Q,o(" have been replaced by the superior SSR middleware files. It would be a good idea to "),s(a,{to:"/quasar-cli-webpack/developing-ssr/ssr-middleware"},{default:r(()=>[o("read about the SSR middleware")]),_:1}),o(" before diving in further.")]),V,P,s(n(m),null,{default:r(()=>[$,s(g)]),_:1}),e("ol",U,[E,e("li",null,[o("Review quasar.config file > ssr properties. Most of the old props have been removed and replaced by "),s(a,{to:"/quasar-cli-webpack/developing-ssr/configuring-ssr#quasar-config-js"},{default:r(()=>[o("new ones")]),_:1}),o(".")])]),N,Y,e("h3",{id:"tips",class:"doc-heading doc-h3",onClick:t[4]||(t[4]=l=>n(i)("tips"))},"Tips"),e("ul",null,[e("li",null,[o("You might want to check out the "),s(a,{to:"/quasar-cli-webpack/developing-ssr/configuring-ssr"},{default:r(()=>[o("new configuration")]),_:1}),o(" properties available through quasar.config file > ssr.")]),e("li",null,[o("You might want to check out the "),s(a,{to:"/quasar-cli-webpack/developing-ssr/ssr-context"},{default:r(()=>[o("ssrContext")]),_:1}),o(" page which describes in detail what properties you can use from it.")]),e("li",null,[o("You might want to check out the "),s(a,{to:"/quasar-cli-webpack/developing-ssr/ssr-production-export"},{default:r(()=>[o("SSR Production Export")]),_:1}),o(" page which describes in detail what the production-export.js/ts can do for you.")])])]),_:1}))}},F=f(I,[["__file","ssr-upgrade-guide.md"]]);export{F as default};
