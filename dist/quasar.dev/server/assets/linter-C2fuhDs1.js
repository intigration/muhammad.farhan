import{resolveComponent as S,mergeProps as C,withCtx as l,createTextVNode as a,unref as k,createVNode as n,useSSRContext as T}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as b}from"./page-utils-C-QWsEHe.js";import{D as M,a as y}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as O}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const j={__name:"linter",__ssrInlineRender:!0,setup(q){const h=[{id:"lint-rules",title:"2. Lint Rules"},{id:"typescript-projects-linting",title:"3. Typescript projects linting"},{id:"javascript-projects-linting",title:"4. Javascript projects linting"},{id:"quasar-config-file-eslint",title:"5. quasar.config file > eslint"}];return(w,P,L,N)=>{const g=S("q-tab-panel"),x=S("q-badge");P(r(M,C({title:"Linter",desc:"(@quasar/app-vite) How to configure a code linter in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/linter",toc:h},N),{default:l((D,c,d,e)=>{if(c)c(`<p${e}>Having a code linter (like `),c(r(y,{to:"https://eslint.org/"},{default:l(($,t,i,s)=>{if(t)t("ESLint");else return[a("ESLint")]}),_:1},d,e)),c(`) in place is highly recommended and ensures your code looks legible. It also helps you capture some errors before even running the code.</p><p${e}>When you scaffold a Quasar project folder it will ask you if you want a linter and which setup you want for ESLint:</p><ul${e}><li${e}>`),c(r(y,{to:"https://github.com/prettier/prettier"},{default:l(($,t,i,s)=>{if(t)t("Prettier");else return[a("Prettier")]}),_:1},d,e)),c(`</li><li${e}>`),c(r(y,{to:"https://github.com/standard/standard"},{default:l(($,t,i,s)=>{if(t)t("Standard");else return[a("Standard")]}),_:1},d,e)),c(`</li><li${e}>`),c(r(y,{to:"https://github.com/airbnb/javascript"},{default:l(($,t,i,s)=>{if(t)t("Airbnb");else return[a("Airbnb")]}),_:1},d,e)),c(`</li><li${e}>… or you can configure one yourself</li></ul><p${e}>Two dot files will be created:</p><ul${e}><li${e}>.eslintrc.cjs – ESLint configuration, including rules</li><li${e}>.eslintignore – what ESLint should ignore when linting</li></ul><p${e}>Further extension of one of the ESLint setups above can be made. Your project will by default use <code class="doc-token"${e}>eslint-plugin-vue</code> to handle your Vue files. Take a quick look at <code class="doc-token"${e}>/.eslintrc.cjs</code> and notice it:</p>`),c(r(k(m),{title:"/.eslintrc.cjs"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>extends</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
  <span class="token comment"${s}>// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x</span>
  <span class="token comment"${s}>// consider switching to \`plugin:vue/strongly-recommended\` or \`plugin:vue/recommended\` for stricter rules.</span>
  <span class="token string"${s}>&#39;plugin:vue/strongly-recommended&#39;</span>
<span class="token punctuation"${s}>]</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token comment"},"// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x"),a(`
  `),n("span",{class:"token comment"},"// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules."),a(`
  `),n("span",{class:"token string"},"'plugin:vue/strongly-recommended'"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(o)]}),_:1},d,e)),c(`<p${e}>Also note that you need the following file:</p>`),c(r(k(m),{title:"/.eslintignore"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
.eslintrc.cjs
/quasar.config.*.temporary.compiled*</code></pre>`),t(r(o,{lang:"bash"},null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
.eslintrc.cjs
/quasar.config.*.temporary.compiled*`)]),n(o,{lang:"bash"})]}),_:1},d,e)),c(`<h2 id="lint-rules" class="doc-heading doc-h2"${e}>Lint Rules</h2><p${e}>The linting rules can be removed, changed, or added. Notice some things:</p><ul${e}><li${e}>Some rules are for the Standard, Airbnb or Prettier standards (whichever you chose when project was created). Example: ‘brace-style’.</li><li${e}>Some rules are for eslint-plugin-vue. Example: ‘vue/max-attributes-per-line’.</li></ul><p${e}>You can add/remove/change rules by first visiting `),c(r(y,{to:"https://eslint.org/docs/rules/"},{default:l(($,t,i,s)=>{if(t)t("https://eslint.org/docs/rules/");else return[a("https://eslint.org/docs/rules/")]}),_:1},d,e)),c(" or "),c(r(y,{to:"https://eslint.vuejs.org/rules"},{default:l(($,t,i,s)=>{if(t)t("https://eslint.vuejs.org/rules");else return[a("https://eslint.vuejs.org/rules")]}),_:1},d,e)),c(`.</p><p${e}>Example of ESLint rules below:</p>`),c(r(k(m),{title:"/.eslintrc.cjs"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token string-property property"${s}>&#39;rules&#39;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token string-property property"${s}>&#39;brace-style&#39;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span><span class="token number"${s}>2</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;stroustrup&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> <span class="token string-property property"${s}>&#39;allowSingleLine&#39;</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

  <span class="token string-property property"${s}>&#39;vue/max-attributes-per-line&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;vue/valid-v-for&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// allow async-await</span>
  <span class="token string-property property"${s}>&#39;generator-star-spacing&#39;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;off&#39;</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// allow paren-less arrow functions</span>
  <span class="token string-property property"${s}>&#39;arrow-parens&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;one-var&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>

  <span class="token string-property property"${s}>&#39;import/first&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/named&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>2</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/namespace&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>2</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/default&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>2</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/export&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>2</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/extensions&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/no-unresolved&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>
  <span class="token string-property property"${s}>&#39;import/no-extraneous-dependencies&#39;</span><span class="token operator"${s}>:</span> <span class="token number"${s}>0</span><span class="token punctuation"${s}>,</span>

  <span class="token comment"${s}>// allow debugger during development</span>
  <span class="token string-property property"${s}>&#39;no-debugger&#39;</span><span class="token operator"${s}>:</span> process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>NODE_ENV</span> <span class="token operator"${s}>===</span> <span class="token string"${s}>&#39;production&#39;</span> <span class="token operator"${s}>?</span> <span class="token number"${s}>2</span> <span class="token operator"${s}>:</span> <span class="token number"${s}>0</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token string-property property"},"'rules'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token string-property property"},"'brace-style'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'stroustrup'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token string-property property"},"'allowSingleLine'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token string-property property"},"'vue/max-attributes-per-line'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'vue/valid-v-for'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// allow async-await"),a(`
  `),n("span",{class:"token string-property property"},"'generator-star-spacing'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'off'"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// allow paren-less arrow functions"),a(`
  `),n("span",{class:"token string-property property"},"'arrow-parens'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'one-var'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token string-property property"},"'import/first'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/named'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/namespace'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/default'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/export'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/extensions'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/no-unresolved'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/no-extraneous-dependencies'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// allow debugger during development"),a(`
  `),n("span",{class:"token string-property property"},"'no-debugger'"),n("span",{class:"token operator"},":"),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"NODE_ENV"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'production'"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e)),c(`<h2 id="typescript-projects-linting" class="doc-heading doc-h2"${e}>Typescript projects linting</h2><p${e}>The linting for a TS project is based on vite-plugin-checker + ESLint + vue-tsc:</p>`),c(r(k(m),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(($,t,i,s)=>{if(t)t(r(g,{class:"q-pa-none",name:"Yarn"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>yarn</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]}),_:1},i,s)),t(r(g,{class:"q-pa-none",name:"NPM"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>npm</span> <span class="token function"${p}>install</span> --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]}),_:1},i,s)),t(r(g,{class:"q-pa-none",name:"PNPM"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>pnpm</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>-D</span> vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]}),_:1},i,s)),t(r(g,{class:"q-pa-none",name:"Bun"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ bun <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]}),_:1},i,s));else return[n(g,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1})]}),_:1},d,e)),c(`<div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>Notice the <code class="doc-token"${e}>typescript</code> dependency is &lt;= 5.3. There is currently an issue with ESLint and newer TS (5.4+). This is only a temporary thing until upstream fixes it.</p></div><p${e}>Create a file called <code class="doc-token"${e}>tsconfig.vue-tsc.json</code> in the root of your project folder:</p>`),c(r(k(m),{title:"/tsconfig.vue-tsc.json"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;extends&quot;</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;./tsconfig.json&quot;</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;compilerOptions&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token property"${s}>&quot;skipLibCheck&quot;</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"./tsconfig.json"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"skipLibCheck"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e)),c(r(k(m),{title:"/quasar.config file"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>vitePlugins</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;vite-plugin-checker&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>vueTsc</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>tsconfigPath</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;tsconfig.vue-tsc.json&#39;</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
      <span class="token literal-property property"${s}>eslint</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>lintCommand</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;eslint &quot;./**/*.{js,ts,mjs,cjs,vue}&quot;&#39;</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>server</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>]</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"vitePlugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'vite-plugin-checker'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"vueTsc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"tsconfigPath"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tsconfig.vue-tsc.json'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"lintCommand"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},`'eslint "./**/*.{js,ts,mjs,cjs,vue}"'`),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e)),c(`<h2 id="javascript-projects-linting" class="doc-heading doc-h2"${e}>Javascript projects linting</h2><p${e}>The linting for a JS project is based on vite-plugin-checker + ESLint:</p>`),c(r(k(m),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(($,t,i,s)=>{if(t)t(r(g,{class:"q-pa-none",name:"Yarn"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>yarn</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]}),_:1},i,s)),t(r(g,{class:"q-pa-none",name:"NPM"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>npm</span> <span class="token function"${p}>install</span> --save-dev vite-plugin-checker</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker")])]),n(o,{lang:"bash"})]}),_:1},i,s)),t(r(g,{class:"q-pa-none",name:"PNPM"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ <span class="token function"${p}>pnpm</span> <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>-D</span> vite-plugin-checker</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]}),_:1},i,s)),t(r(g,{class:"q-pa-none",name:"Bun"},{default:l((v,u,f,p)=>{if(u)u(`<pre class="doc-code"${p}><code${p}>$ bun <span class="token function"${p}>add</span> <span class="token parameter variable"${p}>--dev</span> vite-plugin-checker</code></pre>`),u(r(o,{lang:"bash"},null,f,p));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]}),_:1},i,s));else return[n(g,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1})]}),_:1},d,e)),c(r(k(m),{title:"/quasar.config file"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>vitePlugins</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;vite-plugin-checker&#39;</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>eslint</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>lintCommand</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;eslint &quot;./**/*.{js,mjs,cjs,vue}&quot;&#39;</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span> <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>server</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>]</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"vitePlugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'vite-plugin-checker'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"lintCommand"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},`'eslint "./**/*.{js,mjs,cjs,vue}"'`),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e)),c(`<h2 id="quasar-config-file-eslint" class="doc-heading doc-h2"${e}>quasar.config file &gt; eslint `),c(r(x,{label:"deprecated"},null,d,e)),c(`</h2><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The property described below has been deprecated in favour of using vite-plugin-checker.</p></div><p${e}>If you chose ESLint when creating your project folder, you’ll also notice that the <code class="doc-token"${e}>eslint</code> key is added to the <code class="doc-token"${e}>/quasar.config</code> file:</p>`),c(r(k(m),{title:"/quasar.config file"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>eslint</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>// fix: true,</span>
  <span class="token comment"${s}>// include: [],</span>
  <span class="token comment"${s}>// exclude: [],</span>
  <span class="token comment"${s}>// rawOptions: {},</span>
  <span class="token literal-property property"${s}>warnings</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>errors</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// fix: true,"),a(`
  `),n("span",{class:"token comment"},"// include: [],"),a(`
  `),n("span",{class:"token comment"},"// exclude: [],"),a(`
  `),n("span",{class:"token comment"},"// rawOptions: {},"),a(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])]),n(o)]}),_:1},d,e)),c(r(k(m),{title:"/quasar.config file > eslint"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>/** Options with which Quasar CLI will use ESLint */</span>
eslint<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> QuasarEslintConfiguration<span class="token punctuation"${s}>;</span>

<span class="token keyword"${s}>interface</span> <span class="token class-name"${s}>QuasarEslintConfiguration</span> <span class="token punctuation"${s}>{</span>
  <span class="token comment"${s}>/**
   * Should it report warnings?
   * @default true
   */</span>
  warnings<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Should it report errors?
   * @default true
   */</span>
  errors<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Fix on save
   */</span>
  fix<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> boolean<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Raw options to send to ESLint
   */</span>
  rawOptions<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> object<span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Files to include (can be in glob format)
   */</span>
  include<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>

  <span class="token comment"${s}>/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   */</span>
  exclude<span class="token operator"${s}>?</span><span class="token operator"${s}>:</span> string<span class="token punctuation"${s}>[</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>;</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Options with which Quasar CLI will use ESLint */"),a(`
eslint`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarEslintConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarEslintConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * Should it report warnings?
   * @default true
   */`),a(`
  warnings`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Should it report errors?
   * @default true
   */`),a(`
  errors`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Fix on save
   */`),a(`
  fix`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint
   */`),a(`
  rawOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" object"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to include (can be in glob format)
   */`),a(`
  include`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   */`),a(`
  exclude`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e)),c(`<p${e}>In order for you to disable ESLint later, all you need to do is to:</p><ol${e}><li${e}>Comment out (or remove) the key below:</li></ol>`),c(r(k(m),{title:"/quasar.config file"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>eslint</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token comment"${s}>/* ... */</span> <span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* ... */"),a(),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e)),c(`<ol start="2"${e}><li${e}>Or, set <code class="doc-token"${e}>warnings</code> and <code class="doc-token"${e}>errors</code> to <code class="doc-token"${e}>false</code>:</li></ol>`),c(r(k(m),{title:"/quasar.config file"},{default:l(($,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>eslint</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>warnings</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>errors</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(r(o,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},d,e));else return[n("p",null,[a("Having a code linter (like "),n(y,{to:"https://eslint.org/"},{default:l(()=>[a("ESLint")]),_:1}),a(") in place is highly recommended and ensures your code looks legible. It also helps you capture some errors before even running the code.")]),n("p",null,"When you scaffold a Quasar project folder it will ask you if you want a linter and which setup you want for ESLint:"),n("ul",null,[n("li",null,[n(y,{to:"https://github.com/prettier/prettier"},{default:l(()=>[a("Prettier")]),_:1})]),n("li",null,[n(y,{to:"https://github.com/standard/standard"},{default:l(()=>[a("Standard")]),_:1})]),n("li",null,[n(y,{to:"https://github.com/airbnb/javascript"},{default:l(()=>[a("Airbnb")]),_:1})]),n("li",null,"… or you can configure one yourself")]),n("p",null,"Two dot files will be created:"),n("ul",null,[n("li",null,".eslintrc.cjs – ESLint configuration, including rules"),n("li",null,".eslintignore – what ESLint should ignore when linting")]),n("p",null,[a("Further extension of one of the ESLint setups above can be made. Your project will by default use "),n("code",{class:"doc-token"},"eslint-plugin-vue"),a(" to handle your Vue files. Take a quick look at "),n("code",{class:"doc-token"},"/.eslintrc.cjs"),a(" and notice it:")]),n(k(m),{title:"/.eslintrc.cjs"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token comment"},"// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-3-x"),a(`
  `),n("span",{class:"token comment"},"// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules."),a(`
  `),n("span",{class:"token string"},"'plugin:vue/strongly-recommended'"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(o)]),_:1}),n("p",null,"Also note that you need the following file:"),n(k(m),{title:"/.eslintignore"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,`/dist
/src-capacitor
/src-cordova
/.quasar
/node_modules
.eslintrc.cjs
/quasar.config.*.temporary.compiled*`)]),n(o,{lang:"bash"})]),_:1}),n("h2",{id:"lint-rules",class:"doc-heading doc-h2",onClick:$=>k(b)("lint-rules")},"Lint Rules",8,["onClick"]),n("p",null,"The linting rules can be removed, changed, or added. Notice some things:"),n("ul",null,[n("li",null,"Some rules are for the Standard, Airbnb or Prettier standards (whichever you chose when project was created). Example: ‘brace-style’."),n("li",null,"Some rules are for eslint-plugin-vue. Example: ‘vue/max-attributes-per-line’.")]),n("p",null,[a("You can add/remove/change rules by first visiting "),n(y,{to:"https://eslint.org/docs/rules/"},{default:l(()=>[a("https://eslint.org/docs/rules/")]),_:1}),a(" or "),n(y,{to:"https://eslint.vuejs.org/rules"},{default:l(()=>[a("https://eslint.vuejs.org/rules")]),_:1}),a(".")]),n("p",null,"Example of ESLint rules below:"),n(k(m),{title:"/.eslintrc.cjs"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token string-property property"},"'rules'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token string-property property"},"'brace-style'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'stroustrup'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token string-property property"},"'allowSingleLine'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token string-property property"},"'vue/max-attributes-per-line'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'vue/valid-v-for'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// allow async-await"),a(`
  `),n("span",{class:"token string-property property"},"'generator-star-spacing'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'off'"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// allow paren-less arrow functions"),a(`
  `),n("span",{class:"token string-property property"},"'arrow-parens'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'one-var'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token string-property property"},"'import/first'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/named'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/namespace'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/default'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/export'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/extensions'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/no-unresolved'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string-property property"},"'import/no-extraneous-dependencies'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`

  `),n("span",{class:"token comment"},"// allow debugger during development"),a(`
  `),n("span",{class:"token string-property property"},"'no-debugger'"),n("span",{class:"token operator"},":"),a(" process"),n("span",{class:"token punctuation"},"."),a("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"NODE_ENV"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'production'"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("h2",{id:"typescript-projects-linting",class:"doc-heading doc-h2",onClick:$=>k(b)("typescript-projects-linting")},"Typescript projects linting",8,["onClick"]),n("p",null,"The linting for a TS project is based on vite-plugin-checker + ESLint + vue-tsc:"),n(k(m),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(()=>[n(g,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker vue-tsc@^1.0.0 typescript@~5.3.0")])]),n(o,{lang:"bash"})]),_:1})]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Notice the "),n("code",{class:"doc-token"},"typescript"),a(" dependency is <= 5.3. There is currently an issue with ESLint and newer TS (5.4+). This is only a temporary thing until upstream fixes it.")])]),n("p",null,[a("Create a file called "),n("code",{class:"doc-token"},"tsconfig.vue-tsc.json"),a(" in the root of your project folder:")]),n(k(m),{title:"/tsconfig.vue-tsc.json"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"./tsconfig.json"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"compilerOptions"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},'"skipLibCheck"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n(k(m),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"vitePlugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'vite-plugin-checker'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"vueTsc"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"tsconfigPath"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tsconfig.vue-tsc.json'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"lintCommand"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},`'eslint "./**/*.{js,ts,mjs,cjs,vue}"'`),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("h2",{id:"javascript-projects-linting",class:"doc-heading doc-h2",onClick:$=>k(b)("javascript-projects-linting")},"Javascript projects linting",8,["onClick"]),n("p",null,"The linting for a JS project is based on vite-plugin-checker + ESLint:"),n(k(m),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:l(()=>[n(g,{class:"q-pa-none",name:"Yarn"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"NPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" --save-dev vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"PNPM"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1}),n(g,{class:"q-pa-none",name:"Bun"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ bun "),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"--dev"),a(" vite-plugin-checker")])]),n(o,{lang:"bash"})]),_:1})]),_:1}),n(k(m),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"vitePlugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'vite-plugin-checker'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"lintCommand"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},`'eslint "./**/*.{js,mjs,cjs,vue}"'`),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"server"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("h2",{id:"quasar-config-file-eslint",class:"doc-heading doc-h2",onClick:$=>k(b)("quasar-config-file-eslint")},[a("quasar.config file > eslint "),n(x,{label:"deprecated"})],8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"The property described below has been deprecated in favour of using vite-plugin-checker.")]),n("p",null,[a("If you chose ESLint when creating your project folder, you’ll also notice that the "),n("code",{class:"doc-token"},"eslint"),a(" key is added to the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file:")]),n(k(m),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// fix: true,"),a(`
  `),n("span",{class:"token comment"},"// include: [],"),a(`
  `),n("span",{class:"token comment"},"// exclude: [],"),a(`
  `),n("span",{class:"token comment"},"// rawOptions: {},"),a(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")])]),n(o)]),_:1}),n(k(m),{title:"/quasar.config file > eslint"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Options with which Quasar CLI will use ESLint */"),a(`
eslint`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" QuasarEslintConfiguration"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"QuasarEslintConfiguration"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},`/**
   * Should it report warnings?
   * @default true
   */`),a(`
  warnings`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Should it report errors?
   * @default true
   */`),a(`
  errors`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Fix on save
   */`),a(`
  fix`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Raw options to send to ESLint
   */`),a(`
  rawOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" object"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to include (can be in glob format)
   */`),a(`
  include`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token comment"},`/**
   * Files to exclude (can be in glob format).
   * Recommending to use .eslintignore file instead.
   */`),a(`
  exclude`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("p",null,"In order for you to disable ESLint later, all you need to do is to:"),n("ol",null,[n("li",null,"Comment out (or remove) the key below:")]),n(k(m),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token comment"},"/* ... */"),a(),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("ol",{start:"2"},[n("li",null,[a("Or, set "),n("code",{class:"doc-token"},"warnings"),a(" and "),n("code",{class:"doc-token"},"errors"),a(" to "),n("code",{class:"doc-token"},"false"),a(":")])]),n(k(m),{title:"/quasar.config file"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"eslint"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"warnings"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"errors"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1})]}),_:1},L))}}},E=j.setup;j.setup=(q,h)=>{const w=T();return(w.modules||(w.modules=new Set)).add("src/pages/quasar-cli-vite/linter.md"),E?E(q,h):void 0};const X=O(j,[["__file","linter.md"]]);export{X as default};
