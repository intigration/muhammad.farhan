import{b as m,d as h,w as o,e as s,f as e,h as a,i as n,l as b,j as u,k as i}from"./vendor.js";import{c as p}from"./_examples_frameless-electron-window.js";import{D as f,a as d}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as t}from"./CopyButton.js";import{_ as v}from"./index.js";const g=a("p",null,"Familiarize yourself with the list of available commands inside a Quasar project:",-1),y=a("pre",{class:"doc-code"},[a("code",null,[n(`$ quasar

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
    serve         Create an ad-hoc server on App's distributables`)])],-1),w=a("p",null,"See help for any command:",-1),_=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar "),a("span",{class:"token punctuation"},"["),n("command name"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token parameter variable"},"--help")])],-1),q=a("p",null,"Check (and optionally) upgrade Quasar packages from a Quasar project folder:",-1),$=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# view all options:"),n(`
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
$ quasar upgrade `),a("span",{class:"token parameter variable"},"-i")])],-1),x=a("div",{class:"doc-note doc-note--warning"},[a("p",{class:"doc-note__title"},"Note for code editor terminals"),a("p",null,[n("If you’re using a code editor terminal instead of the real one, you run "),a("code",{class:"doc-token"},"quasar upgrade"),n(" and get an error "),a("em",null,"Command not found"),n(" or "),a("em",null,"@quasar/cli"),n(" version appears to be "),a("em",null,"undefined"),n(", you will need to go to the settings of your code editor terminal and untick the option (or its equivalent) "),a("em",null,"Add ‘node_modules/.bin’ from the project root to %PATH%"),n(" then restart your code editor.")])],-1),C=a("p",null,"The Quasar CLI is equipped with a stable combination of multiple NPM build packages (Vite, Vue, etc) which gets updated frequently after heavy testing.",-1),A=a("p",null,"In order for you to see what versions of Node, Quasar CLI, Quasar, Vue (and many others) you are using, issue this command in a Quasar project folder:",-1),P=a("pre",{class:"doc-code"},[a("code",null,"$ quasar info")],-1),I=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar dev "),a("span",{class:"token parameter variable"},"-h"),n(`

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
                        `),a("span",{class:"token punctuation"},"["),n("android"),a("span",{class:"token operator"},"|"),n("ios"),a("span",{class:"token punctuation"},"]")])],-1),S=a("p",null,"The Quasar development server allows you to develop your App by compiling and maintaining code in-memory. A web server will serve your App while offering hot-reload out of the box. Running in-memory offers faster rebuilds when you change your code.",-1),D=a("blockquote",{class:"doc-note"},[a("p",null,"Hot Reload is much more than just refreshing your browser when code changes. It skips the refresh and updates your code on the fly, while maintaining your App’s state (like your Vue’s model data). Please note that there are cases when this is impossible, so the dev webserver will simply refresh your browser. (Always ensure you are running only one instance of Quasar CLI at a time, otherwise Hot-Reload and other stuff will break!)")],-1),Q=a("p",null,"Based on what you want to develop, you can start the development server by using “quasar dev” command as follows:",-1),T=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# Developing a SPA"),n(`
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
$ quasar dev `),a("span",{class:"token parameter variable"},"-m"),n(" electron "),a("span",{class:"token string"},"'--'"),n(" --no-sandbox --disable-setuid-sandbox")])],-1),E=a("p",null,"If you wish to change the hostname or port serving your App you have 3 options:",-1),N=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token literal-property property"},"devServer"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"host"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'...'"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"port"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token operator"},"..."),n(`
`),a("span",{class:"token punctuation"},"}")])],-1),O=a("li",null,"Through ‘-H’ (hostname) and ‘-p’ (port) command options.",-1),B=a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token assign-left variable"},"PORT"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"3000"),n(` quasar dev
$ `),a("span",{class:"token assign-left variable"},[a("span",{class:"token environment constant"},"HOSTNAME")]),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1.1"),n(".1.14 quasar dev")])],-1),j=a("p",null,"If there appears to be an issue with hot reload, you can try two fixes:",-1),M=a("p",null,"Change the permissions for the project folder with",-1),R=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token function"},"sudo"),n(),a("span",{class:"token function"},"chown"),n(),a("span",{class:"token parameter variable"},"-R"),n(" username: "),a("span",{class:"token builtin class-name"},".")])],-1),L=a("p",null,"or run the dev server with root privileges",-1),U=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token function"},"sudo"),n(" quasar dev")])],-1),W=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar build "),a("span",{class:"token parameter variable"},"-h"),n(`

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
                     - see https://www.electron.build/configuration/publish`)])],-1),H=a("p",null,"The Quasar CLI can pack everything together and optimize your App for production. It minifies source code, extracts vendor components, leverages browser cache and much more.",-1),V=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# Build a SPA for production"),n(`
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
$ quasar build `),a("span",{class:"token parameter variable"},"-d"),n(),a("span",{class:"token punctuation"},"["),n("-m "),a("span",{class:"token operator"},"<"),n("mode"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])],-1),Y=a("p",null,"Cleans up all the build assets:",-1),X=a("pre",{class:"doc-code"},[a("code",null,"$ quasar clean")],-1),z=a("p",null,"Generates Components, Pages, Layouts, Vuex Store.",-1),F=a("div",{class:"doc-note doc-note--tip"},[a("p",{class:"doc-note__title"},"TIP"),a("p",null,"This command is simply a helper in order to quickly scaffold a page/layout/component/vuex store module. You are not required to use it, but can help you when you don’t know how to start.")],-1),G=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar new "),a("span",{class:"token parameter variable"},"-h"),n(`

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
                             * ts - Plain TS template `),a("span",{class:"token punctuation"},"("),n("for boot, store, and ssrmiddleware files"),a("span",{class:"token punctuation"},")")])],-1),J=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar mode "),a("span",{class:"token parameter variable"},"-h"),n(`

  Description
    Add/Remove support `),a("span",{class:"token keyword"},"for"),n(` PWA / BEX / Cordova / Capacitor / Electron modes.

  Usage
    $ quasar mode `),a("span",{class:"token punctuation"},"["),n("add"),a("span",{class:"token operator"},"|"),n("remove"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"["),n("pwa"),a("span",{class:"token operator"},"|"),n("ssr"),a("span",{class:"token operator"},"|"),n("bex"),a("span",{class:"token operator"},"|"),n("cordova"),a("span",{class:"token operator"},"|"),n("capacitor"),a("span",{class:"token operator"},"|"),n("electron"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token punctuation"},"["),n("--yes"),a("span",{class:"token punctuation"},"]"),n(`

    `),a("span",{class:"token comment"},"# determine what modes are currently installed:"),n(`
    $ quasar mode

  Options
    --yes, `),a("span",{class:"token parameter variable"},"-y"),n("     Skips the "),a("span",{class:"token string"},'"Are you sure?"'),n(` question
                  when removing a Quasar mode
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("    Displays this message")])],-1),K=a("p",null,"When you initialize a project with the CLI, you can build SPA (Single Page Website/Application), SSR (Server-side Render Website/Application with optional PWA client takeover), PWA (Progressive Web App), Mobile App (through Cordova), and/or Electron Apps. When you develop for SSR, PWA, Cordova or Electron, you need these modes installed. If you issue “quasar dev” or “quasar build” they will automatically be installed.",-1),Z=a("p",null,"These modes will add a “src-*” folder into your project with very specific code for it:",-1),aa=a("thead",null,[a("tr",null,[a("th",{class:"text-left"},"Folder"),a("th",{class:"text-left"},"Mode"),a("th",{class:"text-left"},"Description")])],-1),na=a("tbody",null,[a("tr",null,[a("td",null,"src-ssr"),a("td",null,"ssr"),a("td",null,"Contains the production Node server files.")]),a("tr",null,[a("td",null,"src-pwa"),a("td",null,"pwa"),a("td",null,"Contains the Service Worker file that you can tweak.")]),a("tr",null,[a("td",null,"src-cordova"),a("td",null,"cordova"),a("td",null,"Is a Cordova project folder that will be using your ‘src’ as content. Tweak Cordova config, add/remove platforms, splash screens, Cordova plugins and so on from this folder. Do NOT touch “src-cordova/www” folder though as it will get overwritten at every build.")]),a("tr",null,[a("td",null,"src-electron"),a("td",null,"electron"),a("td",null,"Has code for the main Electron thread. The renderer thread will be your app in ‘src’.")]),a("tr",null,[a("td",null,"src-bex"),a("td",null,"bex"),a("td",null,"Contains the specific files for Browser Extensions mode.")])],-1),sa=a("p",null,[n("If for some reason you decide you don’t need a mode, you can remove it. "),a("strong",null,"This will permanently delete"),n(" the respective “src-*” folder.")],-1),ea=a("pre",{class:"doc-code"},[a("code",null,"$ quasar mode remove pwa")],-1),oa=a("p",null,[n("This command is useful to describe the API of any Quasar components/directives/plugins that your project is using. "),a("strong",null,"It is specific to your Quasar version installed in your project folder.")],-1),ta=a("p",null,[n("Examples: "),a("code",{class:"doc-token"},"$ quasar describe QIcon"),n(", "),a("code",{class:"doc-token"},"$ quasar describe TouchPan"),n(", "),a("code",{class:"doc-token"},"$ quasar describe Cookies"),n(".")],-1),ra=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar describe "),a("span",{class:"token parameter variable"},"-h"),n(`

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
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("            Displays this message")])],-1),la=a("pre",{class:"doc-code"},[a("code",null,[n(`$ quasar describe QIcon

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

   *No methods*`)])],-1),pa=a("p",null,"This command can be used to inspect the Vite config generated by Quasar CLI.",-1),ca=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar inspect "),a("span",{class:"token parameter variable"},"-h"),n(`

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
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])],-1),ia=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar ext "),a("span",{class:"token parameter variable"},"-h"),n(`

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
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])],-1),ua=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar run "),a("span",{class:"token parameter variable"},"-h"),n(`

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
    --help, `),a("span",{class:"token parameter variable"},"-h"),n("       Displays this message")])],-1),da=a("p",null,[n("This command can be used in production too and it is being supplied by the global installation of "),a("code",{class:"doc-token"},"@quasar/cli"),n(" package.")],-1),ka=a("pre",{class:"doc-code"},[a("code",null,[n("$ quasar serve "),a("span",{class:"token parameter variable"},"-h"),n(`

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
    --`),a("span",{class:"token operator"},">"),n(" will be transformed into app.use"),a("span",{class:"token punctuation"},"("),n("path, httpProxyMiddleware"),a("span",{class:"token punctuation"},"("),n("rule"),a("span",{class:"token punctuation"},"))")])],-1),ma=a("p",null,"When building a SPA or PWA, the distributable folder can be served by any static webserver. To test it out (assuming you don’t have a specific publicPath or not using Vue Router “history” mode), you can use the “http-server” npm package.",-1),ha=a("p",null,"Or you can build your own server. Here are some examples:",-1),ba=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(`
  express `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'express'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  serveStatic `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'serve-static'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  port `),a("span",{class:"token operator"},"="),n(" process"),a("span",{class:"token punctuation"},"."),n("env"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"PORT"),n(),a("span",{class:"token operator"},"||"),n(),a("span",{class:"token number"},"5000"),n(`

