import{c as l}from"./_examples_frameless-electron-window.js";import{D as i,a as k}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as d}from"./index.js";import{b as f,d as m,w as o,h as n,f as a,e as t,i as s}from"./vendor.js";const y=n("p",null,[s("Notice that your generated "),n("code",{class:"doc-token"},"/src-ssr"),s(" contains a file named "),n("code",{class:"doc-token"},"server.js"),s(". This file defines how your SSR webserver is created, managed and served. You can start listening to a port or provide a handler for your serverless infrastructure to use. It’s up to you.")],-1),g=n("p",null,[s("The "),n("code",{class:"doc-token"},"/src-ssr/server.[js|ts]"),s(" file is a simple JavaScript/Typescript file which boots up your SSR webserver and defines what how your webserver starts & handles requests and what it exports (if exporting anything).")],-1),w=n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("The "),n("code",{class:"doc-token"},"/src-ssr/server.[js|ts]"),s(" file is used for both DEV and PROD, so please be careful on how you configure it. To differentiate between the two states you can use "),n("code",{class:"doc-token"},"process∙env∙DEV"),s(" and "),n("code",{class:"doc-token"},"process∙env∙PROD"),s(".")])],-1),h=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
 * More info about this file:
 * https://v2.quasar.dev/quasar-cli-vite/developing-ssr/ssr-webserver
 *
 * Runs in Node context.
 */`),s(`

`),n("span",{class:"token comment"},`/**
 * Make sure to yarn/npm/pnpm/bun install (in your project root)
 * anything you import here (except for express and compression).
 */`),s(`
`),n("span",{class:"token keyword"},"import"),s(" express "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'express'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" compression "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'compression'"),s(`

