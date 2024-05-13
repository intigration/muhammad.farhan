import{c as l}from"./_examples_frameless-electron-window.js";import{D as d,a as c}from"./DocPage.js";import{D as m}from"./DocApi.js";import{D as i}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as g}from"./index.js";import{b as h,d as v,w as a,h as n,i as s,e as t,f as o}from"./vendor.js";import"./DocCardTitle.js";import"./utils.js";const f=n("p",null,"This is a Vue directive which takes one parameter (a Function) and fires when user scrolls the page containing that DOM node.",-1),_={class:"doc-note doc-note--tip"},w=n("p",{class:"doc-note__title"},"TIPS",-1),y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  ...
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onScroll"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  ...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// when this method is invoked then it means user"),s(`
      `),n("span",{class:"token comment"},"// has scrolled the page to `position`"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
      `),n("span",{class:"token comment"},"// `position` is an Integer designating the current"),s(`
      `),n("span",{class:"token comment"},"// scroll position in pixels."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" onScroll "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])],-1),S=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" debounce "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onScroll"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// when this method is invoked then it means user"),s(`
      `),n("span",{class:"token comment"},"// has scrolled the page to `position`"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
      `),n("span",{class:"token comment"},"// `position` is an Integer designating the current"),s(`
      `),n("span",{class:"token comment"},"// scroll position in pixels."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"onScroll"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),s("onScroll"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// debounce for 200ms"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),b={__name:"scroll",setup(D){const r=[{name:"Scroll Fire",category:"Vue Directives",path:"/vue-directives/scroll-fire"},{name:"Scroll Observer",category:"Observers",path:"/vue-components/scroll-observer"}],u=[{id:"scroll-api",title:"2. Scroll API",deep:!0},{id:"usage",title:"3. Usage"},{id:"determining-scrolling-container",title:"3.1. Determining Scrolling Container",sub:!0}];return(x,e)=>(h(),v(d,{title:"Directive v-scroll",desc:"Vue directive which triggers an event when user scrolls.",heading:"","edit-link":"vue-directives/scroll",toc:u,related:r},{default:a(()=>[f,n("div",_,[w,n("ul",null,[n("li",null,[s("One alternative to using this directive is to place a "),t(c,{to:"/vue-components/scroll-observer"},{default:a(()=>[s("QScrollObserver")]),_:1}),s(" component on your page.")]),n("li",null,[s("There is one more scrolling-related directive available called "),t(c,{to:"/vue-directives/scroll-fire"},{default:a(()=>[s("Scroll Fire")]),_:1}),s(".")])])]),t(m,{file:"Scroll"}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=k=>o(l)("usage"))},"Usage"),t(o(i),null,{default:a(()=>[y,t(p)]),_:1}),t(o(i),null,{default:a(()=>[S,t(p)]),_:1}),n("h3",{id:"determining-scrolling-container",class:"doc-heading doc-h3",onClick:e[1]||(e[1]=k=>o(l)("determining-scrolling-container"))},"Determining Scrolling Container"),n("p",null,[s("Please read "),t(c,{to:"/vue-components/scroll-observer#determining-scrolling-container"},{default:a(()=>[s("here")]),_:1}),s(" about how Quasar determines the container to attach scrolling events to.")])]),_:1}))}},q=g(b,[["__file","scroll.md"]]);export{q as default};
