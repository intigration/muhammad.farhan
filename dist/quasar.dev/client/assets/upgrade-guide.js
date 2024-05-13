import{b as k,d as f,w as a,h as n,f as t,e,i as s,k as i,l as h}from"./vendor.js";import{c as p}from"./_examples_frameless-electron-window.js";import{D as g,a as d}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as o}from"./CopyButton.js";import{_ as m}from"./index.js";const v=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"CLI is currently in beta"),n("ul",null,[n("li",null,[s("Please help test the CLI so we can get it out of the "),n("code",{class:"doc-token"},"beta"),s(" status. We thank you in advance for your help!")]),n("li",null,"Although we do not plan on adding any further breaking changes, there is still a slight change that we will be forced to do one, based on your feedback.")])],-1),x=n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"All other docs pages will refer to the old @quasar/app-vite version (v1) specs. Only this page mentions (for now) about how to use the v2 beta.")],-1),_=n("p",null,"You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-vite. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:",-1),w=n("pre",{class:"doc-code"},[n("code",null,[s(`api.compatibleWith(
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` '@quasar/app-vite',
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` '^1.0.0'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` '^1.0.0 || ^2.0.0-beta.1'
`)]),s(")")])],-1),b=n("li",null,"Minimum Node.js version is now 18 (mainly due to Vite 5)",-1),y=n("li",null,[s("We have shifted towards an ESM style for the whole Quasar project folder, so many default project files now require ESM code (although using "),n("code",{class:"doc-token"},".cjs"),s(" as an extension for these files is supported, but you will most likely need to rename the extension should you not wish to change anything). One example is the "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" file which now it’s assumed to be ESM too (so change from "),n("code",{class:"doc-token"},".js"),s(" to "),n("code",{class:"doc-token"},".cjs"),s(" should you still want a CommonJs file).")],-1),q=n("li",null,"The “clean” cmd has been re-designed. Type “quasar clean -h” in your upgraded Quasar project folder for more info.",-1),P=n("li",null,"Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence.",-1),j=n("li",null,"feat+refactor(app-vite): ability to run multiple modes + dev/build simultaneously (huge effort!)",-1),T=n("li",null,"SSR and Electron modes now build in ESM format.",-1),S=n("li",null,[n("strong",null,"We will detail more breaking changes for each of the Quasar modes below"),s(".")],-1),E=n("p",null,"Some of the work below has already been backported to the old @quasar/app-vite v1, but posting here for reader’s awareness.",-1),C=n("ul",null,[n("li",null,"feat(app-vite): upgrade to Vite 5"),n("li",null,"feat(app-vite): ability to run multiple quasar dev/build commands simultaneously (example: can run “quasar dev -m capacitor” and “quasar dev -m ssr” and “quasar dev -m capacitor -T ios” simultaneously)"),n("li",null,"feat(app-vite): Better TS typings overall"),n("li",null,"refactor(app-vite): port CLI to ESM format (major effort! especially to support Vite 5 and SSR)"),n("li",null,"feat(app-vite): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)"),n("li",null,"feat(app-vite): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)"),n("li",null,"feat(app-vite): reload app if one of the imports from quasar.config file changes"),n("li",null,"feat(app-vite): TS detection should keep account of quasar.config file format too (quasar.config.ts)"),n("li",null,"feat(app-vite): support for SSR development with HTTPS"),n("li",null,"feat(app-vite): env dotfiles support #15303"),n("li",null,"feat(app-vite): New quasar.config file props: build > envFolder (string) and envFiles (string[])"),n("li",null,"feat(app-vite): reopen browser (if configured so) when changing app url through quasar.config file"),n("li",null,"feat&perf(app-vite): faster & more accurate algorithm for determining node package manager to use"),n("li",null,"feat(app-vite): upgrade deps"),n("li",null,"feat(app-vite): remove workaround for bug in Electron 6-8 in cli templates (#15845)"),n("li",null,"feat(app-vite): remove bundleWebRuntime config for Capacitor v5+"),n("li",null,"feat(app-vite): use workbox v7 by default"),n("li",null,"feat(app-vite): quasar.config > pwa > injectPwaMetaTags can now also be a function: (({ pwaManifest, publicPath }) => string);"),n("li",null,"feat(app-vite): quasar.config > build > htmlMinifyOptions"),n("li",null,"feat(app-vite): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools"),n("li",null,"perf(app-vite): SSR render-template in specific esm or cjs form, according to host project; interpolation by variable"),n("li",null,"perf(app-vite): only verify quasar.conf server address for “dev” cmd"),n("li",null,"feat(app-vite): pick new electron inspect port for each instance"),n("li",null,"feat(app-vite): Electron - can now load multiple preload scripts"),n("li",null,"refactor(app-vite): AE support - better and more efficient algorithms"),n("li",null,"feat(app-vite): AE support for ESM format"),n("li",null,"feat(app-vite): AE support for TS format (through a build step)"),n("li",null,"feat(app-vite): AE API new methods -> hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()"),n("li",null,"feat(app-vite): AE -> Prompts API (and ability for prompts default exported fn to be async)"),n("li",null,"refactor(app-vite): the “clean” cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)"),n("li",null,"feat(app-vite): Support for Bun as package manager #16335"),n("li",null,"feat(app-vite): for default /src-ssr template -> prod ssr -> on error, print err stack if built with debugging enabled"),n("li",null,"feat(app-vite): extend build > vitePlugins form (additional { server?: boolean, client?: boolean } param")],-1),R={class:"doc-note doc-note--tip"},A=n("p",{class:"doc-note__title"},"Recommendation",-1),L=n("p",null,[s("If you are unsure that you won’t skip by mistake any of the recommended changes, you can scaffold a new project folder with the @quasar/app-vite v2 beta at any time and then easily start porting your app from there. The bulk of the changes refer to the different project folder config files and mostly NOT to your /src files. "),n("br"),n("br")],-1),M=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(" create quasar")])],-1),W=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(" init quasar")])],-1),N=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),s(`
$ `),n("span",{class:"token function"},"pnpm"),s(" create quasar")])],-1),I=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),s(`
$ bun create quasar`)])],-1),D=n("br",null,null,-1),O=n("p",null,"Preparations:",-1),$=n("li",null,[n("p",null,[s("If using the global installation of Quasar CLI ("),n("code",{class:"doc-token"},"@quasar/cli"),s("), make sure that you have the latest one. This is due to the support of quasar.config file in multiple formats.")])],-1),F=n("li",null,[n("p",null,"Again, we highlight that the minimum supported version of Node.js is now v18 (always use the LTS versions of Node.js - the higher the version the better).")],-1),Q=n("p",null,[s("Edit your "),n("code",{class:"doc-token"},"/package.json"),s(" on the "),n("code",{class:"doc-token"},"@quasar/app-vite"),s(" entry and assign it "),n("code",{class:"doc-token"},"^2.0.0-beta.1"),s(":")],-1),U=n("pre",{class:"doc-code"},[n("code",null,[s(`"devDependencies": {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` "@quasar/app-vite": "^1.0.0",
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "@quasar/app-vite": "^2.0.0-beta.1"
`)]),s("}")])],-1),B=n("br",null,null,-1),H=n("br",null,null,-1),V=n("br",null,null,-1),G=n("p",null,[s("Convert your "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" file to the ESM format (which is recommended, otherwise rename the file extension to "),n("code",{class:"doc-token"},".cjs"),s(" and use CommonJs format).")],-1),Y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* ctx */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),J=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Tip on Typescript"),n("p",null,[s("You can now write this file in TS too should you wish (rename "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" to "),n("code",{class:"doc-token"},"/quasar.config.ts"),s(" – notice the "),n("code",{class:"doc-token"},".ts"),s(" file extension).")])],-1),X=n("p",null,[s("We "),n("strong",null,"highly recommend"),s(" setting "),n("code",{class:"doc-token"},"type"),s(" to "),n("code",{class:"doc-token"},"module"),s(" in your "),n("code",{class:"doc-token"},"/package.json"),s(". Based on it, the Quasar CLI will make decisions on the distributables that it builds (example: Electron in ESM or CJS form).")],-1),K=n("pre",{class:"doc-code"},[n("code",null,[s(`{
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "type": "module"
`)]),s("}")])],-1),z=n("br",null,null,-1),Z=n("br",null,null,-1),nn=n("br",null,null,-1),sn=n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Old name"),n("th",{class:"text-left"},"New name")])],-1),en=n("tbody",null,[n("tr",null,[n("td",null,"postcss.config.js"),n("td",null,"postcss.config.cjs")]),n("tr",null,[n("td",null,".eslintrc.js"),n("td",null,".eslintrc.cjs")])],-1),an=n("br",null,null,-1),tn=n("p",null,[s("You might want to add the following to your "),n("code",{class:"doc-token"},"/.gitignore"),s(" file. The "),n("code",{class:"doc-token"},"/quasar.config.*.temporary.compiled*"),s(" entry refers to files that are left for inspection purposes when something fails with your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file (and can be removed by the "),n("code",{class:"doc-token"},"quasar clean"),s(" command):")],-1),on=n("pre",{class:"doc-code"},[n("code",null,[s(`.DS_Store
.thumbs.db
node_modules

