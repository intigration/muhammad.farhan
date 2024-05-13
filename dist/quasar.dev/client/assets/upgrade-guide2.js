import{b as f,d as g,w as t,h as n,f as a,e,i as s,k as r,l as h}from"./vendor.js";import{c as p}from"./_examples_frameless-electron-window.js";import{D as m,a as x}from"./DocPage.js";import{D as u}from"./DocTree.js";import{D as l}from"./DocPrerender.js";import{C as o}from"./CopyButton.js";import{_ as w}from"./index.js";const b=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"CLI is currently in beta"),n("ul",null,[n("li",null,[s("Please help test the CLI so we can get it out of the "),n("code",{class:"doc-token"},"beta"),s(" status. We thank you in advance for your help!")]),n("li",null,"Although we do not plan on adding any further breaking changes, there is still a slight change that we will be forced to do one, based on your feedback.")])],-1),y=n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"All other docs pages will refer to the old @quasar/app-webpack version (v3) specs. Only this page mentions (for now) about how to use the v4 beta.")],-1),v=n("p",null,"You might want to release new versions of your Quasar App Extensions with support for the new @quasar/app-webpack. If you are not touching the quasar.config configuration, then it will be as easy as just changing the following:",-1),_=n("pre",{class:"doc-code"},[n("code",null,[s(`api.compatibleWith(
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` '@quasar/app-webpack',
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` '^3.0.0'
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` '^3.0.0 || ^4.0.0-beta.1'
`)]),s(")")])],-1),S=n("li",null,"Minimum Node.js version is now 18.12",-1),j=n("li",null,[s("We have shifted towards an ESM style for the whole Quasar project folder, so many default project files now require ESM code (although using "),n("code",{class:"doc-token"},".cjs"),s(" as an extension for these files is supported, but you will most likely need to rename the extension should you not wish to change anything). One example is the "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" file which now it’s assumed to be ESM too (so change from "),n("code",{class:"doc-token"},".js"),s(" to "),n("code",{class:"doc-token"},".cjs"),s(" should you still want a CommonJs file).")],-1),E=n("li",null,"Ported and adapted the superior devserver implementation from @quasar/app-vite for all Quasar modes. The benefits are huge.",-1),T=n("li",null,[s("Ported the superior implementation of SSR, PWA, Electron & BEX modes from @quasar/app-vite. We will detail each Quasar mode changes on this docs page. "),n("ul",null,[n("li",null,[s("SSR - some of the noticeable improvements: "),n("ul",null,[n("li",null,"Improved reliability: same server code runs in dev and prod"),n("li",null,"More target webserver options: you can replace express() with whatever else you are using"),n("li",null,"Perf: client-side code no longer re-compiles from scratch when changing code in /src-ssr"),n("li",null,"Faster & better compilation for files in /src-ssr (now built with Esbuild instead of Webpack)")])]),n("li",null,[s("PWA - some of the noticeable improvements: "),n("ul",null,[n("li",null,"Many new configuration options (while removing a lot of the old ones)"),n("li",null,"Faster & better compilation for files in /src-pwa (now built with Esbuild instead of Webpack)")])]),n("li",null,[s("Electron "),n("ul",null,[n("li",null,"Now compiles to ESM (thus also taking advantage of the Electron in ESM format)"),n("li",null,"Faster & better compilation for files in /src-electron (now built with Esbuild instead of Webpack)"),n("li",null,"Support for multiple preload scripts")])]),n("li",null,[s("BEX - some of the noticeable improvements: "),n("ul",null,[n("li",null,"Ported the superior implementation from @quasar/app-vite, which also means that when you spawn the mode you can choose between extension Manifest v2 and Manifest v3"),n("li",null,"The manifest is now held in a file of its own (/src-pwa/manifest.json) instead of inside the /quasar.config file")])])])],-1),W=n("li",null,[s("Webpack will now only compile the contents of "),n("code",{class:"doc-token"},"/src"),s(" folder, while the rest (/src-pwa, /src-electron, etc) are now handled by Esbuild. This translates to a superior build speed and handling of Node.js formats.")],-1),q=n("li",null,"The “clean” cmd has been re-designed. Type “quasar clean -h” in your upgraded Quasar project folder for more info.",-1),P=n("li",null,"Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence.",-1),R=n("li",null,[n("strong",null,"We will detail more breaking changes for each of the Quasar modes below"),s(".")],-1),C=n("p",null,"Some of the work below has already been backported to the old @quasar/app-webpack v3, but posting here for reader’s awareness.",-1),M=n("ul",null,[n("li",null,"feat(app-webpack): ability to run multiple quasar dev/build commands simultaneously (example: can run “quasar dev -m capacitor” and “quasar dev -m ssr” and “quasar dev -m capacitor -T ios” simultaneously)"),n("li",null,"feat(app-webpack): support for quasar.config file in multiple formats (.js, .mjs, .ts, .cjs)"),n("li",null,"feat(app-webpack): Better TS typings overall"),n("li",null,"feat(app-webpack): upgrade to Typescript v5; drop fork-ts-checker"),n("li",null,"feat(app-webpack): Improve quasarConfOptions, generate types for it, improve docs (fix: #14069) (#15945)"),n("li",null,"feat(app-webpack): reload app if one of the imports from quasar.config file changes"),n("li",null,"feat(app-webpack): TS detection should keep account of quasar.config file format too (quasar.config.ts)"),n("li",null,"feat(app-webpack): env dotfiles support #15303"),n("li",null,"feat(app-webpack): New quasar.config file props: build > envFolder (string) and envFiles (string[])"),n("li",null,"feat(app-webpack): support for postcss config file in multiple formats: postcss.config.cjs, .postcssrc.js, postcss.config.js, postcss.config.mjs, .postcssrc.cjs, .postcssrc.mjs"),n("li",null,"feat(app-webpack): support for babel config file in multiple formats: babel.config.cjs, babel.config.js, babel.config.mjs, .babelrc.js, .babelrc.cjs, .babelrc.mjs, .babelrc"),n("li",null,"feat(app-webpack): reopen browser (if configured so) when changing app url through quasar.config file"),n("li",null,"feat(app-webpack): port quasar.config file > electron > inspectPort prop from q/app-vite"),n("li",null,"feat(app-webpack): port quasar.config file > build > rawDefine from q/app-vite"),n("li",null,"feat&perf(app-webpack): faster & more accurate algorithm for determining node package manager to use"),n("li",null,"feat(app-webpack): highly improve SSR perf + mem usage (especially for prod); major refactoring of ssr-helpers; also include renderPreloadTag() from q/app-vite"),n("li",null,"feat(app-webpack): support for SSR development with HTTPS"),n("li",null,"feat(app-webpack): SSR - ability to replace express() with any other connect-like webserver"),n("li",null,"feat(app-webpack): SSR - no longer recompile everything when changing code in /src-ssr"),n("li",null,"feat(app-webpack): upgrade deps"),n("li",null,"feat(app-webpack): remove workaround for bug in Electron 6-8 in cli templates (#15845)"),n("li",null,"feat(app-webpack): remove bundleWebRuntime config for Capacitor v5+"),n("li",null,"feat(app-webpack): use workbox v7 by default"),n("li",null,"feat(app-webpack): quasar.config > build > htmlMinifyOptions"),n("li",null,"feat+refactor(app-webpack): ability to run multiple modes + dev/build simultaneously"),n("li",null,"feat(app-webpack): lookup open port for vue devtools when being used; ability to run multiple cli instances with vue devtools"),n("li",null,"perf(app-webpack): only verify quasar.conf server address for “dev” cmd"),n("li",null,"feat(app-webpack): pick new electron inspect port for each instance"),n("li",null,"refactor(app-webpack): AE support - better and more efficient algorithms"),n("li",null,"feat(app-webpack): AE support for ESM format"),n("li",null,"feat(app-webpack): AE support for TS format (through a build step)"),n("li",null,"feat(app-webpack): AE API new methods -> hasTypescript() / hasLint() / getStorePackageName() / getNodePackagerName()"),n("li",null,"feat(app-webpack): AE -> Prompts API (and ability for prompts default exported fn to be async)"),n("li",null,"feat(app-webpack): smarter app files validation"),n("li",null,"refactor(app-webpack): the “clean” cmd now works different, since the CLI can be run in multiple instances on the same project folder (multiple modes on dev or build)"),n("li",null,"feat(app-webpack): Support for Bun as package manager #16335"),n("li",null,"feat(app-webpack): for default /src-ssr template -> prod ssr -> on error, print err stack if built with debugging enabled"),n("li",null,"fix(app-webpack): electron preload script triggering “module not found”"),n("li",null,"feat(app-webpack): upgrade to webpack-dev-server v5")],-1),I={class:"doc-note doc-note--tip"},A=n("p",{class:"doc-note__title"},"Recommendation",-1),O=n("p",null,[s("If you are unsure that you won’t skip by mistake any of the recommended changes, you can scaffold a new project folder with the @quasar/app-webpack v4 beta at any time and then easily start porting your app from there. The bulk of the changes refer to the different project folder config files and mostly NOT to your /src files. "),n("br"),n("br")],-1),L=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(" create quasar")])],-1),D=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(" init quasar")])],-1),N=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),s(`
$ `),n("span",{class:"token function"},"pnpm"),s(" create quasar")])],-1),B=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"# experimental support"),s(`
$ bun create quasar`)])],-1),F=n("br",null,null,-1),$=n("p",null,"Preparations:",-1),U=n("li",null,[n("p",null,[s("If using the global installation of Quasar CLI ("),n("code",{class:"doc-token"},"@quasar/cli"),s("), make sure that you have the latest one. This is due to the support of quasar.config file in multiple formats.")])],-1),Q=n("li",null,[n("p",null,"Again, we highlight that the minimum supported version of Node.js is now v16 (always use the LTS versions of Node.js - the higher the version the better).")],-1),H=n("p",null,[s("Edit your "),n("code",{class:"doc-token"},"/package.json"),s(" on the "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" entry and assign it "),n("code",{class:"doc-token"},"^4.0.0-beta.1"),s(":")],-1),G=n("pre",{class:"doc-code"},[n("code",null,[s(`"devDependencies": {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` "@quasar/app-webpack": "^3.0.0",
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` "@quasar/app-webpack": "^4.0.0-beta.1"
`)]),s("}")])],-1),V=n("br",null,null,-1),X=n("br",null,null,-1),Y=n("br",null,null,-1),J=n("p",null,[s("Convert your "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" file to the ESM format (which is recommended, otherwise rename the file extension to "),n("code",{class:"doc-token"},".cjs"),s(" and use CommonJs format).")],-1),z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* ctx */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),K=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"Tip on Typescript"),n("p",null,[s("You can now write this file in TS too should you wish (rename "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" to "),n("code",{class:"doc-token"},"/quasar.config.ts"),s(" – notice the "),n("code",{class:"doc-token"},".ts"),s(" file extension).")])],-1),Z=n("p",null,[s("For consistency with @quasar/app-vite (and easy switch between @quasar/app-webpack and it) move "),n("code",{class:"doc-token"},"/src/index.template.html"),s(" to "),n("code",{class:"doc-token"},"/index.html"),s(" and do the following changes:")],-1),nn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-arrow deleted"},[n("span",{class:"token prefix deleted"},"<"),n("span",{class:"token line"},`body>
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` <!-- DO NOT touch the following DIV -->
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` <div id="q-app"></div>
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` <!-- quasar:entry-point -->
`)]),n("span",{class:"token deleted-arrow deleted"},[n("span",{class:"token prefix deleted"},"<"),n("span",{class:"token line"},"/body>")])])],-1),sn=n("br",null,null,-1),en=n("p",null,"(Optional, but recommended) For future-proofing some tools config files, rename the following files (in the root project folder):",-1),an=n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Old name"),n("th",{class:"text-left"},"New name")])],-1),tn=n("tbody",null,[n("tr",null,[n("td",null,"postcss.config.js"),n("td",null,"postcss.config.cjs")]),n("tr",null,[n("td",null,".eslintrc.js"),n("td",null,".eslintrc.cjs")]),n("tr",null,[n("td",null,"babel.config.js"),n("td",null,"babel.config.cjs")])],-1),on=n("br",null,null,-1),ln=n("p",null,[s("You might want to add the following to your "),n("code",{class:"doc-token"},"/.gitignore"),s(" file. These kind of files are left for inspection purposes when something fails with your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file (and can be removed by the "),n("code",{class:"doc-token"},"quasar clean"),s(" command):")],-1),cn=n("pre",{class:"doc-code"},[n("code",null,[s(`.DS_Store
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
*.sln`)])],-1),pn=n("br",null,null,-1),rn=n("p",null,[s("If you have linting, please review your "),n("code",{class:"doc-token"},"/.eslintignore"),s(" file as well:")],-1),dn=n("pre",{class:"doc-code"},[n("code",null,[s(`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
`),n("span",{class:"c-line c-highlight"}),s(`.eslintrc.cjs
`),n("span",{class:"c-line c-highlight"}),s(`babel.config.cjs
`),n("span",{class:"c-line c-highlight"}),s("/quasar.config.*.temporary.compiled*")])],-1),un=n("br",null,null,-1),kn=n("p",null,[s("If using Typescript, then ensure that your "),n("code",{class:"doc-token"},"/tsconfig.json"),s(" file looks like this:")],-1),fn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])],-1),gn=n("ul",null,[n("li",null,[s("No need to change anything in the "),n("code",{class:"doc-token"},"/src"),s(", "),n("code",{class:"doc-token"},"/src-capacitor"),s(" or "),n("code",{class:"doc-token"},"/src-cordova"),s(" folders.")])],-1),hn=n("p",null,[s("The "),n("code",{class:"doc-token"},"register-service-worker"),s(" dependency is no longer supplied by the CLI. You will have to install it yourself in your project folder.")],-1),mn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" register-service-worker@^1.0.0")])],-1),xn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"--save"),s(" register-service-worker@^1.0.0")])],-1),wn=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(" register-service-worker@^1.0.0")])],-1),bn=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(" register-service-worker@^1.0.0")])],-1),yn=n("p",null,[s("Edit your "),n("code",{class:"doc-token"},"/src-pwa/custom-service-worker.js"),s(" file:")],-1),vn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` import { precacheAndRoute } from 'workbox-precaching'
`)]),s(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Use with precache injection
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` precacheAndRoute(self.__WB_MANIFEST)
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { clientsClaim } from 'workbox-core'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching'
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` import { registerRoute, NavigationRoute } from 'workbox-routing'
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` self.skipWaiting()
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` clientsClaim()
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Use with precache injection
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` precacheAndRoute(self.__WB_MANIFEST)
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` cleanupOutdatedCaches()
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Non-SSR fallbacks to index.html
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Production SSR fallbacks to offline.html (except for dev)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` if (process.env.MODE !== 'ssr' || process.env.PROD) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  registerRoute(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    new NavigationRoute(
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`      { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\\.js$/] }
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    )
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  )
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"}," }")])])],-1),_n=n("p",null,[s("Create the file "),n("code",{class:"doc-token"},"/src-pwa/manifest.json"),s(" and move /quasar.config file > pwa > manifest from there to this file. Here’s an example of how it can look like:")],-1),Sn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"orientation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"portrait"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"background_color"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#ffffff"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"theme_color"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#027be3"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"icons"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"icons/icon-128x128.png"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"128x128"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"image/png"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"icons/icon-192x192.png"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"192x192"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"image/png"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"icons/icon-256x256.png"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"256x256"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"image/png"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"icons/icon-384x384.png"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"384x384"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"image/png"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"src"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"icons/icon-512x512.png"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"sizes"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"512x512"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"image/png"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),jn=n("p",null,[s("There are some subtle changes in "),n("code",{class:"doc-token"},"/quasar.config"),s(" file too:")],-1),En=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker: 'src-pwa/custom-service-worker',
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker: 'src-pwa/custom-service-worker',
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile: 'src-pwa/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s(`},

pwa: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxPluginMode?: "GenerateSW" | "InjectManifest";
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` workboxMode?: "GenerateSW" | "InjectManifest";
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Full option list can be found
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  [here](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` workboxOptions?: object;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox GenerateSW options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendGenerateSWOptions?: (config: GenerateSWOptions) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend/configure the Workbox InjectManifest options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendInjectManifestOptions?: (config: InjectManifestOptions) => void;
`)]),s(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Now the contents for this held in a new file: /src-pwa/manifest.json
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // and its replaced by extendManifestJson below:
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` manifest?: PwaManifestOptions;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should you need some dynamic changes to the /src-pwa/manifest.json,
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * use this method to do it.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendManifestJson?: (json: PwaManifestOptions) => void;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA manifest filename to use on your browser
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default manifest.json
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` manifestFilename?: string;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Does the PWA manifest tag requires crossorigin auth?
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` useCredentialsForManifestTag?: boolean;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Webpack config object for the custom service worker ONLY (`/src-pwa/custom-service-worker`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  when pwa > workboxPluginMode is set to InjectManifest
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackCustomSW?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackCustomSW()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the custom service worker ONLY (`/src-pwa/custom-service-worker`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *  when pwa > workboxPluginMode is set to InjectManifest
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackCustomSW?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the custom service worker
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (if using it through workboxMode: 'InjectManifest')
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendPWACustomSWConf?: (config: EsbuildConfiguration) => void;
`)]),s(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * @default
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},"  * ```typescript\n"),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleMobileWebAppCapable: 'yes';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleMobileWebAppStatusBarStyle: 'default';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon120: 'icons/apple-icon-120x120.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon180: 'icons/apple-icon-180x180.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon152: 'icons/apple-icon-152x152.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleTouchIcon167: 'icons/apple-icon-167x167.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    appleSafariPinnedTab: 'icons/safari-pinned-tab.svg';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    msapplicationTileImage: 'icons/ms-icon-144x144.png';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *    msapplicationTileColor: '#000000';
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * }
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},"   * ```\n"),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` metaVariables?: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleMobileWebAppCapable: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleMobileWebAppStatusBarStyle: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon120: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon180: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon152: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleTouchIcon167: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   appleSafariPinnedTab: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   msapplicationTileImage: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   msapplicationTileColor: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` };
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` metaVariablesFn?: (manifest?: PwaManifestOptions) => PwaMetaVariablesEntry[];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * Auto inject the PWA meta tags?
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * If using the function form, return HTML tags as one single string.
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` injectPwaMetaTags?: boolean | ((injectParam: InjectPwaMetaTagsParams) => string);
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
`)]),s("}")])],-1),Tn=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The distributables (your production code) will be compiled to ESM form, thus also taking advantage of Electron in ESM form.")],-1),Wn=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("You might want to upgrade the "),n("code",{class:"doc-token"},"electron"),s(" package to the latest so it can handle the ESM format.")])],-1),qn=n("p",null,[s("Most changes refer to editing your "),n("code",{class:"doc-token"},"/src-electron/electron-main.js"),s(" file:")],-1),Pn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`import { fileURLToPath } from 'node:url'
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`const currentDir = fileURLToPath(new URL('.', import.meta.url))
`)]),s(`
function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` mainWindow = new BrowserWindow({
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   icon: path.resolve(currentDir, 'icons/icon.png'), // tray icon
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   // ...
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])],-1),Rn=n("pre",{class:"doc-code"},[n("code",null,[s(`import { fileURLToPath } from 'node:url'

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
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," })")])])],-1),Cn={class:"doc-note doc-note--danger"},Mn=n("p",{class:"doc-note__title"},"WARNING",-1),In=n("p",null,[s("Edit "),n("code",{class:"doc-token"},"/quasar.config.js"),s(" to specify your preload script: "),n("br"),n("br")],-1),An=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`)]),s(`},

electron: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts: [ 'electron-preload' ],
`)]),s("}")])],-1),On=n("br",null,null,-1),Ln=n("pre",{class:"doc-code"},[n("code",null,[s(`function createWindow () {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  // ...
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  mainWindow.loadURL(process.env.APP_URL)
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  if (process.env.DEV) {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadURL(process.env.APP_URL)
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  } else {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`    mainWindow.loadFile('index.html')
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},"  }")])])],-1),Dn=n("p",null,"Finally, the new file should look like this:",-1),Nn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'electron'"),s(`
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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),Bn=n("p",null,[s("There are also more "),n("code",{class:"doc-token"},"/quasar.config"),s(" file changes:")],-1),Fn=n("pre",{class:"doc-code"},[n("code",null,[s(`electron: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Webpack config object for the Main Process ONLY (`/src-electron/electron-main`) */\n")]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackMain?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackMain()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the Main Process ONLY (`/src-electron/electron-main`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackMain?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the electron-main thread
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendElectronMainConf?: (config: EsbuildConfiguration) => void;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Webpack config object for the Preload Process ONLY (`/src-electron/electron-preload`) */\n")]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackPreload?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackPreload()` but uses `webpack-chain` instead,\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  for the Preload Process ONLY (`/src-electron/electron-preload`)\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackPreload?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the electron-preload thread
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendElectronPreloadConf?: (config: EsbuildConfiguration) => void;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * The list of content scripts (js/ts) that you want embedded.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Each entry in the list should be a filename (WITHOUT its extension) from /src-electron/
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default [ 'electron-preload' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example [ 'my-other-preload-script' ]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` preloadScripts?: string[];
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify the debugging port to use for the Electron app when running in development mode
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 5858
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` inspectPort?: number;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Specify additional parameters when yarn/npm installing
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * the UnPackaged folder, right before bundling with either
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * electron packager or electron builder;
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * Example: [ '--ignore-optional', '--some-other-param' ]
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`  * Example: [ 'install', '--production', '--ignore-optional', '--some-other-param' ]
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` unPackagedInstallParams?: string[];
`)]),s("}")])],-1),$n=n("p",null,[s("The support for "),n("code",{class:"doc-token"},"/src-ssr/production-export.js"),s(" has been dropped (delete it). The same SSR webserver now runs for both development and production, so create a "),n("code",{class:"doc-token"},"/src-ssr/server.js"),s(" with the following contents:")],-1),Un=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Make sure to yarn add / npm install (in your project root)
 * anything you import here (except for express and compression).
 */`),s(`
`),n("span",{class:"token keyword"},"import"),s(" express "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'express'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" compression "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'compression'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  ssrClose`),n("span",{class:"token punctuation"},","),s(`
  ssrCreate`),n("span",{class:"token punctuation"},","),s(`
  ssrListen`),n("span",{class:"token punctuation"},","),s(`
  ssrServeStaticContent`),n("span",{class:"token punctuation"},","),s(`
  ssrRenderPreloadTag
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`

`),n("span",{class:"token comment"},`/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" create "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrCreate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// attackers can use this header to detect apps running Express"),s(`
  `),n("span",{class:"token comment"},"// and then launch specifically-targeted attacks"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"disable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'x-powered-by'"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),s(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` app
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The "listenResult" param for the "close()" definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" listen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrListen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" devHttpsApp"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" server "),n("span",{class:"token operator"},"="),s(" devHttpsApp "),n("span",{class:"token operator"},"||"),s(` app
  `),n("span",{class:"token keyword"},"return"),s(" server"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the "listen()" call above,
 * you can use the "listenResult" param.
 *
 * Can be async.
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" close "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" listenResult "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" listenResult"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" maxAge "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),s(`
  `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(`
  `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"30"),s(`

`),n("span",{class:"token comment"},`/**
 * Should return middleware that serves the indicated path
 * with static content.
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" serveStaticContent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrServeStaticContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("path"),n("span",{class:"token punctuation"},","),s(" opts")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" express"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"static"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    maxAge`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token operator"},"..."),s(`opts
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" jsRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" cssRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" woffRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" woff2RE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff2$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" gifRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.gif$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" jpgRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.jpe?g$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" pngRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.png$"),n("span",{class:"token regex-delimiter"},"/")]),s(`

`),n("span",{class:"token comment"},`/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" renderPreloadTag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ssrRenderPreloadTag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token comment"},"/* , { ssrContext } */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jsRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<script src="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" defer crossorigin><\/script>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cssRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="stylesheet" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("woffRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("woff2RE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff2" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("gifRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/gif" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jpgRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/jpeg" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pngRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/png" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"''"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),Qn=n("p",null,[s("If you have "),n("code",{class:"doc-token"},"/src-ssr/middlewares/compression.js"),s(" file, delete it because this code is now embedded into "),n("code",{class:"doc-token"},"/src-ssr/server.js"),s(". Then edit your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file to remove the reference to the old file:")],-1),Hn=n("pre",{class:"doc-code"},[n("code",null,[s(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` middlewares: [
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   ctx.prod ? 'compression' : '',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`   'render' // keep this as last one
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` ]
`)]),s("}")])],-1),Gn=n("p",null,[s("There are some additional changes to the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")],-1),Vn=n("pre",{class:"doc-code"},[n("code",null,[s(`ssr: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * If a PWA should take over or just a SPA.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When used in object form, you can specify Workbox options
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  *  which will be applied on top of `pwa > workboxOptions`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` pwa?: boolean | object;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwa?: boolean;
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
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // now part of the /src-ssr/server.js code
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
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Webpack config object for the Webserver
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * which includes the SSR middleware
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` extendWebpackWebserver?: (config: WebpackConfiguration) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Equivalent to `extendWebpackWebserver()` but uses `webpack-chain` instead.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Handles the Webserver webpack config ONLY which includes the SSR middleware
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` chainWebpackWebserver?: (chain: WebpackChain) => void;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Extend the Esbuild config that is used for the SSR webserver
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * (which includes the SSR middlewares)
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` extendSSRWebserverConf?: (config: EsbuildConfiguration) => void;
`)]),s("}")])],-1),Xn=n("p",null,"The implementation of the BEX mode has been ported from @quasar/app-vite, so when you spawn this Quasar mode it will now ask you what extension Manifest version you want (v2 or v3).",-1),Yn=n("p",null,[s("But this also means that your "),n("code",{class:"doc-token"},"/src-bex"),s(" folder has suffered significant files and folders structure changes. It would be best to temporarily copy your /src-bex folder to a safe place, then remove and add back the BEX mode:")],-1),Jn=n("pre",{class:"doc-code"},[n("code",null,[s(`$ quasar mode remove bex
$ quasar mode `),n("span",{class:"token function"},"add"),s(" bex")])],-1),zn=n("p",null,"And then, try to understand the new structure and port your old /src-bex to it. There is unfortunately no other way to put it.",-1),Kn=n("p",null,[s("But first, there are some changes to the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file that you should be aware of:")],-1),Zn=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile: 'src-bex/manifest.json',
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // ...
`)]),s(`},

bex: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` builder: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   directories: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     input: cfg.build.distDir,
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     output: path.join(cfg.build.packagedDistDir, 'Packaged')
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   }
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` }
`)]),s("}")])],-1),ns=n("p",null,[s("Some of the changes, like moving the background script from "),n("code",{class:"doc-token"},"/js/background.js"),s(" directly to the root folder, were required by external factors in order for future-proofing the extension structure.")],-1),ss=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[n("strong",null,"Temporarily"),s(", until this version of @quasar/app-webpack gets out of beta status, it would be a good idea to check the Quasar CLI with Vite docs on BEX since they will now mostly match.")])],-1),es=n("p",null,"Click on the blocks below to expand and see the old and the new folder structure:",-1),as={class:"doc-note doc-note--details"},ts=n("summary",{class:"doc-note__title"},"The *OLD* folder structure",-1),os={class:"doc-note doc-note--details"},ls=n("summary",{class:"doc-note__title"},"The *NEW* folder structure",-1),cs=n("p",null,[s("The "),n("code",{class:"doc-token"},"ctx"),s(" from "),n("code",{class:"doc-token"},"/quasar.config"),s(" file has some additional props ("),n("code",{class:"doc-token"},"vueDevtools"),s(" and "),n("code",{class:"doc-token"},"appPaths"),s("):")],-1),ps=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ctx.vueDevtools & ctx.appPaths is available")])],-1),is=n("p",null,[s("The definition for "),n("code",{class:"doc-token"},"ctx.vueDevtools"),s(" is:")],-1),rs=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** True if opening remote Vue Devtools in development mode. */"),s(`
`),n("span",{class:"token literal-property property"},"vueDevtools"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";")])],-1),ds=n("p",null,[s("The definition for "),n("code",{class:"doc-token"},"ctx.appPaths"),s(" is defined with QuasarAppPaths TS type as below:")],-1),us=n("pre",{class:"doc-code"},[n("code",null,[s(`export interface IResolve {
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
`)]),s("}")])],-1),ks=n("p",null,"The Typescript detection is based on the quasar.config file being in TS form (quasar.config.ts) and tsconfig.json file presence, so please remove the following:",-1),fs=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * Add support for TypeScript.
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  * @default false
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"}," supportTS?: boolean | { tsLoaderConfig: object; tsCheckerConfig: object };")])])],-1),gs=n("p",null,[s("The definition of "),n("code",{class:"doc-token"},"/quasar.config"),s(" file > sourceFiles has some changes:")],-1),hs=n("pre",{class:"doc-code"},[n("code",null,[s(`sourceFiles: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` rootComponent?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` router?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` store?: string;
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` indexHtmlTemplate?: string;
`)]),s(`
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` registerServiceWorker?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` serviceWorker?: string;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaRegisterServiceWorker?: string;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaServiceWorker?: string;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` pwaManifestFile?: string;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` electronMain?: string;
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` electronPreload?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrServerIndex?: string;
`)]),s(`
`),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` bexManifestFile?: string;
`)]),s("}")])],-1),ms=n("p",null,"There is a new prop for linting:",-1),xs=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * Should it report warnings?
   * @default false
   */`),s(`
  warnings`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Should it report errors?
   * @default false
   */`),s(`
  errors`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Fix on save.
   * @default false
   */`),s(`
  fix`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint for Esbuild
   */`),s(`
  rawEsbuildEslintOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Omit"),n("span",{class:"token operator"},"<"),s(`
    ESLint`),n("span",{class:"token punctuation"},"."),s("Options"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"cache"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"cacheLocation"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"fix"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"errorOnUnmatchedPattern"'),s(`
  `),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint Webpack plugin
   */`),s(`
  rawWebpackEslintPluginOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" WebpackEslintOptions"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Files to include (can be in glob format; for Esbuild ESLint only)
   */`),s(`
  include`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   * @default ['node_modules']
   */`),s(`
  exclude`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Enable or disable caching of the linting results.
   * @default true
   */`),s(`
  cache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Formatter to use
   * @default 'stylish'
   */`),s(`
  formatter`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" ESLint"),n("span",{class:"token punctuation"},"."),s("Formatter"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),ws=n("pre",{class:"doc-code"},[n("code",null,[s(`build: {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Transpile JS code with Babel
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default true
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transpile?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackTranspile?: boolean;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Add dependencies for transpiling with Babel (from node_modules, which are by default not transpiled).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * It is ignored if "transpile" is not set to true.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example [ /my-dependency/, 'my-dep', ...]
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transpileDependencies?: (RegExp | string)[];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackTranspileDependencies?: (RegExp | string)[];
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Add support for also referencing assets for custom tags props.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example { 'my-img-comp': 'src', 'my-avatar': [ 'src', 'placeholder-src' ]}
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` transformAssetsUrls?: Record<string, string | string[]>;
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` // use vueLoaderOptions instead
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /** Show a progress bar while compiling. */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` showProgress?: boolean;
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackShowProgress?: boolean;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Source map [strategy](https://webpack.js.org/configuration/devtool/) to use.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` devtool?: WebpackConfiguration["devtool"];
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` webpackDevtool?: WebpackConfiguration["devtool"];
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * History mode requires configuration on your deployment web server too.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'hash'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueRouterMode?: "hash" | "history";
`)]),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Sets Vue Router base.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Should not need to configure this, unless absolutely needed.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` vueRouterBase?: string;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * When using SSR+PWA, this is the name of the
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * PWA index html file.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Do NOT use index.html as name as it will mess SSR up!
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default 'offline.html'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` ssrPwaHtmlFilename?: string;
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` // Moved to ssr > pwaOfflineHtmlFilename
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"}," /** Options to supply to `ts-loader` */\n")]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` tsLoaderOptions?: object;
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Esbuild is used to build contents of /src-pwa, /src-ssr, /src-electron, /src-bex
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *    {
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *      browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *      node: 'node20'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *    }
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` esbuildTarget?: EsbuildTargetOptions;
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` // please check below for the EsbuildTargetOptions interface
`)]),s(`
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * Defines constants that get replaced in your app.
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Unlike `env`, you will need to use JSON.stringify() on the values yourself except for booleans.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},"  * Also, these will not be prefixed with `process.env.`.\n"),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  *
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` rawDefine?: { [index: string]: string | boolean | undefined | null };
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
`)]),s(`}

interface EsbuildTargetOptions {
`),n("span",{class:"token unchanged"},[n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @default ['es2022', 'firefox115', 'chrome115', 'safari14']
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` browser?: string[];
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` /**
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  * @example 'node20'
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},`  */
`),n("span",{class:"token prefix unchanged"}," "),n("span",{class:"token line"},` node?: string;
`)]),s("}")])],-1),bs=n("p",null,[s("Due to the upgrade to "),n("code",{class:"doc-token"},"webpack-dev-server"),s(" v5 in "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" v4.0.0-beta.3:")],-1),ys=n("pre",{class:"doc-code"},[n("code",null,[s(`devServer: {
`),n("span",{class:"token deleted-sign deleted"},[n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` proxy: {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   "/api": {
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     target: "http://localhost:3000",
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`     changeOrigin: true,
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},`   },
`),n("span",{class:"token prefix deleted"},"-"),n("span",{class:"token line"},` }
`)]),n("span",{class:"token inserted-sign inserted"},[n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` proxy: [
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   {
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     context: ["/api"],
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     target: "http://localhost:3000",
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`     changeOrigin: true,
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},`   },
`),n("span",{class:"token prefix inserted"},"+"),n("span",{class:"token line"},` ]
`)]),s("}")])],-1),vs=n("p",null,"Expanding a bit on the env dotfiles support. These files will be detected and used (the order matters):",-1),_s=n("pre",{class:"doc-code"},[n("code",null,`.env                                # loaded in all cases
.env.local                          # loaded in all cases, ignored by git
.env.[dev|prod]                     # loaded for dev or prod only
.env.local.[dev|prod]               # loaded for dev or prod only, ignored by git
.env.[quasarMode]                   # loaded for specific Quasar CLI mode only
.env.local.[quasarMode]             # loaded for specific Quasar CLI mode only, ignored by git
.env.[dev|prod].[quasarMode]        # loaded for specific Quasar CLI mode and dev|prod only
.env.local.[dev|prod].[quasarMode]  # loaded for specific Quasar CLI mode and dev|prod only, ignored by git`)],-1),Ss=n("p",null,[s("…where “ignored by git” assumes a default project folder created after releasing this package, otherwise add "),n("code",{class:"doc-token"},".env.local*"),s(" to your "),n("code",{class:"doc-token"},"/.gitignore"),s(" file.")],-1),js=n("p",null,"You can also configure the files above to be picked up from a different folder or even add more files to the list:",-1),Es=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"envFolder"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./'"),s(),n("span",{class:"token comment"},"// absolute or relative path to root project folder"),s(`
  `),n("span",{class:"token literal-property property"},"envFiles"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// Path strings to your custom files --- absolute or relative path to root project folder"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),Ts={__name:"upgrade-guide",setup(Ws){const k=[{id:"quasar-app-webpack-v4-beta-",title:"2. @quasar/app-webpack v4 (beta)"},{id:"a-note-to-app-extensions-owners",title:"2.1. A note to App Extensions owners",sub:!0},{id:"notable-breaking-changes",title:"2.2. Notable breaking changes",sub:!0},{id:"highlights-on-whats-new",title:"2.3. Highlights on what’s new",sub:!0},{id:"beginning-of-the-upgrade-process",title:"2.4. Beginning of the upgrade process",sub:!0},{id:"spa-capacitor-cordova-modes-changes",title:"2.5. SPA / Capacitor / Cordova modes changes",sub:!0},{id:"pwa-mode-changes",title:"2.6. PWA mode changes",sub:!0},{id:"electron-mode-changes",title:"2.7. Electron mode changes",sub:!0},{id:"ssr-mode-changes",title:"2.8. SSR mode changes",sub:!0},{id:"bex-mode-changes",title:"2.9. Bex mode changes",sub:!0},{id:"other-quasar-config-file-changes",title:"2.10. Other /quasar.config file changes",sub:!0},{id:"the-env-dotfiles-support",title:"2.11. The env dotfiles support",sub:!0}],d={oldBexTree:{l:"src-bex",c:[{l:"css",e:"CSS to use in the Browser Context",c:[{l:"content-css.css",e:"CSS file which is auto injected into the consuming webpage via the manifest.json"}]},{l:"icons",e:"Icons of your app for all platforms",c:[{l:"icon-16x16.png ",e:"Icon file at 16px x 16px"},{l:"icon-48x48.png",e:"Icon file at 48px x 48px"},{l:"icon-128x128.png",e:"Icon file at 128px x 128px"}]},{l:"js",e:"Javascript files used within the context of the BEX.",c:[{l:"background.js",e:"Standard background script BEX file - auto injected via manifest.json"},{l:"background-hooks.js",e:"Background script with a hook into the BEX communication layer"},{l:"content-hooks.js",e:"Content script script with a hook into the BEX communication layer"},{l:"content-script.js",e:"Standard content script BEX file - auto injected via manifest.json"},{l:"dom-hooks.js",e:"JS file which is injected into the DOM with a hook into the BEX communication layer"}]},{l:"www/",e:"Compiled BEX source - compiled from /src (Quasar app)"},{l:"manifest.json",e:"Main thread code for production"}]},newBexTree:{l:"src-bex",c:[{l:"assets",c:[{l:"content.css",e:"CSS file which is auto injected into the consuming webpage via the manifest.json"}]},{l:"background.js",e:"Standard background script BEX file (auto injected via manifest.json)"},{l:"dom.js",e:"JS file which is injected into the DOM with a hook into the BEX communication layer"},{l:"icons",e:"Icons of your app for all platforms",c:[{l:"icon-128x128.png ",e:"Icon file at 128px x 128px"},{l:"icon-16x16.png",e:"Icon file at 16px x 16px"},{l:"icon-48x48.png",e:"Icon file at 48px x 48px"}]},{l:"_locales/",e:"Optional BEX locales files that you might define in manifest"},{l:"manifest.json",e:"The browser extension manifest file"},{l:"my-content-script.js",e:"Standard content script BEX file - auto injected via manifest.json (you can have multiple scripts)"}]}};return(qs,c)=>(f(),g(m,{title:"Upgrade Guide for Quasar CLI with Vite",desc:"(@quasar/app-webpack) How to upgrade Quasar CLI with Webpack from older versions to the latest one.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/upgrade-guide",toc:k},{default:t(()=>[n("h2",{id:"quasar-app-webpack-v4-beta-",class:"doc-heading doc-h2",onClick:c[0]||(c[0]=i=>a(p)("quasar-app-webpack-v4-beta-"))},"@quasar/app-webpack v4 (beta)"),b,y,n("h3",{id:"a-note-to-app-extensions-owners",class:"doc-heading doc-h3",onClick:c[1]||(c[1]=i=>a(p)("a-note-to-app-extensions-owners"))},"A note to App Extensions owners"),v,e(a(l),null,{default:t(()=>[_,e(o)]),_:1}),n("h3",{id:"notable-breaking-changes",class:"doc-heading doc-h3",onClick:c[2]||(c[2]=i=>a(p)("notable-breaking-changes"))},"Notable breaking changes"),n("ul",null,[S,j,E,T,W,n("li",null,[s("The “test” cmd was removed due to latest updates for @quasar/testing-* packages. See "),e(x,{to:"https://testing.quasar.dev/packages/testing/"},{default:t(()=>[s("here")]),_:1})]),q,P,R]),n("h3",{id:"highlights-on-whats-new",class:"doc-heading doc-h3",onClick:c[3]||(c[3]=i=>a(p)("highlights-on-whats-new"))},"Highlights on what’s new"),C,M,n("h3",{id:"beginning-of-the-upgrade-process",class:"doc-heading doc-h3",onClick:c[4]||(c[4]=i=>a(p)("beginning-of-the-upgrade-process"))},"Beginning of the upgrade process"),n("div",I,[A,O,e(a(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:t(()=>[e(r,{class:"q-pa-none",name:"Yarn"},{default:t(()=>[L,e(o,{lang:"bash"})]),_:1}),e(r,{class:"q-pa-none",name:"NPM"},{default:t(()=>[D,e(o,{lang:"bash"})]),_:1}),e(r,{class:"q-pa-none",name:"PNPM"},{default:t(()=>[N,e(o,{lang:"bash"})]),_:1}),e(r,{class:"q-pa-none",name:"Bun"},{default:t(()=>[B,e(o,{lang:"bash"})]),_:1})]),_:1}),F,s(' When asked to "Pick Quasar App CLI variant", answer with: "Quasar App CLI with Webpack (BETA | next major version - v4)". ')]),$,n("ul",null,[U,Q,n("li",null,[H,e(a(l),{title:"/package.json"},{default:t(()=>[G,e(o)]),_:1}),V,s(" Then yarn/npm/pnpm/bun install. "),X,Y]),n("li",null,[J,e(a(l),{title:"/quasar.config.js file"},{default:t(()=>[z,e(o)]),_:1}),K]),n("li",null,[Z,e(a(l),{title:"/index.html"},{default:t(()=>[nn,e(o)]),_:1}),sn]),n("li",null,[en,e(h,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:t(()=>[an,tn]),_:1}),on]),n("li",null,[ln,e(a(l),{title:"/.gitignore"},{default:t(()=>[cn,e(o,{lang:"bash"})]),_:1}),pn]),n("li",null,[rn,e(a(l),{title:"/.eslintignore"},{default:t(()=>[dn,e(o,{lang:"bash"})]),_:1}),un]),n("li",null,[kn,e(a(l),null,{default:t(()=>[fn,e(o)]),_:1})])]),n("h3",{id:"spa-capacitor-cordova-modes-changes",class:"doc-heading doc-h3",onClick:c[5]||(c[5]=i=>a(p)("spa-capacitor-cordova-modes-changes"))},"SPA / Capacitor / Cordova modes changes"),gn,n("h3",{id:"pwa-mode-changes",class:"doc-heading doc-h3",onClick:c[6]||(c[6]=i=>a(p)("pwa-mode-changes"))},"PWA mode changes"),hn,e(a(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:t(()=>[e(r,{class:"q-pa-none",name:"Yarn"},{default:t(()=>[mn,e(o,{lang:"bash"})]),_:1}),e(r,{class:"q-pa-none",name:"NPM"},{default:t(()=>[xn,e(o,{lang:"bash"})]),_:1}),e(r,{class:"q-pa-none",name:"PNPM"},{default:t(()=>[wn,e(o,{lang:"bash"})]),_:1}),e(r,{class:"q-pa-none",name:"Bun"},{default:t(()=>[bn,e(o,{lang:"bash"})]),_:1})]),_:1}),yn,e(a(l),{title:"/src-pwa/custom-service-worker.js"},{default:t(()=>[vn,e(o)]),_:1}),_n,e(a(l),null,{default:t(()=>[Sn,e(o)]),_:1}),jn,e(a(l),{title:"/quasar.config file"},{default:t(()=>[En,e(o)]),_:1}),n("h3",{id:"electron-mode-changes",class:"doc-heading doc-h3",onClick:c[7]||(c[7]=i=>a(p)("electron-mode-changes"))},"Electron mode changes"),Tn,Wn,qn,e(a(l),{title:"Icon path"},{default:t(()=>[Pn,e(o)]),_:1}),e(a(l),{title:"Preload script"},{default:t(()=>[Rn,e(o)]),_:1}),n("div",Cn,[Mn,In,e(a(l),{title:"/quasar.config file"},{default:t(()=>[An,e(o)]),_:1}),On,s(" As you can see, you can now specify multiple preload scripts should you need them. ")]),e(a(l),null,{default:t(()=>[Ln,e(o)]),_:1}),Dn,e(a(l),{title:"The new /src-electron/electron-main.js"},{default:t(()=>[Nn,e(o)]),_:1}),Bn,e(a(l),{title:"/quasar.config file > electron"},{default:t(()=>[Fn,e(o)]),_:1}),n("h3",{id:"ssr-mode-changes",class:"doc-heading doc-h3",onClick:c[8]||(c[8]=i=>a(p)("ssr-mode-changes"))},"SSR mode changes"),$n,e(a(l),{title:"/src-ssr/server.js"},{default:t(()=>[Un,e(o)]),_:1}),Qn,e(a(l),{title:"/quasar.config file"},{default:t(()=>[Hn,e(o)]),_:1}),Gn,e(a(l),{title:"/quasar.config file"},{default:t(()=>[Vn,e(o)]),_:1}),n("h3",{id:"bex-mode-changes",class:"doc-heading doc-h3",onClick:c[9]||(c[9]=i=>a(p)("bex-mode-changes"))},"Bex mode changes"),Xn,Yn,e(a(l),null,{default:t(()=>[Jn,e(o,{lang:"bash"})]),_:1}),zn,Kn,e(a(l),{title:"/quasar.config file"},{default:t(()=>[Zn,e(o)]),_:1}),ns,ss,es,n("details",as,[ts,e(u,{def:d.oldBexTree},null,8,["def"])]),n("details",os,[ls,e(u,{def:d.newBexTree},null,8,["def"])]),n("h3",{id:"other-quasar-config-file-changes",class:"doc-heading doc-h3",onClick:c[10]||(c[10]=i=>a(p)("other-quasar-config-file-changes"))},"Other /quasar.config file changes"),cs,e(a(l),null,{default:t(()=>[ps,e(o)]),_:1}),is,e(a(l),null,{default:t(()=>[rs,e(o)]),_:1}),ds,e(a(l),null,{default:t(()=>[us,e(o)]),_:1}),ks,e(a(l),{title:"/quasar.config"},{default:t(()=>[fs,e(o)]),_:1}),gs,e(a(l),{title:"/quasar.config > sourceFiles"},{default:t(()=>[hs,e(o)]),_:1}),ms,e(a(l),{title:"/quasar.config > eslint (New!)"},{default:t(()=>[xs,e(o)]),_:1}),e(a(l),{title:"/quasar.config > build"},{default:t(()=>[ws,e(o)]),_:1}),bs,e(a(l),{title:"/quasar.config > devServer"},{default:t(()=>[ys,e(o)]),_:1}),n("h3",{id:"the-env-dotfiles-support",class:"doc-heading doc-h3",onClick:c[11]||(c[11]=i=>a(p)("the-env-dotfiles-support"))},"The env dotfiles support"),vs,e(a(l),null,{default:t(()=>[_s,e(o)]),_:1}),Ss,js,e(a(l),{title:"/quasar.config file"},{default:t(()=>[Es,e(o)]),_:1})]),_:1}))}},Ls=w(Ts,[["__file","upgrade-guide.md"]]);export{Ls as default};
