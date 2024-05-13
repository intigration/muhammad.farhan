import{resolveComponent as q,mergeProps as x,withCtx as p,createTextVNode as a,unref as u,createVNode as n,useSSRContext as j}from"vue";import{ssrRenderComponent as r}from"vue/server-renderer";import{c as $}from"./page-utils-C-QWsEHe.js";import{D as R,a as y}from"./DocPage-DKr-0pQn.js";import{D as v}from"./DocTree-Kz2iQlb5.js";import{D as i}from"./DocPrerender-DPOnWPFO.js";import{C as l}from"./CopyButton-l3ndfN49.js";import{_ as T}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const d={__name:"routing-with-layouts-and-pages",__ssrInlineRender:!0,setup(w){const f=[{id:"creating-files",title:"2. Creating Files"},{id:"defining-routes",title:"3. Defining Routes"},{id:"nested-routes",title:"4. Nested Routes"}],m={tree:{l:"src",c:[{l:"layouts",c:[{l:"User.vue",e:"our QLayout definition"}]},{l:"pages",c:[{l:"Posts.vue",e:"page for /user/feed route"},{l:"Profile.vue",e:"page for /user/profile route"}]}]}};return(Q,b,L,U)=>{const h=q("q-separator");b(r(R,x({title:"Routing with Layouts and Pages",desc:"How to connect the Vue Router with your Quasar layouts and pages.",heading:"","edit-link":"layout/routing-with-layouts-and-pages",toc:f},U),{default:p((C,o,k,t)=>{if(o)o(`<p${t}>You can benefit from Vue Router’s capabilities while structuring your routes with a Quasar Layout. The information below is just a recommendation and not mandatory to follow. Quasar allows you full freedom. Take the lines below only as an example.</p><p${t}>`),o(r(y,{to:"/layout/layout"},{default:p((g,e,c,s)=>{if(e)e("QLayout");else return[a("QLayout")]}),_:1},k,t)),o(" is the component used to encapsulate pages, so that multiple pages will share the same header, drawers and so on. However, you can also configure per page header/footer/drawers, but they all must be children of the QLayout component. In order to understand how this works, you need a little bit of reading on "),o(r(y,{to:"https://router.vuejs.org/guide/essentials/nested-routes.html"},{default:p((g,e,c,s)=>{if(e)e("Vue Router nested routes");else return[a("Vue Router nested routes")]}),_:1},k,t)),o(`.</p><p${t}>To make it more clear, let’s take an example. We have one layout (‘user’) and two pages (‘user-feed’ and ‘user-profile’). We want to configure the website/app routes like this: <code class="doc-token"${t}>/user/feed</code> and <code class="doc-token"${t}>/user/profile</code>.</p><h2 id="creating-files" class="doc-heading doc-h2"${t}>Creating Files</h2><p${t}><strong${t}>Quasar does not enforce a specific folder structure</strong>. The following is just an example. You can put layouts and pages together in a folder, or put pages in your specific folder structure of choice, or create your own layout and page folders. It doesn’t matter for Quasar. All that matters is that you reference them correctly in <code class="doc-token"${t}>/src/router/routes.js</code>.</p><p${t}>Let’s create the layout and page files. You can use a helper command of Quasar CLI or simply create them yourself.</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}>$ quasar new layout User
 app:new Generated layout: src/layouts/User.vue +0ms
 app:new Make sure to reference it <span class="token keyword"${s}>in</span> src/router/routes.js +2ms

$ quasar new page Profile Posts
 app:new Generated page: src/pages/Profile.vue +0ms
 app:new Make sure to reference it <span class="token keyword"${s}>in</span> src/router/routes.js +2ms

 app:new Generated page: src/pages/Posts.vue +1ms
 app:new Make sure to reference it <span class="token keyword"${s}>in</span> src/router/routes.js +0ms</code></pre>`),e(r(l,{lang:"bash"},null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`$ quasar new layout User
 app:new Generated layout: src/layouts/User.vue +0ms
 app:new Make sure to reference it `),n("span",{class:"token keyword"},"in"),a(` src/router/routes.js +2ms

$ quasar new page Profile Posts
 app:new Generated page: src/pages/Profile.vue +0ms
 app:new Make sure to reference it `),n("span",{class:"token keyword"},"in"),a(` src/router/routes.js +2ms

 app:new Generated page: src/pages/Posts.vue +1ms
 app:new Make sure to reference it `),n("span",{class:"token keyword"},"in"),a(" src/router/routes.js +0ms")])]),n(l,{lang:"bash"})]}),_:1},k,t)),o(`<p${t}>The commands above create the following folder structure:</p>`),o(r(v,{def:m.tree},null,k,t)),o(`<h2 id="defining-routes" class="doc-heading doc-h2"${t}>Defining Routes</h2><p${t}>Your Pages (<code class="doc-token"${t}>/src/pages</code>) and Layouts (<code class="doc-token"${t}>/src/layouts</code>) are injected into your website/app (and also managed) through Vue Router in <code class="doc-token"${t}>/src/router/routes.js</code>. Each Page and Layout needs to be referenced there.</p><p${t}>Example of <code class="doc-token"${t}>routes.js</code> using lazy-loading:</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// we define our routes in this file</span>

<span class="token keyword"${s}>import</span> LandingPage <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;pages/Landing&#39;</span>

<span class="token keyword"${s}>const</span> routes <span class="token operator"${s}>=</span> <span class="token punctuation"${s}>[</span>
  <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> LandingPage
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>]</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> routes</code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we define our routes in this file"),a(`

`),n("span",{class:"token keyword"},"import"),a(" LandingPage "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/Landing'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` LandingPage
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(" routes")])]),n(l)]}),_:1},k,t)),o(`<p${t}>Example of <code class="doc-token"${t}>routes.js</code> using on-demand loading:</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// we define our routes in this file</span>

<span class="token keyword"${s}>const</span> routes <span class="token operator"${s}>=</span> <span class="token punctuation"${s}>[</span>
  <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/&#39;</span><span class="token punctuation"${s}>,</span>
    <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;pages/Landing&#39;</span><span class="token punctuation"${s}>)</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>]</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> routes</code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we define our routes in this file"),a(`

`),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/Landing'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(" routes")])]),n(l)]}),_:1},k,t)),o(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>More in-depth analysis of Lazy loading / code-splitting with `),o(r(y,{to:"/quasar-cli-vite/lazy-loading"},{default:p((g,e,c,s)=>{if(e)e("@quasar/app-vite");else return[a("@quasar/app-vite")]}),_:1},k,t)),o(" or "),o(r(y,{to:"/quasar-cli-webpack/lazy-loading"},{default:p((g,e,c,s)=>{if(e)e("@quasar/app-webpack");else return[a("@quasar/app-webpack")]}),_:1},k,t)),o(`.</p></div><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Configuring routes to use Layouts and Pages basically consists of correctly nesting routes, as we’ll see in the next section.</p></div><h2 id="nested-routes" class="doc-heading doc-h2"${t}>Nested Routes</h2><p${t}>Real app UIs are usually composed of components that are nested multiple levels deep. It is also very common that the segments of a URL corresponds to a certain structure of nested components, for example:</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}>/user/profile                   /user/posts
+------------------+            +-----------------+
| User             |            | User            |
| +--------------+ |            | +-------------+ |
| | Profile      | |  +------&gt;  | | Posts       | |
| |              | |            | |             | |
| +--------------+ |            | +-------------+ |
+------------------+            +-----------------+</code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,`/user/profile                   /user/posts
+------------------+            +-----------------+
| User             |            | User            |
| +--------------+ |            | +-------------+ |
| | Profile      | |  +------>  | | Posts       | |
| |              | |            | |             | |
| +--------------+ |            | +-------------+ |
+------------------+            +-----------------+`)]),n(l)]}),_:1},k,t)),o(`<p${t}>With Vue Router, it is very simple to express this relationship using nested route configurations. We notice some things: both pages need to be wrapped by a User component. Hey, User component is then a Layout!</p><p${t}>Since User layout wraps inner pages, they need an injection point. This is supplied by the <code class="doc-token"${t}>&lt;router-view&gt;</code> component:</p>`),o(r(u(i),{title:"/src/layouts/User.vue"},{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-layout</span><span class="token punctuation"${s}>&gt;</span></span>
    ...

    <span class="token comment"${s}>&lt;!-- this is where the Pages are injected --&gt;</span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-page-container</span><span class="token punctuation"${s}>&gt;</span></span>
      <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>router-view</span><span class="token punctuation"${s}>&gt;</span></span><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>router-view</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-page-container</span><span class="token punctuation"${s}>&gt;</span></span>

    ...
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-layout</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-layout")]),n("span",{class:"token punctuation"},">")]),a(`
    ...

    `),n("span",{class:"token comment"},"<!-- this is where the Pages are injected -->"),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-view")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("router-view")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`

    ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-layout")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},k,t)),o(r(u(i),{title:"/src/pages/Profile.vue or Posts.vue"},{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>template</span><span class="token punctuation"${s}>&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-page</span><span class="token punctuation"${s}>&gt;</span></span>
    ...page content...
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-page</span><span class="token punctuation"${s}>&gt;</span></span>
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>template</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page")]),n("span",{class:"token punctuation"},">")]),a(`
    ...page content...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},k,t)),o(`<p${t}>Our example has some routes specified (/user/profile and /user/posts). <strong${t}>So how can we put everything together now?</strong> We edit the routes file. That’s where we will configure routes, tell which components are Layouts and which are Pages and also reference/import them into our app:</p>`),o(r(u(i),{title:"src/router/routes.js"},{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> User <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;layouts/User&#39;</span>
<span class="token keyword"${s}>import</span> Profile <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;pages/Profile&#39;</span>
<span class="token keyword"${s}>import</span> Posts <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;pages/Posts&#39;</span>

<span class="token keyword"${s}>const</span> routes <span class="token operator"${s}>=</span> <span class="token punctuation"${s}>[</span>
  <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/user&#39;</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// we use /src/layouts/User component which is imported above</span>
    <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> User<span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// hey, it has children routes and User has &lt;router-view&gt; in it;</span>
    <span class="token comment"${s}>// It is really a Layout then!</span>
    <span class="token literal-property property"${s}>children</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
      <span class="token comment"${s}>// Profile page</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;profile&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// here it is, route /user/profile</span>
        <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> Profile <span class="token comment"${s}>// we reference /src/pages/Profile.vue imported above</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>

      <span class="token comment"${s}>// Posts page</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;posts&#39;</span><span class="token punctuation"${s}>,</span> <span class="token comment"${s}>// here it is, route /user/posts</span>
        <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> Posts <span class="token comment"${s}>// we reference /src/pages/Posts.vue imported above</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>]</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>]</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> routes</code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" User "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'layouts/User'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" Profile "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/Profile'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" Posts "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/Posts'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// we use /src/layouts/User component which is imported above"),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" User"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// hey, it has children routes and User has <router-view> in it;"),a(`
    `),n("span",{class:"token comment"},"// It is really a Layout then!"),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token comment"},"// Profile page"),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'profile'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// here it is, route /user/profile"),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" Profile "),n("span",{class:"token comment"},"// we reference /src/pages/Profile.vue imported above"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// Posts page"),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'posts'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// here it is, route /user/posts"),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" Posts "),n("span",{class:"token comment"},"// we reference /src/pages/Posts.vue imported above"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(" routes")])]),n(l)]}),_:1},k,t)),o(`<div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Note that nested paths that start with <code class="doc-token"${t}>/</code> will be treated as a root path. This allows you to leverage component nesting without having to use a nested URL.</p></div><p${t}>Our routes configuration (<code class="doc-token"${t}>/src/router/routes.js</code>) should look like this:</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>[</span>
  <span class="token punctuation"${s}>{</span>
    <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/user&#39;</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// We point it to our component</span>
    <span class="token comment"${s}>// where we defined our QLayout</span>
    <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;layouts/user&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>

    <span class="token comment"${s}>// Now we define the sub-routes.</span>
    <span class="token comment"${s}>// These are getting injected into</span>
    <span class="token comment"${s}>// layout (from above) automatically</span>
    <span class="token comment"${s}>// by using &lt;router-view&gt; placeholder</span>
    <span class="token comment"${s}>// (need to specify it in layout)</span>
    <span class="token literal-property property"${s}>children</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;feed&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;pages/user-feed&#39;</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
      <span class="token punctuation"${s}>{</span>
        <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;profile&#39;</span><span class="token punctuation"${s}>,</span>
        <span class="token function-variable function"${s}>component</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span> <span class="token operator"${s}>=&gt;</span> <span class="token keyword"${s}>import</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;pages/user-profile&#39;</span><span class="token punctuation"${s}>)</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>]</span>
  <span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>]</span></code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// We point it to our component"),a(`
    `),n("span",{class:"token comment"},"// where we defined our QLayout"),a(`
    `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'layouts/user'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// Now we define the sub-routes."),a(`
    `),n("span",{class:"token comment"},"// These are getting injected into"),a(`
    `),n("span",{class:"token comment"},"// layout (from above) automatically"),a(`
    `),n("span",{class:"token comment"},"// by using <router-view> placeholder"),a(`
    `),n("span",{class:"token comment"},"// (need to specify it in layout)"),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'feed'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/user-feed'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'profile'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/user-profile'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(l)]}),_:1},k,t)),o(`<p${t}>Please notice a few things:</p><ul${t}><li${t}><p${t}>We are using lazy loading of layouts and pages (<code class="doc-token"${t}>() =&gt; import(&lt;path&gt;)</code>). If your website/app is small, then you can skip the lazy loading benefits as they could add more overhead than what it’s worth:</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>import</span> UserLayout <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;layouts/user&#39;</span>
<span class="token keyword"${s}>import</span> UserFeed <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;pages/user-feed&#39;</span>
<span class="token keyword"${s}>import</span> UserProfile <span class="token keyword"${s}>from</span> <span class="token string"${s}>&#39;pages/user-profile&#39;</span>

<span class="token keyword"${s}>export</span> <span class="token keyword"${s}>default</span> <span class="token punctuation"${s}>[</span>
  <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;/user&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> UserLayout<span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>children</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span>
    <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;feed&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> UserFeed <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
    <span class="token punctuation"${s}>{</span> <span class="token literal-property property"${s}>path</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;profile&#39;</span><span class="token punctuation"${s}>,</span> <span class="token literal-property property"${s}>component</span><span class="token operator"${s}>:</span> UserProfile <span class="token punctuation"${s}>}</span>
  <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>]</span></code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" UserLayout "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'layouts/user'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" UserFeed "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/user-feed'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" UserProfile "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/user-profile'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" UserLayout"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'feed'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" UserFeed "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'profile'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" UserProfile "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(l)]}),_:1},k,t)),o(`</li><li${t}><p${t}>Quasar provides some out of the box Webpack aliases (‘layouts’ which points to ‘/src/layouts’ and ‘pages’ which points to ‘/src/pages’), which are used in the above examples.</p></li><li${t}><p${t}>Pages of a Layout are declared as children of it in the Vue Router configuration so that <code class="doc-token"${t}>&lt;router-view/&gt;</code> will know what page component to inject. Remember to always use this Vue component whenever your Layout has pages attached to it.</p>`),o(r(u(i),null,{default:p((g,e,c,s)=>{if(e)e(`<pre class="doc-code"${s}><code${s}><span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-layout</span><span class="token punctuation"${s}>&gt;</span></span>
  ...
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>q-page-container</span><span class="token punctuation"${s}>&gt;</span></span>
    <span class="token comment"${s}>&lt;!--
      This is where your pages will get
      injected into your Layout
    --&gt;</span>
    <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;</span>router-view</span> <span class="token punctuation"${s}>/&gt;</span></span>
  <span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-page-container</span><span class="token punctuation"${s}>&gt;</span></span>
  ...
<span class="token tag"${s}><span class="token tag"${s}><span class="token punctuation"${s}>&lt;/</span>q-layout</span><span class="token punctuation"${s}>&gt;</span></span></code></pre>`),e(r(l,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-layout")]),n("span",{class:"token punctuation"},">")]),a(`
  ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token comment"},`<!--
      This is where your pages will get
      injected into your Layout
    -->`),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-view")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`
  ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-layout")]),n("span",{class:"token punctuation"},">")])])]),n(l)]}),_:1},k,t)),o("</li></ul>"),o(r(h,{class:"q-mt-xl"},null,k,t)),o(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Please check `),o(r(y,{to:"https://router.vuejs.org/"},{default:p((g,e,c,s)=>{if(e)e("Vue Router");else return[a("Vue Router")]}),_:1},k,t)),o(" documentation to fully understand the examples above and how to configure the router and its routes for your app.</p></div>");else return[n("p",null,"You can benefit from Vue Router’s capabilities while structuring your routes with a Quasar Layout. The information below is just a recommendation and not mandatory to follow. Quasar allows you full freedom. Take the lines below only as an example."),n("p",null,[n(y,{to:"/layout/layout"},{default:p(()=>[a("QLayout")]),_:1}),a(" is the component used to encapsulate pages, so that multiple pages will share the same header, drawers and so on. However, you can also configure per page header/footer/drawers, but they all must be children of the QLayout component. In order to understand how this works, you need a little bit of reading on "),n(y,{to:"https://router.vuejs.org/guide/essentials/nested-routes.html"},{default:p(()=>[a("Vue Router nested routes")]),_:1}),a(".")]),n("p",null,[a("To make it more clear, let’s take an example. We have one layout (‘user’) and two pages (‘user-feed’ and ‘user-profile’). We want to configure the website/app routes like this: "),n("code",{class:"doc-token"},"/user/feed"),a(" and "),n("code",{class:"doc-token"},"/user/profile"),a(".")]),n("h2",{id:"creating-files",class:"doc-heading doc-h2",onClick:g=>u($)("creating-files")},"Creating Files",8,["onClick"]),n("p",null,[n("strong",null,"Quasar does not enforce a specific folder structure"),a(". The following is just an example. You can put layouts and pages together in a folder, or put pages in your specific folder structure of choice, or create your own layout and page folders. It doesn’t matter for Quasar. All that matters is that you reference them correctly in "),n("code",{class:"doc-token"},"/src/router/routes.js"),a(".")]),n("p",null,"Let’s create the layout and page files. You can use a helper command of Quasar CLI or simply create them yourself."),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`$ quasar new layout User
 app:new Generated layout: src/layouts/User.vue +0ms
 app:new Make sure to reference it `),n("span",{class:"token keyword"},"in"),a(` src/router/routes.js +2ms

$ quasar new page Profile Posts
 app:new Generated page: src/pages/Profile.vue +0ms
 app:new Make sure to reference it `),n("span",{class:"token keyword"},"in"),a(` src/router/routes.js +2ms

 app:new Generated page: src/pages/Posts.vue +1ms
 app:new Make sure to reference it `),n("span",{class:"token keyword"},"in"),a(" src/router/routes.js +0ms")])]),n(l,{lang:"bash"})]),_:1}),n("p",null,"The commands above create the following folder structure:"),n(v,{def:m.tree},null,8,["def"]),n("h2",{id:"defining-routes",class:"doc-heading doc-h2",onClick:g=>u($)("defining-routes")},"Defining Routes",8,["onClick"]),n("p",null,[a("Your Pages ("),n("code",{class:"doc-token"},"/src/pages"),a(") and Layouts ("),n("code",{class:"doc-token"},"/src/layouts"),a(") are injected into your website/app (and also managed) through Vue Router in "),n("code",{class:"doc-token"},"/src/router/routes.js"),a(". Each Page and Layout needs to be referenced there.")]),n("p",null,[a("Example of "),n("code",{class:"doc-token"},"routes.js"),a(" using lazy-loading:")]),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we define our routes in this file"),a(`

`),n("span",{class:"token keyword"},"import"),a(" LandingPage "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/Landing'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(` LandingPage
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(" routes")])]),n(l)]),_:1}),n("p",null,[a("Example of "),n("code",{class:"doc-token"},"routes.js"),a(" using on-demand loading:")]),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// we define our routes in this file"),a(`

