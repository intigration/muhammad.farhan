import{resolveComponent as Q,mergeProps as M,withCtx as t,createTextVNode as a,unref as k,createVNode as e,useSSRContext as L}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as v}from"./page-utils-C-QWsEHe.js";import{D as j,a as m}from"./DocPage-DKr-0pQn.js";import{D as b}from"./DocPrerender-DPOnWPFO.js";import{C as l}from"./CopyButton-l3ndfN49.js";import{_ as Y}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const w={__name:"quick-start",__ssrInlineRender:!0,setup(P){const y=[{id:"prerequisites",title:"2. Prerequisites"},{id:"step-1-create-a-project",title:"3. Step 1: Create a Project"},{id:"optional-install-the-global-cli",title:"3.1. Optional - Install the Global CLI",sub:!0},{id:"step-2-start-developing",title:"4. Step 2: Start developing"},{id:"now-what",title:"5. Now What?"}];return(q,S,x,N)=>{const u=Q("q-tab-panel");S(i(j,M({title:"Quick Start",desc:"Get up and developing a Quasar app in less than 3 minutes.",heading:"","edit-link":"start/quick-start",toc:y},N),{default:t((D,d,h,o)=>{if(d)d(`<p${o}>It takes two easy steps and in a couple of minutes, you are off and running with a full-fledged Vue app, built with state-of-the-art best practices via Quasar’s CLI and also ready with Quasar’s own powerful UI library.</p><div class="doc-note doc-note--tip"${o}><p class="doc-note__title"${o}>TIP</p><p${o}>If you are a more advanced Vue developer, we invite you to start off by `),d(i(m,{to:"/start/pick-quasar-flavour"},{default:t((f,s,p,c)=>{if(s)s("deciding between all Quasar flavours");else return[a("deciding between all Quasar flavours")]}),_:1},h,o)),d(`.</p></div><h2 id="prerequisites" class="doc-heading doc-h2"${o}>Prerequisites</h2><p${o}>Make sure that you have Node &gt;=14 (or any newer <strong${o}>LTS Node.js version</strong>) and NPM &gt;=6.14.12 or Yarn &gt;= 1.21.1 installed on your machine. Please do not use any odd versions of Node, as these are `),d(i(m,{to:"https://nodejs.org/en/about/previous-releases"},{default:t((f,s,p,c)=>{if(s)s("considered experimental");else return[a("considered experimental")]}),_:1},h,o)),d(`.</p><h2 id="step-1-create-a-project" class="doc-heading doc-h2"${o}>Step 1: Create a Project</h2><p${o}>Enter the following command:</p>`),d(i(k(b),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:t((f,s,p,c)=>{if(s)s(i(u,{class:"q-pa-none",name:"Yarn"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}>$ <span class="token function"${n}>yarn</span> create quasar</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"yarn"),a(" create quasar")])]),e(l,{lang:"bash"})]}),_:1},p,c)),s(i(u,{class:"q-pa-none",name:"NPM"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}>$ <span class="token function"${n}>npm</span> init quasar</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"npm"),a(" init quasar")])]),e(l,{lang:"bash"})]}),_:1},p,c)),s(i(u,{class:"q-pa-none",name:"PNPM"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}><span class="token comment"${n}># experimental support</span>
$ <span class="token function"${n}>pnpm</span> create quasar</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ `),e("span",{class:"token function"},"pnpm"),a(" create quasar")])]),e(l,{lang:"bash"})]}),_:1},p,c)),s(i(u,{class:"q-pa-none",name:"Bun"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}><span class="token comment"${n}># experimental support</span>
$ bun create quasar</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),e(l,{lang:"bash"})]}),_:1},p,c));else return[e(u,{class:"q-pa-none",name:"Yarn"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"yarn"),a(" create quasar")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"NPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"npm"),a(" init quasar")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"PNPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ `),e("span",{class:"token function"},"pnpm"),a(" create quasar")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"Bun"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),e(l,{lang:"bash"})]),_:1})]}),_:1},h,o)),d(`<p${o}>As the <code class="doc-token"${o}>create</code> or <code class="doc-token"${o}>init</code> command runs, you’ll be prompted with some options. Depending on your needs, you can select the CLI type (Vite or Webpack) and you can add things like TypeScript support or a different CSS preprocessor. If you are unsure about any of the options, just take the defaults (hit enter) and you’ll be good to go. You can change the options, except for the CLI type, later if you wish.</p><h3 id="optional-install-the-global-cli" class="doc-heading doc-h3"${o}>Optional - Install the Global CLI</h3><p${o}>For doing more with Quasar, you should also install the global CLI. With it you can directly run Quasar commands in the terminal, run a local http server for testing or do upgrades on your project.</p>`),d(i(k(b),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:t((f,s,p,c)=>{if(s)s(i(u,{class:"q-pa-none",name:"Yarn"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}>$ <span class="token function"${n}>yarn</span> global <span class="token function"${n}>add</span> @quasar/cli</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"yarn"),a(" global "),e("span",{class:"token function"},"add"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]}),_:1},p,c)),s(i(u,{class:"q-pa-none",name:"NPM"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}>$ <span class="token function"${n}>npm</span> i <span class="token parameter variable"${n}>-g</span> @quasar/cli</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"npm"),a(" i "),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]}),_:1},p,c)),s(i(u,{class:"q-pa-none",name:"PNPM"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}><span class="token comment"${n}># experimental support</span>
$ <span class="token function"${n}>pnpm</span> <span class="token function"${n}>add</span> <span class="token parameter variable"${n}>-g</span> @quasar/cli</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ `),e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"add"),a(),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]}),_:1},p,c)),s(i(u,{class:"q-pa-none",name:"Bun"},{default:t(($,r,g,n)=>{if(r)r(`<pre class="doc-code"${n}><code${n}><span class="token comment"${n}># experimental support</span>
$ bun <span class="token function"${n}>install</span> <span class="token parameter variable"${n}>-g</span> @quasar/cli</code></pre>`),r(i(l,{lang:"bash"},null,g,n));else return[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ bun `),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]}),_:1},p,c));else return[e(u,{class:"q-pa-none",name:"Yarn"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"yarn"),a(" global "),e("span",{class:"token function"},"add"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"NPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"npm"),a(" i "),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"PNPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ `),e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"add"),a(),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"Bun"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ bun `),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1})]}),_:1},h,o)),d(`<h2 id="step-2-start-developing" class="doc-heading doc-h2"${o}>Step 2: Start developing</h2><p${o}>For the second and last step, navigate into the newly created project folder and run the Quasar CLI command to start the dev server.</p>`),d(i(k(b),null,{default:t((f,s,p,c)=>{if(s)s(`<pre class="doc-code"${c}><code${c}>$ <span class="token builtin class-name"${c}>cd</span> <span class="token operator"${c}>&lt;</span>project_folder_name<span class="token operator"${c}>&gt;</span>
<span class="token comment"${c}># then run:</span>

<span class="token comment"${c}># if you have the global CLI:</span>
$ quasar dev
<span class="token comment"${c}># otherwise:</span>
$ <span class="token function"${c}>yarn</span> quasar dev <span class="token comment"${c}># or: npx quasar dev</span></code></pre>`),s(i(l,{lang:"bash"},null,p,c));else return[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token builtin class-name"},"cd"),a(),e("span",{class:"token operator"},"<"),a("project_folder_name"),e("span",{class:"token operator"},">"),a(`
`),e("span",{class:"token comment"},"# then run:"),a(`

`),e("span",{class:"token comment"},"# if you have the global CLI:"),a(`
$ quasar dev
`),e("span",{class:"token comment"},"# otherwise:"),a(`
$ `),e("span",{class:"token function"},"yarn"),a(" quasar dev "),e("span",{class:"token comment"},"# or: npx quasar dev")])]),e(l,{lang:"bash"})]}),_:1},h,o)),d(`<p${o}>You’ll see the dev server compiling your new application and once it is finished, your new app should open up in your browser. That’s it! You can now develop your app with your favorite IDE/ Code Editor.</p><h2 id="now-what" class="doc-heading doc-h2"${o}>Now What?</h2><p${o}>If you are new to Quasar and a…</p><p${o}><strong${o}>(Beginner Vue) JavaScript Dev</strong> - We highly recommend `),d(i(m,{to:"/start/how-to-use-vue"},{default:t((f,s,p,c)=>{if(s)s("learning Vue");else return[a("learning Vue")]}),_:1},h,o)),d(`.</p><p${o}><strong${o}>Intermediate Vue Dev</strong> - We recommend getting accustomed to `),d(i(m,{to:"/quasar-cli/directory-structure"},{default:t((f,s,p,c)=>{if(s)s("Quasar’s Directory Structure");else return[a("Quasar’s Directory Structure")]}),_:1},h,o)),d(" and its different build modes, "),d(i(m,{to:"/quasar-cli/developing-ssr/introduction"},{default:t((f,s,p,c)=>{if(s)s("starting with SSR");else return[a("starting with SSR")]}),_:1},h,o)),d(` (the project you built is an SPA).</p><p${o}><strong${o}>Advanced Vue Dev</strong> - You might want to use Quasar in different scenarios outside of Quasar’s own CLI, then check out the different `),d(i(m,{to:"/start/pick-quasar-flavour"},{default:t((f,s,p,c)=>{if(s)s("Quasar Flavours");else return[a("Quasar Flavours")]}),_:1},h,o)),d(". Or, if you wish to stick with the Quasar CLI, check out the different build modes, "),d(i(m,{to:"/quasar-cli/developing-ssr/introduction"},{default:t((f,s,p,c)=>{if(s)s("starting with SSR");else return[a("starting with SSR")]}),_:1},h,o)),d(" and please be sure not to miss out on "),d(i(m,{to:"/app-extensions/introduction"},{default:t((f,s,p,c)=>{if(s)s("App Extensions");else return[a("App Extensions")]}),_:1},h,o)),d(".</p>");else return[e("p",null,"It takes two easy steps and in a couple of minutes, you are off and running with a full-fledged Vue app, built with state-of-the-art best practices via Quasar’s CLI and also ready with Quasar’s own powerful UI library."),e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[a("If you are a more advanced Vue developer, we invite you to start off by "),e(m,{to:"/start/pick-quasar-flavour"},{default:t(()=>[a("deciding between all Quasar flavours")]),_:1}),a(".")])]),e("h2",{id:"prerequisites",class:"doc-heading doc-h2",onClick:f=>k(v)("prerequisites")},"Prerequisites",8,["onClick"]),e("p",null,[a("Make sure that you have Node >=14 (or any newer "),e("strong",null,"LTS Node.js version"),a(") and NPM >=6.14.12 or Yarn >= 1.21.1 installed on your machine. Please do not use any odd versions of Node, as these are "),e(m,{to:"https://nodejs.org/en/about/previous-releases"},{default:t(()=>[a("considered experimental")]),_:1}),a(".")]),e("h2",{id:"step-1-create-a-project",class:"doc-heading doc-h2",onClick:f=>k(v)("step-1-create-a-project")},"Step 1: Create a Project",8,["onClick"]),e("p",null,"Enter the following command:"),e(k(b),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:t(()=>[e(u,{class:"q-pa-none",name:"Yarn"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"yarn"),a(" create quasar")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"NPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"npm"),a(" init quasar")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"PNPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ `),e("span",{class:"token function"},"pnpm"),a(" create quasar")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"Bun"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ bun create quasar`)])]),e(l,{lang:"bash"})]),_:1})]),_:1}),e("p",null,[a("As the "),e("code",{class:"doc-token"},"create"),a(" or "),e("code",{class:"doc-token"},"init"),a(" command runs, you’ll be prompted with some options. Depending on your needs, you can select the CLI type (Vite or Webpack) and you can add things like TypeScript support or a different CSS preprocessor. If you are unsure about any of the options, just take the defaults (hit enter) and you’ll be good to go. You can change the options, except for the CLI type, later if you wish.")]),e("h3",{id:"optional-install-the-global-cli",class:"doc-heading doc-h3",onClick:f=>k(v)("optional-install-the-global-cli")},"Optional - Install the Global CLI",8,["onClick"]),e("p",null,"For doing more with Quasar, you should also install the global CLI. With it you can directly run Quasar commands in the terminal, run a local http server for testing or do upgrades on your project."),e(k(b),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:t(()=>[e(u,{class:"q-pa-none",name:"Yarn"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"yarn"),a(" global "),e("span",{class:"token function"},"add"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"NPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token function"},"npm"),a(" i "),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"PNPM"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ `),e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"add"),a(),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1}),e(u,{class:"q-pa-none",name:"Bun"},{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token comment"},"# experimental support"),a(`
$ bun `),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-g"),a(" @quasar/cli")])]),e(l,{lang:"bash"})]),_:1})]),_:1}),e("h2",{id:"step-2-start-developing",class:"doc-heading doc-h2",onClick:f=>k(v)("step-2-start-developing")},"Step 2: Start developing",8,["onClick"]),e("p",null,"For the second and last step, navigate into the newly created project folder and run the Quasar CLI command to start the dev server."),e(k(b),null,{default:t(()=>[e("pre",{class:"doc-code"},[e("code",null,[a("$ "),e("span",{class:"token builtin class-name"},"cd"),a(),e("span",{class:"token operator"},"<"),a("project_folder_name"),e("span",{class:"token operator"},">"),a(`
`),e("span",{class:"token comment"},"# then run:"),a(`

`),e("span",{class:"token comment"},"# if you have the global CLI:"),a(`
$ quasar dev
`),e("span",{class:"token comment"},"# otherwise:"),a(`
$ `),e("span",{class:"token function"},"yarn"),a(" quasar dev "),e("span",{class:"token comment"},"# or: npx quasar dev")])]),e(l,{lang:"bash"})]),_:1}),e("p",null,"You’ll see the dev server compiling your new application and once it is finished, your new app should open up in your browser. That’s it! You can now develop your app with your favorite IDE/ Code Editor."),e("h2",{id:"now-what",class:"doc-heading doc-h2",onClick:f=>k(v)("now-what")},"Now What?",8,["onClick"]),e("p",null,"If you are new to Quasar and a…"),e("p",null,[e("strong",null,"(Beginner Vue) JavaScript Dev"),a(" - We highly recommend "),e(m,{to:"/start/how-to-use-vue"},{default:t(()=>[a("learning Vue")]),_:1}),a(".")]),e("p",null,[e("strong",null,"Intermediate Vue Dev"),a(" - We recommend getting accustomed to "),e(m,{to:"/quasar-cli/directory-structure"},{default:t(()=>[a("Quasar’s Directory Structure")]),_:1}),a(" and its different build modes, "),e(m,{to:"/quasar-cli/developing-ssr/introduction"},{default:t(()=>[a("starting with SSR")]),_:1}),a(" (the project you built is an SPA).")]),e("p",null,[e("strong",null,"Advanced Vue Dev"),a(" - You might want to use Quasar in different scenarios outside of Quasar’s own CLI, then check out the different "),e(m,{to:"/start/pick-quasar-flavour"},{default:t(()=>[a("Quasar Flavours")]),_:1}),a(". Or, if you wish to stick with the Quasar CLI, check out the different build modes, "),e(m,{to:"/quasar-cli/developing-ssr/introduction"},{default:t(()=>[a("starting with SSR")]),_:1}),a(" and please be sure not to miss out on "),e(m,{to:"/app-extensions/introduction"},{default:t(()=>[a("App Extensions")]),_:1}),a(".")])]}),_:1},x))}}},C=w.setup;w.setup=(P,y)=>{const q=L();return(q.modules||(q.modules=new Set)).add("src/pages/start/quick-start.md"),C?C(P,y):void 0};const K=Y(w,[["__file","quick-start.md"]]);export{K as default};
