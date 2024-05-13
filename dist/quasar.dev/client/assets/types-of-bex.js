import{c as l}from"./_examples_frameless-electron-window.js";import{D as r}from"./DocPage.js";import{D as p}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as k}from"./index.js";import{b as d,d as h,w as e,h as n,f as a,e as t,i as s}from"./vendor.js";const g=n("p",null,"As already discussed, Quasar can handle the various places where a browser extension can live, namely New Tab, Web Page, Dev Tools Options or Popup. You don’t need a separate Quasar App for each of these. You can do some handy work with the router.",-1),m=n("p",null,"This is the default way in which a BEX will run. It is accessed by clicking on the BEX icon in your browser. The Quasar App will run in that new (blank) tab.",-1),w=n("p",null,[s("These all follow the same pattern, set up a route and configure the "),n("code",{class:"doc-token"},"manifest.json"),s(" file to look at that route when it’s trying to show either one of the types. For instance:")],-1),f=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" routes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/options'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/OptionsPage.vue'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/popup'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/PopupPage.vue'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/devtools'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'pages/DevToolsPage.vue'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]")])],-1),y=n("p",null,[s("You could configure your "),n("code",{class:"doc-token"},"manifest.json"),s(" file with the following so the options page is loaded from that route:")],-1),v=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"manifest_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token property"},'"options_page"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www/index.html#/options"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Options Page"),s(`
  `),n("span",{class:"token property"},'"browser_action"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"default_popup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www/index.html#/popup"'),s(),n("span",{class:"token comment"},"// Popup Page"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"devtools_page"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www/index.html#/devtools"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Dev Tools"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),_=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"manifest_version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token property"},'"action"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"default_popup"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www/index.html#/popup"'),s(),n("span",{class:"token comment"},"// Popup Page"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options_page"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www/index.html#/options"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Options Page"),s(`
  `),n("span",{class:"token property"},'"devtools_page"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"www/index.html#/devtools"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Dev Tools"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),b=n("p",null,"This is where the real power comes in. With a little ingenuity we can inject our Quasar application into a web page and use it as an overlay making it seem like our Quasar App is part of the page experience.",-1),x=n("p",null,"Here’s a brief rundown of how you could achieve this:",-1),F=n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"src-bex/my-content-script.js")])],-1),T=n("p",null,"The idea here is to create an IFrame and add our Quasar app into it, then inject that into the page.",-1),I=n("p",null,"Given our Quasar App might need to take the full height of the window (and thus stop any interaction with the underlying page) we have an event to handle setting the height of the IFrame. By default the IFrame height is just high enough to allow for the Quasar toolbar to show (and in turn allowing interaction with the rest of the page).",-1),Q=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// Hooks added here have a bridge allowing communication between the BEX Content Script and the Quasar Application."),s(`
`),n("span",{class:"token comment"},"// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/content-hooks"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" bexContent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar/wrappers'"),s(`

`),n("span",{class:"token keyword"},"const"),s(`
  iFrame `),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'iframe'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  defaultFrameHeight `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'62px'"),s(`

