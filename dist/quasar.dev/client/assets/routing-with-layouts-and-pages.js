import{b as d,d as g,w as t,h as s,e,i as n,f as o,x as h}from"./vendor.js";import{c as r}from"./_examples_frameless-electron-window.js";import{D as y,a as l}from"./DocPage.js";import{D as m}from"./DocTree.js";import{D as a}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as f}from"./index.js";const w=s("p",null,"You can benefit from Vue Router’s capabilities while structuring your routes with a Quasar Layout. The information below is just a recommendation and not mandatory to follow. Quasar allows you full freedom. Take the lines below only as an example.",-1),_=s("p",null,[n("To make it more clear, let’s take an example. We have one layout (‘user’) and two pages (‘user-feed’ and ‘user-profile’). We want to configure the website/app routes like this: "),s("code",{class:"doc-token"},"/user/feed"),n(" and "),s("code",{class:"doc-token"},"/user/profile"),n(".")],-1),v=s("p",null,[s("strong",null,"Quasar does not enforce a specific folder structure"),n(". The following is just an example. You can put layouts and pages together in a folder, or put pages in your specific folder structure of choice, or create your own layout and page folders. It doesn’t matter for Quasar. All that matters is that you reference them correctly in "),s("code",{class:"doc-token"},"/src/router/routes.js"),n(".")],-1),P=s("p",null,"Let’s create the layout and page files. You can use a helper command of Quasar CLI or simply create them yourself.",-1),b=s("pre",{class:"doc-code"},[s("code",null,[n(`$ quasar new layout User
 app:new Generated layout: src/layouts/User.vue +0ms
 app:new Make sure to reference it `),s("span",{class:"token keyword"},"in"),n(` src/router/routes.js +2ms

$ quasar new page Profile Posts
 app:new Generated page: src/pages/Profile.vue +0ms
 app:new Make sure to reference it `),s("span",{class:"token keyword"},"in"),n(` src/router/routes.js +2ms

 app:new Generated page: src/pages/Posts.vue +1ms
 app:new Make sure to reference it `),s("span",{class:"token keyword"},"in"),n(" src/router/routes.js +0ms")])],-1),L=s("p",null,"The commands above create the following folder structure:",-1),x=s("p",null,[n("Your Pages ("),s("code",{class:"doc-token"},"/src/pages"),n(") and Layouts ("),s("code",{class:"doc-token"},"/src/layouts"),n(") are injected into your website/app (and also managed) through Vue Router in "),s("code",{class:"doc-token"},"/src/router/routes.js"),n(". Each Page and Layout needs to be referenced there.")],-1),U=s("p",null,[n("Example of "),s("code",{class:"doc-token"},"routes.js"),n(" using lazy-loading:")],-1),j=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token comment"},"// we define our routes in this file"),n(`

`),s("span",{class:"token keyword"},"import"),n(" LandingPage "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'pages/Landing'"),n(`

`),s("span",{class:"token keyword"},"const"),n(" routes "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"["),n(`
  `),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'/'"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(` LandingPage
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(" routes")])],-1),q=s("p",null,[n("Example of "),s("code",{class:"doc-token"},"routes.js"),n(" using on-demand loading:")],-1),R=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token comment"},"// we define our routes in this file"),n(`

`),s("span",{class:"token keyword"},"const"),n(" routes "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"["),n(`
  `),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'/'"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token function-variable function"},"component"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'pages/Landing'"),s("span",{class:"token punctuation"},")"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(" routes")])],-1),T={class:"doc-note doc-note--tip"},Q=s("p",{class:"doc-note__title"},"TIP",-1),I=s("div",{class:"doc-note doc-note--tip"},[s("p",{class:"doc-note__title"},"TIP"),s("p",null,"Configuring routes to use Layouts and Pages basically consists of correctly nesting routes, as we’ll see in the next section.")],-1),V=s("p",null,"Real app UIs are usually composed of components that are nested multiple levels deep. It is also very common that the segments of a URL corresponds to a certain structure of nested components, for example:",-1),C=s("pre",{class:"doc-code"},[s("code",null,`/user/profile                   /user/posts
