import{resolveComponent as x,mergeProps as Q,withCtx as r,unref as c,createVNode as a,createTextVNode as n,useSSRContext as O}from"vue";import{ssrRenderComponent as p}from"vue/server-renderer";import{c as h}from"./page-utils-C-QWsEHe.js";import{D as N,a as y}from"./DocPage-DKr-0pQn.js";import{D as k}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as M}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const A={__name:"commands-list",__ssrInlineRender:!0,setup(C){const q=[{id:"upgrade",title:"2. Upgrade"},{id:"info",title:"3. Info"},{id:"dev",title:"4. Dev"},{id:"build",title:"5. Build"},{id:"clean",title:"6. Clean"},{id:"new",title:"7. New"},{id:"mode",title:"8. Mode"},{id:"describe",title:"9. Describe"},{id:"inspect",title:"10. Inspect"},{id:"ext",title:"11. Ext"},{id:"run",title:"12. Run"},{id:"serve",title:"13. Serve"},{id:"custom-node-server",title:"13.1. Custom Node server",sub:!0},{id:"create",title:"14. Create"},{id:"scaffolding-a-quasar-project-folder",title:"14.1. Scaffolding a Quasar project folder",sub:!0},{id:"scaffolding-from-a-custom-starter-kit",title:"14.2. Scaffolding from a custom starter kit",sub:!0}];return(w,D,E,T)=>{const P=x("q-markup-table"),g=x("q-badge"),b=x("q-tab-panel");D(p(N,Q({title:"Commands List",desc:"(@quasar/app-vite) The entire list of Quasar CLI commands.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/commands-list",toc:q},T),{default:r((R,i,d,e)=>{if(i)i(`<p${e}>Familiarize yourself with the list of available commands inside a Quasar project:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar

  Example usage
    $ quasar <span class="token operator"${s}>&lt;</span>command<span class="token operator"${s}>&gt;</span> <span class="token operator"${s}>&lt;</span>options<span class="token operator"${s}>&gt;</span>

  Help <span class="token keyword"${s}>for</span> a <span class="token builtin class-name"${s}>command</span>
    $ quasar <span class="token operator"${s}>&lt;</span>command<span class="token operator"${s}>&gt;</span> <span class="token parameter variable"${s}>--help</span>
    $ quasar <span class="token operator"${s}>&lt;</span>command<span class="token operator"${s}>&gt;</span> <span class="token parameter variable"${s}>-h</span>

  Options
    --version, <span class="token parameter variable"${s}>-v</span> Print Quasar App CLI version

  Commands
    dev, d        Start a dev server <span class="token keyword"${s}>for</span> your App
    build, b      Build your app <span class="token keyword"${s}>for</span> production
    clean, c      Clean all build artifacts
    new, n        Quickly scaffold page/layout/component/<span class="token punctuation"${s}>..</span>. vue <span class="token function"${s}>file</span>
    mode, m       Add/remove Quasar Modes <span class="token keyword"${s}>for</span> your App
    inspect       Inspect Vite/esbuild configs used under the hood
                    - keeps into account your quasar.config <span class="token function"${s}>file</span>
                      and your installed App Extensions
    ext, e        Manage Quasar App Extensions
    run, r        Run specific <span class="token builtin class-name"${s}>command</span> provided by an installed
                    Quasar App Extension
    describe      Describe a Quasar API <span class="token punctuation"${s}>(</span>component<span class="token punctuation"${s}>)</span>
    info, i       Display info about your machine and your App
    help, h       Displays this message

  If the specified <span class="token builtin class-name"${s}>command</span> is not found, <span class="token keyword"${s}>then</span> <span class="token string"${s}>&quot;quasar run&quot;</span>
  will be executed with the provided arguments.

  Commands supplied by @quasar/cli global installation:

    upgrade       Check <span class="token punctuation"${s}>(</span>and optionally<span class="token punctuation"${s}>)</span> upgrade Quasar packages
                    from a Quasar project folder
    serve         Create an ad-hoc server on App&#39;s distributables</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n(`$ quasar

  Example usage
    $ quasar `),a("span",{class:"token operator"},"<"),n("command"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("options"),a("span",{class:"token operator"},">"),n(`

  Help `),a("span",{class:"token keyword"},"for"),n(" a "),a("span",{class:"token builtin class-name"},"command"),n(`
    $ quasar `),a("span",{class:"token operator"},"<"),n("command"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token parameter variable"},"--help"),n(`
    $ quasar `),a("span",{class:"token operator"},"<"),n("command"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token parameter variable"},"-h"),n(`

  Options
    --version, `),a("span",{class:"token parameter variable"},"-v"),n(` Print Quasar App CLI version

  Commands
    dev, d        Start a dev server `),a("span",{class:"token keyword"},"for"),n(` your App
    build, b      Build your app `),a("span",{class:"token keyword"},"for"),n(` production
    clean, c      Clean all build artifacts
    new, n        Quickly scaffold page/layout/component/`),a("span",{class:"token punctuation"},".."),n(". vue "),a("span",{class:"token function"},"file"),n(`
    mode, m       Add/remove Quasar Modes `),a("span",{class:"token keyword"},"for"),n(` your App
    inspect       Inspect Vite/esbuild configs used under the hood
                    - keeps into account your quasar.config `),a("span",{class:"token function"},"file"),n(`
                      and your installed App Extensions
    ext, e        Manage Quasar App Extensions
    run, r        Run specific `),a("span",{class:"token builtin class-name"},"command"),n(` provided by an installed
                    Quasar App Extension
    describe      Describe a Quasar API `),a("span",{class:"token punctuation"},"("),n("component"),a("span",{class:"token punctuation"},")"),n(`
    info, i       Display info about your machine and your App
    help, h       Displays this message

  If the specified `),a("span",{class:"token builtin class-name"},"command"),n(" is not found, "),a("span",{class:"token keyword"},"then"),n(),a("span",{class:"token string"},'"quasar run"'),n(`
  will be executed with the provided arguments.

  Commands supplied by @quasar/cli global installation:

    upgrade       Check `),a("span",{class:"token punctuation"},"("),n("and optionally"),a("span",{class:"token punctuation"},")"),n(` upgrade Quasar packages
                    from a Quasar project folder
    serve         Create an ad-hoc server on App's distributables`)])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<p${e}>See help for any command:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar <span class="token punctuation"${s}>[</span>command name<span class="token punctuation"${s}>]</span> <span class="token parameter variable"${s}>--help</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar "),a("span",{class:"token punctuation"},"["),n("command name"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token parameter variable"},"--help")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="upgrade" class="doc-heading doc-h2"${e}>Upgrade</h2><p${e}>Check (and optionally) upgrade Quasar packages from a Quasar project folder:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}># view all options:</span>
$ quasar upgrade <span class="token parameter variable"${s}>-h</span>

<span class="token comment"${s}># checks for non-breaking change upgrades and displays them,</span>
<span class="token comment"${s}># but will not carry out the install</span>
$ quasar upgrade

<span class="token comment"${s}># checks for pre-releases (alpha/beta):</span>
$ quasar upgrade <span class="token parameter variable"${s}>-p</span>

<span class="token comment"${s}># checks for major new releases (includes breaking changes):</span>
$ quasar upgrade <span class="token parameter variable"${s}>-m</span>

<span class="token comment"${s}># use another npm registry url than what your machine is configured with:</span>
<span class="token comment"${s}># (added in @quasar/cli v2.4)</span>
$ quasar upgrade <span class="token parameter variable"${s}>-r</span> https://registry.npmjs.org/

<span class="token comment"${s}># to perform the actual upgrade,</span>
<span class="token comment"${s}># combine any of the params above and add &quot;-i&quot; (or &quot;--install&quot;):</span>
$ quasar upgrade <span class="token parameter variable"${s}>-i</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# view all options:"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-h"),n(`

`),a("span",{class:"token comment"},"# checks for non-breaking change upgrades and displays them,"),n(`
`),a("span",{class:"token comment"},"# but will not carry out the install"),n(`
$ quasar upgrade

`),a("span",{class:"token comment"},"# checks for pre-releases (alpha/beta):"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-p"),n(`

`),a("span",{class:"token comment"},"# checks for major new releases (includes breaking changes):"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-m"),n(`

`),a("span",{class:"token comment"},"# use another npm registry url than what your machine is configured with:"),n(`
`),a("span",{class:"token comment"},"# (added in @quasar/cli v2.4)"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-r"),n(` https://registry.npmjs.org/

`),a("span",{class:"token comment"},"# to perform the actual upgrade,"),n(`
`),a("span",{class:"token comment"},'# combine any of the params above and add "-i" (or "--install"):'),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-i")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>Note for code editor terminals</p><p${e}>If you’re using a code editor terminal instead of the real one, you run <code class="doc-token"${e}>quasar upgrade</code> and get an error <em${e}>Command not found</em> or <em${e}>@quasar/cli</em> version appears to be <em${e}>undefined</em>, you will need to go to the settings of your code editor terminal and untick the option (or its equivalent) <em${e}>Add ‘node_modules/.bin’ from the project root to %PATH%</em> then restart your code editor.</p></div><h2 id="info" class="doc-heading doc-h2"${e}>Info</h2><p${e}>The Quasar CLI is equipped with a stable combination of multiple NPM build packages (Vite, Vue, etc) which gets updated frequently after heavy testing.</p><p${e}>In order for you to see what versions of Node, Quasar CLI, Quasar, Vue (and many others) you are using, issue this command in a Quasar project folder:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar info</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,"$ quasar info")]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="dev" class="doc-heading doc-h2"${e}>Dev</h2>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar dev <span class="token parameter variable"${s}>-h</span>

  Description
    Starts the app <span class="token keyword"${s}>in</span> development mode <span class="token punctuation"${s}>(</span>hot-code reloading, error
    reporting, etc<span class="token punctuation"${s}>)</span>

  Usage
    $ quasar dev
    $ quasar dev <span class="token parameter variable"${s}>-p</span> <span class="token operator"${s}>&lt;</span>port number<span class="token operator"${s}>&gt;</span>

    $ quasar dev <span class="token parameter variable"${s}>-m</span> ssr

    <span class="token comment"${s}># alias for &quot;quasar dev -m cordova -T ios&quot;</span>
    $ quasar dev <span class="token parameter variable"${s}>-m</span> ios

    <span class="token comment"${s}># alias for &quot;quasar dev -m cordova -T android&quot;</span>
    $ quasar dev <span class="token parameter variable"${s}>-m</span> android

    <span class="token comment"${s}># passing extra parameters and/or options to</span>
    <span class="token comment"${s}># underlying &quot;cordova&quot; or &quot;electron&quot; executables:</span>
    $ quasar dev <span class="token parameter variable"${s}>-m</span> ios -- some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>
    $ quasar dev <span class="token parameter variable"${s}>-m</span> electron -- --no-sandbox --disable-setuid-sandbox
    <span class="token comment"${s}># when on Windows and using Powershell:</span>
    $ quasar dev <span class="token parameter variable"${s}>-m</span> ios <span class="token string"${s}>&#39;--&#39;</span> some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>
    $ quasar dev <span class="token parameter variable"${s}>-m</span> electron <span class="token string"${s}>&#39;--&#39;</span> --no-sandbox --disable-setuid-sandbox

  Options
    --mode, <span class="token parameter variable"${s}>-m</span>       App mode <span class="token punctuation"${s}>[</span>spa<span class="token operator"${s}>|</span>ssr<span class="token operator"${s}>|</span>pwa<span class="token operator"${s}>|</span>bex<span class="token operator"${s}>|</span>cordova<span class="token operator"${s}>|</span>capacitor<span class="token operator"${s}>|</span>electron<span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>(</span>default: spa<span class="token punctuation"${s}>)</span>
    --port, <span class="token parameter variable"${s}>-p</span>       A port number on <span class="token function"${s}>which</span> to start the application
    --hostname, <span class="token parameter variable"${s}>-H</span>   A <span class="token function"${s}>hostname</span> to use <span class="token keyword"${s}>for</span> serving the application
    --help, <span class="token parameter variable"${s}>-h</span>       Displays this message

    Only <span class="token keyword"${s}>for</span> Cordova mode:
    --target, <span class="token parameter variable"${s}>-T</span>     <span class="token punctuation"${s}>(</span>required<span class="token punctuation"${s}>)</span> App target
                        <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>
    --emulator, <span class="token parameter variable"${s}>-e</span>   <span class="token punctuation"${s}>(</span>optional<span class="token punctuation"${s}>)</span> Emulator name
                        Examples: iPhone-7, iPhone-X
                        iPhone-X,com.apple.CoreSimulator.SimRuntime.iOS-12-2
    --ide, <span class="token parameter variable"${s}>-i</span>        Open IDE <span class="token punctuation"${s}>(</span>Android Studio / XCode<span class="token punctuation"${s}>)</span> instead of letting Cordova
                        booting up the emulator, <span class="token keyword"${s}>in</span> <span class="token function"${s}>which</span> <span class="token keyword"${s}>case</span> the <span class="token string"${s}>&quot;--emulator&quot;</span>
                        param will have no effect

    --devtools, <span class="token parameter variable"${s}>-d</span>   Open remote Vue Devtools

    Only <span class="token keyword"${s}>for</span> Capacitor mode:
    --target, <span class="token parameter variable"${s}>-T</span>     <span class="token punctuation"${s}>(</span>required<span class="token punctuation"${s}>)</span> App target
                        <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar dev "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Starts the app `),a("span",{class:"token keyword"},"in"),n(" development mode "),a("span",{class:"token punctuation"},"("),n(`hot-code reloading, error
    reporting, etc`),a("span",{class:"token punctuation"},")"),n(`

  Usage
    $ quasar dev
    $ quasar dev `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token operator"},"<"),n("port number"),a("span",{class:"token operator"},">"),n(`

    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

    `),a("span",{class:"token comment"},'# alias for "quasar dev -m cordova -T ios"'),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` ios

    `),a("span",{class:"token comment"},'# alias for "quasar dev -m cordova -T android"'),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` android

    `),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
    `),a("span",{class:"token comment"},'# underlying "cordova" or "electron" executables:'),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` electron -- --no-sandbox --disable-setuid-sandbox
    `),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token string"},"'--'"),n(` --no-sandbox --disable-setuid-sandbox

  Options
    --mode, `),a("span",{class:"token parameter variable"},"-m"),n("       App mode "),a("span",{class:"token punctuation"},"["),n("spa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("pwa"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: spa"),a("span",{class:"token punctuation"},")"),n(`
    --port, `),a("span",{class:"token parameter variable"},"-p"),n("       A port number on "),a("span",{class:"token function"},"which"),n(` to start the application
    --hostname, `),a("span",{class:"token parameter variable"},"-H"),n("   A "),a("span",{class:"token function"},"hostname"),n(" to use "),a("span",{class:"token keyword"},"for"),n(` serving the application
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`       Displays this message

    Only `),a("span",{class:"token keyword"},"for"),n(` Cordova mode:
    --target, `),a("span",{class:"token parameter variable"},"-T"),n("     "),a("span",{class:"token punctuation"},"("),n("required"),a("span",{class:"token punctuation"},")"),n(` App target
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
    --emulator, `),a("span",{class:"token parameter variable"},"-e"),n("   "),a("span",{class:"token punctuation"},"("),n("optional"),a("span",{class:"token punctuation"},")"),n(` Emulator name
                        Examples: iPhone-7, iPhone-X
                        iPhone-X,com.apple.CoreSimulator.SimRuntime.iOS-12-2
    --ide, `),a("span",{class:"token parameter variable"},"-i"),n("        Open IDE "),a("span",{class:"token punctuation"},"("),n("Android Studio / XCode"),a("span",{class:"token punctuation"},")"),n(` instead of letting Cordova
                        booting up the emulator, `),a("span",{class:"token keyword"},"in"),n(),a("span",{class:"token function"},"which"),n(),a("span",{class:"token keyword"},"case"),n(" the "),a("span",{class:"token string"},'"--emulator"'),n(`
                        param will have no effect

    --devtools, `),a("span",{class:"token parameter variable"},"-d"),n(`   Open remote Vue Devtools

    Only `),a("span",{class:"token keyword"},"for"),n(` Capacitor mode:
    --target, `),a("span",{class:"token parameter variable"},"-T"),n("     "),a("span",{class:"token punctuation"},"("),n("required"),a("span",{class:"token punctuation"},")"),n(` App target
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<p${e}>The Quasar development server allows you to develop your App by compiling and maintaining code in-memory. A web server will serve your App while offering hot-reload out of the box. Running in-memory offers faster rebuilds when you change your code.</p><blockquote class="doc-note"${e}><p${e}>Hot Reload is much more than just refreshing your browser when code changes. It skips the refresh and updates your code on the fly, while maintaining your App’s state (like your Vue’s model data). Please note that there are cases when this is impossible, so the dev webserver will simply refresh your browser. (Always ensure you are running only one instance of Quasar CLI at a time, otherwise Hot-Reload and other stuff will break!)</p></blockquote><p${e}>Based on what you want to develop, you can start the development server by using “quasar dev” command as follows:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}># Developing a SPA</span>
$ quasar dev
<span class="token comment"${s}># ...or</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> spa

<span class="token comment"${s}># Developing for SSR</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> ssr

<span class="token comment"${s}># Developing a PWA</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> pwa

<span class="token comment"${s}># Developing a BEX for production</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> bex

<span class="token comment"${s}># Developing a Mobile App (through Cordova)</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> cordova <span class="token parameter variable"${s}>-T</span> <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>
<span class="token comment"${s}># or the short form:</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>

<span class="token comment"${s}># Developing an Electron App</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> electron

<span class="token comment"${s}># Developing a Browser Extension (BEX)</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> bex

<span class="token comment"${s}># passing extra parameters and/or options to</span>
<span class="token comment"${s}># underlying &quot;cordova&quot; or &quot;electron&quot; executables:</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> ios -- some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> electron -- --no-sandbox --disable-setuid-sandbox
<span class="token comment"${s}># when on Windows and using Powershell:</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> ios <span class="token string"${s}>&#39;--&#39;</span> some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>
$ quasar dev <span class="token parameter variable"${s}>-m</span> electron <span class="token string"${s}>&#39;--&#39;</span> --no-sandbox --disable-setuid-sandbox</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# Developing a SPA"),n(`
$ quasar dev
`),a("span",{class:"token comment"},"# ...or"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` spa

`),a("span",{class:"token comment"},"# Developing for SSR"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

`),a("span",{class:"token comment"},"# Developing a PWA"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` pwa

`),a("span",{class:"token comment"},"# Developing a BEX for production"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` bex

`),a("span",{class:"token comment"},"# Developing a Mobile App (through Cordova)"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" cordova "),a("span",{class:"token parameter variable"},"-T"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
`),a("span",{class:"token comment"},"# or the short form:"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`

`),a("span",{class:"token comment"},"# Developing an Electron App"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` electron

`),a("span",{class:"token comment"},"# Developing a Browser Extension (BEX)"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` bex

`),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
`),a("span",{class:"token comment"},'# underlying "cordova" or "electron" executables:'),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` electron -- --no-sandbox --disable-setuid-sandbox
`),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token string"},"'--'"),n(" --no-sandbox --disable-setuid-sandbox")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<p${e}>If you wish to change the hostname or port serving your App you have 3 options:</p><ul${e}><li${e}>Edit the ‘/quasar.config’ file:`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token literal-property property"${s}>devServer</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>host</span><span class="token operator"${s}>:</span> <span class="token string"${s}>&#39;...&#39;</span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>port</span><span class="token operator"${s}>:</span> <span class="token operator"${s}>...</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(p(o,null,null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token literal-property property"},"devServer"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"host"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'...'"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"port"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token operator"},"..."),n(`
`),a("span",{class:"token punctuation"},"}")])]),a(o)]}),_:1},d,e)),i(`</li><li${e}>Through ‘-H’ (hostname) and ‘-p’ (port) command options.</li><li${e}>If this is a one time thing, specify the hostname and/or port as an environment variable:`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ <span class="token assign-left variable"${s}>PORT</span><span class="token operator"${s}>=</span><span class="token number"${s}>3000</span> quasar dev
$ <span class="token assign-left variable"${s}><span class="token environment constant"${s}>HOSTNAME</span></span><span class="token operator"${s}>=</span><span class="token number"${s}>1.1</span>.1.14 quasar dev</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token assign-left variable"},"PORT"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"3000"),n(` quasar dev
$ `),a("span",{class:"token assign-left variable"},[a("span",{class:"token environment constant"},"HOSTNAME")]),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1.1"),n(".1.14 quasar dev")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`</li></ul><p${e}>If there appears to be an issue with hot reload, you can try two fixes:</p><ul${e}><li${e}><p${e}>Change the permissions for the project folder with</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token function"${s}>sudo</span> <span class="token function"${s}>chown</span> <span class="token parameter variable"${s}>-R</span> username: <span class="token builtin class-name"${s}>.</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token function"},"sudo"),n(),a("span",{class:"token function"},"chown"),n(),a("span",{class:"token parameter variable"},"-R"),n(" username: "),a("span",{class:"token builtin class-name"},".")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`</li><li${e}><p${e}>or run the dev server with root privileges</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token function"${s}>sudo</span> quasar dev</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token function"},"sudo"),n(" quasar dev")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`</li></ul><h2 id="build" class="doc-heading doc-h2"${e}>Build</h2>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar build <span class="token parameter variable"${s}>-h</span>

  Description
    Builds distributables of your app.

  Usage
    $ quasar build
    $ quasar build <span class="token parameter variable"${s}>-p</span> <span class="token operator"${s}>&lt;</span>port number<span class="token operator"${s}>&gt;</span>

    $ quasar build <span class="token parameter variable"${s}>-m</span> ssr

    <span class="token comment"${s}># alias for &quot;quasar build -m cordova -T ios&quot;</span>
    $ quasar build <span class="token parameter variable"${s}>-m</span> ios

    <span class="token comment"${s}># alias for &quot;quasar build -m cordova -T android&quot;</span>
    $ quasar build <span class="token parameter variable"${s}>-m</span> android

    <span class="token comment"${s}># passing extra parameters and/or options to</span>
    <span class="token comment"${s}># underlying &quot;cordova&quot; executable:</span>
    $ quasar build <span class="token parameter variable"${s}>-m</span> ios -- some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>
    <span class="token comment"${s}># when on Windows and using Powershell:</span>
    $ quasar build <span class="token parameter variable"${s}>-m</span> ios <span class="token string"${s}>&#39;--&#39;</span> some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>

  Options
    --mode, <span class="token parameter variable"${s}>-m</span>      App mode <span class="token punctuation"${s}>[</span>spa<span class="token operator"${s}>|</span>ssr<span class="token operator"${s}>|</span>pwa<span class="token operator"${s}>|</span>bex<span class="token operator"${s}>|</span>cordova<span class="token operator"${s}>|</span>capacitor<span class="token operator"${s}>|</span>electron<span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>(</span>default: spa<span class="token punctuation"${s}>)</span>
    --target, <span class="token parameter variable"${s}>-T</span>    App target
                      - Cordova <span class="token punctuation"${s}>(</span>default: all installed<span class="token punctuation"${s}>)</span>
                        <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>
                      - Capacitor
                        <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>
                      - Electron with default <span class="token string"${s}>&quot;electron-packager&quot;</span> bundler <span class="token punctuation"${s}>(</span>default: yours<span class="token punctuation"${s}>)</span>
                        <span class="token punctuation"${s}>[</span>darwin<span class="token operator"${s}>|</span>win32<span class="token operator"${s}>|</span>linux<span class="token operator"${s}>|</span>mas<span class="token operator"${s}>|</span>all<span class="token punctuation"${s}>]</span>
                      - Electron with <span class="token string"${s}>&quot;electron-builder&quot;</span> bundler <span class="token punctuation"${s}>(</span>default: yours<span class="token punctuation"${s}>)</span>
                        <span class="token punctuation"${s}>[</span>darwin<span class="token operator"${s}>|</span>mac<span class="token operator"${s}>|</span>win32<span class="token operator"${s}>|</span>win<span class="token operator"${s}>|</span>linux<span class="token operator"${s}>|</span>all<span class="token punctuation"${s}>]</span>
    --publish, <span class="token parameter variable"${s}>-P</span>   Also trigger publishing hooks <span class="token punctuation"${s}>(</span>if any are specified<span class="token punctuation"${s}>)</span>
                      - Has special meaning when building with Electron mode and using
                        electron-builder as bundler
    --debug, <span class="token parameter variable"${s}>-d</span>     Build <span class="token keyword"${s}>for</span> debugging purposes
    --skip-pkg, <span class="token parameter variable"${s}>-s</span>  Build only UI <span class="token punctuation"${s}>(</span>skips creating Cordova/Capacitor/Electron executables<span class="token punctuation"${s}>)</span>
                      - Cordova <span class="token punctuation"${s}>(</span>it only fills <span class="token keyword"${s}>in</span> /src-cordova/www folder with the UI code<span class="token punctuation"${s}>)</span>
                      - Capacitor <span class="token punctuation"${s}>(</span>it only fills <span class="token keyword"${s}>in</span> /src-capacitor/www folder with the UI code<span class="token punctuation"${s}>)</span>
                      - Electron <span class="token punctuation"${s}>(</span>it only creates the /dist/electron/UnPackaged folder<span class="token punctuation"${s}>)</span>
    --help, <span class="token parameter variable"${s}>-h</span>      Displays this message

    ONLY <span class="token keyword"${s}>for</span> Cordova and Capacitor mode:
    --ide, <span class="token parameter variable"${s}>-i</span>       Open IDE <span class="token punctuation"${s}>(</span>Android Studio / XCode<span class="token punctuation"${s}>)</span> instead of finalizing with a
                    terminal/console-only build

    ONLY <span class="token keyword"${s}>for</span> Electron mode:
    --bundler, <span class="token parameter variable"${s}>-b</span>   Bundler <span class="token punctuation"${s}>(</span>electron-packager or electron-builder<span class="token punctuation"${s}>)</span>
                      <span class="token punctuation"${s}>[</span>packager<span class="token operator"${s}>|</span>builder<span class="token punctuation"${s}>]</span>
    --arch, <span class="token parameter variable"${s}>-A</span>      App architecture <span class="token punctuation"${s}>(</span>default: yours<span class="token punctuation"${s}>)</span>
                      - with default <span class="token string"${s}>&quot;electron-packager&quot;</span> bundler:
                          <span class="token punctuation"${s}>[</span>ia32<span class="token operator"${s}>|</span>x64<span class="token operator"${s}>|</span>armv7l<span class="token operator"${s}>|</span>arm64<span class="token operator"${s}>|</span>mips64el<span class="token operator"${s}>|</span>all<span class="token punctuation"${s}>]</span>
                      - with <span class="token string"${s}>&quot;electron-builder&quot;</span> bundler:
                          <span class="token punctuation"${s}>[</span>ia32<span class="token operator"${s}>|</span>x64<span class="token operator"${s}>|</span>armv7l<span class="token operator"${s}>|</span>arm64<span class="token operator"${s}>|</span>all<span class="token punctuation"${s}>]</span>

    ONLY <span class="token keyword"${s}>for</span> electron-builder <span class="token punctuation"${s}>(</span>when using <span class="token string"${s}>&quot;publish&quot;</span> parameter<span class="token punctuation"${s}>)</span>:
    --publish, <span class="token parameter variable"${s}>-P</span>  Publish options <span class="token punctuation"${s}>[</span>onTag<span class="token operator"${s}>|</span>onTagOrDraft<span class="token operator"${s}>|</span>always<span class="token operator"${s}>|</span>never<span class="token punctuation"${s}>]</span>
                     - see https://www.electron.build/configuration/publish</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar build "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Builds distributables of your app.

  Usage
    $ quasar build
    $ quasar build `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token operator"},"<"),n("port number"),a("span",{class:"token operator"},">"),n(`

    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

    `),a("span",{class:"token comment"},'# alias for "quasar build -m cordova -T ios"'),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` ios

    `),a("span",{class:"token comment"},'# alias for "quasar build -m cordova -T android"'),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` android

    `),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
    `),a("span",{class:"token comment"},'# underlying "cordova" executable:'),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
    `),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`

  Options
    --mode, `),a("span",{class:"token parameter variable"},"-m"),n("      App mode "),a("span",{class:"token punctuation"},"["),n("spa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("pwa"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: spa"),a("span",{class:"token punctuation"},")"),n(`
    --target, `),a("span",{class:"token parameter variable"},"-T"),n(`    App target
                      - Cordova `),a("span",{class:"token punctuation"},"("),n("default: all installed"),a("span",{class:"token punctuation"},")"),n(`
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
                      - Capacitor
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
                      - Electron with default `),a("span",{class:"token string"},'"electron-packager"'),n(" bundler "),a("span",{class:"token punctuation"},"("),n("default: yours"),a("span",{class:"token punctuation"},")"),n(`
                        `),a("span",{class:"token punctuation"},"["),n("darwin"),a("span",{class:"token operator"},"|"),n("win32"),a("span",{class:"token operator"},"|"),n("linux"),a("span",{class:"token operator"},"|"),n("mas"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`
                      - Electron with `),a("span",{class:"token string"},'"electron-builder"'),n(" bundler "),a("span",{class:"token punctuation"},"("),n("default: yours"),a("span",{class:"token punctuation"},")"),n(`
                        `),a("span",{class:"token punctuation"},"["),n("darwin"),a("span",{class:"token operator"},"|"),n("mac"),a("span",{class:"token operator"},"|"),n("win32"),a("span",{class:"token operator"},"|"),n("win"),a("span",{class:"token operator"},"|"),n("linux"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`
    --publish, `),a("span",{class:"token parameter variable"},"-P"),n("   Also trigger publishing hooks "),a("span",{class:"token punctuation"},"("),n("if any are specified"),a("span",{class:"token punctuation"},")"),n(`
                      - Has special meaning when building with Electron mode and using
                        electron-builder as bundler
    --debug, `),a("span",{class:"token parameter variable"},"-d"),n("     Build "),a("span",{class:"token keyword"},"for"),n(` debugging purposes
    --skip-pkg, `),a("span",{class:"token parameter variable"},"-s"),n("  Build only UI "),a("span",{class:"token punctuation"},"("),n("skips creating Cordova/Capacitor/Electron executables"),a("span",{class:"token punctuation"},")"),n(`
                      - Cordova `),a("span",{class:"token punctuation"},"("),n("it only fills "),a("span",{class:"token keyword"},"in"),n(" /src-cordova/www folder with the UI code"),a("span",{class:"token punctuation"},")"),n(`
                      - Capacitor `),a("span",{class:"token punctuation"},"("),n("it only fills "),a("span",{class:"token keyword"},"in"),n(" /src-capacitor/www folder with the UI code"),a("span",{class:"token punctuation"},")"),n(`
                      - Electron `),a("span",{class:"token punctuation"},"("),n("it only creates the /dist/electron/UnPackaged folder"),a("span",{class:"token punctuation"},")"),n(`
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`      Displays this message

    ONLY `),a("span",{class:"token keyword"},"for"),n(` Cordova and Capacitor mode:
    --ide, `),a("span",{class:"token parameter variable"},"-i"),n("       Open IDE "),a("span",{class:"token punctuation"},"("),n("Android Studio / XCode"),a("span",{class:"token punctuation"},")"),n(` instead of finalizing with a
                    terminal/console-only build

    ONLY `),a("span",{class:"token keyword"},"for"),n(` Electron mode:
    --bundler, `),a("span",{class:"token parameter variable"},"-b"),n("   Bundler "),a("span",{class:"token punctuation"},"("),n("electron-packager or electron-builder"),a("span",{class:"token punctuation"},")"),n(`
                      `),a("span",{class:"token punctuation"},"["),n("packager"),a("span",{class:"token operator"},"|"),n("builder"),a("span",{class:"token punctuation"},"]"),n(`
    --arch, `),a("span",{class:"token parameter variable"},"-A"),n("      App architecture "),a("span",{class:"token punctuation"},"("),n("default: yours"),a("span",{class:"token punctuation"},")"),n(`
                      - with default `),a("span",{class:"token string"},'"electron-packager"'),n(` bundler:
                          `),a("span",{class:"token punctuation"},"["),n("ia32"),a("span",{class:"token operator"},"|"),n("x64"),a("span",{class:"token operator"},"|"),n("armv7l"),a("span",{class:"token operator"},"|"),n("arm64"),a("span",{class:"token operator"},"|"),n("mips64el"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`
                      - with `),a("span",{class:"token string"},'"electron-builder"'),n(` bundler:
                          `),a("span",{class:"token punctuation"},"["),n("ia32"),a("span",{class:"token operator"},"|"),n("x64"),a("span",{class:"token operator"},"|"),n("armv7l"),a("span",{class:"token operator"},"|"),n("arm64"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`

    ONLY `),a("span",{class:"token keyword"},"for"),n(" electron-builder "),a("span",{class:"token punctuation"},"("),n("when using "),a("span",{class:"token string"},'"publish"'),n(" parameter"),a("span",{class:"token punctuation"},")"),n(`:
    --publish, `),a("span",{class:"token parameter variable"},"-P"),n("  Publish options "),a("span",{class:"token punctuation"},"["),n("onTag"),a("span",{class:"token operator"},"|"),n("onTagOrDraft"),a("span",{class:"token operator"},"|"),n("always"),a("span",{class:"token operator"},"|"),n("never"),a("span",{class:"token punctuation"},"]"),n(`
                     - see https://www.electron.build/configuration/publish`)])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<p${e}>The Quasar CLI can pack everything together and optimize your App for production. It minifies source code, extracts vendor components, leverages browser cache and much more.</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}># Build a SPA for production</span>