`),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/Landing'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(" routes")])]),n(l)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("More in-depth analysis of Lazy loading / code-splitting with "),n(y,{to:"/quasar-cli-vite/lazy-loading"},{default:p(()=>[a("@quasar/app-vite")]),_:1}),a(" or "),n(y,{to:"/quasar-cli-webpack/lazy-loading"},{default:p(()=>[a("@quasar/app-webpack")]),_:1}),a(".")])]),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"Configuring routes to use Layouts and Pages basically consists of correctly nesting routes, as we’ll see in the next section.")]),n("h2",{id:"nested-routes",class:"doc-heading doc-h2",onClick:g=>u($)("nested-routes")},"Nested Routes",8,["onClick"]),n("p",null,"Real app UIs are usually composed of components that are nested multiple levels deep. It is also very common that the segments of a URL corresponds to a certain structure of nested components, for example:"),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,`/user/profile                   /user/posts
+------------------+            +-----------------+
| User             |            | User            |
| +--------------+ |            | +-------------+ |
| | Profile      | |  +------>  | | Posts       | |
| |              | |            | |             | |
| +--------------+ |            | +-------------+ |
+------------------+            +-----------------+`)]),n(l)]),_:1}),n("p",null,"With Vue Router, it is very simple to express this relationship using nested route configurations. We notice some things: both pages need to be wrapped by a User component. Hey, User component is then a Layout!"),n("p",null,[a("Since User layout wraps inner pages, they need an injection point. This is supplied by the "),n("code",{class:"doc-token"},"<router-view>"),a(" component:")]),n(u(i),{title:"/src/layouts/User.vue"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-layout")]),n("span",{class:"token punctuation"},">")]),a(`
    ...

    `),n("span",{class:"token comment"},"<!-- this is where the Pages are injected -->"),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-view")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("router-view")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`

    ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-layout")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1}),n(u(i),{title:"/src/pages/Profile.vue or Posts.vue"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page")]),n("span",{class:"token punctuation"},">")]),a(`
    ...page content...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1}),n("p",null,[a("Our example has some routes specified (/user/profile and /user/posts). "),n("strong",null,"So how can we put everything together now?"),a(" We edit the routes file. That’s where we will configure routes, tell which components are Layouts and which are Pages and also reference/import them into our app:")]),n(u(i),{title:"src/router/routes.js"},{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" User "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'layouts/User'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" Profile "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/Profile'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" Posts "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/Posts'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// we use /src/layouts/User component which is imported above"),a(`
    `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" User"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// hey, it has children routes and User has <router-view> in it;"),a(`
    `),n("span",{class:"token comment"},"// It is really a Layout then!"),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token comment"},"// Profile page"),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'profile'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// here it is, route /user/profile"),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" Profile "),n("span",{class:"token comment"},"// we reference /src/pages/Profile.vue imported above"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token comment"},"// Posts page"),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'posts'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token comment"},"// here it is, route /user/posts"),a(`
        `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" Posts "),n("span",{class:"token comment"},"// we reference /src/pages/Posts.vue imported above"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(" routes")])]),n(l)]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("Note that nested paths that start with "),n("code",{class:"doc-token"},"/"),a(" will be treated as a root path. This allows you to leverage component nesting without having to use a nested URL.")])]),n("p",null,[a("Our routes configuration ("),n("code",{class:"doc-token"},"/src/router/routes.js"),a(") should look like this:")]),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// We point it to our component"),a(`
    `),n("span",{class:"token comment"},"// where we defined our QLayout"),a(`
    `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'layouts/user'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`

    `),n("span",{class:"token comment"},"// Now we define the sub-routes."),a(`
    `),n("span",{class:"token comment"},"// These are getting injected into"),a(`
    `),n("span",{class:"token comment"},"// layout (from above) automatically"),a(`
    `),n("span",{class:"token comment"},"// by using <router-view> placeholder"),a(`
    `),n("span",{class:"token comment"},"// (need to specify it in layout)"),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'feed'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/user-feed'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'profile'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/user-profile'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(l)]),_:1}),n("p",null,"Please notice a few things:"),n("ul",null,[n("li",null,[n("p",null,[a("We are using lazy loading of layouts and pages ("),n("code",{class:"doc-token"},"() => import(<path>)"),a("). If your website/app is small, then you can skip the lazy loading benefits as they could add more overhead than what it’s worth:")]),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" UserLayout "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'layouts/user'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" UserFeed "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/user-feed'"),a(`
`),n("span",{class:"token keyword"},"import"),a(" UserProfile "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'pages/user-profile'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/user'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" UserLayout"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'feed'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" UserFeed "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'profile'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),a(" UserProfile "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"]")])]),n(l)]),_:1})]),n("li",null,[n("p",null,"Quasar provides some out of the box Webpack aliases (‘layouts’ which points to ‘/src/layouts’ and ‘pages’ which points to ‘/src/pages’), which are used in the above examples.")]),n("li",null,[n("p",null,[a("Pages of a Layout are declared as children of it in the Vue Router configuration so that "),n("code",{class:"doc-token"},"<router-view/>"),a(" will know what page component to inject. Remember to always use this Vue component whenever your Layout has pages attached to it.")]),n(u(i),null,{default:p(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-layout")]),n("span",{class:"token punctuation"},">")]),a(`
  ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token comment"},`<!--
      This is where your pages will get
      injected into your Layout
    -->`),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-view")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-page-container")]),n("span",{class:"token punctuation"},">")]),a(`
  ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("q-layout")]),n("span",{class:"token punctuation"},">")])])]),n(l)]),_:1})])]),n(h,{class:"q-mt-xl"}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[a("Please check "),n(y,{to:"https://router.vuejs.org/"},{default:p(()=>[a("Vue Router")]),_:1}),a(" documentation to fully understand the examples above and how to configure the router and its routes for your app.")])])]}),_:1},L))}}},P=d.setup;d.setup=(w,f)=>{const m=j();return(m.modules||(m.modules=new Set)).add("src/pages/layout/routing-with-layouts-and-pages.md"),P?P(w,f):void 0};const J=T(d,[["__file","routing-with-layouts-and-pages.md"]]);export{J as default};
