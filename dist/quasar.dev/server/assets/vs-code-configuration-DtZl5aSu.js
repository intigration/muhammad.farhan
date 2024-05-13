import{mergeProps as q,withCtx as l,createTextVNode as e,unref as p,createVNode as t,useSSRContext as V}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as m}from"./page-utils-C-QWsEHe.js";import{D as S,a as c}from"./DocPage-DKr-0pQn.js";import{D as g}from"./DocPrerender-DPOnWPFO.js";import{C as k}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"vs-code-configuration",__ssrInlineRender:!0,setup(b){const h=[{id:"vs-code-extensions",title:"2. VS Code Extensions"},{id:"essential-intellisense-linting-formatting-",title:"2.1. Essential (IntelliSense, Linting, Formatting)",sub:!0},{id:"recommended",title:"2.2. Recommended",sub:!0},{id:"quasar-cli",title:"3. Quasar CLI"},{id:"vite-and-vue-cli-and-umd",title:"4. Vite & Vue CLI & UMD"},{id:"common-configuration",title:"4.1. Common Configuration",sub:!0},{id:"eslint",title:"4.2. ESLint",sub:!0},{id:"typescript",title:"4.3. TypeScript",sub:!0},{id:"debugging-a-quasar-project-in-vs-code",title:"5. Debugging a Quasar project in VS Code"}];return(f,v,C,w)=>{v(r(S,q({title:"Configure VS Code",desc:"How to configure VS Code for best usage with Quasar.",heading:"","edit-link":"start/vs-code-configuration",toc:h},w),{default:l((T,s,d,a)=>{if(s)s(`<div class="doc-note doc-note--tip"${a}><p class="doc-note__title"${a}>TIP</p><p${a}>This guide assumes you have already installed VS Code(Visual Studio Code).</p></div><h2 id="vs-code-extensions" class="doc-heading doc-h2"${a}>VS Code Extensions</h2><h3 id="essential-intellisense-linting-formatting-" class="doc-heading doc-h3"${a}>Essential (<em${a}>IntelliSense, Linting, Formatting</em>)</h3><ul${a}><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=vue.volar"},{default:l((i,o,u,n)=>{if(o)o("Vue Language Features (Volar)");else return[e("Vue Language Features (Volar)")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},{default:l((i,o,u,n)=>{if(o)o("ESLint");else return[e("ESLint")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},{default:l((i,o,u,n)=>{if(o)o("Prettier");else return[e("Prettier")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},{default:l((i,o,u,n)=>{if(o)o("EditorConfig");else return[e("EditorConfig")]}),_:1},d,a)),s(`</li></ul><h3 id="recommended" class="doc-heading doc-h3"${a}>Recommended</h3><ul${a}><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight"},{default:l((i,o,u,n)=>{if(o)o("TODO Highlight");else return[e("TODO Highlight")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},{default:l((i,o,u,n)=>{if(o)o("GitLens — Git supercharged");else return[e("GitLens — Git supercharged")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"},{default:l((i,o,u,n)=>{if(o)o("Import Cost");else return[e("Import Cost")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},{default:l((i,o,u,n)=>{if(o)o("VS Code Icons");else return[e("VS Code Icons")]}),_:1},d,a)),s(`</li><li${a}>`),s(r(c,{to:"https://marketplace.visualstudio.com/items?itemName=CodeCoaching.quasar-docs"},{default:l((i,o,u,n)=>{if(o)o("Quasar Docs");else return[e("Quasar Docs")]}),_:1},d,a)),s(`</li></ul><h2 id="quasar-cli" class="doc-heading doc-h2"${a}>Quasar CLI</h2><p${a}>If you created your project with Quasar CLI, you already have the recommended VS Code configuration. 💪</p><p${a}>When you open your project on VS Code, it will prompt you to install our recommended extensions if you haven’t installed them already. Just restart VS Code after installing them and you are ready to go! 🚀</p><h2 id="vite-and-vue-cli-and-umd" class="doc-heading doc-h2"${a}>Vite &amp; Vue CLI &amp; UMD</h2><p${a}>Depending on which features/presets you are using, you can add the related options to <code class="doc-token"${a}>.vscode/settings.json</code>.</p><h3 id="common-configuration" class="doc-heading doc-h3"${a}>Common Configuration</h3>`),s(r(p(g),null,{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token punctuation"${n}>{</span>
  <span class="token property"${n}>&quot;editor.bracketPairColorization.enabled&quot;</span><span class="token operator"${n}>:</span> <span class="token boolean"${n}>true</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;editor.guides.bracketPairs&quot;</span><span class="token operator"${n}>:</span> <span class="token boolean"${n}>true</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.bracketPairColorization.enabled"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"editor.guides.bracketPairs"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<h3 id="eslint" class="doc-heading doc-h3"${a}>ESLint</h3>`),s(r(p(g),null,{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token punctuation"${n}>{</span>
  <span class="token property"${n}>&quot;editor.formatOnSave&quot;</span><span class="token operator"${n}>:</span> <span class="token boolean"${n}>true</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;editor.codeActionsOnSave&quot;</span><span class="token operator"${n}>:</span> <span class="token punctuation"${n}>[</span>
    <span class="token string"${n}>&quot;source.fixAll.eslint&quot;</span>
  <span class="token punctuation"${n}>]</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;eslint.validate&quot;</span><span class="token operator"${n}>:</span> <span class="token punctuation"${n}>[</span><span class="token string"${n}>&quot;javascript&quot;</span><span class="token punctuation"${n}>,</span> <span class="token string"${n}>&quot;javascriptreact&quot;</span><span class="token punctuation"${n}>,</span> <span class="token string"${n}>&quot;typescript&quot;</span><span class="token punctuation"${n}>,</span> <span class="token string"${n}>&quot;vue&quot;</span><span class="token punctuation"${n}>]</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.formatOnSave"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"editor.codeActionsOnSave"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
    `),t("span",{class:"token string"},'"source.fixAll.eslint"'),e(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"eslint.validate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},'"javascript"'),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},'"javascriptreact"'),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},'"typescript"'),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},"]"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<h4 id="without-prettier" class="doc-heading doc-h4"${a}>Without Prettier</h4>`),s(r(p(g),null,{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token punctuation"${n}>{</span>
  <span class="token property"${n}>&quot;editor.defaultFormatter&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;dbaeumer.vscode-eslint&quot;</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.defaultFormatter"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"dbaeumer.vscode-eslint"'),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<h4 id="with-prettier" class="doc-heading doc-h4"${a}>With Prettier</h4>`),s(r(p(g),null,{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token punctuation"${n}>{</span>
  <span class="token property"${n}>&quot;editor.defaultFormatter&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;esbenp.prettier-vscode&quot;</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.defaultFormatter"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"esbenp.prettier-vscode"'),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<h3 id="typescript" class="doc-heading doc-h3"${a}>TypeScript</h3>`),s(r(p(g),null,{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token punctuation"${n}>{</span>
  <span class="token property"${n}>&quot;typescript.tsdk&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;node_modules/typescript/lib&quot;</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"typescript.tsdk"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"node_modules/typescript/lib"'),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<h2 id="debugging-a-quasar-project-in-vs-code" class="doc-heading doc-h2"${a}>Debugging a Quasar project in VS Code</h2><p${a}>The best approach is to open that in a browser beside this page so you can review these instructions as you are reading those instructions. And apply the changes to your project as you go.</p><p${a}>The first step to properly start debugging is enabling source maps. Quasar automatically enables source maps for development mode. Here is `),s(r(c,{to:"https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html"},{default:l((i,o,u,n)=>{if(o)o("a good article");else return[e("a good article")]}),_:1},d,a)),s(" that describes the different values for the "),s(r(c,{to:"https://webpack.js.org/configuration/devtool/"},{default:l((i,o,u,n)=>{if(o)o("Webpack’s devtool setting");else return[e("Webpack’s devtool setting")]}),_:1},d,a)),s(`(<em${a}>the one that controls the source maps</em>). Quasar uses <em${a}>eval-cheap-module-source-map</em> by default.</p><p${a}><code class="doc-token"${a}>eval-cheap-module-source-map</code> builds slow(<em${a}>not the slowest</em>), rebuilds fast(<em${a}>not the fastest</em>), and preserves the original lines(<em${a}>not the best quality</em>). If you want faster builds while giving up on some accuracy, or more accuracy while giving up on speed, you can choose other values. The slowest but the most accurate(<em${a}>the original</em>) value of the <code class="doc-token"${a}>devtool</code> is <code class="doc-token"${a}>source-map</code>. This makes debugging in VS Code work properly due to your full Vue source files being available in the built-in Chrome debugger. So, it will be easier to find your original source and locate the line that you want to set the breakpoint to. If you want to enable this, you need to update `),s(r(c,{to:"/quasar-cli-webpack/quasar-config-file#property-build"},{default:l((i,o,u,n)=>{if(o)o(`<code class="doc-token"${n}>quasar.config file &gt; build &gt; devtool</code>`);else return[t("code",{class:"doc-token"},"quasar.config file > build > devtool")]}),_:1},d,a)),s(" like this:</p>"),s(r(p(g),{title:"/quasar.config file"},{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token literal-property property"${n}>build</span><span class="token operator"${n}>:</span> <span class="token punctuation"${n}>{</span>
  <span class="token comment"${n}>// ...</span>

  <span class="token comment"${n}>// this is a configuration passed on to the underlying Webpack.</span>
  <span class="token comment"${n}>// No need to set this if you are using vite.</span>
  <span class="token literal-property property"${n}>devtool</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&#39;source-map&#39;</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token literal-property property"},"build"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token comment"},"// ..."),e(`

  `),t("span",{class:"token comment"},"// this is a configuration passed on to the underlying Webpack."),e(`
  `),t("span",{class:"token comment"},"// No need to set this if you are using vite."),e(`
  `),t("span",{class:"token literal-property property"},"devtool"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'source-map'"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<p${a}>Then you need to tell VSCode to add a configuration to the debugger. The easiest way to do that is to click on the bug icon on the action bar (for ltr languages, that is the bar on the far left). Once you click on that bug icon, the file tree area will switch to the debug and run area. Click on the gear icon in the title bar of that window and it will bring up a file called <em${a}>launch.json</em>. This is where you put the different configurations of launching the application to be debugged. Here are the settings for launching a Quasar app in Chrome. For the Firefox version, you can check out `),s(r(c,{to:"https://v2.vuejs.org/v2/cookbook/debugging-in-vscode.html#Launching-the-Application-from-VS-Code"},{default:l((i,o,u,n)=>{if(o)o("Vue Cookbook");else return[e("Vue Cookbook")]}),_:1},d,a)),s(`(<em${a}>for Vue 2, might be outdated</em>).</p><p${a}>In the example below, replace <code class="doc-token"${a}>package-name</code> with the <code class="doc-token"${a}>name</code> property from your <code class="doc-token"${a}>package.json</code> file:</p>`),s(r(p(g),null,{default:l((i,o,u,n)=>{if(o)o(`<pre class="doc-code"${n}><code${n}><span class="token punctuation"${n}>{</span>
  <span class="token property"${n}>&quot;type&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;chrome&quot;</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;request&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;launch&quot;</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;name&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;Quasar App: chrome&quot;</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;url&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;http://localhost:8080&quot;</span><span class="token punctuation"${n}>,</span>
  <span class="token comment"${n}>// To properly reflect changes after HMR with Vite</span>
  <span class="token property"${n}>&quot;enableContentValidation&quot;</span><span class="token operator"${n}>:</span> <span class="token boolean"${n}>false</span><span class="token punctuation"${n}>,</span>
  <span class="token property"${n}>&quot;webRoot&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;\${workspaceFolder}/src&quot;</span><span class="token punctuation"${n}>,</span>
  <span class="token comment"${n}>// No need to configure sourcemap explicitly for vite.</span>
  <span class="token property"${n}>&quot;sourceMapPathOverrides&quot;</span><span class="token operator"${n}>:</span> <span class="token punctuation"${n}>{</span>
    <span class="token property"${n}>&quot;webpack://package-name/./src/*&quot;</span><span class="token operator"${n}>:</span> <span class="token string"${n}>&quot;\${webRoot}/*&quot;</span>
  <span class="token punctuation"${n}>}</span>
<span class="token punctuation"${n}>}</span></code></pre>`),o(r(k,null,null,u,n));else return[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"chrome"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"request"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"launch"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"Quasar App: chrome"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"url"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"http://localhost:8080"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token comment"},"// To properly reflect changes after HMR with Vite"),e(`
  `),t("span",{class:"token property"},'"enableContentValidation"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"webRoot"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"${workspaceFolder}/src"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token comment"},"// No need to configure sourcemap explicitly for vite."),e(`
  `),t("span",{class:"token property"},'"sourceMapPathOverrides"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"webpack://package-name/./src/*"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"${webRoot}/*"'),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]}),_:1},d,a)),s(`<p${a}>Now save the file, then select that configuration in the dropdown on the title bar of the debug and run pane. Before you can launch the debugger, the app must be running. Start the development server by running <code class="doc-token"${a}>quasar dev</code>. Then click the green “Start Debugging” button in the “Run and Debug” pane(<em${a}>or press F5</em>) to launch the debugging session and attach it to your running app. You can now set breakpoints and control step over/in/out etc., all from VSCode. You can also launch the built-in Chrome debugger and it will stay in sync. This might be useful if you also have the `),s(r(c,{to:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"},{default:l((i,o,u,n)=>{if(o)o("Vue devtools");else return[e("Vue devtools")]}),_:1},d,a)),s(` installed (highly recommended).</p><div class="doc-note doc-note--tip"${a}><p class="doc-note__title"${a}>TIP</p><p${a}>If you just want to use the Chrome or Firefox debuggers but you find it hard to locate the right source file in the browser source tab then you can use the debugger statement in your code to force the debugger to stop on that line and bring up the proper source code.</p></div>`);else return[t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"This guide assumes you have already installed VS Code(Visual Studio Code).")]),t("h2",{id:"vs-code-extensions",class:"doc-heading doc-h2",onClick:i=>p(m)("vs-code-extensions")},"VS Code Extensions",8,["onClick"]),t("h3",{id:"essential-intellisense-linting-formatting-",class:"doc-heading doc-h3",onClick:i=>p(m)("essential-intellisense-linting-formatting-")},[e("Essential ("),t("em",null,"IntelliSense, Linting, Formatting"),e(")")],8,["onClick"]),t("ul",null,[t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=vue.volar"},{default:l(()=>[e("Vue Language Features (Volar)")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},{default:l(()=>[e("ESLint")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},{default:l(()=>[e("Prettier")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},{default:l(()=>[e("EditorConfig")]),_:1})])]),t("h3",{id:"recommended",class:"doc-heading doc-h3",onClick:i=>p(m)("recommended")},"Recommended",8,["onClick"]),t("ul",null,[t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight"},{default:l(()=>[e("TODO Highlight")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},{default:l(()=>[e("GitLens — Git supercharged")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"},{default:l(()=>[e("Import Cost")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},{default:l(()=>[e("VS Code Icons")]),_:1})]),t("li",null,[t(c,{to:"https://marketplace.visualstudio.com/items?itemName=CodeCoaching.quasar-docs"},{default:l(()=>[e("Quasar Docs")]),_:1})])]),t("h2",{id:"quasar-cli",class:"doc-heading doc-h2",onClick:i=>p(m)("quasar-cli")},"Quasar CLI",8,["onClick"]),t("p",null,"If you created your project with Quasar CLI, you already have the recommended VS Code configuration. 💪"),t("p",null,"When you open your project on VS Code, it will prompt you to install our recommended extensions if you haven’t installed them already. Just restart VS Code after installing them and you are ready to go! 🚀"),t("h2",{id:"vite-and-vue-cli-and-umd",class:"doc-heading doc-h2",onClick:i=>p(m)("vite-and-vue-cli-and-umd")},"Vite & Vue CLI & UMD",8,["onClick"]),t("p",null,[e("Depending on which features/presets you are using, you can add the related options to "),t("code",{class:"doc-token"},".vscode/settings.json"),e(".")]),t("h3",{id:"common-configuration",class:"doc-heading doc-h3",onClick:i=>p(m)("common-configuration")},"Common Configuration",8,["onClick"]),t(p(g),null,{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.bracketPairColorization.enabled"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"editor.guides.bracketPairs"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("h3",{id:"eslint",class:"doc-heading doc-h3",onClick:i=>p(m)("eslint")},"ESLint",8,["onClick"]),t(p(g),null,{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.formatOnSave"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"editor.codeActionsOnSave"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
    `),t("span",{class:"token string"},'"source.fixAll.eslint"'),e(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"eslint.validate"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},'"javascript"'),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},'"javascriptreact"'),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},'"typescript"'),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},"]"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("h4",{id:"without-prettier",class:"doc-heading doc-h4",onClick:i=>p(m)("without-prettier")},"Without Prettier",8,["onClick"]),t(p(g),null,{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.defaultFormatter"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"dbaeumer.vscode-eslint"'),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("h4",{id:"with-prettier",class:"doc-heading doc-h4",onClick:i=>p(m)("with-prettier")},"With Prettier",8,["onClick"]),t(p(g),null,{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"editor.defaultFormatter"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"esbenp.prettier-vscode"'),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("h3",{id:"typescript",class:"doc-heading doc-h3",onClick:i=>p(m)("typescript")},"TypeScript",8,["onClick"]),t(p(g),null,{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"typescript.tsdk"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"node_modules/typescript/lib"'),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("h2",{id:"debugging-a-quasar-project-in-vs-code",class:"doc-heading doc-h2",onClick:i=>p(m)("debugging-a-quasar-project-in-vs-code")},"Debugging a Quasar project in VS Code",8,["onClick"]),t("p",null,"The best approach is to open that in a browser beside this page so you can review these instructions as you are reading those instructions. And apply the changes to your project as you go."),t("p",null,[e("The first step to properly start debugging is enabling source maps. Quasar automatically enables source maps for development mode. Here is "),t(c,{to:"https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html"},{default:l(()=>[e("a good article")]),_:1}),e(" that describes the different values for the "),t(c,{to:"https://webpack.js.org/configuration/devtool/"},{default:l(()=>[e("Webpack’s devtool setting")]),_:1}),e("("),t("em",null,"the one that controls the source maps"),e("). Quasar uses "),t("em",null,"eval-cheap-module-source-map"),e(" by default.")]),t("p",null,[t("code",{class:"doc-token"},"eval-cheap-module-source-map"),e(" builds slow("),t("em",null,"not the slowest"),e("), rebuilds fast("),t("em",null,"not the fastest"),e("), and preserves the original lines("),t("em",null,"not the best quality"),e("). If you want faster builds while giving up on some accuracy, or more accuracy while giving up on speed, you can choose other values. The slowest but the most accurate("),t("em",null,"the original"),e(") value of the "),t("code",{class:"doc-token"},"devtool"),e(" is "),t("code",{class:"doc-token"},"source-map"),e(". This makes debugging in VS Code work properly due to your full Vue source files being available in the built-in Chrome debugger. So, it will be easier to find your original source and locate the line that you want to set the breakpoint to. If you want to enable this, you need to update "),t(c,{to:"/quasar-cli-webpack/quasar-config-file#property-build"},{default:l(()=>[t("code",{class:"doc-token"},"quasar.config file > build > devtool")]),_:1}),e(" like this:")]),t(p(g),{title:"/quasar.config file"},{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token literal-property property"},"build"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token comment"},"// ..."),e(`

  `),t("span",{class:"token comment"},"// this is a configuration passed on to the underlying Webpack."),e(`
  `),t("span",{class:"token comment"},"// No need to set this if you are using vite."),e(`
  `),t("span",{class:"token literal-property property"},"devtool"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},"'source-map'"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("p",null,[e("Then you need to tell VSCode to add a configuration to the debugger. The easiest way to do that is to click on the bug icon on the action bar (for ltr languages, that is the bar on the far left). Once you click on that bug icon, the file tree area will switch to the debug and run area. Click on the gear icon in the title bar of that window and it will bring up a file called "),t("em",null,"launch.json"),e(". This is where you put the different configurations of launching the application to be debugged. Here are the settings for launching a Quasar app in Chrome. For the Firefox version, you can check out "),t(c,{to:"https://v2.vuejs.org/v2/cookbook/debugging-in-vscode.html#Launching-the-Application-from-VS-Code"},{default:l(()=>[e("Vue Cookbook")]),_:1}),e("("),t("em",null,"for Vue 2, might be outdated"),e(").")]),t("p",null,[e("In the example below, replace "),t("code",{class:"doc-token"},"package-name"),e(" with the "),t("code",{class:"doc-token"},"name"),e(" property from your "),t("code",{class:"doc-token"},"package.json"),e(" file:")]),t(p(g),null,{default:l(()=>[t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"chrome"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"request"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"launch"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"Quasar App: chrome"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"url"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"http://localhost:8080"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token comment"},"// To properly reflect changes after HMR with Vite"),e(`
  `),t("span",{class:"token property"},'"enableContentValidation"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"webRoot"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"${workspaceFolder}/src"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token comment"},"// No need to configure sourcemap explicitly for vite."),e(`
  `),t("span",{class:"token property"},'"sourceMapPathOverrides"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"webpack://package-name/./src/*"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"${webRoot}/*"'),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}")])]),t(k)]),_:1}),t("p",null,[e("Now save the file, then select that configuration in the dropdown on the title bar of the debug and run pane. Before you can launch the debugger, the app must be running. Start the development server by running "),t("code",{class:"doc-token"},"quasar dev"),e(". Then click the green “Start Debugging” button in the “Run and Debug” pane("),t("em",null,"or press F5"),e(") to launch the debugging session and attach it to your running app. You can now set breakpoints and control step over/in/out etc., all from VSCode. You can also launch the built-in Chrome debugger and it will stay in sync. This might be useful if you also have the "),t(c,{to:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"},{default:l(()=>[e("Vue devtools")]),_:1}),e(" installed (highly recommended).")]),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,"If you just want to use the Chrome or Firefox debuggers but you find it hard to locate the right source file in the browser source tab then you can use the debugger statement in your code to force the debugger to stop on that line and bring up the proper source code.")])]}),_:1},C))}}},$=y.setup;y.setup=(b,h)=>{const f=V();return(f.modules||(f.modules=new Set)).add("src/pages/start/vs-code-configuration.md"),$?$(b,h):void 0};const G=j(y,[["__file","vs-code-configuration.md"]]);export{G as default};
