import{c}from"./_examples_frameless-electron-window.js";import{D as u,a as l}from"./DocPage.js";import{D as d}from"./DocPrerender.js";import{C as k}from"./CopyButton.js";import{_ as m}from"./index.js";import{b as h,d as g,w as t,h as n,f as o,e as s,i as e}from"./vendor.js";const f=n("p",null,"We’ll be using Quasar CLI to develop and build an Electron App. The difference between building a SPA, PWA, Mobile App or an Electron App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.",-1),b=n("p",null,"But first, let’s learn how we can configure the Electron build.",-1),y=n("p",null,[e("You may notice that the "),n("code",{class:"doc-token"},"/quasar.config"),e(" file contains a property called "),n("code",{class:"doc-token"},"electron"),e(".")],-1),w=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// should you wish to change default files"),e(`
`),n("span",{class:"token comment"},"// (notice no extension, so it resolves to both .js and .ts)"),e(`
`),n("span",{class:"token literal-property property"},"sourceFiles"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"electronMain"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},"'src-electron/electron-main'"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token literal-property property"},"electronPreload"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},"'src-electron/electron-preload'"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

`),n("span",{class:"token comment"},"// electron configuration"),e(`
`),n("span",{class:"token literal-property property"},"electron"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// specify the debugging port to use for the Electron app when running in development mode"),e(`
  `),n("span",{class:"token literal-property property"},"inspectPort"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token number"},"5858"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token literal-property property"},"bundler"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},"'packager'"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token comment"},"// or 'builder'"),e(`

  `),n("span",{class:"token comment"},"// electron-packager options"),e(`
  `),n("span",{class:"token comment"},"// https://electron.github.io/electron-packager/main/"),e(`
  `),n("span",{class:"token literal-property property"},"packager"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"//..."),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// electron-builder options"),e(`
  `),n("span",{class:"token comment"},"// https://www.electron.build/configuration/configuration"),e(`
  `),n("span",{class:"token literal-property property"},"builder"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"//..."),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// Specify additional parameters when yarn/npm installing"),e(`
  `),n("span",{class:"token comment"},"// the UnPackaged folder, right before bundling with either"),e(`
  `),n("span",{class:"token comment"},"// electron packager or electron builder;"),e(`
  `),n("span",{class:"token comment"},"// Example: [ 'install', '--production', '--ignore-optional', '--some-other-param' ]"),e(`
  `),n("span",{class:"token literal-property property"},"unPackagedInstallParams"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// optional; add/remove/change properties"),e(`
  `),n("span",{class:"token comment"},"// of production generated package.json"),e(`
  `),n("span",{class:"token function"},"extendPackageJson"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"pkg"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// directly change props of pkg;"),e(`
    `),n("span",{class:"token comment"},"// no need to return anything"),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),e(`
  `),n("span",{class:"token comment"},"// the Main Process ONLY (/src-electron/main-process/electron-main.js)"),e(`
  `),n("span",{class:"token function"},"extendWebpackMain"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),e(`
    `),n("span",{class:"token comment"},"// no need to return anything"),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackMain() but uses webpack-chain;"),e(`
  `),n("span",{class:"token comment"},"// for the Main Process ONLY (/src-electron/main-process/electron-main.js)"),e(`
  `),n("span",{class:"token function"},"chainWebpackMain"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),e(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),e(`

    `),n("span",{class:"token comment"},"// example:"),e(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),e(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// optional; webpack config Object for"),e(`
  `),n("span",{class:"token comment"},"// the Preload Process ONLY (/src-electron/main-process/electron-preload.js)"),e(`
  `),n("span",{class:"token function"},"extendWebpackPreload"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"cfg"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// directly change props of cfg;"),e(`
    `),n("span",{class:"token comment"},"// no need to return anything"),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token comment"},"// optional; EQUIVALENT to extendWebpackPreload() but uses webpack-chain;"),e(`
  `),n("span",{class:"token comment"},"// for the Preload Process ONLY (/src-electron/main-process/electron-preload.js)"),e(`
  `),n("span",{class:"token function"},"chainWebpackPreload"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"chain"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// chain is a webpack-chain instance"),e(`
    `),n("span",{class:"token comment"},"// of the Webpack configuration"),e(`

    `),n("span",{class:"token comment"},"// example:"),e(`
    `),n("span",{class:"token comment"},"// chain.plugin('eslint-webpack-plugin')"),e(`
    `),n("span",{class:"token comment"},"//   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])"),e(`
  `),n("span",{class:"token punctuation"},"}"),e(`
`),n("span",{class:"token punctuation"},"}")])],-1),_=n("code",{class:"doc-token"},"dir",-1),v=n("code",{class:"doc-token"},"out",-1),P=n("p",null,"You have to choose to use either packager or builder. They are both excellent open-source projects, however they serve slightly different needs. With packager you will be able to build unsigned projects for all major platforms from one machine (with restrictions). Although this is great, if you just want something quick and dirty, there is more platform granularity (and general polish) in builder. Cross-compiling your binaries from one computer doesn’t really work with builder (or we haven’t found the recipe yet…)",-1),x=n("p",null,[e("By default, all "),n("code",{class:"doc-token"},"dependencies"),e(" from your root "),n("code",{class:"doc-token"},"package.json"),e(" file get installed and embedded into the production executable.")],-1),j=n("p",null,"This means that it will also include your UI-only deps, which are already bundled in the UI files (so it will duplicate them). From our CLI perspective, we don’t have any generic way of telling whether a dependency is UI only or if it’s used by the main/preload scripts, so we cannot reliably auto-remove them.",-1),q=n("p",null,[e("However, you can do this by using quasar.conf > electron > extendPackageJson(pkg) and overwriting or tampering with the "),n("code",{class:"doc-token"},"dependencies"),e(" key from your "),n("code",{class:"doc-token"},"package.json"),e(" file. If you leave only the main & preload threads depdendencies then this will lead to a smaller production executable file.")],-1),L={__name:"configuring-electron",setup(C){const r=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],i=[{id:"quasar-config-file",title:"2. quasar.config file"},{id:"packager-vs-builder",title:"3. Packager vs. Builder"},{id:"dependencies-optimization",title:"4. Dependencies optimization"}];return(E,a)=>(h(),g(u,{title:"Configuring Electron",desc:"(@quasar/app-webpack) How to manage your Electron apps with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-electron-apps/configuring-electron",toc:i,related:r},{default:t(()=>[f,b,n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=p=>o(c)("quasar-config-file"))},"quasar.config file"),y,s(o(d),null,{default:t(()=>[w,s(k)]),_:1}),n("p",null,[e("The “packager” prop refers to "),s(l,{to:"https://electron.github.io/electron-packager/main/"},{default:t(()=>[e("electron-packager options")]),_:1}),e(". The "),_,e(" and "),v,e(" properties are overwritten by Quasar CLI to ensure the best results.")]),n("p",null,[e("The “builder” prop refers to "),s(l,{to:"https://www.electron.build/configuration/configuration"},{default:t(()=>[e("electron-builder options")]),_:1}),e(".")]),n("h2",{id:"packager-vs-builder",class:"doc-heading doc-h2",onClick:a[1]||(a[1]=p=>o(c)("packager-vs-builder"))},"Packager vs. Builder"),P,n("h2",{id:"dependencies-optimization",class:"doc-heading doc-h2",onClick:a[2]||(a[2]=p=>o(c)("dependencies-optimization"))},"Dependencies optimization"),x,j,q]),_:1}))}},D=m(L,[["__file","configuring-electron.md"]]);export{D as default};