+------------------+            +-----------------+
| User             |            | User            |
| +--------------+ |            | +-------------+ |
| | Profile      | |  +------>  | | Posts       | |
| |              | |            | |             | |
| +--------------+ |            | +-------------+ |
+------------------+            +-----------------+`)],-1),W=s("p",null,"With Vue Router, it is very simple to express this relationship using nested route configurations. We notice some things: both pages need to be wrapped by a User component. Hey, User component is then a Layout!",-1),D=s("p",null,[n("Since User layout wraps inner pages, they need an injection point. This is supplied by the "),s("code",{class:"doc-token"},"<router-view>"),n(" component:")],-1),N=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("q-layout")]),s("span",{class:"token punctuation"},">")]),n(`
    ...

    `),s("span",{class:"token comment"},"<!-- this is where the Pages are injected -->"),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("q-page-container")]),s("span",{class:"token punctuation"},">")]),n(`
      `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("router-view")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("router-view")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("q-page-container")]),s("span",{class:"token punctuation"},">")]),n(`

    ...
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("q-layout")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")])])],-1),z=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("template")]),s("span",{class:"token punctuation"},">")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("q-page")]),s("span",{class:"token punctuation"},">")]),n(`
    ...page content...
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("q-page")]),s("span",{class:"token punctuation"},">")]),n(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("template")]),s("span",{class:"token punctuation"},">")])])],-1),$=s("p",null,[n("Our example has some routes specified (/user/profile and /user/posts). "),s("strong",null,"So how can we put everything together now?"),n(" We edit the routes file. That’s where we will configure routes, tell which components are Layouts and which are Pages and also reference/import them into our app:")],-1),B=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" User "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'layouts/User'"),n(`
`),s("span",{class:"token keyword"},"import"),n(" Profile "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'pages/Profile'"),n(`
`),s("span",{class:"token keyword"},"import"),n(" Posts "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'pages/Posts'"),n(`

`),s("span",{class:"token keyword"},"const"),n(" routes "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token punctuation"},"["),n(`
  `),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'/user'"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token comment"},"// we use /src/layouts/User component which is imported above"),n(`
    `),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(" User"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token comment"},"// hey, it has children routes and User has <router-view> in it;"),n(`
    `),s("span",{class:"token comment"},"// It is really a Layout then!"),n(`
    `),s("span",{class:"token literal-property property"},"children"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
      `),s("span",{class:"token comment"},"// Profile page"),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'profile'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// here it is, route /user/profile"),n(`
        `),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(" Profile "),s("span",{class:"token comment"},"// we reference /src/pages/Profile.vue imported above"),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`

      `),s("span",{class:"token comment"},"// Posts page"),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'posts'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token comment"},"// here it is, route /user/posts"),n(`
        `),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(" Posts "),s("span",{class:"token comment"},"// we reference /src/pages/Posts.vue imported above"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(" routes")])],-1),F=s("div",{class:"doc-note doc-note--warning"},[s("p",{class:"doc-note__title"},"WARNING"),s("p",null,[n("Note that nested paths that start with "),s("code",{class:"doc-token"},"/"),n(" will be treated as a root path. This allows you to leverage component nesting without having to use a nested URL.")])],-1),G=s("p",null,[n("Our routes configuration ("),s("code",{class:"doc-token"},"/src/router/routes.js"),n(") should look like this:")],-1),H=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"["),n(`
  `),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'/user'"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token comment"},"// We point it to our component"),n(`
    `),s("span",{class:"token comment"},"// where we defined our QLayout"),n(`
    `),s("span",{class:"token function-variable function"},"component"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'layouts/user'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token comment"},"// Now we define the sub-routes."),n(`
    `),s("span",{class:"token comment"},"// These are getting injected into"),n(`
    `),s("span",{class:"token comment"},"// layout (from above) automatically"),n(`
    `),s("span",{class:"token comment"},"// by using <router-view> placeholder"),n(`
    `),s("span",{class:"token comment"},"// (need to specify it in layout)"),n(`
    `),s("span",{class:"token literal-property property"},"children"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'feed'"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token function-variable function"},"component"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'pages/user-feed'"),s("span",{class:"token punctuation"},")"),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'profile'"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token function-variable function"},"component"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token operator"},"=>"),n(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'pages/user-profile'"),s("span",{class:"token punctuation"},")"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"]")])],-1),M=s("p",null,"Please notice a few things:",-1),Y=s("p",null,[n("We are using lazy loading of layouts and pages ("),s("code",{class:"doc-token"},"() => import(<path>)"),n("). If your website/app is small, then you can skip the lazy loading benefits as they could add more overhead than what it’s worth:")],-1),A=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" UserLayout "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'layouts/user'"),n(`