`),n("span",{class:"token comment"},"# Quasar core related directories"),s(`
.quasar
/dist
`),n("span",{class:"c-line c-highlight"}),s(`/quasar.config.*.temporary.compiled*

`),n("span",{class:"token comment"},"# local .env files"),s(`
`),n("span",{class:"c-line c-highlight"}),s(`.env.local*

`),n("span",{class:"token comment"},"# Cordova related directories and files"),s(`
/src-cordova/node_modules
/src-cordova/platforms
/src-cordova/plugins
/src-cordova/www

`),n("span",{class:"token comment"},"# Capacitor related directories and files"),s(`
/src-capacitor/www
/src-capacitor/node_modules

`),n("span",{class:"token comment"},"# Log files"),s(`
npm-debug.log*
yarn-debug.log*
yarn-error.log*

`),n("span",{class:"token comment"},"# Editor directories and files"),s(`
.idea
*.suo
*.ntvs*
*.njsproj
*.sln`)])],-1),ln=n("br",null,null,-1),cn=n("p",null,[s("If using Typescript, then ensure that your "),n("code",{class:"doc-token"},"/tsconfig.json"),s(" file looks like this:")],-1),pn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"@quasar/app-vite/tsconfig-preset"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"baseUrl"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"."'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"c-line c-highlight"}),s("  "),n("span",{class:"token property"},'"exclude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
`),n("span",{class:"c-line c-highlight"}),s("    "),n("span",{class:"token string"},'"./dist"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"c-line c-highlight"}),s("    "),n("span",{class:"token string"},'"./.quasar"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"c-line c-highlight"}),s("    "),n("span",{class:"token string"},'"./node_modules"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"c-line c-highlight"}),s("    "),n("span",{class:"token string"},'"./src-capacitor"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"c-line c-highlight"}),s("    "),n("span",{class:"token string"},'"./src-cordova"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"c-line c-highlight"}),s("    "),n("span",{class:"token string"},'"./quasar.config.*.temporary.compiled*"'),s(`
`),n("span",{class:"c-line c-highlight"}),s("  "),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),rn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])],-1),dn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])],-1),un=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])],-1),kn=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])],-1),fn=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("Notice the "),n("code",{class:"doc-token"},"typescript"),s(" dependency is <= 5.3. There is currently an issue with ESLint and newer TS (5.4+). This is only a temporary thing until upstream fixes it.")])],-1),hn=n("pre",{class:"doc-code"},[n("code",null,[s(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),s(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),s("/quasar.config.*.temporary.compiled*")])],-1),gn=n("p",null,[s("Create a new file called "),n("code",{class:"doc-token"},"tsconfig.vue-tsc.json"),s(" in the root of your project folder:")],-1),mn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"./tsconfig.json"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"skipLibCheck"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),vn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` eslint: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` },
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   vitePlugins: [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    ['vite-plugin-checker', {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       vueTsc: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         tsconfigPath: 'tsconfig.vue-tsc.json'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       },
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       eslint: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     }, { server: false }]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," }")])])],-1),xn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" vite-plugin-checker")])],-1),_n=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" --save-dev vite-plugin-checker")])],-1),wn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" vite-plugin-checker")])],-1),bn=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" vite-plugin-checker")])],-1),yn=n("pre",{class:"doc-code"},[n("code",null,[s(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),s(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),s("/quasar.config.*.temporary.compiled*")])],-1),qn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` eslint: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` },
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   vitePlugins: [
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    ['vite-plugin-checker', {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       eslint: {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     }, { server: false }]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," }")])])],-1),Pn=n("ul",null,[n("li",null,[s("No need to change anything in the "),n("code",{class:"doc-token"},"/src"),s(", "),n("code",{class:"doc-token"},"/src-capacitor"),s(" or "),n("code",{class:"doc-token"},"/src-cordova"),s(" folders.")])],-1),jn=n("p",null,[s("The "),n("code",{class:"doc-token"},"register-service-worker"),s(" dependency is no longer supplied by the CLI. You will have to install it yourself in your project folder.")],-1),Tn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" register-service-worker@^1.0.0")])],-1),Sn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"--save"),s(" register-service-worker@^1.0.0")])],-1),En=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(" register-service-worker@^1.0.0")])],-1),Cn=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(" register-service-worker@^1.0.0")])],-1),Rn=n("p",null,[s("Edit your "),n("code",{class:"doc-token"},"/src-pwa/custom-service-worker.js"),s(" file:")],-1),An=n("pre",{class:"doc-code"},[n("code",null,[s(`if (process.env.MODE !== 'ssr' || process.env.PROD) {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` registerRoute(
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   new NavigationRoute(
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     { denylist: [/sw\\.js$/, /workbox-(.)*\\.js$/] }
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   )
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` )
`)]),s("}")])],-1),Ln=n("p",null,[s("There are some subtle changes in "),n("code",{class:"doc-token"},"/quasar.config"),s(" file too:")],-1),Mn=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker: 'src-pwa/custom-service-worker',
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker: 'src-pwa/custom-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile: 'src-pwa/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s(`},