`),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"express"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(`

app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"serveStatic"),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"..."),n("path"),a("span",{class:"token operator"},"-"),n("to"),a("span",{class:"token operator"},"-"),n("dist"),a("span",{class:"token operator"},"..."),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},")")])],-1),fa=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(`
  express `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'express'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  serveStatic `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'serve-static'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  history `),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'connect-history-api-fallback'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),n(`
  port `),a("span",{class:"token operator"},"="),n(" process"),a("span",{class:"token punctuation"},"."),n("env"),a("span",{class:"token punctuation"},"."),a("span",{class:"token constant"},"PORT"),n(),a("span",{class:"token operator"},"||"),n(),a("span",{class:"token number"},"5000"),n(`

`),a("span",{class:"token keyword"},"const"),n(" app "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"express"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(`

app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"history"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"serveStatic"),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"..."),n("path"),a("span",{class:"token operator"},"-"),n("to"),a("span",{class:"token operator"},"-"),n("dist"),a("span",{class:"token operator"},"..."),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"listen"),a("span",{class:"token punctuation"},"("),n("port"),a("span",{class:"token punctuation"},")")])],-1),va=a("p",null,"If you need URL rewrites of API, or simply put you want to proxy your API requests, then you can use “http-proxy-middleware” package:",-1),ga=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"// add this to one of the two previous examples:"),n(`
`),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"{"),n(" createProxyMiddleware "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'http-proxy-middleware'"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token comment"},"// ..."),n(`
app`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'/api'"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token function"},"createProxyMiddleware"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token literal-property property"},"target"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},"http://my-api.com:5050"),a("span",{class:"token template-punctuation string"},"`")]),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token literal-property property"},"pathRewrite"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token string-property property"},'"^/api"'),n(),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),n(`

`),a("span",{class:"token comment"},"// then app.listen(...)")])],-1),ya=a("p",null,"Finally, run one of these files:",-1),wa=a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"node"),n(" my-server.js")])],-1),_a=a("p",null,[a("code",{class:"doc-token"},"quasar create"),n(" is a legacy command and is not recommended for use except for custom starter kits. You should use "),a("code",{class:"doc-token"},"create-quasar"),n(" instead:")],-1),qa=a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"yarn"),n(" create quasar")])],-1),$a=a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"npm"),n(" init quasar")])],-1),xa=a("pre",{class:"doc-code"},[a("code",null,[n("$ "),a("span",{class:"token function"},"pnpm"),n(" create quasar")])],-1),Ca=a("pre",{class:"doc-code"},[a("code",null,"$ bun create quasar")],-1),Aa=a("p",null,[n("Should you wish to create a Quasar project (app, AppExtension or UI kit) from "),a("strong",null,"CUSTOM"),n(" starter kits, please use the "),a("code",{class:"doc-token"},"@quasar/legacy-create"),n(" global installable CLI instead:")],-1),Pa=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"yarn"),n(" global "),a("span",{class:"token function"},"add"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])],-1),Ia=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
$ `),a("span",{class:"token function"},"npm"),n(" i "),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])],-1),Sa=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ `),a("span",{class:"token function"},"pnpm"),n(),a("span",{class:"token function"},"add"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])],-1),Da=a("pre",{class:"doc-code"},[a("code",null,[a("span",{class:"token comment"},"# globally install the @quasar/legacy-create CLI"),n(`
`),a("span",{class:"token comment"},"# experimental support"),n(`
$ bun `),a("span",{class:"token function"},"install"),n(),a("span",{class:"token parameter variable"},"-g"),n(` @quasar/legacy-create

