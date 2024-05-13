import{b as m,d as y,w as e,h as n,f as a,e as t,k as l,i as s}from"./vendor.js";import{c as i}from"./_examples_frameless-electron-window.js";import{D as g,a as u}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as o}from"./CopyButton.js";import{_ as f}from"./index.js";const h=n("p",null,"The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page.",-1),_=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("The following steps are only required when you "),n("strong",null,"have not"),s(" selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.")])],-1),w=n("p",null,[s("Create "),n("code",{class:"doc-token"},"/tsconfig.json"),s(" file at the root of you project with this content:")],-1),v=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"@quasar/app-vite/tsconfig-preset"'),n("span",{class:"token punctuation"},","),s(`
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
`),n("span",{class:"token punctuation"},"}")])],-1),b=n("p",null,[s("Then install the "),n("code",{class:"doc-token"},"typescript"),s(" package:")],-1),S=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])],-1),x=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" --save-dev typescript")])],-1),E=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" typescript")])],-1),q=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])],-1),T=n("p",null,"Now you can start using TypeScript into your project. Note that some IDEs might require a restart for the new setup to fully kick in.",-1),P=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Remember that you must change the extension of your JavaScript files to "),n("code",{class:"doc-token"},".ts"),s(" to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so "),n("code",{class:"doc-token"},'<script lang="ts">'),s(".")])],-1),I=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("If you fail to add the "),n("code",{class:"doc-token"},"tsconfig.json"),s(" file, the application will break at compile time!")])],-1),R=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable it in "),n("code",{class:"doc-token"},"/quasar.config"),s(" file for dev builds.")])],-1),j=n("p",null,"First add the needed dependencies:",-1),C=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),N=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),L=n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),A=n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])],-1),D=n("p",null,"Then update your ESLint configuration accordingly, like in the following example:",-1),$=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
    `),n("span",{class:"token comment"},"// this rule, if on, would require explicit return type on the `render` function"),s(`
    `),n("span",{class:"token string-property property"},"'@typescript-eslint/explicit-function-return-type'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'off'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled"),s(`
    `),n("span",{class:"token string-property property"},"'@typescript-eslint/no-var-requires'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'off'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),O=n("p",null,[s("As a last step, update your "),n("code",{class:"doc-token"},"yarn lint"),s(" command to also lint "),n("code",{class:"doc-token"},".ts"),s(" files.")],-1),V=n("p",null,[s("Finally, edit your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")],-1),B=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// fix: true,"),s(`
  `),n("span",{class:"token comment"},"// include: [],"),s(`
  `),n("span",{class:"token comment"},"// exclude: [],"),s(`
  `),n("span",{class:"token comment"},"// rawOptions: {},"),s(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])],-1),M=n("p",null,"If you chose TypeScript support when scaffolding the project, these declaration files were automatically scaffolded for you. If TypeScript support wasn’t enabled during project creation, create the following files.",-1),U=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token comment"},'/// <reference types="vite/client" />'),s(`

