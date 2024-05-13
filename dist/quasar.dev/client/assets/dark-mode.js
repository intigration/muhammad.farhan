import{c as l}from"./_examples_frameless-electron-window.js";import{D as p,a as h}from"./DocPage.js";import{D as i}from"./DocPrerender.js";import{C as r}from"./CopyButton.js";import{_ as k}from"./index.js";import{b as m,d as y,w as n,h as e,f as a,i as o,e as s}from"./vendor.js";const g=e("p",null,"Dark Mode is a supplemental mode that can be used to display mostly dark surfaces on the UI. The design reduces the light emitted by device screens while maintaining the minimum color contrast ratios required for readability.",-1),f=e("p",null,"The advantages of Dark Mode are that:",-1),w=e("ul",null,[e("li",null,"It enhances visual ergonomics by reducing eye strain."),e("li",null,"Provides comfort of use at night or in dark environments."),e("li",null,"It conserves battery power mainly if the device screen is OLED or AMOLED, thereby enabling device usage for longer periods without charging.")],-1),_=e("ol",null,[e("li",null,[o("It sets a default dark background for the pages (that you can easily override through CSS with the "),e("code",{class:"doc-token"},"body.body--dark"),o(" selector)")]),e("li",null,[o("All Quasar components with a "),e("code",{class:"doc-token"},"dark"),o(" property will have it automatically set to "),e("code",{class:"doc-token"},"true"),o(". No need to do it manually.")])],-1),b=e("p",null,[o("The auto-detection works by looking at "),e("code",{class:"doc-token"},"prefers-color-scheme: dark"),o(" media query and is dynamic. If the client browser/platform switches to/from Dark mode while your app is running, it will also update Quasar’s Dark mode (if Dark mode is set to "),e("code",{class:"doc-token"},"auto"),o(").")],-1),D=e("p",null,[o("Since your app can be in Dark mode or not, you can easily style it by taking advantage of the "),e("code",{class:"doc-token"},"body"),o(" tag attached CSS class: "),e("code",{class:"doc-token"},"body--light"),o(" or "),e("code",{class:"doc-token"},"body--dark"),o(". "),e("strong",null,"That is if you want to support both modes.")],-1),v=e("pre",{class:"doc-code language-css"},[e("code",null,[e("span",{class:"token selector"},".body--light"),o(),e("span",{class:"token punctuation"},"{"),o(`
  `),e("span",{class:"token comment"},"/* ... */"),o(`
`),e("span",{class:"token punctuation"},"}"),o(`

`),e("span",{class:"token selector"},".body--dark"),o(),e("span",{class:"token punctuation"},"{"),o(`
  `),e("span",{class:"token comment"},"/* ... */"),o(`
`),e("span",{class:"token punctuation"},"}")])],-1),C=e("p",null,"Should you wish to override the default Dark mode page background color:",-1),S=e("pre",{class:"doc-code language-css"},[e("code",null,[e("span",{class:"token selector"},"body.body--dark"),o(),e("span",{class:"token punctuation"},"{"),o(`
  `),e("span",{class:"token property"},"background"),e("span",{class:"token punctuation"},":"),o(` #000
`),e("span",{class:"token punctuation"},"}")])],-1),H={__name:"dark-mode",setup(I){const c=[{name:"Dark",category:"Quasar Plugins",path:"/quasar-plugins/dark"},{name:"Theme Builder",category:"Style & Identity",path:"/style/theme-builder"}],u=[{id:"what-it-does",title:"2. What it does"},{id:"how-to-use-it",title:"3. How to use it"},{id:"how-to-style-your-app",title:"4. How to style your app"}];return(T,t)=>(m(),y(p,{title:"Dark Mode",desc:"Handle dark mode with Quasar.",heading:"","edit-link":"style/dark-mode",toc:u,related:c},{default:n(()=>[g,f,w,e("h2",{id:"what-it-does",class:"doc-heading doc-h2",onClick:t[0]||(t[0]=d=>a(l)("what-it-does"))},"What it does"),_,b,e("h2",{id:"how-to-use-it",class:"doc-heading doc-h2",onClick:t[1]||(t[1]=d=>a(l)("how-to-use-it"))},"How to use it"),e("p",null,[o("You can easily switch between Dark mode and light mode (which is default) through the "),s(h,{to:"/quasar-plugins/dark"},{default:n(()=>[o("Dark Plugin")]),_:1}),o(".")]),e("h2",{id:"how-to-style-your-app",class:"doc-heading doc-h2",onClick:t[2]||(t[2]=d=>a(l)("how-to-style-your-app"))},"How to style your app"),D,s(a(i),null,{default:n(()=>[v,s(r)]),_:1}),C,s(a(i),null,{default:n(()=>[S,s(r)]),_:1})]),_:1}))}},Q=k(H,[["__file","dark-mode.md"]]);export{Q as default};
