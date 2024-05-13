import{resolveComponent as T,mergeProps as j,withCtx as p,unref as u,createVNode as n,createTextVNode as s,useSSRContext as C}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as N,a as f}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as A}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const q={__name:"supporting-ts",__ssrInlineRender:!0,setup(S){const b=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],w=[{id:"installation-of-typescript-support",title:"2. Installation of TypeScript Support"},{id:"linting-setup",title:"2.1. Linting setup",sub:!0},{id:"typescript-declaration-files",title:"2.2. TypeScript Declaration Files",sub:!0}];return(L,E,P,R)=>{const $=T("q-tab-panel");E(c(N,j({title:"Supporting TypeScript",desc:"(@quasar/app-vite) How to enable support for TypeScript in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/supporting-ts",toc:w,related:b},R),{default:p((O,i,g,o)=>{if(i)i(`<p${o}>The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>The following steps are only required when you <strong${o}>have not</strong> selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.</p></div><h2 id="installation-of-typescript-support" class="doc-heading doc-h2"${o}>Installation of TypeScript Support</h2><p${o}>Create <code class="doc-token"${o}>/tsconfig.json</code> file at the root of you project with this content:</p>`),i(c(u(k),null,{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token punctuation"${a}>{</span>
  <span class="token property"${a}>&quot;extends&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;@quasar/app-vite/tsconfig-preset&quot;</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;compilerOptions&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token property"${a}>&quot;baseUrl&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;.&quot;</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;exclude&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
    <span class="token string"${a}>&quot;./dist&quot;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&quot;./.quasar&quot;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&quot;./node_modules&quot;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&quot;./src-capacitor&quot;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&quot;./src-cordova&quot;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&quot;./quasar.config.*.temporary.compiled*&quot;</span>
  <span class="token punctuation"${a}>]</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(`<p${o}>Then install the <code class="doc-token"${o}>typescript</code> package:</p>`),i(c(u(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:p((y,t,r,a)=>{if(t)t(c($,{class:"q-pa-none",name:"Yarn"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>yarn</span> <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>--dev</span> typescript</code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])]),n(e,{lang:"bash"})]}),_:1},r,a)),t(c($,{class:"q-pa-none",name:"NPM"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>npm</span> <span class="token function"${l}>install</span> --save-dev typescript</code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" --save-dev typescript")])]),n(e,{lang:"bash"})]}),_:1},r,a)),t(c($,{class:"q-pa-none",name:"PNPM"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>pnpm</span> <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>-D</span> typescript</code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" typescript")])]),n(e,{lang:"bash"})]}),_:1},r,a)),t(c($,{class:"q-pa-none",name:"Bun"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ bun <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>--dev</span> typescript</code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])]),n(e,{lang:"bash"})]}),_:1},r,a));else return[n($,{class:"q-pa-none",name:"Yarn"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"NPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" --save-dev typescript")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"PNPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" typescript")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"Bun"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])]),n(e,{lang:"bash"})]),_:1})]}),_:1},g,o)),i(`<p${o}>Now you can start using TypeScript into your project. Note that some IDEs might require a restart for the new setup to fully kick in.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>Remember that you must change the extension of your JavaScript files to <code class="doc-token"${o}>.ts</code> to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so <code class="doc-token"${o}>&lt;script lang=&quot;ts&quot;&gt;</code>.</p></div><div class="doc-note doc-note--warning"${o}><p class="doc-note__title"${o}>WARNING</p><p${o}>If you fail to add the <code class="doc-token"${o}>tsconfig.json</code> file, the application will break at compile time!</p></div><h3 id="linting-setup" class="doc-heading doc-h3"${o}>Linting setup</h3><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable it in <code class="doc-token"${o}>/quasar.config</code> file for dev builds.</p></div><p${o}>First add the needed dependencies:</p>`),i(c(u(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:p((y,t,r,a)=>{if(t)t(c($,{class:"q-pa-none",name:"Yarn"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>yarn</span> <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>--dev</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${l}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},r,a)),t(c($,{class:"q-pa-none",name:"NPM"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>npm</span> <span class="token function"${l}>install</span> --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${l}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},r,a)),t(c($,{class:"q-pa-none",name:"PNPM"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>pnpm</span> <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>-D</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${l}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},r,a)),t(c($,{class:"q-pa-none",name:"Bun"},{default:p((v,m,d,l)=>{if(m)m(`<pre class="doc-code"${l}><code${l}>$ bun <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>--dev</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${l}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),m(c(e,{lang:"bash"},null,d,l));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},r,a));else return[n($,{class:"q-pa-none",name:"Yarn"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"NPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"PNPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"Bun"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1})]}),_:1},g,o)),i(`<p${o}>Then update your ESLint configuration accordingly, like in the following example:</p>`),i(c(u(k),{title:"/.eslintrc.cjs"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span> resolve <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>require</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;node:path&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>;</span>

module<span class="token punctuation"${a}>.</span>exports <span class="token operator"${a}>=</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy</span>
  <span class="token comment"${a}>// This option interrupts the configuration hierarchy at this file</span>
  <span class="token comment"${a}>// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)</span>
  <span class="token literal-property property"${a}>root</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser</span>
  <span class="token comment"${a}>// Must use parserOptions instead of &quot;parser&quot; to allow vue-eslint-parser to keep working</span>
  <span class="token comment"${a}>// \`parser: &#39;vue-eslint-parser&#39;\` is already included with any &#39;plugin:vue/**&#39; config and should be omitted</span>
  <span class="token literal-property property"${a}>parserOptions</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration</span>
    <span class="token comment"${a}>// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint</span>
    <span class="token comment"${a}>// Needed to make the parser take into account &#39;vue&#39; files</span>
    <span class="token literal-property property"${a}>extraFileExtensions</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token string"${a}>&#39;.vue&#39;</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>parser</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>project</span><span class="token operator"${a}>:</span> <span class="token function"${a}>resolve</span><span class="token punctuation"${a}>(</span>__dirname<span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;./tsconfig.json&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>tsconfigRootDir</span><span class="token operator"${a}>:</span> __dirname<span class="token punctuation"${a}>,</span>
    <span class="token literal-property property"${a}>ecmaVersion</span><span class="token operator"${a}>:</span> <span class="token number"${a}>2021</span><span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// Allows for the parsing of modern ECMAScript features</span>
    <span class="token literal-property property"${a}>sourceType</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;module&#39;</span><span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// Allows for the use of imports</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// Rules order is important, please avoid shuffling them</span>
  <span class="token keyword"${a}>extends</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
    <span class="token comment"${a}>// Base ESLint recommended rules</span>
    <span class="token string"${a}>&#39;eslint:recommended&#39;</span><span class="token punctuation"${a}>,</span>

    <span class="token comment"${a}>// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage</span>
    <span class="token comment"${a}>// ESLint typescript rules</span>
    <span class="token string"${a}>&#39;plugin:@typescript-eslint/eslint-recommended&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token comment"${a}>// consider disabling this class of rules if linting takes too long</span>
    <span class="token string"${a}>&#39;plugin:@typescript-eslint/recommended-requiring-type-checking&#39;</span><span class="token punctuation"${a}>,</span>

    <span class="token comment"${a}>// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention</span>
    <span class="token comment"${a}>// consider switching to \`plugin:vue/strongly-recommended\` or \`plugin:vue/recommended\` for stricter rules</span>
    <span class="token string"${a}>&#39;plugin:vue/essential&#39;</span><span class="token punctuation"${a}>,</span>

    <span class="token comment"${a}>// --- ONLY WHEN USING PRETTIER ---</span>
    <span class="token comment"${a}>// https://github.com/prettier/eslint-config-prettier#installation</span>
    <span class="token comment"${a}>// usage with Prettier, provided by &#39;eslint-config-prettier&#39;.</span>
    <span class="token string"${a}>&#39;prettier&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&#39;prettier/@typescript-eslint&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token string"${a}>&#39;prettier/vue&#39;</span><span class="token punctuation"${a}>,</span>
  <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>

  <span class="token literal-property property"${a}>plugins</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
    <span class="token comment"${a}>// required to apply rules which need type information</span>
    <span class="token string"${a}>&#39;@typescript-eslint&#39;</span><span class="token punctuation"${a}>,</span>

    <span class="token comment"${a}>// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file</span>
    <span class="token comment"${a}>// required to lint *.vue files</span>
    <span class="token string"${a}>&#39;vue&#39;</span><span class="token punctuation"${a}>,</span>
  <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>

  <span class="token comment"${a}>// add your custom rules here</span>
  <span class="token literal-property property"${a}>rules</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>// others rules...</span>

    <span class="token comment"${a}>// TypeScript</span>
    <span class="token string-property property"${a}>&#39;quotes&#39;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token string"${a}>&#39;warn&#39;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;single&#39;</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
    <span class="token comment"${a}>// this rule, if on, would require explicit return type on the \`render\` function</span>
    <span class="token string-property property"${a}>&#39;@typescript-eslint/explicit-function-return-type&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;off&#39;</span><span class="token punctuation"${a}>,</span>
    <span class="token comment"${a}>// in plain CommonJS modules, you can&#39;t use \`import foo = require(&#39;foo&#39;)\` to pass this rule, so it has to be disabled</span>
    <span class="token string-property property"${a}>&#39;@typescript-eslint/no-var-requires&#39;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;off&#39;</span><span class="token punctuation"${a}>,</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(`<p${o}>If anything goes wrong, read the `),i(c(f,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:p((y,t,r,a)=>{if(t)t("typescript-eslint guide");else return[s("typescript-eslint guide")]}),_:1},g,o)),i(`, on which this example is based.</p><p${o}>As a last step, update your <code class="doc-token"${o}>yarn lint</code> command to also lint <code class="doc-token"${o}>.ts</code> files.</p><p${o}>Finally, edit your <code class="doc-token"${o}>/quasar.config</code> file:</p>`),i(c(u(k),{title:"/quasar.config file"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token literal-property property"${a}>eslint</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// fix: true,</span>
  <span class="token comment"${a}>// include: [],</span>
  <span class="token comment"${a}>// exclude: [],</span>
  <span class="token comment"${a}>// rawOptions: {},</span>
  <span class="token literal-property property"${a}>warnings</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>
  <span class="token literal-property property"${a}>errors</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// fix: true,"),s(`
  `),n("span",{class:"token comment"},"// include: [],"),s(`
  `),n("span",{class:"token comment"},"// exclude: [],"),s(`
  `),n("span",{class:"token comment"},"// rawOptions: {},"),s(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])]),n(e)]}),_:1},g,o)),i(`<h3 id="typescript-declaration-files" class="doc-heading doc-h3"${o}>TypeScript Declaration Files</h3><p${o}>If you chose TypeScript support when scaffolding the project, these declaration files were automatically scaffolded for you. If TypeScript support wasn’t enabled during project creation, create the following files.</p>`),i(c(u(k),{title:"/src/shims-vue.d.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/* eslint-disable */</span>

<span class="token comment"${a}>/// &lt;reference types=&quot;vite/client&quot; /&gt;</span>

<span class="token comment"${a}>// Mocks all files ending in \`.vue\` showing them as plain Vue instances</span>
<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>module</span> <span class="token string"${a}>&#39;*.vue&#39;</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>import</span> <span class="token keyword"${a}>type</span> <span class="token punctuation"${a}>{</span> DefineComponent <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue&#39;</span><span class="token punctuation"${a}>;</span>
  <span class="token keyword"${a}>const</span> component<span class="token operator"${a}>:</span> DefineComponent<span class="token operator"${a}>&lt;</span><span class="token punctuation"${a}>{</span><span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>{</span><span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token builtin"${a}>any</span><span class="token operator"${a}>&gt;</span><span class="token punctuation"${a}>;</span>
  <span class="token keyword"${a}>export</span> <span class="token keyword"${a}>default</span> component<span class="token punctuation"${a}>;</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token comment"},'/// <reference types="vite/client" />'),s(`

`),n("span",{class:"token comment"},"// Mocks all files ending in `.vue` showing them as plain Vue instances"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'*.vue'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" DefineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" component"),n("span",{class:"token operator"},":"),s(" DefineComponent"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" component"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(c(u(k),{title:"/src/quasar.d.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/* eslint-disable */</span>

<span class="token comment"${a}>// Forces TS to apply \`@quasar/app-vite\` augmentations of \`quasar\` package</span>
<span class="token comment"${a}>// Removing this would break \`quasar/wrappers\` imports as those typings are declared</span>
<span class="token comment"${a}>//  into \`@quasar/app-vite\`</span>
<span class="token comment"${a}>// As a side effect, since \`@quasar/app-vite\` reference \`quasar\` to augment it,</span>
<span class="token comment"${a}>//  this declaration also apply \`quasar\` own</span>
<span class="token comment"${a}>//  augmentations (eg. adds \`$q\` into Vue component context)</span>
<span class="token comment"${a}>/// &lt;reference types=&quot;@quasar/app-vite&quot; /&gt;</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token comment"},"// Forces TS to apply `@quasar/app-vite` augmentations of `quasar` package"),s(`
`),n("span",{class:"token comment"},"// Removing this would break `quasar/wrappers` imports as those typings are declared"),s(`
`),n("span",{class:"token comment"},"//  into `@quasar/app-vite`"),s(`
`),n("span",{class:"token comment"},"// As a side effect, since `@quasar/app-vite` reference `quasar` to augment it,"),s(`
`),n("span",{class:"token comment"},"//  this declaration also apply `quasar` own"),s(`
`),n("span",{class:"token comment"},"//  augmentations (eg. adds `$q` into Vue component context)"),s(`
`),n("span",{class:"token comment"},'/// <reference types="@quasar/app-vite" />')])]),n(e)]}),_:1},g,o)),i(c(u(k),{title:"/src/env.d.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/* eslint-disable */</span>

<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>namespace</span> NodeJS <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>ProcessEnv</span> <span class="token punctuation"${a}>{</span>
    <span class="token constant"${a}>NODE_ENV</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>VUE_ROUTER_MODE</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&#39;hash&#39;</span> <span class="token operator"${a}>|</span> <span class="token string"${a}>&#39;history&#39;</span> <span class="token operator"${a}>|</span> <span class="token string"${a}>&#39;abstract&#39;</span> <span class="token operator"${a}>|</span> <span class="token keyword"${a}>undefined</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>VUE_ROUTER_BASE</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span> <span class="token operator"${a}>|</span> <span class="token keyword"${a}>undefined</span><span class="token punctuation"${a}>;</span>
    <span class="token comment"${a}>// Define any custom env variables you have here, if you wish</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"NODE_ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"VUE_ROUTER_MODE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hash'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'history'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'abstract'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"VUE_ROUTER_BASE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Define any custom env variables you have here, if you wish"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(`<p${o}>See the following sections depending on the features and build modes you are using.</p><h4 id="pinia" class="doc-heading doc-h4"${o}>Pinia</h4><p${o}>If you are using `),i(c(f,{to:"/quasar-cli-vite/state-management-with-pinia"},{default:p((y,t,r,a)=>{if(t)t("Pinia");else return[s("Pinia")]}),_:1},g,o)),i(`, add the section below to your project. Quasar CLI provides the <code class="doc-token"${o}>router</code> property, you may need to add more global properties if you have them.</p>`),i(c(u(k),{title:"/src/stores/index.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> Router <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue-router&#39;</span><span class="token punctuation"${a}>;</span>

<span class="token comment"${a}>/*
 * When adding new properties to stores, you should also
 * extend the \`PiniaCustomProperties\` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */</span>
<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>module</span> <span class="token string"${a}>&#39;pinia&#39;</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>export</span> <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>PiniaCustomProperties</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>readonly</span> router<span class="token operator"${a}>:</span> Router<span class="token punctuation"${a}>;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Router "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 * When adding new properties to stores, you should also
 * extend the \`PiniaCustomProperties\` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */`),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'pinia'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"PiniaCustomProperties"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"readonly"),s(" router"),n("span",{class:"token operator"},":"),s(" Router"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(`<h4 id="vuex" class="doc-heading doc-h4"${o}>Vuex</h4><p${o}>If you are using `),i(c(f,{to:"/quasar-cli-vite/state-management-with-vuex"},{default:p((y,t,r,a)=>{if(t)t("Vuex");else return[s("Vuex")]}),_:1},g,o)),i(`, add the section below to your project. Quasar CLI provides the <code class="doc-token"${o}>router</code> property, you may need to add more global properties if you have them. Adjust the state interface to suit your application.</p>`),i(c(u(k),{title:"/src/store/index.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> InjectionKey <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue&#39;</span>
<span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span> Router <span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vue-router&#39;</span>
<span class="token keyword"${a}>import</span> <span class="token punctuation"${a}>{</span>
  createStore<span class="token punctuation"${a}>,</span>
  Store <span class="token keyword"${a}>as</span> VuexStore<span class="token punctuation"${a}>,</span>
  useStore <span class="token keyword"${a}>as</span> vuexUseStore<span class="token punctuation"${a}>,</span>
<span class="token punctuation"${a}>}</span> <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;vuex&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>StateInterface</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// Define your own store structure, using submodules if needed</span>
  <span class="token comment"${a}>// example: ExampleStateInterface;</span>
  <span class="token comment"${a}>// Declared as unknown to avoid linting issue. Best to strongly type as per the line above.</span>
  example<span class="token operator"${a}>:</span> <span class="token builtin"${a}>unknown</span>
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>// provide typings for \`this.$store\`</span>
<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>module</span> <span class="token string"${a}>&#39;@vue/runtime-core&#39;</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>ComponentCustomProperties</span> <span class="token punctuation"${a}>{</span>
    $store<span class="token operator"${a}>:</span> VuexStore<span class="token operator"${a}>&lt;</span>StateInterface<span class="token operator"${a}>&gt;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>// Provide typings for \`this.$router\` inside Vuex stores</span>
<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>module</span> <span class="token string"${a}>&quot;vuex&quot;</span> <span class="token punctuation"${a}>{</span>
  <span class="token comment"${a}>// eslint-disable-next-line @typescript-eslint/no-unused-vars</span>
  <span class="token keyword"${a}>export</span> <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>Store<span class="token operator"${a}>&lt;</span><span class="token constant"${a}>S</span><span class="token operator"${a}>&gt;</span></span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>readonly</span> $router<span class="token operator"${a}>:</span> Router<span class="token punctuation"${a}>;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>// provide typings for \`useStore\` helper</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>const</span> storeKey<span class="token operator"${a}>:</span> InjectionKey<span class="token operator"${a}>&lt;</span>VuexStore<span class="token operator"${a}>&lt;</span>StateInterface<span class="token operator"${a}>&gt;&gt;</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>Symbol</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;vuex-key&#39;</span><span class="token punctuation"${a}>)</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>useStore</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>return</span> <span class="token function"${a}>vuexUseStore</span><span class="token punctuation"${a}>(</span>storeKey<span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>// createStore&lt;StateInterface&gt;({ ... })</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" InjectionKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
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

`),n("span",{class:"token comment"},"// createStore<StateInterface>({ ... })")])]),n(e)]}),_:1},g,o)),i(`<h4 id="pwa-mode" class="doc-heading doc-h4"${o}>PWA mode</h4><p${o}>If you are using `),i(c(f,{to:"/quasar-cli-vite/developing-pwa/introduction"},{default:p((y,t,r,a)=>{if(t)t("PWA mode");else return[s("PWA mode")]}),_:1},g,o)),i(", make the following modifications to your project, and create any files that do not exist:</p>"),i(c(u(k),{title:"/src-pwa/pwa-env.d.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/* eslint-disable */</span>

<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>namespace</span> NodeJS <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>ProcessEnv</span> <span class="token punctuation"${a}>{</span>
    <span class="token constant"${a}>SERVICE_WORKER_FILE</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>PWA_FALLBACK_HTML</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>PWA_SERVICE_WORKER_REGEX</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"SERVICE_WORKER_FILE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"PWA_FALLBACK_HTML"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"PWA_SERVICE_WORKER_REGEX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(c(u(k),{title:"/src-pwa/custom-service-worker.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>// at the top of the file</span>
<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>const</span> self<span class="token operator"${a}>:</span> ServiceWorkerGlobalScope <span class="token operator"${a}>&amp;</span>
  <span class="token keyword"${a}>typeof</span> globalThis <span class="token operator"${a}>&amp;</span> <span class="token punctuation"${a}>{</span> <span class="token function-variable function"${a}>skipWaiting</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token keyword"${a}>void</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>;</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// at the top of the file"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"const"),s(" self"),n("span",{class:"token operator"},":"),s(" ServiceWorkerGlobalScope "),n("span",{class:"token operator"},"&"),s(`
  `),n("span",{class:"token keyword"},"typeof"),s(" globalThis "),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function-variable function"},"skipWaiting"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]}),_:1},g,o)),i(c(u(k),{title:"/src-pwa/tsconfig.json"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token punctuation"${a}>{</span>
  <span class="token property"${a}>&quot;extends&quot;</span><span class="token operator"${a}>:</span> <span class="token string"${a}>&quot;../tsconfig.json&quot;</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;compilerOptions&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token property"${a}>&quot;lib&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token string"${a}>&quot;WebWorker&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;ESNext&quot;</span><span class="token punctuation"${a}>]</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token property"${a}>&quot;include&quot;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token string"${a}>&quot;*.ts&quot;</span><span class="token punctuation"${a}>,</span> <span class="token string"${a}>&quot;*.d.ts&quot;</span><span class="token punctuation"${a}>]</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"../tsconfig.json"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"lib"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"WebWorker"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ESNext"'),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"include"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"*.ts"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"*.d.ts"'),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(c(u(k),{title:"/src-pwa/.eslintrc.cjs"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>const</span> <span class="token punctuation"${a}>{</span> resolve <span class="token punctuation"${a}>}</span> <span class="token operator"${a}>=</span> <span class="token function"${a}>require</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;node:path&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>;</span>

module<span class="token punctuation"${a}>.</span>exports <span class="token operator"${a}>=</span> <span class="token punctuation"${a}>{</span>
  <span class="token literal-property property"${a}>parserOptions</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token literal-property property"${a}>project</span><span class="token operator"${a}>:</span> <span class="token function"${a}>resolve</span><span class="token punctuation"${a}>(</span>__dirname<span class="token punctuation"${a}>,</span> <span class="token string"${a}>&#39;./tsconfig.json&#39;</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>,</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>

  <span class="token literal-property property"${a}>overrides</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span>
    <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>files</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token string"${a}>&#39;custom-service-worker.ts&#39;</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>

      <span class="token literal-property property"${a}>env</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
        <span class="token literal-property property"${a}>serviceworker</span><span class="token operator"${a}>:</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>,</span>
      <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>,</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>;</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]}),_:1},g,o)),i(`<h4 id="electron-mode" class="doc-heading doc-h4"${o}>Electron mode</h4><p${o}>If you are using `),i(c(f,{to:"/quasar-cli-vite/developing-electron-apps/introduction"},{default:p((y,t,r,a)=>{if(t)t("Electron mode");else return[s("Electron mode")]}),_:1},g,o)),i(", add the section below to your project.</p>"),i(c(u(k),{title:"/src-electron/electron-env.d.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/* eslint-disable */</span>

<span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>namespace</span> NodeJS <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>ProcessEnv</span> <span class="token punctuation"${a}>{</span>
    <span class="token constant"${a}>QUASAR_PUBLIC_FOLDER</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>QUASAR_ELECTRON_PRELOAD_FOLDER</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>QUASAR_ELECTRON_PRELOAD_EXTENSION</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
    <span class="token constant"${a}>APP_URL</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"QUASAR_PUBLIC_FOLDER"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_FOLDER"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_EXTENSION"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"APP_URL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o)),i(`<h4 id="bex-mode" class="doc-heading doc-h4"${o}>BEX mode</h4><p${o}>If you are using `),i(c(f,{to:"/quasar-cli-vite/developing-browser-extensions/introduction"},{default:p((y,t,r,a)=>{if(t)t("BEX mode");else return[s("BEX mode")]}),_:1},g,o)),i(", add the section below to your project. You may need to adjust it to your needs depending on the events you are using. The key is the event name, the value is a tuple where the first element is the input and the second is the output type.</p>"),i(c(u(k),{title:"/src-bex/background.ts"},{default:p((y,t,r,a)=>{if(t)t(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>declare</span> <span class="token keyword"${a}>module</span> <span class="token string"${a}>&#39;@quasar/app-vite&#39;</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>interface</span> <span class="token class-name"${a}>BexEventMap</span> <span class="token punctuation"${a}>{</span>
    <span class="token comment"${a}>/* eslint-disable @typescript-eslint/no-explicit-any */</span>
    log<span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token punctuation"${a}>{</span> message<span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span> data<span class="token operator"${a}>?</span><span class="token operator"${a}>:</span> <span class="token builtin"${a}>any</span><span class="token punctuation"${a}>[</span><span class="token punctuation"${a}>]</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token builtin"${a}>never</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>;</span>
    getTime<span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token builtin"${a}>never</span><span class="token punctuation"${a}>,</span> <span class="token builtin"${a}>number</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>;</span>

    <span class="token string-property property"${a}>&#39;storage.get&#39;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token punctuation"${a}>{</span> key<span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span> <span class="token operator"${a}>|</span> <span class="token keyword"${a}>null</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token builtin"${a}>any</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>;</span>
    <span class="token string-property property"${a}>&#39;storage.set&#39;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token punctuation"${a}>{</span> key<span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span><span class="token punctuation"${a}>;</span> value<span class="token operator"${a}>:</span> <span class="token builtin"${a}>any</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token builtin"${a}>any</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>;</span>
    <span class="token string-property property"${a}>&#39;storage.remove&#39;</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>[</span><span class="token punctuation"${a}>{</span> key<span class="token operator"${a}>:</span> <span class="token builtin"${a}>string</span> <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span> <span class="token builtin"${a}>any</span><span class="token punctuation"${a}>]</span><span class="token punctuation"${a}>;</span>
    <span class="token comment"${a}>/* eslint-enable @typescript-eslint/no-explicit-any */</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),t(c(e,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'@quasar/app-vite'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"BexEventMap"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* eslint-disable @typescript-eslint/no-explicit-any */"),s(`
    log`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(" data"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"never"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    getTime`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"never"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token string-property property"},"'storage.get'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'storage.set'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'storage.remove'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/* eslint-enable @typescript-eslint/no-explicit-any */"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},g,o));else return[n("p",null,"The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("The following steps are only required when you "),n("strong",null,"have not"),s(" selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.")])]),n("h2",{id:"installation-of-typescript-support",class:"doc-heading doc-h2",onClick:y=>u(h)("installation-of-typescript-support")},"Installation of TypeScript Support",8,["onClick"]),n("p",null,[s("Create "),n("code",{class:"doc-token"},"/tsconfig.json"),s(" file at the root of you project with this content:")]),n(u(k),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,[s("Then install the "),n("code",{class:"doc-token"},"typescript"),s(" package:")]),n(u(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:p(()=>[n($,{class:"q-pa-none",name:"Yarn"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"NPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" --save-dev typescript")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"PNPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" typescript")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"Bun"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(" typescript")])]),n(e,{lang:"bash"})]),_:1})]),_:1}),n("p",null,"Now you can start using TypeScript into your project. Note that some IDEs might require a restart for the new setup to fully kick in."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Remember that you must change the extension of your JavaScript files to "),n("code",{class:"doc-token"},".ts"),s(" to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so "),n("code",{class:"doc-token"},'<script lang="ts">'),s(".")])]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("If you fail to add the "),n("code",{class:"doc-token"},"tsconfig.json"),s(" file, the application will break at compile time!")])]),n("h3",{id:"linting-setup",class:"doc-heading doc-h3",onClick:y=>u(h)("linting-setup")},"Linting setup",8,["onClick"]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable it in "),n("code",{class:"doc-token"},"/quasar.config"),s(" file for dev builds.")])]),n("p",null,"First add the needed dependencies:"),n(u(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:p(()=>[n($,{class:"q-pa-none",name:"Yarn"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"NPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"PNPM"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n($,{class:"q-pa-none",name:"Bun"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1})]),_:1}),n("p",null,"Then update your ESLint configuration accordingly, like in the following example:"),n(u(k),{title:"/.eslintrc.cjs"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,[s("If anything goes wrong, read the "),n(f,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:p(()=>[s("typescript-eslint guide")]),_:1}),s(", on which this example is based.")]),n("p",null,[s("As a last step, update your "),n("code",{class:"doc-token"},"yarn lint"),s(" command to also lint "),n("code",{class:"doc-token"},".ts"),s(" files.")]),n("p",null,[s("Finally, edit your "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")]),n(u(k),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// fix: true,"),s(`
  `),n("span",{class:"token comment"},"// include: [],"),s(`
  `),n("span",{class:"token comment"},"// exclude: [],"),s(`
  `),n("span",{class:"token comment"},"// rawOptions: {},"),s(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])]),n(e)]),_:1}),n("h3",{id:"typescript-declaration-files",class:"doc-heading doc-h3",onClick:y=>u(h)("typescript-declaration-files")},"TypeScript Declaration Files",8,["onClick"]),n("p",null,"If you chose TypeScript support when scaffolding the project, these declaration files were automatically scaffolded for you. If TypeScript support wasn’t enabled during project creation, create the following files."),n(u(k),{title:"/src/shims-vue.d.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token comment"},'/// <reference types="vite/client" />'),s(`

`),n("span",{class:"token comment"},"// Mocks all files ending in `.vue` showing them as plain Vue instances"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'*.vue'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" DefineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" component"),n("span",{class:"token operator"},":"),s(" DefineComponent"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" component"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n(u(k),{title:"/src/quasar.d.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token comment"},"// Forces TS to apply `@quasar/app-vite` augmentations of `quasar` package"),s(`
`),n("span",{class:"token comment"},"// Removing this would break `quasar/wrappers` imports as those typings are declared"),s(`
`),n("span",{class:"token comment"},"//  into `@quasar/app-vite`"),s(`
`),n("span",{class:"token comment"},"// As a side effect, since `@quasar/app-vite` reference `quasar` to augment it,"),s(`
`),n("span",{class:"token comment"},"//  this declaration also apply `quasar` own"),s(`
`),n("span",{class:"token comment"},"//  augmentations (eg. adds `$q` into Vue component context)"),s(`
`),n("span",{class:"token comment"},'/// <reference types="@quasar/app-vite" />')])]),n(e)]),_:1}),n(u(k),{title:"/src/env.d.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"NODE_ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"VUE_ROUTER_MODE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hash'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'history'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'abstract'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"VUE_ROUTER_BASE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// Define any custom env variables you have here, if you wish"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,"See the following sections depending on the features and build modes you are using."),n("h4",{id:"pinia",class:"doc-heading doc-h4",onClick:y=>u(h)("pinia")},"Pinia",8,["onClick"]),n("p",null,[s("If you are using "),n(f,{to:"/quasar-cli-vite/state-management-with-pinia"},{default:p(()=>[s("Pinia")]),_:1}),s(", add the section below to your project. Quasar CLI provides the "),n("code",{class:"doc-token"},"router"),s(" property, you may need to add more global properties if you have them.")]),n(u(k),{title:"/src/stores/index.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Router "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 * When adding new properties to stores, you should also
 * extend the \`PiniaCustomProperties\` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */`),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'pinia'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"PiniaCustomProperties"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"readonly"),s(" router"),n("span",{class:"token operator"},":"),s(" Router"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("h4",{id:"vuex",class:"doc-heading doc-h4",onClick:y=>u(h)("vuex")},"Vuex",8,["onClick"]),n("p",null,[s("If you are using "),n(f,{to:"/quasar-cli-vite/state-management-with-vuex"},{default:p(()=>[s("Vuex")]),_:1}),s(", add the section below to your project. Quasar CLI provides the "),n("code",{class:"doc-token"},"router"),s(" property, you may need to add more global properties if you have them. Adjust the state interface to suit your application.")]),n(u(k),{title:"/src/store/index.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" InjectionKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
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

`),n("span",{class:"token comment"},"// createStore<StateInterface>({ ... })")])]),n(e)]),_:1}),n("h4",{id:"pwa-mode",class:"doc-heading doc-h4",onClick:y=>u(h)("pwa-mode")},"PWA mode",8,["onClick"]),n("p",null,[s("If you are using "),n(f,{to:"/quasar-cli-vite/developing-pwa/introduction"},{default:p(()=>[s("PWA mode")]),_:1}),s(", make the following modifications to your project, and create any files that do not exist:")]),n(u(k),{title:"/src-pwa/pwa-env.d.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"SERVICE_WORKER_FILE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"PWA_FALLBACK_HTML"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"PWA_SERVICE_WORKER_REGEX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n(u(k),{title:"/src-pwa/custom-service-worker.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// at the top of the file"),s(`
`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"const"),s(" self"),n("span",{class:"token operator"},":"),s(" ServiceWorkerGlobalScope "),n("span",{class:"token operator"},"&"),s(`
  `),n("span",{class:"token keyword"},"typeof"),s(" globalThis "),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function-variable function"},"skipWaiting"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]),_:1}),n(u(k),{title:"/src-pwa/tsconfig.json"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"../tsconfig.json"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"lib"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"WebWorker"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"ESNext"'),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"include"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"*.ts"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"*.d.ts"'),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n(u(k),{title:"/src-pwa/.eslintrc.cjs"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])]),n(e)]),_:1}),n("h4",{id:"electron-mode",class:"doc-heading doc-h4",onClick:y=>u(h)("electron-mode")},"Electron mode",8,["onClick"]),n("p",null,[s("If you are using "),n(f,{to:"/quasar-cli-vite/developing-electron-apps/introduction"},{default:p(()=>[s("Electron mode")]),_:1}),s(", add the section below to your project.")]),n(u(k),{title:"/src-electron/electron-env.d.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/* eslint-disable */"),s(`

`),n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"namespace"),s(" NodeJS "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ProcessEnv"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"QUASAR_PUBLIC_FOLDER"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_FOLDER"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"QUASAR_ELECTRON_PRELOAD_EXTENSION"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token constant"},"APP_URL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("h4",{id:"bex-mode",class:"doc-heading doc-h4",onClick:y=>u(h)("bex-mode")},"BEX mode",8,["onClick"]),n("p",null,[s("If you are using "),n(f,{to:"/quasar-cli-vite/developing-browser-extensions/introduction"},{default:p(()=>[s("BEX mode")]),_:1}),s(", add the section below to your project. You may need to adjust it to your needs depending on the events you are using. The key is the event name, the value is a tuple where the first element is the input and the second is the output type.")]),n(u(k),{title:"/src-bex/background.ts"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"declare"),s(),n("span",{class:"token keyword"},"module"),s(),n("span",{class:"token string"},"'@quasar/app-vite'"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"BexEventMap"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* eslint-disable @typescript-eslint/no-explicit-any */"),s(`
    log`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(" data"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"never"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    getTime`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"never"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token string-property property"},"'storage.get'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'storage.set'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(" value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'storage.remove'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/* eslint-enable @typescript-eslint/no-explicit-any */"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1})]}),_:1},P))}}},x=q.setup;q.setup=(S,b)=>{const w=C();return(w.modules||(w.modules=new Set)).add("src/pages/quasar-cli-vite/supporting-ts.md"),x?x(S,b):void 0};const z=A(q,[["__file","supporting-ts.md"]]);export{z as default};
