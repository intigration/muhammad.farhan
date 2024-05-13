import{c}from"./_examples_frameless-electron-window.js";import{D as d,a as p}from"./DocPage.js";import{D as m}from"./DocTree.js";import{D as l}from"./DocPrerender.js";import{C as u}from"./CopyButton.js";import{_ as g}from"./index.js";import{b as h,d as v,w as s,h as a,i as n,e as t,f as o}from"./vendor.js";const x=a("img",{src:"https://cdn.quasar.dev/img/iconfactory.png",style:{float:"right","max-width":"15%","min-width":"240px","padding-top":"40px"}},null,-1),f={class:"doc-note doc-note--tip"},q=a("p",{class:"doc-note__title"},"TIP",-1),w=a("pre",{class:"doc-code"},[a("code",null,[n("$ icongenie generate "),a("span",{class:"token parameter variable"},"-m"),n(" pwa "),a("span",{class:"token parameter variable"},"-i"),n(" /path/to/source/icon.png "),a("span",{class:"token punctuation"},"["),n("-b /path/to/background.png"),a("span",{class:"token punctuation"},"]")])],-1),P=a("p",null,[n("The required HTML code that goes into "),a("code",{class:"doc-token"},"/index.html"),n(" to reference the above files (notice not all files need to be manually referenced as Quasar CLI automatically injects the other PWA ones):")],-1),_=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("image/ico"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/favicon.ico"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("image/png"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"sizes"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("128x128"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/favicon-128x128.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("image/png"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"sizes"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("96x96"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/favicon-96x96.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("image/png"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"sizes"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("32x32"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/favicon-32x32.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("image/png"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"sizes"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("16x16"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/favicon-16x16.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},"<!-- iPhone XR -->"),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-828x1792.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},"<!-- iPhone X, XS -->"),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-1125x2436.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},"<!-- iPhone XS Max -->"),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-1242x2688.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},"<!-- iPhone 8, 7, 6s, 6 -->"),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-750x1334.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},"<!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus -->"),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-1242x2208.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},"<!-- iPhone 5 -->"),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-640x1136.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},'<!-- iPad Mini, Air, 9.7" -->'),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-1536x2048.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},'<!-- iPad Pro 10.5" -->'),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-1668x2224.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},'<!-- iPad Pro 11" -->'),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-1668x2388.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token comment"},'<!-- iPad Pro 12.9" -->'),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("link")]),n(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("apple-touch-startup-image"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"media"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icons/apple-launch-2048x2732.png"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")])])],-1),b={__name:"app-icons-pwa",setup(y){const i=[{id:"icon-genie-cli",title:"2. Icon Genie CLI"},{id:"manual-instructions",title:"3. Manual instructions"}],k={pwaTree:{l:"public",c:[{l:"favicon.ico"},{l:"icons",c:[{l:"favicon-128x128.png"},{l:"favicon-96x96.png"},{l:"favicon-32x32.png"},{l:"favicon-16x16.png"},{l:"icon-128x128.png",e:"for the PWA manifest"},{l:"icon-192x192.png",e:"for the PWA manifest"},{l:"icon-256x256.png",e:"for the PWA manifest"},{l:"icon-384x384.png",e:"for the PWA manifest"},{l:"icon-512x512.png",e:"for the PWA manifest"},{l:"ms-icon-144x144.png"},{l:"safari-pinned-tab.svg"},{l:"apple-icon-120x120.png"},{l:"apple-icon-152x152.png"},{l:"apple-icon-167x167.png"},{l:"apple-icon-180x180.png"},{l:"apple-icon-828x1792.png"},{l:"apple-icon-1125x2436.png"},{l:"apple-icon-1242x2688.png"},{l:"apple-icon-750x1334.png"},{l:"apple-icon-1242x2208.png"},{l:"apple-icon-640x1136.png"},{l:"apple-icon-1536x2048.png"},{l:"apple-icon-1668x2224.png"},{l:"apple-icon-1668x2388.png"},{l:"apple-icon-2048x2732.png"}]}]}};return(I,e)=>(h(),v(d,{title:"App Icons for PWA",desc:"(@quasar/app-vite) How to manage the app icons for a Quasar Progressive Web App.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-pwa/app-icons-pwa",toc:i},{default:s(()=>[a("p",null,[n("This build target includes a variety of special icons for individual browsers and operating systems. You need all of them - and if you discover one that is new or missing, please "),t(p,{to:"https://github.com/quasarframework/quasar/issues"},{default:s(()=>[n("open an issue")]),_:1}),n(".")]),x,a("h2",{id:"icon-genie-cli",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=r=>o(c)("icon-genie-cli"))},"Icon Genie CLI"),a("div",f,[q,a("p",null,[n("We highly recommend using the "),t(p,{to:"/icongenie/introduction"},{default:s(()=>[n("Icon Genie CLI")]),_:1}),n(", because it consumes a source icon and automatically clones, scales, minifies and places the icons in the appropriate directories for you. When needed, it also tells you what tags you’ll need to add to your /index.html file.")])]),a("p",null,[n("Quickly bootstrap the necessary images with Icon Genie CLI. For a complete list of options, please visit the "),t(p,{to:"/icongenie/command-list"},{default:s(()=>[n("Icon Genie CLI")]),_:1}),n(" command list page.")]),t(o(l),null,{default:s(()=>[w,t(u,{lang:"bash"})]),_:1}),a("h2",{id:"manual-instructions",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=r=>o(c)("manual-instructions"))},"Manual instructions"),t(m,{def:k.pwaTree},null,8,["def"]),P,t(o(l),null,{default:s(()=>[_,t(u)]),_:1})]),_:1}))}},M=g(b,[["__file","app-icons-pwa.md"]]);export{M as default};
