import{c as a}from"./_examples_frameless-electron-window.js";import{D as r,a as n}from"./DocPage.js";import{_ as u}from"./index.js";import{b as p,d as h,w as t,h as e,i as o,e as s,f as c}from"./vendor.js";const f=e("p",null,"Before we can configure anything, we need to understand how the BEX is structured. A BEX can be one (or more) of the following:",-1),g=e("li",null,"Runs in its own tab in the browser",-1),m=e("li",null,"Runs in the context of a web page (injected into a website)",-1),_=e("strong",null,"all",-1),w=e("code",{class:"doc-token"},"/src-bex/manifest.json",-1),b=e("p",null,"When you create your Quasar BEX, the manifest file is already configured to add the basic properties you will need in order to run your BEX. This includes default background scripts, content scripts and a css file which is injected in the context of the web page the BEX is running on.",-1),k=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"Be aware that the manifest.json file is modified on build so as to auto inject required javascript files.")],-1),v=e("p",null,"In summary:",-1),x=e("ul",null,[e("li",null,[e("strong",null,"Background Script"),o(" - runs in the context of the BEX itself and can listen to all available browser extension events. There will only ever be one instance of each background script "),e("em",null,"per BEX"),o(".")]),e("li",null,[e("strong",null,"Content Script"),o(" - runs in the context of the web page. There will be a new content script instance per tab running the extension.")])],-1),y=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[o("Given content scripts run in the web page context, this means that only BEX’s that interact with a web page can use content scripts. Popups, Options and Devtools "),e("strong",null,"will not"),o(" have a "),e("em",null,"content script"),o(" running behind them. They will all however have a "),e("em",null,"background script"),o(".")])],-1),B={class:"doc-note doc-note--warning"},j=e("p",{class:"doc-note__title"},"WARNING",-1),C=e("p",null,[o("Any styles you want to be made available to your web page (not your Quasar App) should be included in "),e("code",{class:"doc-token"},"src-bex/css/content-css.css"),o(" as this file is automatically injected into the "),e("code",{class:"doc-token"},"manifest.json"),o(" file.")],-1),E=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"This must be native CSS as it’s not preprocessed via Sass.")],-1),X=e("code",{class:"doc-token"},"background-hook.js",-1),I=e("code",{class:"doc-token"},"content-hook.js",-1),S=e("code",{class:"doc-token"},"dom-hook.js",-1),T={__name:"configuring-bex",setup(A){const d=[{id:"manifest-json",title:"2. Manifest.json"},{id:"background-and-content-scripts",title:"3. Background And Content Scripts"},{id:"css",title:"4. CSS"},{id:"hook-files",title:"5. Hook Files"}];return(Q,i)=>(p(),h(r,{title:"Configuring BEX",desc:"(@quasar/app-webpack) How to manage your Browser Extensions with Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-browser-extensions/configuring-bex",toc:d},{default:t(()=>[f,e("ol",null,[g,e("li",null,[o("Runs in the "),s(n,{to:"https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools"},{default:t(()=>[o("Developer Tools")]),_:1}),o(" window.")]),e("li",null,[o("Runs in a "),s(n,{to:"https://developer.chrome.com/docs/extensions/develop/ui#popups"},{default:t(()=>[o("Popup")]),_:1}),o(" window.")]),e("li",null,[o("Runs as "),s(n,{to:"https://developer.chrome.com/docs/extensions/develop/ui/options-page"},{default:t(()=>[o("Options")]),_:1}),o(" window.")]),m]),e("p",null,[o("You do not need a new Quasar App per BEX type above as a single Quasar Application can run in "),_,o(" of the instances above. You can find out more about these in the "),s(n,{to:"/quasar-cli-webpack/developing-browser-extensions/types-of-bex"},{default:t(()=>[o("types section")]),_:1}),o(".")]),e("h2",{id:"manifest-json",class:"doc-heading doc-h2",onClick:i[0]||(i[0]=l=>c(a)("manifest-json"))},"Manifest.json"),e("p",null,[o("The most important config file for your BEX is "),w,o(". It is recommended that you "),s(n,{to:"https://developer.chrome.com/extensions/manifest"},{default:t(()=>[o("read up on this file")]),_:1}),o(" before starting your project.")]),b,k,e("h2",{id:"background-and-content-scripts",class:"doc-heading doc-h2",onClick:i[1]||(i[1]=l=>c(a)("background-and-content-scripts"))},"Background And Content Scripts"),e("p",null,[o("Behind every BEX is a "),s(n,{to:"https://developer.chrome.com/extensions/content_scripts"},{default:t(()=>[o("content script")]),_:1}),o(" and a "),s(n,{to:"https://developer.chrome.com/extensions/background_pages"},{default:t(()=>[o("background script")]),_:1}),o(". It’s a good idea to understand what each of these are before writing your first BEX.")]),v,x,y,e("div",B,[j,e("p",null,[o("If you’d like to use "),s(n,{to:"https://developer.chrome.com/docs/extensions/mv3/intro/"},{default:t(()=>[o("Manifest v3")]),_:1}),o(" then you will need to use Quasar CLI with Vite instead of Quasar CLI with Webpack. More details "),s(n,{to:"https://github.com/quasarframework/quasar/discussions/8844"},{default:t(()=>[o("here")]),_:1}),o(".")])]),e("h2",{id:"css",class:"doc-heading doc-h2",onClick:i[2]||(i[2]=l=>c(a)("css"))},"CSS"),C,E,e("h2",{id:"hook-files",class:"doc-heading doc-h2",onClick:i[3]||(i[3]=l=>c(a)("hook-files"))},"Hook Files"),e("p",null,[o("In a Quasar BEX, you are provided with "),X,o(", "),I,o(" and "),S,o(". These files are designed to give you access to a bridge which closes the gap in communication with each layer of a BEX. We will explore them in more detail in the "),s(n,{to:"/quasar-cli-webpack/developing-browser-extensions/bex-communication"},{default:t(()=>[o("next section")]),_:1}),o(".")])]),_:1}))}},D=u(T,[["__file","configuring-bex.md"]]);export{D as default};
