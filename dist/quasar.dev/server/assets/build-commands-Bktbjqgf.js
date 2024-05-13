import{mergeProps as w,withCtx as t,unref as l,createVNode as a,createTextVNode as e,useSSRContext as x}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as $}from"./page-utils-C-QWsEHe.js";import{D}from"./DocPage-DKr-0pQn.js";import{D as m}from"./DocPrerender-DPOnWPFO.js";import{C as n}from"./CopyButton-l3ndfN49.js";import{_ as P}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const v={__name:"build-commands",__ssrInlineRender:!0,setup(f){const p=[{id:"developing",title:"2. Developing"},{id:"building-for-production",title:"3. Building for Production"}];return(b,h,q,C)=>{h(i(D,w({title:"SSR Build Commands",desc:"(@quasar/app-vite) The Quasar CLI list of commands when developing or building a server-side rendered app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-ssr/build-commands",toc:p},C),{default:t((B,o,g,d)=>{if(o)o(`<h2 id="developing" class="doc-heading doc-h2"${d}>Developing</h2>`),o(i(l(m),null,{default:t((u,s,c,r)=>{if(s)s(`<pre class="doc-code"${r}><code${r}>$ quasar dev <span class="token parameter variable"${r}>-m</span> ssr

<span class="token comment"${r}># ..or the longer form:</span>
$ quasar dev <span class="token parameter variable"${r}>--mode</span> ssr</code></pre>`),s(i(n,{lang:"bash"},null,c,r));else return[a("pre",{class:"doc-code"},[a("code",null,[e("$ quasar dev "),a("span",{class:"token parameter variable"},"-m"),e(` ssr

`),a("span",{class:"token comment"},"# ..or the longer form:"),e(`
$ quasar dev `),a("span",{class:"token parameter variable"},"--mode"),e(" ssr")])]),a(n,{lang:"bash"})]}),_:1},g,d)),o(`<h2 id="building-for-production" class="doc-heading doc-h2"${d}>Building for Production</h2>`),o(i(l(m),null,{default:t((u,s,c,r)=>{if(s)s(`<pre class="doc-code"${r}><code${r}>$ quasar build <span class="token parameter variable"${r}>-m</span> ssr

<span class="token comment"${r}># ..or the longer form:</span>
$ quasar build <span class="token parameter variable"${r}>--mode</span> ssr</code></pre>`),s(i(n,{lang:"bash"},null,c,r));else return[a("pre",{class:"doc-code"},[a("code",null,[e("$ quasar build "),a("span",{class:"token parameter variable"},"-m"),e(` ssr

`),a("span",{class:"token comment"},"# ..or the longer form:"),e(`
$ quasar build `),a("span",{class:"token parameter variable"},"--mode"),e(" ssr")])]),a(n,{lang:"bash"})]}),_:1},g,d)),o(`<p${d}>If you want a production build with debugging enabled:</p>`),o(i(l(m),null,{default:t((u,s,c,r)=>{if(s)s(`<pre class="doc-code"${r}><code${r}>$ quasar build <span class="token parameter variable"${r}>-m</span> ssr <span class="token parameter variable"${r}>-d</span>

<span class="token comment"${r}># ..or the longer form</span>
$ quasar build <span class="token parameter variable"${r}>-m</span> ssr <span class="token parameter variable"${r}>--debug</span></code></pre>`),s(i(n,{lang:"bash"},null,c,r));else return[a("pre",{class:"doc-code"},[a("code",null,[e("$ quasar build "),a("span",{class:"token parameter variable"},"-m"),e(" ssr "),a("span",{class:"token parameter variable"},"-d"),e(`

`),a("span",{class:"token comment"},"# ..or the longer form"),e(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),e(" ssr "),a("span",{class:"token parameter variable"},"--debug")])]),a(n,{lang:"bash"})]}),_:1},g,d));else return[a("h2",{id:"developing",class:"doc-heading doc-h2",onClick:u=>l($)("developing")},"Developing",8,["onClick"]),a(l(m),null,{default:t(()=>[a("pre",{class:"doc-code"},[a("code",null,[e("$ quasar dev "),a("span",{class:"token parameter variable"},"-m"),e(` ssr

`),a("span",{class:"token comment"},"# ..or the longer form:"),e(`
$ quasar dev `),a("span",{class:"token parameter variable"},"--mode"),e(" ssr")])]),a(n,{lang:"bash"})]),_:1}),a("h2",{id:"building-for-production",class:"doc-heading doc-h2",onClick:u=>l($)("building-for-production")},"Building for Production",8,["onClick"]),a(l(m),null,{default:t(()=>[a("pre",{class:"doc-code"},[a("code",null,[e("$ quasar build "),a("span",{class:"token parameter variable"},"-m"),e(` ssr

`),a("span",{class:"token comment"},"# ..or the longer form:"),e(`
$ quasar build `),a("span",{class:"token parameter variable"},"--mode"),e(" ssr")])]),a(n,{lang:"bash"})]),_:1}),a("p",null,"If you want a production build with debugging enabled:"),a(l(m),null,{default:t(()=>[a("pre",{class:"doc-code"},[a("code",null,[e("$ quasar build "),a("span",{class:"token parameter variable"},"-m"),e(" ssr "),a("span",{class:"token parameter variable"},"-d"),e(`

`),a("span",{class:"token comment"},"# ..or the longer form"),e(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),e(" ssr "),a("span",{class:"token parameter variable"},"--debug")])]),a(n,{lang:"bash"})]),_:1})]}),_:1},q))}}},k=v.setup;v.setup=(f,p)=>{const b=x();return(b.modules||(b.modules=new Set)).add("src/pages/quasar-cli-vite/developing-ssr/build-commands.md"),k?k(f,p):void 0};const G=P(v,[["__file","build-commands.md"]]);export{G as default};