`),n("span",{class:"token comment"},"// Mocks all files ending in `.vue` showing them as plain Vue instances"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'*.vue'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" DefineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" component"),n("span",{class:"token operator"},":"),s(" DefineComponent"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" component"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),W=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token comment"},"// Forces TS to apply `@quasar/app-vite` augmentations of `quasar` package"),s(`
`),n("span",{class:"token comment"},"// Removing this would break `quasar/wrappers` imports as those typings are declared"),s(`
`),n("span",{class:"token comment"},"//  into `@quasar/app-vite`"),s(`
`),n("span",{class:"token comment"},"// As a side effect, since `@quasar/app-vite` reference `quasar` to augment it,"),s(`
`),n("span",{class:"token comment"},"//  this declaration also apply `quasar` own"),s(`
`),n("span",{class:"token comment"},"//  augmentations (eg. adds `$q` into Vue component context)"),s(`
`),n("span",{class:"token comment"},'/// <reference types="@quasar/app-vite" />')])],-1),F=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"NODE_ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"VUE_ROUTER_MODE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hash'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'history'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'abstract'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"VUE_ROUTER_BASE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Define any custom env variables you have here, if you wish"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),Q=n("p",null,"See the following sections depending on the features and build modes you are using.",-1),K=n("code",{class:"doc-token"},"router",-1),Y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Router "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 * When adding new properties to stores, you should also
 * extend the \`PiniaCustomProperties\` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */`),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'pinia'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"PiniaCustomProperties"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"readonly"),s(" router"),n("span",{class:"token operator"},":"),s(" Router"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),J=n("code",{class:"doc-token"},"router",-1),G=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" InjectionKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Router "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  createStore`),n("span",{class:"token punctuation"},","),s(`
  Store `),n("span",{class:"token keyword"},"as"),s(" VuexStore"),n("span",{class:"token punctuation"},","),s(`
  useStore `),n("span",{class:"token keyword"},"as"),s(" vuexUseStore"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuex'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"StateInterface"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Define your own store structure, using submodules if needed"),s(`
  `),n("span",{class:"token comment"},"// example: ExampleStateInterface;"),s(`
  `),n("span",{class:"token comment"},"// Declared as unknown to avoid linting issue. Best to strongly type as per the line above."),s(`
  example`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"unknown"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// provide typings for `this.$store`"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'@vue/runtime-core'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ComponentCustomProperties"),s(),n("span",{class:"token punctuation"},"{"),s(`
    $store`),n("span",{class:"token operator"},":"),s(" VuexStore"),n("span",{class:"token operator"},"<"),s("StateInterface"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// Provide typings for `this.$router` inside Vuex stores"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},'"vuex"'),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// eslint-disable-next-line @typescript-eslint/no-unused-vars"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},[s("Store"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"S"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"readonly"),s(" $router"),n("span",{class:"token operator"},":"),s(" Router"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// provide typings for `useStore` helper"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" storeKey"),n("span",{class:"token operator"},":"),s(" InjectionKey"),n("span",{class:"token operator"},"<"),s("VuexStore"),n("span",{class:"token operator"},"<"),s("StateInterface"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Symbol"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'vuex-key'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"vuexUseStore"),n("span",{class:"token punctuation"},"("),s("storeKey"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// createStore<StateInterface>({ ... })")])],-1),H=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"SERVICE_WORKER_FILE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"PWA_FALLBACK_HTML"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"PWA_SERVICE_WORKER_REGEX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),X=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// at the top of the file"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"const"),s(" self"),n("span",{class:"token operator"},":"),s(" ServiceWorkerGlobalScope "),n("span",{class:"token operator"},"&"),s(`
  `),n("span",{class:"token keyword"},"typeof"),s(" globalThis "),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function-variable function"},"skipWaiting"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])],-1),z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"../tsconfig.json"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"lib"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"WebWorker"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ESNext"'),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"include"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"*.ts"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"*.d.ts"'),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),Z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"parserOptions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"project"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'./tsconfig.json'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"overrides"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"files"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'custom-service-worker.ts'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token literal-property property"},"env"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"serviceworker"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])],-1),nn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"QUASAR_PUBLIC_FOLDER"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_FOLDER"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_EXTENSION"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"APP_URL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),sn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'@quasar/app-vite'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"BexEventMap"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* eslint-disable @typescript-eslint/no-explicit-any */"),s(`
    log`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(" data"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"never"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    getTime`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"never"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token string-property property"},"'storage.get'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'storage.set'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'storage.remove'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/* eslint-enable @typescript-eslint/no-explicit-any */"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),tn={__name:"supporting-ts",setup(en){const k=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],d=[{id:"installation-of-typescript-support",title:"2. Installation of TypeScript Support"},{id:"linting-setup",title:"2.1. Linting setup",sub:!0},{id:"typescript-declaration-files",title:"2.2. TypeScript Declaration Files",sub:!0}];return(an,p)=>(m(),y(g,{title:"Supporting TypeScript",desc:"(@quasar/app-vite) How to enable support for TypeScript in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/supporting-ts",toc:d,related:k},{default:e(()=>[h,_,n("h2",{id:"installation-of-typescript-support",class:"doc-heading doc-h2",onClick:p[0]||(p[0]=r=>a(i)("installation-of-typescript-support"))},"Installation of TypeScript Support"),w,t(a(c),null,{default:e(()=>[v,t(o)]),_:1}),b,t(a(c),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:e(()=>[t(l,{class:"q-pa-none",name:"Yarn"},{default:e(()=>[S,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"NPM"},{default:e(()=>[x,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"PNPM"},{default:e(()=>[E,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"Bun"},{default:e(()=>[q,t(o,{lang:"bash"})]),_:1})]),_:1}),T,P,I,n("h3",{id:"linting-setup",class:"doc-heading doc-h3",onClick:p[1]||(p[1]=r=>a(i)("linting-setup"))},"Linting setup"),R,j,t(a(c),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:e(()=>[t(l,{class:"q-pa-none",name:"Yarn"},{default:e(()=>[C,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"NPM"},{default:e(()=>[N,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"PNPM"},{default:e(()=>[L,t(o,{lang:"bash"})]),_:1}),t(l,{class:"q-pa-none",name:"Bun"},{default:e(()=>[A,t(o,{lang:"bash"})]),_:1})]),_:1}),D,t(a(c),{title:"/.eslintrc.cjs"},{default:e(()=>[$,t(o)]),_:1}),n("p",null,[s("If anything goes wrong, read the "),t(u,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:e(()=>[s("typescript-eslint guide")]),_:1}),s(", on which this example is based.")]),O,V,t(a(c),{title:"/quasar.config file"},{default:e(()=>[B,t(o)]),_:1}),n("h3",{id:"typescript-declaration-files",class:"doc-heading doc-h3",onClick:p[2]||(p[2]=r=>a(i)("typescript-declaration-files"))},"TypeScript Declaration Files"),M,t(a(c),{title:"/src/shims-vue.d.ts"},{default:e(()=>[U,t(o)]),_:1}),t(a(c),{title:"/src/quasar.d.ts"},{default:e(()=>[W,t(o)]),_:1}),t(a(c),{title:"/src/env.d.ts"},{default:e(()=>[F,t(o)]),_:1}),Q,n("h4",{id:"pinia",class:"doc-heading doc-h4",onClick:p[3]||(p[3]=r=>a(i)("pinia"))},"Pinia"),n("p",null,[s("If you are using "),t(u,{to:"/quasar-cli-vite/state-management-with-pinia"},{default:e(()=>[s("Pinia")]),_:1}),s(", add the section below to your project. Quasar CLI provides the "),K,s(" property, you may need to add more global properties if you have them.")]),t(a(c),{title:"/src/stores/index.ts"},{default:e(()=>[Y,t(o)]),_:1}),n("h4",{id:"vuex",class:"doc-heading doc-h4",onClick:p[4]||(p[4]=r=>a(i)("vuex"))},"Vuex"),n("p",null,[s("If you are using "),t(u,{to:"/quasar-cli-vite/state-management-with-vuex"},{default:e(()=>[s("Vuex")]),_:1}),s(", add the section below to your project. Quasar CLI provides the "),J,s(" property, you may need to add more global properties if you have them. Adjust the state interface to suit your application.")]),t(a(c),{title:"/src/store/index.ts"},{default:e(()=>[G,t(o)]),_:1}),n("h4",{id:"pwa-mode",class:"doc-heading doc-h4",onClick:p[5]||(p[5]=r=>a(i)("pwa-mode"))},"PWA mode"),n("p",null,[s("If you are using "),t(u,{to:"/quasar-cli-vite/developing-pwa/introduction"},{default:e(()=>[s("PWA mode")]),_:1}),s(", make the following modifications to your project, and create any files that do not exist:")]),t(a(c),{title:"/src-pwa/pwa-env.d.ts"},{default:e(()=>[H,t(o)]),_:1}),t(a(c),{title:"/src-pwa/custom-service-worker.ts"},{default:e(()=>[X,t(o)]),_:1}),t(a(c),{title:"/src-pwa/tsconfig.json"},{default:e(()=>[z,t(o)]),_:1}),t(a(c),{title:"/src-pwa/.eslintrc.cjs"},{default:e(()=>[Z,t(o)]),_:1}),n("h4",{id:"electron-mode",class:"doc-heading doc-h4",onClick:p[6]||(p[6]=r=>a(i)("electron-mode"))},"Electron mode"),n("p",null,[s("If you are using "),t(u,{to:"/quasar-cli-vite/developing-electron-apps/introduction"},{default:e(()=>[s("Electron mode")]),_:1}),s(", add the section below to your project.")]),t(a(c),{title:"/src-electron/electron-env.d.ts"},{default:e(()=>[nn,t(o)]),_:1}),n("h4",{id:"bex-mode",class:"doc-heading doc-h4",onClick:p[7]||(p[7]=r=>a(i)("bex-mode"))},"BEX mode"),n("p",null,[s("If you are using "),t(u,{to:"/quasar-cli-vite/developing-browser-extensions/introduction"},{default:e(()=>[s("BEX mode")]),_:1}),s(", add the section below to your project. You may need to adjust it to your needs depending on the events you are using. The key is the event name, the value is a tuple where the first element is the input and the second is the output type.")]),t(a(c),{title:"/src-bex/background.ts"},{default:e(()=>[sn,t(o)]),_:1})]),_:1}))}},kn=f(tn,[["__file","supporting-ts.md"]]);export{kn as default};