$ quasar build
<span class="token comment"${s}># ...or</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> spa

<span class="token comment"${s}># Build a SSR for production</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> ssr

<span class="token comment"${s}># Build a PWA for production</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> pwa

<span class="token comment"${s}># Build a BEX for production</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> bex

<span class="token comment"${s}># Build a Mobile App (through Cordova)</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> cordova <span class="token parameter variable"${s}>-T</span> <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>
<span class="token comment"${s}># or the short form:</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> <span class="token punctuation"${s}>[</span>android<span class="token operator"${s}>|</span>ios<span class="token punctuation"${s}>]</span>

<span class="token comment"${s}># Build an Electron App for production</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> electron

<span class="token comment"${s}># passing extra parameters and/or options to</span>
<span class="token comment"${s}># underlying &quot;cordova&quot; executable:</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> ios -- some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>
<span class="token comment"${s}># when on Windows and using Powershell:</span>
$ quasar build <span class="token parameter variable"${s}>-m</span> ios <span class="token string"${s}>&#39;--&#39;</span> some params <span class="token parameter variable"${s}>--and</span> options <span class="token parameter variable"${s}>--here</span>

<span class="token comment"${s}># Create a production build with ability to debug it</span>
<span class="token comment"${s}># (has source-maps and code is NOT minified)</span>
$ quasar build <span class="token parameter variable"${s}>-d</span> <span class="token punctuation"${s}>[</span>-m <span class="token operator"${s}>&lt;</span>mode<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>]</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# Build a SPA for production"),n(`
$ quasar build
`),a("span",{class:"token comment"},"# ...or"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` spa

