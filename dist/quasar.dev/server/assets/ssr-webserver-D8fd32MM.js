import{mergeProps as R,withCtx as l,unref as p,createVNode as n,createTextVNode as s,useSSRContext as q}from"vue";import{ssrRenderComponent as u}from"vue/server-renderer";import{c as m}from"./page-utils-C-QWsEHe.js";import{D as S,a as d}from"./DocPage-DKr-0pQn.js";import{D as i}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as E}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const g={__name:"ssr-webserver",__ssrInlineRender:!0,setup(w){const f=[{id:"anatomy",title:"2. Anatomy"},{id:"parameters",title:"3. Parameters"},{id:"usage",title:"4. Usage"},{id:"replacing-express-js",title:"4.1. Replacing express.js",sub:!0},{id:"listen-on-a-port",title:"4.2. Listen on a port",sub:!0},{id:"serverless",title:"4.3. Serverless",sub:!0}];return(y,v,x,b)=>{v(u(S,R({title:"SSR Webserver",desc:"(@quasar/app-vite) Configuring the Quasar SSR webserver for different platforms, including a serverless architecture.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-ssr/ssr-webserver",toc:f},b),{default:l((j,c,$,t)=>{if(c)c(`<p${t}>Notice that your generated <code class="doc-token"${t}>/src-ssr</code> contains a file named <code class="doc-token"${t}>server.js</code>. This file defines how your SSR webserver is created, managed and served. You can start listening to a port or provide a handler for your serverless infrastructure to use. It’s up to you.</p><h2 id="anatomy" class="doc-heading doc-h2"${t}>Anatomy</h2><p${t}>The <code class="doc-token"${t}>/src-ssr/server.[js|ts]</code> file is a simple JavaScript/Typescript file which boots up your SSR webserver and defines what how your webserver starts &amp; handles requests and what it exports (if exporting anything).</p><div class="doc-note doc-note--danger"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>The <code class="doc-token"${t}>/src-ssr/server.[js|ts]</code> file is used for both DEV and PROD, so please be careful on how you configure it. To differentiate between the two states you can use <code class="doc-token"${t}>process∙env∙DEV</code> and <code class="doc-token"${t}>process∙env∙PROD</code>.</p></div>`),c(u(p(i),null,{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token comment"${a}>/**
 * More info about this file:
 * https://v2.quasar.dev/quasar-cli-vite/developing-ssr/ssr-webserver
 *
 * Runs in Node context.
 */</span>

<span class="token comment"${a}>/**
 * Make sure to yarn/npm/pnpm/bun install (in your project root)
 * anything you import here (except for express and compression).
 */</span>
<span class="token keyword"${a}>import</span> express <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;express&#39;</span>
<span class="token keyword"${a}>import</span> compression <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;compression&#39;</span>

<span class="token comment"${a}>/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>create</span> <span class="token punctuation"${a}>(</span><span class="token comment"${a}>/* { ... } */</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> app <span class="token operator"${a}>=</span> <span class="token function"${a}>express</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// attackers can use this header to detect apps running Express</span>
  <span class="token comment"${a}>// and then launch specifically-targeted attacks</span>
  app<span class="token punctuation"${a}>.</span><span class="token function"${a}>disable</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;x-powered-by&#39;</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// place here any middlewares that</span>
  <span class="token comment"${a}>// absolutely need to run before anything else</span>
  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>PROD</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    app<span class="token punctuation"${a}>.</span><span class="token function"${a}>use</span><span class="token punctuation"${a}>(</span><span class="token function"${a}>compression</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>return</span> app
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The &quot;listenResult&quot; param for the &quot;close()&quot; definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>async</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>listen</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span> app<span class="token punctuation"${a}>,</span> port<span class="token punctuation"${a}>,</span> isReady<span class="token punctuation"${a}>,</span> ssrHandler <span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>await</span> <span class="token function"${a}>isReady</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
  <span class="token keyword"${a}>return</span> <span class="token keyword"${a}>await</span> app<span class="token punctuation"${a}>.</span><span class="token function"${a}>listen</span><span class="token punctuation"${a}>(</span>port<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>PROD</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;Server listening at port &#39;</span> <span class="token operator"${a}>+</span> port<span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span>

<span class="token comment"${a}>/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the &quot;listen()&quot; call above,
 * you can use the &quot;listenResult&quot; param.
 *
 * Can be async.
 */</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>close</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span> listenResult <span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>return</span> listenResult<span class="token punctuation"${a}>.</span><span class="token function"${a}>close</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span>

<span class="token keyword"${a}>const</span> maxAge <span class="token operator"${a}>=</span> process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>DEV</span>
  <span class="token operator"${a}>?</span> <span class="token number"${a}>0</span>
  <span class="token operator"${a}>:</span> <span class="token number"${a}>1000</span> <span class="token operator"${a}>*</span> <span class="token number"${a}>60</span> <span class="token operator"${a}>*</span> <span class="token number"${a}>60</span> <span class="token operator"${a}>*</span> <span class="token number"${a}>24</span> <span class="token operator"${a}>*</span> <span class="token number"${a}>30</span>

<span class="token comment"${a}>/**
 * Should return middleware that serves the indicated path
 * with static content.
 */</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>serveStaticContent</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>path<span class="token punctuation"${a}>,</span> opts</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>return</span> express<span class="token punctuation"${a}>.</span><span class="token function"${a}>static</span><span class="token punctuation"${a}>(</span>path<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>{</span>
    maxAge<span class="token punctuation"${a}>,</span>
    <span class="token operator"${a}>...</span>opts
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span>

<span class="token keyword"${a}>const</span> jsRE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.js$</span><span class="token regex-delimiter"${a}>/</span></span>
<span class="token keyword"${a}>const</span> cssRE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.css$</span><span class="token regex-delimiter"${a}>/</span></span>
<span class="token keyword"${a}>const</span> woffRE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.woff$</span><span class="token regex-delimiter"${a}>/</span></span>
<span class="token keyword"${a}>const</span> woff2RE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.woff2$</span><span class="token regex-delimiter"${a}>/</span></span>
<span class="token keyword"${a}>const</span> gifRE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.gif$</span><span class="token regex-delimiter"${a}>/</span></span>
<span class="token keyword"${a}>const</span> jpgRE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.jpe?g$</span><span class="token regex-delimiter"${a}>/</span></span>
<span class="token keyword"${a}>const</span> pngRE <span class="token operator"${a}>=</span> <span class="token regex"${a}><span class="token regex-delimiter"${a}>/</span><span class="token regex-source language-regex"${a}>\\.png$</span><span class="token regex-delimiter"${a}>/</span></span>

<span class="token comment"${a}>/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */</span>
<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>renderPreloadTag</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}>file</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>jsRE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;modulepreload&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot; crossorigin&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>cssRE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;stylesheet&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot;&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>woffRE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot; as=&quot;font&quot; type=&quot;font/woff&quot; crossorigin&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>woff2RE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>gifRE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot; as=&quot;image&quot; type=&quot;image/gif&quot;&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>jpgRE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot; as=&quot;image&quot; type=&quot;image/jpeg&quot;&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>pngRE<span class="token punctuation"${a}>.</span><span class="token function"${a}>test</span><span class="token punctuation"${a}>(</span>file<span class="token punctuation"${a}>)</span> <span class="token operator"${a}>===</span> <span class="token boolean"${a}>true</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>return</span> <span class="token template-string"${a}><span class="token template-punctuation string"${a}>\`</span><span class="token string"${a}>&lt;link rel=&quot;preload&quot; href=&quot;</span><span class="token interpolation"${a}><span class="token interpolation-punctuation punctuation"${a}>\${</span>file<span class="token interpolation-punctuation punctuation"${a}>}</span></span><span class="token string"${a}>&quot; as=&quot;image&quot; type=&quot;image/png&quot;&gt;</span><span class="token template-punctuation string"${a}>\`</span></span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>return</span> <span class="token string"${a}>&#39;&#39;</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},$,t)),c(`<div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Remember that whatever the <code class="doc-token"${t}>listen()</code> function returns (if anything) will be exported from your built <code class="doc-token"${t}>dist/ssr/index.js</code>. You can return your ssrHandler for a serverless architecture should you need it.</p></div><h2 id="parameters" class="doc-heading doc-h2"${t}>Parameters</h2>`),c(u(p(i),null,{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token operator"${a}>&lt;</span>functionName<span class="token operator"${a}>&gt;</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span>
  app<span class="token punctuation"${a}>,</span> port<span class="token punctuation"${a}>,</span> isReady<span class="token punctuation"${a}>,</span> ssrHandler<span class="token punctuation"${a}>,</span>
  resolve<span class="token punctuation"${a}>,</span> publicPath<span class="token punctuation"${a}>,</span> folders<span class="token punctuation"${a}>,</span> render<span class="token punctuation"${a}>,</span> serve
<span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token operator"},"<"),s("functionName"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady"),n("span",{class:"token punctuation"},","),s(" ssrHandler"),n("span",{class:"token punctuation"},","),s(`
  resolve`),n("span",{class:"token punctuation"},","),s(" publicPath"),n("span",{class:"token punctuation"},","),s(" folders"),n("span",{class:"token punctuation"},","),s(" render"),n("span",{class:"token punctuation"},","),s(` serve
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")])]),n(o)]}),_:1},$,t)),c(`<p${t}>Detailing the Object:</p>`),c(u(p(i),null,{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token punctuation"${a}>{</span>
  app<span class="token punctuation"${a}>,</span>     <span class="token comment"${a}>// Expressjs app instance (or whatever you return from create())</span>

  port<span class="token punctuation"${a}>,</span>    <span class="token comment"${a}>// on production: process∙env∙PORT or quasar.config file &gt; ssr &gt; prodPort</span>
           <span class="token comment"${a}>// on development: quasar.config file &gt; devServer &gt; port</span>

  isReady<span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// Function to call returning a Promise</span>
           <span class="token comment"${a}>// when app is ready to serve clients</span>

  ssrHandler<span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// Prebuilt app handler if your serverless service</span>
              <span class="token comment"${a}>// doesn&#39;t require a specific way to provide it.</span>
              <span class="token comment"${a}>// Form: ssrHandler (req, res, next)</span>
              <span class="token comment"${a}>// Tip: it uses isReady() under the hood already</span>

  <span class="token comment"${a}>// all of the following are the same as</span>
  <span class="token comment"${a}>// for the SSR middlewares (check its docs page);</span>
  <span class="token comment"${a}>// normally you don&#39;t need these here</span>
  <span class="token comment"${a}>// (use a real SSR middleware instead)</span>
  <span class="token literal-property property"${a}>resolve</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token function"${a}>urlPath</span><span class="token punctuation"${a}>(</span>path<span class="token punctuation"${a}>)</span>
    <span class="token function"${a}>root</span><span class="token punctuation"${a}>(</span>arg1<span class="token punctuation"${a}>,</span> arg2<span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>,</span>
    <span class="token keyword"${a}>public</span><span class="token punctuation"${a}>(</span>arg1<span class="token punctuation"${a}>,</span> arg2<span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  publicPath<span class="token punctuation"${a}>,</span> <span class="token comment"${a}>// String</span>
  <span class="token literal-property property"${a}>folders</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    root<span class="token punctuation"${a}>,</span>     <span class="token comment"${a}>// String</span>
    <span class="token keyword"${a}>public</span>    <span class="token comment"${a}>// String</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>,</span>
  <span class="token function"${a}>render</span><span class="token punctuation"${a}>(</span>ssrContext<span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>,</span>
  <span class="token literal-property property"${a}>serve</span><span class="token operator"${a}>:</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>static</span><span class="token punctuation"${a}>(</span>path<span class="token punctuation"${a}>,</span> opts<span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>,</span>
    <span class="token function"${a}>error</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>{</span> err<span class="token punctuation"${a}>,</span> req<span class="token punctuation"${a}>,</span> res <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},$,t)),c(`<h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><ul${t}><li${t}>If you import anything from node_modules, then make sure that the package is specified in package.json &gt; “dependencies” and NOT in “devDependencies”.</li><li${t}>This is usually not the place to add middlewares (but you can do it). Add middlewares by using the `),c(u(d,{to:"/quasar-cli-vite/developing-ssr/ssr-middleware"},{default:l((k,e,r,a)=>{if(e)e("SSR Middlewares");else return[s("SSR Middlewares")]}),_:1},$,t)),c(` instead. You can configure SSR Middlewares to run only for dev or only for production too.</li></ul></div><h3 id="replacing-express-js" class="doc-heading doc-h3"${t}>Replacing express.js</h3><p${t}>You can replace the default Express.js Node server with any other connect API compatible one. Just make sure to yarn/npm install its package first.</p>`),c(u(p(i),{title:"src-ssr/server.[js|ts]"},{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> connect <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;connect&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>create</span> <span class="token punctuation"${a}>(</span><span class="token comment"${a}>/* { ... } */</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>const</span> app <span class="token operator"${a}>=</span> <span class="token function"${a}>connect</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>

  <span class="token comment"${a}>// place here any middlewares that</span>
  <span class="token comment"${a}>// absolutely need to run before anything else</span>
  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>PROD</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    app<span class="token punctuation"${a}>.</span><span class="token function"${a}>use</span><span class="token punctuation"${a}>(</span><span class="token function"${a}>compression</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>

  <span class="token keyword"${a}>return</span> app
<span class="token punctuation"${a}>}</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" connect "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'connect'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"create"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"connect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),s(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` app
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},$,t)),c(`<h3 id="listen-on-a-port" class="doc-heading doc-h3"${t}>Listen on a port</h3><p${t}>This is the default option that you get when adding SSR support in a Quasar CLI project. It starts listening on the configured port (process∙env∙PORT or quasar.config file &gt; ssr &gt; prodPort).</p>`),c(u(p(i),{title:"src-ssr/server.[js|ts]"},{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>async</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>listen</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span> app<span class="token punctuation"${a}>,</span> port<span class="token punctuation"${a}>,</span> isReady <span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>await</span> <span class="token function"${a}>isReady</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
  <span class="token keyword"${a}>return</span> <span class="token keyword"${a}>await</span> app<span class="token punctuation"${a}>.</span><span class="token function"${a}>listen</span><span class="token punctuation"${a}>(</span>port<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>PROD</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
      console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;Server listening at port &#39;</span> <span class="token operator"${a}>+</span> port<span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},$,t)),c(`<h3 id="serverless" class="doc-heading doc-h3"${t}>Serverless</h3><p${t}>If you have a serverless infrastructure, then you generally need to export a handler instead of starting to listen to a port.</p><p${t}>Say that your serverless service requires you to:</p>`),c(u(p(i),null,{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}>module<span class="token punctuation"${a}>.</span>exports<span class="token punctuation"${a}>.</span>handler <span class="token operator"${a}>=</span> __your_handler__</code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports"),n("span",{class:"token punctuation"},"."),s("handler "),n("span",{class:"token operator"},"="),s(" __your_handler__")])]),n(o)]}),_:1},$,t)),c(`<p${t}>Then what you’d need to do is:</p>`),c(u(p(i),{title:"src-ssr/server.[js|ts]"},{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>export</span> <span class="token keyword"${a}>async</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>listen</span> <span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span> app<span class="token punctuation"${a}>,</span> port<span class="token punctuation"${a}>,</span> ssrHandler <span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>DEV</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>await</span> <span class="token function"${a}>isReady</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
    <span class="token keyword"${a}>return</span> <span class="token keyword"${a}>await</span> app<span class="token punctuation"${a}>.</span><span class="token function"${a}>listen</span><span class="token punctuation"${a}>(</span>port<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>PROD</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
        console<span class="token punctuation"${a}>.</span><span class="token function"${a}>log</span><span class="token punctuation"${a}>(</span><span class="token string"${a}>&#39;Server listening at port &#39;</span> <span class="token operator"${a}>+</span> port<span class="token punctuation"${a}>)</span>
      <span class="token punctuation"${a}>}</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>
  <span class="token keyword"${a}>else</span> <span class="token punctuation"${a}>{</span> <span class="token comment"${a}>// in production</span>
    <span class="token comment"${a}>// &quot;ssrHandler&quot; is a prebuilt handler which already</span>
    <span class="token comment"${a}>// waits for all the middlewares to run before serving clients</span>

    <span class="token comment"${a}>// whatever you return here is equivalent to module.exports.&lt;key&gt; = &lt;value&gt;</span>
    <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>handler</span><span class="token operator"${a}>:</span> ssrHandler <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" ssrHandler "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},$,t)),c(`<p${t}>Please note that the provided <code class="doc-token"${t}>ssrHandler</code> is a Function of form: <code class="doc-token"${t}>(req, res, next) =&gt; void</code>. Should you require to export a handler of form <code class="doc-token"${t}>(event, context, callback) =&gt; void</code> then you will most likely want to use the <code class="doc-token"${t}>serverless-http</code> package (see below).</p><h4 id="example-serverless-http" class="doc-heading doc-h4"${t}>Example: serverless-http</h4><p${t}>You will need to manually yarn/npm install the <code class="doc-token"${t}>serverless-http</code> package.</p>`),c(u(p(i),{title:"src-ssr/server.[js|ts]"},{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> serverless <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;serverless-http&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>async</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>listen</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span> app<span class="token punctuation"${a}>,</span> port<span class="token punctuation"${a}>,</span> ssrHandler <span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>DEV</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>await</span> <span class="token function"${a}>isReady</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
    <span class="token keyword"${a}>return</span> <span class="token keyword"${a}>await</span> app<span class="token punctuation"${a}>.</span><span class="token function"${a}>listen</span><span class="token punctuation"${a}>(</span>port<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// we&#39;re ready to serve clients</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>
  <span class="token keyword"${a}>else</span> <span class="token punctuation"${a}>{</span> <span class="token comment"${a}>// in production</span>
    <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span> <span class="token literal-property property"${a}>handler</span><span class="token operator"${a}>:</span> <span class="token function"${a}>serverless</span><span class="token punctuation"${a}>(</span>ssrHandler<span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" serverless "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'serverless-http'"),s(`

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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]}),_:1},$,t)),c(`<h4 id="example-firebase-function" class="doc-heading doc-h4"${t}>Example: Firebase function</h4>`),c(u(p(i),{title:"src-ssr/server.[js|ts]"},{default:l((k,e,r,a)=>{if(e)e(`<pre class="doc-code"${a}><code${a}><span class="token keyword"${a}>import</span> <span class="token operator"${a}>*</span> <span class="token keyword"${a}>as</span> functions <span class="token keyword"${a}>from</span> <span class="token string"${a}>&#39;firebase-functions&#39;</span>

<span class="token keyword"${a}>export</span> <span class="token keyword"${a}>async</span> <span class="token keyword"${a}>function</span> <span class="token function"${a}>listen</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>(</span><span class="token parameter"${a}><span class="token punctuation"${a}>{</span> app<span class="token punctuation"${a}>,</span> port<span class="token punctuation"${a}>,</span> ssrHandler <span class="token punctuation"${a}>}</span></span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
  <span class="token keyword"${a}>if</span> <span class="token punctuation"${a}>(</span>process<span class="token punctuation"${a}>.</span>env<span class="token punctuation"${a}>.</span><span class="token constant"${a}>DEV</span><span class="token punctuation"${a}>)</span> <span class="token punctuation"${a}>{</span>
    <span class="token keyword"${a}>await</span> <span class="token function"${a}>isReady</span><span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span>
    <span class="token keyword"${a}>return</span> <span class="token keyword"${a}>await</span> app<span class="token punctuation"${a}>.</span><span class="token function"${a}>listen</span><span class="token punctuation"${a}>(</span>port<span class="token punctuation"${a}>,</span> <span class="token punctuation"${a}>(</span><span class="token punctuation"${a}>)</span> <span class="token operator"${a}>=&gt;</span> <span class="token punctuation"${a}>{</span>
      <span class="token comment"${a}>// we&#39;re ready to serve clients</span>
    <span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span>
  <span class="token punctuation"${a}>}</span>
  <span class="token keyword"${a}>else</span> <span class="token punctuation"${a}>{</span> <span class="token comment"${a}>// in production</span>
    <span class="token keyword"${a}>return</span> <span class="token punctuation"${a}>{</span>
      <span class="token literal-property property"${a}>handler</span><span class="token operator"${a}>:</span> functions<span class="token punctuation"${a}>.</span>https<span class="token punctuation"${a}>.</span><span class="token function"${a}>onRequest</span><span class="token punctuation"${a}>(</span>ssrHandler<span class="token punctuation"${a}>)</span>
    <span class="token punctuation"${a}>}</span>
  <span class="token punctuation"${a}>}</span>
<span class="token punctuation"${a}>}</span><span class="token punctuation"${a}>)</span></code></pre>`),e(u(o,null,null,r,a));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" functions "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'firebase-functions'"),s(`

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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]}),_:1},$,t));else return[n("p",null,[s("Notice that your generated "),n("code",{class:"doc-token"},"/src-ssr"),s(" contains a file named "),n("code",{class:"doc-token"},"server.js"),s(". This file defines how your SSR webserver is created, managed and served. You can start listening to a port or provide a handler for your serverless infrastructure to use. It’s up to you.")]),n("h2",{id:"anatomy",class:"doc-heading doc-h2",onClick:k=>p(m)("anatomy")},"Anatomy",8,["onClick"]),n("p",null,[s("The "),n("code",{class:"doc-token"},"/src-ssr/server.[js|ts]"),s(" file is a simple JavaScript/Typescript file which boots up your SSR webserver and defines what how your webserver starts & handles requests and what it exports (if exporting anything).")]),n("div",{class:"doc-note doc-note--danger"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[s("The "),n("code",{class:"doc-token"},"/src-ssr/server.[js|ts]"),s(" file is used for both DEV and PROD, so please be careful on how you configure it. To differentiate between the two states you can use "),n("code",{class:"doc-token"},"process∙env∙DEV"),s(" and "),n("code",{class:"doc-token"},"process∙env∙PROD"),s(".")])]),n(p(i),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},`/**
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[s("Remember that whatever the "),n("code",{class:"doc-token"},"listen()"),s(" function returns (if anything) will be exported from your built "),n("code",{class:"doc-token"},"dist/ssr/index.js"),s(". You can return your ssrHandler for a serverless architecture should you need it.")])]),n("h2",{id:"parameters",class:"doc-heading doc-h2",onClick:k=>p(m)("parameters")},"Parameters",8,["onClick"]),n(p(i),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token operator"},"<"),s("functionName"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
  app`),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady"),n("span",{class:"token punctuation"},","),s(" ssrHandler"),n("span",{class:"token punctuation"},","),s(`
  resolve`),n("span",{class:"token punctuation"},","),s(" publicPath"),n("span",{class:"token punctuation"},","),s(" folders"),n("span",{class:"token punctuation"},","),s(" render"),n("span",{class:"token punctuation"},","),s(` serve
`),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")])]),n(o)]),_:1}),n("p",null,"Detailing the Object:"),n(p(i),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:k=>p(m)("usage")},"Usage",8,["onClick"]),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("ul",null,[n("li",null,"If you import anything from node_modules, then make sure that the package is specified in package.json > “dependencies” and NOT in “devDependencies”."),n("li",null,[s("This is usually not the place to add middlewares (but you can do it). Add middlewares by using the "),n(d,{to:"/quasar-cli-vite/developing-ssr/ssr-middleware"},{default:l(()=>[s("SSR Middlewares")]),_:1}),s(" instead. You can configure SSR Middlewares to run only for dev or only for production too.")])])]),n("h3",{id:"replacing-express-js",class:"doc-heading doc-h3",onClick:k=>p(m)("replacing-express-js")},"Replacing express.js",8,["onClick"]),n("p",null,"You can replace the default Express.js Node server with any other connect API compatible one. Just make sure to yarn/npm install its package first."),n(p(i),{title:"src-ssr/server.[js|ts]"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" connect "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'connect'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"create"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* { ... } */"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"connect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// place here any middlewares that"),s(`
  `),n("span",{class:"token comment"},"// absolutely need to run before anything else"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"compression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` app
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("h3",{id:"listen-on-a-port",class:"doc-heading doc-h3",onClick:k=>p(m)("listen-on-a-port")},"Listen on a port",8,["onClick"]),n("p",null,"This is the default option that you get when adding SSR support in a Quasar CLI project. It starts listening on the configured port (process∙env∙PORT or quasar.config file > ssr > prodPort)."),n(p(i),{title:"src-ssr/server.[js|ts]"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" isReady "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"isReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),s("port"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PROD"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Server listening at port '"),s(),n("span",{class:"token operator"},"+"),s(" port"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("h3",{id:"serverless",class:"doc-heading doc-h3",onClick:k=>p(m)("serverless")},"Serverless",8,["onClick"]),n("p",null,"If you have a serverless infrastructure, then you generally need to export a handler instead of starting to listen to a port."),n("p",null,"Say that your serverless service requires you to:"),n(p(i),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports"),n("span",{class:"token punctuation"},"."),s("handler "),n("span",{class:"token operator"},"="),s(" __your_handler__")])]),n(o)]),_:1}),n("p",null,"Then what you’d need to do is:"),n(p(i),{title:"src-ssr/server.[js|ts]"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"listen"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" port"),n("span",{class:"token punctuation"},","),s(" ssrHandler "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("p",null,[s("Please note that the provided "),n("code",{class:"doc-token"},"ssrHandler"),s(" is a Function of form: "),n("code",{class:"doc-token"},"(req, res, next) => void"),s(". Should you require to export a handler of form "),n("code",{class:"doc-token"},"(event, context, callback) => void"),s(" then you will most likely want to use the "),n("code",{class:"doc-token"},"serverless-http"),s(" package (see below).")]),n("h4",{id:"example-serverless-http",class:"doc-heading doc-h4",onClick:k=>p(m)("example-serverless-http")},"Example: serverless-http",8,["onClick"]),n("p",null,[s("You will need to manually yarn/npm install the "),n("code",{class:"doc-token"},"serverless-http"),s(" package.")]),n(p(i),{title:"src-ssr/server.[js|ts]"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" serverless "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'serverless-http'"),s(`

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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]),_:1}),n("h4",{id:"example-firebase-function",class:"doc-heading doc-h4",onClick:k=>p(m)("example-firebase-function")},"Example: Firebase function",8,["onClick"]),n(p(i),{title:"src-ssr/server.[js|ts]"},{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" functions "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'firebase-functions'"),s(`

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
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(o)]),_:1})]}),_:1},x))}}},h=g.setup;g.setup=(w,f)=>{const y=q();return(y.modules||(y.modules=new Set)).add("src/pages/quasar-cli-vite/developing-ssr/ssr-webserver.md"),h?h(w,f):void 0};const G=E(g,[["__file","ssr-webserver.md"]]);export{G as default};