`),n("span",{class:"token comment"},`/**
 * Set the height of our iFrame housing our BEX
 * @param height
 */`),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"setIFrameHeight"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"height"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  iFrame`),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(` height
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * Reset the iFrame to its default height e.g The height of the top bar.
 */`),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"resetIFrameHeight"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setIFrameHeight"),n("span",{class:"token punctuation"},"("),s("defaultFrameHeight"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * The code below will get everything going. Initialize the iFrame with defaults and add it to the page.
 * @type {string}
 */`),s(`
iFrame`),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bex-app-iframe'"),s(`
iFrame`),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'100%'"),s(`
`),n("span",{class:"token function"},"resetIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Assign some styling so it looks seamless"),s(`
Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("iFrame"),n("span",{class:"token punctuation"},"."),s("style"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fixed'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"top"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"bottom"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"border"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'9999999'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Make sure it's on top"),s(`
  `),n("span",{class:"token literal-property property"},"overflow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'visible'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// When the page loads, insert our browser extension app."),s(`
  iFrame`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(" chrome"),n("span",{class:"token punctuation"},"."),s("runtime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getURL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'www/index.html'"),n("span",{class:"token punctuation"},")"),s(`
  document`),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),s("iFrame"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"bexContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"bridge"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * When the drawer is toggled set the iFrame height to take the whole page.
   * Reset when the drawer is closed.
   */`),s(`
  bridge`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'wb.drawer.toggle'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" data"),n("span",{class:"token punctuation"},","),s(" respond "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},"."),s("open"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"setIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'100%'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"resetIFrameHeight"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),P=n("p",null,"We can call this event from our Quasar App any time we know we’re opening the drawer and thus changing the height of the IFrame to allow the whole draw to be visible.",-1),q=n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"src-bex/assets/content.css")])],-1),O=n("p",null,"Add a margin to the top of our document so our Quasar toolbar doesn’t overlap the actual page content.",-1),A=n("pre",{class:"doc-code language-css"},[n("code",null,[n("span",{class:"token selector"},".target-some-header-class"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 62px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),B=n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"Quasar App (/src)")])],-1),C=n("p",null,"Then in our Quasar app (/src), we have a function that toggles the drawer and sends an event to the content script telling it to resize the IFrame thus allowing our whole app to be visible:",-1),H=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("q-drawer")]),s(),n("span",{class:"token attr-name"},":model-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("drawerIsOpen"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"@update:"),s("model-value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("drawerToggled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  Some Content
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("q-drawer")]),n("span",{class:"token punctuation"},">")])])],-1),j=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useQuasar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'quasar'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" $q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useQuasar"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" drawerIsOpen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"drawerToggled"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"await"),s(" $q"),n("span",{class:"token punctuation"},"."),s("bex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'wb.drawer.toggle'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(" drawerIsOpen"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token comment"},"// So it knows to make it bigger / smaller"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token comment"},"// Only set this once the promise has resolved so we can see the entire slide animation."),s(`
    drawerIsOpen`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("drawerIsOpen"),n("span",{class:"token punctuation"},"."),s(`value
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" drawerToggled "),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),D=n("p",null,"Now you have a Quasar App running in a web page. You can now trigger other events from the Quasar App that the content script can listen to and interact with the underlying page.",-1),N=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("Be sure to check your manifest file, especially around the reference to "),n("code",{class:"doc-token"},"my-content-script.js"),s(". Note that "),n("strong",null,"you can have multiple content scripts"),s(". Whenever you create a new one, you need to reference it in the manifest file, and in the bex.contentScripts section of the quasar.config file.")])],-1),W={__name:"types-of-bex",setup(E){const u=[{id:"new-tab",title:"2. New Tab"},{id:"dev-tools-options-and-popup",title:"3. Dev Tools, Options and Popup"},{id:"web-page",title:"4. Web Page"}];return($,o)=>(d(),h(r,{title:"Types of BEX",desc:"(@quasar/app-vite) How to configure each type of Browser Extensions in Quasar.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-browser-extensions/types-of-bex",toc:u},{default:e(()=>[g,n("h2",{id:"new-tab",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=i=>a(l)("new-tab"))},"New Tab"),m,n("h2",{id:"dev-tools-options-and-popup",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=i=>a(l)("dev-tools-options-and-popup"))},"Dev Tools, Options and Popup"),w,t(a(p),{title:"routes.js:"},{default:e(()=>[f,t(c)]),_:1}),y,n("h4",{id:"manifest-v2",class:"doc-heading doc-h4",onClick:o[2]||(o[2]=i=>a(l)("manifest-v2"))},"manifest v2"),t(a(p),null,{default:e(()=>[v,t(c)]),_:1}),n("h4",{id:"manifest-v3",class:"doc-heading doc-h4",onClick:o[3]||(o[3]=i=>a(l)("manifest-v3"))},"manifest v3"),t(a(p),null,{default:e(()=>[_,t(c)]),_:1}),n("h2",{id:"web-page",class:"doc-heading doc-h2",onClick:o[4]||(o[4]=i=>a(l)("web-page"))},"Web Page"),b,x,F,T,I,t(a(p),{title:"/src-bex/my-content-script.js"},{default:e(()=>[Q,t(c)]),_:1}),P,q,O,t(a(p),null,{default:e(()=>[A,t(c)]),_:1}),B,C,t(a(p),null,{default:e(()=>[H,t(c)]),_:1}),t(a(p),null,{default:e(()=>[j,t(c)]),_:1}),D,N]),_:1}))}},G=k(W,[["__file","types-of-bex.md"]]);export{G as default};
