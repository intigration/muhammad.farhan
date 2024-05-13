import{b as l,d as u,w as s,h as e,i as n,e as t,f as o}from"./vendor.js";import{D as r,a}from"./DocPage.js";import{D as d}from"./DocTree.js";import{D as i}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as k}from"./index.js";const m=e("p",null,"This guide is for when you want to create a new directive and provide it through an App Extension, which will inject it into the hosting app.",-1),h={class:"doc-note doc-note--tip"},f=e("p",{class:"doc-note__title"},"TIP",-1),v={class:"doc-note doc-note--tip"},_=e("p",{class:"doc-note__title"},"Full Example",-1),g=e("p",null,"Create a folder structure to keep your code modularized and organized. For instance, for a directive, create a structure that looks like this:",-1),w=e("code",{class:"doc-token"},"/index.js",-1),y=e("p",null,"Let’s break it down.",-1),b=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"api"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token comment"},"// (Optional!)"),n(`
  `),e("span",{class:"token comment"},"// Quasar compatibility check; you may need"),n(`
  `),e("span",{class:"token comment"},'// hard dependencies, as in a minimum version of the "quasar"'),n(`
  `),e("span",{class:"token comment"},"// package or a minimum version of Quasar App CLI"),n(`
  api`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"compatibleWith"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'quasar'"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token string"},"'^2.0.0'"),e("span",{class:"token punctuation"},")"),n(`

  `),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token punctuation"},"("),n("api"),e("span",{class:"token punctuation"},"."),n("hasVite "),e("span",{class:"token operator"},"==="),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
    api`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"compatibleWith"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'@quasar/app-vite'"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token string"},"'^2.0.0-beta.1'"),e("span",{class:"token punctuation"},")"),n(`
  `),e("span",{class:"token punctuation"},"}"),n(`
  `),e("span",{class:"token keyword"},"else"),n(),e("span",{class:"token punctuation"},"{"),n(),e("span",{class:"token comment"},"// api.hasWebpack === true"),n(`
    api`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"compatibleWith"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'@quasar/app-webpack'"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token string"},"'^4.0.0-beta.1'"),e("span",{class:"token punctuation"},")"),n(`
  `),e("span",{class:"token punctuation"},"}"),n(`

  `),e("span",{class:"token comment"},"// Here we extend the /quasar.config file, so we can add"),n(`
  `),e("span",{class:"token comment"},"// a boot file which registers our new Vue directive;"),n(`
  `),e("span",{class:"token comment"},'// "extendConf" will be defined below (keep reading the tutorial)'),n(`
  api`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"extendQuasarConf"),e("span",{class:"token punctuation"},"("),n("extendConf"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token punctuation"},"}")])],-1),x=e("p",null,"The first group does a compatibility check with Quasar (which is optional, but recommended). If your component is using features of Quasar that were available after a certain version, you can make sure that the version of Quasar installed is the correct one.",-1),D={class:"doc-note doc-note--tip"},j=e("p",{class:"doc-note__title"},"TIP",-1),q=e("code",{class:"doc-token"},"api.compatibleWith()",-1),I=e("p",null,[n("The second group tells Quasar to call our custom function when the "),e("code",{class:"doc-token"},"extendQuasarConf"),n(" CLI life-cycle hook is called. It would look something like this:")],-1),A=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token function"},"extendConf"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[n("conf"),e("span",{class:"token punctuation"},","),n(" api")]),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token comment"},"// make sure my-directive boot file is registered"),n(`
  conf`),e("span",{class:"token punctuation"},"."),n("boot"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"push"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'~quasar-app-extension-my-directive/src/boot/register-my-directive.js'"),e("span",{class:"token punctuation"},")"),n(`

  `),e("span",{class:"token comment"},"// @quasar/app-vite does not need this"),n(`
  `),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token punctuation"},"("),n("api"),e("span",{class:"token punctuation"},"."),n("hasVite "),e("span",{class:"token operator"},"!=="),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token comment"},"// make sure boot & other files get transpiled"),n(`
    conf`),e("span",{class:"token punctuation"},"."),n("build"),e("span",{class:"token punctuation"},"."),n("transpileDependencies"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"push"),e("span",{class:"token punctuation"},"("),e("span",{class:"token regex"},[e("span",{class:"token regex-delimiter"},"/"),e("span",{class:"token regex-source language-regex"},"quasar-app-extension-my-directive[\\\\/]src"),e("span",{class:"token regex-delimiter"},"/")]),e("span",{class:"token punctuation"},")"),n(`
  `),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token punctuation"},"}")])],-1),C=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" MyDirective "),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},"'../directive/MyDirective.js'"),n(`

