import{c as l}from"./_examples_frameless-electron-window.js";import{D as r,a as i}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as d}from"./index.js";import{b as m,d as g,w as t,h as n,i as a,e as s,f as o}from"./vendor.js";const f=n("p",null,"A few examples of such APIs:",-1),h=n("ul",null,[n("li",null,"Background Task"),n("li",null,"Camera"),n("li",null,"Console"),n("li",null,"Device"),n("li",null,"Filesystem"),n("li",null,"Geolocation"),n("li",null,"Motion"),n("li",null,"Network"),n("li",null,"Push Notifications"),n("li",null,"Share"),n("li",null,"Splash Screen"),n("li",null,"Status Bar")],-1),w=n("p",null,"Let’s learn by taking some examples, assuming you’ve added Capacitor mode to your Quasar project already.",-1),y=n("p",null,"Now let’s put this plugin to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:",-1),v=n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    GPS position: `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("strong")]),n("span",{class:"token punctuation"},">")]),a("{{ position }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("strong")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted"),n("span",{class:"token punctuation"},","),a(" onBeforeUnmount "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Geolocation "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/geolocation'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" position "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'determining...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Geolocation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newPosition"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Current'"),n("span",{class:"token punctuation"},","),a(" newPosition"),n("span",{class:"token punctuation"},")"),a(`
        position`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` newPosition
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"let"),a(` geoId

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"getCurrentPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token comment"},"// we start listening"),a(`
      geoId `),n("span",{class:"token operator"},"="),a(" Geolocation"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"watchPosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("newPosition"),n("span",{class:"token punctuation"},","),a(" err")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'New GPS position'"),n("span",{class:"token punctuation"},")"),a(`
        position`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(` newPosition
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onBeforeUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// we do cleanup"),a(`
      Geolocation`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearWatch"),n("span",{class:"token punctuation"},"("),a("geoId"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      position
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])],-1),_=n("p",null,"Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:",-1),C=n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("q-btn")]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Get Picture"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("captureImage"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("img")]),a(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("imageSrc"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Camera"),n("span",{class:"token punctuation"},","),a(" CameraResultType "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/camera'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" imageSrc "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"async"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"captureImage"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" image "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(" Camera"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPhoto"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"quality"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"allowEditing"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"resultType"),n("span",{class:"token operator"},":"),a(" CameraResultType"),n("span",{class:"token punctuation"},"."),a(`Uri
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

      `),n("span",{class:"token comment"},"// The result will vary on the value of the resultType option."),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.Uri - Get the result from image.webPath"),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.Base64 - Get the result from image.base64String"),a(`
      `),n("span",{class:"token comment"},"// CameraResultType.DataUrl - Get the result from image.dataUrl"),a(`
      imageSrc`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" image"),n("span",{class:"token punctuation"},"."),a(`webPath
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      imageSrc`),n("span",{class:"token punctuation"},","),a(`
      captureImage
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])],-1),P=n("p",null,"Some Capacitor plugins, such as Camera, have a web-based UI available when not running natively but in a standard web browser. To enable these controls, add @ionic/pwa-elements to your project:",-1),b=n("pre",{class:"doc-code"},[n("code",null,[a("$ "),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" @ionic/pwa-elements")])],-1),I=n("p",null,[a("Then create a boot file to initialize them, for example "),n("code",{class:"doc-token"},"src/boot/capacitor.js"),a(":")],-1),x=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineCustomElements "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ionic/pwa-elements/loader'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"defineCustomElements"),n("span",{class:"token punctuation"},"("),a("window"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}")])],-1),A=n("p",null,[a("Don’t forget to call the boot script in the "),n("code",{class:"doc-token"},"quasar.config"),a(" file:")],-1),G=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"boot"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'capacitor'"),n("span",{class:"token punctuation"},"]")])],-1),S=n("p",null,"Now you are able to use the Camera API not just in native Android or iOS, but also in web based projects like a SPA or PWA.",-1),D=n("p",null,"Now let’s put this API to some good use. In one of your Quasar project’s pages/layouts/components Vue file, we write:",-1),T=n("pre",{class:"doc-code"},[n("code",null,[a(`// some Vue file
// remember this is simply an example;
// only look at how we use the API described in the plugin's page;
// the rest of things here are of no importance

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Model: {{ model }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Manufacturer: {{ manufacturer }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Device "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@capacitor/device'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" model "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Please wait...'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" manufacturer "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Please wait...'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Device`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"info"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        model`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" info"),n("span",{class:"token punctuation"},"."),a(`model
        manufacturer`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" info"),n("span",{class:"token punctuation"},"."),a(`manufacturer
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      model`),n("span",{class:"token punctuation"},","),a(`
      manufacturer
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")])])],-1),j={__name:"capacitor-api",setup(q){const k=[{id:"capacitor-apis",title:"2. Capacitor APIs"},{id:"using-a-capacitor-api",title:"3. Using a Capacitor API"},{id:"example-geolocation",title:"3.1. Example: Geolocation",sub:!0},{id:"example-camera",title:"3.2. Example: Camera",sub:!0},{id:"example-device",title:"3.3. Example: Device",sub:!0}];return(N,e)=>(m(),g(r,{title:"Capacitor APIs",desc:"(@quasar/app-vite) How to use the Capacitor plugins in a Quasar app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-capacitor-apps/capacitor-api",toc:k},{default:t(()=>[n("p",null,[a("You can hook into the native device APIs by using "),s(i,{to:"https://capacitor.ionicframework.com/docs/apis"},{default:t(()=>[a("Capacitor APIs")]),_:1}),a(".")]),n("h2",{id:"capacitor-apis",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=u=>o(l)("capacitor-apis"))},"Capacitor APIs"),f,h,n("h2",{id:"using-a-capacitor-api",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=u=>o(l)("using-a-capacitor-api"))},"Using a Capacitor API"),w,n("h3",{id:"example-geolocation",class:"doc-heading doc-h3",onClick:e[2]||(e[2]=u=>o(l)("example-geolocation"))},"Example: Geolocation"),n("p",null,[a("First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s "),s(i,{to:"https://capacitor.ionicframework.com/docs/apis/geolocation"},{default:t(()=>[a("Geolocation API")]),_:1}),a(".")]),y,s(o(c),null,{default:t(()=>[v,s(p)]),_:1}),n("h3",{id:"example-camera",class:"doc-heading doc-h3",onClick:e[3]||(e[3]=u=>o(l)("example-camera"))},"Example: Camera"),n("p",null,[a("First step is to read the documentation of the Capacitor API that we want to use. We look at Capacitor’s "),s(i,{to:"https://capacitor.ionicframework.com/docs/apis/camera"},{default:t(()=>[a("Camera API")]),_:1}),a(".")]),_,s(o(c),null,{default:t(()=>[C,s(p)]),_:1}),P,s(o(c),null,{default:t(()=>[b,s(p,{lang:"bash"})]),_:1}),I,s(o(c),null,{default:t(()=>[x,s(p)]),_:1}),A,s(o(c),null,{default:t(()=>[G,s(p)]),_:1}),S,n("h3",{id:"example-device",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=u=>o(l)("example-device"))},"Example: Device"),n("p",null,[a("First step is to read the documentation of the Capacitor API that we want to use. Look at the Capacitor’s "),s(i,{to:"https://capacitor.ionicframework.com/docs/apis/device"},{default:t(()=>[a("Device API")]),_:1}),a(".")]),D,s(o(c),null,{default:t(()=>[T,s(p)]),_:1})]),_:1}))}},$=d(j,[["__file","capacitor-api.md"]]);export{$ as default};
