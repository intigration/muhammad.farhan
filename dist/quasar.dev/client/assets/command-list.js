import{c as l}from"./_examples_frameless-electron-window.js";import{D as k,a as r}from"./DocPage.js";import{D as c}from"./DocPrerender.js";import{C as p}from"./CopyButton.js";import{_ as f}from"./index.js";import{b as d,d as m,w as s,e as a,f as t,h as n,i as e}from"./vendor.js";const h=n("p",null,"Familiarize yourself with the list of available Icon Genie CLI commands inside a Quasar project folder:",-1),g=n("pre",{class:"doc-code"},[n("code",null,[e(`$ icongenie

  Example usage
    $ icongenie `),n("span",{class:"token operator"},"<"),e("command"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token operator"},"<"),e("options"),n("span",{class:"token operator"},">"),e(`

  Help `),n("span",{class:"token keyword"},"for"),e(" a "),n("span",{class:"token builtin class-name"},"command"),e(`
    $ icongenie `),n("span",{class:"token operator"},"<"),e("command"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token parameter variable"},"--help"),e(`
    $ icongenie `),n("span",{class:"token operator"},"<"),e("command"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token parameter variable"},"-h"),e(`

  Options
    --version, `),n("span",{class:"token parameter variable"},"-v"),e(` Print Quasar Icon Genie CLI version

  Commands
    generate, g   Generate App icons `),n("span",{class:"token operator"},"&"),e(` splash screens
    verify, `),n("span",{class:"token function"},"v"),e("     Verify your Quasar app's icons "),n("span",{class:"token operator"},"&"),e(`
                    splash screens
    profile, p    Create Icon Genie profile files
    help, h       Display this message`)])],-1),b=n("p",null,"See help for any command:",-1),y=n("pre",{class:"doc-code"},[n("code",null,[e("$ icongenie "),n("span",{class:"token punctuation"},"["),e("command_name"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token parameter variable"},"--help")])],-1),v=n("p",null,[e("The "),n("code",{class:"doc-token"},"generate"),e(" command is used for generating app icons and splash screens. It’s at the heart of Icon Genie as it does the heavy lifting.")],-1),w=n("p",null,[e("Take a look below at usage and some examples. The most important parameter to note is "),n("code",{class:"doc-token"},"--icon"),e(" (or "),n("code",{class:"doc-token"},"-i"),e("), which takes a transparent PNG as input for your app’s icons and splash screens. Minimum size of the PNG is 64x64px, but it is highly recommended to go above 1024x1024px.")],-1),x=n("p",null,[e("For splash screens, you may want to combine it with the "),n("code",{class:"doc-token"},"--background"),e(" (or "),n("code",{class:"doc-token"},"-b"),e(") if you want your icon to be placed on top of a background.")],-1),_=n("code",{class:"doc-token"},"--profile",-1),D=n("code",{class:"doc-token"},"-p",-1),T=n("pre",{class:"doc-code"},[n("code",null,[e("$ icongenie generate "),n("span",{class:"token parameter variable"},"-h"),e(`

  Description
    Generate App icons `),n("span",{class:"token operator"},"&"),e(` splash screens

  Usage
    $ icongenie generate `),n("span",{class:"token punctuation"},"["),e("options"),n("span",{class:"token punctuation"},"]"),e(`

    `),n("span",{class:"token comment"},"# generate icons for all installed Quasar modes"),e(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-i"),e(` /path/to/icon.png
    $ icongenie g `),n("span",{class:"token parameter variable"},"-i"),e(` /path/to/icon.png

    `),n("span",{class:"token comment"},"# generate for (as example) PWA mode only"),e(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-m"),e(" pwa "),n("span",{class:"token parameter variable"},"--icon"),e(` /path/to/icon.png

    `),n("span",{class:"token comment"},"# generate for (as example) Cordova & Capacitor mode only"),e(`
    $ icongenie g `),n("span",{class:"token parameter variable"},"-m"),e(" cordova,capacitor "),n("span",{class:"token parameter variable"},"-i"),e(`
         /path/to/icon.png `),n("span",{class:"token parameter variable"},"-b"),e(` /path/to/background.png

    `),n("span",{class:"token comment"},"# generate by using a profile file"),e(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-p"),e(` ./icongenie-profile.json

    `),n("span",{class:"token comment"},"# generate by using batch of profile files"),e(`
    $ icongenie generate `),n("span",{class:"token parameter variable"},"-p"),e(` ./folder-containing-profile-files

  Options
    --icon, `),n("span",{class:"token parameter variable"},"-i"),e("            Required"),n("span",{class:"token punctuation"},";"),e(`
                          Path to `),n("span",{class:"token builtin class-name"},"source"),e(),n("span",{class:"token function"},"file"),e(),n("span",{class:"token keyword"},"for"),e(" icon"),n("span",{class:"token punctuation"},";"),e(` must be:
                            - a .png `),n("span",{class:"token function"},"file"),e(`
                            - min resolution: 64x64 px `),n("span",{class:"token punctuation"},"("),e("the higher the better"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),e(`
                            - with transparency
                          Best results are with a square image `),n("span",{class:"token punctuation"},"("),e("height "),n("span",{class:"token operator"},"="),e(" width"),n("span",{class:"token punctuation"},")"),e(`
                          Image will be trimmed automatically
                            `),n("span",{class:"token punctuation"},"("),e("also see "),n("span",{class:"token string"},'"skip-trim"'),e(" and "),n("span",{class:"token string"},'"padding"'),e(" param"),n("span",{class:"token punctuation"},")"),e(`
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --background, `),n("span",{class:"token parameter variable"},"-b"),e("      Path to optional background "),n("span",{class:"token builtin class-name"},"source"),e(),n("span",{class:"token function"},"file"),e(),n("span",{class:"token punctuation"},"("),e("for splash screens"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
                          must be:
                            - a .png `),n("span",{class:"token function"},"file"),e(`
                            - min resolution: 128x128 px `),n("span",{class:"token punctuation"},"("),e("the higher the better"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),e(`
                            - transparency is optional `),n("span",{class:"token punctuation"},"("),e("but recommended "),n("span",{class:"token keyword"},"if"),e(` you
                              combine with the splashscreen-color param`),n("span",{class:"token punctuation"},")"),e(`
                          Path can be absolute, or relative to the root of the
                            Quasar project folder
                          Recommended min size: 1024x1024 px

    --mode, `),n("span",{class:"token parameter variable"},"-m"),e("            For "),n("span",{class:"token function"},"which"),e(" Quasar mode"),n("span",{class:"token punctuation"},"("),e("s"),n("span",{class:"token punctuation"},")"),e(" to generate the assets"),n("span",{class:"token punctuation"},";"),e(`
                          Default: all
                            `),n("span",{class:"token punctuation"},"["),e("all"),n("span",{class:"token operator"},"|"),e("spa"),n("span",{class:"token operator"},"|"),e("pwa"),n("span",{class:"token operator"},"|"),e("ssr"),n("span",{class:"token operator"},"|"),e("bex"),n("span",{class:"token operator"},"|"),e("cordova"),n("span",{class:"token operator"},"|"),e("capacitor"),n("span",{class:"token operator"},"|"),e("electron"),n("span",{class:"token punctuation"},"]"),e(`
                          Multiple can be specified, separated by `),n("span",{class:"token string"},'","'),n("span",{class:"token builtin class-name"},":"),e(`
                            spa,cordova

    --filter, `),n("span",{class:"token parameter variable"},"-f"),e("          Filter the available generators"),n("span",{class:"token punctuation"},";"),e(` when used, it can
                          generate only one `),n("span",{class:"token builtin class-name"},"type"),e(` of asset instead of all
                            `),n("span",{class:"token punctuation"},"["),e("png"),n("span",{class:"token operator"},"|"),e("ico"),n("span",{class:"token operator"},"|"),e("icns"),n("span",{class:"token operator"},"|"),e("splashscreen"),n("span",{class:"token operator"},"|"),e("svg"),n("span",{class:"token punctuation"},"]"),e(`

    `),n("span",{class:"token parameter variable"},"--quality"),e("             Quality of the files "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),e(" - "),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token punctuation"},"("),e("default: "),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),e(`
                            - higher quality --`),n("span",{class:"token operator"},">"),e(" bigger filesize "),n("span",{class:"token operator"},"&"),e(` slower to create
                            - lower quality  --`),n("span",{class:"token operator"},">"),e(" smaller filesize "),n("span",{class:"token operator"},"&"),e(` faster to create

    --skip-trim           Do not trim the icon `),n("span",{class:"token builtin class-name"},"source"),e(),n("span",{class:"token function"},"file"),e(`

    `),n("span",{class:"token parameter variable"},"--padding"),e("             Apply fixed padding to the icon after trimming it"),n("span",{class:"token punctuation"},";"),e(`
                          Syntax: `),n("span",{class:"token operator"},"<"),e("horiz: number"),n("span",{class:"token operator"},">"),e(","),n("span",{class:"token operator"},"<"),e("vert: number"),n("span",{class:"token operator"},">"),e(`
                          Default: `),n("span",{class:"token number"},"0,0"),e(`
                          Example: `),n("span",{class:"token string"},'"--padding 10,5"'),e(" means apply 10px padding to "),n("span",{class:"token function"},"top"),e(`
                            10px to bottom, 5px to left side and 5px to rightside

    --theme-color         Theme color to use `),n("span",{class:"token keyword"},"for"),e(" all generators requiring a color"),n("span",{class:"token punctuation"},";"),e(`
                          It gets overridden `),n("span",{class:"token keyword"},"if"),e(" any generator color is also specified"),n("span",{class:"token punctuation"},";"),e(`
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --svg-color           Color to use `),n("span",{class:"token keyword"},"for"),e(` the generated monochrome svgs
                          Default `),n("span",{class:"token punctuation"},"("),e("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),e(`: 1976D2
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Background color to use `),n("span",{class:"token keyword"},"for"),e(` the png generator, when
                          `),n("span",{class:"token string"},'"background: true"'),e(),n("span",{class:"token keyword"},"in"),e(" the asset definition "),n("span",{class:"token punctuation"},"("),e("like "),n("span",{class:"token keyword"},"for"),e(`
                          the cordova/capacitor iOS icons`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
                          Default `),n("span",{class:"token punctuation"},"("),e("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),e(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Background color to use `),n("span",{class:"token keyword"},"for"),e(" the splashscreen generator"),n("span",{class:"token punctuation"},";"),e(`
                          Default `),n("span",{class:"token punctuation"},"("),e("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),e(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Ratio of icon size `),n("span",{class:"token keyword"},"in"),e(` respect to the width or height
                               `),n("span",{class:"token punctuation"},"("),e("whichever is smaller"),n("span",{class:"token punctuation"},")"),e(" of the resulting splashscreen"),n("span",{class:"token punctuation"},";"),e(`
                               Represents percentages`),n("span",{class:"token punctuation"},";"),e(" Valid values: "),n("span",{class:"token number"},"0"),e(" - "),n("span",{class:"token number"},"100"),e(`
                               If `),n("span",{class:"token number"},"0"),e(),n("span",{class:"token keyword"},"then"),e(" it doesn't "),n("span",{class:"token function"},"add"),e(" the icon of "),n("span",{class:"token function"},"top"),e(` of background
                               Default: `),n("span",{class:"token number"},"40"),e(`

    --profile, `),n("span",{class:"token parameter variable"},"-p"),e("         Use JSON profile file"),n("span",{class:"token punctuation"},"("),e("s"),n("span",{class:"token punctuation"},")"),e(`:
                            - path to folder `),n("span",{class:"token punctuation"},"("),e("absolute or relative to current folder"),n("span",{class:"token punctuation"},")"),e(`
                              that contains JSON profile files `),n("span",{class:"token punctuation"},"("),e("icongenie-*.json"),n("span",{class:"token punctuation"},")"),e(`
                            - path to a single *.json profile `),n("span",{class:"token function"},"file"),e(),n("span",{class:"token punctuation"},"("),e(`absolute or relative
                              to current folder`),n("span",{class:"token punctuation"},")"),e(`
                          Structure of a JSON profile file:
                            `),n("span",{class:"token punctuation"},"{"),e(`
                              `),n("span",{class:"token string"},'"params"'),n("span",{class:"token builtin class-name"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
                                `),n("span",{class:"token string"},'"include"'),n("span",{class:"token builtin class-name"},":"),e(),n("span",{class:"token punctuation"},"["),e(),n("span",{class:"token punctuation"},".."),e(". "),n("span",{class:"token punctuation"},"]"),e(`, /* optional */
                                `),n("span",{class:"token punctuation"},".."),e(`.
                              `),n("span",{class:"token punctuation"},"}"),e(`,
                              `),n("span",{class:"token string"},'"assets"'),n("span",{class:"token builtin class-name"},":"),e(),n("span",{class:"token punctuation"},"["),e(" /* list of custom assets */ "),n("span",{class:"token punctuation"},"]"),e(`
                            `),n("span",{class:"token punctuation"},"}"),e(`

    --help, `),n("span",{class:"token parameter variable"},"-h"),e("            Displays this message")])],-1),$=n("p",null,[e("The "),n("code",{class:"doc-token"},"verify"),e(" command confirms that you have all required app icons and splash screens in the right place and that each file has the correct resolution in pixels.")],-1),P=n("pre",{class:"doc-code"},[n("code",null,[e("$ icongenie "),n("span",{class:"token parameter variable"},"-h"),e(`

  Description
    Verifies your Quasar App's icons and splash screens
    `),n("span",{class:"token keyword"},"for"),e(` all installed modes.

  Usage
    $ icongenie verify `),n("span",{class:"token punctuation"},"["),e("options"),n("span",{class:"token punctuation"},"]"),e(`

    `),n("span",{class:"token comment"},"# verify all Quasar modes"),e(`
    $ icongenie verify

    `),n("span",{class:"token comment"},"# verify specific mode"),e(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-m"),e(` spa

    `),n("span",{class:"token comment"},"# verify with specific filter"),e(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-f"),e(` ico

    `),n("span",{class:"token comment"},"# verify by using a profile file"),e(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-p"),e(` ./icongenie-profile.json

    `),n("span",{class:"token comment"},"# verify by using batch of profile files"),e(`
    $ icongenie verify `),n("span",{class:"token parameter variable"},"-p"),e(` ./folder-containing-profile-files

  Options
    --mode, `),n("span",{class:"token parameter variable"},"-m"),e("      For "),n("span",{class:"token function"},"which"),e(" Quasar mode"),n("span",{class:"token punctuation"},"("),e("s"),n("span",{class:"token punctuation"},")"),e(" to verify the assets"),n("span",{class:"token punctuation"},";"),e(`
                    Default: all
                      `),n("span",{class:"token punctuation"},"["),e("all"),n("span",{class:"token operator"},"|"),e("spa"),n("span",{class:"token operator"},"|"),e("pwa"),n("span",{class:"token operator"},"|"),e("ssr"),n("span",{class:"token operator"},"|"),e("bex"),n("span",{class:"token operator"},"|"),e("cordova"),n("span",{class:"token operator"},"|"),e("capacitor"),n("span",{class:"token operator"},"|"),e("electron"),n("span",{class:"token punctuation"},"]"),e(`
                    Multiple can be specified, separated by `),n("span",{class:"token string"},'","'),n("span",{class:"token builtin class-name"},":"),e(`
                      spa,cordova,capacitor

    --filter, `),n("span",{class:"token parameter variable"},"-f"),e("    Filter the available generators"),n("span",{class:"token punctuation"},";"),e(` when used, it verifies
                    only one `),n("span",{class:"token builtin class-name"},"type"),e(` of asset instead of all
                      `),n("span",{class:"token punctuation"},"["),e("png"),n("span",{class:"token operator"},"|"),e("ico"),n("span",{class:"token operator"},"|"),e("icns"),n("span",{class:"token operator"},"|"),e("splashscreen"),n("span",{class:"token operator"},"|"),e("svg"),n("span",{class:"token punctuation"},"]"),e(`

    `),n("span",{class:"token parameter variable"},"--profile"),e("       Use JSON profile file"),n("span",{class:"token punctuation"},"("),e("s"),n("span",{class:"token punctuation"},")"),e(` to extract the asset list to verify:
                      - path to folder `),n("span",{class:"token punctuation"},"("),e("absolute or relative to current folder"),n("span",{class:"token punctuation"},")"),e(`
                        that contains JSON profile files `),n("span",{class:"token punctuation"},"("),e("icongenie-*.json"),n("span",{class:"token punctuation"},")"),e(`
                      - path to a single *.json profile `),n("span",{class:"token function"},"file"),e(),n("span",{class:"token punctuation"},"("),e(`absolute or relative
                        to current folder`),n("span",{class:"token punctuation"},")"),e(`
                    Structure of a JSON profile file:
                      `),n("span",{class:"token punctuation"},"{"),e(`
                        `),n("span",{class:"token string"},'"params"'),n("span",{class:"token builtin class-name"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
                          `),n("span",{class:"token string"},'"include"'),n("span",{class:"token builtin class-name"},":"),e(),n("span",{class:"token punctuation"},"["),e(),n("span",{class:"token punctuation"},".."),e(". "),n("span",{class:"token punctuation"},"]"),e(`, /* optional */
                          `),n("span",{class:"token punctuation"},".."),e(`.
                        `),n("span",{class:"token punctuation"},"}"),e(`,
                        `),n("span",{class:"token string"},'"assets"'),n("span",{class:"token builtin class-name"},":"),e(),n("span",{class:"token punctuation"},"["),e(" /* list of custom assets */ "),n("span",{class:"token punctuation"},"]"),e(`
                      `),n("span",{class:"token punctuation"},"}"),e(`

    --help, `),n("span",{class:"token parameter variable"},"-h"),e("      Displays this message")])],-1),I=n("p",null,[e("Icon Genie also supports profile files. These files are in JSON format and tell Icon Genie which images to generate and how to generate them. The "),n("code",{class:"doc-token"},"profile"),e(" command is a helper to scaffold these profiles. They are very useful for automation, if needed.")],-1),C=n("p",null,"The generic form of a JSON profile file is:",-1),N=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token property"},'"params"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token property"},'"assets"'),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(),n("span",{class:"token punctuation"},"]"),e(`
`),n("span",{class:"token punctuation"},"}")])],-1),O=n("pre",{class:"doc-code"},[n("code",null,[e("$ icongenie profile "),n("span",{class:"token parameter variable"},"-h"),e(`

  Description
    Helper `),n("span",{class:"token builtin class-name"},"command"),e(` to easily bootstrap Icon Genie profile files.

  Usage
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),e(),n("span",{class:"token operator"},"<"),e("filename"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token punctuation"},"["),e("options"),n("span",{class:"token punctuation"},"]"),e(`

    `),n("span",{class:"token comment"},"# supplying params list"),e(`
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),e(),n("span",{class:"token operator"},"<"),e("filename"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token parameter variable"},"--include"),e(" pwa,spa "),n("span",{class:"token parameter variable"},"--quality"),e(),n("span",{class:"token number"},"7"),e(`

    `),n("span",{class:"token comment"},"# supplying assets based on Icon Genie's internal list"),e(`
    $ icongenie profile `),n("span",{class:"token parameter variable"},"-o"),e(),n("span",{class:"token operator"},"<"),e("filename"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token parameter variable"},"--assets"),e(` spa,bex

  Options
    --output, `),n("span",{class:"token parameter variable"},"-o"),e("          Name of the new Icon Genie profile "),n("span",{class:"token function"},"file"),e(`

    --assets, `),n("span",{class:"token parameter variable"},"-a"),e("          Prefill the assets Array with Icon Genie"),n("span",{class:"token string"},`'s
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
                          '`),n("span",{class:"token comment"},"#' character. Transparency not allowed."),e(`
                          Examples: 1976D2, eee

    --svg-color           Prefill the params.svgColor property`),n("span",{class:"token punctuation"},";"),e(`
                          Color to use `),n("span",{class:"token keyword"},"for"),e(` the generated monochrome svgs
                          Default `),n("span",{class:"token punctuation"},"("),e("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),e(`: 1976D2
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --png-color           Prefill the params.pngColor property`),n("span",{class:"token punctuation"},";"),e(`
                          Background color to use `),n("span",{class:"token keyword"},"for"),e(` the png generator, when
                          `),n("span",{class:"token string"},'"background: true"'),e(),n("span",{class:"token keyword"},"in"),e(" the asset definition "),n("span",{class:"token punctuation"},"("),e("like "),n("span",{class:"token keyword"},"for"),e(`
                          the Cordova/Capacitor iOS icons`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
                          Default `),n("span",{class:"token punctuation"},"("),e("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),e(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-color  Prefill the params.splashscreenColor property`),n("span",{class:"token punctuation"},";"),e(`
                          Background color to use `),n("span",{class:"token keyword"},"for"),e(" the splashscreen generator"),n("span",{class:"token punctuation"},";"),e(`
                          Default `),n("span",{class:"token punctuation"},"("),e("if no theme-color is specified"),n("span",{class:"token punctuation"},")"),e(`: fff
                          The color must be `),n("span",{class:"token keyword"},"in"),e(" hex "),n("span",{class:"token function"},"format"),e(),n("span",{class:"token punctuation"},"("),e("NOT hexa"),n("span",{class:"token punctuation"},")"),e(` without the leading
                          `),n("span",{class:"token string"},"'#'"),e(` character. Transparency not allowed.
                          Examples: 1976D2, eee

    --splashscreen-icon-ratio  Prefill the params.splashscreenIconRatio property`),n("span",{class:"token punctuation"},";"),e(`
                               Ratio of icon size `),n("span",{class:"token keyword"},"in"),e(` respect to the width or height
                               `),n("span",{class:"token punctuation"},"("),e("whichever is smaller"),n("span",{class:"token punctuation"},")"),e(" of the resulting splashscreen"),n("span",{class:"token punctuation"},";"),e(`
                               Represents percentages`),n("span",{class:"token punctuation"},";"),e(" Valid values: "),n("span",{class:"token number"},"0"),e(" - "),n("span",{class:"token number"},"100"),e(`
                               If `),n("span",{class:"token number"},"0"),e(),n("span",{class:"token keyword"},"then"),e(" it doesn't "),n("span",{class:"token function"},"add"),e(" the icon of "),n("span",{class:"token function"},"top"),e(` of background
                               Default: `),n("span",{class:"token number"},"40")])],-1),G={__name:"command-list",setup(S){const u=[{id:"generate",title:"2. Generate"},{id:"verify",title:"3. Verify"},{id:"profile",title:"4. Profile"}];return(q,o)=>(d(),m(k,{title:"Icon Genie CLI Command List",desc:"Command list for Icon Genie CLI.",heading:"","edit-link":"icongenie/command-list",toc:u},{default:s(()=>[h,a(t(c),null,{default:s(()=>[g,a(p,{lang:"bash"})]),_:1}),b,a(t(c),null,{default:s(()=>[y,a(p,{lang:"bash"})]),_:1}),n("h2",{id:"generate",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=i=>t(l)("generate"))},"Generate"),v,w,x,n("p",null,[e("You may also want to use the "),_,e(" (or "),D,e(") parameter, which can run one or more Icon Genie "),a(r,{to:"/icongenie/profile-files"},{default:s(()=>[e("profile files")]),_:1}),e(".")]),a(t(c),null,{default:s(()=>[T,a(p,{lang:"bash"})]),_:1}),n("h2",{id:"verify",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=i=>t(l)("verify"))},"Verify"),$,a(t(c),null,{default:s(()=>[P,a(p,{lang:"bash"})]),_:1}),n("h2",{id:"profile",class:"doc-heading doc-h2",onClick:o[2]||(o[2]=i=>t(l)("profile"))},"Profile"),I,C,a(t(c),null,{default:s(()=>[N,a(p)]),_:1}),n("p",null,[e("You can also generate multiple profile files (with different params/settings). For more information please head on to the "),a(r,{to:"/icongenie/profile-files"},{default:s(()=>[e("Profile files")]),_:1}),e(" page.")]),a(t(c),null,{default:s(()=>[O,a(p,{lang:"bash"})]),_:1})]),_:1}))}},V=f(G,[["__file","command-list.md"]]);export{V as default};
