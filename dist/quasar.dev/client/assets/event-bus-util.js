import{c as l}from"./_examples_frameless-electron-window.js";import{D as i}from"./DocPage.js";import{D as p}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as k}from"./index.js";import{b as d,d as g,w as e,h as n,f as t,e as a,i as s}from"./vendor.js";const m=n("p",null,"Quasar supplies a global EventBus, especially useful when upgrading from Quasar v1 where the native Vue 2 interface has been dropped.",-1),y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"EventBus"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"on"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"callback"),n("span",{class:"token operator"},":"),s(" Function"),n("span",{class:"token punctuation"},","),s(" ctx"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"once"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"callback"),n("span",{class:"token operator"},":"),s(" Function"),n("span",{class:"token punctuation"},","),s(" ctx"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"emit"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"off"),s(),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" callback"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Function"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),f=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" EventBus "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"EventBus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

bus`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-event'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arg1"),n("span",{class:"token punctuation"},","),s(" arg2"),n("span",{class:"token punctuation"},","),s(" arg3")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
 `),n("span",{class:"token comment"},"// do some work"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

bus`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-event'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'arg1 value'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'arg2 value'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'arg3 value'"),n("span",{class:"token punctuation"},")")])],-1),v=n("p",null,"When using TypeScript the events can be strongly-typed:",-1),h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// Quasar v2.11.11+"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" EventBus "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"EventBus"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'some-event'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"arg1"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"arg2"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"arg3"),n("span",{class:"token operator"},":"),s(" string")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string-property property"},"'other'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"arg"),n("span",{class:"token operator"},":"),s(" boolean")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

bus`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some-event'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'arg1 value'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'arg2 value'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'arg3 value'"),n("span",{class:"token punctuation"},")")])],-1),w=n("p",null,"Create a file in your app where you instantiate and export the new event bus then import and use it throughout your app.",-1),b=n("p",null,"Alternatively, when on a Quasar CLI project, for your convenience (so NOT required) you can create a boot file and supply an event bus (make sure that you register it in quasar.config file > boot):",-1),_=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" EventBus "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" boot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"boot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" bus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"EventBus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// for Options API"),s(`
  app`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("globalProperties"),n("span",{class:"token punctuation"},"."),s("$bus "),n("span",{class:"token operator"},"="),s(` bus

  `),n("span",{class:"token comment"},"// for Composition API"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"provide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bus'"),n("span",{class:"token punctuation"},","),s(" bus"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),B=n("p",null,"Then, in any of your components, you can use:",-1),C=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// Options API"),s(`
`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`$bus

`),n("span",{class:"token comment"},"// Composition API"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" inject "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bus'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// inside setup()")])],-1),x={__name:"event-bus-util",setup(E){const r=[{id:"methods",title:"1.1. Methods",sub:!0},{id:"usage",title:"1.2. Usage",sub:!0},{id:"convenience-usage",title:"1.3. Convenience usage",sub:!0}];return(q,o)=>(d(),g(i,{title:"EventBus Util",desc:"An event emitter util.",badge:"v2.8.4+",heading:"","edit-link":"quasar-utils/event-bus-util",toc:r},{default:e(()=>[m,n("h3",{id:"methods",class:"doc-heading doc-h3",onClick:o[0]||(o[0]=u=>t(l)("methods"))},"Methods"),a(t(p),null,{default:e(()=>[y,a(c)]),_:1}),n("h3",{id:"usage",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=u=>t(l)("usage"))},"Usage"),a(t(p),null,{default:e(()=>[f,a(c)]),_:1}),v,a(t(p),null,{default:e(()=>[h,a(c)]),_:1}),n("h3",{id:"convenience-usage",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=u=>t(l)("convenience-usage"))},"Convenience usage"),w,b,a(t(p),{title:"A Quasar CLI boot file (let's say /src/boot/bus.js)"},{default:e(()=>[_,a(c)]),_:1}),B,a(t(p),null,{default:e(()=>[C,a(c)]),_:1})]),_:1}))}},D=k(x,[["__file","event-bus-util.md"]]);export{D as default};
