import{c as u}from"./_examples_frameless-electron-window.js";import{D as k,a as m}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as d}from"./index.js";import{b as f,d as y,w as a,h as n,i as t,e as s,f as e}from"./vendor.js";const g=n("p",null,"For static meta configuration (non-reactive):",-1),h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token comment"},"/* meta config */"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}")])],-1),_=n("p",null,"For dynamic meta configuration (reactive):",-1),w=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token comment"},"// essentially acting as a computed property"),t(`
  `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token comment"},"// compute or reference other stuff"),t(`
    `),n("span",{class:"token comment"},"// in your component"),t(`
    `),n("span",{class:"token comment"},"// then return:"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token comment"},"/* meta config */"),t(),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}")])],-1),x=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useMeta "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'quasar'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" title "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some title'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token comment"},'// we define the "title" prop'),t(`

    `),n("span",{class:"token comment"},"// NOTICE the parameter here is a function"),t(`
    `),n("span",{class:"token comment"},"// Under the hood, it is converted to a Vue computed prop for reactivity"),t(`
    `),n("span",{class:"token function"},"useMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},'// whenever "title" from above changes, your meta will automatically update'),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" title"),n("span",{class:"token punctuation"},"."),t(`value
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"setAnotherTitle"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      title`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'Another title'"),t(),n("span",{class:"token comment"},"// will automatically trigger a Meta update due to the binding"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      setAnotherTitle
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")])])],-1),v={__name:"use-meta",setup(M){const l=[{name:"Meta",category:"Quasar Plugins",path:"/quasar-plugins/meta"}],i=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(b,o)=>(f(),y(k,{title:"useMeta composable",desc:"What is Quasar's useMeta() composable and how you can use it",heading:"","edit-link":"vue-composables/use-meta",toc:i,related:l},{default:a(()=>[n("p",null,[t("The useMeta composable is part of "),s(m,{to:"/quasar-plugins/meta"},{default:a(()=>[t("Quasar Meta Plugin")]),_:1}),t(". If you haven’t dug into it by now, please have a first read there.")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=r=>e(u)("syntax"))},"Syntax"),g,s(e(c),null,{default:a(()=>[h,s(p)]),_:1}),_,s(e(c),null,{default:a(()=>[w,s(p)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=r=>e(u)("example"))},"Example"),s(e(c),null,{default:a(()=>[x,s(p)]),_:1})]),_:1}))}},P=d(v,[["__file","use-meta.md"]]);export{P as default};