pwa: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxMode?: "generateSW" | "injectManifest";
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` workboxMode?: "GenerateSW" | "InjectManifest";
`)]),s(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // useFilenameHashes: false,
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Moved to quasar.config > build > useFilenameHashes
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto inject the PWA meta tags?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * If using the function form, return HTML tags as one single string.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // see below for the InjectPwaMetaTagsParams interface
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s(`}

// additional types for injectPwaMetaTags
interface InjectPwaMetaTagsParams {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwaManifest: PwaManifestOptions;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` publicPath: string;
`)]),s(`}
interface PwaManifestOptions {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` id?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` background_color?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` categories?: string[];
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` description?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s("}")])],-1),Wn=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The distributables (your production code) will be compiled to ESM form, thus also taking advantage of Electron in ESM form.")],-1),Nn=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("You might want to upgrade the "),n("code",{class:"doc-token"},"electron"),s(" package to the latest so it can handle the ESM format.")])],-1),In=n("p",null,[s("Most changes refer to editing your "),n("code",{class:"doc-token"},"/src-electron/electron-main.js"),s(" file:")],-1),Dn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`import { fileURLToPath } from 'node:url'
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`const currentDir = fileURLToPath(new URL('.', import.meta.url))
`)]),s(`
function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])],-1),On=n("pre",{class:"doc-code"},[n("code",null,[s(`import { fileURLToPath } from 'node:url'

const currentDir = fileURLToPath(new URL('.', import.meta.url))

function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   webPreferences: {
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     preload: path.resolve(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       currentDir,
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       path.join(process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, 'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     )
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])],-1),$n={class:"doc-note doc-note--danger"},Fn=n("p",{class:"doc-note__title"},"WARNING",-1),Qn=n("p",null,[s("Edit "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" to specify your preload script: "),n("br"),n("br")],-1),Un=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`)]),s(`},

