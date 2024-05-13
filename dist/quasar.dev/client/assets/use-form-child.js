import{c as i}from"./_examples_frameless-electron-window.js";import{D as p,a as l}from"./DocPage.js";import{D as u}from"./DocPrerender.js";import{C as m}from"./CopyButton.js";import{_ as d}from"./index.js";import{b as k,d as f,w as s,h as n,i as o,e as t,f as e}from"./vendor.js";const h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),o(),n("span",{class:"token punctuation"},"{"),o(" useFormChild "),n("span",{class:"token punctuation"},"}"),o(),n("span",{class:"token keyword"},"from"),o(),n("span",{class:"token string"},"'quasar'"),o(`

`),n("span",{class:"token function"},"setup"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(`
  `),n("span",{class:"token comment"},"// function validate () { ... }"),o(`
  `),n("span",{class:"token comment"},"// function resetValidation () { ... }"),o(`

  `),n("span",{class:"token function"},"useFormChild"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),o(`
    validate`),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token comment"},"// Function; Can be async;"),o(`
              `),n("span",{class:"token comment"},"// Should return a Boolean (or a Promise resolving to a Boolean)"),o(`
    resetValidation`),n("span",{class:"token punctuation"},","),o("    "),n("span",{class:"token comment"},"// Optional function which resets validation"),o(`
    `),n("span",{class:"token literal-property property"},"requiresQForm"),n("span",{class:"token operator"},":"),o(),n("span",{class:"token boolean"},"true"),o(),n("span",{class:"token comment"},"// should it error out if no parent QForm is found?"),o(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),o(`
`),n("span",{class:"token punctuation"},"}")])],-1),y={__name:"use-form-child",setup(_){const c=[{name:"Form",category:"Form Components",path:"/vue-components/form"}],r=[{id:"syntax",title:"2. Syntax"}];return(w,a)=>(k(),f(p,{title:"useFormChild composable",desc:"What is Quasar's useFormChild() composable and how you can use it",heading:"","edit-link":"vue-composables/use-form-child",toc:r,related:c},{default:s(()=>[n("p",null,[o("This composable refers to "),t(l,{to:"/vue-components/form"},{default:s(()=>[o("QForm")]),_:1}),o(" wrapping your own custom component which you want to communicate with.")]),n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=C=>e(i)("syntax"))},"Syntax"),t(e(u),null,{default:s(()=>[h,t(m)]),_:1})]),_:1}))}},D=d(y,[["__file","use-form-child.md"]]);export{D as default};