`),s("span",{class:"token keyword"},"import"),n(" UserFeed "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'pages/user-feed'"),n(`
`),s("span",{class:"token keyword"},"import"),n(" UserProfile "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'pages/user-profile'"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"["),n(`
  `),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'/user'"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(" UserLayout"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token literal-property property"},"children"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'feed'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(" UserFeed "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token literal-property property"},"path"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'profile'"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token literal-property property"},"component"),s("span",{class:"token operator"},":"),n(" UserProfile "),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"]")])],-1),E=s("li",null,[s("p",null,"Quasar provides some out of the box Webpack aliases (‘layouts’ which points to ‘/src/layouts’ and ‘pages’ which points to ‘/src/pages’), which are used in the above examples.")],-1),S=s("p",null,[n("Pages of a Layout are declared as children of it in the Vue Router configuration so that "),s("code",{class:"doc-token"},"<router-view/>"),n(" will know what page component to inject. Remember to always use this Vue component whenever your Layout has pages attached to it.")],-1),O=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("q-layout")]),s("span",{class:"token punctuation"},">")]),n(`
  ...
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("q-page-container")]),s("span",{class:"token punctuation"},">")]),n(`
    `),s("span",{class:"token comment"},`<!--
      This is where your pages will get
      injected into your Layout
    -->`),n(`
    `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),n("router-view")]),n(),s("span",{class:"token punctuation"},"/>")]),n(`
  `),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("q-page-container")]),s("span",{class:"token punctuation"},">")]),n(`
  ...
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),n("q-layout")]),s("span",{class:"token punctuation"},">")])])],-1),J={class:"doc-note doc-note--tip"},K=s("p",{class:"doc-note__title"},"TIP",-1),X={__name:"routing-with-layouts-and-pages",setup(Z){const i=[{id:"creating-files",title:"2. Creating Files"},{id:"defining-routes",title:"3. Defining Routes"},{id:"nested-routes",title:"4. Nested Routes"}],k={tree:{l:"src",c:[{l:"layouts",c:[{l:"User.vue",e:"our QLayout definition"}]},{l:"pages",c:[{l:"Posts.vue",e:"page for /user/feed route"},{l:"Profile.vue",e:"page for /user/profile route"}]}]}};return(ss,c)=>(d(),g(y,{title:"Routing with Layouts and Pages",desc:"How to connect the Vue Router with your Quasar layouts and pages.",heading:"","edit-link":"layout/routing-with-layouts-and-pages",toc:i},{default:t(()=>[w,s("p",null,[e(l,{to:"/layout/layout"},{default:t(()=>[n("QLayout")]),_:1}),n(" is the component used to encapsulate pages, so that multiple pages will share the same header, drawers and so on. However, you can also configure per page header/footer/drawers, but they all must be children of the QLayout component. In order to understand how this works, you need a little bit of reading on "),e(l,{to:"https://router.vuejs.org/guide/essentials/nested-routes.html"},{default:t(()=>[n("Vue Router nested routes")]),_:1}),n(".")]),_,s("h2",{id:"creating-files",class:"doc-heading doc-h2",onClick:c[0]||(c[0]=u=>o(r)("creating-files"))},"Creating Files"),v,P,e(o(a),null,{default:t(()=>[b,e(p,{lang:"bash"})]),_:1}),L,e(m,{def:k.tree},null,8,["def"]),s("h2",{id:"defining-routes",class:"doc-heading doc-h2",onClick:c[1]||(c[1]=u=>o(r)("defining-routes"))},"Defining Routes"),x,U,e(o(a),null,{default:t(()=>[j,e(p)]),_:1}),q,e(o(a),null,{default:t(()=>[R,e(p)]),_:1}),s("div",T,[Q,s("p",null,[n("More in-depth analysis of Lazy loading / code-splitting with "),e(l,{to:"/quasar-cli-vite/lazy-loading"},{default:t(()=>[n("@quasar/app-vite")]),_:1}),n(" or "),e(l,{to:"/quasar-cli-webpack/lazy-loading"},{default:t(()=>[n("@quasar/app-webpack")]),_:1}),n(".")])]),I,s("h2",{id:"nested-routes",class:"doc-heading doc-h2",onClick:c[2]||(c[2]=u=>o(r)("nested-routes"))},"Nested Routes"),V,e(o(a),null,{default:t(()=>[C,e(p)]),_:1}),W,D,e(o(a),{title:"/src/layouts/User.vue"},{default:t(()=>[N,e(p)]),_:1}),e(o(a),{title:"/src/pages/Profile.vue or Posts.vue"},{default:t(()=>[z,e(p)]),_:1}),$,e(o(a),{title:"src/router/routes.js"},{default:t(()=>[B,e(p)]),_:1}),F,G,e(o(a),null,{default:t(()=>[H,e(p)]),_:1}),M,s("ul",null,[s("li",null,[Y,e(o(a),null,{default:t(()=>[A,e(p)]),_:1})]),E,s("li",null,[S,e(o(a),null,{default:t(()=>[O,e(p)]),_:1})])]),e(h,{class:"q-mt-xl"}),s("div",J,[K,s("p",null,[n("Please check "),e(l,{to:"https://router.vuejs.org/"},{default:t(()=>[n("Vue Router")]),_:1}),n(" documentation to fully understand the examples above and how to configure the router and its routes for your app.")])])]),_:1}))}},ls=f(X,[["__file","routing-with-layouts-and-pages.md"]]);export{ls as default};
