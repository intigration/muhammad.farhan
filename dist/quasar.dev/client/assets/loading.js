import{_ as g,a as k}from"./index.js";import{p as m,b as h,d as y,w as l,e as t,h as n,f as a,i as s,j as f}from"./vendor.js";import{c as p}from"./_examples_frameless-electron-window.js";import{D as w}from"./DocPage.js";import{D as e}from"./DocExample.js";import{D as _}from"./DocApi.js";import{D as L}from"./DocInstallation.js";import{D as c}from"./DocPrerender.js";import{C as u}from"./CopyButton.js";import"./DocCode.js";import"./DocCodepen.js";import"./utils.js";import"./DocCardTitle.js";const v=n("p",null,"Loading is a feature that you can use to display an overlay with a spinner on top of your App’s content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.",-1),b=n("p",null,"Loading uses a delay (500ms) to display itself so that quick operations won’t make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.",-1),C=n("p",null,"Inside a Vue component:",-1),D=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  $q`),n("span",{class:"token punctuation"},"."),s("loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"delay"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),s(),n("span",{class:"token comment"},"// ms"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  $q`),n("span",{class:"token punctuation"},"."),s("loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),S=n("p",null,"Outside of a Vue component:",-1),z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  Loading`),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// optional!, for example below"),s(`
  `),n("span",{class:"token comment"},"// with custom spinner"),s(`
  QSpinnerGears
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token comment"},"// default options"),s(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// fully customizable"),s(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"spinner"),n("span",{class:"token operator"},":"),s(" QSpinnerGears"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// other props"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])],-1),q=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"When you have multiple processes that occur in parallel then you can group Loading instances so that you can manage the Loading state per group (individually).")],-1),x=n("p",null,[s("Specify the "),n("code",{class:"doc-token"},"group"),s(" property when spawning each of your Loading instances and you can update or hide them by using the returned function.")],-1),P=n("p",null,"Obviously, we can only display one group at a time, so the order in which they are spawned determines the priority in which they are shown (the last one has priority over the previous ones; LIFO).",-1),V=n("p",null,[s("You can play with the returning function to show/update/hide the group or just call "),n("code",{class:"doc-token"},"Loading.show({ group: '..group_name..', ... })"),s(" or "),n("code",{class:"doc-token"},"Loading.hide('..group_name..')"),s(".")],-1),$=n("p",null,"The following two ways are perfectly equivalent (and you can even mix the calls between them):",-1),I=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * First way
 */`),s(`

`),n("span",{class:"token comment"},"// we spawn the group"),s(`
`),n("span",{class:"token keyword"},"const"),s(" myLoadingGroup "),n("span",{class:"token operator"},"="),s(" Loading"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Some message'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// with params, so we update this group"),s(`
`),n("span",{class:"token function"},"myLoadingGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Second message'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// no params, so we instruct Quasar to hide the group"),s(`
`),n("span",{class:"token function"},"myLoadingGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},`/**
 * Second, equivalent way
 */`),s(`

`),n("span",{class:"token comment"},"// we spawn the group"),s(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Some message'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// we update the group (in this case we need to specify the group name)"),s(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"group"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'my-group'"),s(`
  `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Second message'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// we hide this specific group"),s(`
Loading`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'my-group'"),n("span",{class:"token punctuation"},")")])],-1),A=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("Please remember that calling "),n("code",{class:"doc-token"},"Loading.hide()"),s(" with no parameters will hide all the groups. So if you use groups, you may want to always call the hide() method with a group name.")])],-1),B=n("p",null,[s("Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.config file > framework > config > loading: {…} or by calling "),n("code",{class:"doc-token"},"Loading.setDefaults({...})"),s(" or "),n("code",{class:"doc-token"},"$q.loading.setDefaults({...})"),s(".")],-1),Q={__name:"loading",setup(W){m("_q_ex",{name:"Loading",list:k(()=>import("./e.Loading.js"),[])});const r=[{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress"},{name:"Circular Progress",category:"Vue Components",path:"/vue-components/circular-progress"},{name:"Inner Loading",category:"Vue Components",path:"/vue-components/inner-loading"},{name:"Spinners",category:"Vue Components",path:"/vue-components/spinners"},{name:"Skeleton",category:"Vue Components",path:"/vue-components/skeleton"},{name:"Loading Bar",category:"Quasar Plugins",path:"/quasar-plugins/loading-bar"},{name:"Ajax Bar",category:"Vue Components",path:"/vue-components/ajax-bar"}],d=[{id:"loading-api",title:"2. Loading API",deep:!0},{id:"installation",title:"3. Installation",deep:!0},{id:"usage",title:"4. Usage"},{id:"default-options",title:"4.1. Default options",sub:!0},{id:"customization",title:"4.2. Customization",sub:!0},{id:"content-sanitization",title:"4.3. Content sanitization",sub:!0},{id:"multiple-groups-in-parallel",title:"4.4. Multiple groups in parallel",sub:!0},{id:"setting-up-defaults",title:"4.5. Setting Up Defaults",sub:!0}];return(G,o)=>(h(),y(w,{title:"Loading Plugin",desc:"A Quasar plugin which can display a loading state for your app through an overlay with a spinner and a message.",heading:"","edit-link":"quasar-plugins/loading",toc:d,related:r},{default:l(()=>[v,t(_,{file:"Loading"}),t(L,{plugins:"Loading",config:"loading"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=i=>a(p)("usage"))},"Usage"),b,C,t(a(c),null,{default:l(()=>[D,t(u)]),_:1}),S,t(a(c),null,{default:l(()=>[z,t(u)]),_:1}),n("h3",{id:"default-options",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=i=>a(p)("default-options"))},"Default options"),t(e,{title:"Default options",file:"Default"}),n("h3",{id:"customization",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=i=>a(p)("customization"))},"Customization"),t(e,{title:"With message",file:"WithMessage"}),t(e,{title:"With customized box",file:"WithBox"}),t(e,{title:"Customized",file:"Customized"}),t(e,{title:"Show and Change",file:"ShowAndChange"}),n("h3",{id:"content-sanitization",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=i=>a(p)("content-sanitization"))},"Content sanitization"),t(e,{title:"With unsafe message, but sanitized",file:"WithMessageSanitized"}),n("h3",{id:"multiple-groups-in-parallel",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=i=>a(p)("multiple-groups-in-parallel"))},[s("Multiple groups in parallel "),t(f,{label:"v2.8+"})]),q,x,P,t(e,{title:"Multiple groups",file:"MultipleGroups"}),V,$,t(a(c),null,{default:l(()=>[I,t(u)]),_:1}),A,n("h3",{id:"setting-up-defaults",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=i=>a(p)("setting-up-defaults"))},"Setting Up Defaults"),B]),_:1}))}},X=g(Q,[["__file","loading.md"]]);export{X as default};
