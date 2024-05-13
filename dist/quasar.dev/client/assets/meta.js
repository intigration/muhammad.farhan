import{c as p}from"./_examples_frameless-electron-window.js";import{D as m,a as i}from"./DocPage.js";import{D as d}from"./DocInstallation.js";import{D as l}from"./DocPrerender.js";import{C as r}from"./CopyButton.js";import{_ as y}from"./index.js";import{b as h,d as g,w as o,h as t,i as n,e as s,f as e}from"./vendor.js";import"./DocCode.js";import"./DocCardTitle.js";import"./utils.js";const f=t("p",null,[t("strong",null,"Better SEO for your website!"),n(" The Meta plugin can dynamically change page title, manage "),t("code",{class:"doc-token"},"<meta>"),n(" tags, manage "),t("code",{class:"doc-token"},"<html>"),n(" and "),t("code",{class:"doc-token"},"<body>"),n(" DOM element attributes, add/remove/change "),t("code",{class:"doc-token"},"<style>"),n(" and "),t("code",{class:"doc-token"},"<script>"),n(" tags in the head of your document (useful for CDN stylesheets or for json-ld markup, for example), or manage "),t("code",{class:"doc-token"},"<noscript>"),n(" tags.")],-1),w={class:"doc-note doc-note--tip"},b=t("p",{class:"doc-note__title"},"TIP",-1),v=t("strong",null,"Quasar CLI",-1),_=t("strong",null,"for the SSR (Server-Side Rendering) builds",-1),x=t("p",null,[n("What the Meta plugin does is that it enables the use of a special property in your Vue components called "),t("code",{class:"doc-token"},"meta"),n(". Take a look at the example below, with almost all of its features.")],-1),M=t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"Important!"),t("p",null,"Make sure not to duplicate content that already exists in /index.html or /src/index.template.html. If you want to use the Meta plugin, the recommended way is to remove the same tags from the html template. But on use-cases where you know a tag will never change and you always want it rendered, then it’s better to have it only on the html template instead.")],-1),S=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useMeta "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" metaData "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token comment"},"// sets document title"),n(`
  `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Index Page'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token comment"},'// optional; sets final title as "Index Page - My Website", useful for multiple level meta'),n(`
  `),t("span",{class:"token function-variable function"},"titleTemplate"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token parameter"},"title"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("title"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"}," - My Website"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// meta tags"),n(`
  `),t("span",{class:"token literal-property property"},"meta"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"description"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'description'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Page 1'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"keywords"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'keywords'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Quasar website'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"equiv"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token string-property property"},"'http-equiv'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Content-Type'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'text/html; charset=UTF-8'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token comment"},"// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server"),n(`
    `),t("span",{class:"token literal-property property"},"ogTitle"),t("span",{class:"token operator"},":"),n("  "),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"property"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'og:title'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token comment"},"// optional; similar to titleTemplate, but allows templating with other meta properties"),n(`
      `),t("span",{class:"token function"},"template"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"ogTitle"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("ogTitle"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"}," - My Website"),t("span",{class:"token template-punctuation string"},"`")]),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// CSS tags"),n(`
  `),t("span",{class:"token literal-property property"},"link"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"material"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"rel"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'stylesheet'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://fonts.googleapis.com/icon?family=Material+Icons'"),n(),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// JS tags"),n(`
  `),t("span",{class:"token literal-property property"},"script"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"ldJson"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'application/ld+json'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"innerHTML"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},'{ "@context": "http://schema.org" }'),t("span",{class:"token template-punctuation string"},"`")]),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// <html> attributes"),n(`
  `),t("span",{class:"token literal-property property"},"htmlAttr"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token string-property property"},"'xmlns:cc'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'http://creativecommons.org/ns#'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},'// generates <html xmlns:cc="http://creativecommons.org/ns#">,'),n(`
    `),t("span",{class:"token literal-property property"},"empty"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"undefined"),n(),t("span",{class:"token comment"},"// generates <html empty>"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// <body> attributes"),n(`
  `),t("span",{class:"token literal-property property"},"bodyAttr"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token string-property property"},"'action-scope'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'xyz'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},'// generates <body action-scope="xyz">'),n(`
    `),t("span",{class:"token literal-property property"},"empty"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"undefined"),n(),t("span",{class:"token comment"},"// generates <body empty>"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// <noscript> tags"),n(`
  `),t("span",{class:"token literal-property property"},"noscript"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"default"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'This is content for browsers with no JS (or disabled JS)'"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token comment"},"// needs to be called in setup()"),n(`
    `),t("span",{class:"token function"},"useMeta"),t("span",{class:"token punctuation"},"("),n("metaData"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}")])],-1),T=t("p",null,"If you depend on the state of the component to compute the meta Object, then you can supply a Function instead of the Object itself. For more information, check the “Reactive” section on this page.",-1),I=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" createMetaMixin "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" metaData "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token comment"},"// sets document title"),n(`
  `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Index Page'"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token comment"},'// optional; sets final title as "Index Page - My Website", useful for multiple level meta'),n(`
  `),t("span",{class:"token function-variable function"},"titleTemplate"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token parameter"},"title"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("title"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"}," - My Website"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// meta tags"),n(`
  `),t("span",{class:"token literal-property property"},"meta"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"description"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'description'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Page 1'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"keywords"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'keywords'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Quasar website'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"equiv"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token string-property property"},"'http-equiv'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Content-Type'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'text/html; charset=UTF-8'"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token comment"},"// note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server"),n(`
    `),t("span",{class:"token literal-property property"},"ogTitle"),t("span",{class:"token operator"},":"),n("  "),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"property"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'og:title'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token comment"},"// optional; similar to titleTemplate, but allows templating with other meta properties"),n(`
      `),t("span",{class:"token function"},"template"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"ogTitle"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("ogTitle"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"}," - My Website"),t("span",{class:"token template-punctuation string"},"`")]),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// CSS tags"),n(`
  `),t("span",{class:"token literal-property property"},"link"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"material"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"rel"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'stylesheet'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://fonts.googleapis.com/icon?family=Material+Icons'"),n(),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// JS tags"),n(`
  `),t("span",{class:"token literal-property property"},"script"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"ldJson"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'application/ld+json'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"innerHTML"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},'{ "@context": "http://schema.org" }'),t("span",{class:"token template-punctuation string"},"`")]),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// <html> attributes"),n(`
  `),t("span",{class:"token literal-property property"},"htmlAttr"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token string-property property"},"'xmlns:cc'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'http://creativecommons.org/ns#'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},'// generates <html xmlns:cc="http://creativecommons.org/ns#">'),n(`
    `),t("span",{class:"token literal-property property"},"empty"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"undefined"),n(),t("span",{class:"token comment"},"// generates <html empty>"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// <body> attributes"),n(`
  `),t("span",{class:"token literal-property property"},"bodyAttr"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token string-property property"},"'action-scope'"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'xyz'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},'// generates <body action-scope="xyz">'),n(`
    `),t("span",{class:"token literal-property property"},"empty"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"undefined"),n(),t("span",{class:"token comment"},"// generates <body empty>"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

  `),t("span",{class:"token comment"},"// <noscript> tags"),n(`
  `),t("span",{class:"token literal-property property"},"noscript"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"default"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'This is content for browsers with no JS (or disabled JS)'"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token literal-property property"},"mixins"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
    `),t("span",{class:"token function"},"createMetaMixin"),t("span",{class:"token punctuation"},"("),n("metaData"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}")])],-1),C=t("p",null,"For the Options API approach, if you depend on the state of the component to compute the meta Object, then you can supply a Function instead of the Object itself:",-1),P=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token literal-property property"},"mixins"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
    `),t("span",{class:"token function"},"createMetaMixin"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token comment"},'// "this" here refers to your component'),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token comment"},"// assuming `this.myTitle` exists in your mixed in component"),n(`
        `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n(`myTitle
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}")])],-1),A=t("p",null,"Metas are computed from .vue files in the order their vue components are activated by Vue Router (let’s call this a chain for further explanations). Example: App.vue > SomeLayout.vue > IndexPage.vue > …?",-1),O=t("p",null,"When a component that uses Meta plugin gets rendered or destroyed, it is added/removed to/from the chain and metas are updated accordingly.",-1),D=t("p",null,[n("When you need to set a Boolean HTML attribute in "),t("code",{class:"doc-token"},"meta"),n(", "),t("code",{class:"doc-token"},"link"),n(" or "),t("code",{class:"doc-token"},"script"),n(" sections, set its value to Boolean "),t("code",{class:"doc-token"},"true"),n(".")],-1),W=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token literal-property property"},"script"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token literal-property property"},"myScript"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"src"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://...'"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"defer"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token comment"},"// will output:"),n(`
`),t("span",{class:"token comment"},'// <script src="https://..."'),n(`
`),t("span",{class:"token comment"},"//         defer"),n(`
`),t("span",{class:"token comment"},'//         data-qmeta="myScript">')])],-1),$=t("p",null,"If you have an attribute and you want to set it to the actual value of “true”, then use String form. More details below:",-1),j=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token literal-property property"},"someattribute"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'true'"),n(`
`),t("span",{class:"token comment"},'// will output: someattribute="true"'),n(`

`),t("span",{class:"token literal-property property"},"someattribute"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
`),t("span",{class:"token comment"},"// will output: someattribute"),n(`

`),t("span",{class:"token literal-property property"},"someattribute"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"void"),n(),t("span",{class:"token number"},"0"),n(`
`),t("span",{class:"token comment"},"// will NOT output the attribute"),n(`
`),t("span",{class:"token comment"},"// (useful when you set it upstream"),n(`
`),t("span",{class:"token comment"},"// and want to remove it downstream)"),n(`

`),t("span",{class:"token literal-property property"},"someattribute"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"''"),n(`
`),t("span",{class:"token comment"},'// will output: someattribute=""')])],-1),H=t("p",null,"Notice that all properties (except for title and titleTemplate) are Objects; you can override meta props defined in previous Vue components in the chain by using the same keys again. Example:",-1),R=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token comment"},"// first loaded Vue component"),n(`
`),t("span",{class:"token function"},"setup"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"useMeta"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"meta"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"myKey"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'description'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'My Website'"),n(),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token comment"},"// a subsequent Vue component in the chain;"),n(`
`),t("span",{class:"token comment"},'// this will override the first definition on "myKey"'),n(`
`),t("span",{class:"token function"},"setup"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"useMeta"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"meta"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"myKey"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'description'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Page 1'"),n(),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}")])],-1),V=t("p",null,"In the section above, you noticed all of the meta props are “static”. But they can be dynamic (reactive) instead, should you wish. This is how you can manage them just as with a Vue computed property:",-1),q=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useMeta "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'quasar'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" title "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Some title'"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token comment"},'// we define the "title" prop'),n(`

    `),t("span",{class:"token comment"},"// NOTICE the parameter here is a function"),n(`
    `),t("span",{class:"token comment"},"// Under the hood, it is converted to a Vue computed prop for reactivity"),n(`
    `),t("span",{class:"token function"},"useMeta"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token comment"},'// whenever "title" from above changes, your meta will automatically update'),n(`
        `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(" title"),t("span",{class:"token punctuation"},"."),n(`value
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"setAnotherTitle"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      title`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'Another title'"),n(),t("span",{class:"token comment"},"// will automatically trigger a Meta update due to the binding"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      setAnotherTitle
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}")])],-1),B=t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"Important!"),t("p",null,[t("strong",null,"This test will only work for SSR builds"),n(" because SSR directly supplies the rendered HTML when accessing the webserver (as opposed to SPA or PWA which supplies an empty page then loads the code that renders the page on client’s browser). Services like above (metatags.io) expect the page to be already rendered when fetching it (it does not run the JS to render it themselves).")])],-1),J={__name:"meta",setup(L){const u=[{name:"useMeta",category:"Vue Composables",path:"/vue-composables/use-meta"}],k=[{id:"installation",title:"2. Installation",deep:!0},{id:"usage",title:"3. Usage"},{id:"composition-api",title:"3.1. Composition API",sub:!0},{id:"options-api",title:"3.2. Options API",sub:!0},{id:"how-it-works",title:"4. How It Works"},{id:"handling-html-attributes",title:"4.1. Handling HTML attributes",sub:!0},{id:"non-reactive",title:"4.2. Non-reactive",sub:!0},{id:"reactive",title:"4.3. Reactive",sub:!0},{id:"testing-meta",title:"5. Testing Meta"}];return(N,a)=>(h(),g(m,{title:"Quasar Meta Plugin",desc:"A Quasar plugin to easily handle the meta tags of an app, helping you to add SEO. It manages meta, style and script tags, html and body attributes and page titles.",heading:"","edit-link":"quasar-plugins/meta",toc:k,related:u},{default:o(()=>[f,t("div",w,[b,t("p",null,[n("Take full advantage of this feature by using it with "),v,n(", especially "),_,n(". It also makes sense to use it for SPA (Single Page Applications). Although the meta information in this case will be added at run-time and not supplied directly by the webserver (as on SSR builds), modern web-crawlers like the "),s(i,{to:"https://developers.google.com/search/docs/guides/javascript-seo-basics"},{default:o(()=>[n("Googlebot")]),_:1}),n(" will render dynamic pages and extract out the dynamically set meta information.")])]),s(d,{plugins:"Meta"}),t("h2",{id:"usage",class:"doc-heading doc-h2",onClick:a[0]||(a[0]=c=>e(p)("usage"))},"Usage"),x,M,t("h3",{id:"composition-api",class:"doc-heading doc-h3",onClick:a[1]||(a[1]=c=>e(p)("composition-api"))},"Composition API"),t("p",null,[n("We will be using the "),s(i,{to:"/vue-composables/use-meta"},{default:o(()=>[n("useMeta")]),_:1}),n(" composable.")]),s(e(l),{title:"Some .vue file"},{default:o(()=>[S,s(r)]),_:1}),T,t("h3",{id:"options-api",class:"doc-heading doc-h3",onClick:a[2]||(a[2]=c=>e(p)("options-api"))},"Options API"),s(e(l),{title:"Some .vue file"},{default:o(()=>[I,s(r)]),_:1}),C,s(e(l),null,{default:o(()=>[P,s(r)]),_:1}),t("h2",{id:"how-it-works",class:"doc-heading doc-h2",onClick:a[3]||(a[3]=c=>e(p)("how-it-works"))},"How It Works"),A,O,t("h3",{id:"handling-html-attributes",class:"doc-heading doc-h3",onClick:a[4]||(a[4]=c=>e(p)("handling-html-attributes"))},"Handling HTML attributes"),D,s(e(l),null,{default:o(()=>[W,s(r)]),_:1}),$,s(e(l),null,{default:o(()=>[j,s(r)]),_:1}),t("h3",{id:"non-reactive",class:"doc-heading doc-h3",onClick:a[5]||(a[5]=c=>e(p)("non-reactive"))},"Non-reactive"),H,s(e(l),null,{default:o(()=>[R,s(r)]),_:1}),t("h3",{id:"reactive",class:"doc-heading doc-h3",onClick:a[6]||(a[6]=c=>e(p)("reactive"))},"Reactive"),V,s(e(l),{title:"Some .vue file"},{default:o(()=>[q,s(r)]),_:1}),t("h2",{id:"testing-meta",class:"doc-heading doc-h2",onClick:a[7]||(a[7]=c=>e(p)("testing-meta"))},"Testing Meta"),t("p",null,[n("Before you deploy, you really should make sure that your work on the meta tags is compliant. Although you could just copy and paste your link into a Discord chat, a Facebook post or a Tweet, we recommend verifying with "),s(i,{to:"https://metatags.io/"},{default:o(()=>[n("https://metatags.io/")]),_:1}),n(".")]),B]),_:1}))}},tt=y(J,[["__file","meta.md"]]);export{tt as default};
