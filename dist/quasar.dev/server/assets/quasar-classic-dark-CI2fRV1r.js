import{ref as W,resolveComponent as b,mergeProps as X,withCtx as e,createTextVNode as t,createVNode as a,useSSRContext as Y}from"vue";import{ssrRenderComponent as n}from"vue/server-renderer";import{_ as Z}from"../server-entry.js";import"quasar";import"vue-router";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const U={name:"MyLayout",setup(){const L=W(!1);function y(){L.value=!L.value}return{leftDrawerOpen:L,toggleLeftDrawer:y}}};function $(L,y,T,B,I,C,ee,ae){const J=b("q-layout"),N=b("q-header"),E=b("q-toolbar"),V=b("q-btn"),G=b("q-toolbar-title"),P=b("q-drawer"),M=b("q-list"),l=b("q-item-label"),i=b("q-item"),r=b("q-item-section"),o=b("q-icon"),j=b("q-page-container"),O=b("router-view");y(n(J,X({view:"lHh Lpr lFf",class:"bg-grey-9 text-white"},B),{default:e((te,A,R,S)=>{if(A)A(n(N,{elevated:"",class:"bg-grey-6"},{default:e((Q,D,x,H)=>{if(D)D(n(E,null,{default:e((K,v,g,w)=>{if(v)v(n(V,{flat:"",dense:"",round:"",onClick:C.toggleLeftDrawer,"aria-label":"Menu",icon:"menu"},null,g,w)),v(n(G,null,{default:e((F,d,s,m)=>{if(d)d(" Quasar App ");else return[t(" Quasar App ")]}),_:1},g,w));else return[a(V,{flat:"",dense:"",round:"",onClick:C.toggleLeftDrawer,"aria-label":"Menu",icon:"menu"},null,8,["onClick"]),a(G,null,{default:e(()=>[t(" Quasar App ")]),_:1})]}),_:1},x,H));else return[a(E,null,{default:e(()=>[a(V,{flat:"",dense:"",round:"",onClick:C.toggleLeftDrawer,"aria-label":"Menu",icon:"menu"},null,8,["onClick"]),a(G,null,{default:e(()=>[t(" Quasar App ")]),_:1})]),_:1})]}),_:1},R,S)),A(n(P,{modelValue:C.leftDrawerOpen,"onUpdate:modelValue":Q=>C.leftDrawerOpen=Q,"show-if-above":"",class:"bg-grey-8"},{default:e((Q,D,x,H)=>{if(D)D(n(M,{dark:""},{default:e((K,v,g,w)=>{if(v)v(n(l,{header:""},{default:e((F,d,s,m)=>{if(d)d("Essential Links");else return[t("Essential Links")]}),_:1},g,w)),v(n(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://quasar.dev"},{default:e((F,d,s,m)=>{if(d)d(n(r,{avatar:""},{default:e((k,u,_,c)=>{if(u)u(n(o,{name:"school"},null,_,c));else return[a(o,{name:"school"})]}),_:1},s,m)),d(n(r,null,{default:e((k,u,_,c)=>{if(u)u(n(l,null,{default:e((p,f,q,h)=>{if(f)f("Docs");else return[t("Docs")]}),_:1},_,c)),u(n(l,{caption:""},{default:e((p,f,q,h)=>{if(f)f("https://quasar.dev");else return[t("https://quasar.dev")]}),_:1},_,c));else return[a(l,null,{default:e(()=>[t("Docs")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://quasar.dev")]),_:1})]}),_:1},s,m));else return[a(r,{avatar:""},{default:e(()=>[a(o,{name:"school"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Docs")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://quasar.dev")]),_:1})]),_:1})]}),_:1},g,w)),v(n(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://github.quasar.dev"},{default:e((F,d,s,m)=>{if(d)d(n(r,{avatar:""},{default:e((k,u,_,c)=>{if(u)u(n(o,{name:"code"},null,_,c));else return[a(o,{name:"code"})]}),_:1},s,m)),d(n(r,null,{default:e((k,u,_,c)=>{if(u)u(n(l,null,{default:e((p,f,q,h)=>{if(f)f("GitHub");else return[t("GitHub")]}),_:1},_,c)),u(n(l,{caption:""},{default:e((p,f,q,h)=>{if(f)f("github.com/quasarframework");else return[t("github.com/quasarframework")]}),_:1},_,c));else return[a(l,null,{default:e(()=>[t("GitHub")]),_:1}),a(l,{caption:""},{default:e(()=>[t("github.com/quasarframework")]),_:1})]}),_:1},s,m));else return[a(r,{avatar:""},{default:e(()=>[a(o,{name:"code"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("GitHub")]),_:1}),a(l,{caption:""},{default:e(()=>[t("github.com/quasarframework")]),_:1})]),_:1})]}),_:1},g,w)),v(n(i,{clickable:"",target:"_blank",rel:"noopener",href:"http://chat.quasar.dev"},{default:e((F,d,s,m)=>{if(d)d(n(r,{avatar:""},{default:e((k,u,_,c)=>{if(u)u(n(o,{name:"chat"},null,_,c));else return[a(o,{name:"chat"})]}),_:1},s,m)),d(n(r,null,{default:e((k,u,_,c)=>{if(u)u(n(l,null,{default:e((p,f,q,h)=>{if(f)f("Discord Chat Channel");else return[t("Discord Chat Channel")]}),_:1},_,c)),u(n(l,{caption:""},{default:e((p,f,q,h)=>{if(f)f("https://chat.quasar.dev");else return[t("https://chat.quasar.dev")]}),_:1},_,c));else return[a(l,null,{default:e(()=>[t("Discord Chat Channel")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://chat.quasar.dev")]),_:1})]}),_:1},s,m));else return[a(r,{avatar:""},{default:e(()=>[a(o,{name:"chat"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Discord Chat Channel")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://chat.quasar.dev")]),_:1})]),_:1})]}),_:1},g,w)),v(n(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://forum.quasar.dev"},{default:e((F,d,s,m)=>{if(d)d(n(r,{avatar:""},{default:e((k,u,_,c)=>{if(u)u(n(o,{name:"record_voice_over"},null,_,c));else return[a(o,{name:"record_voice_over"})]}),_:1},s,m)),d(n(r,null,{default:e((k,u,_,c)=>{if(u)u(n(l,null,{default:e((p,f,q,h)=>{if(f)f("Forum");else return[t("Forum")]}),_:1},_,c)),u(n(l,{caption:""},{default:e((p,f,q,h)=>{if(f)f("https://forum.quasar.dev");else return[t("https://forum.quasar.dev")]}),_:1},_,c));else return[a(l,null,{default:e(()=>[t("Forum")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://forum.quasar.dev")]),_:1})]}),_:1},s,m));else return[a(r,{avatar:""},{default:e(()=>[a(o,{name:"record_voice_over"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Forum")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://forum.quasar.dev")]),_:1})]),_:1})]}),_:1},g,w)),v(n(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://twitter.quasar.dev"},{default:e((F,d,s,m)=>{if(d)d(n(r,{avatar:""},{default:e((k,u,_,c)=>{if(u)u(n(o,{name:"rss_feed"},null,_,c));else return[a(o,{name:"rss_feed"})]}),_:1},s,m)),d(n(r,null,{default:e((k,u,_,c)=>{if(u)u(n(l,null,{default:e((p,f,q,h)=>{if(f)f("Twitter");else return[t("Twitter")]}),_:1},_,c)),u(n(l,{caption:""},{default:e((p,f,q,h)=>{if(f)f("@quasarframework");else return[t("@quasarframework")]}),_:1},_,c));else return[a(l,null,{default:e(()=>[t("Twitter")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@quasarframework")]),_:1})]}),_:1},s,m));else return[a(r,{avatar:""},{default:e(()=>[a(o,{name:"rss_feed"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Twitter")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@quasarframework")]),_:1})]),_:1})]}),_:1},g,w)),v(n(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://facebook.quasar.dev"},{default:e((F,d,s,m)=>{if(d)d(n(r,{avatar:""},{default:e((k,u,_,c)=>{if(u)u(n(o,{name:"public"},null,_,c));else return[a(o,{name:"public"})]}),_:1},s,m)),d(n(r,null,{default:e((k,u,_,c)=>{if(u)u(n(l,null,{default:e((p,f,q,h)=>{if(f)f("Facebook");else return[t("Facebook")]}),_:1},_,c)),u(n(l,{caption:""},{default:e((p,f,q,h)=>{if(f)f("@QuasarFramework");else return[t("@QuasarFramework")]}),_:1},_,c));else return[a(l,null,{default:e(()=>[t("Facebook")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@QuasarFramework")]),_:1})]}),_:1},s,m));else return[a(r,{avatar:""},{default:e(()=>[a(o,{name:"public"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Facebook")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@QuasarFramework")]),_:1})]),_:1})]}),_:1},g,w));else return[a(l,{header:""},{default:e(()=>[t("Essential Links")]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"school"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Docs")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://github.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"code"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("GitHub")]),_:1}),a(l,{caption:""},{default:e(()=>[t("github.com/quasarframework")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"http://chat.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"chat"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Discord Chat Channel")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://chat.quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://forum.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"record_voice_over"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Forum")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://forum.quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://twitter.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"rss_feed"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Twitter")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@quasarframework")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://facebook.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"public"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Facebook")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@QuasarFramework")]),_:1})]),_:1})]),_:1})]}),_:1},x,H));else return[a(M,{dark:""},{default:e(()=>[a(l,{header:""},{default:e(()=>[t("Essential Links")]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"school"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Docs")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://github.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"code"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("GitHub")]),_:1}),a(l,{caption:""},{default:e(()=>[t("github.com/quasarframework")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"http://chat.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"chat"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Discord Chat Channel")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://chat.quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://forum.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"record_voice_over"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Forum")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://forum.quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://twitter.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"rss_feed"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Twitter")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@quasarframework")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://facebook.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"public"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Facebook")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@QuasarFramework")]),_:1})]),_:1})]),_:1})]),_:1})]}),_:1},R,S)),A(n(j,null,{default:e((Q,D,x,H)=>{if(D)D(n(O,null,null,x,H));else return[a(O)]}),_:1},R,S));else return[a(N,{elevated:"",class:"bg-grey-6"},{default:e(()=>[a(E,null,{default:e(()=>[a(V,{flat:"",dense:"",round:"",onClick:C.toggleLeftDrawer,"aria-label":"Menu",icon:"menu"},null,8,["onClick"]),a(G,null,{default:e(()=>[t(" Quasar App ")]),_:1})]),_:1})]),_:1}),a(P,{modelValue:C.leftDrawerOpen,"onUpdate:modelValue":Q=>C.leftDrawerOpen=Q,"show-if-above":"",class:"bg-grey-8"},{default:e(()=>[a(M,{dark:""},{default:e(()=>[a(l,{header:""},{default:e(()=>[t("Essential Links")]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"school"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Docs")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://github.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"code"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("GitHub")]),_:1}),a(l,{caption:""},{default:e(()=>[t("github.com/quasarframework")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"http://chat.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"chat"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Discord Chat Channel")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://chat.quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://forum.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"record_voice_over"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Forum")]),_:1}),a(l,{caption:""},{default:e(()=>[t("https://forum.quasar.dev")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://twitter.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"rss_feed"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Twitter")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@quasarframework")]),_:1})]),_:1})]),_:1}),a(i,{clickable:"",target:"_blank",rel:"noopener",href:"https://facebook.quasar.dev"},{default:e(()=>[a(r,{avatar:""},{default:e(()=>[a(o,{name:"public"})]),_:1}),a(r,null,{default:e(()=>[a(l,null,{default:e(()=>[t("Facebook")]),_:1}),a(l,{caption:""},{default:e(()=>[t("@QuasarFramework")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),a(j,null,{default:e(()=>[a(O)]),_:1})]}),_:1},T))}const z=U.setup;U.setup=(L,y)=>{const T=Y();return(T.modules||(T.modules=new Set)).add("src/layouts/gallery/quasar-classic-dark.vue"),z?z(L,y):void 0};const se=Z(U,[["ssrRender",$],["__file","quasar-classic-dark.vue"]]);export{se as default};