`),a("span",{class:"token comment"},"# Build a SSR for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

`),a("span",{class:"token comment"},"# Build a PWA for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` pwa

`),a("span",{class:"token comment"},"# Build a BEX for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` bex

`),a("span",{class:"token comment"},"# Build a Mobile App (through Cordova)"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" cordova "),a("span",{class:"token parameter variable"},"-T"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
`),a("span",{class:"token comment"},"# or the short form:"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`

`),a("span",{class:"token comment"},"# Build an Electron App for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` electron

`),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
`),a("span",{class:"token comment"},'# underlying "cordova" executable:'),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
`),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`

`),a("span",{class:"token comment"},"# Create a production build with ability to debug it"),n(`
`),a("span",{class:"token comment"},"# (has source-maps and code is NOT minified)"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-d"),n(),a("span",{class:"token punctuation"},"["),n("-m "),a("span",{class:"token operator"},"<"),n("mode"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="clean" class="doc-heading doc-h2"${e}>Clean</h2><p${e}>Cleans up all the build assets:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar clean</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,"$ quasar clean")]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="new" class="doc-heading doc-h2"${e}>New</h2><p${e}>Generates Components, Pages, Layouts, Vuex Store.</p><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>This command is simply a helper in order to quickly scaffold a page/layout/component/vuex store module. You are not required to use it, but can help you when you don’t know how to start.</p></div>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar new <span class="token parameter variable"${s}>-h</span>

  Description
    Quickly scaffold files.

  Usage
    $ quasar new <span class="token operator"${s}>&lt;</span>p<span class="token operator"${s}>|</span>page<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>-f <span class="token operator"${s}>&lt;</span>option<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>]</span> <span class="token operator"${s}>&lt;</span>page_file_name<span class="token operator"${s}>&gt;</span>
    $ quasar new <span class="token operator"${s}>&lt;</span>l<span class="token operator"${s}>|</span>layout<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>-f <span class="token operator"${s}>&lt;</span>option<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>]</span> <span class="token operator"${s}>&lt;</span>layout_file_name<span class="token operator"${s}>&gt;</span>
    $ quasar new <span class="token operator"${s}>&lt;</span>c<span class="token operator"${s}>|</span>component<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>-f <span class="token operator"${s}>&lt;</span>option<span class="token operator"${s}>&gt;</span><span class="token punctuation"${s}>]</span> <span class="token operator"${s}>&lt;</span>component_file_name<span class="token operator"${s}>&gt;</span>
    $ quasar new <span class="token operator"${s}>&lt;</span>b<span class="token operator"${s}>|</span>boot<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>-f ts<span class="token punctuation"${s}>]</span> <span class="token operator"${s}>&lt;</span>boot_name<span class="token operator"${s}>&gt;</span>
    $ quasar new <span class="token operator"${s}>&lt;</span>s<span class="token operator"${s}>|</span>store<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>-f ts<span class="token punctuation"${s}>]</span> <span class="token operator"${s}>&lt;</span>store_module_name<span class="token operator"${s}>&gt;</span>
    $ quasar new ssrmiddleware <span class="token punctuation"${s}>[</span>-f ts<span class="token punctuation"${s}>]</span> <span class="token operator"${s}>&lt;</span>middleware_name<span class="token operator"${s}>&gt;</span>

  Examples
    <span class="token comment"${s}># Create src/pages/MyNewPage.vue:</span>
    $ quasar new p MyNewPage

    <span class="token comment"${s}># Create src/pages/MyNewPage.vue and src/pages/OtherPage.vue:</span>
    $ quasar new p MyNewPage OtherPage

    <span class="token comment"${s}># Create src/layouts/shop/Checkout.vue</span>
    $ quasar new layout shop/Checkout.vue

    <span class="token comment"${s}># Create src/layouts/shop/Checkout.vue with TypeScript options API</span>
    $ quasar new layout <span class="token parameter variable"${s}>-f</span> ts-options shop/Checkout.vue

    <span class="token comment"${s}># Create a store with TypeScript (-f ts is optional if tsconfig.json is present)</span>
    $ quasar new store <span class="token parameter variable"${s}>-f</span> ts myStore

  Options
    --help, <span class="token parameter variable"${s}>-h</span>            Displays this message

    <span class="token parameter variable"${s}>--format</span> <span class="token parameter variable"${s}>-f</span> <span class="token operator"${s}>&lt;</span>option<span class="token operator"${s}>&gt;</span>  <span class="token punctuation"${s}>(</span>optional<span class="token punctuation"${s}>)</span> Use a supported <span class="token function"${s}>format</span> <span class="token keyword"${s}>for</span> the template
                          Possible values:
                             * default - Default JS template
                             * ts-composition - TS composition API <span class="token punctuation"${s}>(</span>default <span class="token keyword"${s}>if</span> using TS<span class="token punctuation"${s}>)</span>
                             * ts-composition-setup - TS composition API with <span class="token operator"${s}>&lt;</span>script setup<span class="token operator"${s}>&gt;</span>
                             * ts-options - TS options API
                             * ts-class - <span class="token punctuation"${s}>[</span>DEPRECATED<span class="token punctuation"${s}>]</span> TS class style syntax
                             * ts - Plain TS template <span class="token punctuation"${s}>(</span>for boot, store, and ssrmiddleware files<span class="token punctuation"${s}>)</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar new "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Quickly scaffold files.

  Usage
    $ quasar new `),a("span",{class:"token operator"},"<"),n("p"),a("span",{class:"token operator"},"|"),n("page"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f "),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("page_file_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("l"),a("span",{class:"token operator"},"|"),n("layout"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f "),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("layout_file_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("c"),a("span",{class:"token operator"},"|"),n("component"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f "),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("component_file_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("b"),a("span",{class:"token operator"},"|"),n("boot"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f ts"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("boot_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("s"),a("span",{class:"token operator"},"|"),n("store"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f ts"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("store_module_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new ssrmiddleware `),a("span",{class:"token punctuation"},"["),n("-f ts"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("middleware_name"),a("span",{class:"token operator"},">"),n(`

  Examples
    `),a("span",{class:"token comment"},"# Create src/pages/MyNewPage.vue:"),n(`
    $ quasar new p MyNewPage

    `),a("span",{class:"token comment"},"# Create src/pages/MyNewPage.vue and src/pages/OtherPage.vue:"),n(`
    $ quasar new p MyNewPage OtherPage

    `),a("span",{class:"token comment"},"# Create src/layouts/shop/Checkout.vue"),n(`
    $ quasar new layout shop/Checkout.vue

    `),a("span",{class:"token comment"},"# Create src/layouts/shop/Checkout.vue with TypeScript options API"),n(`
    $ quasar new layout `),a("span",{class:"token parameter variable"},"-f"),n(` ts-options shop/Checkout.vue

    `),a("span",{class:"token comment"},"# Create a store with TypeScript (-f ts is optional if tsconfig.json is present)"),n(`
    $ quasar new store `),a("span",{class:"token parameter variable"},"-f"),n(` ts myStore

  Options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`            Displays this message

    `),a("span",{class:"token parameter variable"},"--format"),n(),a("span",{class:"token parameter variable"},"-f"),n(),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),n("  "),a("span",{class:"token punctuation"},"("),n("optional"),a("span",{class:"token punctuation"},")"),n(" Use a supported "),a("span",{class:"token function"},"format"),n(),a("span",{class:"token keyword"},"for"),n(` the template
                          Possible values:
                             * default - Default JS template
                             * ts-composition - TS composition API `),a("span",{class:"token punctuation"},"("),n("default "),a("span",{class:"token keyword"},"if"),n(" using TS"),a("span",{class:"token punctuation"},")"),n(`
                             * ts-composition-setup - TS composition API with `),a("span",{class:"token operator"},"<"),n("script setup"),a("span",{class:"token operator"},">"),n(`
                             * ts-options - TS options API
                             * ts-class - `),a("span",{class:"token punctuation"},"["),n("DEPRECATED"),a("span",{class:"token punctuation"},"]"),n(` TS class style syntax
                             * ts - Plain TS template `),a("span",{class:"token punctuation"},"("),n("for boot, store, and ssrmiddleware files"),a("span",{class:"token punctuation"},")")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="mode" class="doc-heading doc-h2"${e}>Mode</h2>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar mode <span class="token parameter variable"${s}>-h</span>

  Description
    Add/Remove support <span class="token keyword"${s}>for</span> PWA / BEX / Cordova / Capacitor / Electron modes.

  Usage
    $ quasar mode <span class="token punctuation"${s}>[</span>add<span class="token operator"${s}>|</span>remove<span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>[</span>pwa<span class="token operator"${s}>|</span>ssr<span class="token operator"${s}>|</span>bex<span class="token operator"${s}>|</span>cordova<span class="token operator"${s}>|</span>capacitor<span class="token operator"${s}>|</span>electron<span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>[</span>--yes<span class="token punctuation"${s}>]</span>

    <span class="token comment"${s}># determine what modes are currently installed:</span>
    $ quasar mode

  Options
    --yes, <span class="token parameter variable"${s}>-y</span>     Skips the <span class="token string"${s}>&quot;Are you sure?&quot;</span> question
                  when removing a Quasar mode
    --help, <span class="token parameter variable"${s}>-h</span>    Displays this message</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar mode "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Add/Remove support `),a("span",{class:"token keyword"},"for"),n(` PWA / BEX / Cordova / Capacitor / Electron modes.

  Usage
    $ quasar mode `),a("span",{class:"token punctuation"},"["),n("add"),a("span",{class:"token operator"},"|"),n("remove"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"["),n("pwa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"["),n("--yes"),a("span",{class:"token punctuation"},"]"),n(`

    `),a("span",{class:"token comment"},"# determine what modes are currently installed:"),n(`
    $ quasar mode

  Options
    --yes, `),a("span",{class:"token parameter variable"},"-y"),n("     Skips the "),a("span",{class:"token string"},'"Are you sure?"'),n(` question
                  when removing a Quasar mode
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("    Displays this message")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<p${e}>When you initialize a project with the CLI, you can build SPA (Single Page Website/Application), SSR (Server-side Render Website/Application with optional PWA client takeover), PWA (Progressive Web App), Mobile App (through Cordova), and/or Electron Apps. When you develop for SSR, PWA, Cordova or Electron, you need these modes installed. If you issue “quasar dev” or “quasar build” they will automatically be installed.</p><p${e}>These modes will add a “src-*” folder into your project with very specific code for it:</p>`),i(p(P,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:r((m,t,u,s)=>{if(t)t(`<thead${s}><tr${s}><th class="text-left"${s}>Folder</th><th class="text-left"${s}>Mode</th><th class="text-left"${s}>Description</th></tr></thead><tbody${s}><tr${s}><td${s}>src-ssr</td><td${s}>ssr</td><td${s}>Contains the production Node server files.</td></tr><tr${s}><td${s}>src-pwa</td><td${s}>pwa</td><td${s}>Contains the Service Worker file that you can tweak.</td></tr><tr${s}><td${s}>src-cordova</td><td${s}>cordova</td><td${s}>Is a Cordova project folder that will be using your ‘src’ as content. Tweak Cordova config, add/remove platforms, splash screens, Cordova plugins and so on from this folder. Do NOT touch “src-cordova/www” folder though as it will get overwritten at every build.</td></tr><tr${s}><td${s}>src-electron</td><td${s}>electron</td><td${s}>Has code for the main Electron thread. The renderer thread will be your app in ‘src’.</td></tr><tr${s}><td${s}>src-bex</td><td${s}>bex</td><td${s}>Contains the specific files for Browser Extensions mode.</td></tr></tbody>`);else return[a("thead",null,[a("tr",null,[a("th",{class:"text-left"},"Folder"),a("th",{class:"text-left"},"Mode"),a("th",{class:"text-left"},"Description")])]),a("tbody",null,[a("tr",null,[a("td",null,"src-ssr"),a("td",null,"ssr"),a("td",null,"Contains the production Node server files.")]),a("tr",null,[a("td",null,"src-pwa"),a("td",null,"pwa"),a("td",null,"Contains the Service Worker file that you can tweak.")]),a("tr",null,[a("td",null,"src-cordova"),a("td",null,"cordova"),a("td",null,"Is a Cordova project folder that will be using your ‘src’ as content. Tweak Cordova config, add/remove platforms, splash screens, Cordova plugins and so on from this folder. Do NOT touch “src-cordova/www” folder though as it will get overwritten at every build.")]),a("tr",null,[a("td",null,"src-electron"),a("td",null,"electron"),a("td",null,"Has code for the main Electron thread. The renderer thread will be your app in ‘src’.")]),a("tr",null,[a("td",null,"src-bex"),a("td",null,"bex"),a("td",null,"Contains the specific files for Browser Extensions mode.")])])]}),_:1},d,e)),i(`<p${e}>If for some reason you decide you don’t need a mode, you can remove it. <strong${e}>This will permanently delete</strong> the respective “src-*” folder.</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar mode remove pwa</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,"$ quasar mode remove pwa")]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="describe" class="doc-heading doc-h2"${e}>Describe</h2><p${e}>This command is useful to describe the API of any Quasar components/directives/plugins that your project is using. <strong${e}>It is specific to your Quasar version installed in your project folder.</strong></p><p${e}>Examples: <code class="doc-token"${e}>$ quasar describe QIcon</code>, <code class="doc-token"${e}>$ quasar describe TouchPan</code>, <code class="doc-token"${e}>$ quasar describe Cookies</code>.</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar describe <span class="token parameter variable"${s}>-h</span>

  Description
    Describes a component API <span class="token keyword"${s}>for</span> project&#39;s Quasar version being used

  Usage
    $ quasar describe <span class="token operator"${s}>&lt;</span>component/directive/Quasar plugin<span class="token operator"${s}>&gt;</span>

    <span class="token comment"${s}># display everything:</span>
    $ quasar describe QIcon

    <span class="token comment"${s}># displaying only props:</span>
    $ quasar describe QIcon <span class="token parameter variable"${s}>-p</span>
    <span class="token comment"${s}># displaying props and methods only:</span>
    $ quasar describe QIcon <span class="token parameter variable"${s}>-p</span> <span class="token parameter variable"${s}>-m</span>
    <span class="token comment"${s}># filtering by &quot;si&quot;:</span>
    $ quasar describe QIcon <span class="token parameter variable"${s}>-f</span> si
    <span class="token comment"${s}># filtering only props by &quot;co&quot;:</span>
    $ quasar describe QIcon <span class="token parameter variable"${s}>-p</span> <span class="token parameter variable"${s}>-f</span> co

    <span class="token comment"${s}># Open docs URL:</span>
    $ quasar describe QIcon <span class="token parameter variable"${s}>-d</span>

  Options
    --filter, <span class="token parameter variable"${s}>-f</span> <span class="token operator"${s}>&lt;</span>filter<span class="token operator"${s}>&gt;</span> Filters the API
    --props, <span class="token parameter variable"${s}>-p</span>           Displays the API props
    --slots, <span class="token parameter variable"${s}>-s</span>           Displays the API slots
    --methods, <span class="token parameter variable"${s}>-m</span>         Displays the API methods
    --events, <span class="token parameter variable"${s}>-e</span>          Displays the API events
    --value, <span class="token parameter variable"${s}>-v</span>           Displays the API value
    --arg, <span class="token parameter variable"${s}>-a</span>             Displays the API arg
    --modifiers, <span class="token parameter variable"${s}>-M</span>       Displays the API modifiers
    --injection, <span class="token parameter variable"${s}>-i</span>       Displays the API injection
    --quasar, <span class="token parameter variable"${s}>-q</span>          Displays the API quasar conf options
    --help, <span class="token parameter variable"${s}>-h</span>            Displays this message</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar describe "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Describes a component API `),a("span",{class:"token keyword"},"for"),n(` project's Quasar version being used

  Usage
    $ quasar describe `),a("span",{class:"token operator"},"<"),n("component/directive/Quasar plugin"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# display everything:"),n(`
    $ quasar describe QIcon

    `),a("span",{class:"token comment"},"# displaying only props:"),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-p"),n(`
    `),a("span",{class:"token comment"},"# displaying props and methods only:"),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token parameter variable"},"-m"),n(`
    `),a("span",{class:"token comment"},'# filtering by "si":'),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-f"),n(` si
    `),a("span",{class:"token comment"},'# filtering only props by "co":'),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token parameter variable"},"-f"),n(` co

    `),a("span",{class:"token comment"},"# Open docs URL:"),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-d"),n(`

  Options
    --filter, `),a("span",{class:"token parameter variable"},"-f"),n(),a("span",{class:"token operator"},"<"),n("filter"),a("span",{class:"token operator"},">"),n(` Filters the API
    --props, `),a("span",{class:"token parameter variable"},"-p"),n(`           Displays the API props
    --slots, `),a("span",{class:"token parameter variable"},"-s"),n(`           Displays the API slots
    --methods, `),a("span",{class:"token parameter variable"},"-m"),n(`         Displays the API methods
    --events, `),a("span",{class:"token parameter variable"},"-e"),n(`          Displays the API events
    --value, `),a("span",{class:"token parameter variable"},"-v"),n(`           Displays the API value
    --arg, `),a("span",{class:"token parameter variable"},"-a"),n(`             Displays the API arg
    --modifiers, `),a("span",{class:"token parameter variable"},"-M"),n(`       Displays the API modifiers
    --injection, `),a("span",{class:"token parameter variable"},"-i"),n(`       Displays the API injection
    --quasar, `),a("span",{class:"token parameter variable"},"-q"),n(`          Displays the API quasar conf options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("            Displays this message")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar describe QIcon

 Describing QIcon component API
 Description is based on your project&#39;s Quasar version

 Properties

   name <span class="token punctuation"${s}>(</span>String<span class="token punctuation"${s}>)</span>
     Description: Name of the icon, following Quasar convention
     Examples:
       map
       ion-add

   color <span class="token punctuation"${s}>(</span>String<span class="token punctuation"${s}>)</span>
     Description: Color name <span class="token keyword"${s}>for</span> component from the Quasar Color Palette
     Examples:
       primary
       teal-10

   size <span class="token punctuation"${s}>(</span>String<span class="token punctuation"${s}>)</span>
     Description: Size <span class="token keyword"${s}>in</span> CSS units, including unit name
     Examples:
       16px
       2rem

   left <span class="token punctuation"${s}>(</span>Boolean<span class="token punctuation"${s}>)</span>
     Description: Apply a standard margin on the left side. Useful <span class="token keyword"${s}>if</span> icon is on the right side of something.

   right <span class="token punctuation"${s}>(</span>Boolean<span class="token punctuation"${s}>)</span>
     Description: Apply a standard margin on the right side. Useful <span class="token keyword"${s}>if</span> icon is on the left side of something.

 Slots

   default
     Suggestions: QTooltip or QMenu

 Scoped Slots

   *No scoped slots*

 Events

   *No events*

 Methods

   *No methods*</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n(`$ quasar describe QIcon

 Describing QIcon component API
 Description is based on your project's Quasar version

 Properties

   name `),a("span",{class:"token punctuation"},"("),n("String"),a("span",{class:"token punctuation"},")"),n(`
     Description: Name of the icon, following Quasar convention
     Examples:
       map
       ion-add

   color `),a("span",{class:"token punctuation"},"("),n("String"),a("span",{class:"token punctuation"},")"),n(`
     Description: Color name `),a("span",{class:"token keyword"},"for"),n(` component from the Quasar Color Palette
     Examples:
       primary
       teal-10

   size `),a("span",{class:"token punctuation"},"("),n("String"),a("span",{class:"token punctuation"},")"),n(`
     Description: Size `),a("span",{class:"token keyword"},"in"),n(` CSS units, including unit name
     Examples:
       16px
       2rem

   left `),a("span",{class:"token punctuation"},"("),n("Boolean"),a("span",{class:"token punctuation"},")"),n(`
     Description: Apply a standard margin on the left side. Useful `),a("span",{class:"token keyword"},"if"),n(` icon is on the right side of something.

   right `),a("span",{class:"token punctuation"},"("),n("Boolean"),a("span",{class:"token punctuation"},")"),n(`
     Description: Apply a standard margin on the right side. Useful `),a("span",{class:"token keyword"},"if"),n(` icon is on the left side of something.

 Slots

   default
     Suggestions: QTooltip or QMenu

 Scoped Slots

   *No scoped slots*

 Events

   *No events*

 Methods

   *No methods*`)])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="inspect" class="doc-heading doc-h2"${e}>Inspect</h2><p${e}>This command can be used to inspect the Vite config generated by Quasar CLI.</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar inspect <span class="token parameter variable"${s}>-h</span>

  Description
    Inspect Quasar generated Vite config

  Usage
    $ quasar inspect
    $ quasar inspect <span class="token parameter variable"${s}>-c</span> build
    $ quasar inspect <span class="token parameter variable"${s}>-m</span> electron <span class="token parameter variable"${s}>-p</span> <span class="token string"${s}>&#39;build.outDir&#39;</span>

  Options
    --cmd, <span class="token parameter variable"${s}>-c</span>        Quasar <span class="token builtin class-name"${s}>command</span> <span class="token punctuation"${s}>[</span>dev<span class="token operator"${s}>|</span>build<span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>(</span>default: dev<span class="token punctuation"${s}>)</span>
    --mode, <span class="token parameter variable"${s}>-m</span>       App mode <span class="token punctuation"${s}>[</span>spa<span class="token operator"${s}>|</span>ssr<span class="token operator"${s}>|</span>pwa<span class="token operator"${s}>|</span>bex<span class="token operator"${s}>|</span>cordova<span class="token operator"${s}>|</span>capacitor<span class="token operator"${s}>|</span>electron<span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>(</span>default: spa<span class="token punctuation"${s}>)</span>
    --depth, <span class="token parameter variable"${s}>-d</span>      Number of levels deep <span class="token punctuation"${s}>(</span>default: <span class="token number"${s}>2</span><span class="token punctuation"${s}>)</span>
    --path, <span class="token parameter variable"${s}>-p</span>       Path of config <span class="token keyword"${s}>in</span> dot notation
                        Examples:
                          <span class="token parameter variable"${s}>-p</span> module.rules
                          <span class="token parameter variable"${s}>-p</span> plugins
    --thread, <span class="token parameter variable"${s}>-t</span>     Display only one specific app mode config thread
    --help, <span class="token parameter variable"${s}>-h</span>       Displays this message</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar inspect "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Inspect Quasar generated Vite config

  Usage
    $ quasar inspect
    $ quasar inspect `),a("span",{class:"token parameter variable"},"-c"),n(` build
    $ quasar inspect `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token string"},"'build.outDir'"),n(`

  Options
    --cmd, `),a("span",{class:"token parameter variable"},"-c"),n("        Quasar "),a("span",{class:"token builtin class-name"},"command"),n(),a("span",{class:"token punctuation"},"["),n("dev"),a("span",{class:"token operator"},"|"),n("build"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: dev"),a("span",{class:"token punctuation"},")"),n(`
    --mode, `),a("span",{class:"token parameter variable"},"-m"),n("       App mode "),a("span",{class:"token punctuation"},"["),n("spa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("pwa"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: spa"),a("span",{class:"token punctuation"},")"),n(`
    --depth, `),a("span",{class:"token parameter variable"},"-d"),n("      Number of levels deep "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),n(`
    --path, `),a("span",{class:"token parameter variable"},"-p"),n("       Path of config "),a("span",{class:"token keyword"},"in"),n(` dot notation
                        Examples:
                          `),a("span",{class:"token parameter variable"},"-p"),n(` module.rules
                          `),a("span",{class:"token parameter variable"},"-p"),n(` plugins
    --thread, `),a("span",{class:"token parameter variable"},"-t"),n(`     Display only one specific app mode config thread
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="ext" class="doc-heading doc-h2"${e}>Ext</h2><p${e}>This command is used to manage `),i(p(y,{to:"/app-extensions/introduction"},{default:r((m,t,u,s)=>{if(t)t("App Extensions");else return[n("App Extensions")]}),_:1},d,e)),i(".</p>"),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar ext <span class="token parameter variable"${s}>-h</span>

  Description
    Manage Quasar App Extensions

  Usage
    <span class="token comment"${s}># display list of installed extensions</span>
    $ quasar ext

    <span class="token comment"${s}># Add Quasar App Extension</span>
    $ quasar ext <span class="token function"${s}>add</span> <span class="token operator"${s}>&lt;</span>ext-id<span class="token operator"${s}>&gt;</span>

    <span class="token comment"${s}># Remove Quasar App Extension</span>
    $ quasar ext remove <span class="token operator"${s}>&lt;</span>ext-id<span class="token operator"${s}>&gt;</span>

    <span class="token comment"${s}># Add Quasar App Extension, but</span>
    <span class="token comment"${s}># skip installing the npm package</span>
    <span class="token comment"${s}># (assumes it&#39;s already installed)</span>
    $ quasar ext invoke <span class="token operator"${s}>&lt;</span>ext-id<span class="token operator"${s}>&gt;</span>

    <span class="token comment"${s}># Remove Quasar App Extension, but</span>
    <span class="token comment"${s}># skip uninstalling the npm package</span>
    $ quasar ext uninvoke <span class="token operator"${s}>&lt;</span>ext-id<span class="token operator"${s}>&gt;</span>

  Options
    --help, <span class="token parameter variable"${s}>-h</span>       Displays this message</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar ext "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Manage Quasar App Extensions

  Usage
    `),a("span",{class:"token comment"},"# display list of installed extensions"),n(`
    $ quasar ext

    `),a("span",{class:"token comment"},"# Add Quasar App Extension"),n(`
    $ quasar ext `),a("span",{class:"token function"},"add"),n(),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# Remove Quasar App Extension"),n(`
    $ quasar ext remove `),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# Add Quasar App Extension, but"),n(`
    `),a("span",{class:"token comment"},"# skip installing the npm package"),n(`
    `),a("span",{class:"token comment"},"# (assumes it's already installed)"),n(`
    $ quasar ext invoke `),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# Remove Quasar App Extension, but"),n(`
    `),a("span",{class:"token comment"},"# skip uninstalling the npm package"),n(`
    $ quasar ext uninvoke `),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

  Options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="run" class="doc-heading doc-h2"${e}>Run</h2><p${e}>This command is used to run commands supplied by the `),i(p(y,{to:"/app-extensions/introduction"},{default:r((m,t,u,s)=>{if(t)t("App Extensions");else return[n("App Extensions")]}),_:1},d,e)),i(" that you’ve installed into your project folder.</p>"),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar run <span class="token parameter variable"${s}>-h</span>

  Description
    Run app extension provided commands

  Usage
    $ quasar run <span class="token operator"${s}>&lt;</span>extension-id<span class="token operator"${s}>&gt;</span> <span class="token operator"${s}>&lt;</span>cmd<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>args, params<span class="token punctuation"${s}>]</span>
    $ quasar <span class="token operator"${s}>&lt;</span>extension-id<span class="token operator"${s}>&gt;</span> <span class="token operator"${s}>&lt;</span>cmd<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>args, params<span class="token punctuation"${s}>]</span>

    $ quasar run iconify create pic <span class="token parameter variable"${s}>-s</span> <span class="token parameter variable"${s}>--mark</span> some_file
    $ quasar iconify create pic <span class="token parameter variable"${s}>-s</span> <span class="token parameter variable"${s}>--mark</span> some_file
        <span class="token comment"${s}># Note: &quot;iconify&quot; is an example and not a real extension.</span>
        <span class="token comment"${s}># Looks for installed extension called &quot;iconify&quot;</span>
        <span class="token comment"${s}># (quasar-app-extension-iconify extension package)</span>
        <span class="token comment"${s}># and runs its custom defined &quot;create&quot; command</span>
        <span class="token comment"${s}># with &quot;pic&quot; argument and &quot;-s --mark some_file&quot; params</span>

  Options
    --help, <span class="token parameter variable"${s}>-h</span>       Displays this message</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar run "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Run app extension provided commands

  Usage
    $ quasar run `),a("span",{class:"token operator"},"<"),n("extension-id"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("cmd"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("args, params"),a("span",{class:"token punctuation"},"]"),n(`
    $ quasar `),a("span",{class:"token operator"},"<"),n("extension-id"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("cmd"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("args, params"),a("span",{class:"token punctuation"},"]"),n(`

    $ quasar run iconify create pic `),a("span",{class:"token parameter variable"},"-s"),n(),a("span",{class:"token parameter variable"},"--mark"),n(` some_file
    $ quasar iconify create pic `),a("span",{class:"token parameter variable"},"-s"),n(),a("span",{class:"token parameter variable"},"--mark"),n(` some_file
        `),a("span",{class:"token comment"},'# Note: "iconify" is an example and not a real extension.'),n(`
        `),a("span",{class:"token comment"},'# Looks for installed extension called "iconify"'),n(`
        `),a("span",{class:"token comment"},"# (quasar-app-extension-iconify extension package)"),n(`
        `),a("span",{class:"token comment"},'# and runs its custom defined "create" command'),n(`
        `),a("span",{class:"token comment"},'# with "pic" argument and "-s --mark some_file" params'),n(`

  Options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="serve" class="doc-heading doc-h2"${e}>Serve</h2><p${e}>This command can be used in production too and it is being supplied by the global installation of <code class="doc-token"${e}>@quasar/cli</code> package.</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ quasar serve <span class="token parameter variable"${s}>-h</span>

  Description
    Start a HTTP<span class="token punctuation"${s}>(</span>S<span class="token punctuation"${s}>)</span> server on a folder.

  Usage
    $ quasar serve <span class="token punctuation"${s}>[</span>path<span class="token punctuation"${s}>]</span>
    $ quasar serve <span class="token builtin class-name"${s}>.</span> <span class="token comment"${s}># serve current folder</span>

    If you serve a SSR folder built with the CLI <span class="token keyword"${s}>then</span>
    control is yielded to /index.js and params have no effect.

  Options
    --port, <span class="token parameter variable"${s}>-p</span>              Port to use <span class="token punctuation"${s}>(</span>default: <span class="token number"${s}>4000</span><span class="token punctuation"${s}>)</span>
    --hostname, <span class="token parameter variable"${s}>-H</span>          Address to use <span class="token punctuation"${s}>(</span>default: <span class="token number"${s}>0.0</span>.0.0<span class="token punctuation"${s}>)</span>
    --gzip, <span class="token parameter variable"${s}>-g</span>              Compress content <span class="token punctuation"${s}>(</span>default: <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span>
    --silent, <span class="token parameter variable"${s}>-s</span>            Suppress log message
    <span class="token parameter variable"${s}>--colors</span>                Log messages with colors <span class="token punctuation"${s}>(</span>default: <span class="token boolean"${s}>true</span><span class="token punctuation"${s}>)</span>
    --open, <span class="token parameter variable"${s}>-o</span>              Open browser window after starting
    --cache, <span class="token parameter variable"${s}>-c</span> <span class="token operator"${s}>&lt;</span>number<span class="token operator"${s}>&gt;</span>    Cache <span class="token function"${s}>time</span> <span class="token punctuation"${s}>(</span>max-age<span class="token punctuation"${s}>)</span> <span class="token keyword"${s}>in</span> seconds<span class="token punctuation"${s}>;</span>
                            Does not apply to /service-worker.js
                            <span class="token punctuation"${s}>(</span>default: <span class="token number"${s}>86400</span> - <span class="token number"${s}>24</span> hours<span class="token punctuation"${s}>)</span>
    --micro, <span class="token parameter variable"${s}>-m</span> <span class="token operator"${s}>&lt;</span>seconds<span class="token operator"${s}>&gt;</span>   Use micro-cache <span class="token punctuation"${s}>(</span>default: <span class="token number"${s}>1</span> second<span class="token punctuation"${s}>)</span>

    <span class="token parameter variable"${s}>--history</span>               Use <span class="token function"${s}>history</span> api fallback<span class="token punctuation"${s}>;</span>
                              All requests fallback to /index.html,
                              unless using <span class="token string"${s}>&quot;--index&quot;</span> parameter
    --index, <span class="token parameter variable"${s}>-i</span> <span class="token operator"${s}>&lt;</span>file<span class="token operator"${s}>&gt;</span>      History mode <span class="token punctuation"${s}>(</span>only<span class="token operator"${s}>!</span><span class="token punctuation"${s}>)</span> index url path
                              <span class="token punctuation"${s}>(</span>default: index.html<span class="token punctuation"${s}>)</span>

    <span class="token parameter variable"${s}>--https</span>                 Enable HTTPS
    --cert, <span class="token parameter variable"${s}>-C</span> <span class="token punctuation"${s}>[</span>path<span class="token punctuation"${s}>]</span>       Path to SSL cert <span class="token function"${s}>file</span> <span class="token punctuation"${s}>(</span>Optional<span class="token punctuation"${s}>)</span>
    --key, <span class="token parameter variable"${s}>-K</span> <span class="token punctuation"${s}>[</span>path<span class="token punctuation"${s}>]</span>        Path to SSL key <span class="token function"${s}>file</span> <span class="token punctuation"${s}>(</span>Optional<span class="token punctuation"${s}>)</span>
    <span class="token parameter variable"${s}>--proxy</span> <span class="token operator"${s}>&lt;</span>file.mjs<span class="token operator"${s}>&gt;</span>      Proxy specific requests defined <span class="token keyword"${s}>in</span> <span class="token function"${s}>file</span><span class="token punctuation"${s}>;</span>
                            File must <span class="token builtin class-name"${s}>export</span> Array <span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span> path, rule <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span>
                            See example below. <span class="token string"${s}>&quot;rule&quot;</span> is defined at:
                            https://github.com/chimurai/http-proxy-middleware
    <span class="token parameter variable"${s}>--cors</span>                  Enable CORS <span class="token keyword"${s}>for</span> all requests
    --help, <span class="token parameter variable"${s}>-h</span>              Displays this message

  Proxy <span class="token function"${s}>file</span> example
    <span class="token builtin class-name"${s}>export</span> default <span class="token punctuation"${s}>[</span>
      <span class="token punctuation"${s}>{</span>
        path: <span class="token string"${s}>&#39;/api&#39;</span>,
        rule: <span class="token punctuation"${s}>{</span> target: <span class="token string"${s}>&#39;http://www.example.org&#39;</span> <span class="token punctuation"${s}>}</span>
      <span class="token punctuation"${s}>}</span>
    <span class="token punctuation"${s}>]</span>
    --<span class="token operator"${s}>&gt;</span> will be transformed into app.use<span class="token punctuation"${s}>(</span>path, httpProxyMiddleware<span class="token punctuation"${s}>(</span>rule<span class="token punctuation"${s}>))</span></code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar serve "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Start a HTTP`),a("span",{class:"token punctuation"},"("),n("S"),a("span",{class:"token punctuation"},")"),n(` server on a folder.

  Usage
    $ quasar serve `),a("span",{class:"token punctuation"},"["),n("path"),a("span",{class:"token punctuation"},"]"),n(`
    $ quasar serve `),a("span",{class:"token builtin class-name"},"."),n(),a("span",{class:"token comment"},"# serve current folder"),n(`

    If you serve a SSR folder built with the CLI `),a("span",{class:"token keyword"},"then"),n(`
    control is yielded to /index.js and params have no effect.

  Options
    --port, `),a("span",{class:"token parameter variable"},"-p"),n("              Port to use "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"4000"),a("span",{class:"token punctuation"},")"),n(`
    --hostname, `),a("span",{class:"token parameter variable"},"-H"),n("          Address to use "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"0.0"),n(".0.0"),a("span",{class:"token punctuation"},")"),n(`
    --gzip, `),a("span",{class:"token parameter variable"},"-g"),n("              Compress content "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),n(`
    --silent, `),a("span",{class:"token parameter variable"},"-s"),n(`            Suppress log message
    `),a("span",{class:"token parameter variable"},"--colors"),n("                Log messages with colors "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),n(`
    --open, `),a("span",{class:"token parameter variable"},"-o"),n(`              Open browser window after starting
    --cache, `),a("span",{class:"token parameter variable"},"-c"),n(),a("span",{class:"token operator"},"<"),n("number"),a("span",{class:"token operator"},">"),n("    Cache "),a("span",{class:"token function"},"time"),n(),a("span",{class:"token punctuation"},"("),n("max-age"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token keyword"},"in"),n(" seconds"),a("span",{class:"token punctuation"},";"),n(`
                            Does not apply to /service-worker.js
                            `),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"86400"),n(" - "),a("span",{class:"token number"},"24"),n(" hours"),a("span",{class:"token punctuation"},")"),n(`
    --micro, `),a("span",{class:"token parameter variable"},"-m"),n(),a("span",{class:"token operator"},"<"),n("seconds"),a("span",{class:"token operator"},">"),n("   Use micro-cache "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"1"),n(" second"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token parameter variable"},"--history"),n("               Use "),a("span",{class:"token function"},"history"),n(" api fallback"),a("span",{class:"token punctuation"},";"),n(`
                              All requests fallback to /index.html,
                              unless using `),a("span",{class:"token string"},'"--index"'),n(` parameter
    --index, `),a("span",{class:"token parameter variable"},"-i"),n(),a("span",{class:"token operator"},"<"),n("file"),a("span",{class:"token operator"},">"),n("      History mode "),a("span",{class:"token punctuation"},"("),n("only"),a("span",{class:"token operator"},"!"),a("span",{class:"token punctuation"},")"),n(` index url path
                              `),a("span",{class:"token punctuation"},"("),n("default: index.html"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token parameter variable"},"--https"),n(`                 Enable HTTPS
    --cert, `),a("span",{class:"token parameter variable"},"-C"),n(),a("span",{class:"token punctuation"},"["),n("path"),a("span",{class:"token punctuation"},"]"),n("       Path to SSL cert "),a("span",{class:"token function"},"file"),n(),a("span",{class:"token punctuation"},"("),n("Optional"),a("span",{class:"token punctuation"},")"),n(`
    --key, `),a("span",{class:"token parameter variable"},"-K"),n(),a("span",{class:"token punctuation"},"["),n("path"),a("span",{class:"token punctuation"},"]"),n("        Path to SSL key "),a("span",{class:"token function"},"file"),n(),a("span",{class:"token punctuation"},"("),n("Optional"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token parameter variable"},"--proxy"),n(),a("span",{class:"token operator"},"<"),n("file.mjs"),a("span",{class:"token operator"},">"),n("      Proxy specific requests defined "),a("span",{class:"token keyword"},"in"),n(),a("span",{class:"token function"},"file"),a("span",{class:"token punctuation"},";"),n(`
                            File must `),a("span",{class:"token builtin class-name"},"export"),n(" Array "),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(" path, rule "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
                            See example below. `),a("span",{class:"token string"},'"rule"'),n(` is defined at:
                            https://github.com/chimurai/http-proxy-middleware
    `),a("span",{class:"token parameter variable"},"--cors"),n("                  Enable CORS "),a("span",{class:"token keyword"},"for"),n(` all requests
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`              Displays this message

  Proxy `),a("span",{class:"token function"},"file"),n(` example
    `),a("span",{class:"token builtin class-name"},"export"),n(" default "),a("span",{class:"token punctuation"},"["),n(`
      `),a("span",{class:"token punctuation"},"{"),n(`
        path: `),a("span",{class:"token string"},"'/api'"),n(`,
        rule: `),a("span",{class:"token punctuation"},"{"),n(" target: "),a("span",{class:"token string"},"'http://www.example.org'"),n(),a("span",{class:"token punctuation"},"}"),n(`
      `),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token punctuation"},"]"),n(`
    --`),a("span",{class:"token operator"},">"),n(" will be transformed into app.use"),a("span",{class:"token punctuation"},"("),n("path, httpProxyMiddleware"),a("span",{class:"token punctuation"},"("),n("rule"),a("span",{class:"token punctuation"},"))")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h3 id="custom-node-server" class="doc-heading doc-h3"${e}>Custom Node server</h3><p${e}>When building a SPA or PWA, the distributable folder can be served by any static webserver. To test it out (assuming you don’t have a specific publicPath or not using Vue Router “history” mode), you can use the “http-server” npm package.</p><p${e}>Or you can build your own server. Here are some examples:</p>`),i(p(c(k),{title:"When using default Vue Router 'hash' mode"},{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>const</span>
  express <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;express&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  serveStatic <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;serve-static&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  port <span class="token operator"${s}>=</span> process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>PORT</span> <span class="token operator"${s}>||</span> <span class="token number"${s}>5000</span>

<span class="token keyword"${s}>const</span> app <span class="token operator"${s}>=</span> <span class="token function"${s}>express</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token function"${s}>serveStatic</span><span class="token punctuation"${s}>(</span><span class="token operator"${s}>...</span>path<span class="token operator"${s}>-</span>to<span class="token operator"${s}>-</span>dist<span class="token operator"${s}>...</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>listen</span><span class="token punctuation"${s}>(</span>port<span class="token punctuation"${s}>)</span></code></pre>`),t(p(o,null,null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(`
  express `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'express'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  serveStatic `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'serve-static'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  port `),a("span",{class:"token operator"},"="),n(" process"),a("span",{class:"token punctuation"},"."),n("env"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"PORT"),n(),a("span",{class:"token operator"},"||"),n(),a("span",{class:"token number"},"5000"),n(`

`),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"express"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(`

app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"serveStatic"),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"..."),n("path"),a("span",{class:"token operator"},"-"),n("to"),a("span",{class:"token operator"},"-"),n("dist"),a("span",{class:"token operator"},"..."),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},")")])]),a(o)]}),_:1},d,e)),i(p(c(k),{title:"When using Vue Router 'history' mode"},{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token keyword"${s}>const</span>
  express <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;express&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  serveStatic <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;serve-static&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  history <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;connect-history-api-fallback&#39;</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>,</span>
  port <span class="token operator"${s}>=</span> process<span class="token punctuation"${s}>.</span>env<span class="token punctuation"${s}>.</span><span class="token constant"${s}>PORT</span> <span class="token operator"${s}>||</span> <span class="token number"${s}>5000</span>

<span class="token keyword"${s}>const</span> app <span class="token operator"${s}>=</span> <span class="token function"${s}>express</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span>

app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token function"${s}>history</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token function"${s}>serveStatic</span><span class="token punctuation"${s}>(</span><span class="token operator"${s}>...</span>path<span class="token operator"${s}>-</span>to<span class="token operator"${s}>-</span>dist<span class="token operator"${s}>...</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>listen</span><span class="token punctuation"${s}>(</span>port<span class="token punctuation"${s}>)</span></code></pre>`),t(p(o,null,null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(`
  express `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'express'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  serveStatic `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'serve-static'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  history `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'connect-history-api-fallback'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  port `),a("span",{class:"token operator"},"="),n(" process"),a("span",{class:"token punctuation"},"."),n("env"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"PORT"),n(),a("span",{class:"token operator"},"||"),n(),a("span",{class:"token number"},"5000"),n(`

`),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"express"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(`

app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"history"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"serveStatic"),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"..."),n("path"),a("span",{class:"token operator"},"-"),n("to"),a("span",{class:"token operator"},"-"),n("dist"),a("span",{class:"token operator"},"..."),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},")")])]),a(o)]}),_:1},d,e)),i(`<p${e}>If you need URL rewrites of API, or simply put you want to proxy your API requests, then you can use “http-proxy-middleware” package:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token comment"${s}>// add this to one of the two previous examples:</span>
<span class="token keyword"${s}>const</span> <span class="token punctuation"${s}>{</span> createProxyMiddleware <span class="token punctuation"${s}>}</span> <span class="token operator"${s}>=</span> <span class="token function"${s}>require</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;http-proxy-middleware&#39;</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// ...</span>
app<span class="token punctuation"${s}>.</span><span class="token function"${s}>use</span><span class="token punctuation"${s}>(</span><span class="token string"${s}>&#39;/api&#39;</span><span class="token punctuation"${s}>,</span> <span class="token function"${s}>createProxyMiddleware</span><span class="token punctuation"${s}>(</span><span class="token punctuation"${s}>{</span>
  <span class="token literal-property property"${s}>target</span><span class="token operator"${s}>:</span> <span class="token template-string"${s}><span class="token template-punctuation string"${s}>\`</span><span class="token string"${s}>http://my-api.com:5050</span><span class="token template-punctuation string"${s}>\`</span></span><span class="token punctuation"${s}>,</span>
  <span class="token literal-property property"${s}>pathRewrite</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span><span class="token string-property property"${s}>&quot;^/api&quot;</span> <span class="token operator"${s}>:</span> <span class="token string"${s}>&quot;&quot;</span><span class="token punctuation"${s}>}</span>
<span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>)</span>

<span class="token comment"${s}>// then app.listen(...)</span></code></pre>`),t(p(o,null,null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"// add this to one of the two previous examples:"),n(`
`),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"{"),n(" createProxyMiddleware "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'http-proxy-middleware'"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token comment"},"// ..."),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'/api'"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token function"},"createProxyMiddleware"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"target"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"http://my-api.com:5050"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"pathRewrite"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string-property property"},'"^/api"'),n(),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token comment"},"// then app.listen(...)")])]),a(o)]}),_:1},d,e)),i(`<p${e}>Finally, run one of these files:</p>`),i(p(c(k),null,{default:r((m,t,u,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ <span class="token function"${s}>node</span> my-server.js</code></pre>`),t(p(o,{lang:"bash"},null,u,s));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"node"),n(" my-server.js")])]),a(o,{lang:"bash"})]}),_:1},d,e)),i(`<h2 id="create" class="doc-heading doc-h2"${e}>Create `),i(p(g,{align:"top",color:"brand-primary",label:"legacy"},null,d,e)),i(`</h2><h3 id="scaffolding-a-quasar-project-folder" class="doc-heading doc-h3"${e}>Scaffolding a Quasar project folder</h3><p${e}><code class="doc-token"${e}>quasar create</code> is a legacy command and is not recommended for use except for custom starter kits. You should use <code class="doc-token"${e}>create-quasar</code> instead:</p>`),i(p(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:r((m,t,u,s)=>{if(t)t(p(b,{class:"q-pa-none",name:"Yarn"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>yarn</span> create quasar</code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"yarn"),n(" create quasar")])]),a(o,{lang:"bash"})]}),_:1},u,s)),t(p(b,{class:"q-pa-none",name:"NPM"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>npm</span> init quasar</code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"npm"),n(" init quasar")])]),a(o,{lang:"bash"})]}),_:1},u,s)),t(p(b,{class:"q-pa-none",name:"PNPM"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}>$ <span class="token function"${l}>pnpm</span> create quasar</code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"pnpm"),n(" create quasar")])]),a(o,{lang:"bash"})]}),_:1},u,s)),t(p(b,{class:"q-pa-none",name:"Bun"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}>$ bun create quasar</code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,"$ bun create quasar")]),a(o,{lang:"bash"})]}),_:1},u,s));else return[a(b,{class:"q-pa-none",name:"Yarn"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"yarn"),n(" create quasar")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"NPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"npm"),n(" init quasar")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"PNPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"pnpm"),n(" create quasar")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"Bun"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,"$ bun create quasar")]),a(o,{lang:"bash"})]),_:1})]}),_:1},d,e)),i(`<h3 id="scaffolding-from-a-custom-starter-kit" class="doc-heading doc-h3"${e}>Scaffolding from a custom starter kit `),i(p(g,{align:"top",color:"brand-primary",label:"legacy"},null,d,e)),i(`</h3><p${e}>Should you wish to create a Quasar project (app, AppExtension or UI kit) from <strong${e}>CUSTOM</strong> starter kits, please use the <code class="doc-token"${e}>@quasar/legacy-create</code> global installable CLI instead:</p>`),i(p(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:r((m,t,u,s)=>{if(t)t(p(b,{class:"q-pa-none",name:"Yarn"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}><span class="token comment"${l}># globally install the @quasar/legacy-create CLI</span>
$ <span class="token function"${l}>yarn</span> global <span class="token function"${l}>add</span> @quasar/legacy-create

<span class="token comment"${l}># then:</span>
$ quasar-legacy-create <span class="token operator"${l}>&lt;</span>folder_name<span class="token operator"${l}>&gt;</span> <span class="token operator"${l}>&lt;</span>address<span class="token operator"${l}>&gt;</span> <span class="token punctuation"${l}>[</span>--branch <span class="token operator"${l}>&lt;</span>branch_name<span class="token operator"${l}>&gt;</span><span class="token punctuation"${l}>]</span></code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"yarn"),n(" global "),a("span",{class:"token function"},"add"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]}),_:1},u,s)),t(p(b,{class:"q-pa-none",name:"NPM"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}><span class="token comment"${l}># globally install the @quasar/legacy-create CLI</span>
$ <span class="token function"${l}>npm</span> i <span class="token parameter variable"${l}>-g</span> @quasar/legacy-create

<span class="token comment"${l}># then:</span>
$ quasar-legacy-create <span class="token operator"${l}>&lt;</span>folder_name<span class="token operator"${l}>&gt;</span> <span class="token operator"${l}>&lt;</span>address<span class="token operator"${l}>&gt;</span> <span class="token punctuation"${l}>[</span>--branch <span class="token operator"${l}>&lt;</span>branch_name<span class="token operator"${l}>&gt;</span><span class="token punctuation"${l}>]</span></code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"npm"),n(" i "),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]}),_:1},u,s)),t(p(b,{class:"q-pa-none",name:"PNPM"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}><span class="token comment"${l}># globally install the @quasar/legacy-create CLI</span>
<span class="token comment"${l}># experimental support</span>
$ <span class="token function"${l}>pnpm</span> <span class="token function"${l}>add</span> <span class="token parameter variable"${l}>-g</span> @quasar/legacy-create

<span class="token comment"${l}># then:</span>
$ quasar-legacy-create <span class="token operator"${l}>&lt;</span>folder_name<span class="token operator"${l}>&gt;</span> <span class="token operator"${l}>&lt;</span>address<span class="token operator"${l}>&gt;</span> <span class="token punctuation"${l}>[</span>--branch <span class="token operator"${l}>&lt;</span>branch_name<span class="token operator"${l}>&gt;</span><span class="token punctuation"${l}>]</span></code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ `),a("span",{class:"token function"},"pnpm"),n(),a("span",{class:"token function"},"add"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]}),_:1},u,s)),t(p(b,{class:"q-pa-none",name:"Bun"},{default:r((v,$,f,l)=>{if($)$(`<pre class="doc-code"${l}><code${l}><span class="token comment"${l}># globally install the @quasar/legacy-create CLI</span>
<span class="token comment"${l}># experimental support</span>
$ bun <span class="token function"${l}>install</span> <span class="token parameter variable"${l}>-g</span> @quasar/legacy-create

<span class="token comment"${l}># then:</span>
$ quasar-legacy-create <span class="token operator"${l}>&lt;</span>folder_name<span class="token operator"${l}>&gt;</span> <span class="token operator"${l}>&lt;</span>address<span class="token operator"${l}>&gt;</span> <span class="token punctuation"${l}>[</span>--branch <span class="token operator"${l}>&lt;</span>branch_name<span class="token operator"${l}>&gt;</span><span class="token punctuation"${l}>]</span></code></pre>`),$(p(o,{lang:"bash"},null,f,l));else return[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ bun `),a("span",{class:"token function"},"install"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]}),_:1},u,s));else return[a(b,{class:"q-pa-none",name:"Yarn"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"yarn"),n(" global "),a("span",{class:"token function"},"add"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"NPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"npm"),n(" i "),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"PNPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ `),a("span",{class:"token function"},"pnpm"),n(),a("span",{class:"token function"},"add"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"Bun"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ bun `),a("span",{class:"token function"},"install"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1})]}),_:1},d,e)),i(`<p${e}>With a starter kit stored on your machine by providing a <strong${e}>local path</strong> to a folder: <code class="doc-token"${e}>quasar-legacy-create &lt;folder&gt; ./my-custom-starter-kit</code>.</p><p${e}>With a starter kit stored into any publicly accessible Git repository by providing a reference which follows this schema:</p><ul${e}><li${e}>GitHub - <code class="doc-token"${e}>github:owner/name</code> or simply <code class="doc-token"${e}>owner/name</code></li><li${e}>GitLab - <code class="doc-token"${e}>gitlab:owner/name</code></li><li${e}>Bitbucket - <code class="doc-token"${e}>bitbucket:owner/name</code></li></ul><p${e}><code class="doc-token"${e}>master</code> branch will be checked out by default, but you can specify the one you prefer via <code class="doc-token"${e}>--branch &lt;branch name&gt;</code> (eg. <code class="doc-token"${e}>quasar-legacy-create &lt;folder&gt; owner/name --branch my-branch</code>).</p><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>The preferred way to build reusable code and UI Components into Quasar ecosystem are App Extensions. Use a custom starter kit only if you really know what you’re doing and be aware that it will make more difficult for the Quasar team to provide you assistance.</p></div>`);else return[a("p",null,"Familiarize yourself with the list of available commands inside a Quasar project:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n(`$ quasar

  Example usage
    $ quasar `),a("span",{class:"token operator"},"<"),n("command"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("options"),a("span",{class:"token operator"},">"),n(`

  Help `),a("span",{class:"token keyword"},"for"),n(" a "),a("span",{class:"token builtin class-name"},"command"),n(`
    $ quasar `),a("span",{class:"token operator"},"<"),n("command"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token parameter variable"},"--help"),n(`
    $ quasar `),a("span",{class:"token operator"},"<"),n("command"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token parameter variable"},"-h"),n(`

  Options
    --version, `),a("span",{class:"token parameter variable"},"-v"),n(` Print Quasar App CLI version

  Commands
    dev, d        Start a dev server `),a("span",{class:"token keyword"},"for"),n(` your App
    build, b      Build your app `),a("span",{class:"token keyword"},"for"),n(` production
    clean, c      Clean all build artifacts
    new, n        Quickly scaffold page/layout/component/`),a("span",{class:"token punctuation"},".."),n(". vue "),a("span",{class:"token function"},"file"),n(`
    mode, m       Add/remove Quasar Modes `),a("span",{class:"token keyword"},"for"),n(` your App
    inspect       Inspect Vite/esbuild configs used under the hood
                    - keeps into account your quasar.config `),a("span",{class:"token function"},"file"),n(`
                      and your installed App Extensions
    ext, e        Manage Quasar App Extensions
    run, r        Run specific `),a("span",{class:"token builtin class-name"},"command"),n(` provided by an installed
                    Quasar App Extension
    describe      Describe a Quasar API `),a("span",{class:"token punctuation"},"("),n("component"),a("span",{class:"token punctuation"},")"),n(`
    info, i       Display info about your machine and your App
    help, h       Displays this message

  If the specified `),a("span",{class:"token builtin class-name"},"command"),n(" is not found, "),a("span",{class:"token keyword"},"then"),n(),a("span",{class:"token string"},'"quasar run"'),n(`
  will be executed with the provided arguments.

  Commands supplied by @quasar/cli global installation:

    upgrade       Check `),a("span",{class:"token punctuation"},"("),n("and optionally"),a("span",{class:"token punctuation"},")"),n(` upgrade Quasar packages
                    from a Quasar project folder
    serve         Create an ad-hoc server on App's distributables`)])]),a(o,{lang:"bash"})]),_:1}),a("p",null,"See help for any command:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar "),a("span",{class:"token punctuation"},"["),n("command name"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token parameter variable"},"--help")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"upgrade",class:"doc-heading doc-h2",onClick:m=>c(h)("upgrade")},"Upgrade",8,["onClick"]),a("p",null,"Check (and optionally) upgrade Quasar packages from a Quasar project folder:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# view all options:"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-h"),n(`

`),a("span",{class:"token comment"},"# checks for non-breaking change upgrades and displays them,"),n(`
`),a("span",{class:"token comment"},"# but will not carry out the install"),n(`
$ quasar upgrade

`),a("span",{class:"token comment"},"# checks for pre-releases (alpha/beta):"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-p"),n(`

`),a("span",{class:"token comment"},"# checks for major new releases (includes breaking changes):"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-m"),n(`

`),a("span",{class:"token comment"},"# use another npm registry url than what your machine is configured with:"),n(`
`),a("span",{class:"token comment"},"# (added in @quasar/cli v2.4)"),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-r"),n(` https://registry.npmjs.org/

`),a("span",{class:"token comment"},"# to perform the actual upgrade,"),n(`
`),a("span",{class:"token comment"},'# combine any of the params above and add "-i" (or "--install"):'),n(`
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-i")])]),a(o,{lang:"bash"})]),_:1}),a("div",{class:"doc-note doc-note--warning"},[a("p",{class:"doc-note__title"},"Note for code editor terminals"),a("p",null,[n("If you’re using a code editor terminal instead of the real one, you run "),a("code",{class:"doc-token"},"quasar upgrade"),n(" and get an error "),a("em",null,"Command not found"),n(" or "),a("em",null,"@quasar/cli"),n(" version appears to be "),a("em",null,"undefined"),n(", you will need to go to the settings of your code editor terminal and untick the option (or its equivalent) "),a("em",null,"Add ‘node_modules/.bin’ from the project root to %PATH%"),n(" then restart your code editor.")])]),a("h2",{id:"info",class:"doc-heading doc-h2",onClick:m=>c(h)("info")},"Info",8,["onClick"]),a("p",null,"The Quasar CLI is equipped with a stable combination of multiple NPM build packages (Vite, Vue, etc) which gets updated frequently after heavy testing."),a("p",null,"In order for you to see what versions of Node, Quasar CLI, Quasar, Vue (and many others) you are using, issue this command in a Quasar project folder:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,"$ quasar info")]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"dev",class:"doc-heading doc-h2",onClick:m=>c(h)("dev")},"Dev",8,["onClick"]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar dev "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Starts the app `),a("span",{class:"token keyword"},"in"),n(" development mode "),a("span",{class:"token punctuation"},"("),n(`hot-code reloading, error
    reporting, etc`),a("span",{class:"token punctuation"},")"),n(`

  Usage
    $ quasar dev
    $ quasar dev `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token operator"},"<"),n("port number"),a("span",{class:"token operator"},">"),n(`

    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

    `),a("span",{class:"token comment"},'# alias for "quasar dev -m cordova -T ios"'),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` ios

    `),a("span",{class:"token comment"},'# alias for "quasar dev -m cordova -T android"'),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` android

    `),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
    `),a("span",{class:"token comment"},'# underlying "cordova" or "electron" executables:'),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` electron -- --no-sandbox --disable-setuid-sandbox
    `),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
    $ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token string"},"'--'"),n(` --no-sandbox --disable-setuid-sandbox

  Options
    --mode, `),a("span",{class:"token parameter variable"},"-m"),n("       App mode "),a("span",{class:"token punctuation"},"["),n("spa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("pwa"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: spa"),a("span",{class:"token punctuation"},")"),n(`
    --port, `),a("span",{class:"token parameter variable"},"-p"),n("       A port number on "),a("span",{class:"token function"},"which"),n(` to start the application
    --hostname, `),a("span",{class:"token parameter variable"},"-H"),n("   A "),a("span",{class:"token function"},"hostname"),n(" to use "),a("span",{class:"token keyword"},"for"),n(` serving the application
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`       Displays this message

    Only `),a("span",{class:"token keyword"},"for"),n(` Cordova mode:
    --target, `),a("span",{class:"token parameter variable"},"-T"),n("     "),a("span",{class:"token punctuation"},"("),n("required"),a("span",{class:"token punctuation"},")"),n(` App target
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
    --emulator, `),a("span",{class:"token parameter variable"},"-e"),n("   "),a("span",{class:"token punctuation"},"("),n("optional"),a("span",{class:"token punctuation"},")"),n(` Emulator name
                        Examples: iPhone-7, iPhone-X
                        iPhone-X,com.apple.CoreSimulator.SimRuntime.iOS-12-2
    --ide, `),a("span",{class:"token parameter variable"},"-i"),n("        Open IDE "),a("span",{class:"token punctuation"},"("),n("Android Studio / XCode"),a("span",{class:"token punctuation"},")"),n(` instead of letting Cordova
                        booting up the emulator, `),a("span",{class:"token keyword"},"in"),n(),a("span",{class:"token function"},"which"),n(),a("span",{class:"token keyword"},"case"),n(" the "),a("span",{class:"token string"},'"--emulator"'),n(`
                        param will have no effect

    --devtools, `),a("span",{class:"token parameter variable"},"-d"),n(`   Open remote Vue Devtools

    Only `),a("span",{class:"token keyword"},"for"),n(` Capacitor mode:
    --target, `),a("span",{class:"token parameter variable"},"-T"),n("     "),a("span",{class:"token punctuation"},"("),n("required"),a("span",{class:"token punctuation"},")"),n(` App target
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a("p",null,"The Quasar development server allows you to develop your App by compiling and maintaining code in-memory. A web server will serve your App while offering hot-reload out of the box. Running in-memory offers faster rebuilds when you change your code."),a("blockquote",{class:"doc-note"},[a("p",null,"Hot Reload is much more than just refreshing your browser when code changes. It skips the refresh and updates your code on the fly, while maintaining your App’s state (like your Vue’s model data). Please note that there are cases when this is impossible, so the dev webserver will simply refresh your browser. (Always ensure you are running only one instance of Quasar CLI at a time, otherwise Hot-Reload and other stuff will break!)")]),a("p",null,"Based on what you want to develop, you can start the development server by using “quasar dev” command as follows:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# Developing a SPA"),n(`
$ quasar dev
`),a("span",{class:"token comment"},"# ...or"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` spa

`),a("span",{class:"token comment"},"# Developing for SSR"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

`),a("span",{class:"token comment"},"# Developing a PWA"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` pwa

`),a("span",{class:"token comment"},"# Developing a BEX for production"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` bex

`),a("span",{class:"token comment"},"# Developing a Mobile App (through Cordova)"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" cordova "),a("span",{class:"token parameter variable"},"-T"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
`),a("span",{class:"token comment"},"# or the short form:"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`

`),a("span",{class:"token comment"},"# Developing an Electron App"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` electron

`),a("span",{class:"token comment"},"# Developing a Browser Extension (BEX)"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` bex

`),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
`),a("span",{class:"token comment"},'# underlying "cordova" or "electron" executables:'),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(` electron -- --no-sandbox --disable-setuid-sandbox
`),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token string"},"'--'"),n(" --no-sandbox --disable-setuid-sandbox")])]),a(o,{lang:"bash"})]),_:1}),a("p",null,"If you wish to change the hostname or port serving your App you have 3 options:"),a("ul",null,[a("li",null,[n("Edit the ‘/quasar.config’ file:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token literal-property property"},"devServer"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"host"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'...'"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"port"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token operator"},"..."),n(`
`),a("span",{class:"token punctuation"},"}")])]),a(o)]),_:1})]),a("li",null,"Through ‘-H’ (hostname) and ‘-p’ (port) command options."),a("li",null,[n("If this is a one time thing, specify the hostname and/or port as an environment variable:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token assign-left variable"},"PORT"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"3000"),n(` quasar dev
$ `),a("span",{class:"token assign-left variable"},[a("span",{class:"token environment constant"},"HOSTNAME")]),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1.1"),n(".1.14 quasar dev")])]),a(o,{lang:"bash"})]),_:1})])]),a("p",null,"If there appears to be an issue with hot reload, you can try two fixes:"),a("ul",null,[a("li",null,[a("p",null,"Change the permissions for the project folder with"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token function"},"sudo"),n(),a("span",{class:"token function"},"chown"),n(),a("span",{class:"token parameter variable"},"-R"),n(" username: "),a("span",{class:"token builtin class-name"},".")])]),a(o,{lang:"bash"})]),_:1})]),a("li",null,[a("p",null,"or run the dev server with root privileges"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token function"},"sudo"),n(" quasar dev")])]),a(o,{lang:"bash"})]),_:1})])]),a("h2",{id:"build",class:"doc-heading doc-h2",onClick:m=>c(h)("build")},"Build",8,["onClick"]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar build "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Builds distributables of your app.

  Usage
    $ quasar build
    $ quasar build `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token operator"},"<"),n("port number"),a("span",{class:"token operator"},">"),n(`

    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

    `),a("span",{class:"token comment"},'# alias for "quasar build -m cordova -T ios"'),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` ios

    `),a("span",{class:"token comment"},'# alias for "quasar build -m cordova -T android"'),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` android

    `),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
    `),a("span",{class:"token comment"},'# underlying "cordova" executable:'),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
    `),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
    $ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`

  Options
    --mode, `),a("span",{class:"token parameter variable"},"-m"),n("      App mode "),a("span",{class:"token punctuation"},"["),n("spa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("pwa"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: spa"),a("span",{class:"token punctuation"},")"),n(`
    --target, `),a("span",{class:"token parameter variable"},"-T"),n(`    App target
                      - Cordova `),a("span",{class:"token punctuation"},"("),n("default: all installed"),a("span",{class:"token punctuation"},")"),n(`
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
                      - Capacitor
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
                      - Electron with default `),a("span",{class:"token string"},'"electron-packager"'),n(" bundler "),a("span",{class:"token punctuation"},"("),n("default: yours"),a("span",{class:"token punctuation"},")"),n(`
                        `),a("span",{class:"token punctuation"},"["),n("darwin"),a("span",{class:"token operator"},"|"),n("win32"),a("span",{class:"token operator"},"|"),n("linux"),a("span",{class:"token operator"},"|"),n("mas"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`
                      - Electron with `),a("span",{class:"token string"},'"electron-builder"'),n(" bundler "),a("span",{class:"token punctuation"},"("),n("default: yours"),a("span",{class:"token punctuation"},")"),n(`
                        `),a("span",{class:"token punctuation"},"["),n("darwin"),a("span",{class:"token operator"},"|"),n("mac"),a("span",{class:"token operator"},"|"),n("win32"),a("span",{class:"token operator"},"|"),n("win"),a("span",{class:"token operator"},"|"),n("linux"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`
    --publish, `),a("span",{class:"token parameter variable"},"-P"),n("   Also trigger publishing hooks "),a("span",{class:"token punctuation"},"("),n("if any are specified"),a("span",{class:"token punctuation"},")"),n(`
                      - Has special meaning when building with Electron mode and using
                        electron-builder as bundler
    --debug, `),a("span",{class:"token parameter variable"},"-d"),n("     Build "),a("span",{class:"token keyword"},"for"),n(` debugging purposes
    --skip-pkg, `),a("span",{class:"token parameter variable"},"-s"),n("  Build only UI "),a("span",{class:"token punctuation"},"("),n("skips creating Cordova/Capacitor/Electron executables"),a("span",{class:"token punctuation"},")"),n(`
                      - Cordova `),a("span",{class:"token punctuation"},"("),n("it only fills "),a("span",{class:"token keyword"},"in"),n(" /src-cordova/www folder with the UI code"),a("span",{class:"token punctuation"},")"),n(`
                      - Capacitor `),a("span",{class:"token punctuation"},"("),n("it only fills "),a("span",{class:"token keyword"},"in"),n(" /src-capacitor/www folder with the UI code"),a("span",{class:"token punctuation"},")"),n(`
                      - Electron `),a("span",{class:"token punctuation"},"("),n("it only creates the /dist/electron/UnPackaged folder"),a("span",{class:"token punctuation"},")"),n(`
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`      Displays this message

    ONLY `),a("span",{class:"token keyword"},"for"),n(` Cordova and Capacitor mode:
    --ide, `),a("span",{class:"token parameter variable"},"-i"),n("       Open IDE "),a("span",{class:"token punctuation"},"("),n("Android Studio / XCode"),a("span",{class:"token punctuation"},")"),n(` instead of finalizing with a
                    terminal/console-only build

    ONLY `),a("span",{class:"token keyword"},"for"),n(` Electron mode:
    --bundler, `),a("span",{class:"token parameter variable"},"-b"),n("   Bundler "),a("span",{class:"token punctuation"},"("),n("electron-packager or electron-builder"),a("span",{class:"token punctuation"},")"),n(`
                      `),a("span",{class:"token punctuation"},"["),n("packager"),a("span",{class:"token operator"},"|"),n("builder"),a("span",{class:"token punctuation"},"]"),n(`
    --arch, `),a("span",{class:"token parameter variable"},"-A"),n("      App architecture "),a("span",{class:"token punctuation"},"("),n("default: yours"),a("span",{class:"token punctuation"},")"),n(`
                      - with default `),a("span",{class:"token string"},'"electron-packager"'),n(` bundler:
                          `),a("span",{class:"token punctuation"},"["),n("ia32"),a("span",{class:"token operator"},"|"),n("x64"),a("span",{class:"token operator"},"|"),n("armv7l"),a("span",{class:"token operator"},"|"),n("arm64"),a("span",{class:"token operator"},"|"),n("mips64el"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`
                      - with `),a("span",{class:"token string"},'"electron-builder"'),n(` bundler:
                          `),a("span",{class:"token punctuation"},"["),n("ia32"),a("span",{class:"token operator"},"|"),n("x64"),a("span",{class:"token operator"},"|"),n("armv7l"),a("span",{class:"token operator"},"|"),n("arm64"),a("span",{class:"token operator"},"|"),n("all"),a("span",{class:"token punctuation"},"]"),n(`

    ONLY `),a("span",{class:"token keyword"},"for"),n(" electron-builder "),a("span",{class:"token punctuation"},"("),n("when using "),a("span",{class:"token string"},'"publish"'),n(" parameter"),a("span",{class:"token punctuation"},")"),n(`:
    --publish, `),a("span",{class:"token parameter variable"},"-P"),n("  Publish options "),a("span",{class:"token punctuation"},"["),n("onTag"),a("span",{class:"token operator"},"|"),n("onTagOrDraft"),a("span",{class:"token operator"},"|"),n("always"),a("span",{class:"token operator"},"|"),n("never"),a("span",{class:"token punctuation"},"]"),n(`
                     - see https://www.electron.build/configuration/publish`)])]),a(o,{lang:"bash"})]),_:1}),a("p",null,"The Quasar CLI can pack everything together and optimize your App for production. It minifies source code, extracts vendor components, leverages browser cache and much more."),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# Build a SPA for production"),n(`
