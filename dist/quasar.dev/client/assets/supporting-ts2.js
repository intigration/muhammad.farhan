import{b as d,d as g,w as e,h as n,f as a,e as t,i as s,j as m,k as l}from"./vendor.js";import{c as i}from"./_examples_frameless-electron-window.js";import{D as y,a as h}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as o}from"./CopyButton.js";import{_ as f}from"./index.js";const _=n("p",null,"The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page.",-1),b=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("The following steps are only required when you "),n("strong",null,"have not"),s(" selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.")])],-1),w=n("p",null,[s("In order to support TypeScript, you’ll need to change the extension of your quasar.config file: "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")],-1),v=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"quasar/wrappers"'),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"supportTS"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])],-1),T=n("p",null,[s("Then create "),n("code",{class:"doc-token"},"/tsconfig.json"),s(" file at the root of you project with this content:")],-1),S=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"@quasar/app-webpack/tsconfig-preset"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"baseUrl"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"."'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"exclude"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},'"./dist"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"./.quasar"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"./node_modules"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"./src-capacitor"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"./src-cordova"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"./quasar.config.*.temporary.compiled*"'),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),q=n("p",null,"Now you can start using TypeScript into your project.",-1),x=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Remember that you must change the extension of your JavaScript files to "),n("code",{class:"doc-token"},".ts"),s(" to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so "),n("code",{class:"doc-token"},'<script lang="ts">'),s(".")])],-1),j=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("If you fail to add the "),n("code",{class:"doc-token"},"tsconfig.json"),s(" file, the application will break at compile time!")])],-1),C=n("p",null,[s("Behind the curtains, Quasar uses "),n("code",{class:"doc-token"},"ts-loader"),s(" and "),n("code",{class:"doc-token"},"fork-ts-checker-webpack-plugin"),s(" (provided by "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" package) to manage TS files. If you ever need to provide a custom configuration for these libs you can do so by making "),n("code",{class:"doc-token"},"build"),s(" property like so:")],-1),I=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"supportTS"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"tsLoaderConfig"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// `appendTsSuffixTo: [/\\.vue$/]` and `transpileOnly: true` are added by default and cannot be overridden"),s(`
        `),n("span",{class:"token operator"},"..."),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"tsCheckerConfig"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// `vue: true` is added by default and cannot be overridden"),s(`
        `),n("span",{class:"token operator"},"..."),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),N=n("p",null,"First add the needed dependencies:",-1),P=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),L=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),E=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),B=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),D=n("p",null,"Then update your ESLint configuration accordingly, like in the following example:",-1),R=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy"),s(`
  `),n("span",{class:"token comment"},"// This option interrupts the configuration hierarchy at this file"),s(`
  `),n("span",{class:"token comment"},"// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)"),s(`
  `),n("span",{class:"token literal-property property"},"root"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser"),s(`
  `),n("span",{class:"token comment"},'// Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working'),s(`
  `),n("span",{class:"token comment"},"// `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted"),s(`
  `),n("span",{class:"token literal-property property"},"parserOptions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration"),s(`
    `),n("span",{class:"token comment"},"// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint"),s(`
    `),n("span",{class:"token comment"},"// Needed to make the parser take into account 'vue' files"),s(`
    `),n("span",{class:"token literal-property property"},"extraFileExtensions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'.vue'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"parser"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'@typescript-eslint/parser'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"project"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'./tsconfig.json'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"tsconfigRootDir"),n("span",{class:"token operator"},":"),s(" __dirname"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"ecmaVersion"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2021"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Allows for the parsing of modern ECMAScript features"),s(`
    `),n("span",{class:"token literal-property property"},"sourceType"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'module'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Allows for the use of imports"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// Rules order is important, please avoid shuffling them"),s(`
  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// Base ESLint recommended rules"),s(`
    `),n("span",{class:"token string"},"'eslint:recommended'"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage"),s(`
    `),n("span",{class:"token comment"},"// ESLint typescript rules"),s(`
    `),n("span",{class:"token string"},"'plugin:@typescript-eslint/eslint-recommended'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'plugin:@typescript-eslint/recommended'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// consider disabling this class of rules if linting takes too long"),s(`
    `),n("span",{class:"token string"},"'plugin:@typescript-eslint/recommended-requiring-type-checking'"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention"),s(`
    `),n("span",{class:"token comment"},"// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules"),s(`
    `),n("span",{class:"token string"},"'plugin:vue/essential'"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// --- ONLY WHEN USING PRETTIER ---"),s(`
    `),n("span",{class:"token comment"},"// https://github.com/prettier/eslint-config-prettier#installation"),s(`
    `),n("span",{class:"token comment"},"// usage with Prettier, provided by 'eslint-config-prettier'."),s(`
    `),n("span",{class:"token string"},"'prettier'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'prettier/@typescript-eslint'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},"'prettier/vue'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token comment"},"// required to apply rules which need type information"),s(`
    `),n("span",{class:"token string"},"'@typescript-eslint'"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file"),s(`
    `),n("span",{class:"token comment"},"// required to lint *.vue files"),s(`
    `),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// add your custom rules here"),s(`
  `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// others rules..."),s(`

    `),n("span",{class:"token comment"},"// TypeScript"),s(`
    `),n("span",{class:"token string-property property"},"'quotes'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'warn'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'single'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'@typescript-eslint/explicit-function-return-type'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'off'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),$=n("p",null,[s("As a last step, update your "),n("code",{class:"doc-token"},"yarn lint"),s(" command to also lint "),n("code",{class:"doc-token"},".ts"),s(" files.")],-1),M=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable Webpack lint extension into the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file for dev builds.")])],-1),Q=n("p",null,[s("If you setup TypeScript linting and want "),n("code",{class:"doc-token"},"fork-ts-checker-webpack-plugin"),s(" (provided by "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" package) to take it into account then you should make use of "),n("code",{class:"doc-token"},"tsCheckerConfig"),s(" property:")],-1),W=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"supportTS"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"tsCheckerConfig"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"enabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"files"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/**/*.{ts,tsx,js,jsx,vue}'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},"."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),A={__name:"supporting-ts",setup(H){const u=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],k=[{id:"installation-of-typescript-support",title:"2. Installation of TypeScript Support"},{id:"handling-ts-webpack-loaders",title:"3. Handling TS Webpack loaders"},{id:"linting-setup",title:"3.1. Linting setup",sub:!0}];return(O,p)=>(d(),g(y,{title:"Supporting TypeScript",desc:"(@quasar/app-webpack) How to enable support for TypeScript in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",badge:"@quasar/app-webpack v4+",heading:"","edit-link":"quasar-cli-webpack/supporting-ts",toc:k,related:u},{default:e(()=>[_,b,n("h2",{id:"installation-of-typescript-support",class:"doc-heading doc-h2",onClick:p[0]||(p[0]=r=>a(i)("installation-of-typescript-support"))},"Installation of TypeScript Support"),w,t(a(c),null,{default:e(()=>[v,t(o)]),_:1}),T,t(a(c),null,{default:e(()=>[S,t(o)]),_:1}),q,x,j,n("h2",{id:"handling-ts-webpack-loaders",class:"doc-heading doc-h2",onClick:p[1]||(p[1]=r=>a(i)("handling-ts-webpack-loaders"))},[s("Handling TS Webpack loaders "),t(m,{label:"@quasar/app-webpack =v3"})]),C,t(a(c),{title:"/quasar.config file"},{default:e(()=>[I,t(o)]),_:1}),n("h3",{id:"linting-setup",class:"doc-heading doc-h3",onClick:p[2]||(p[2]=r=>a(i)("linting-setup"))},"Linting setup"),N,t(a(c),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:e(()=>[t(l,{class:"q-pa-none",name:"Yarn"},{default:e(()=>[P,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"NPM"},{default:e(()=>[L,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"PNPM"},{default:e(()=>[E,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"Bun"},{default:e(()=>[B,t(o,{lang:"bash"})]),_:1})]),_:1}),D,t(a(c),{title:"/.eslintrc.cjs"},{default:e(()=>[R,t(o)]),_:1}),n("p",null,[s("If anything goes wrong, read the "),t(h,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:e(()=>[s("typescript-eslint guide")]),_:1}),s(", on which this example is based.")]),$,M,Q,t(a(c),{title:"/quasar.config file"},{default:e(()=>[W,t(o)]),_:1})]),_:1}))}},z=f(A,[["__file","supporting-ts.md"]]);export{z as default};
