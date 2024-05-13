import{b as k,d,w as t,h as n,i as s,e as a,f as e,j as m,l as f}from"./vendor.js";import{c}from"./_examples_frameless-electron-window.js";import{D as h,a as p}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as r}from"./CopyButton.js";import{_ as g}from"./index.js";const y=n("p",null,[s("Notice that your scaffolded project folder contains a "),n("code",{class:"doc-token"},"/quasar.config"),s(" file. So what can you configure through it? Basically anything that Quasar CLI does for you.")],-1),v=n("li",null,"Quasar components, directives and plugins that you’ll be using in your website/app",-1),b=n("li",null,"Development server port, HTTPS mode, hostname and so on",-1),w=n("code",{class:"doc-token"},"/src/boot",-1),_=n("li",null,"Global CSS/Sass/… files to be included in the bundle",-1),x=n("li",null,"SPA, PWA, Electron, Capacitor, Cordova, SSR, BEX (browser extensions) configuration",-1),S=n("li",null,"Extend the under the hood tools, like the generated Vite config",-1),q=n("li",null,"…and many many more that you’ll discover along the way",-1),C=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"You’ll notice that changing any of these settings does not require you to manually reload the dev server. Quasar detects and reloads the necessary processes. You won’t lose your development flow, because you can just sit back while Quasar CLI quickly reloads the changed code, even keeping the current state. This saves tons of your time!")],-1),Q={class:"doc-note doc-note--warning"},P=n("p",{class:"doc-note__title"},"WARNING",-1),O=n("code",{class:"doc-token"},"/quasar.config",-1),V=n("p",null,[s("You’ll notice that the "),n("code",{class:"doc-token"},"/quasar.config"),s(" file exports a function that takes a "),n("code",{class:"doc-token"},"ctx"),s(" (context) parameter and returns an Object. This allows you to dynamically change your website/app config based on this context:")],-1),A=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// can be async too"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// Example output on console:"),s(`
  `),n("span",{class:"token comment"},`/*
  {
    dev: true,
    prod: false,
    mode: { spa: true },
    modeName: 'spa',
    target: {},
    targetName: undefined,
    arch: {},
    archName: undefined,
    debug: undefined
  }
  */`),s(`

  `),n("span",{class:"token comment"},"// context gets generated based on the parameters"),s(`
  `),n("span",{class:"token comment"},'// with which you run "quasar dev" or "quasar build"'),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ... your config"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),I=n("p",null,"What this means is that, as an example, you can load a font when building for a certain mode (like PWA), and pick another one for the others:",-1),F=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"extras"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("mode"),n("span",{class:"token punctuation"},"."),s("pwa "),n("span",{class:"token comment"},"// we're adding only if working on a PWA"),s(`
      `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'roboto-font'"),s(`
      `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),E=n("p",null,"Or you can use a global CSS file for SPA mode and another one for Cordova mode while avoiding loading any such file for the other modes.",-1),B=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"css"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("mode"),n("span",{class:"token punctuation"},"."),s("spa "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'app-spa.sass'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// looks for /src/css/app-spa.sass"),s(`
    ctx`),n("span",{class:"token punctuation"},"."),s("mode"),n("span",{class:"token punctuation"},"."),s("cordova "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'app-cordova.sass'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s("  "),n("span",{class:"token comment"},"// looks for /src/css/app-cordova.sass"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),D=n("p",null,"Or you can configure the dev server to run on port 8000 for SPA mode, on port 9000 for PWA mode or on port 9090 for the other modes:",-1),N=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"port"),n("span",{class:"token operator"},":"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("mode"),n("span",{class:"token punctuation"},"."),s(`spa
      `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"8000"),s(`
      `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},"."),s("mode"),n("span",{class:"token punctuation"},"."),s("pwa "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"9000"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9090"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),T=n("p",null,"You can also do async work before returning the quasar configuration:",-1),j=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"someAsyncFunction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},'// ... use "data"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// or:"),s(`