$ quasar build
`),a("span",{class:"token comment"},"# ...or"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` spa

`),a("span",{class:"token comment"},"# Build a SSR for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` ssr

`),a("span",{class:"token comment"},"# Build a PWA for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` pwa

`),a("span",{class:"token comment"},"# Build a BEX for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` bex

`),a("span",{class:"token comment"},"# Build a Mobile App (through Cordova)"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" cordova "),a("span",{class:"token parameter variable"},"-T"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`
`),a("span",{class:"token comment"},"# or the short form:"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]"),n(`

`),a("span",{class:"token comment"},"# Build an Electron App for production"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(` electron

`),a("span",{class:"token comment"},"# passing extra parameters and/or options to"),n(`
`),a("span",{class:"token comment"},'# underlying "cordova" executable:'),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios -- some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`
`),a("span",{class:"token comment"},"# when on Windows and using Powershell:"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-m"),n(" ios "),a("span",{class:"token string"},"'--'"),n(" some params "),a("span",{class:"token parameter variable"},"--and"),n(" options "),a("span",{class:"token parameter variable"},"--here"),n(`

`),a("span",{class:"token comment"},"# Create a production build with ability to debug it"),n(`
`),a("span",{class:"token comment"},"# (has source-maps and code is NOT minified)"),n(`
$ quasar build `),a("span",{class:"token parameter variable"},"-d"),n(),a("span",{class:"token punctuation"},"["),n("-m "),a("span",{class:"token operator"},"<"),n("mode"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"clean",class:"doc-heading doc-h2",onClick:m=>c(h)("clean")},"Clean",8,["onClick"]),a("p",null,"Cleans up all the build assets:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,"$ quasar clean")]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"new",class:"doc-heading doc-h2",onClick:m=>c(h)("new")},"New",8,["onClick"]),a("p",null,"Generates Components, Pages, Layouts, Vuex Store."),a("div",{class:"doc-note doc-note--tip"},[a("p",{class:"doc-note__title"},"TIP"),a("p",null,"This command is simply a helper in order to quickly scaffold a page/layout/component/vuex store module. You are not required to use it, but can help you when you don’t know how to start.")]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar new "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Quickly scaffold files.

  Usage
    $ quasar new `),a("span",{class:"token operator"},"<"),n("p"),a("span",{class:"token operator"},"|"),n("page"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f "),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("page_file_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("l"),a("span",{class:"token operator"},"|"),n("layout"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f "),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("layout_file_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("c"),a("span",{class:"token operator"},"|"),n("component"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f "),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("component_file_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("b"),a("span",{class:"token operator"},"|"),n("boot"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f ts"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("boot_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new `),a("span",{class:"token operator"},"<"),n("s"),a("span",{class:"token operator"},"|"),n("store"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("-f ts"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("store_module_name"),a("span",{class:"token operator"},">"),n(`
    $ quasar new ssrmiddleware `),a("span",{class:"token punctuation"},"["),n("-f ts"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"<"),n("middleware_name"),a("span",{class:"token operator"},">"),n(`

  Examples
    `),a("span",{class:"token comment"},"# Create src/pages/MyNewPage.vue:"),n(`
    $ quasar new p MyNewPage

    `),a("span",{class:"token comment"},"# Create src/pages/MyNewPage.vue and src/pages/OtherPage.vue:"),n(`
    $ quasar new p MyNewPage OtherPage

    `),a("span",{class:"token comment"},"# Create src/layouts/shop/Checkout.vue"),n(`
    $ quasar new layout shop/Checkout.vue

    `),a("span",{class:"token comment"},"# Create src/layouts/shop/Checkout.vue with TypeScript options API"),n(`
    $ quasar new layout `),a("span",{class:"token parameter variable"},"-f"),n(` ts-options shop/Checkout.vue

    `),a("span",{class:"token comment"},"# Create a store with TypeScript (-f ts is optional if tsconfig.json is present)"),n(`
    $ quasar new store `),a("span",{class:"token parameter variable"},"-f"),n(` ts myStore

  Options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`            Displays this message

    `),a("span",{class:"token parameter variable"},"--format"),n(),a("span",{class:"token parameter variable"},"-f"),n(),a("span",{class:"token operator"},"<"),n("option"),a("span",{class:"token operator"},">"),n("  "),a("span",{class:"token punctuation"},"("),n("optional"),a("span",{class:"token punctuation"},")"),n(" Use a supported "),a("span",{class:"token function"},"format"),n(),a("span",{class:"token keyword"},"for"),n(` the template
                          Possible values:
                             * default - Default JS template
                             * ts-composition - TS composition API `),a("span",{class:"token punctuation"},"("),n("default "),a("span",{class:"token keyword"},"if"),n(" using TS"),a("span",{class:"token punctuation"},")"),n(`
                             * ts-composition-setup - TS composition API with `),a("span",{class:"token operator"},"<"),n("script setup"),a("span",{class:"token operator"},">"),n(`
                             * ts-options - TS options API
                             * ts-class - `),a("span",{class:"token punctuation"},"["),n("DEPRECATED"),a("span",{class:"token punctuation"},"]"),n(` TS class style syntax
                             * ts - Plain TS template `),a("span",{class:"token punctuation"},"("),n("for boot, store, and ssrmiddleware files"),a("span",{class:"token punctuation"},")")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"mode",class:"doc-heading doc-h2",onClick:m=>c(h)("mode")},"Mode",8,["onClick"]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar mode "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Add/Remove support `),a("span",{class:"token keyword"},"for"),n(` PWA / BEX / Cordova / Capacitor / Electron modes.

  Usage
    $ quasar mode `),a("span",{class:"token punctuation"},"["),n("add"),a("span",{class:"token operator"},"|"),n("remove"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"["),n("pwa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"["),n("--yes"),a("span",{class:"token punctuation"},"]"),n(`

    `),a("span",{class:"token comment"},"# determine what modes are currently installed:"),n(`
    $ quasar mode

  Options
    --yes, `),a("span",{class:"token parameter variable"},"-y"),n("     Skips the "),a("span",{class:"token string"},'"Are you sure?"'),n(` question
                  when removing a Quasar mode
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("    Displays this message")])]),a(o,{lang:"bash"})]),_:1}),a("p",null,"When you initialize a project with the CLI, you can build SPA (Single Page Website/Application), SSR (Server-side Render Website/Application with optional PWA client takeover), PWA (Progressive Web App), Mobile App (through Cordova), and/or Electron Apps. When you develop for SSR, PWA, Cordova or Electron, you need these modes installed. If you issue “quasar dev” or “quasar build” they will automatically be installed."),a("p",null,"These modes will add a “src-*” folder into your project with very specific code for it:"),a(P,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:r(()=>[a("thead",null,[a("tr",null,[a("th",{class:"text-left"},"Folder"),a("th",{class:"text-left"},"Mode"),a("th",{class:"text-left"},"Description")])]),a("tbody",null,[a("tr",null,[a("td",null,"src-ssr"),a("td",null,"ssr"),a("td",null,"Contains the production Node server files.")]),a("tr",null,[a("td",null,"src-pwa"),a("td",null,"pwa"),a("td",null,"Contains the Service Worker file that you can tweak.")]),a("tr",null,[a("td",null,"src-cordova"),a("td",null,"cordova"),a("td",null,"Is a Cordova project folder that will be using your ‘src’ as content. Tweak Cordova config, add/remove platforms, splash screens, Cordova plugins and so on from this folder. Do NOT touch “src-cordova/www” folder though as it will get overwritten at every build.")]),a("tr",null,[a("td",null,"src-electron"),a("td",null,"electron"),a("td",null,"Has code for the main Electron thread. The renderer thread will be your app in ‘src’.")]),a("tr",null,[a("td",null,"src-bex"),a("td",null,"bex"),a("td",null,"Contains the specific files for Browser Extensions mode.")])])]),_:1}),a("p",null,[n("If for some reason you decide you don’t need a mode, you can remove it. "),a("strong",null,"This will permanently delete"),n(" the respective “src-*” folder.")]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,"$ quasar mode remove pwa")]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"describe",class:"doc-heading doc-h2",onClick:m=>c(h)("describe")},"Describe",8,["onClick"]),a("p",null,[n("This command is useful to describe the API of any Quasar components/directives/plugins that your project is using. "),a("strong",null,"It is specific to your Quasar version installed in your project folder.")]),a("p",null,[n("Examples: "),a("code",{class:"doc-token"},"$ quasar describe QIcon"),n(", "),a("code",{class:"doc-token"},"$ quasar describe TouchPan"),n(", "),a("code",{class:"doc-token"},"$ quasar describe Cookies"),n(".")]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar describe "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Describes a component API `),a("span",{class:"token keyword"},"for"),n(` project's Quasar version being used

  Usage
    $ quasar describe `),a("span",{class:"token operator"},"<"),n("component/directive/Quasar plugin"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# display everything:"),n(`
    $ quasar describe QIcon

    `),a("span",{class:"token comment"},"# displaying only props:"),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-p"),n(`
    `),a("span",{class:"token comment"},"# displaying props and methods only:"),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token parameter variable"},"-m"),n(`
    `),a("span",{class:"token comment"},'# filtering by "si":'),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-f"),n(` si
    `),a("span",{class:"token comment"},'# filtering only props by "co":'),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token parameter variable"},"-f"),n(` co

    `),a("span",{class:"token comment"},"# Open docs URL:"),n(`
    $ quasar describe QIcon `),a("span",{class:"token parameter variable"},"-d"),n(`

  Options
    --filter, `),a("span",{class:"token parameter variable"},"-f"),n(),a("span",{class:"token operator"},"<"),n("filter"),a("span",{class:"token operator"},">"),n(` Filters the API
    --props, `),a("span",{class:"token parameter variable"},"-p"),n(`           Displays the API props
    --slots, `),a("span",{class:"token parameter variable"},"-s"),n(`           Displays the API slots
    --methods, `),a("span",{class:"token parameter variable"},"-m"),n(`         Displays the API methods
    --events, `),a("span",{class:"token parameter variable"},"-e"),n(`          Displays the API events
    --value, `),a("span",{class:"token parameter variable"},"-v"),n(`           Displays the API value
    --arg, `),a("span",{class:"token parameter variable"},"-a"),n(`             Displays the API arg
    --modifiers, `),a("span",{class:"token parameter variable"},"-M"),n(`       Displays the API modifiers
    --injection, `),a("span",{class:"token parameter variable"},"-i"),n(`       Displays the API injection
    --quasar, `),a("span",{class:"token parameter variable"},"-q"),n(`          Displays the API quasar conf options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("            Displays this message")])]),a(o,{lang:"bash"})]),_:1}),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n(`$ quasar describe QIcon

 Describing QIcon component API
 Description is based on your project's Quasar version

 Properties

   name `),a("span",{class:"token punctuation"},"("),n("String"),a("span",{class:"token punctuation"},")"),n(`
     Description: Name of the icon, following Quasar convention
     Examples:
       map
       ion-add

   color `),a("span",{class:"token punctuation"},"("),n("String"),a("span",{class:"token punctuation"},")"),n(`
     Description: Color name `),a("span",{class:"token keyword"},"for"),n(` component from the Quasar Color Palette
     Examples:
       primary
       teal-10

   size `),a("span",{class:"token punctuation"},"("),n("String"),a("span",{class:"token punctuation"},")"),n(`
     Description: Size `),a("span",{class:"token keyword"},"in"),n(` CSS units, including unit name
     Examples:
       16px
       2rem

   left `),a("span",{class:"token punctuation"},"("),n("Boolean"),a("span",{class:"token punctuation"},")"),n(`
     Description: Apply a standard margin on the left side. Useful `),a("span",{class:"token keyword"},"if"),n(` icon is on the right side of something.

   right `),a("span",{class:"token punctuation"},"("),n("Boolean"),a("span",{class:"token punctuation"},")"),n(`
     Description: Apply a standard margin on the right side. Useful `),a("span",{class:"token keyword"},"if"),n(` icon is on the left side of something.

 Slots

   default
     Suggestions: QTooltip or QMenu

 Scoped Slots

   *No scoped slots*

 Events

   *No events*

 Methods

   *No methods*`)])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"inspect",class:"doc-heading doc-h2",onClick:m=>c(h)("inspect")},"Inspect",8,["onClick"]),a("p",null,"This command can be used to inspect the Vite config generated by Quasar CLI."),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar inspect "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Inspect Quasar generated Vite config

  Usage
    $ quasar inspect
    $ quasar inspect `),a("span",{class:"token parameter variable"},"-c"),n(` build
    $ quasar inspect `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token string"},"'build.outDir'"),n(`

  Options
    --cmd, `),a("span",{class:"token parameter variable"},"-c"),n("        Quasar "),a("span",{class:"token builtin class-name"},"command"),n(),a("span",{class:"token punctuation"},"["),n("dev"),a("span",{class:"token operator"},"|"),n("build"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: dev"),a("span",{class:"token punctuation"},")"),n(`
    --mode, `),a("span",{class:"token parameter variable"},"-m"),n("       App mode "),a("span",{class:"token punctuation"},"["),n("spa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("pwa"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"("),n("default: spa"),a("span",{class:"token punctuation"},")"),n(`
    --depth, `),a("span",{class:"token parameter variable"},"-d"),n("      Number of levels deep "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),n(`
    --path, `),a("span",{class:"token parameter variable"},"-p"),n("       Path of config "),a("span",{class:"token keyword"},"in"),n(` dot notation
                        Examples:
                          `),a("span",{class:"token parameter variable"},"-p"),n(` module.rules
                          `),a("span",{class:"token parameter variable"},"-p"),n(` plugins
    --thread, `),a("span",{class:"token parameter variable"},"-t"),n(`     Display only one specific app mode config thread
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"ext",class:"doc-heading doc-h2",onClick:m=>c(h)("ext")},"Ext",8,["onClick"]),a("p",null,[n("This command is used to manage "),a(y,{to:"/app-extensions/introduction"},{default:r(()=>[n("App Extensions")]),_:1}),n(".")]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar ext "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Manage Quasar App Extensions

  Usage
    `),a("span",{class:"token comment"},"# display list of installed extensions"),n(`
    $ quasar ext

    `),a("span",{class:"token comment"},"# Add Quasar App Extension"),n(`
    $ quasar ext `),a("span",{class:"token function"},"add"),n(),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# Remove Quasar App Extension"),n(`
    $ quasar ext remove `),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# Add Quasar App Extension, but"),n(`
    `),a("span",{class:"token comment"},"# skip installing the npm package"),n(`
    `),a("span",{class:"token comment"},"# (assumes it's already installed)"),n(`
    $ quasar ext invoke `),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

    `),a("span",{class:"token comment"},"# Remove Quasar App Extension, but"),n(`
    `),a("span",{class:"token comment"},"# skip uninstalling the npm package"),n(`
    $ quasar ext uninvoke `),a("span",{class:"token operator"},"<"),n("ext-id"),a("span",{class:"token operator"},">"),n(`

  Options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"run",class:"doc-heading doc-h2",onClick:m=>c(h)("run")},"Run",8,["onClick"]),a("p",null,[n("This command is used to run commands supplied by the "),a(y,{to:"/app-extensions/introduction"},{default:r(()=>[n("App Extensions")]),_:1}),n(" that you’ve installed into your project folder.")]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar run "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Run app extension provided commands

  Usage
    $ quasar run `),a("span",{class:"token operator"},"<"),n("extension-id"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("cmd"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("args, params"),a("span",{class:"token punctuation"},"]"),n(`
    $ quasar `),a("span",{class:"token operator"},"<"),n("extension-id"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("cmd"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("args, params"),a("span",{class:"token punctuation"},"]"),n(`

    $ quasar run iconify create pic `),a("span",{class:"token parameter variable"},"-s"),n(),a("span",{class:"token parameter variable"},"--mark"),n(` some_file
    $ quasar iconify create pic `),a("span",{class:"token parameter variable"},"-s"),n(),a("span",{class:"token parameter variable"},"--mark"),n(` some_file
        `),a("span",{class:"token comment"},'# Note: "iconify" is an example and not a real extension.'),n(`
        `),a("span",{class:"token comment"},'# Looks for installed extension called "iconify"'),n(`
        `),a("span",{class:"token comment"},"# (quasar-app-extension-iconify extension package)"),n(`
        `),a("span",{class:"token comment"},'# and runs its custom defined "create" command'),n(`
        `),a("span",{class:"token comment"},'# with "pic" argument and "-s --mark some_file" params'),n(`

  Options
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"serve",class:"doc-heading doc-h2",onClick:m=>c(h)("serve")},"Serve",8,["onClick"]),a("p",null,[n("This command can be used in production too and it is being supplied by the global installation of "),a("code",{class:"doc-token"},"@quasar/cli"),n(" package.")]),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar serve "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Start a HTTP`),a("span",{class:"token punctuation"},"("),n("S"),a("span",{class:"token punctuation"},")"),n(` server on a folder.

  Usage
    $ quasar serve `),a("span",{class:"token punctuation"},"["),n("path"),a("span",{class:"token punctuation"},"]"),n(`
    $ quasar serve `),a("span",{class:"token builtin class-name"},"."),n(),a("span",{class:"token comment"},"# serve current folder"),n(`

    If you serve a SSR folder built with the CLI `),a("span",{class:"token keyword"},"then"),n(`
    control is yielded to /index.js and params have no effect.

  Options
    --port, `),a("span",{class:"token parameter variable"},"-p"),n("              Port to use "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"4000"),a("span",{class:"token punctuation"},")"),n(`
    --hostname, `),a("span",{class:"token parameter variable"},"-H"),n("          Address to use "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"0.0"),n(".0.0"),a("span",{class:"token punctuation"},")"),n(`
    --gzip, `),a("span",{class:"token parameter variable"},"-g"),n("              Compress content "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),n(`
    --silent, `),a("span",{class:"token parameter variable"},"-s"),n(`            Suppress log message
    `),a("span",{class:"token parameter variable"},"--colors"),n("                Log messages with colors "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),n(`
    --open, `),a("span",{class:"token parameter variable"},"-o"),n(`              Open browser window after starting
    --cache, `),a("span",{class:"token parameter variable"},"-c"),n(),a("span",{class:"token operator"},"<"),n("number"),a("span",{class:"token operator"},">"),n("    Cache "),a("span",{class:"token function"},"time"),n(),a("span",{class:"token punctuation"},"("),n("max-age"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token keyword"},"in"),n(" seconds"),a("span",{class:"token punctuation"},";"),n(`
                            Does not apply to /service-worker.js
                            `),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"86400"),n(" - "),a("span",{class:"token number"},"24"),n(" hours"),a("span",{class:"token punctuation"},")"),n(`
    --micro, `),a("span",{class:"token parameter variable"},"-m"),n(),a("span",{class:"token operator"},"<"),n("seconds"),a("span",{class:"token operator"},">"),n("   Use micro-cache "),a("span",{class:"token punctuation"},"("),n("default: "),a("span",{class:"token number"},"1"),n(" second"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token parameter variable"},"--history"),n("               Use "),a("span",{class:"token function"},"history"),n(" api fallback"),a("span",{class:"token punctuation"},";"),n(`
                              All requests fallback to /index.html,
                              unless using `),a("span",{class:"token string"},'"--index"'),n(` parameter
    --index, `),a("span",{class:"token parameter variable"},"-i"),n(),a("span",{class:"token operator"},"<"),n("file"),a("span",{class:"token operator"},">"),n("      History mode "),a("span",{class:"token punctuation"},"("),n("only"),a("span",{class:"token operator"},"!"),a("span",{class:"token punctuation"},")"),n(` index url path
                              `),a("span",{class:"token punctuation"},"("),n("default: index.html"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token parameter variable"},"--https"),n(`                 Enable HTTPS
    --cert, `),a("span",{class:"token parameter variable"},"-C"),n(),a("span",{class:"token punctuation"},"["),n("path"),a("span",{class:"token punctuation"},"]"),n("       Path to SSL cert "),a("span",{class:"token function"},"file"),n(),a("span",{class:"token punctuation"},"("),n("Optional"),a("span",{class:"token punctuation"},")"),n(`
    --key, `),a("span",{class:"token parameter variable"},"-K"),n(),a("span",{class:"token punctuation"},"["),n("path"),a("span",{class:"token punctuation"},"]"),n("        Path to SSL key "),a("span",{class:"token function"},"file"),n(),a("span",{class:"token punctuation"},"("),n("Optional"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token parameter variable"},"--proxy"),n(),a("span",{class:"token operator"},"<"),n("file.mjs"),a("span",{class:"token operator"},">"),n("      Proxy specific requests defined "),a("span",{class:"token keyword"},"in"),n(),a("span",{class:"token function"},"file"),a("span",{class:"token punctuation"},";"),n(`
                            File must `),a("span",{class:"token builtin class-name"},"export"),n(" Array "),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(" path, rule "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
                            See example below. `),a("span",{class:"token string"},'"rule"'),n(` is defined at:
                            https://github.com/chimurai/http-proxy-middleware
    `),a("span",{class:"token parameter variable"},"--cors"),n("                  Enable CORS "),a("span",{class:"token keyword"},"for"),n(` all requests
    --help, `),a("span",{class:"token parameter variable"},"-h"),n(`              Displays this message

  Proxy `),a("span",{class:"token function"},"file"),n(` example
    `),a("span",{class:"token builtin class-name"},"export"),n(" default "),a("span",{class:"token punctuation"},"["),n(`
      `),a("span",{class:"token punctuation"},"{"),n(`
        path: `),a("span",{class:"token string"},"'/api'"),n(`,
        rule: `),a("span",{class:"token punctuation"},"{"),n(" target: "),a("span",{class:"token string"},"'http://www.example.org'"),n(),a("span",{class:"token punctuation"},"}"),n(`
      `),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token punctuation"},"]"),n(`
    --`),a("span",{class:"token operator"},">"),n(" will be transformed into app.use"),a("span",{class:"token punctuation"},"("),n("path, httpProxyMiddleware"),a("span",{class:"token punctuation"},"("),n("rule"),a("span",{class:"token punctuation"},"))")])]),a(o,{lang:"bash"})]),_:1}),a("h3",{id:"custom-node-server",class:"doc-heading doc-h3",onClick:m=>c(h)("custom-node-server")},"Custom Node server",8,["onClick"]),a("p",null,"When building a SPA or PWA, the distributable folder can be served by any static webserver. To test it out (assuming you don’t have a specific publicPath or not using Vue Router “history” mode), you can use the “http-server” npm package."),a("p",null,"Or you can build your own server. Here are some examples:"),a(c(k),{title:"When using default Vue Router 'hash' mode"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(`
  express `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'express'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  serveStatic `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'serve-static'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  port `),a("span",{class:"token operator"},"="),n(" process"),a("span",{class:"token punctuation"},"."),n("env"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"PORT"),n(),a("span",{class:"token operator"},"||"),n(),a("span",{class:"token number"},"5000"),n(`

`),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"express"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(`

app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"serveStatic"),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"..."),n("path"),a("span",{class:"token operator"},"-"),n("to"),a("span",{class:"token operator"},"-"),n("dist"),a("span",{class:"token operator"},"..."),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},")")])]),a(o)]),_:1}),a(c(k),{title:"When using Vue Router 'history' mode"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(`
  express `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'express'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  serveStatic `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'serve-static'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  history `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'connect-history-api-fallback'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  port `),a("span",{class:"token operator"},"="),n(" process"),a("span",{class:"token punctuation"},"."),n("env"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"PORT"),n(),a("span",{class:"token operator"},"||"),n(),a("span",{class:"token number"},"5000"),n(`

`),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"express"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(`

app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"history"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"serveStatic"),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"..."),n("path"),a("span",{class:"token operator"},"-"),n("to"),a("span",{class:"token operator"},"-"),n("dist"),a("span",{class:"token operator"},"..."),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},")")])]),a(o)]),_:1}),a("p",null,"If you need URL rewrites of API, or simply put you want to proxy your API requests, then you can use “http-proxy-middleware” package:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"// add this to one of the two previous examples:"),n(`
`),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"{"),n(" createProxyMiddleware "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'http-proxy-middleware'"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token comment"},"// ..."),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'/api'"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token function"},"createProxyMiddleware"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"target"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"http://my-api.com:5050"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"pathRewrite"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string-property property"},'"^/api"'),n(),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token comment"},"// then app.listen(...)")])]),a(o)]),_:1}),a("p",null,"Finally, run one of these files:"),a(c(k),null,{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"node"),n(" my-server.js")])]),a(o,{lang:"bash"})]),_:1}),a("h2",{id:"create",class:"doc-heading doc-h2",onClick:m=>c(h)("create")},[n("Create "),a(g,{align:"top",color:"brand-primary",label:"legacy"})],8,["onClick"]),a("h3",{id:"scaffolding-a-quasar-project-folder",class:"doc-heading doc-h3",onClick:m=>c(h)("scaffolding-a-quasar-project-folder")},"Scaffolding a Quasar project folder",8,["onClick"]),a("p",null,[a("code",{class:"doc-token"},"quasar create"),n(" is a legacy command and is not recommended for use except for custom starter kits. You should use "),a("code",{class:"doc-token"},"create-quasar"),n(" instead:")]),a(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:r(()=>[a(b,{class:"q-pa-none",name:"Yarn"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"yarn"),n(" create quasar")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"NPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"npm"),n(" init quasar")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"PNPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"pnpm"),n(" create quasar")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"Bun"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,"$ bun create quasar")]),a(o,{lang:"bash"})]),_:1})]),_:1}),a("h3",{id:"scaffolding-from-a-custom-starter-kit",class:"doc-heading doc-h3",onClick:m=>c(h)("scaffolding-from-a-custom-starter-kit")},[n("Scaffolding from a custom starter kit "),a(g,{align:"top",color:"brand-primary",label:"legacy"})],8,["onClick"]),a("p",null,[n("Should you wish to create a Quasar project (app, AppExtension or UI kit) from "),a("strong",null,"CUSTOM"),n(" starter kits, please use the "),a("code",{class:"doc-token"},"@quasar/legacy-create"),n(" global installable CLI instead:")]),a(c(k),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:r(()=>[a(b,{class:"q-pa-none",name:"Yarn"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"yarn"),n(" global "),a("span",{class:"token function"},"add"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"NPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"npm"),n(" i "),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"PNPM"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ `),a("span",{class:"token function"},"pnpm"),n(),a("span",{class:"token function"},"add"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1}),a(b,{class:"q-pa-none",name:"Bun"},{default:r(()=>[a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ bun `),a("span",{class:"token function"},"install"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])]),a(o,{lang:"bash"})]),_:1})]),_:1}),a("p",null,[n("With a starter kit stored on your machine by providing a "),a("strong",null,"local path"),n(" to a folder: "),a("code",{class:"doc-token"},"quasar-legacy-create <folder> ./my-custom-starter-kit"),n(".")]),a("p",null,"With a starter kit stored into any publicly accessible Git repository by providing a reference which follows this schema:"),a("ul",null,[a("li",null,[n("GitHub - "),a("code",{class:"doc-token"},"github:owner/name"),n(" or simply "),a("code",{class:"doc-token"},"owner/name")]),a("li",null,[n("GitLab - "),a("code",{class:"doc-token"},"gitlab:owner/name")]),a("li",null,[n("Bitbucket - "),a("code",{class:"doc-token"},"bitbucket:owner/name")])]),a("p",null,[a("code",{class:"doc-token"},"master"),n(" branch will be checked out by default, but you can specify the one you prefer via "),a("code",{class:"doc-token"},"--branch <branch name>"),n(" (eg. "),a("code",{class:"doc-token"},"quasar-legacy-create <folder> owner/name --branch my-branch"),n(").")]),a("div",{class:"doc-note doc-note--warning"},[a("p",{class:"doc-note__title"},"WARNING"),a("p",null,"The preferred way to build reusable code and UI Components into Quasar ecosystem are App Extensions. Use a custom starter kit only if you really know what you’re doing and be aware that it will make more difficult for the Quasar team to provide you assistance.")])]}),_:1},E))}}},S=A.setup;A.setup=(C,q)=>{const w=O();return(w.modules||(w.modules=new Set)).add("src/pages/quasar-cli-vite/commands-list.md"),S?S(C,q):void 0};const Z=M(A,[["__file","commands-list.md"]]);export{Z as default};