`),a("span",{class:"token comment"},"# then:"),n(`
$ quasar-legacy-create `),a("span",{class:"token operator"},"<"),n("folder_name"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token operator"},"<"),n("address"),a("span",{class:"token operator"},">"),n(),a("span",{class:"token punctuation"},"["),n("--branch "),a("span",{class:"token operator"},"<"),n("branch_name"),a("span",{class:"token operator"},">"),a("span",{class:"token punctuation"},"]")])],-1),Qa=a("p",null,[n("With a starter kit stored on your machine by providing a "),a("strong",null,"local path"),n(" to a folder: "),a("code",{class:"doc-token"},"quasar-legacy-create <folder> ./my-custom-starter-kit"),n(".")],-1),Ta=a("p",null,"With a starter kit stored into any publicly accessible Git repository by providing a reference which follows this schema:",-1),Ea=a("ul",null,[a("li",null,[n("GitHub - "),a("code",{class:"doc-token"},"github:owner/name"),n(" or simply "),a("code",{class:"doc-token"},"owner/name")]),a("li",null,[n("GitLab - "),a("code",{class:"doc-token"},"gitlab:owner/name")]),a("li",null,[n("Bitbucket - "),a("code",{class:"doc-token"},"bitbucket:owner/name")])],-1),Na=a("p",null,[a("code",{class:"doc-token"},"master"),n(" branch will be checked out by default, but you can specify the one you prefer via "),a("code",{class:"doc-token"},"--branch <branch name>"),n(" (eg. "),a("code",{class:"doc-token"},"quasar-legacy-create <folder> owner/name --branch my-branch"),n(").")],-1),Oa=a("div",{class:"doc-note doc-note--warning"},[a("p",{class:"doc-note__title"},"WARNING"),a("p",null,"The preferred way to build reusable code and UI Components into Quasar ecosystem are App Extensions. Use a custom starter kit only if you really know what you’re doing and be aware that it will make more difficult for the Quasar team to provide you assistance.")],-1),Ba={__name:"commands-list",setup(ja){const k=[{id:"upgrade",title:"2. Upgrade"},{id:"info",title:"3. Info"},{id:"dev",title:"4. Dev"},{id:"build",title:"5. Build"},{id:"clean",title:"6. Clean"},{id:"new",title:"7. New"},{id:"mode",title:"8. Mode"},{id:"describe",title:"9. Describe"},{id:"inspect",title:"10. Inspect"},{id:"ext",title:"11. Ext"},{id:"run",title:"12. Run"},{id:"serve",title:"13. Serve"},{id:"custom-node-server",title:"13.1. Custom Node server",sub:!0},{id:"create",title:"14. Create"},{id:"scaffolding-a-quasar-project-folder",title:"14.1. Scaffolding a Quasar project folder",sub:!0},{id:"scaffolding-from-a-custom-starter-kit",title:"14.2. Scaffolding from a custom starter kit",sub:!0}];return(Ma,r)=>(m(),h(f,{title:"Commands List",desc:"(@quasar/app-vite) The entire list of Quasar CLI commands.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/commands-list",toc:k},{default:o(()=>[g,s(e(l),null,{default:o(()=>[y,s(t,{lang:"bash"})]),_:1}),w,s(e(l),null,{default:o(()=>[_,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"upgrade",class:"doc-heading doc-h2",onClick:r[0]||(r[0]=c=>e(p)("upgrade"))},"Upgrade"),q,s(e(l),null,{default:o(()=>[$,s(t,{lang:"bash"})]),_:1}),x,a("h2",{id:"info",class:"doc-heading doc-h2",onClick:r[1]||(r[1]=c=>e(p)("info"))},"Info"),C,A,s(e(l),null,{default:o(()=>[P,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"dev",class:"doc-heading doc-h2",onClick:r[2]||(r[2]=c=>e(p)("dev"))},"Dev"),s(e(l),null,{default:o(()=>[I,s(t,{lang:"bash"})]),_:1}),S,D,Q,s(e(l),null,{default:o(()=>[T,s(t,{lang:"bash"})]),_:1}),E,a("ul",null,[a("li",null,[n("Edit the ‘/quasar.config’ file:"),s(e(l),null,{default:o(()=>[N,s(t)]),_:1})]),O,a("li",null,[n("If this is a one time thing, specify the hostname and/or port as an environment variable:"),s(e(l),null,{default:o(()=>[B,s(t,{lang:"bash"})]),_:1})])]),j,a("ul",null,[a("li",null,[M,s(e(l),null,{default:o(()=>[R,s(t,{lang:"bash"})]),_:1})]),a("li",null,[L,s(e(l),null,{default:o(()=>[U,s(t,{lang:"bash"})]),_:1})])]),a("h2",{id:"build",class:"doc-heading doc-h2",onClick:r[3]||(r[3]=c=>e(p)("build"))},"Build"),s(e(l),null,{default:o(()=>[W,s(t,{lang:"bash"})]),_:1}),H,s(e(l),null,{default:o(()=>[V,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"clean",class:"doc-heading doc-h2",onClick:r[4]||(r[4]=c=>e(p)("clean"))},"Clean"),Y,s(e(l),null,{default:o(()=>[X,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"new",class:"doc-heading doc-h2",onClick:r[5]||(r[5]=c=>e(p)("new"))},"New"),z,F,s(e(l),null,{default:o(()=>[G,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"mode",class:"doc-heading doc-h2",onClick:r[6]||(r[6]=c=>e(p)("mode"))},"Mode"),s(e(l),null,{default:o(()=>[J,s(t,{lang:"bash"})]),_:1}),K,Z,s(b,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o(()=>[aa,na]),_:1}),sa,s(e(l),null,{default:o(()=>[ea,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"describe",class:"doc-heading doc-h2",onClick:r[7]||(r[7]=c=>e(p)("describe"))},"Describe"),oa,ta,s(e(l),null,{default:o(()=>[ra,s(t,{lang:"bash"})]),_:1}),s(e(l),null,{default:o(()=>[la,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"inspect",class:"doc-heading doc-h2",onClick:r[8]||(r[8]=c=>e(p)("inspect"))},"Inspect"),pa,s(e(l),null,{default:o(()=>[ca,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"ext",class:"doc-heading doc-h2",onClick:r[9]||(r[9]=c=>e(p)("ext"))},"Ext"),a("p",null,[n("This command is used to manage "),s(d,{to:"/app-extensions/introduction"},{default:o(()=>[n("App Extensions")]),_:1}),n(".")]),s(e(l),null,{default:o(()=>[ia,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"run",class:"doc-heading doc-h2",onClick:r[10]||(r[10]=c=>e(p)("run"))},"Run"),a("p",null,[n("This command is used to run commands supplied by the "),s(d,{to:"/app-extensions/introduction"},{default:o(()=>[n("App Extensions")]),_:1}),n(" that you’ve installed into your project folder.")]),s(e(l),null,{default:o(()=>[ua,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"serve",class:"doc-heading doc-h2",onClick:r[11]||(r[11]=c=>e(p)("serve"))},"Serve"),da,s(e(l),null,{default:o(()=>[ka,s(t,{lang:"bash"})]),_:1}),a("h3",{id:"custom-node-server",class:"doc-heading doc-h3",onClick:r[12]||(r[12]=c=>e(p)("custom-node-server"))},"Custom Node server"),ma,ha,s(e(l),{title:"When using default Vue Router 'hash' mode"},{default:o(()=>[ba,s(t)]),_:1}),s(e(l),{title:"When using Vue Router 'history' mode"},{default:o(()=>[fa,s(t)]),_:1}),va,s(e(l),null,{default:o(()=>[ga,s(t)]),_:1}),ya,s(e(l),null,{default:o(()=>[wa,s(t,{lang:"bash"})]),_:1}),a("h2",{id:"create",class:"doc-heading doc-h2",onClick:r[13]||(r[13]=c=>e(p)("create"))},[n("Create "),s(u,{align:"top",color:"brand-primary",label:"legacy"})]),a("h3",{id:"scaffolding-a-quasar-project-folder",class:"doc-heading doc-h3",onClick:r[14]||(r[14]=c=>e(p)("scaffolding-a-quasar-project-folder"))},"Scaffolding a Quasar project folder"),_a,s(e(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o(()=>[s(i,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[qa,s(t,{lang:"bash"})]),_:1}),s(i,{class:"q-pa-none",name:"NPM"},{default:o(()=>[$a,s(t,{lang:"bash"})]),_:1}),s(i,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[xa,s(t,{lang:"bash"})]),_:1}),s(i,{class:"q-pa-none",name:"Bun"},{default:o(()=>[Ca,s(t,{lang:"bash"})]),_:1})]),_:1}),a("h3",{id:"scaffolding-from-a-custom-starter-kit",class:"doc-heading doc-h3",onClick:r[15]||(r[15]=c=>e(p)("scaffolding-from-a-custom-starter-kit"))},[n("Scaffolding from a custom starter kit "),s(u,{align:"top",color:"brand-primary",label:"legacy"})]),Aa,s(e(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:o(()=>[s(i,{class:"q-pa-none",name:"Yarn"},{default:o(()=>[Pa,s(t,{lang:"bash"})]),_:1}),s(i,{class:"q-pa-none",name:"NPM"},{default:o(()=>[Ia,s(t,{lang:"bash"})]),_:1}),s(i,{class:"q-pa-none",name:"PNPM"},{default:o(()=>[Sa,s(t,{lang:"bash"})]),_:1}),s(i,{class:"q-pa-none",name:"Bun"},{default:o(()=>[Da,s(t,{lang:"bash"})]),_:1})]),_:1}),Qa,Ta,Ea,Na,Oa]),_:1}))}},Ya=v(Ba,[["__file","commands-list.md"]]);export{Ya as default};
