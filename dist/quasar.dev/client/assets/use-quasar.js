import{c}from"./_examples_frameless-electron-window.js";import{D as r,a as d}from"./DocPage.js";import{D as p}from"./DocPrerender.js";import{C as u}from"./CopyButton.js";import{_ as m}from"./index.js";import{b as f,d as g,w as o,h as n,i as s,e as a,f as e}from"./vendor.js";const y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("$q.platform.is.ios"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      Gets rendered only on iOS platform.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("$q"),n("span",{class:"token punctuation"},"."),s("platform"),n("span",{class:"token punctuation"},"."),s("is"),n("span",{class:"token punctuation"},"."),s("ios"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// showing an example on a method, but"),s(`
    `),n("span",{class:"token comment"},"// can be any part of Vue script"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"show"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// prints out Quasar version"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("$q"),n("span",{class:"token punctuation"},"."),s("version"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      show
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")])])],-1),x={__name:"use-quasar",setup(_){const l=[{name:"The $q object",category:"Options & Helpers",path:"/options/the-q-object"}],i=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(w,t)=>(f(),g(r,{title:"useQuasar composable",desc:"What is useQuasar() composable and how you can use it",heading:"","edit-link":"vue-composables/use-quasar",toc:i,related:l},{default:o(()=>[n("p",null,[s("The useQuasar composable is used in order to get access to the "),a(d,{to:"/options/the-q-object"},{default:o(()=>[s("$q Object")]),_:1}),s(".")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=k=>e(c)("syntax"))},"Syntax"),a(e(p),null,{default:o(()=>[y,a(u)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=k=>e(c)("example"))},"Example"),a(e(p),null,{default:o(()=>[h,a(u)]),_:1})]),_:1}))}},C=m(x,[["__file","use-quasar.md"]]);export{C as default};
