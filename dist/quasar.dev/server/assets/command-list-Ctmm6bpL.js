import{mergeProps as D,withCtx as l,unref as r,createVNode as n,createTextVNode as a,useSSRContext as T}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as b}from"./page-utils-C-QWsEHe.js";import{D as q,a as m}from"./DocPage-DKr-0pQn.js";import{D as u}from"./DocPrerender-DPOnWPFO.js";import{C as o}from"./CopyButton-l3ndfN49.js";import{_ as P}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const $={__name:"command-list",__ssrInlineRender:!0,setup(d){const h=[{id:"generate",title:"2. Generate"},{id:"verify",title:"3. Verify"},{id:"profile",title:"4. Profile"}];return(g,v,w,x)=>{v(i(q,D({title:"Icon Genie CLI Command List",desc:"Command list for Icon Genie CLI.",heading:"","edit-link":"icongenie/command-list",toc:h},x),{default:l((O,p,f,e)=>{if(p)p(`<p${e}>Familiarize yourself with the list of available Icon Genie CLI commands inside a Quasar project folder:</p>`),p(i(r(u),null,{default:l((k,t,c,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ icongenie

  Example usage
    $ icongenie <span class="token operator"${s}>&lt;</span>command<span class="token operator"${s}>&gt;</span> <span class="token operator"${s}>&lt;</span>options<span class="token operator"${s}>&gt;</span>

  Help <span class="token keyword"${s}>for</span> a <span class="token builtin class-name"${s}>command</span>
    $ icongenie <span class="token operator"${s}>&lt;</span>command<span class="token operator"${s}>&gt;</span> <span class="token parameter variable"${s}>--help</span>
    $ icongenie <span class="token operator"${s}>&lt;</span>command<span class="token operator"${s}>&gt;</span> <span class="token parameter variable"${s}>-h</span>

  Options
    --version, <span class="token parameter variable"${s}>-v</span> Print Quasar Icon Genie CLI version

  Commands
    generate, g   Generate App icons <span class="token operator"${s}>&amp;</span> splash screens
    verify, <span class="token function"${s}>v</span>     Verify your Quasar app&#39;s icons <span class="token operator"${s}>&amp;</span>
                    splash screens
    profile, p    Create Icon Genie profile files
    help, h       Display this message</code></pre>`),t(i(o,{lang:"bash"},null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a(`$ icongenie

  Example usage
    $ icongenie `),n("span",{class:"token operator"},"<"),a("command"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"<"),a("options"),n("span",{class:"token operator"},">"),a(`

  Help `),n("span",{class:"token keyword"},"for"),a(" a "),n("span",{class:"token builtin class-name"},"command"),a(`
    $ icongenie `),n("span",{class:"token operator"},"<"),a("command"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"--help"),a(`
    $ icongenie `),n("span",{class:"token operator"},"<"),a("command"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"-h"),a(`

  Options
    --version, `),n("span",{class:"token parameter variable"},"-v"),a(` Print Quasar Icon Genie CLI version

  Commands
    generate, g   Generate App icons `),n("span",{class:"token operator"},"&"),a(` splash screens
    verify, `),n("span",{class:"token function"},"v"),a("     Verify your Quasar app's icons "),n("span",{class:"token operator"},"&"),a(`
                    splash screens
    profile, p    Create Icon Genie profile files
    help, h       Display this message`)])]),n(o,{lang:"bash"})]}),_:1},f,e)),p(`<p${e}>See help for any command:</p>`),p(i(r(u),null,{default:l((k,t,c,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ icongenie <span class="token punctuation"${s}>[</span>command_name<span class="token punctuation"${s}>]</span> <span class="token parameter variable"${s}>--help</span></code></pre>`),t(i(o,{lang:"bash"},null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie "),n("span",{class:"token punctuation"},"["),a("command_name"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token parameter variable"},"--help")])]),n(o,{lang:"bash"})]}),_:1},f,e)),p(`<h2 id="generate" class="doc-heading doc-h2"${e}>Generate</h2><p${e}>The <code class="doc-token"${e}>generate</code> command is used for generating app icons and splash screens. It’s at the heart of Icon Genie as it does the heavy lifting.</p><p${e}>Take a look below at usage and some examples. The most important parameter to note is <code class="doc-token"${e}>--icon</code> (or <code class="doc-token"${e}>-i</code>), which takes a transparent PNG as input for your app’s icons and splash screens. Minimum size of the PNG is 64x64px, but it is highly recommended to go above 1024x1024px.</p><p${e}>For splash screens, you may want to combine it with the <code class="doc-token"${e}>--background</code> (or <code class="doc-token"${e}>-b</code>) if you want your icon to be placed on top of a background.</p><p${e}>You may also want to use the <code class="doc-token"${e}>--profile</code> (or <code class="doc-token"${e}>-p</code>) parameter, which can run one or more Icon Genie `),p(i(m,{to:"/icongenie/profile-files"},{default:l((k,t,c,s)=>{if(t)t("profile files");else return[a("profile files")]}),_:1},f,e)),p(".</p>"),p(i(r(u),null,{default:l((k,t,c,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ icongenie generate <span class="token parameter variable"${s}>-h</span>

  Description
    Generate App icons <span class="token operator"${s}>&amp;</span> splash screens

  Usage
    $ icongenie generate <span class="token punctuation"${s}>[</span>options<span class="token punctuation"${s}>]</span>

    <span class="token comment"${s}># generate icons for all installed Quasar modes</span>
    $ icongenie generate <span class="token parameter variable"${s}>-i</span> /path/to/icon.png
    $ icongenie g <span class="token parameter variable"${s}>-i</span> /path/to/icon.png

    <span class="token comment"${s}># generate for (as example) PWA mode only</span>
    $ icongenie generate <span class="token parameter variable"${s}>-m</span> pwa <span class="token parameter variable"${s}>--icon</span> /path/to/icon.png

    <span class="token comment"${s}># generate for (as example) Cordova &amp; Capacitor mode only</span>
    $ icongenie g <span class="token parameter variable"${s}>-m</span> cordova,capacitor <span class="token parameter variable"${s}>-i</span>
         /path/to/icon.png <span class="token parameter variable"${s}>-b</span> /path/to/background.png

    <span class="token comment"${s}># generate by using a profile file</span>
    $ icongenie generate <span class="token parameter variable"${s}>-p</span> ./icongenie-profile.json

    <span class="token comment"${s}># generate by using batch of profile files</span>
    $ icongenie generate <span class="token parameter variable"${s}>-p</span> ./folder-containing-profile-files

  Options
    --icon, <span class="token parameter variable"${s}>-i</span>            Required<span class="token punctuation"${s}>;</span>
                          Path to <span class="token builtin class-name"${s}>source</span> <span class="token function"${s}>file</span> <span class="token keyword"${s}>for</span> icon<span class="token punctuation"${s}>;</span> must be:
                            - a .png <span class="token function"${s}>file</span>
                            - min resolution: 64x64 px <span class="token punctuation"${s}>(</span>the higher the better<span class="token operator"${s}>!</span><span class="token operator"${s}>!</span><span class="token punctuation"${s}>)</span>
                            - with transparency
                          Best results are with a square image <span class="token punctuation"${s}>(</span>height <span class="token operator"${s}>=</span> width<span class="token punctuation"${s}>)</span>
                          Image will be trimmed automatically
                            <span class="token punctuation"${s}>(</span>also see <span class="token string"${s}>&quot;skip-trim&quot;</span> and <span class="token string"${s}>&quot;padding&quot;</span> param<span class="token punctuation"${s}>)</span>
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, <span class="token parameter variable"${s}>-b</span>      Path to optional background <span class="token builtin class-name"${s}>source</span> <span class="token function"${s}>file</span> <span class="token punctuation"${s}>(</span>for splash screens<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>;</span>
                          must be:
                            - a .png <span class="token function"${s}>file</span>
                            - min resolution: 128x128 px <span class="token punctuation"${s}>(</span>the higher the better<span class="token operator"${s}>!</span><span class="token operator"${s}>!</span><span class="token punctuation"${s}>)</span>
                            - transparency is optional <span class="token punctuation"${s}>(</span>but recommended <span class="token keyword"${s}>if</span> you
                              combine with the splashscreen-color param<span class="token punctuation"${s}>)</span>
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --mode, <span class="token parameter variable"${s}>-m</span>            For <span class="token function"${s}>which</span> Quasar mode<span class="token punctuation"${s}>(</span>s<span class="token punctuation"${s}>)</span> to generate the assets<span class="token punctuation"${s}>;</span>
                          Default: all
                            <span class="token punctuation"${s}>[</span>all<span class="token operator"${s}>|</span>spa<span class="token operator"${s}>|</span>pwa<span class="token operator"${s}>|</span>ssr<span class="token operator"${s}>|</span>bex<span class="token operator"${s}>|</span>cordova<span class="token operator"${s}>|</span>capacitor<span class="token operator"${s}>|</span>electron<span class="token punctuation"${s}>]</span>
                          Multiple can be specified, separated by <span class="token string"${s}>&quot;,&quot;</span><span class="token builtin class-name"${s}>:</span>
                            spa,cordova

    --filter, <span class="token parameter variable"${s}>-f</span>          Filter the available generators<span class="token punctuation"${s}>;</span> when used, it can
                          generate only one <span class="token builtin class-name"${s}>type</span> of asset instead of all
                            <span class="token punctuation"${s}>[</span>png<span class="token operator"${s}>|</span>ico<span class="token operator"${s}>|</span>icns<span class="token operator"${s}>|</span>splashscreen<span class="token operator"${s}>|</span>svg<span class="token punctuation"${s}>]</span>

    <span class="token parameter variable"${s}>--quality</span>             Quality of the files <span class="token punctuation"${s}>[</span><span class="token number"${s}>1</span> - <span class="token number"${s}>12</span><span class="token punctuation"${s}>]</span> <span class="token punctuation"${s}>(</span>default: <span class="token number"${s}>5</span><span class="token punctuation"${s}>)</span>
                            - higher quality --<span class="token operator"${s}>&gt;</span> bigger filesize <span class="token operator"${s}>&amp;</span> slower to create
                            - lower quality  --<span class="token operator"${s}>&gt;</span> smaller filesize <span class="token operator"${s}>&amp;</span> faster to create

    --skip-trim           Do not trim the icon <span class="token builtin class-name"${s}>source</span> <span class="token function"${s}>file</span>

    <span class="token parameter variable"${s}>--padding</span>             Apply fixed padding to the icon after trimming it<span class="token punctuation"${s}>;</span>
                          Syntax: <span class="token operator"${s}>&lt;</span>horiz: number<span class="token operator"${s}>&gt;</span>,<span class="token operator"${s}>&lt;</span>vert: number<span class="token operator"${s}>&gt;</span>
                          Default: <span class="token number"${s}>0,0</span>
                          Example: <span class="token string"${s}>&quot;--padding 10,5&quot;</span> means apply 10px padding to <span class="token function"${s}>top</span>
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Theme color to use <span class="token keyword"${s}>for</span> all generators requiring a color<span class="token punctuation"${s}>;</span>
                          It gets overridden <span class="token keyword"${s}>if</span> any generator color is also specified<span class="token punctuation"${s}>;</span>
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --svg-color           Color to use <span class="token keyword"${s}>for</span> the generated monochrome svgs
                          Default <span class="token punctuation"${s}>(</span>if no theme-color is specified<span class="token punctuation"${s}>)</span>: 1976D2
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Background color to use <span class="token keyword"${s}>for</span> the png generator, when
                          <span class="token string"${s}>&quot;background: true&quot;</span> <span class="token keyword"${s}>in</span> the asset definition <span class="token punctuation"${s}>(</span>like <span class="token keyword"${s}>for</span>
                          the cordova/capacitor iOS icons<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>;</span>
                          Default <span class="token punctuation"${s}>(</span>if no theme-color is specified<span class="token punctuation"${s}>)</span>: fff
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Background color to use <span class="token keyword"${s}>for</span> the splashscreen generator<span class="token punctuation"${s}>;</span>
                          Default <span class="token punctuation"${s}>(</span>if no theme-color is specified<span class="token punctuation"${s}>)</span>: fff
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Ratio of icon size <span class="token keyword"${s}>in</span> respect to the width or height
                               <span class="token punctuation"${s}>(</span>whichever is smaller<span class="token punctuation"${s}>)</span> of the resulting splashscreen<span class="token punctuation"${s}>;</span>
                               Represents percentages<span class="token punctuation"${s}>;</span> Valid values: <span class="token number"${s}>0</span> - <span class="token number"${s}>100</span>
                               If <span class="token number"${s}>0</span> <span class="token keyword"${s}>then</span> it doesn&#39;t <span class="token function"${s}>add</span> the icon of <span class="token function"${s}>top</span> of background
                               Default: <span class="token number"${s}>40</span>

    --profile, <span class="token parameter variable"${s}>-p</span>         Use JSON profile file<span class="token punctuation"${s}>(</span>s<span class="token punctuation"${s}>)</span>:
                            - path to folder <span class="token punctuation"${s}>(</span>absolute or relative to current folder<span class="token punctuation"${s}>)</span>
                              that contains JSON profile files <span class="token punctuation"${s}>(</span>icongenie-*.json<span class="token punctuation"${s}>)</span>
                            - path to a single *.json profile <span class="token function"${s}>file</span> <span class="token punctuation"${s}>(</span>absolute or relative
                              to current folder<span class="token punctuation"${s}>)</span>
                          Structure of a JSON profile file:
                            <span class="token punctuation"${s}>{</span>
                              <span class="token string"${s}>&quot;params&quot;</span><span class="token builtin class-name"${s}>:</span> <span class="token punctuation"${s}>{</span>
                                <span class="token string"${s}>&quot;include&quot;</span><span class="token builtin class-name"${s}>:</span> <span class="token punctuation"${s}>[</span> <span class="token punctuation"${s}>..</span>. <span class="token punctuation"${s}>]</span>, /* optional */
                                <span class="token punctuation"${s}>..</span>.
                              <span class="token punctuation"${s}>}</span>,
                              <span class="token string"${s}>&quot;assets&quot;</span><span class="token builtin class-name"${s}>:</span> <span class="token punctuation"${s}>[</span> /* list of custom assets */ <span class="token punctuation"${s}>]</span>
                            <span class="token punctuation"${s}>}</span>

    --help, <span class="token parameter variable"${s}>-h</span>            Displays this message</code></pre>`),t(i(o,{lang:"bash"},null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie generate "),n("span",{class:"token parameter variable"},"-h"),a(`

  Description
    Generate App icons `),n("span",{class:"token operator"},"&"),a(` splash screens

  Usage
    $ icongenie generate `),n("span",{class:"token punctuation"},"["),a("options"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"# generate icons for all installed Quasar modes"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-i"),a(` /path/to/icon.png
    $ icongenie g `),n("span",{class:"token parameter variable"},"-i"),a(` /path/to/icon.png

    `),n("span",{class:"token comment"},"# generate for (as example) PWA mode only"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-m"),a(" pwa "),n("span",{class:"token parameter variable"},"--icon"),a(` /path/to/icon.png

    `),n("span",{class:"token comment"},"# generate for (as example) Cordova & Capacitor mode only"),a(`
    $ icongenie g `),n("span",{class:"token parameter variable"},"-m"),a(" cordova,capacitor "),n("span",{class:"token parameter variable"},"-i"),a(`
         /path/to/icon.png `),n("span",{class:"token parameter variable"},"-b"),a(` /path/to/background.png

    `),n("span",{class:"token comment"},"# generate by using a profile file"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-p"),a(` ./icongenie-profile.json

    `),n("span",{class:"token comment"},"# generate by using batch of profile files"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-p"),a(` ./folder-containing-profile-files

  Options
    --icon, `),n("span",{class:"token parameter variable"},"-i"),a("            Required"),n("span",{class:"token punctuation"},";"),a(`
                          Path to `),n("span",{class:"token builtin class-name"},"source"),a(),n("span",{class:"token function"},"file"),a(),n("span",{class:"token keyword"},"for"),a(" icon"),n("span",{class:"token punctuation"},";"),a(` must be:
                            - a .png `),n("span",{class:"token function"},"file"),a(`
                            - min resolution: 64x64 px `),n("span",{class:"token punctuation"},"("),a("the higher the better"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),a(`
                            - with transparency
                          Best results are with a square image `),n("span",{class:"token punctuation"},"("),a("height "),n("span",{class:"token operator"},"="),a(" width"),n("span",{class:"token punctuation"},")"),a(`
                          Image will be trimmed automatically
                            `),n("span",{class:"token punctuation"},"("),a("also see "),n("span",{class:"token string"},'"skip-trim"'),a(" and "),n("span",{class:"token string"},'"padding"'),a(" param"),n("span",{class:"token punctuation"},")"),a(`
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, `),n("span",{class:"token parameter variable"},"-b"),a("      Path to optional background "),n("span",{class:"token builtin class-name"},"source"),a(),n("span",{class:"token function"},"file"),a(),n("span",{class:"token punctuation"},"("),a("for splash screens"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
                          must be:
                            - a .png `),n("span",{class:"token function"},"file"),a(`
                            - min resolution: 128x128 px `),n("span",{class:"token punctuation"},"("),a("the higher the better"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),a(`
                            - transparency is optional `),n("span",{class:"token punctuation"},"("),a("but recommended "),n("span",{class:"token keyword"},"if"),a(` you
                              combine with the splashscreen-color param`),n("span",{class:"token punctuation"},")"),a(`
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --mode, `),n("span",{class:"token parameter variable"},"-m"),a("            For "),n("span",{class:"token function"},"which"),a(" Quasar mode"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(" to generate the assets"),n("span",{class:"token punctuation"},";"),a(`
                          Default: all
                            `),n("span",{class:"token punctuation"},"["),a("all"),n("span",{class:"token operator"},"|"),a("spa"),n("span",{class:"token operator"},"|"),a("pwa"),n("span",{class:"token operator"},"|"),a("ssr"),n("span",{class:"token operator"},"|"),a("bex"),n("span",{class:"token operator"},"|"),a("cordova"),n("span",{class:"token operator"},"|"),a("capacitor"),n("span",{class:"token operator"},"|"),a("electron"),n("span",{class:"token punctuation"},"]"),a(`
                          Multiple can be specified, separated by `),n("span",{class:"token string"},'","'),n("span",{class:"token builtin class-name"},":"),a(`
                            spa,cordova

    --filter, `),n("span",{class:"token parameter variable"},"-f"),a("          Filter the available generators"),n("span",{class:"token punctuation"},";"),a(` when used, it can
                          generate only one `),n("span",{class:"token builtin class-name"},"type"),a(` of asset instead of all
                            `),n("span",{class:"token punctuation"},"["),a("png"),n("span",{class:"token operator"},"|"),a("ico"),n("span",{class:"token operator"},"|"),a("icns"),n("span",{class:"token operator"},"|"),a("splashscreen"),n("span",{class:"token operator"},"|"),a("svg"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token parameter variable"},"--quality"),a("             Quality of the files "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),a(" - "),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token punctuation"},"("),a("default: "),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),a(`
                            - higher quality --`),n("span",{class:"token operator"},">"),a(" bigger filesize "),n("span",{class:"token operator"},"&"),a(` slower to create
                            - lower quality  --`),n("span",{class:"token operator"},">"),a(" smaller filesize "),n("span",{class:"token operator"},"&"),a(` faster to create

    --skip-trim           Do not trim the icon `),n("span",{class:"token builtin class-name"},"source"),a(),n("span",{class:"token function"},"file"),a(`

    `),n("span",{class:"token parameter variable"},"--padding"),a("             Apply fixed padding to the icon after trimming it"),n("span",{class:"token punctuation"},";"),a(`
                          Syntax: `),n("span",{class:"token operator"},"<"),a("horiz: number"),n("span",{class:"token operator"},">"),a(","),n("span",{class:"token operator"},"<"),a("vert: number"),n("span",{class:"token operator"},">"),a(`
                          Default: `),n("span",{class:"token number"},"0,0"),a(`
                          Example: `),n("span",{class:"token string"},'"--padding 10,5"'),a(" means apply 10px padding to "),n("span",{class:"token function"},"top"),a(`
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Theme color to use `),n("span",{class:"token keyword"},"for"),a(" all generators requiring a color"),n("span",{class:"token punctuation"},";"),a(`
                          It gets overridden `),n("span",{class:"token keyword"},"if"),a(" any generator color is also specified"),n("span",{class:"token punctuation"},";"),a(`
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --svg-color           Color to use `),n("span",{class:"token keyword"},"for"),a(` the generated monochrome svgs
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: 1976D2
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Background color to use `),n("span",{class:"token keyword"},"for"),a(` the png generator, when
                          `),n("span",{class:"token string"},'"background: true"'),a(),n("span",{class:"token keyword"},"in"),a(" the asset definition "),n("span",{class:"token punctuation"},"("),a("like "),n("span",{class:"token keyword"},"for"),a(`
                          the cordova/capacitor iOS icons`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Background color to use `),n("span",{class:"token keyword"},"for"),a(" the splashscreen generator"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Ratio of icon size `),n("span",{class:"token keyword"},"in"),a(` respect to the width or height
                               `),n("span",{class:"token punctuation"},"("),a("whichever is smaller"),n("span",{class:"token punctuation"},")"),a(" of the resulting splashscreen"),n("span",{class:"token punctuation"},";"),a(`
                               Represents percentages`),n("span",{class:"token punctuation"},";"),a(" Valid values: "),n("span",{class:"token number"},"0"),a(" - "),n("span",{class:"token number"},"100"),a(`
                               If `),n("span",{class:"token number"},"0"),a(),n("span",{class:"token keyword"},"then"),a(" it doesn't "),n("span",{class:"token function"},"add"),a(" the icon of "),n("span",{class:"token function"},"top"),a(` of background
                               Default: `),n("span",{class:"token number"},"40"),a(`

    --profile, `),n("span",{class:"token parameter variable"},"-p"),a("         Use JSON profile file"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(`:
                            - path to folder `),n("span",{class:"token punctuation"},"("),a("absolute or relative to current folder"),n("span",{class:"token punctuation"},")"),a(`
                              that contains JSON profile files `),n("span",{class:"token punctuation"},"("),a("icongenie-*.json"),n("span",{class:"token punctuation"},")"),a(`
                            - path to a single *.json profile `),n("span",{class:"token function"},"file"),a(),n("span",{class:"token punctuation"},"("),a(`absolute or relative
                              to current folder`),n("span",{class:"token punctuation"},")"),a(`
                          Structure of a JSON profile file:
                            `),n("span",{class:"token punctuation"},"{"),a(`
                              `),n("span",{class:"token string"},'"params"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
                                `),n("span",{class:"token string"},'"include"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token punctuation"},".."),a(". "),n("span",{class:"token punctuation"},"]"),a(`, /* optional */
                                `),n("span",{class:"token punctuation"},".."),a(`.
                              `),n("span",{class:"token punctuation"},"}"),a(`,
                              `),n("span",{class:"token string"},'"assets"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(" /* list of custom assets */ "),n("span",{class:"token punctuation"},"]"),a(`
                            `),n("span",{class:"token punctuation"},"}"),a(`

    --help, `),n("span",{class:"token parameter variable"},"-h"),a("            Displays this message")])]),n(o,{lang:"bash"})]}),_:1},f,e)),p(`<h2 id="verify" class="doc-heading doc-h2"${e}>Verify</h2><p${e}>The <code class="doc-token"${e}>verify</code> command confirms that you have all required app icons and splash screens in the right place and that each file has the correct resolution in pixels.</p>`),p(i(r(u),null,{default:l((k,t,c,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ icongenie <span class="token parameter variable"${s}>-h</span>

  Description
    Verifies your Quasar App&#39;s icons and splash screens
    <span class="token keyword"${s}>for</span> all installed modes.

  Usage
    $ icongenie verify <span class="token punctuation"${s}>[</span>options<span class="token punctuation"${s}>]</span>

    <span class="token comment"${s}># verify all Quasar modes</span>
    $ icongenie verify

    <span class="token comment"${s}># verify specific mode</span>
    $ icongenie verify <span class="token parameter variable"${s}>-m</span> spa

    <span class="token comment"${s}># verify with specific filter</span>
    $ icongenie verify <span class="token parameter variable"${s}>-f</span> ico

    <span class="token comment"${s}># verify by using a profile file</span>
    $ icongenie verify <span class="token parameter variable"${s}>-p</span> ./icongenie-profile.json

    <span class="token comment"${s}># verify by using batch of profile files</span>
    $ icongenie verify <span class="token parameter variable"${s}>-p</span> ./folder-containing-profile-files

  Options
    --mode, <span class="token parameter variable"${s}>-m</span>      For <span class="token function"${s}>which</span> Quasar mode<span class="token punctuation"${s}>(</span>s<span class="token punctuation"${s}>)</span> to verify the assets<span class="token punctuation"${s}>;</span>
                    Default: all
                      <span class="token punctuation"${s}>[</span>all<span class="token operator"${s}>|</span>spa<span class="token operator"${s}>|</span>pwa<span class="token operator"${s}>|</span>ssr<span class="token operator"${s}>|</span>bex<span class="token operator"${s}>|</span>cordova<span class="token operator"${s}>|</span>capacitor<span class="token operator"${s}>|</span>electron<span class="token punctuation"${s}>]</span>
                    Multiple can be specified, separated by <span class="token string"${s}>&quot;,&quot;</span><span class="token builtin class-name"${s}>:</span>
                      spa,cordova,capacitor

    --filter, <span class="token parameter variable"${s}>-f</span>    Filter the available generators<span class="token punctuation"${s}>;</span> when used, it verifies
                    only one <span class="token builtin class-name"${s}>type</span> of asset instead of all
                      <span class="token punctuation"${s}>[</span>png<span class="token operator"${s}>|</span>ico<span class="token operator"${s}>|</span>icns<span class="token operator"${s}>|</span>splashscreen<span class="token operator"${s}>|</span>svg<span class="token punctuation"${s}>]</span>

    <span class="token parameter variable"${s}>--profile</span>       Use JSON profile file<span class="token punctuation"${s}>(</span>s<span class="token punctuation"${s}>)</span> to extract the asset list to verify:
                      - path to folder <span class="token punctuation"${s}>(</span>absolute or relative to current folder<span class="token punctuation"${s}>)</span>
                        that contains JSON profile files <span class="token punctuation"${s}>(</span>icongenie-*.json<span class="token punctuation"${s}>)</span>
                      - path to a single *.json profile <span class="token function"${s}>file</span> <span class="token punctuation"${s}>(</span>absolute or relative
                        to current folder<span class="token punctuation"${s}>)</span>
                    Structure of a JSON profile file:
                      <span class="token punctuation"${s}>{</span>
                        <span class="token string"${s}>&quot;params&quot;</span><span class="token builtin class-name"${s}>:</span> <span class="token punctuation"${s}>{</span>
                          <span class="token string"${s}>&quot;include&quot;</span><span class="token builtin class-name"${s}>:</span> <span class="token punctuation"${s}>[</span> <span class="token punctuation"${s}>..</span>. <span class="token punctuation"${s}>]</span>, /* optional */
                          <span class="token punctuation"${s}>..</span>.
                        <span class="token punctuation"${s}>}</span>,
                        <span class="token string"${s}>&quot;assets&quot;</span><span class="token builtin class-name"${s}>:</span> <span class="token punctuation"${s}>[</span> /* list of custom assets */ <span class="token punctuation"${s}>]</span>
                      <span class="token punctuation"${s}>}</span>

    --help, <span class="token parameter variable"${s}>-h</span>      Displays this message</code></pre>`),t(i(o,{lang:"bash"},null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie "),n("span",{class:"token parameter variable"},"-h"),a(`

  Description
    Verifies your Quasar App's icons and splash screens
    `),n("span",{class:"token keyword"},"for"),a(` all installed modes.

  Usage
    $ icongenie verify `),n("span",{class:"token punctuation"},"["),a("options"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"# verify all Quasar modes"),a(`
    $ icongenie verify

    `),n("span",{class:"token comment"},"# verify specific mode"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-m"),a(` spa

    `),n("span",{class:"token comment"},"# verify with specific filter"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-f"),a(` ico

    `),n("span",{class:"token comment"},"# verify by using a profile file"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-p"),a(` ./icongenie-profile.json

    `),n("span",{class:"token comment"},"# verify by using batch of profile files"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-p"),a(` ./folder-containing-profile-files

  Options
    --mode, `),n("span",{class:"token parameter variable"},"-m"),a("      For "),n("span",{class:"token function"},"which"),a(" Quasar mode"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(" to verify the assets"),n("span",{class:"token punctuation"},";"),a(`
                    Default: all
                      `),n("span",{class:"token punctuation"},"["),a("all"),n("span",{class:"token operator"},"|"),a("spa"),n("span",{class:"token operator"},"|"),a("pwa"),n("span",{class:"token operator"},"|"),a("ssr"),n("span",{class:"token operator"},"|"),a("bex"),n("span",{class:"token operator"},"|"),a("cordova"),n("span",{class:"token operator"},"|"),a("capacitor"),n("span",{class:"token operator"},"|"),a("electron"),n("span",{class:"token punctuation"},"]"),a(`
                    Multiple can be specified, separated by `),n("span",{class:"token string"},'","'),n("span",{class:"token builtin class-name"},":"),a(`
                      spa,cordova,capacitor

    --filter, `),n("span",{class:"token parameter variable"},"-f"),a("    Filter the available generators"),n("span",{class:"token punctuation"},";"),a(` when used, it verifies
                    only one `),n("span",{class:"token builtin class-name"},"type"),a(` of asset instead of all
                      `),n("span",{class:"token punctuation"},"["),a("png"),n("span",{class:"token operator"},"|"),a("ico"),n("span",{class:"token operator"},"|"),a("icns"),n("span",{class:"token operator"},"|"),a("splashscreen"),n("span",{class:"token operator"},"|"),a("svg"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token parameter variable"},"--profile"),a("       Use JSON profile file"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(` to extract the asset list to verify:
                      - path to folder `),n("span",{class:"token punctuation"},"("),a("absolute or relative to current folder"),n("span",{class:"token punctuation"},")"),a(`
                        that contains JSON profile files `),n("span",{class:"token punctuation"},"("),a("icongenie-*.json"),n("span",{class:"token punctuation"},")"),a(`
                      - path to a single *.json profile `),n("span",{class:"token function"},"file"),a(),n("span",{class:"token punctuation"},"("),a(`absolute or relative
                        to current folder`),n("span",{class:"token punctuation"},")"),a(`
                    Structure of a JSON profile file:
                      `),n("span",{class:"token punctuation"},"{"),a(`
                        `),n("span",{class:"token string"},'"params"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
                          `),n("span",{class:"token string"},'"include"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token punctuation"},".."),a(". "),n("span",{class:"token punctuation"},"]"),a(`, /* optional */
                          `),n("span",{class:"token punctuation"},".."),a(`.
                        `),n("span",{class:"token punctuation"},"}"),a(`,
                        `),n("span",{class:"token string"},'"assets"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(" /* list of custom assets */ "),n("span",{class:"token punctuation"},"]"),a(`
                      `),n("span",{class:"token punctuation"},"}"),a(`

    --help, `),n("span",{class:"token parameter variable"},"-h"),a("      Displays this message")])]),n(o,{lang:"bash"})]}),_:1},f,e)),p(`<h2 id="profile" class="doc-heading doc-h2"${e}>Profile</h2><p${e}>Icon Genie also supports profile files. These files are in JSON format and tell Icon Genie which images to generate and how to generate them. The <code class="doc-token"${e}>profile</code> command is a helper to scaffold these profiles. They are very useful for automation, if needed.</p><p${e}>The generic form of a JSON profile file is:</p>`),p(i(r(u),null,{default:l((k,t,c,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}><span class="token punctuation"${s}>{</span>
  <span class="token property"${s}>&quot;params&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>{</span> <span class="token punctuation"${s}>}</span><span class="token punctuation"${s}>,</span>
  <span class="token property"${s}>&quot;assets&quot;</span><span class="token operator"${s}>:</span> <span class="token punctuation"${s}>[</span> <span class="token punctuation"${s}>]</span>
<span class="token punctuation"${s}>}</span></code></pre>`),t(i(o,null,null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"assets"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]}),_:1},f,e)),p(`<p${e}>You can also generate multiple profile files (with different params/settings). For more information please head on to the `),p(i(m,{to:"/icongenie/profile-files"},{default:l((k,t,c,s)=>{if(t)t("Profile files");else return[a("Profile files")]}),_:1},f,e)),p(" page.</p>"),p(i(r(u),null,{default:l((k,t,c,s)=>{if(t)t(`<pre class="doc-code"${s}><code${s}>$ icongenie profile <span class="token parameter variable"${s}>-h</span>

  Description
    Helper <span class="token builtin class-name"${s}>command</span> to easily bootstrap Icon Genie profile files.

  Usage
    $ icongenie profile <span class="token parameter variable"${s}>-o</span> <span class="token operator"${s}>&lt;</span>filename<span class="token operator"${s}>&gt;</span> <span class="token punctuation"${s}>[</span>options<span class="token punctuation"${s}>]</span>

    <span class="token comment"${s}># supplying params list</span>
    $ icongenie profile <span class="token parameter variable"${s}>-o</span> <span class="token operator"${s}>&lt;</span>filename<span class="token operator"${s}>&gt;</span> <span class="token parameter variable"${s}>--include</span> pwa,spa <span class="token parameter variable"${s}>--quality</span> <span class="token number"${s}>7</span>

    <span class="token comment"${s}># supplying assets based on Icon Genie&#39;s internal list</span>
    $ icongenie profile <span class="token parameter variable"${s}>-o</span> <span class="token operator"${s}>&lt;</span>filename<span class="token operator"${s}>&gt;</span> <span class="token parameter variable"${s}>--assets</span> spa,bex

  Options
    --output, <span class="token parameter variable"${s}>-o</span>          Name of the new Icon Genie profile <span class="token function"${s}>file</span>

    --assets, <span class="token parameter variable"${s}>-a</span>          Prefill the assets Array with Icon Genie<span class="token string"${s}>&#39;s
                          internal list, based on the modes that you indicate;
                            [all|spa|pwa|ssr|bex|cordova|capacitor|electron]
                          Multiple can be specified, separated by &quot;,&quot;:
                            spa,cordova

    --icon, -i            Path to source file for icons; must be:
                            - a .png file
                            - min resolution: 64x64 px (the higher the better!!)
                            - with transparency
                          Best results are with a square image (height = width)
                          Image will be trimmed automatically
                            (also see &quot;skip-trim&quot; and &quot;padding&quot; param)
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, -b      Path to optional background source file (for splash screens);
                          must be:
                            - a .png file
                            - min resolution: 128x128 px (the higher the better!!)
                            - transparency is optional (but recommended if you
                              combine with the splashscreen-color param)
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --include             Prefill the params.include property;
                            [all|spa|pwa|ssr|bex|cordova|capacitor|electron]
                          Multiple can be specified, separated by &quot;,&quot;:
                            spa,cordova

    --filter, -f          Prefill the params.filter property;
                            [png|ico|icns|splashscreen|svg]

    --quality             Prefill in the params.quality property;
                          Quality of the files [1 - 12] (default: 5)
                            - higher quality --&gt; bigger filesize &amp; slower to create
                            - lower quality  --&gt; smaller filesize &amp; faster to create

    --skip-trim           Do not trim the icon source file

    --padding             Apply fixed padding to the icon after trimming it;
                          Syntax: &lt;horiz: number&gt;,&lt;vert: number&gt;
                          Default: 0,0
                          Example: &quot;--padding 10,5&quot; means apply 10px padding to top
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Prefill the params.themeColor property;
                          Theme color to use for all generators requiring a color;
                          It gets overridden if any generator color is also specified;
                          The color must be in hex format (NOT hexa) without the leading
                          &#39;</span><span class="token comment"${s}>#&#39; character. Transparency not allowed.</span>
                          Examples: 1976D2, eee

    --svg-color           Prefill the params.svgColor property<span class="token punctuation"${s}>;</span>
                          Color to use <span class="token keyword"${s}>for</span> the generated monochrome svgs
                          Default <span class="token punctuation"${s}>(</span>if no theme-color is specified<span class="token punctuation"${s}>)</span>: 1976D2
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Prefill the params.pngColor property<span class="token punctuation"${s}>;</span>
                          Background color to use <span class="token keyword"${s}>for</span> the png generator, when
                          <span class="token string"${s}>&quot;background: true&quot;</span> <span class="token keyword"${s}>in</span> the asset definition <span class="token punctuation"${s}>(</span>like <span class="token keyword"${s}>for</span>
                          the Cordova/Capacitor iOS icons<span class="token punctuation"${s}>)</span><span class="token punctuation"${s}>;</span>
                          Default <span class="token punctuation"${s}>(</span>if no theme-color is specified<span class="token punctuation"${s}>)</span>: fff
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Prefill the params.splashscreenColor property<span class="token punctuation"${s}>;</span>
                          Background color to use <span class="token keyword"${s}>for</span> the splashscreen generator<span class="token punctuation"${s}>;</span>
                          Default <span class="token punctuation"${s}>(</span>if no theme-color is specified<span class="token punctuation"${s}>)</span>: fff
                          The color must be <span class="token keyword"${s}>in</span> hex <span class="token function"${s}>format</span> <span class="token punctuation"${s}>(</span>NOT hexa<span class="token punctuation"${s}>)</span> without the leading
                          <span class="token string"${s}>&#39;#&#39;</span> character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Prefill the params.splashscreenIconRatio property<span class="token punctuation"${s}>;</span>
                               Ratio of icon size <span class="token keyword"${s}>in</span> respect to the width or height
                               <span class="token punctuation"${s}>(</span>whichever is smaller<span class="token punctuation"${s}>)</span> of the resulting splashscreen<span class="token punctuation"${s}>;</span>
                               Represents percentages<span class="token punctuation"${s}>;</span> Valid values: <span class="token number"${s}>0</span> - <span class="token number"${s}>100</span>
                               If <span class="token number"${s}>0</span> <span class="token keyword"${s}>then</span> it doesn&#39;t <span class="token function"${s}>add</span> the icon of <span class="token function"${s}>top</span> of background
                               Default: <span class="token number"${s}>40</span></code></pre>`),t(i(o,{lang:"bash"},null,c,s));else return[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie profile "),n("span",{class:"token parameter variable"},"-h"),a(`

  Description
    Helper `),n("span",{class:"token builtin class-name"},"command"),a(` to easily bootstrap Icon Genie profile files.

  Usage
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),a(),n("span",{class:"token operator"},"<"),a("filename"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token punctuation"},"["),a("options"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"# supplying params list"),a(`
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),a(),n("span",{class:"token operator"},"<"),a("filename"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"--include"),a(" pwa,spa "),n("span",{class:"token parameter variable"},"--quality"),a(),n("span",{class:"token number"},"7"),a(`

    `),n("span",{class:"token comment"},"# supplying assets based on Icon Genie's internal list"),a(`
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),a(),n("span",{class:"token operator"},"<"),a("filename"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"--assets"),a(` spa,bex

  Options
    --output, `),n("span",{class:"token parameter variable"},"-o"),a("          Name of the new Icon Genie profile "),n("span",{class:"token function"},"file"),a(`

    --assets, `),n("span",{class:"token parameter variable"},"-a"),a("          Prefill the assets Array with Icon Genie"),n("span",{class:"token string"},`'s
                          internal list, based on the modes that you indicate;
                            [all|spa|pwa|ssr|bex|cordova|capacitor|electron]
                          Multiple can be specified, separated by ",":
                            spa,cordova

    --icon, -i            Path to source file for icons; must be:
                            - a .png file
                            - min resolution: 64x64 px (the higher the better!!)
                            - with transparency
                          Best results are with a square image (height = width)
                          Image will be trimmed automatically
                            (also see "skip-trim" and "padding" param)
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, -b      Path to optional background source file (for splash screens);
                          must be:
                            - a .png file
                            - min resolution: 128x128 px (the higher the better!!)
                            - transparency is optional (but recommended if you
                              combine with the splashscreen-color param)
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --include             Prefill the params.include property;
                            [all|spa|pwa|ssr|bex|cordova|capacitor|electron]
                          Multiple can be specified, separated by ",":
                            spa,cordova

    --filter, -f          Prefill the params.filter property;
                            [png|ico|icns|splashscreen|svg]

    --quality             Prefill in the params.quality property;
                          Quality of the files [1 - 12] (default: 5)
                            - higher quality --> bigger filesize & slower to create
                            - lower quality  --> smaller filesize & faster to create

    --skip-trim           Do not trim the icon source file

    --padding             Apply fixed padding to the icon after trimming it;
                          Syntax: <horiz: number>,<vert: number>
                          Default: 0,0
                          Example: "--padding 10,5" means apply 10px padding to top
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Prefill the params.themeColor property;
                          Theme color to use for all generators requiring a color;
                          It gets overridden if any generator color is also specified;
                          The color must be in hex format (NOT hexa) without the leading
                          '`),n("span",{class:"token comment"},"#' character. Transparency not allowed."),a(`
                          Examples: 1976D2, eee

    --svg-color           Prefill the params.svgColor property`),n("span",{class:"token punctuation"},";"),a(`
                          Color to use `),n("span",{class:"token keyword"},"for"),a(` the generated monochrome svgs
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: 1976D2
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Prefill the params.pngColor property`),n("span",{class:"token punctuation"},";"),a(`
                          Background color to use `),n("span",{class:"token keyword"},"for"),a(` the png generator, when
                          `),n("span",{class:"token string"},'"background: true"'),a(),n("span",{class:"token keyword"},"in"),a(" the asset definition "),n("span",{class:"token punctuation"},"("),a("like "),n("span",{class:"token keyword"},"for"),a(`
                          the Cordova/Capacitor iOS icons`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Prefill the params.splashscreenColor property`),n("span",{class:"token punctuation"},";"),a(`
                          Background color to use `),n("span",{class:"token keyword"},"for"),a(" the splashscreen generator"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Prefill the params.splashscreenIconRatio property`),n("span",{class:"token punctuation"},";"),a(`
                               Ratio of icon size `),n("span",{class:"token keyword"},"in"),a(` respect to the width or height
                               `),n("span",{class:"token punctuation"},"("),a("whichever is smaller"),n("span",{class:"token punctuation"},")"),a(" of the resulting splashscreen"),n("span",{class:"token punctuation"},";"),a(`
                               Represents percentages`),n("span",{class:"token punctuation"},";"),a(" Valid values: "),n("span",{class:"token number"},"0"),a(" - "),n("span",{class:"token number"},"100"),a(`
                               If `),n("span",{class:"token number"},"0"),a(),n("span",{class:"token keyword"},"then"),a(" it doesn't "),n("span",{class:"token function"},"add"),a(" the icon of "),n("span",{class:"token function"},"top"),a(` of background
                               Default: `),n("span",{class:"token number"},"40")])]),n(o,{lang:"bash"})]}),_:1},f,e));else return[n("p",null,"Familiarize yourself with the list of available Icon Genie CLI commands inside a Quasar project folder:"),n(r(u),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a(`$ icongenie

  Example usage
    $ icongenie `),n("span",{class:"token operator"},"<"),a("command"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"<"),a("options"),n("span",{class:"token operator"},">"),a(`

  Help `),n("span",{class:"token keyword"},"for"),a(" a "),n("span",{class:"token builtin class-name"},"command"),a(`
    $ icongenie `),n("span",{class:"token operator"},"<"),a("command"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"--help"),a(`
    $ icongenie `),n("span",{class:"token operator"},"<"),a("command"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"-h"),a(`

  Options
    --version, `),n("span",{class:"token parameter variable"},"-v"),a(` Print Quasar Icon Genie CLI version

  Commands
    generate, g   Generate App icons `),n("span",{class:"token operator"},"&"),a(` splash screens
    verify, `),n("span",{class:"token function"},"v"),a("     Verify your Quasar app's icons "),n("span",{class:"token operator"},"&"),a(`
                    splash screens
    profile, p    Create Icon Genie profile files
    help, h       Display this message`)])]),n(o,{lang:"bash"})]),_:1}),n("p",null,"See help for any command:"),n(r(u),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie "),n("span",{class:"token punctuation"},"["),a("command_name"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token parameter variable"},"--help")])]),n(o,{lang:"bash"})]),_:1}),n("h2",{id:"generate",class:"doc-heading doc-h2",onClick:k=>r(b)("generate")},"Generate",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"generate"),a(" command is used for generating app icons and splash screens. It’s at the heart of Icon Genie as it does the heavy lifting.")]),n("p",null,[a("Take a look below at usage and some examples. The most important parameter to note is "),n("code",{class:"doc-token"},"--icon"),a(" (or "),n("code",{class:"doc-token"},"-i"),a("), which takes a transparent PNG as input for your app’s icons and splash screens. Minimum size of the PNG is 64x64px, but it is highly recommended to go above 1024x1024px.")]),n("p",null,[a("For splash screens, you may want to combine it with the "),n("code",{class:"doc-token"},"--background"),a(" (or "),n("code",{class:"doc-token"},"-b"),a(") if you want your icon to be placed on top of a background.")]),n("p",null,[a("You may also want to use the "),n("code",{class:"doc-token"},"--profile"),a(" (or "),n("code",{class:"doc-token"},"-p"),a(") parameter, which can run one or more Icon Genie "),n(m,{to:"/icongenie/profile-files"},{default:l(()=>[a("profile files")]),_:1}),a(".")]),n(r(u),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie generate "),n("span",{class:"token parameter variable"},"-h"),a(`

  Description
    Generate App icons `),n("span",{class:"token operator"},"&"),a(` splash screens

  Usage
    $ icongenie generate `),n("span",{class:"token punctuation"},"["),a("options"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"# generate icons for all installed Quasar modes"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-i"),a(` /path/to/icon.png
    $ icongenie g `),n("span",{class:"token parameter variable"},"-i"),a(` /path/to/icon.png

    `),n("span",{class:"token comment"},"# generate for (as example) PWA mode only"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-m"),a(" pwa "),n("span",{class:"token parameter variable"},"--icon"),a(` /path/to/icon.png

    `),n("span",{class:"token comment"},"# generate for (as example) Cordova & Capacitor mode only"),a(`
    $ icongenie g `),n("span",{class:"token parameter variable"},"-m"),a(" cordova,capacitor "),n("span",{class:"token parameter variable"},"-i"),a(`
         /path/to/icon.png `),n("span",{class:"token parameter variable"},"-b"),a(` /path/to/background.png

    `),n("span",{class:"token comment"},"# generate by using a profile file"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-p"),a(` ./icongenie-profile.json

    `),n("span",{class:"token comment"},"# generate by using batch of profile files"),a(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-p"),a(` ./folder-containing-profile-files

  Options
    --icon, `),n("span",{class:"token parameter variable"},"-i"),a("            Required"),n("span",{class:"token punctuation"},";"),a(`
                          Path to `),n("span",{class:"token builtin class-name"},"source"),a(),n("span",{class:"token function"},"file"),a(),n("span",{class:"token keyword"},"for"),a(" icon"),n("span",{class:"token punctuation"},";"),a(` must be:
                            - a .png `),n("span",{class:"token function"},"file"),a(`
                            - min resolution: 64x64 px `),n("span",{class:"token punctuation"},"("),a("the higher the better"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),a(`
                            - with transparency
                          Best results are with a square image `),n("span",{class:"token punctuation"},"("),a("height "),n("span",{class:"token operator"},"="),a(" width"),n("span",{class:"token punctuation"},")"),a(`
                          Image will be trimmed automatically
                            `),n("span",{class:"token punctuation"},"("),a("also see "),n("span",{class:"token string"},'"skip-trim"'),a(" and "),n("span",{class:"token string"},'"padding"'),a(" param"),n("span",{class:"token punctuation"},")"),a(`
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, `),n("span",{class:"token parameter variable"},"-b"),a("      Path to optional background "),n("span",{class:"token builtin class-name"},"source"),a(),n("span",{class:"token function"},"file"),a(),n("span",{class:"token punctuation"},"("),a("for splash screens"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
                          must be:
                            - a .png `),n("span",{class:"token function"},"file"),a(`
                            - min resolution: 128x128 px `),n("span",{class:"token punctuation"},"("),a("the higher the better"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),a(`
                            - transparency is optional `),n("span",{class:"token punctuation"},"("),a("but recommended "),n("span",{class:"token keyword"},"if"),a(` you
                              combine with the splashscreen-color param`),n("span",{class:"token punctuation"},")"),a(`
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --mode, `),n("span",{class:"token parameter variable"},"-m"),a("            For "),n("span",{class:"token function"},"which"),a(" Quasar mode"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(" to generate the assets"),n("span",{class:"token punctuation"},";"),a(`
                          Default: all
                            `),n("span",{class:"token punctuation"},"["),a("all"),n("span",{class:"token operator"},"|"),a("spa"),n("span",{class:"token operator"},"|"),a("pwa"),n("span",{class:"token operator"},"|"),a("ssr"),n("span",{class:"token operator"},"|"),a("bex"),n("span",{class:"token operator"},"|"),a("cordova"),n("span",{class:"token operator"},"|"),a("capacitor"),n("span",{class:"token operator"},"|"),a("electron"),n("span",{class:"token punctuation"},"]"),a(`
                          Multiple can be specified, separated by `),n("span",{class:"token string"},'","'),n("span",{class:"token builtin class-name"},":"),a(`
                            spa,cordova

    --filter, `),n("span",{class:"token parameter variable"},"-f"),a("          Filter the available generators"),n("span",{class:"token punctuation"},";"),a(` when used, it can
                          generate only one `),n("span",{class:"token builtin class-name"},"type"),a(` of asset instead of all
                            `),n("span",{class:"token punctuation"},"["),a("png"),n("span",{class:"token operator"},"|"),a("ico"),n("span",{class:"token operator"},"|"),a("icns"),n("span",{class:"token operator"},"|"),a("splashscreen"),n("span",{class:"token operator"},"|"),a("svg"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token parameter variable"},"--quality"),a("             Quality of the files "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),a(" - "),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token punctuation"},"("),a("default: "),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),a(`
                            - higher quality --`),n("span",{class:"token operator"},">"),a(" bigger filesize "),n("span",{class:"token operator"},"&"),a(` slower to create
                            - lower quality  --`),n("span",{class:"token operator"},">"),a(" smaller filesize "),n("span",{class:"token operator"},"&"),a(` faster to create

    --skip-trim           Do not trim the icon `),n("span",{class:"token builtin class-name"},"source"),a(),n("span",{class:"token function"},"file"),a(`

    `),n("span",{class:"token parameter variable"},"--padding"),a("             Apply fixed padding to the icon after trimming it"),n("span",{class:"token punctuation"},";"),a(`
                          Syntax: `),n("span",{class:"token operator"},"<"),a("horiz: number"),n("span",{class:"token operator"},">"),a(","),n("span",{class:"token operator"},"<"),a("vert: number"),n("span",{class:"token operator"},">"),a(`
                          Default: `),n("span",{class:"token number"},"0,0"),a(`
                          Example: `),n("span",{class:"token string"},'"--padding 10,5"'),a(" means apply 10px padding to "),n("span",{class:"token function"},"top"),a(`
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Theme color to use `),n("span",{class:"token keyword"},"for"),a(" all generators requiring a color"),n("span",{class:"token punctuation"},";"),a(`
                          It gets overridden `),n("span",{class:"token keyword"},"if"),a(" any generator color is also specified"),n("span",{class:"token punctuation"},";"),a(`
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --svg-color           Color to use `),n("span",{class:"token keyword"},"for"),a(` the generated monochrome svgs
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: 1976D2
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Background color to use `),n("span",{class:"token keyword"},"for"),a(` the png generator, when
                          `),n("span",{class:"token string"},'"background: true"'),a(),n("span",{class:"token keyword"},"in"),a(" the asset definition "),n("span",{class:"token punctuation"},"("),a("like "),n("span",{class:"token keyword"},"for"),a(`
                          the cordova/capacitor iOS icons`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Background color to use `),n("span",{class:"token keyword"},"for"),a(" the splashscreen generator"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Ratio of icon size `),n("span",{class:"token keyword"},"in"),a(` respect to the width or height
                               `),n("span",{class:"token punctuation"},"("),a("whichever is smaller"),n("span",{class:"token punctuation"},")"),a(" of the resulting splashscreen"),n("span",{class:"token punctuation"},";"),a(`
                               Represents percentages`),n("span",{class:"token punctuation"},";"),a(" Valid values: "),n("span",{class:"token number"},"0"),a(" - "),n("span",{class:"token number"},"100"),a(`
                               If `),n("span",{class:"token number"},"0"),a(),n("span",{class:"token keyword"},"then"),a(" it doesn't "),n("span",{class:"token function"},"add"),a(" the icon of "),n("span",{class:"token function"},"top"),a(` of background
                               Default: `),n("span",{class:"token number"},"40"),a(`

    --profile, `),n("span",{class:"token parameter variable"},"-p"),a("         Use JSON profile file"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(`:
                            - path to folder `),n("span",{class:"token punctuation"},"("),a("absolute or relative to current folder"),n("span",{class:"token punctuation"},")"),a(`
                              that contains JSON profile files `),n("span",{class:"token punctuation"},"("),a("icongenie-*.json"),n("span",{class:"token punctuation"},")"),a(`
                            - path to a single *.json profile `),n("span",{class:"token function"},"file"),a(),n("span",{class:"token punctuation"},"("),a(`absolute or relative
                              to current folder`),n("span",{class:"token punctuation"},")"),a(`
                          Structure of a JSON profile file:
                            `),n("span",{class:"token punctuation"},"{"),a(`
                              `),n("span",{class:"token string"},'"params"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
                                `),n("span",{class:"token string"},'"include"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token punctuation"},".."),a(". "),n("span",{class:"token punctuation"},"]"),a(`, /* optional */
                                `),n("span",{class:"token punctuation"},".."),a(`.
                              `),n("span",{class:"token punctuation"},"}"),a(`,
                              `),n("span",{class:"token string"},'"assets"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(" /* list of custom assets */ "),n("span",{class:"token punctuation"},"]"),a(`
                            `),n("span",{class:"token punctuation"},"}"),a(`

    --help, `),n("span",{class:"token parameter variable"},"-h"),a("            Displays this message")])]),n(o,{lang:"bash"})]),_:1}),n("h2",{id:"verify",class:"doc-heading doc-h2",onClick:k=>r(b)("verify")},"Verify",8,["onClick"]),n("p",null,[a("The "),n("code",{class:"doc-token"},"verify"),a(" command confirms that you have all required app icons and splash screens in the right place and that each file has the correct resolution in pixels.")]),n(r(u),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie "),n("span",{class:"token parameter variable"},"-h"),a(`

  Description
    Verifies your Quasar App's icons and splash screens
    `),n("span",{class:"token keyword"},"for"),a(` all installed modes.

  Usage
    $ icongenie verify `),n("span",{class:"token punctuation"},"["),a("options"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"# verify all Quasar modes"),a(`
    $ icongenie verify

    `),n("span",{class:"token comment"},"# verify specific mode"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-m"),a(` spa

    `),n("span",{class:"token comment"},"# verify with specific filter"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-f"),a(` ico

    `),n("span",{class:"token comment"},"# verify by using a profile file"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-p"),a(` ./icongenie-profile.json

    `),n("span",{class:"token comment"},"# verify by using batch of profile files"),a(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-p"),a(` ./folder-containing-profile-files

  Options
    --mode, `),n("span",{class:"token parameter variable"},"-m"),a("      For "),n("span",{class:"token function"},"which"),a(" Quasar mode"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(" to verify the assets"),n("span",{class:"token punctuation"},";"),a(`
                    Default: all
                      `),n("span",{class:"token punctuation"},"["),a("all"),n("span",{class:"token operator"},"|"),a("spa"),n("span",{class:"token operator"},"|"),a("pwa"),n("span",{class:"token operator"},"|"),a("ssr"),n("span",{class:"token operator"},"|"),a("bex"),n("span",{class:"token operator"},"|"),a("cordova"),n("span",{class:"token operator"},"|"),a("capacitor"),n("span",{class:"token operator"},"|"),a("electron"),n("span",{class:"token punctuation"},"]"),a(`
                    Multiple can be specified, separated by `),n("span",{class:"token string"},'","'),n("span",{class:"token builtin class-name"},":"),a(`
                      spa,cordova,capacitor

    --filter, `),n("span",{class:"token parameter variable"},"-f"),a("    Filter the available generators"),n("span",{class:"token punctuation"},";"),a(` when used, it verifies
                    only one `),n("span",{class:"token builtin class-name"},"type"),a(` of asset instead of all
                      `),n("span",{class:"token punctuation"},"["),a("png"),n("span",{class:"token operator"},"|"),a("ico"),n("span",{class:"token operator"},"|"),a("icns"),n("span",{class:"token operator"},"|"),a("splashscreen"),n("span",{class:"token operator"},"|"),a("svg"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token parameter variable"},"--profile"),a("       Use JSON profile file"),n("span",{class:"token punctuation"},"("),a("s"),n("span",{class:"token punctuation"},")"),a(` to extract the asset list to verify:
                      - path to folder `),n("span",{class:"token punctuation"},"("),a("absolute or relative to current folder"),n("span",{class:"token punctuation"},")"),a(`
                        that contains JSON profile files `),n("span",{class:"token punctuation"},"("),a("icongenie-*.json"),n("span",{class:"token punctuation"},")"),a(`
                      - path to a single *.json profile `),n("span",{class:"token function"},"file"),a(),n("span",{class:"token punctuation"},"("),a(`absolute or relative
                        to current folder`),n("span",{class:"token punctuation"},")"),a(`
                    Structure of a JSON profile file:
                      `),n("span",{class:"token punctuation"},"{"),a(`
                        `),n("span",{class:"token string"},'"params"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
                          `),n("span",{class:"token string"},'"include"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token punctuation"},".."),a(". "),n("span",{class:"token punctuation"},"]"),a(`, /* optional */
                          `),n("span",{class:"token punctuation"},".."),a(`.
                        `),n("span",{class:"token punctuation"},"}"),a(`,
                        `),n("span",{class:"token string"},'"assets"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(" /* list of custom assets */ "),n("span",{class:"token punctuation"},"]"),a(`
                      `),n("span",{class:"token punctuation"},"}"),a(`

    --help, `),n("span",{class:"token parameter variable"},"-h"),a("      Displays this message")])]),n(o,{lang:"bash"})]),_:1}),n("h2",{id:"profile",class:"doc-heading doc-h2",onClick:k=>r(b)("profile")},"Profile",8,["onClick"]),n("p",null,[a("Icon Genie also supports profile files. These files are in JSON format and tell Icon Genie which images to generate and how to generate them. The "),n("code",{class:"doc-token"},"profile"),a(" command is a helper to scaffold these profiles. They are very useful for automation, if needed.")]),n("p",null,"The generic form of a JSON profile file is:"),n(r(u),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token property"},'"assets"'),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}")])]),n(o)]),_:1}),n("p",null,[a("You can also generate multiple profile files (with different params/settings). For more information please head on to the "),n(m,{to:"/icongenie/profile-files"},{default:l(()=>[a("Profile files")]),_:1}),a(" page.")]),n(r(u),null,{default:l(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("$ icongenie profile "),n("span",{class:"token parameter variable"},"-h"),a(`

  Description
    Helper `),n("span",{class:"token builtin class-name"},"command"),a(` to easily bootstrap Icon Genie profile files.

  Usage
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),a(),n("span",{class:"token operator"},"<"),a("filename"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token punctuation"},"["),a("options"),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"# supplying params list"),a(`
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),a(),n("span",{class:"token operator"},"<"),a("filename"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"--include"),a(" pwa,spa "),n("span",{class:"token parameter variable"},"--quality"),a(),n("span",{class:"token number"},"7"),a(`

    `),n("span",{class:"token comment"},"# supplying assets based on Icon Genie's internal list"),a(`
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),a(),n("span",{class:"token operator"},"<"),a("filename"),n("span",{class:"token operator"},">"),a(),n("span",{class:"token parameter variable"},"--assets"),a(` spa,bex

  Options
    --output, `),n("span",{class:"token parameter variable"},"-o"),a("          Name of the new Icon Genie profile "),n("span",{class:"token function"},"file"),a(`

    --assets, `),n("span",{class:"token parameter variable"},"-a"),a("          Prefill the assets Array with Icon Genie"),n("span",{class:"token string"},`'s
                          internal list, based on the modes that you indicate;
                            [all|spa|pwa|ssr|bex|cordova|capacitor|electron]
                          Multiple can be specified, separated by ",":
                            spa,cordova

    --icon, -i            Path to source file for icons; must be:
                            - a .png file
                            - min resolution: 64x64 px (the higher the better!!)
                            - with transparency
                          Best results are with a square image (height = width)
                          Image will be trimmed automatically
                            (also see "skip-trim" and "padding" param)
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, -b      Path to optional background source file (for splash screens);
                          must be:
                            - a .png file
                            - min resolution: 128x128 px (the higher the better!!)
                            - transparency is optional (but recommended if you
                              combine with the splashscreen-color param)
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --include             Prefill the params.include property;
                            [all|spa|pwa|ssr|bex|cordova|capacitor|electron]
                          Multiple can be specified, separated by ",":
                            spa,cordova

    --filter, -f          Prefill the params.filter property;
                            [png|ico|icns|splashscreen|svg]

    --quality             Prefill in the params.quality property;
                          Quality of the files [1 - 12] (default: 5)
                            - higher quality --> bigger filesize & slower to create
                            - lower quality  --> smaller filesize & faster to create

    --skip-trim           Do not trim the icon source file

    --padding             Apply fixed padding to the icon after trimming it;
                          Syntax: <horiz: number>,<vert: number>
                          Default: 0,0
                          Example: "--padding 10,5" means apply 10px padding to top
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Prefill the params.themeColor property;
                          Theme color to use for all generators requiring a color;
                          It gets overridden if any generator color is also specified;
                          The color must be in hex format (NOT hexa) without the leading
                          '`),n("span",{class:"token comment"},"#' character. Transparency not allowed."),a(`
                          Examples: 1976D2, eee

    --svg-color           Prefill the params.svgColor property`),n("span",{class:"token punctuation"},";"),a(`
                          Color to use `),n("span",{class:"token keyword"},"for"),a(` the generated monochrome svgs
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: 1976D2
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Prefill the params.pngColor property`),n("span",{class:"token punctuation"},";"),a(`
                          Background color to use `),n("span",{class:"token keyword"},"for"),a(` the png generator, when
                          `),n("span",{class:"token string"},'"background: true"'),a(),n("span",{class:"token keyword"},"in"),a(" the asset definition "),n("span",{class:"token punctuation"},"("),a("like "),n("span",{class:"token keyword"},"for"),a(`
                          the Cordova/Capacitor iOS icons`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Prefill the params.splashscreenColor property`),n("span",{class:"token punctuation"},";"),a(`
                          Background color to use `),n("span",{class:"token keyword"},"for"),a(" the splashscreen generator"),n("span",{class:"token punctuation"},";"),a(`
                          Default `),n("span",{class:"token punctuation"},"("),a("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),a(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),a(" hex "),n("span",{class:"token function"},"format"),a(),n("span",{class:"token punctuation"},"("),a("NOT hexa"),n("span",{class:"token punctuation"},")"),a(` without the leading
                          `),n("span",{class:"token string"},"'#'"),a(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Prefill the params.splashscreenIconRatio property`),n("span",{class:"token punctuation"},";"),a(`
                               Ratio of icon size `),n("span",{class:"token keyword"},"in"),a(` respect to the width or height
                               `),n("span",{class:"token punctuation"},"("),a("whichever is smaller"),n("span",{class:"token punctuation"},")"),a(" of the resulting splashscreen"),n("span",{class:"token punctuation"},";"),a(`
                               Represents percentages`),n("span",{class:"token punctuation"},";"),a(" Valid values: "),n("span",{class:"token number"},"0"),a(" - "),n("span",{class:"token number"},"100"),a(`
                               If `),n("span",{class:"token number"},"0"),a(),n("span",{class:"token keyword"},"then"),a(" it doesn't "),n("span",{class:"token function"},"add"),a(" the icon of "),n("span",{class:"token function"},"top"),a(` of background
                               Default: `),n("span",{class:"token number"},"40")])]),n(o,{lang:"bash"})]),_:1})]}),_:1},w))}}},y=$.setup;$.setup=(d,h)=>{const g=T();return(g.modules||(g.modules=new Set)).add("src/pages/icongenie/command-list.md"),y?y(d,h):void 0};const U=P($,[["__file","command-list.md"]]);export{U as default};