electron: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts: [ 'electron-preload' ],
`)]),s("}")])],-1),Bn=n("br",null,null,-1),Hn=n("pre",{class:"doc-code"},[n("code",null,[s(`function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  // ...
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  mainWindow.loadURL(process.env.APP_URL)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  if (process.env.DEV) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadURL(process.env.APP_URL)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  } else {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadFile('index.html')
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},"  }")])])],-1),Vn=n("p",null,"Finally, the new file should look like this:",-1),Gn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'electron'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" path "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'node:path'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" os "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'node:os'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" fileURLToPath "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'node:url'"),s(`

`),n("span",{class:"token comment"},"// needed in case process is undefined under Linux"),s(`
`),n("span",{class:"token keyword"},"const"),s(" platform "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("platform "),n("span",{class:"token operator"},"||"),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"platform"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" currentDir "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"fileURLToPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"let"),s(` mainWindow

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"createWindow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * Initial window options
   */`),s(`
  mainWindow `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"BrowserWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("currentDir"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'icons/icon.png'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// tray icon"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"600"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"useContentSize"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"webPreferences"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"contextIsolation"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script"),s(`
      `),n("span",{class:"token literal-property property"},"preload"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s(`
        currentDir`),n("span",{class:"token punctuation"},","),s(`
        path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_FOLDER"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'electron-preload'"),s(),n("span",{class:"token operator"},"+"),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_EXTENSION"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadURL"),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"APP_URL"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEBUGGING"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// if on DEV or Production with debug enabled"),s(`
    mainWindow`),n("span",{class:"token punctuation"},"."),s("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// we're on production; no access to devtools pls"),s(`
    mainWindow`),n("span",{class:"token punctuation"},"."),s("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'devtools-opened'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mainWindow`),n("span",{class:"token punctuation"},"."),s("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"closeDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'closed'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    mainWindow `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"whenReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("createWindow"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'window-all-closed'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("platform "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'darwin'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"quit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'activate'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("mainWindow "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"createWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),Yn=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The distributables (your production code) will be compiled to ESM form.")],-1),Jn=n("p",null,[s("Most changes refer to editing your "),n("code",{class:"doc-token"},"/src-ssr/server.js"),s(" file. Since you can now use HTTPS while developing your app too, you need to make the following changes to the file:")],-1),Xn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` export const listen = ssrListen(async ({ app, port, isReady }) => {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // notice devHttpsApp param which will be a Node httpsServer (on DEV only) and if https is enabled
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` export const listen = ssrListen(async ({ app, devHttpsApp, port, isReady }) => {
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   await isReady()
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   return app.listen(port, () => {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   const server = devHttpsApp || app
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   return server.listen(port, () => {
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     if (process.env.PROD) {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`       console.log('Server listening at port ' + port)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   })
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])],-1),Kn=n("p",null,"Finally, this is how it should look like now:",-1),zn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" listen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrListen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" devHttpsApp"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" server "),n("span",{class:"token operator"},"="),s(" devHttpsApp "),n("span",{class:"token operator"},"||"),s(` app
  `),n("span",{class:"token keyword"},"return"),s(" server"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),Zn=n("p",null,[s("Also, the "),n("code",{class:"doc-token"},"renderPreloadTag()"),s(" function can now take an additional parameter ("),n("code",{class:"doc-token"},"ssrContext"),s("):")],-1),ns=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" renderPreloadTag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrRenderPreloadTag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("file"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" ssrContext "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),ss=n("p",null,[s("There are some additions to the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file too:")],-1),es=n("pre",{class:"doc-code"},[n("code",null,[s(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When using SSR+PWA, this is the name of the
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA index html file that the client-side fallbacks to.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * For production only.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Do NOT use index.html as name as it will mess SSR up!
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'offline.html'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrPwaHtmlFilename?: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaOfflineHtmlFilename?: string;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Tell browser when a file from the server should expire from cache
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (the default value, in ms)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Has effect only when server.static() is used
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` maxAge?: number;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox GenerateSW options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify Workbox options which will be applied on top of
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  `pwa > extendGenerateSWOptions()`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaExtendGenerateSWOptions?: (config: object) => void;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox InjectManifest options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify Workbox options which will be applied on top of
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  `pwa > extendInjectManifestOptions()`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * More info: https://developer.chrome.com/docs/workbox/the-ways-of-workbox/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaExtendInjectManifestOptions?: (config: object) => void;
`)]),s("}")])],-1),as=n("p",null,[s("No need to change anything, however we are highlighting here an addition to the "),n("code",{class:"doc-token"},"/quasar.conf"),s(" file:")],-1),ts=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile: 'src-bex/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s("},")])],-1),os=n("p",null,[s("The "),n("code",{class:"doc-token"},"ctx"),s(" from "),n("code",{class:"doc-token"},"/quasar.config"),s(" file has an additional prop ("),n("code",{class:"doc-token"},"appPaths"),s("):")],-1),ls=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ctx.appPaths is available")])],-1),cs=n("p",null,[s("The definition for "),n("code",{class:"doc-token"},"ctx.appPaths"),s(" is defined with QuasarAppPaths TS type as below:")],-1),is=n("pre",{class:"doc-code"},[n("code",null,[s(`export interface IResolve {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cli: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` app: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` src: (dir: string) => string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` public: (dir: string) => string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwa: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ssr: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cordova: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` capacitor: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electron: (dir: string) => string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` bex: (dir: string) => string;
`)]),s(`}

export interface QuasarAppPaths {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cliDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` appDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` srcDir: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` publicDir: string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` pwaDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ssrDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` cordovaDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` capacitorDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electronDir: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` bexDir: string;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` quasarConfigFilename: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` quasarConfigInputFormat: "esm" | "cjs" | "ts";
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` quasarConfigOutputFormat: "esm" | "cjs";
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` resolve: IResolve;
`)]),s("}")])],-1),ps=n("pre",{class:"doc-code"},[n("code",null,[s(`eslint: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Enable or disable caching of the linting results.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` cache?: boolean;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Formatter to use
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'stylish'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` formatter?: ESLint.Formatter;
`)]),s("}")])],-1),rs=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile?: string;
`)]),s("}")])],-1),ds=n("pre",{class:"doc-code"},[n("code",null,[s(`framework: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - how to detect components in your vue files
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "kebab": q-carousel q-page
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "pascal": QCarousel QPage
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *   "combined": q-carousel QPage
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'kebab'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` autoImportComponentCase?: "kebab" | "pascal" | "combined";
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - which file extensions should be interpreted as referring to Vue SFC?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'vue' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` autoImportVueExtensions?: string[];
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Auto import - which file extensions should be interpreted as referring to script files?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'js', 'jsx', 'ts', 'tsx' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` autoImportScriptExtensions?: string[];
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Treeshake Quasar's UI on dev too?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Recommended to leave this as false for performance reasons.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` devTreeshaking?: boolean;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // was previously under /quasar.conf > build
`)]),s("}")])],-1),us=n("pre",{class:"doc-code"},[n("code",null,[s(`build: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Treeshake Quasar's UI on dev too?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Recommended to leave this as false for performance reasons.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` devTreeshaking?: boolean;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // moved under /quasar.conf > framework
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should we invalidate the Vite and ESLint cache on startup?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` rebuildCache?: boolean;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Automatically open remote Vue Devtools when running in development mode.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueDevtools?: boolean;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Folder where Quasar CLI should look for .env* files.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Can be an absolute path or a relative path to project root directory.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default project root directory
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` envFolder?: string;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Additional .env* files to be loaded.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Each entry can be an absolute path or a relative path to quasar.config > build > envFolder.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example ['.env.somefile', '../.env.someotherfile']
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` envFiles?: string[];
`)]),s("}")])],-1),ks=n("p",null,[s("You might want to upgrade/switch from "),n("code",{class:"doc-token"},"@intlify/vite-plugin-vue-i18n"),s(" to the newer "),n("code",{class:"doc-token"},"@intlify/unplugin-vue-i18n"),s(".")],-1),fs=n("p",null,[s("After removing the old package and installing the new one then update your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file as follows:")],-1),hs=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import path from 'node:path'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { fileURLToPath } from 'node:url'
`)]),s(`
export default configure((ctx) => {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` return {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   build: {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     vitePlugins: [
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`       ['@intlify/vite-plugin-vue-i18n', {
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`       ['@intlify/unplugin-vue-i18n/vite', {
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`         include: path.resolve(__dirname, './src/i18n/**')
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         include: [ fileURLToPath(new URL('./src/i18n', import.meta.url)) ],
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`         ssr: ctx.modeName === 'ssr'
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`       }]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`     ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` }
`)]),s("})")])],-1),gs=n("p",null,"Expanding a bit on the env dotfiles support. These files will be detected and used (the order matters):",-1),ms=n("pre",{class:"doc-code"},[n("code",null,`.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git`)],-1),vs=n("p",null,[s("…where “ignored by git” assumes a default project folder created after releasing this package, otherwise add "),n("code",{class:"doc-token"},".env.local*"),s(" to your "),n("code",{class:"doc-token"},"/.gitignore"),s(" file.")],-1),xs=n("p",null,"You can also configure the files above to be picked up from a different folder or even add more files to the list:",-1),_s=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"envFolder"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./'"),s(),n("span",{class:"token comment"},"// absolute or relative path to root project folder"),s(`
  `),n("span",{class:"token literal-property property"},"envFiles"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// Path strings to your custom files --- absolute or relative path to root project folder"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),ws={__name:"upgrade-guide",setup(bs){const u=[{id:"quasar-app-vite-v2-beta-",title:"2. @quasar/app-vite v2 (beta)"},{id:"a-note-to-app-extensions-owners",title:"2.1. A note to App Extensions owners",sub:!0},{id:"notable-breaking-changes",title:"2.2. Notable breaking changes",sub:!0},{id:"highlights-on-whats-new",title:"2.3. Highlights on what’s new",sub:!0},{id:"beginning-of-the-upgrade-process",title:"2.4. Beginning of the upgrade process",sub:!0},{id:"linting-ts-or-js-",title:"2.5. Linting (TS or JS)",sub:!0},{id:"spa-capacitor-cordova-modes-changes",title:"2.6. SPA / Capacitor / Cordova modes changes",sub:!0},{id:"pwa-mode-changes",title:"2.7. PWA mode changes",sub:!0},{id:"electron-mode-changes",title:"2.8. Electron mode changes",sub:!0},{id:"ssr-mode-changes",title:"2.9. SSR mode changes",sub:!0},{id:"bex-mode-changes",title:"2.10. Bex mode changes",sub:!0},{id:"other-quasar-config-file-changes",title:"2.11. Other /quasar.config file changes",sub:!0},{id:"other-considerations",title:"2.12. Other considerations",sub:!0},{id:"the-env-dotfiles-support",title:"2.13. The env dotfiles support",sub:!0}];return(ys,c)=>(k(),f(g,{title:"Upgrade Guide for Quasar CLI with Vite",desc:"(@quasar/app-vite) How to upgrade Quasar CLI with Vite from older versions to the latest one.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/upgrade-guide",toc:u},{default:a(()=>[n("h2",{id:"quasar-app-vite-v2-beta-",class:"doc-heading doc-h2",onClick:c[0]||(c[0]=r=>t(p)("quasar-app-vite-v2-beta-"))},"@quasar/app-vite v2 (beta)"),v,x,n("h3",{id:"a-note-to-app-extensions-owners",class:"doc-heading doc-h3",onClick:c[1]||(c[1]=r=>t(p)("a-note-to-app-extensions-owners"))},"A note to App Extensions owners"),_,e(t(l),null,{default:a(()=>[w,e(o)]),_:1}),n("h3",{id:"notable-breaking-changes",class:"doc-heading doc-h3",onClick:c[2]||(c[2]=r=>t(p)("notable-breaking-changes"))},"Notable breaking changes"),n("ul",null,[b,y,n("li",null,[s("The “test” cmd was removed due to latest updates for @quasar/testing-* packages. See "),e(d,{to:"https://testing.quasar.dev/packages/testing/"},{default:a(()=>[s("here")]),_:1})]),q,P,j,T,n("li",null,[s("Dropped support for our internal linting system (quasar.config file > eslint). Should use "),e(d,{to:"https://vite-plugin-checker.netlify.app/"},{default:a(()=>[s("vite-plugin-checker")]),_:1}),s(" instead.")]),S]),n("h3",{id:"highlights-on-whats-new",class:"doc-heading doc-h3",onClick:c[3]||(c[3]=r=>t(p)("highlights-on-whats-new"))},"Highlights on what’s new"),E,C,n("h3",{id:"beginning-of-the-upgrade-process",class:"doc-heading doc-h3",onClick:c[4]||(c[4]=r=>t(p)("beginning-of-the-upgrade-process"))},"Beginning of the upgrade process"),n("div",R,[A,L,e(t(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:a(()=>[e(i,{class:"q-pa-none",name:"Yarn"},{default:a(()=>[M,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"NPM"},{default:a(()=>[W,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"PNPM"},{default:a(()=>[N,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"Bun"},{default:a(()=>[I,e(o,{lang:"bash"})]),_:1})]),_:1}),D,s(' When asked to "Pick Quasar App CLI variant", answer with: "Quasar App CLI with Vite 5 (BETA | next major version - v2)". ')]),O,n("ul",null,[$,F,n("li",null,[Q,e(t(l),{title:"/package.json"},{default:a(()=>[U,e(o)]),_:1}),B,s(" Then yarn/npm/pnpm/bun install. "),H,V]),n("li",null,[G,e(t(l),{title:"/quasar.config.js file"},{default:a(()=>[Y,e(o)]),_:1}),J]),n("li",null,[X,e(t(l),{title:"/package.json"},{default:a(()=>[K,e(o)]),_:1}),z,s(" Rename some tools config files (in the root project folder): "),Z,nn,e(h,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:a(()=>[sn,en]),_:1}),an]),n("li",null,[tn,e(t(l),{title:"/.gitignore"},{default:a(()=>[on,e(o,{lang:"bash"})]),_:1}),ln]),n("li",null,[cn,e(t(l),null,{default:a(()=>[pn,e(o)]),_:1})])]),n("h3",{id:"linting-ts-or-js-",class:"doc-heading doc-h3",onClick:c[5]||(c[5]=r=>t(p)("linting-ts-or-js-"))},"Linting (TS or JS)"),n("p",null,[s("We dropped support for our internal linting (quasar.config file > eslint) in favor of the "),e(d,{to:"https://vite-plugin-checker.netlify.app/"},{default:a(()=>[s("vite-plugin-checker")]),_:1}),s(" package. We will detail below the changes that you need to make based on if you use TS or not.")]),n("h4",{id:"typescript-projects-linting",class:"doc-heading doc-h4",onClick:c[6]||(c[6]=r=>t(p)("typescript-projects-linting"))},"Typescript projects linting"),e(t(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:a(()=>[e(i,{class:"q-pa-none",name:"Yarn"},{default:a(()=>[rn,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"NPM"},{default:a(()=>[dn,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"PNPM"},{default:a(()=>[un,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"Bun"},{default:a(()=>[kn,e(o,{lang:"bash"})]),_:1})]),_:1}),fn,e(t(l),{title:"/.eslintignore"},{default:a(()=>[hn,e(o,{lang:"bash"})]),_:1}),gn,e(t(l),{title:"/tsconfig.vue-tsc.json"},{default:a(()=>[mn,e(o)]),_:1}),e(t(l),{title:"/quasar.config file"},{default:a(()=>[vn,e(o)]),_:1}),n("h4",{id:"javascript-projects-linting",class:"doc-heading doc-h4",onClick:c[7]||(c[7]=r=>t(p)("javascript-projects-linting"))},"Javascript projects linting"),e(t(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:a(()=>[e(i,{class:"q-pa-none",name:"Yarn"},{default:a(()=>[xn,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"NPM"},{default:a(()=>[_n,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"PNPM"},{default:a(()=>[wn,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"Bun"},{default:a(()=>[bn,e(o,{lang:"bash"})]),_:1})]),_:1}),e(t(l),{title:"/.eslintignore"},{default:a(()=>[yn,e(o,{lang:"bash"})]),_:1}),e(t(l),{title:"/quasar.config file"},{default:a(()=>[qn,e(o)]),_:1}),n("h3",{id:"spa-capacitor-cordova-modes-changes",class:"doc-heading doc-h3",onClick:c[8]||(c[8]=r=>t(p)("spa-capacitor-cordova-modes-changes"))},"SPA / Capacitor / Cordova modes changes"),Pn,n("h3",{id:"pwa-mode-changes",class:"doc-heading doc-h3",onClick:c[9]||(c[9]=r=>t(p)("pwa-mode-changes"))},"PWA mode changes"),jn,e(t(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:a(()=>[e(i,{class:"q-pa-none",name:"Yarn"},{default:a(()=>[Tn,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"NPM"},{default:a(()=>[Sn,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"PNPM"},{default:a(()=>[En,e(o,{lang:"bash"})]),_:1}),e(i,{class:"q-pa-none",name:"Bun"},{default:a(()=>[Cn,e(o,{lang:"bash"})]),_:1})]),_:1}),Rn,e(t(l),{title:"/src-pwa/custom-service-worker.js"},{default:a(()=>[An,e(o)]),_:1}),Ln,e(t(l),{title:"/quasar.config file"},{default:a(()=>[Mn,e(o)]),_:1}),n("h3",{id:"electron-mode-changes",class:"doc-heading doc-h3",onClick:c[10]||(c[10]=r=>t(p)("electron-mode-changes"))},"Electron mode changes"),Wn,Nn,In,e(t(l),{title:"Icon path"},{default:a(()=>[Dn,e(o)]),_:1}),e(t(l),{title:"Preload script"},{default:a(()=>[On,e(o)]),_:1}),n("div",$n,[Fn,Qn,e(t(l),{title:"/quasar.config file"},{default:a(()=>[Un,e(o)]),_:1}),Bn,s(" As you can see, you can now specify multiple preload scripts should you need them. ")]),e(t(l),null,{default:a(()=>[Hn,e(o)]),_:1}),Vn,e(t(l),{title:"The new /src-electron/electron-main.js"},{default:a(()=>[Gn,e(o)]),_:1}),n("h3",{id:"ssr-mode-changes",class:"doc-heading doc-h3",onClick:c[11]||(c[11]=r=>t(p)("ssr-mode-changes"))},"SSR mode changes"),Yn,Jn,e(t(l),{title:"/src-ssr/server.js"},{default:a(()=>[Xn,e(o)]),_:1}),Kn,e(t(l),{title:"/src-ssr/server.js file"},{default:a(()=>[zn,e(o)]),_:1}),Zn,e(t(l),{title:"/src-ssr/server.js"},{default:a(()=>[ns,e(o)]),_:1}),ss,e(t(l),{title:"/quasar.config file"},{default:a(()=>[es,e(o)]),_:1}),n("h3",{id:"bex-mode-changes",class:"doc-heading doc-h3",onClick:c[12]||(c[12]=r=>t(p)("bex-mode-changes"))},"Bex mode changes"),as,e(t(l),{title:"/quasar.config file"},{default:a(()=>[ts,e(o)]),_:1}),n("h3",{id:"other-quasar-config-file-changes",class:"doc-heading doc-h3",onClick:c[13]||(c[13]=r=>t(p)("other-quasar-config-file-changes"))},"Other /quasar.config file changes"),os,e(t(l),null,{default:a(()=>[ls,e(o)]),_:1}),cs,e(t(l),null,{default:a(()=>[is,e(o)]),_:1}),e(t(l),{title:"/quasar.config > eslint"},{default:a(()=>[ps,e(o)]),_:1}),e(t(l),{title:"/quasar.config > sourceFiles"},{default:a(()=>[rs,e(o)]),_:1}),e(t(l),{title:"/quasar.config > framework"},{default:a(()=>[ds,e(o)]),_:1}),e(t(l),{title:"/quasar.config > build"},{default:a(()=>[us,e(o)]),_:1}),n("h3",{id:"other-considerations",class:"doc-heading doc-h3",onClick:c[14]||(c[14]=r=>t(p)("other-considerations"))},"Other considerations"),ks,fs,e(t(l),{title:"/quasar.config"},{default:a(()=>[hs,e(o)]),_:1}),n("h3",{id:"the-env-dotfiles-support",class:"doc-heading doc-h3",onClick:c[15]||(c[15]=r=>t(p)("the-env-dotfiles-support"))},"The env dotfiles support"),gs,e(t(l),null,{default:a(()=>[ms,e(o)]),_:1}),vs,xs,e(t(l),{title:"/quasar.config file"},{default:a(()=>[_s,e(o)]),_:1})]),_:1}))}},Cs=m(ws,[["__file","upgrade-guide.md"]]);export{Cs as default};
