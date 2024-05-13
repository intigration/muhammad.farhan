import{c as l}from"./_examples_frameless-electron-window.js";import{D as i}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as k}from"./index.js";import{b as d,d as m,w as e,h as n,f as a,e as t,i as s}from"./vendor.js";const v=n("p",null,[s("The "),n("code",{class:"doc-token"},"useInterval()"),s(" composable is similar in scope with the native "),n("code",{class:"doc-token"},"setInterval()"),s(", with some key differences. The composable takes care of “cancelling” the interval if your component gets destroyed and you can also override the executing Function while it’s running.")],-1),f=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useInterval "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    registerInterval`),n("span",{class:"token punctuation"},","),s(`
    removeInterval
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),y=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"registerInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"interval"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token operator"},"|"),s(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"removeInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")])],-1),h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useInterval "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" registerInterval "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onSomeEvent"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"param"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"registerInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'param is'"),n("span",{class:"token punctuation"},","),s(" param"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// every 2 seconds"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token comment"},"// You can call onSomeEvent() multiple"),s(`
  `),n("span",{class:"token comment"},"// times in a row and only the last"),s(`
  `),n("span",{class:"token comment"},"// registered Function will run when it"),s(`
  `),n("span",{class:"token comment"},"// is time for it"),s(`

  `),n("span",{class:"token comment"},"// Note that the interval is reset each"),s(`
  `),n("span",{class:"token comment"},"// time you register/override it"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),I=n("p",null,"Should you need more than one useInterval() per component, simply rename the functions of the returned object:",-1),_=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerInterval"),n("span",{class:"token operator"},":"),s(" registerFirstInterval"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeInterval"),n("span",{class:"token operator"},":"),s(` removeFirstInterval
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"registerInterval"),n("span",{class:"token operator"},":"),s(" registerSecondInterval"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"removeInterval"),n("span",{class:"token operator"},":"),s(` removeSecondInterval
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")])],-1),g={__name:"use-interval",setup(w){const r=[{id:"syntax",title:"2. Syntax"},{id:"example",title:"3. Example"}];return(x,o)=>(d(),m(i,{title:"useInterval composable",desc:"What is useInterval() composable and how you can use it",badge:"Quasar v2.15.1+",heading:"","edit-link":"vue-composables/use-interval",toc:r},{default:e(()=>[v,n("h2",{id:"syntax",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=u=>a(l)("syntax"))},"Syntax"),t(a(c),null,{default:e(()=>[f,t(p)]),_:1}),t(a(c),null,{default:e(()=>[y,t(p)]),_:1}),n("h2",{id:"example",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=u=>a(l)("example"))},"Example"),t(a(c),null,{default:e(()=>[h,t(p)]),_:1}),I,t(a(c),null,{default:e(()=>[_,t(p)]),_:1})]),_:1}))}},F=k(g,[["__file","use-interval.md"]]);export{F as default};
