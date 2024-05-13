import{c as l}from"./_examples_frameless-electron-window.js";import{D as i}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as k}from"./index.js";import{b as d,d as m,w as e,h as n,f as a,e as t,i as s}from"./vendor.js";const f=n("p",null,[s("Vue’s "),n("code",{class:"doc-token"},"attrs"),s(" in a component can contain both listeners and real HTML attributes. The "),n("code",{class:"doc-token"},"useSplitAttrs()"),s(" composable breaks down this Vue attr object into the two categories and keeps them updated.")],-1),y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSplitAttrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    attributes`),n("span",{class:"token punctuation"},","),s(`
    listeners
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),_=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"attributes"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(" string "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token literal-property property"},"listeners"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" any"),n("span",{class:"token operator"},">>"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])],-1),h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useSplitAttrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    attributes`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// is a Vue ref()"),s(`
    listeners `),n("span",{class:"token comment"},"// is a Vue ref()"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useSplitAttrs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("attributes"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// prints out a key-value object"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("listeners"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// prints out a key-value object"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),b={__name:"use-split-attrs",setup(g){const u=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(w,o)=>(d(),m(i,{title:"useSplitAttrs composable",desc:"What is useSplitAttrs() composable and how you can use it",badge:"Quasar v2.15+",heading:"","edit-link":"vue-composables/use-split-attrs",toc:u},{default:e(()=>[f,n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=r=>a(l)("syntax"))},"Syntax"),t(a(c),null,{default:e(()=>[y,t(p)]),_:1}),t(a(c),null,{default:e(()=>[_,t(p)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=r=>a(l)("example"))},"Example"),t(a(c),null,{default:e(()=>[h,t(p)]),_:1})]),_:1}))}},R=k(b,[["__file","use-split-attrs.md"]]);export{R as default};
