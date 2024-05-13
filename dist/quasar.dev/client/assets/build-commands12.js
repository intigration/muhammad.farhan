import{c as i}from"./_examples_frameless-electron-window.js";import{D as u,a as r}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as d}from"./CopyButton.js";import{_ as m}from"./index.js";import{b as g,d as b,w as n,h as e,f as s,e as a,i as o}from"./vendor.js";const h=e("pre",{class:"doc-code"},[e("code",null,[o("$ quasar dev "),e("span",{class:"token parameter variable"},"-m"),o(` pwa

`),e("span",{class:"token comment"},"# ..or the longer form:"),o(`
$ quasar dev `),e("span",{class:"token parameter variable"},"--mode"),o(" pwa")])],-1),_={class:"doc-note doc-note--warning"},f=e("p",{class:"doc-note__title"},"WARNING",-1),v={class:"doc-note doc-note--danger"},k=e("p",{class:"doc-note__title"},"WARNING",-1),w=e("pre",{class:"doc-code"},[e("code",null,[o("$ quasar build "),e("span",{class:"token parameter variable"},"-m"),o(` pwa

`),e("span",{class:"token comment"},"# ..or the longer form:"),o(`
$ quasar build `),e("span",{class:"token parameter variable"},"--mode"),o(" pwa")])],-1),q=e("p",null,"If you want a production build with debugging enabled:",-1),C=e("pre",{class:"doc-code"},[e("code",null,[o("$ quasar build "),e("span",{class:"token parameter variable"},"-m"),o(" pwa "),e("span",{class:"token parameter variable"},"-d"),o(`

`),e("span",{class:"token comment"},"# ..or the longer form"),o(`
$ quasar build `),e("span",{class:"token parameter variable"},"-m"),o(" pwa "),e("span",{class:"token parameter variable"},"--debug")])],-1),D={__name:"build-commands",setup($){const c=[{id:"developing",title:"2. Developing"},{id:"building-for-production",title:"3. Building for Production"}];return(B,t)=>(g(),b(u,{title:"PWA Build Commands",desc:"(@quasar/app-webpack) The Quasar CLI list of commands when developing or building a Progressive Web App.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-pwa/build-commands",toc:c},{default:n(()=>[e("h2",{id:"developing",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=p=>s(i)("developing"))},"Developing"),a(s(l),null,{default:n(()=>[h,a(d,{lang:"bash"})]),_:1}),e("div",_,[f,e("p",null,[o("Do not miss the "),a(r,{to:"/quasar-cli-webpack/developing-pwa/hmr-for-dev"},{default:n(()=>[o("HMR for PWA")]),_:1}),o(" (Hot Module Reload) page.")])]),e("div",v,[k,e("p",null,[o("Do not run "),a(r,{to:"https://developers.google.com/web/tools/lighthouse/"},{default:n(()=>[o("Lighthouse")]),_:1}),o(" on your development build because at this stage the code is intentionally not optimized and contains embedded source maps (among many other things).")])]),e("h2",{id:"building-for-production",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=p=>s(i)("building-for-production"))},"Building for Production"),a(s(l),null,{default:n(()=>[w,a(d,{lang:"bash"})]),_:1}),q,a(s(l),null,{default:n(()=>[C,a(d,{lang:"bash"})]),_:1})]),_:1}))}},I=m(D,[["__file","build-commands.md"]]);export{I as default};
