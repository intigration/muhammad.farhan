import{mergeProps as x,withCtx as r,createTextVNode as a,unref as l,createVNode as n,useSSRContext as q}from"vue";import{ssrRenderComponent as p}from"vue/server-renderer";import{c as b}from"./page-utils-C-QWsEHe.js";import{D as L,a as f}from"./DocPage-DKr-0pQn.js";import{D as d}from"./DocPrerender-DPOnWPFO.js";import{C as i}from"./CopyButton-l3ndfN49.js";import{_ as S}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const y={__name:"configuring-cordova",__ssrInlineRender:!0,setup(h){const g=[{name:"The quasar.config file",category:"Quasar CLI (with Webpack)",path:"/quasar-cli-webpack/quasar-config-file"}],k=[{id:"config-xml",title:"2. config.xml"},{id:"quasar-config-file",title:"3. quasar.config file"}];return(j,v,w,C)=>{v(p(L,x({title:"Configuring Cordova",desc:"(@quasar/app-webpack) How to manage your Cordova apps with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-cordova-apps/configuring-cordova",toc:k,related:g},C),{default:r((B,t,m,s)=>{if(t)t(`<p${s}>We’ll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.</p><p${s}>There are two configuration files of great importance to your mobile apps. We’ll go over each one.</p><h2 id="config-xml" class="doc-heading doc-h2"${s}>config.xml</h2><p${s}>The most important config file for your mobile app is <code class="doc-token"${s}>/src-cordova/config.xml</code>. The <code class="doc-token"${s}>/src-cordova</code> folder is a Cordova project, so please refer to `),t(p(f,{to:"https://cordova.apache.org/docs/en/latest/"},{default:r((c,e,u,o)=>{if(e)e("Cordova documentation");else return[a("Cordova documentation")]}),_:1},m,s)),t(" in order to understand what each file from there does. But for now, have a few moments to read about "),t(p(f,{to:"https://cordova.apache.org/docs/en/latest/config_ref/"},{default:r((c,e,u,o)=>{if(e)e("config.xml");else return[a("config.xml")]}),_:1},m,s)),t(`.</p><p${s}>Some properties from this file will get overwritten as we’ll see in next section.</p><h2 id="quasar-config-file" class="doc-heading doc-h2"${s}>quasar.config file</h2><p${s}>Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova “id”, app version, description and android-versionCode. This is for convenience so you’ll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone.</p><p${s}>For determining the values for each of the properties mentioned above, Quasar CLI:</p><ol${s}><li${s}>Looks in the <code class="doc-token"${s}>/quasar.config</code> file for a “cordova” Object. Does it have “version”, “description” and/or “androidVersionCode”? If yes, it will use them.</li><li${s}>If not, then it looks into your <code class="doc-token"${s}>/package.json</code> for “cordovaId”, “version” and “description” fields.</li></ol>`),t(p(l(d),null,{default:r((c,e,u,o)=>{if(e)e(`<pre class="doc-code"${o}><code${o}><span class="token keyword"${o}>return</span> <span class="token punctuation"${o}>{</span>
  <span class="token literal-property property"${o}>capacitor</span><span class="token operator"${o}>:</span> <span class="token punctuation"${o}>{</span>
    <span class="token comment"${o}>// If not present, will look for package.json &gt; version</span>
    <span class="token literal-property property"${o}>version</span><span class="token operator"${o}>:</span> <span class="token string"${o}>&#39;..&#39;</span><span class="token punctuation"${o}>,</span> <span class="token comment"${o}>// string</span>
    <span class="token comment"${o}>// If not present, will look for package.json &gt; description</span>
    <span class="token literal-property property"${o}>description</span><span class="token operator"${o}>:</span> <span class="token string"${o}>&#39;...&#39;</span><span class="token punctuation"${o}>,</span> <span class="token comment"${o}>// string</span>
    <span class="token literal-property property"${o}>androidVersionCode</span><span class="token operator"${o}>:</span> <span class="token string"${o}>&#39;..&#39;</span><span class="token punctuation"${o}>,</span> <span class="token comment"${o}>// string</span>

    <span class="token comment"${o}>/**
     * Enable Xcode modern build even if after considering iOS-Cordova issues.
     * You can enable it if you know what you are doing,
     *  for example if you want to specify the build type in your “build.json”.
     *
     * Default: false
     */</span>
    <span class="token literal-property property"${o}>noIosLegacyBuildFlag</span><span class="token operator"${o}>:</span> <span class="token boolean"${o}>true</span><span class="token operator"${o}>/</span><span class="token boolean"${o}>false</span>
  <span class="token punctuation"${o}>}</span>
<span class="token punctuation"${o}>}</span></code></pre>`),e(p(i,null,null,u,o));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},m,s)),t(`<p${s}>Other options you can configure:</p>`),t(p(l(d),null,{default:r((c,e,u,o)=>{if(e)e(`<pre class="doc-code"${o}><code${o}><span class="token keyword"${o}>return</span> <span class="token punctuation"${o}>{</span>
  <span class="token literal-property property"${o}>framework</span><span class="token operator"${o}>:</span> <span class="token punctuation"${o}>{</span>
    <span class="token literal-property property"${o}>config</span><span class="token operator"${o}>:</span> <span class="token punctuation"${o}>{</span>
      <span class="token literal-property property"${o}>cordova</span><span class="token operator"${o}>:</span> <span class="token punctuation"${o}>{</span>
        <span class="token comment"${o}>// add the dynamic top padding on iOS mobile devices</span>
        <span class="token literal-property property"${o}>iosStatusBarPadding</span><span class="token operator"${o}>:</span> <span class="token boolean"${o}>true</span><span class="token operator"${o}>/</span><span class="token boolean"${o}>false</span><span class="token punctuation"${o}>,</span>

        <span class="token comment"${o}>// Quasar handles app exit on mobile phone back button.</span>
        <span class="token literal-property property"${o}>backButtonExit</span><span class="token operator"${o}>:</span> <span class="token boolean"${o}>true</span><span class="token operator"${o}>/</span><span class="token boolean"${o}>false</span><span class="token operator"${o}>/</span><span class="token string"${o}>&#39;*&#39;</span><span class="token operator"${o}>/</span><span class="token punctuation"${o}>[</span><span class="token string"${o}>&#39;/login&#39;</span><span class="token punctuation"${o}>,</span> <span class="token string"${o}>&#39;/home&#39;</span><span class="token punctuation"${o}>,</span> <span class="token string"${o}>&#39;/my-page&#39;</span><span class="token punctuation"${o}>]</span><span class="token punctuation"${o}>,</span>

        <span class="token comment"${o}>// On the other hand, the following completely</span>
        <span class="token comment"${o}>// disables Quasar&#39;s back button management.</span>
        <span class="token literal-property property"${o}>backButton</span><span class="token operator"${o}>:</span> <span class="token boolean"${o}>true</span><span class="token operator"${o}>/</span><span class="token boolean"${o}>false</span>
      <span class="token punctuation"${o}>}</span>
    <span class="token punctuation"${o}>}</span>
  <span class="token punctuation"${o}>}</span>
<span class="token punctuation"${o}>}</span></code></pre>`),e(p(i,null,null,u,o));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(i)]}),_:1},m,s));else return[n("p",null,"We’ll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands."),n("p",null,"There are two configuration files of great importance to your mobile apps. We’ll go over each one."),n("h2",{id:"config-xml",class:"doc-heading doc-h2",onClick:c=>l(b)("config-xml")},"config.xml",8,["onClick"]),n("p",null,[a("The most important config file for your mobile app is "),n("code",{class:"doc-token"},"/src-cordova/config.xml"),a(". The "),n("code",{class:"doc-token"},"/src-cordova"),a(" folder is a Cordova project, so please refer to "),n(f,{to:"https://cordova.apache.org/docs/en/latest/"},{default:r(()=>[a("Cordova documentation")]),_:1}),a(" in order to understand what each file from there does. But for now, have a few moments to read about "),n(f,{to:"https://cordova.apache.org/docs/en/latest/config_ref/"},{default:r(()=>[a("config.xml")]),_:1}),a(".")]),n("p",null,"Some properties from this file will get overwritten as we’ll see in next section."),n("h2",{id:"quasar-config-file",class:"doc-heading doc-h2",onClick:c=>l(b)("quasar-config-file")},"quasar.config file",8,["onClick"]),n("p",null,"Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova “id”, app version, description and android-versionCode. This is for convenience so you’ll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone."),n("p",null,"For determining the values for each of the properties mentioned above, Quasar CLI:"),n("ol",null,[n("li",null,[a("Looks in the "),n("code",{class:"doc-token"},"/quasar.config"),a(" file for a “cordova” Object. Does it have “version”, “description” and/or “androidVersionCode”? If yes, it will use them.")]),n("li",null,[a("If not, then it looks into your "),n("code",{class:"doc-token"},"/package.json"),a(" for “cordovaId”, “version” and “description” fields.")])]),n(l(d),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1}),n("p",null,"Other options you can configure:"),n(l(d),null,{default:r(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(i)]),_:1})]}),_:1},w))}}},$=y.setup;y.setup=(h,g)=>{const k=q();return(k.modules||(k.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-cordova-apps/configuring-cordova.md"),$?$(h,g):void 0};const H=S(y,[["__file","configuring-cordova.md"]]);export{H as default};