module`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// some async work then:"),s(`
    `),n("span",{class:"token comment"},"// resolve() with the quasar config"),s(`
    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),M=n("p",null,"The possibilities are endless.",-1),R=n("p",null,[s("You can wrap the returned function with "),n("code",{class:"doc-token"},"configure()"),s(" helper to get a better IDE autocomplete experience (through TypeScript):")],-1),$=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" configure "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'quasar/wrappers'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"configure"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"/* configuration options */"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),W=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Global CSS/Stylus/SCSS/SASS/... files from \`/src/css/\`,
 * except for theme files, which are included by default.
 */`),s(`
css`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])],-1),L=n("p",null,"Example:",-1),H=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"css"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string"},"'app.sass'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// referring to /src/css/app.sass"),s(`
    `),n("span",{class:"token string"},"'~some-library/style.css'"),s(),n("span",{class:"token comment"},"// referring to node_modules/some-library/style.css"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),U=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Boot files to load. Order is important. */"),s(`
boot`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarBootConfiguration"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"BootConfigurationItem"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  server`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
  client`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

type QuasarBootConfiguration `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("string "),n("span",{class:"token operator"},"|"),s(" BootConfigurationItem"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])],-1),G=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Enable the preFetch feature. */"),s(`
preFetch`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";")])],-1),Y=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"This property has been deprecated in favour of using vite-plugin-checker.")],-1),z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What to import from [@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras) package.
 * @example ['material-icons', 'roboto-font', 'ionicons-v4']
 */`),s(`
extras`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("QuasarIconSets "),n("span",{class:"token operator"},"|"),s(" QuasarFonts"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")])],-1),J=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What Quasar language pack to use, what Quasar icon
 * set to use for Quasar components, etc.
 */`),s(`
framework`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarFrameworkConfiguration"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"QuasarFrameworkConfiguration"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * @see - QuasarConfOptions tab in API cards throughout the docs
   */`),s(`
  config`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" SerializableConfiguration"),n("span",{class:"token operator"},"<"),s("QuasarUIConfiguration"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * One of the Quasar IconSets
   *
   * @see https://v2.quasar.dev/options/quasar-icon-sets
   *
   * @example 'material-icons'
   */`),s(`
  iconSet`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarIconSets"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * One of the Quasar language packs
   *
   * @see https://v2.quasar.dev/options/quasar-language-packs
   *
   * @example 'en-US'
   * @example 'es'
   */`),s(`
  lang`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarLanguageCodes"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Quasar CSS addons have breakpoint aware versions of flex and spacing classes
   *
   * @see https://quasar.dev/layout/grid/introduction-to-flexbox#flex-addons
   * @see https://quasar.dev/style/spacing#flex-addons
   */`),s(`
  cssAddon`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Auto import - how to detect components in your vue files
   *   "kebab": q-carousel q-page
   *   "pascal": QCarousel QPage
   *   "combined": q-carousel QPage
   *
   * @default 'kebab'
   */`),s(`
  autoImportComponentCase`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"kebab"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"pascal"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"combined"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Auto import - which file extensions should be interpreted as referring to Vue SFC?
   *
   * @default ['vue']
   */`),s(`
  autoImportVueExtensions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Auto import - which file extensions should be interpreted as referring to script files?
   *
   * @default ['js', 'jsx', 'ts', 'tsx']
   */`),s(`
  autoImportScriptExtensions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Treeshake Quasar's UI on dev too?
   * Recommended to leave this as false for performance reasons.
   *
   * @default false
   */`),s(`
  devTreeshaking`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Quasar will auto import components based on your usage.
   * But, in case you have a special case, you can manually specify Quasar components to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar components (e.g. q-avatar).
   *
   * Another example would be that dynamically rendering components depending on an API response or similar (e.g. in a CMS),
   * something like \`<component :is="dynamicName">\` where \`dynamicName\` is a string that matches a Quasar component name.
   *
   * @example ['QAvatar', 'QChip']
   */`),s(`
  components`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("keyof QuasarComponents"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Quasar will auto import directives based on your usage.
   * But, in case you have a special case, you can manually specify Quasar directives to be available everywhere.
   *
   * An example case would be having custom component definitions with plain string templates, inside .js or .ts files,
   * in which you are using Quasar directives (e.g. v-intersection).
   *
   * @example ['Intersection', 'Mutation']
   */`),s(`
  directives`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("keyof QuasarDirectives"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Quasar plugins to be installed. Specify the ones you are using in your app.
   *
   * @example ['Notify', 'Loading', 'Meta', 'AppFullscreen']
   */`),s(`
  plugins`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("keyof QuasarPlugins"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),X=n("p",null,"See these references for more info:",-1),K=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * What Quasar CSS animations](/options/animations) to import.
 * @example [ 'bounceInLeft', 'bounceOutRight' ]
 * */`),s(`
animations`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarAnimationsConfiguration "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},";")])],-1),Z=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ServerOptions "),n("span",{class:"token keyword"},"as"),s(" ViteServerOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Options "),n("span",{class:"token keyword"},"as"),s(" OpenOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"open"'),n("span",{class:"token punctuation"},";"),s(`
type DevServerOptions `),n("span",{class:"token operator"},"="),s(" Omit"),n("span",{class:"token operator"},"<"),s("ViteServerOptions"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"open"'),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"{"),s(`
  open`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Omit"),n("span",{class:"token operator"},"<"),s("OpenOptions"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"wait"'),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * Vite "server" options.
 * Some properties are overwritten based on the Quasar mode you're using in order
 * to ensure a correct config.
 * Note: if you're proxying the development server (i.e. using a cloud IDE),
 * set the \`public\` setting to your public application URL.
 */`),s(`
devServer`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" DevServerOptions"),n("span",{class:"token punctuation"},";")])],-1),nn=n("p",null,"Apart from these options, Quasar CLI tampers with some and you will experience them differently than on a Vite app:",-1),sn=n("code",{class:"doc-token"},"open",-1),an=n("code",{class:"doc-token"},"options",-1),tn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// opens Google Chrome"),s(`
`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'google chrome'"),s(),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// opens Firefox"),s(`
`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'firefox'"),s(),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// opens Google Chrome and automatically deals with cross-platform issues:"),s(`
`),n("span",{class:"token keyword"},"const"),s(" open "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"app"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(" open"),n("span",{class:"token punctuation"},"."),s("apps"),n("span",{class:"token punctuation"},"."),s("chrome "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),en=n("p",null,"You can also configure automatically opening remote Vue Devtools:",-1),on=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"vueDevtools"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),pn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Build configuration options. */"),s(`
build`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarBuildConfiguration"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Plugin"),n("span",{class:"token punctuation"},","),s(" UserConfig "),n("span",{class:"token keyword"},"as"),s(" ViteUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Options "),n("span",{class:"token keyword"},"as"),s(" VuePluginOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vitejs/plugin-vue"'),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"InvokeParams"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"isClient"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token literal-property property"},"isServer"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"BuildTargetOptions"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * @default ['es2022', 'firefox115', 'chrome115', 'safari14']
   */`),s(`
  browser`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * @example 'node20'
   */`),s(`
  `),n("span",{class:"token literal-property property"},"node"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"PluginEntryRunOptions"),s(),n("span",{class:"token punctuation"},"{"),s(`
  server`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
  client`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* requires @quasar/app-vite 1.8+ */"),s(`
type PluginEntry `),n("span",{class:"token operator"},"="),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"["),s("pluginName"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(" runOptions"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" PluginEntryRunOptions"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function-variable function"},"pluginFactory"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" any")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" Plugin"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(" runOptions"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" PluginEntryRunOptions"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token operator"},"|"),s(` Plugin
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),s(`
  `),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"QuasarStaticBuildConfiguration"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * @example
   * {
   *   browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
   *   node: 'node20'
   * }
   */`),s(`
  target`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" BuildTargetOptions"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Extend Vite config generated by Quasar CLI.
   */`),s(`
  extendViteConf`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(" ViteUserConfig"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"invokeParams"),n("span",{class:"token operator"},":"),s(" InvokeParams")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Options to supply to @vitejs/plugin-vue
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#vite-vue-plugin-options
   */`),s(`
  viteVuePluginOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" VuePluginOptions"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Vite plugins
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#adding-vite-plugins
   *
   * @example
   * [
   *   [ 'package-name', { ..options.. } ],
   *   [ require('some-plugin'), { ...options... } ]
   * ]
   */`),s(`
  vitePlugins`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" PluginEntry"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-vite#folder-aliases
   *
   * @example
   * {
   *   // import { ... } from 'locales/...'
   *   locales: path.join(__dirname, 'src/locales')
   * }
   */`),s(`
  alias`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Public path of your app.
   * Use it when your public path is something else,
   * like _“<protocol>://<domain>/some/nested/folder”_ – in this case,
   * it means the distributables are in _“some/nested/folder”_ on your webserver.
   *
   * @default '/'
   */`),s(`
  publicPath`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
   * History mode requires configuration on your deployment web server too.
   *
   * @default 'hash'
   */`),s(`
  vueRouterMode`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"hash"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"history"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Sets Vue Router base.
   * Should not need to configure this, unless absolutely needed.
   */`),s(`
  vueRouterBase`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Automatically open remote Vue Devtools when running in development mode.
   */`),s(`
  vueDevtools`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * Should the Vue Options API be available? If all your components only use Composition API
   * it would make sense performance-wise to disable Vue Options API for a compile speedup.
   *
   * @default true
   */`),s(`
  vueOptionsAPI`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Should we invalidate the Vite and ESLint cache on startup?
   * @default false
   */`),s(`
  rebuildCache`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Do you want to analyze the production bundles?
   * Generates and opens an HTML report.
   *
   * @default false
   */`),s(`
  analyze`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Folder where Quasar CLI should generate the distributables.
   * Relative path to project root directory.
   *
   * @default 'dist/{ctx.modeName}' For all modes except Cordova.
   * @default 'src-cordova/www' For Cordova mode.
   */`),s(`
  distDir`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Add properties to \`process.env\` that you can use in your website/app JS code.
   *
   * @see https://v2.quasar.dev/quasar-cli-vite/handling-process-env
   *
   * @example { SOMETHING: 'someValue' }
   */`),s(`
  env`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Defines constants that get replaced in your app.
   *
   * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
   */`),s(`
  rawDefine`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * (requires @quasar/app-vite v1.1+)
   *
   * Build production assets with or without the hash part in filenames.
   * Example: "454d87bd" in "assets/index.454d87bd.js"
   *
   * When used, please be careful how you configure your web server cache strategy as
   * files will not change name so your client might get 304 (Not Modified) even when
   * it's not the case.
   *
   * Will not change anything if your Vite config already touches the
   * build.rollupOptions.output.entryFileNames/chunkFileNames/assetFileNames props.
   *
   * Gets applied to production builds only.
   *
   * Useful especially for (but not restricted to) PWA. If set to false then updating the
   * PWA will force to re-download all assets again, regardless if they were changed or
   * not (due to how Rollup works through Vite).
   *
   * @default true
   */`),s(`
  useFilenameHashes`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * whether to inject module preload polyfill.
   * @default false
   */`),s(`
  polyfillModulePreload`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Ignores the public folder.
   * @default false
   */`),s(`
  ignorePublicFolder`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Set to \`false\` to disable minification, or specify the minifier to use.
   * Available options are 'terser' or 'esbuild'.
   * If set to anything but boolean false then it also applies to CSS.
   * For production only.
   * @default 'esbuild'
   */`),s(`
  minify`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'terser'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'esbuild'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * (requires @quasar/app-vite v1.5.2+)
   *
   * Minification options for html-minifier.
   *
   * @see https://github.com/kangax/html-minifier#options-quick-reference for complete list of options
   *
   * @default
   *  {
   *    removeComments: true,
   *    collapseWhitespace: true,
   *    removeAttributeQuotes: true,
   *    collapseBooleanAttributes: true,
   *    removeScriptTypeAttributes: true
   *  }
   */`),s(`
  htmlMinifyOptions`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" HtmlMinifierOptions"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * If \`true\`, a separate sourcemap file will be created. If 'inline', the
   * sourcemap will be appended to the resulting output file as data URI.
   * 'hidden' works like \`true\` except that the corresponding sourcemap
   * comments in the bundled files are suppressed.
   * @default false
   */`),s(`
  sourcemap`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'inline'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Prepare external services before \`$ quasar dev\` command runs
   * like starting some backend or any other service that the app relies on.
   * Can use async/await or directly return a Promise.
   */`),s(`
  beforeDev`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Run hook after Quasar dev server is started (\`$ quasar dev\`).
   * At this point, the dev server has been started and is available should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */`),s(`
  afterDev`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Run hook before Quasar builds app for production (\`$ quasar build\`).
   * At this point, the distributables folder hasn’t been created yet.
   * Can use async/await or directly return a Promise.
   */`),s(`
  beforeBuild`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/**
   * Run hook after Quasar built app for production (\`$ quasar build\`).
   * At this point, the distributables folder has been created and is available
   *  should you wish to do something with it.
   * Can use async/await or directly return a Promise.
   */`),s(`
  afterBuild`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(" QuasarHookParams")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"/**\n   * Run hook if publishing was requested (`$ quasar build -P`),\n   *  after Quasar built app for production and the afterBuild hook (if specified) was executed.\n   * Can use async/await or directly return a Promise.\n   * `opts` is Object of form `{arg, distDir}`,\n   * where “arg” is the argument supplied (if any) to -P parameter.\n   */"),s(`
  onPublish`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"ops"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"arg"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(" distDir"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),ln=n("p",null,"See these references for more info:",-1),rn=n("pre",{class:"doc-code"},[n("code",null,[s("sourceFiles"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QuasarSourceFilesConfiguration"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * Use this property to change the default names of some files of your website/app if you have to.
 * All paths must be relative to the root folder of your project.
 *
 * @default
 * {
 *  rootComponent: 'src/App.vue',
 *  router: 'src/router/index',
 *  store: 'src/stores/index', // for Pinia
 *  // store: 'src/store/index' // for Vuex
 *  pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
 *  pwaServiceWorker: 'src-pwa/custom-service-worker',
 *  pwaManifestFile: 'src-pwa/manifest.json',
 *  electronMain: 'src-electron/electron-main',
 *  electronPreload: 'src-electron/electron-preload'
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"QuasarSourceFilesConfiguration"),s(),n("span",{class:"token punctuation"},"{"),s(`
  rootComponent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  router`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  store`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  pwaRegisterServiceWorker`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  pwaServiceWorker`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  pwaManifestFile`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  electronMain`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
  electronPreload`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),cn=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"/** Add variables that you can use in /index.html. */"),s(`
htmlVariables`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(" any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";")])],-1),un=n("p",null,[s("You can define and then reference variables in "),n("code",{class:"doc-token"},"/index.html"),s(", like this:")],-1),kn=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"htmlVariables"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"myVar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'some-content'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),dn=n("p",null,"Then, as an example:",-1),mn=n("pre",{class:"doc-code"},[n("code",null,`<%= myVar %>
<% if (myVar) { %>something<% } %>`)],-1),fn=n("p",null,"One more example:",-1),hn=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"exports"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"htmlVariables"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test name'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"some"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'my-prop'"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),gn=n("p",null,"Then, as an example:",-1),yn=n("pre",{class:"doc-code"},[n("code",null,`<%= title %>
<%= some.prop %>
<% if (some.prop) { %><%= title %><% } %>`)],-1),vn=n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Property"),n("th",{class:"text-left"},"Type"),n("th",{class:"text-left"},"Description")])],-1),bn=n("td",null,"cordova",-1),wn=n("td",null,"Object",-1),_n=n("td",null,"capacitor",-1),xn=n("td",null,"Object",-1),Sn=n("td",null,"pwa",-1),qn=n("td",null,"Object",-1),Cn=n("td",null,"ssr",-1),Qn=n("td",null,"Object",-1),Pn=n("td",null,"electron",-1),On=n("td",null,"Object",-1),Vn=n("td",null,"bex",-1),An=n("td",null,"Object",-1),In={__name:"quasar-config-file",setup(Fn){const u=[{id:"structure",title:"2. Structure"},{id:"the-basics",title:"2.1. The basics",sub:!0},{id:"ide-autocompletion",title:"2.2. IDE autocompletion",sub:!0},{id:"options-to-configure",title:"3. Options to Configure"},{id:"css",title:"3.1. css",sub:!0},{id:"boot",title:"3.2. boot",sub:!0},{id:"prefetch",title:"3.3. preFetch",sub:!0},{id:"eslint",title:"3.4. eslint",sub:!0},{id:"extras",title:"3.5. extras",sub:!0},{id:"framework",title:"3.6. framework",sub:!0},{id:"animations",title:"3.7. animations",sub:!0},{id:"devserver",title:"3.8. devServer",sub:!0},{id:"build",title:"3.9. build",sub:!0},{id:"sourcefiles",title:"3.10. sourceFiles",sub:!0},{id:"htmlvariables",title:"3.11. htmlVariables",sub:!0},{id:"quasar-mode-specific",title:"3.12. Quasar Mode Specific",sub:!0},{id:"examples",title:"4. Examples"},{id:"setting-env-for-dev-build",title:"4.1. Setting env for dev/build",sub:!0},{id:"adding-vite-plugins",title:"4.2. Adding Vite plugins",sub:!0}];return(En,o)=>(k(),d(h,{title:"Configuring quasar.config file",desc:"(@quasar/app-vite) Where, how and what you can configure in a Quasar CLI with Vite app.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/quasar-config-file",toc:u},{default:t(()=>[y,n("ul",null,[v,n("li",null,[s("Default "),a(p,{to:"/options/quasar-language-packs"},{default:t(()=>[s("Quasar Language Pack")]),_:1})]),n("li",null,[a(p,{to:"/options/installing-icon-libraries"},{default:t(()=>[s("Icon libraries")]),_:1}),s(" that you wish to use")]),n("li",null,[s("Default "),a(p,{to:"/options/quasar-icon-sets"},{default:t(()=>[s("Quasar Icon Set")]),_:1}),s(" for Quasar components")]),b,n("li",null,[a(p,{to:"/options/animations"},{default:t(()=>[s("CSS animations")]),_:1}),s(" that you wish to use")]),n("li",null,[a(p,{to:"/quasar-cli-vite/boot-files"},{default:t(()=>[s("Boot Files")]),_:1}),s(" list (that determines order of execution too) – which are files in "),w,s(" that tell how your app is initialized before mounting the root Vue component")]),_,x,S,q]),C,n("div",Q,[P,n("p",null,[s("The "),O,s(" file is run by the Quasar CLI build system, so this code runs under Node directly, not in the context of your app. This means you can require modules like ‘fs’, ‘path’, Vite plugins, and so on. Make sure the ES features that you want to use in this file are "),a(p,{to:"https://node.green/"},{default:t(()=>[s("supported by your Node version")]),_:1}),s(" (which should be >= 14.19.0).")])]),n("h2",{id:"structure",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=i=>e(c)("structure"))},"Structure"),n("h3",{id:"the-basics",class:"doc-heading doc-h3",onClick:o[1]||(o[1]=i=>e(c)("the-basics"))},"The basics"),V,a(e(l),{title:"/quasar.config file"},{default:t(()=>[A,a(r)]),_:1}),I,a(e(l),{title:"/quasar.config file"},{default:t(()=>[F,a(r)]),_:1}),E,a(e(l),{title:"/quasar.config file"},{default:t(()=>[B,a(r)]),_:1}),D,a(e(l),{title:"/quasar.config file"},{default:t(()=>[N,a(r)]),_:1}),T,a(e(l),{title:"/quasar.config file"},{default:t(()=>[j,a(r)]),_:1}),M,n("h3",{id:"ide-autocompletion",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=i=>e(c)("ide-autocompletion"))},"IDE autocompletion"),R,a(e(l),{title:"/quasar.config file"},{default:t(()=>[$,a(r)]),_:1}),n("h2",{id:"options-to-configure",class:"doc-heading doc-h2",onClick:o[3]||(o[3]=i=>e(c)("options-to-configure"))},"Options to Configure"),n("h3",{id:"css",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=i=>e(c)("css"))},"css"),a(e(l),null,{default:t(()=>[W,a(r)]),_:1}),L,a(e(l),{title:"/quasar.config file"},{default:t(()=>[H,a(r)]),_:1}),n("h3",{id:"boot",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=i=>e(c)("boot"))},"boot"),n("p",null,[s("More on "),a(p,{to:"/quasar-cli-vite/boot-files"},{default:t(()=>[s("Boot Files")]),_:1}),s(".")]),a(e(l),null,{default:t(()=>[U,a(r)]),_:1}),n("h3",{id:"prefetch",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=i=>e(c)("prefetch"))},"preFetch"),n("p",null,[s("More on the "),a(p,{to:"/quasar-cli-vite/prefetch-feature"},{default:t(()=>[s("PreFetch Feature")]),_:1}),s(" page.")]),a(e(l),null,{default:t(()=>[G,a(r)]),_:1}),n("h3",{id:"eslint",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=i=>e(c)("eslint"))},[s("eslint "),a(m,{label:"deprecated"})]),Y,n("p",null,[s("More on the "),a(p,{to:"/quasar-cli-vite/linter"},{default:t(()=>[s("Linter")]),_:1}),s(" page.")]),n("h3",{id:"extras",class:"doc-heading doc-h3",onClick:o[8]||(o[8]=i=>e(c)("extras"))},"extras"),a(e(l),null,{default:t(()=>[z,a(r)]),_:1}),n("h3",{id:"framework",class:"doc-heading doc-h3",onClick:o[9]||(o[9]=i=>e(c)("framework"))},"framework"),a(e(l),null,{default:t(()=>[J,a(r)]),_:1}),X,n("ul",null,[n("li",null,[a(p,{to:"/options/quasar-language-packs"},{default:t(()=>[s("Quasar Language Packs")]),_:1})]),n("li",null,[a(p,{to:"/options/quasar-icon-sets"},{default:t(()=>[s("Quasar Icon Sets")]),_:1})]),n("li",null,[a(p,{to:"/layout/grid/introduction-to-flexbox#flex-addons"},{default:t(()=>[s("Quasar CSS Addons - Flex")]),_:1})]),n("li",null,[a(p,{to:"/style/spacing#flex-addons"},{default:t(()=>[s("Quasar CSS Addons - Spacing")]),_:1})])]),n("h3",{id:"animations",class:"doc-heading doc-h3",onClick:o[10]||(o[10]=i=>e(c)("animations"))},"animations"),n("p",null,[s("More on "),a(p,{to:"/options/animations"},{default:t(()=>[s("CSS animations")]),_:1}),s(".")]),a(e(l),null,{default:t(()=>[K,a(r)]),_:1}),n("h3",{id:"devserver",class:"doc-heading doc-h3",onClick:o[11]||(o[11]=i=>e(c)("devserver"))},"devServer"),n("p",null,[s("More info: "),a(p,{to:"https://vitejs.dev/config/#server-options"},{default:t(()=>[s("Vite server options")]),_:1})]),a(e(l),null,{default:t(()=>[Z,a(r)]),_:1}),nn,n("p",null,[s("Using "),sn,s(" prop to open with a specific browser and not with the default browser of your OS (check "),a(p,{to:"https://github.com/sindresorhus/open#options"},{default:t(()=>[s("supported values")]),_:1}),s("). The "),an,s(" param described in previous link is what you should configure quasar.config file > devSever > open with. Some examples:")]),a(e(l),{title:"/quasar.config file"},{default:t(()=>[tn,a(r)]),_:1}),en,a(e(l),{title:"/quasar.config file"},{default:t(()=>[on,a(r)]),_:1}),n("h3",{id:"build",class:"doc-heading doc-h3",onClick:o[12]||(o[12]=i=>e(c)("build"))},"build"),a(e(l),null,{default:t(()=>[pn,a(r)]),_:1}),ln,n("ul",null,[n("li",null,[a(p,{to:"https://vitejs.dev/config/#server-options"},{default:t(()=>[s("Vite server options")]),_:1})]),n("li",null,[a(p,{to:"/quasar-cli-vite/handling-vite#vite-vue-plugin-options"},{default:t(()=>[s("Vite Vue Plugin options")]),_:1})]),n("li",null,[a(p,{to:"/quasar-cli-vite/handling-vite#adding-vite-plugins"},{default:t(()=>[s("Adding Vite plugins")]),_:1})]),n("li",null,[a(p,{to:"/quasar-cli-vite/handling-vite#folder-aliases"},{default:t(()=>[s("Folder Aliases")]),_:1})]),n("li",null,[a(p,{to:"/quasar-cli-vite/handling-process-env"},{default:t(()=>[s("Handling Process Env")]),_:1})]),n("li",null,[a(p,{to:"https://github.com/kangax/html-minifier#options-quick-reference"},{default:t(()=>[s("html-minifier options")]),_:1})])]),n("h3",{id:"sourcefiles",class:"doc-heading doc-h3",onClick:o[13]||(o[13]=i=>e(c)("sourcefiles"))},"sourceFiles"),a(e(l),null,{default:t(()=>[rn,a(r)]),_:1}),n("h3",{id:"htmlvariables",class:"doc-heading doc-h3",onClick:o[14]||(o[14]=i=>e(c)("htmlvariables"))},"htmlVariables"),a(e(l),null,{default:t(()=>[cn,a(r)]),_:1}),un,a(e(l),{title:"/quasar.config file"},{default:t(()=>[kn,a(r)]),_:1}),dn,a(e(l),{title:"/index.html"},{default:t(()=>[mn,a(r)]),_:1}),fn,a(e(l),{title:"/quasar.config file"},{default:t(()=>[hn,a(r)]),_:1}),gn,a(e(l),{title:"/index.html"},{default:t(()=>[yn,a(r)]),_:1}),n("h3",{id:"quasar-mode-specific",class:"doc-heading doc-h3",onClick:o[15]||(o[15]=i=>e(c)("quasar-mode-specific"))},"Quasar Mode Specific"),a(f,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:t(()=>[vn,n("tbody",null,[n("tr",null,[bn,wn,n("td",null,[s("Cordova specific "),a(p,{to:"/quasar-cli-vite/developing-cordova-apps/configuring-cordova"},{default:t(()=>[s("config")]),_:1}),s(".")])]),n("tr",null,[_n,xn,n("td",null,[s("Quasar CLI Capacitor specific "),a(p,{to:"/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor"},{default:t(()=>[s("config")]),_:1}),s(".")])]),n("tr",null,[Sn,qn,n("td",null,[s("PWA specific "),a(p,{to:"/quasar-cli-vite/developing-pwa/configuring-pwa"},{default:t(()=>[s("config")]),_:1}),s(".")])]),n("tr",null,[Cn,Qn,n("td",null,[s("SSR specific "),a(p,{to:"/quasar-cli-vite/developing-ssr/configuring-ssr"},{default:t(()=>[s("config")]),_:1}),s(".")])]),n("tr",null,[Pn,On,n("td",null,[s("Electron specific "),a(p,{to:"/quasar-cli-vite/developing-electron-apps/configuring-electron"},{default:t(()=>[s("config")]),_:1}),s(".")])]),n("tr",null,[Vn,An,n("td",null,[s("BEX specific "),a(p,{to:"/quasar-cli-vite/developing-browser-extensions/configuring-bex"},{default:t(()=>[s("config")]),_:1}),s(".")])])])]),_:1}),n("h2",{id:"examples",class:"doc-heading doc-h2",onClick:o[16]||(o[16]=i=>e(c)("examples"))},"Examples"),n("h3",{id:"setting-env-for-dev-build",class:"doc-heading doc-h3",onClick:o[17]||(o[17]=i=>e(c)("setting-env-for-dev-build"))},"Setting env for dev/build"),n("p",null,[s("Please refer to "),a(p,{to:"/quasar-cli-vite/handling-process-env#adding-to-process-env"},{default:t(()=>[s("Adding to process.env")]),_:1}),s(" section in our docs.")]),n("h3",{id:"adding-vite-plugins",class:"doc-heading doc-h3",onClick:o[18]||(o[18]=i=>e(c)("adding-vite-plugins"))},"Adding Vite plugins"),n("p",null,[s("Please refer to the "),a(p,{to:"/quasar-cli-vite/handling-vite#adding-vite-plugins"},{default:t(()=>[s("Handling Vite")]),_:1}),s(" page.")])]),_:1}))}},Rn=g(In,[["__file","quasar-config-file.md"]]);export{Rn as default};