`),e("span",{class:"token comment"},"// We globally register our directive with Vue;"),n(`
`),e("span",{class:"token comment"},"// Remember that all directives in Vue will start with 'v-'"),n(`
`),e("span",{class:"token comment"},"// but that should not be part of your directive name"),n(`
`),e("span",{class:"token comment"},"// https://vuejs.org/guide/custom-directive.html#custom-directives"),n(`
`),e("span",{class:"token comment"},"// 'my-directive' will be used as 'v-my-directive'"),n(`
`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[e("span",{class:"token punctuation"},"{"),n(" app "),e("span",{class:"token punctuation"},"}")]),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"=>"),n(),e("span",{class:"token punctuation"},"{"),n(`
  app`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"directive"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'my-directive'"),e("span",{class:"token punctuation"},","),n(" MyDirective"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token punctuation"},"}")])],-1),Q={__name:"provide-a-directive",setup(T){const p={tree:{l:".",c:[{l:"package.json"},{l:"src",c:[{l:"boot",e:"folder to contain boot code",c:[{l:"register-my-directive.js",e:"boot file for directive"}]},{l:"directive",e:"folder to contain directive",c:[{l:"MyDirective.js",e:"directive file"}]},{l:"index.js",e:"Described in Index API"}]}]}};return(V,E)=>(l(),u(r,{title:"Providing a directive",desc:"Tips and tricks on how to provide a Vue directive to the host app of a Quasar App Extension.",heading:"","edit-link":"app-extensions/tips-and-tricks/provide-a-directive"},{default:s(()=>[m,e("div",h,[f,e("p",null,[n("To create an App Extension project folder, please first read the "),t(a,{to:"/app-extensions/development-guide/introduction"},{default:s(()=>[n("Development Guide > Introduction")]),_:1}),n(".")])]),e("div",v,[_,e("p",null,[n("To see an example of what we will build, head over to "),t(a,{to:"https://github.com/quasarframework/app-extension-examples/tree/v2/my-directive"},{default:s(()=>[n("MyDirective full example")]),_:1}),n(", which is a GitHub repo with this App Extension.")])]),g,t(d,{def:p.tree},null,8,["def"]),e("p",null,[n("Now, you need to handle registering your Vue directive. You do this with the "),w,n(" file (described in the "),t(a,{to:"/app-extensions/development-guide/index-api"},{default:s(()=>[n("Index API")]),_:1}),n(") that was created when you set up your new App Extension.")]),y,t(o(i),{title:"File: /index.js"},{default:s(()=>[b,t(c)]),_:1}),x,e("div",D,[j,e("p",null,[n("Not only can you do a "),q,n(" to check against Quasar packages, but with any other available packages (that you do not supply yourself through your App Extension) as well. Please read "),t(a,{to:"/app-extensions/development-guide/introduction#handling-package-dependencies"},{default:s(()=>[n("Handling package dependencies")]),_:1}),n(" section from the App Extension Development Guide > Introduction page for more information.")])]),I,t(o(i),{title:"File: /index.js"},{default:s(()=>[A,t(c)]),_:1}),e("p",null,[n("Finally, let’s see how the boot file would look like. Make sure that you read the "),t(a,{to:"/quasar-cli-vite/boot-files"},{default:s(()=>[n("@quasar/app-vite Boot files")]),_:1}),n(" / "),t(a,{to:"/quasar-cli-webpack/boot-files"},{default:s(()=>[n("@quasar/app-webpack Boot files")]),_:1}),n(" documentation and understand what a Boot file is first.")]),t(o(i),{title:"File: /src/boot/my-directive.js"},{default:s(()=>[C,t(c)]),_:1})]),_:1}))}},L=k(Q,[["__file","provide-a-directive.md"]]);export{L as default};