`),n("span",{class:"token comment"},`/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"create"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"express"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// attackers can use this header to detect apps running Express"),s(`
  `),n("span",{class:"token comment"},"// and then launch specifically-targeted attacks"),s(`
  app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"disable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'x-powered-by'"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),s(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` app
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The "listenResult" param for the "close()" definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady"),n("span",{class:"token punctuation"},","),s(" ssrHandler "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the "listen()" call above,
 * you can use the "listenResult" param.
 *
 * Can be async.
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"close"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" listenResult "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" listenResult"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" maxAge "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),s(`
  `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(`
  `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"30"),s(`

`),n("span",{class:"token comment"},`/**
 * Should return middleware that serves the indicated path
 * with static content.
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"serveStaticContent"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("path"),n("span",{class:"token punctuation"},","),s(" opts")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" express"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"static"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    maxAge`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token operator"},"..."),s(`opts
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" jsRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" cssRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" woffRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" woff2RE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.woff2$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" gifRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.gif$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" jpgRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.jpe?g$"),n("span",{class:"token regex-delimiter"},"/")]),s(`
`),n("span",{class:"token keyword"},"const"),s(" pngRE "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.png$"),n("span",{class:"token regex-delimiter"},"/")]),s(`

`),n("span",{class:"token comment"},`/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"renderPreloadTag"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jsRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="modulepreload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cssRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="stylesheet" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'">'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("woffRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("woff2RE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="font" type="font/woff2" crossorigin>'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("gifRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/gif">'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jpgRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/jpeg">'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pngRE"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<link rel="preload" href="'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'" as="image" type="image/png">'),n("span",{class:"token template-punctuation string"},"`")]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"''"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),v=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Remember that whatever the "),n("code",{class:"doc-token"},"listen()"),s(" function returns (if anything) will be exported from your built "),n("code",{class:"doc-token"},"dist/ssr/index.js"),s(". You can return your ssrHandler for a serverless architecture should you need it.")])],-1),x=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token operator"},"<"),s("functionName"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady"),n("span",{class:"token punctuation"},","),s(" ssrHandler"),n("span",{class:"token punctuation"},","),s(`
  resolve`),n("span",{class:"token punctuation"},","),s(" publicPath"),n("span",{class:"token punctuation"},","),s(" folders"),n("span",{class:"token punctuation"},","),s(" render"),n("span",{class:"token punctuation"},","),s(` serve
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")])],-1),b=n("p",null,"Detailing the Object:",-1),_=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},","),s("     "),n("span",{class:"token comment"},"// Expressjs app instance (or whatever you return from create())"),s(`

  port`),n("span",{class:"token punctuation"},","),s("    "),n("span",{class:"token comment"},"// on production: process∙env∙PORT or quasar.config file > ssr > prodPort"),s(`
           `),n("span",{class:"token comment"},"// on development: quasar.config file > devServer > port"),s(`

  isReady`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Function to call returning a Promise"),s(`
           `),n("span",{class:"token comment"},"// when app is ready to serve clients"),s(`

  ssrHandler`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// Prebuilt app handler if your serverless service"),s(`
              `),n("span",{class:"token comment"},"// doesn't require a specific way to provide it."),s(`
              `),n("span",{class:"token comment"},"// Form: ssrHandler (req, res, next)"),s(`
              `),n("span",{class:"token comment"},"// Tip: it uses isReady() under the hood already"),s(`

  `),n("span",{class:"token comment"},"// all of the following are the same as"),s(`
  `),n("span",{class:"token comment"},"// for the SSR middlewares (check its docs page);"),s(`
  `),n("span",{class:"token comment"},"// normally you don't need these here"),s(`
  `),n("span",{class:"token comment"},"// (use a real SSR middleware instead)"),s(`
  `),n("span",{class:"token literal-property property"},"resolve"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"urlPath"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"root"),n("span",{class:"token punctuation"},"("),s("arg1"),n("span",{class:"token punctuation"},","),s(" arg2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"public"),n("span",{class:"token punctuation"},"("),s("arg1"),n("span",{class:"token punctuation"},","),s(" arg2"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  publicPath`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// String"),s(`
  `),n("span",{class:"token literal-property property"},"folders"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    root`),n("span",{class:"token punctuation"},","),s("     "),n("span",{class:"token comment"},"// String"),s(`
    `),n("span",{class:"token keyword"},"public"),s("    "),n("span",{class:"token comment"},"// String"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s("ssrContext"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"serve"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"static"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},","),s(" opts"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" err"),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},","),s(" res "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),R={class:"doc-note doc-note--warning"},S=n("p",{class:"doc-note__title"},"WARNING",-1),j=n("li",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”.",-1),E=n("p",null,"You can replace the default Express.js Node server with any other connect API compatible one. Just make sure to yarn/npm install its package first.",-1),P=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" connect "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'connect'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"create"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"connect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),s(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` app
`),n("span",{class:"token punctuation"},"}")])],-1),$=n("p",null,"This is the default option that you get when adding SSR support in a Quasar CLI project. It starts listening on the configured port (process∙env∙PORT or quasar.config file > ssr > prodPort).",-1),D=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),q=n("p",null,"If you have a serverless infrastructure, then you generally need to export a handler instead of starting to listen to a port.",-1),C=n("p",null,"Say that your serverless service requires you to:",-1),T=n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports"),n("span",{class:"token punctuation"},"."),s("handler "),n("span",{class:"token operator"},"="),s(" __your_handler__")])],-1),H=n("p",null,"Then what you’d need to do is:",-1),N=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" ssrHandler "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// in production"),s(`
    `),n("span",{class:"token comment"},'// "ssrHandler" is a prebuilt handler which already'),s(`
    `),n("span",{class:"token comment"},"// waits for all the middlewares to run before serving clients"),s(`

    `),n("span",{class:"token comment"},"// whatever you return here is equivalent to module.exports.<key> = <value>"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"handler"),n("span",{class:"token operator"},":"),s(" ssrHandler "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")])],-1),O=n("p",null,[s("Please note that the provided "),n("code",{class:"doc-token"},"ssrHandler"),s(" is a Function of form: "),n("code",{class:"doc-token"},"(req, res, next) => void"),s(". Should you require to export a handler of form "),n("code",{class:"doc-token"},"(event, context, callback) => void"),s(" then you will most likely want to use the "),n("code",{class:"doc-token"},"serverless-http"),s(" package (see below).")],-1),I=n("p",null,[s("You will need to manually yarn/npm install the "),n("code",{class:"doc-token"},"serverless-http"),s(" package.")],-1),V=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" serverless "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'serverless-http'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" ssrHandler "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// we're ready to serve clients"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// in production"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"handler"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"serverless"),n("span",{class:"token punctuation"},"("),s("ssrHandler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),A=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" functions "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'firebase-functions'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" ssrHandler "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DEV"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// we're ready to serve clients"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// in production"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"handler"),n("span",{class:"token operator"},":"),s(" functions"),n("span",{class:"token punctuation"},"."),s("https"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onRequest"),n("span",{class:"token punctuation"},"("),s("ssrHandler"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])],-1),L={__name:"ssr-webserver",setup(Y){const r=[{id:"anatomy",title:"2. Anatomy"},{id:"parameters",title:"3. Parameters"},{id:"usage",title:"4. Usage"},{id:"replacing-express-js",title:"4.1. Replacing express.js",sub:!0},{id:"listen-on-a-port",title:"4.2. Listen on a port",sub:!0},{id:"serverless",title:"4.3. Serverless",sub:!0}];return(F,e)=>(f(),m(i,{title:"SSR Webserver",desc:"(@quasar/app-vite) Configuring the Quasar SSR webserver for different platforms, including a serverless architecture.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-ssr/ssr-webserver",toc:r},{default:o(()=>[y,n("h2",{id:"anatomy",class:"doc-heading doc-h2",onClick:e[0]||(e[0]=u=>a(l)("anatomy"))},"Anatomy"),g,w,t(a(c),null,{default:o(()=>[h,t(p)]),_:1}),v,n("h2",{id:"parameters",class:"doc-heading doc-h2",onClick:e[1]||(e[1]=u=>a(l)("parameters"))},"Parameters"),t(a(c),null,{default:o(()=>[x,t(p)]),_:1}),b,t(a(c),null,{default:o(()=>[_,t(p)]),_:1}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:e[2]||(e[2]=u=>a(l)("usage"))},"Usage"),n("div",R,[S,n("ul",null,[j,n("li",null,[s("This is usually not the place to add middlewares (but you can do it). Add middlewares by using the "),t(k,{to:"/quasar-cli-vite/developing-ssr/ssr-middleware"},{default:o(()=>[s("SSR Middlewares")]),_:1}),s(" instead. You can configure SSR Middlewares to run only for dev or only for production too.")])])]),n("h3",{id:"replacing-express-js",class:"doc-heading doc-h3",onClick:e[3]||(e[3]=u=>a(l)("replacing-express-js"))},"Replacing express.js"),E,t(a(c),{title:"src-ssr/server.[js|ts]"},{default:o(()=>[P,t(p)]),_:1}),n("h3",{id:"listen-on-a-port",class:"doc-heading doc-h3",onClick:e[4]||(e[4]=u=>a(l)("listen-on-a-port"))},"Listen on a port"),$,t(a(c),{title:"src-ssr/server.[js|ts]"},{default:o(()=>[D,t(p)]),_:1}),n("h3",{id:"serverless",class:"doc-heading doc-h3",onClick:e[5]||(e[5]=u=>a(l)("serverless"))},"Serverless"),q,C,t(a(c),null,{default:o(()=>[T,t(p)]),_:1}),H,t(a(c),{title:"src-ssr/server.[js|ts]"},{default:o(()=>[N,t(p)]),_:1}),O,n("h4",{id:"example-serverless-http",class:"doc-heading doc-h4",onClick:e[6]||(e[6]=u=>a(l)("example-serverless-http"))},"Example: serverless-http"),I,t(a(c),{title:"src-ssr/server.[js|ts]"},{default:o(()=>[V,t(p)]),_:1}),n("h4",{id:"example-firebase-function",class:"doc-heading doc-h4",onClick:e[7]||(e[7]=u=>a(l)("example-firebase-function"))},"Example: Firebase function"),t(a(c),{title:"src-ssr/server.[js|ts]"},{default:o(()=>[A,t(p)]),_:1})]),_:1}))}},U=d(L,[["__file","ssr-webserver.md"]]);export{U as default};
