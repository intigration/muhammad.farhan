import{resolveComponent as S,mergeProps as P,withCtx as l,unref as k,createVNode as n,createTextVNode as s,useSSRContext as L}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as b}from"./page-utils-C-QWsEHe.js";import{D as R,a as x}from"./DocPage-DKr-0pQn.js";import{D as g}from"./DocPrerender-DPOnWPFO.js";import{C as e}from"./CopyButton-l3ndfN49.js";import{_ as M}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"supporting-ts",__ssrInlineRender:!0,setup(q){const h=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],f=[{id:"installation-of-typescript-support",title:"2. Installation of TypeScript Support"},{id:"handling-ts-webpack-loaders",title:"3. Handling TS Webpack loaders"},{id:"linting-setup",title:"3.1. Linting setup",sub:!0}];return(A,C,E,N)=>{const T=S("q-badge"),m=S("q-tab-panel");C(c(R,P({title:"Supporting TypeScript",desc:"(@quasar/app-webpack) How to enable support for TypeScript in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",badge:"@quasar/app-webpack v4+",heading:"","edit-link":"quasar-cli-webpack/supporting-ts",toc:f,related:h},N),{default:l((O,r,d,a)=>{if(r)r(`<p${a}>The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page.</p><div class="doc-note doc-note--tip"${a}><p class="doc-note__title"${a}>TIP</p><p${a}>The following steps are only required when you <strong${a}>have not</strong> selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.</p></div><h2 id="installation-of-typescript-support" class="doc-heading doc-h2"${a}>Installation of TypeScript Support</h2><p${a}>In order to support TypeScript, you’ll need to change the extension of your quasar.config file: <code class="doc-token"${a}>/quasar.config</code> file:</p>`),r(c(k(g),null,{default:l((y,p,i,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>import</span> <span class="token punctuation"${t}>{</span> configure <span class="token punctuation"${t}>}</span> <span class="token keyword"${t}>from</span> <span class="token string"${t}>&quot;quasar/wrappers&quot;</span><span class="token punctuation"${t}>;</span>

module<span class="token punctuation"${t}>.</span>exports <span class="token operator"${t}>=</span> <span class="token function"${t}>configure</span><span class="token punctuation"${t}>(</span><span class="token punctuation"${t}>(</span><span class="token parameter"${t}>ctx</span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>supportTS</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token punctuation"${t}>,</span>
    <span class="token comment"${t}>// ...</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>;</span></code></pre>`),p(c(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"quasar/wrappers"'),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"supportTS"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n(e)]}),_:1},d,a)),r(`<p${a}>Then create <code class="doc-token"${a}>/tsconfig.json</code> file at the root of you project with this content:</p>`),r(c(k(g),null,{default:l((y,p,i,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token punctuation"${t}>{</span>
  <span class="token property"${t}>&quot;extends&quot;</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&quot;@quasar/app-webpack/tsconfig-preset&quot;</span><span class="token punctuation"${t}>,</span>
  <span class="token property"${t}>&quot;compilerOptions&quot;</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token property"${t}>&quot;baseUrl&quot;</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&quot;.&quot;</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
  <span class="token property"${t}>&quot;exclude&quot;</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
    <span class="token string"${t}>&quot;./dist&quot;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&quot;./.quasar&quot;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&quot;./node_modules&quot;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&quot;./src-capacitor&quot;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&quot;./src-cordova&quot;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&quot;./quasar.config.*.temporary.compiled*&quot;</span>
  <span class="token punctuation"${t}>]</span>
<span class="token punctuation"${t}>}</span></code></pre>`),p(c(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},d,a)),r(`<p${a}>Now you can start using TypeScript into your project.</p><div class="doc-note doc-note--tip"${a}><p class="doc-note__title"${a}>TIP</p><p${a}>Remember that you must change the extension of your JavaScript files to <code class="doc-token"${a}>.ts</code> to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so <code class="doc-token"${a}>&lt;script lang=&quot;ts&quot;&gt;</code>.</p></div><div class="doc-note doc-note--warning"${a}><p class="doc-note__title"${a}>WARNING</p><p${a}>If you fail to add the <code class="doc-token"${a}>tsconfig.json</code> file, the application will break at compile time!</p></div><h2 id="handling-ts-webpack-loaders" class="doc-heading doc-h2"${a}>Handling TS Webpack loaders `),r(c(T,{label:"@quasar/app-webpack =v3"},null,d,a)),r(`</h2><p${a}>Behind the curtains, Quasar uses <code class="doc-token"${a}>ts-loader</code> and <code class="doc-token"${a}>fork-ts-checker-webpack-plugin</code> (provided by <code class="doc-token"${a}>@quasar/app-webpack</code> package) to manage TS files. If you ever need to provide a custom configuration for these libs you can do so by making <code class="doc-token"${a}>build</code> property like so:</p>`),r(c(k(g),{title:"/quasar.config file"},{default:l((y,p,i,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}>module<span class="token punctuation"${t}>.</span><span class="token function-variable function"${t}>exports</span> <span class="token operator"${t}>=</span> <span class="token keyword"${t}>function</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>ctx</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>supportTS</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
      <span class="token literal-property property"${t}>tsLoaderConfig</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// \`appendTsSuffixTo: [/\\.vue$/]\` and \`transpileOnly: true\` are added by default and cannot be overridden</span>
        <span class="token operator"${t}>...</span>
      <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
      <span class="token literal-property property"${t}>tsCheckerConfig</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
        <span class="token comment"${t}>// \`vue: true\` is added by default and cannot be overridden</span>
        <span class="token operator"${t}>...</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
    <span class="token operator"${t}>...</span><span class="token punctuation"${t}>.</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),p(c(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},d,a)),r(`<h3 id="linting-setup" class="doc-heading doc-h3"${a}>Linting setup</h3><p${a}>First add the needed dependencies:</p>`),r(c(k(g),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l((y,p,i,t)=>{if(p)p(c(m,{class:"q-pa-none",name:"Yarn"},{default:l((v,u,$,o)=>{if(u)u(`<pre class="doc-code"${o}><code${o}>$ <span class="token function"${o}>yarn</span> <span class="token function"${o}>add</span> <span class="token parameter variable"${o}>--dev</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${o}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),u(c(e,{lang:"bash"},null,$,o));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},i,t)),p(c(m,{class:"q-pa-none",name:"NPM"},{default:l((v,u,$,o)=>{if(u)u(`<pre class="doc-code"${o}><code${o}>$ <span class="token function"${o}>npm</span> <span class="token function"${o}>install</span> --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${o}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),u(c(e,{lang:"bash"},null,$,o));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},i,t)),p(c(m,{class:"q-pa-none",name:"PNPM"},{default:l((v,u,$,o)=>{if(u)u(`<pre class="doc-code"${o}><code${o}>$ <span class="token function"${o}>pnpm</span> <span class="token function"${o}>add</span> <span class="token parameter variable"${o}>-D</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${o}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),u(c(e,{lang:"bash"},null,$,o));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},i,t)),p(c(m,{class:"q-pa-none",name:"Bun"},{default:l((v,u,$,o)=>{if(u)u(`<pre class="doc-code"${o}><code${o}>$ bun <span class="token function"${o}>add</span> <span class="token parameter variable"${o}>--dev</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
<span class="token comment"${o}># you might also want to install the \`eslint-plugin-vue\` package.</span></code></pre>`),u(c(e,{lang:"bash"},null,$,o));else return[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]}),_:1},i,t));else return[n(m,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n(m,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n(m,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n(m,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1})]}),_:1},d,a)),r(`<p${a}>Then update your ESLint configuration accordingly, like in the following example:</p>`),r(c(k(g),{title:"/.eslintrc.cjs"},{default:l((y,p,i,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> resolve <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> <span class="token function"${t}>require</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;node:path&#39;</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>;</span>

module<span class="token punctuation"${t}>.</span>exports <span class="token operator"${t}>=</span> <span class="token punctuation"${t}>{</span>
  <span class="token comment"${t}>// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy</span>
  <span class="token comment"${t}>// This option interrupts the configuration hierarchy at this file</span>
  <span class="token comment"${t}>// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)</span>
  <span class="token literal-property property"${t}>root</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser</span>
  <span class="token comment"${t}>// Must use parserOptions instead of &quot;parser&quot; to allow vue-eslint-parser to keep working</span>
  <span class="token comment"${t}>// \`parser: &#39;vue-eslint-parser&#39;\` is already included with any &#39;plugin:vue/**&#39; config and should be omitted</span>
  <span class="token literal-property property"${t}>parserOptions</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration</span>
    <span class="token comment"${t}>// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint</span>
    <span class="token comment"${t}>// Needed to make the parser take into account &#39;vue&#39; files</span>
    <span class="token literal-property property"${t}>extraFileExtensions</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span><span class="token string"${t}>&#39;.vue&#39;</span><span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>parser</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>project</span><span class="token operator"${t}>:</span> <span class="token function"${t}>resolve</span><span class="token punctuation"${t}>(</span>__dirname<span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;./tsconfig.json&#39;</span><span class="token punctuation"${t}>)</span><span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>tsconfigRootDir</span><span class="token operator"${t}>:</span> __dirname<span class="token punctuation"${t}>,</span>
    <span class="token literal-property property"${t}>ecmaVersion</span><span class="token operator"${t}>:</span> <span class="token number"${t}>2021</span><span class="token punctuation"${t}>,</span> <span class="token comment"${t}>// Allows for the parsing of modern ECMAScript features</span>
    <span class="token literal-property property"${t}>sourceType</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;module&#39;</span><span class="token punctuation"${t}>,</span> <span class="token comment"${t}>// Allows for the use of imports</span>
  <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// Rules order is important, please avoid shuffling them</span>
  <span class="token keyword"${t}>extends</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
    <span class="token comment"${t}>// Base ESLint recommended rules</span>
    <span class="token string"${t}>&#39;eslint:recommended&#39;</span><span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage</span>
    <span class="token comment"${t}>// ESLint typescript rules</span>
    <span class="token string"${t}>&#39;plugin:@typescript-eslint/eslint-recommended&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token comment"${t}>// consider disabling this class of rules if linting takes too long</span>
    <span class="token string"${t}>&#39;plugin:@typescript-eslint/recommended-requiring-type-checking&#39;</span><span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention</span>
    <span class="token comment"${t}>// consider switching to \`plugin:vue/strongly-recommended\` or \`plugin:vue/recommended\` for stricter rules</span>
    <span class="token string"${t}>&#39;plugin:vue/essential&#39;</span><span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// --- ONLY WHEN USING PRETTIER ---</span>
    <span class="token comment"${t}>// https://github.com/prettier/eslint-config-prettier#installation</span>
    <span class="token comment"${t}>// usage with Prettier, provided by &#39;eslint-config-prettier&#39;.</span>
    <span class="token string"${t}>&#39;prettier&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&#39;prettier/@typescript-eslint&#39;</span><span class="token punctuation"${t}>,</span>
    <span class="token string"${t}>&#39;prettier/vue&#39;</span><span class="token punctuation"${t}>,</span>
  <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

  <span class="token literal-property property"${t}>plugins</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span>
    <span class="token comment"${t}>// required to apply rules which need type information</span>
    <span class="token string"${t}>&#39;@typescript-eslint&#39;</span><span class="token punctuation"${t}>,</span>

    <span class="token comment"${t}>// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file</span>
    <span class="token comment"${t}>// required to lint *.vue files</span>
    <span class="token string"${t}>&#39;vue&#39;</span><span class="token punctuation"${t}>,</span>
  <span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>

  <span class="token comment"${t}>// add your custom rules here</span>
  <span class="token literal-property property"${t}>rules</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
    <span class="token comment"${t}>// others rules...</span>

    <span class="token comment"${t}>// TypeScript</span>
    <span class="token string-property property"${t}>&#39;quotes&#39;</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>[</span><span class="token string"${t}>&#39;warn&#39;</span><span class="token punctuation"${t}>,</span> <span class="token string"${t}>&#39;single&#39;</span><span class="token punctuation"${t}>]</span><span class="token punctuation"${t}>,</span>
    <span class="token string-property property"${t}>&#39;@typescript-eslint/explicit-function-return-type&#39;</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;off&#39;</span><span class="token punctuation"${t}>,</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),p(c(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},d,a)),r(`<p${a}>If anything goes wrong, read the `),r(c(x,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:l((y,p,i,t)=>{if(p)p("typescript-eslint guide");else return[s("typescript-eslint guide")]}),_:1},d,a)),r(`, on which this example is based.</p><p${a}>As a last step, update your <code class="doc-token"${a}>yarn lint</code> command to also lint <code class="doc-token"${a}>.ts</code> files.</p><div class="doc-note doc-note--tip"${a}><p class="doc-note__title"${a}>TIP</p><p${a}>TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable Webpack lint extension into the <code class="doc-token"${a}>/quasar.config</code> file for dev builds.</p></div><p${a}>If you setup TypeScript linting and want <code class="doc-token"${a}>fork-ts-checker-webpack-plugin</code> (provided by <code class="doc-token"${a}>@quasar/app-webpack</code> package) to take it into account then you should make use of <code class="doc-token"${a}>tsCheckerConfig</code> property:</p>`),r(c(k(g),{title:"/quasar.config file"},{default:l((y,p,i,t)=>{if(p)p(`<pre class="doc-code"${t}><code${t}>module<span class="token punctuation"${t}>.</span><span class="token function-variable function"${t}>exports</span> <span class="token operator"${t}>=</span> <span class="token keyword"${t}>function</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}>ctx</span><span class="token punctuation"${t}>)</span> <span class="token punctuation"${t}>{</span>
  <span class="token keyword"${t}>return</span> <span class="token punctuation"${t}>{</span>
    <span class="token literal-property property"${t}>supportTS</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
      <span class="token literal-property property"${t}>tsCheckerConfig</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
        <span class="token literal-property property"${t}>eslint</span><span class="token operator"${t}>:</span> <span class="token punctuation"${t}>{</span>
          <span class="token literal-property property"${t}>enabled</span><span class="token operator"${t}>:</span> <span class="token boolean"${t}>true</span><span class="token punctuation"${t}>,</span>
          <span class="token literal-property property"${t}>files</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;./src/**/*.{ts,tsx,js,jsx,vue}&#39;</span>
        <span class="token punctuation"${t}>}</span>
      <span class="token punctuation"${t}>}</span>
    <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>,</span>
    <span class="token operator"${t}>...</span><span class="token punctuation"${t}>.</span>
  <span class="token punctuation"${t}>}</span>
<span class="token punctuation"${t}>}</span></code></pre>`),p(c(e,null,null,i,t));else return[n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]}),_:1},d,a));else return[n("p",null,"The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("The following steps are only required when you "),n("strong",null,"have not"),s(" selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.")])]),n("h2",{id:"installation-of-typescript-support",class:"doc-heading doc-h2",onClick:y=>k(b)("installation-of-typescript-support")},"Installation of TypeScript Support",8,["onClick"]),n("p",null,[s("In order to support TypeScript, you’ll need to change the extension of your quasar.config file: "),n("code",{class:"doc-token"},"/quasar.config"),s(" file:")]),n(k(g),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"quasar/wrappers"'),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"supportTS"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),n(e)]),_:1}),n("p",null,[s("Then create "),n("code",{class:"doc-token"},"/tsconfig.json"),s(" file at the root of you project with this content:")]),n(k(g),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,"Now you can start using TypeScript into your project."),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Remember that you must change the extension of your JavaScript files to "),n("code",{class:"doc-token"},".ts"),s(" to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so "),n("code",{class:"doc-token"},'<script lang="ts">'),s(".")])]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("If you fail to add the "),n("code",{class:"doc-token"},"tsconfig.json"),s(" file, the application will break at compile time!")])]),n("h2",{id:"handling-ts-webpack-loaders",class:"doc-heading doc-h2",onClick:y=>k(b)("handling-ts-webpack-loaders")},[s("Handling TS Webpack loaders "),n(T,{label:"@quasar/app-webpack =v3"})],8,["onClick"]),n("p",null,[s("Behind the curtains, Quasar uses "),n("code",{class:"doc-token"},"ts-loader"),s(" and "),n("code",{class:"doc-token"},"fork-ts-checker-webpack-plugin"),s(" (provided by "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" package) to manage TS files. If you ever need to provide a custom configuration for these libs you can do so by making "),n("code",{class:"doc-token"},"build"),s(" property like so:")]),n(k(g),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("h3",{id:"linting-setup",class:"doc-heading doc-h3",onClick:y=>k(b)("linting-setup")},"Linting setup",8,["onClick"]),n("p",null,"First add the needed dependencies:"),n(k(g),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(()=>[n(m,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n(m,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n(m,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ "),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1}),n(m,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("$ bun "),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"--dev"),s(` eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
`),n("span",{class:"token comment"},"# you might also want to install the `eslint-plugin-vue` package.")])]),n(e,{lang:"bash"})]),_:1})]),_:1}),n("p",null,"Then update your ESLint configuration accordingly, like in the following example:"),n(k(g),{title:"/.eslintrc.cjs"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node:path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1}),n("p",null,[s("If anything goes wrong, read the "),n(x,{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"},{default:l(()=>[s("typescript-eslint guide")]),_:1}),s(", on which this example is based.")]),n("p",null,[s("As a last step, update your "),n("code",{class:"doc-token"},"yarn lint"),s(" command to also lint "),n("code",{class:"doc-token"},".ts"),s(" files.")]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable Webpack lint extension into the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file for dev builds.")])]),n("p",null,[s("If you setup TypeScript linting and want "),n("code",{class:"doc-token"},"fork-ts-checker-webpack-plugin"),s(" (provided by "),n("code",{class:"doc-token"},"@quasar/app-webpack"),s(" package) to take it into account then you should make use of "),n("code",{class:"doc-token"},"tsCheckerConfig"),s(" property:")]),n(k(g),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(e)]),_:1})]}),_:1},E))}}},j=w.setup;w.setup=(q,h)=>{const f=L();return(f.modules||(f.modules=new Set)).add("src/pages/quasar-cli-webpack/supporting-ts.md"),j?j(q,h):void 0};const Z=M(w,[["__file","supporting-ts.md"]]);export{Z as default};
