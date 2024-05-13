import{mergeProps as x,withCtx as p,createTextVNode as a,unref as l,createVNode as n,useSSRContext as j}from"vue";import{ssrRenderComponent as c}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as q,a as g}from"./DocPage-DKr-0pQn.js";import{D as u}from"./DocPrerender-DPOnWPFO.js";import{C as r}from"./CopyButton-l3ndfN49.js";import{_ as O}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"configuring-capacitor",__ssrInlineRender:!0,setup(b){const $=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],f=[{id:"capacitor-config-json",title:"2. capacitor.config.json"},{id:"quasar-config-file",title:"3. quasar.config file"}];return(S,w,C,v)=>{w(c(q,x({title:"Configuring Capacitor",desc:"(@quasar/app-vite) How to manage your Capacitor apps with Quasar CLI.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-capacitor-apps/configuring-capacitor",toc:f,related:$},v),{default:p((P,e,m,o)=>{if(e)e(`<p${o}>We’ll be using Quasar CLI to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.</p><p${o}>There are two configuration files of great importance to your mobile apps. We’ll go over each one.</p><h2 id="capacitor-config-json" class="doc-heading doc-h2"${o}>capacitor.config.json</h2><p${o}>The most important config file for your mobile app is <code class="doc-token"${o}>/src-capacitor/capacitor.config.json</code>. The <code class="doc-token"${o}>/src-capacitor</code> folder is a Capacitor project, so please refer to `),e(c(g,{to:"https://capacitor.ionicframework.com"},{default:p((k,t,i,s)=>{if(t)t("Capacitor documentation");else return[a("Capacitor documentation")]}),_:1},m,o)),e(" in order to understand what each file from there does. But for now, have a few moments to read about "),e(c(g,{to:"https://capacitor.ionicframework.com/docs/basics/configuring-your-app/"},{default:p((k,t,i,s)=>{if(t)t("capacitor.config.json");else return[a("capacitor.config.json")]}),_:1},m,o)),e(`.</p><p${o}>Some properties from this file will get overwritten as we’ll see in next section.</p><h2 id="quasar-config-file" class="doc-heading doc-h2"${o}>quasar.config file</h2><p${o}>There are two places in the <code class="doc-token"${o}>/quasar.config</code> file where you can configure Quasar specific features for Capacitor.</p>`),e(c(l(u),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>capacitor</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// (Optional!)</span>
    <span class="token literal-property property"${s}>hideSplashscreen</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// disables auto-hiding the Splashscreen by Quasar CLI</span>

    <span class="token comment"${s}>// (Optional!)</span>
    <span class="token literal-property property"${s}>capacitorCliPreparationParams</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span> <span class="token string"${s}>&#39;sync&#39;</span><span class="token punctuation"${s}>,</span> ctx<span class="token punctuation"${s}>.</span>targetName <span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// (Optional) If not present, will look for package.json &gt; name</span>
    <span class="token literal-property property"${s}>appName</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;...&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// string</span>
    <span class="token comment"${s}>// (Optional) If not present, will look for package.json &gt; version</span>
    <span class="token literal-property property"${s}>version</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;...&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// string</span>
    <span class="token comment"${s}>// (Optional) If not present, will look for package.json &gt; description</span>
    <span class="token literal-property property"${s}>description</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;...&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// string</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(c(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// (Optional!)"),a(`
    `),n("span",{class:"token literal-property property"},"hideSplashscreen"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// disables auto-hiding the Splashscreen by Quasar CLI"),a(`

    `),n("span",{class:"token comment"},"// (Optional!)"),a(`
    `),n("span",{class:"token literal-property property"},"capacitorCliPreparationParams"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token string"},"'sync'"),n("span",{class:"token punctuation"},","),a(" ctx"),n("span",{class:"token punctuation"},"."),a("targetName "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// (Optional) If not present, will look for package.json > name"),a(`
    `),n("span",{class:"token literal-property property"},"appName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token comment"},"// (Optional) If not present, will look for package.json > version"),a(`
    `),n("span",{class:"token literal-property property"},"version"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token comment"},"// (Optional) If not present, will look for package.json > description"),a(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,o)),e(`<p${o}>And you can also configure:</p>`),e(c(l(u),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>config</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>capacitor</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>iosStatusBarPadding</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// add the dynamic top padding on iOS mobile devices</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(c(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"iosStatusBarPadding"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// add the dynamic top padding on iOS mobile devices"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,o)),e(`<p${o}>Finally, you can also disable or configure the back button hook (used for Dialogs):</p>`),e(c(l(u),null,{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>config</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>capacitor</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${s}>backButtonExit</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token operator"${s}>/</span><span class="token string"${s}>&#39;*&#39;</span><span class="token operator"${s}>/</span><span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;/login&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/home&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/my-page&#39;</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

        <span class="token comment"${s}>// On the other hand, the following completely</span>
        <span class="token comment"${s}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${s}>backButton</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(c(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,o)),e(`<p${o}>Should you want to tamper with the Vite config for UI in /src:</p>`),e(c(l(u),{title:"/quasar.config file"},{default:p((k,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token function"${s}>extendViteConf</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>viteConf</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
        <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>capacitor<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
          <span class="token comment"${s}>// do something with ViteConf</span>
        <span class="token punctuation"${s}>}</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(c(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"viteConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("capacitor"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},m,o));else return[n("p",null,"We’ll be using Quasar CLI to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands."),n("p",null,"There are two configuration files of great importance to your mobile apps. We’ll go over each one."),n("h2",{id:"capacitor-config-json",class:"doc-heading doc-h2",onClick:k=>l(h)("capacitor-config-json")},"capacitor.config.json",8,["onClick"]),n("p",null,[a("The most important config file for your mobile app is "),n("code",{class:"doc-token"},"/src-capacitor/capacitor.config.json"),a(". The "),n("code",{class:"doc-token"},"/src-capacitor"),a(" folder is a Capacitor project, so please refer to "),n(g,{to:"https://capacitor.ionicframework.com"},{default:p(()=>[a("Capacitor documentation")]),_:1}),a(" in order to understand what each file from there does. But for now, have a few moments to read about "),n(g,{to:"https://capacitor.ionicframework.com/docs/basics/configuring-your-app/"},{default:p(()=>[a("capacitor.config.json")]),_:1}),a(".")]),n("p",null,"Some properties from this file will get overwritten as we’ll see in next section."),n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:k=>l(h)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,[a("There are two places in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file where you can configure Quasar specific features for Capacitor.")]),n(l(u),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// (Optional!)"),a(`
    `),n("span",{class:"token literal-property property"},"hideSplashscreen"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// disables auto-hiding the Splashscreen by Quasar CLI"),a(`

    `),n("span",{class:"token comment"},"// (Optional!)"),a(`
    `),n("span",{class:"token literal-property property"},"capacitorCliPreparationParams"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token string"},"'sync'"),n("span",{class:"token punctuation"},","),a(" ctx"),n("span",{class:"token punctuation"},"."),a("targetName "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// (Optional) If not present, will look for package.json > name"),a(`
    `),n("span",{class:"token literal-property property"},"appName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token comment"},"// (Optional) If not present, will look for package.json > version"),a(`
    `),n("span",{class:"token literal-property property"},"version"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token comment"},"// (Optional) If not present, will look for package.json > description"),a(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"And you can also configure:"),n(l(u),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"iosStatusBarPadding"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// add the dynamic top padding on iOS mobile devices"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"Finally, you can also disable or configure the back button hook (used for Dialogs):"),n(l(u),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"Should you want to tamper with the Vite config for UI in /src:"),n(l(u),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"viteConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("capacitor"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1})]}),_:1},C))}}},d=y.setup;y.setup=(b,$)=>{const f=j();return(f.modules||(f.modules=new Set)).add("src/pages/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor.md"),d?d(b,$):void 0};const U=O(y,[["__file","configuring-capacitor.md"]]);export{U as default};
