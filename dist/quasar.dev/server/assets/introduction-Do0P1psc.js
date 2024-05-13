import{mergeProps as A,withCtx as t,createTextVNode as o,createVNode as i,unref as f,useSSRContext as W}from"vue";import{ssrRenderComponent as l}from"vue/server-renderer";import{c as m}from"./page-utils-C-QWsEHe.js";import{D as P,a as n}from"./DocPage-DKr-0pQn.js";import{_ as $}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"introduction",__ssrInlineRender:!0,setup(v){const c=[{id:"what-is-required",title:"2. What is Required"},{id:"manifest-file",title:"3. Manifest File"},{id:"service-worker",title:"4. Service Worker"}];return(d,b,k,y)=>{b(l(P,A({title:"What is a PWA",desc:"(@quasar/app-webpack) Introduction on what a Progressive Web App is and how it can be configured in a Quasar app.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-pwa/introduction",toc:c},y),{default:t((S,r,p,e)=>{if(r)r(`<p${e}>A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an app-like experience to users. These apps meet certain requirements (see below), are deployed to web servers and accessible through URLs (on HTTPS protocol).</p><p${e}>This can work in conjunction with Cordova to provide a multiple deploy targets for all your users. Quasar CLI allows you to deploy your app as a PWA as well as a Mobile app and take advantage of both channels.</p><h2 id="what-is-required" class="doc-heading doc-h2"${e}>What is Required</h2><p${e}>To be considered a Progressive Web App, your app must be:</p><ul${e}><li${e}>Progressive - Work for every user, regardless of browser choice, because they are built with progressive enhancement as a core tenet.</li><li${e}>Responsive - Fit any form factor, desktop, mobile, tablet, or whatever is next.</li><li${e}>Connectivity independent - Enhanced with service workers to work offline or on low quality networks.</li><li${e}>App-like - Use the app-shell model to provide app-style navigation and interactions.</li><li${e}>Fresh - Always up-to-date thanks to the service worker update process.</li><li${e}>Safe - Served via HTTPS to prevent snooping and ensure content has not been tampered with.</li><li${e}>Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.</li><li${e}>Re-engageable - Make re-engagement easy through features like push notifications.</li><li${e}>Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.</li><li${e}>Linkable - Easily share via URL and not require complex installation.</li></ul><p${e}>More information available on Addy Osmani’s `),r(l(n,{to:"https://addyosmani.com/blog/getting-started-with-progressive-web-apps/"},{default:t((s,a,u,h)=>{if(a)a("article about PWA");else return[o("article about PWA")]}),_:1},p,e)),r(`.</p><h2 id="manifest-file" class="doc-heading doc-h2"${e}>Manifest File</h2><p${e}>An app manifest file describes the resources your app will need. This includes your app’s displayed name, icons, as well as splash screen. Quasar CLI configures this for you, but you can override any property from within the <code class="doc-token"${e}>/quasar.config</code> file. Learn how by visiting the `),r(l(n,{to:"/quasar-cli-webpack/developing-pwa/configuring-pwa"},{default:t((s,a,u,h)=>{if(a)a("Configure PWA");else return[o("Configure PWA")]}),_:1},p,e)),r(` documentation page.</p><p${e}>More information: `),r(l(n,{to:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},{default:t((s,a,u,h)=>{if(a)a("Manifest file");else return[o("Manifest file")]}),_:1},p,e)),r(`.</p><h2 id="service-worker" class="doc-heading doc-h2"${e}>Service Worker</h2><p${e}>The Service worker provides a programmatic way to cache app resources (files). The programmatic API allows developers to decide how to handle caching and provides a much more flexible experience than other options.</p><p${e}>More information: `),r(l(n,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},{default:t((s,a,u,h)=>{if(a)a("Service Worker API");else return[o("Service Worker API")]}),_:1},p,e)),r(".</p>");else return[i("p",null,"A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an app-like experience to users. These apps meet certain requirements (see below), are deployed to web servers and accessible through URLs (on HTTPS protocol)."),i("p",null,"This can work in conjunction with Cordova to provide a multiple deploy targets for all your users. Quasar CLI allows you to deploy your app as a PWA as well as a Mobile app and take advantage of both channels."),i("h2",{id:"what-is-required",class:"doc-heading doc-h2",onClick:s=>f(m)("what-is-required")},"What is Required",8,["onClick"]),i("p",null,"To be considered a Progressive Web App, your app must be:"),i("ul",null,[i("li",null,"Progressive - Work for every user, regardless of browser choice, because they are built with progressive enhancement as a core tenet."),i("li",null,"Responsive - Fit any form factor, desktop, mobile, tablet, or whatever is next."),i("li",null,"Connectivity independent - Enhanced with service workers to work offline or on low quality networks."),i("li",null,"App-like - Use the app-shell model to provide app-style navigation and interactions."),i("li",null,"Fresh - Always up-to-date thanks to the service worker update process."),i("li",null,"Safe - Served via HTTPS to prevent snooping and ensure content has not been tampered with."),i("li",null,"Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them."),i("li",null,"Re-engageable - Make re-engagement easy through features like push notifications."),i("li",null,"Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store."),i("li",null,"Linkable - Easily share via URL and not require complex installation.")]),i("p",null,[o("More information available on Addy Osmani’s "),i(n,{to:"https://addyosmani.com/blog/getting-started-with-progressive-web-apps/"},{default:t(()=>[o("article about PWA")]),_:1}),o(".")]),i("h2",{id:"manifest-file",class:"doc-heading doc-h2",onClick:s=>f(m)("manifest-file")},"Manifest File",8,["onClick"]),i("p",null,[o("An app manifest file describes the resources your app will need. This includes your app’s displayed name, icons, as well as splash screen. Quasar CLI configures this for you, but you can override any property from within the "),i("code",{class:"doc-token"},"/quasar.config"),o(" file. Learn how by visiting the "),i(n,{to:"/quasar-cli-webpack/developing-pwa/configuring-pwa"},{default:t(()=>[o("Configure PWA")]),_:1}),o(" documentation page.")]),i("p",null,[o("More information: "),i(n,{to:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},{default:t(()=>[o("Manifest file")]),_:1}),o(".")]),i("h2",{id:"service-worker",class:"doc-heading doc-h2",onClick:s=>f(m)("service-worker")},"Service Worker",8,["onClick"]),i("p",null,"The Service worker provides a programmatic way to cache app resources (files). The programmatic API allows developers to decide how to handle caching and provides a much more flexible experience than other options."),i("p",null,[o("More information: "),i(n,{to:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},{default:t(()=>[o("Service Worker API")]),_:1}),o(".")])]}),_:1},k))}}},g=w.setup;w.setup=(v,c)=>{const d=W();return(d.modules||(d.modules=new Set)).add("src/pages/quasar-cli-webpack/developing-pwa/introduction.md"),g?g(v,c):void 0};const z=$(w,[["__file","introduction.md"]]);export{z as default};
