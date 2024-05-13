import{mergeProps as x,withCtx as p,createTextVNode as a,unref as c,createVNode as n,useSSRContext as q}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as S,a as d}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as r}from"./CopyButton-l3ndfN49.js";import{_ as L}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"configuring-cordova",__ssrInlineRender:!0,setup($){const g=[{name:"The quasar.config file",category:"Quasar CLI (with Vite)",path:"/quasar-cli-vite/quasar-config-file"}],m=[{id:"config-xml",title:"2. config.xml"},{id:"quasar-config-file",title:"3. quasar.config file"}];return(V,v,w,C)=>{v(l(S,x({title:"Configuring Cordova",desc:"(@quasar/app-vite) How to manage your Cordova apps with Quasar CLI.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-cordova-apps/configuring-cordova",toc:m,related:g},C),{default:p((j,e,f,o)=>{if(e)e(`<p${o}>We’ll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.</p><p${o}>There are two configuration files of great importance to your mobile apps. We’ll go over each one.</p><h2 id="config-xml" class="doc-heading doc-h2"${o}>config.xml</h2><p${o}>The most important config file for your mobile app is <code class="doc-token"${o}>/src-cordova/config.xml</code>. The <code class="doc-token"${o}>/src-cordova</code> folder is a Cordova project, so please refer to `),e(l(d,{to:"https://cordova.apache.org/docs/en/latest/"},{default:p((u,t,i,s)=>{if(t)t("Cordova documentation");else return[a("Cordova documentation")]}),_:1},f,o)),e(" in order to understand what each file from there does. But for now, have a few moments to read about "),e(l(d,{to:"https://cordova.apache.org/docs/en/latest/config_ref/"},{default:p((u,t,i,s)=>{if(t)t("config.xml");else return[a("config.xml")]}),_:1},f,o)),e(`.</p><p${o}>Some properties from this file will get overwritten as we’ll see in next section.</p><h2 id="quasar-config-file" class="doc-heading doc-h2"${o}>quasar.config file</h2><p${o}>Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova “id”, app version, description and android-versionCode. This is for convenience so you’ll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone.</p><p${o}>For determining the values for each of the properties mentioned above, Quasar CLI:</p><ol${o}><li${o}>Looks in the <code class="doc-token"${o}>/quasar.config</code> file for a “cordova” Object. Does it have “version”, “description” and/or “androidVersionCode”? If yes, it will use them.</li><li${o}>If not, then it looks into your <code class="doc-token"${o}>/package.json</code> for “cordovaId”, “version” and “description” fields.</li></ol>`),e(l(c(k),null,{default:p((u,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>capacitor</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token comment"${s}>// If not present, will look for package.json &gt; version</span>
    <span class="token literal-property property"${s}>version</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;..&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// string</span>
    <span class="token comment"${s}>// If not present, will look for package.json &gt; description</span>
    <span class="token literal-property property"${s}>description</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;...&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// string</span>
    <span class="token literal-property property"${s}>androidVersionCode</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;..&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// string</span>

    <span class="token comment"${s}>/**
     * Enable Xcode modern build even if after considering iOS-Cordova issues.
     * You can enable it if you know what you are doing,
     *  for example if you want to specify the build type in your “build.json”.
     *
     * Default: false
     */</span>
    <span class="token literal-property property"${s}>noIosLegacyBuildFlag</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// If not present, will look for package.json > version"),a(`
    `),n("span",{class:"token literal-property property"},"version"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'..'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token comment"},"// If not present, will look for package.json > description"),a(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token literal-property property"},"androidVersionCode"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'..'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`

    `),n("span",{class:"token comment"},`/**
     * Enable Xcode modern build even if after considering iOS-Cordova issues.
     * You can enable it if you know what you are doing,
     *  for example if you want to specify the build type in your “build.json”.
     *
     * Default: false
     */`),a(`
    `),n("span",{class:"token literal-property property"},"noIosLegacyBuildFlag"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},f,o)),e(`<p${o}>Other options you can configure:</p>`),e(l(c(k),null,{default:p((u,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>framework</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>config</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token literal-property property"${s}>cordova</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
        <span class="token comment"${s}>// add the dynamic top padding on iOS mobile devices</span>
        <span class="token literal-property property"${s}>iosStatusBarPadding</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token punctuation"${s}>,</span>

        <span class="token comment"${s}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${s}>backButtonExit</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span><span class="token operator"${s}>/</span><span class="token string"${s}>&#39;*&#39;</span><span class="token operator"${s}>/</span><span class="token punctuation"${s}>[</span><span class="token string"${s}>&#39;/login&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/home&#39;</span><span class="token punctuation"${s}>,</span> <span class="token string"${s}>&#39;/my-page&#39;</span><span class="token punctuation"${s}>]</span><span class="token punctuation"${s}>,</span>

        <span class="token comment"${s}>// On the other hand, the following completely</span>
        <span class="token comment"${s}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${s}>backButton</span><span class="token operator"${s}>:</span> <span class="token boolean"${s}>true</span><span class="token operator"${s}>/</span><span class="token boolean"${s}>false</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// add the dynamic top padding on iOS mobile devices"),a(`
        `),n("span",{class:"token literal-property property"},"iosStatusBarPadding"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},f,o)),e(`<p${o}>Should you want to tamper with the Vite config for UI in /src:</p>`),e(l(c(k),{title:"/quasar.config file"},{default:p((u,t,i,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>module<span class="token punctuation"${s}>.</span><span class="token function-variable function"${s}>exports</span> <span class="token operator"${s}>=</span> <span class="token keyword"${s}>function</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>ctx</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
  <span class="token keyword"${s}>return</span> <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>build</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
      <span class="token function"${s}>extendViteConf</span> <span class="token punctuation"${s}>(</span><span class="token parameter"${s}>viteConf</span><span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
        <span class="token keyword"${s}>if</span> <span class="token punctuation"${s}>(</span>ctx<span class="token punctuation"${s}>.</span>mode<span class="token punctuation"${s}>.</span>cordova<span class="token punctuation"${s}>)</span> <span class="token punctuation"${s}>{</span>
          <span class="token comment"${s}>// do something with ViteConf</span>
        <span class="token punctuation"${s}>}</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(l(r,null,null,i,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"viteConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("cordova"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]}),_:1},f,o));else return[n("p",null,"We’ll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands."),n("p",null,"There are two configuration files of great importance to your mobile apps. We’ll go over each one."),n("h2",{id:"config-xml",class:"doc-heading doc-h2",onClick:u=>c(h)("config-xml")},"config.xml",8,["onClick"]),n("p",null,[a("The most important config file for your mobile app is "),n("code",{class:"doc-token"},"/src-cordova/config.xml"),a(". The "),n("code",{class:"doc-token"},"/src-cordova"),a(" folder is a Cordova project, so please refer to "),n(d,{to:"https://cordova.apache.org/docs/en/latest/"},{default:p(()=>[a("Cordova documentation")]),_:1}),a(" in order to understand what each file from there does. But for now, have a few moments to read about "),n(d,{to:"https://cordova.apache.org/docs/en/latest/config_ref/"},{default:p(()=>[a("config.xml")]),_:1}),a(".")]),n("p",null,"Some properties from this file will get overwritten as we’ll see in next section."),n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:u=>c(h)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,"Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova “id”, app version, description and android-versionCode. This is for convenience so you’ll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone."),n("p",null,"For determining the values for each of the properties mentioned above, Quasar CLI:"),n("ol",null,[n("li",null,[a("Looks in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file for a “cordova” Object. Does it have “version”, “description” and/or “androidVersionCode”? If yes, it will use them.")]),n("li",null,[a("If not, then it looks into your "),n("code",{class:"doc-token"},"/package.json"),a(" for “cordovaId”, “version” and “description” fields.")])]),n(c(k),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"capacitor"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// If not present, will look for package.json > version"),a(`
    `),n("span",{class:"token literal-property property"},"version"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'..'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token comment"},"// If not present, will look for package.json > description"),a(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'...'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`
    `),n("span",{class:"token literal-property property"},"androidVersionCode"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'..'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// string"),a(`

    `),n("span",{class:"token comment"},`/**
     * Enable Xcode modern build even if after considering iOS-Cordova issues.
     * You can enable it if you know what you are doing,
     *  for example if you want to specify the build type in your “build.json”.
     *
     * Default: false
     */`),a(`
    `),n("span",{class:"token literal-property property"},"noIosLegacyBuildFlag"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"Other options you can configure:"),n(c(k),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"framework"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"cordova"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token comment"},"// add the dynamic top padding on iOS mobile devices"),a(`
        `),n("span",{class:"token literal-property property"},"iosStatusBarPadding"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// Quasar handles app exit on mobile phone back button."),a(`
        `),n("span",{class:"token literal-property property"},"backButtonExit"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),n("span",{class:"token operator"},"/"),n("span",{class:"token string"},"'*'"),n("span",{class:"token operator"},"/"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/home'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'/my-page'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token comment"},"// On the other hand, the following completely"),a(`
        `),n("span",{class:"token comment"},"// disables Quasar's back button management."),a(`
        `),n("span",{class:"token literal-property property"},"backButton"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token operator"},"/"),n("span",{class:"token boolean"},"false"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1}),n("p",null,"Should you want to tamper with the Vite config for UI in /src:"),n(c(k),{title:"/quasar.config file"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"extendViteConf"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"viteConf"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},"."),a("mode"),n("span",{class:"token punctuation"},"."),a("cordova"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token comment"},"// do something with ViteConf"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(r)]),_:1})]}),_:1},w))}}},b=y.setup;y.setup=($,g)=>{const m=q();return(m.modules||(m.modules=new Set)).add("src/pages/quasar-cli-vite/developing-cordova-apps/configuring-cordova.md"),b?b($,g):void 0};const H=L(y,[["__file","configuring-cordova.md"]]);export{H as default};
