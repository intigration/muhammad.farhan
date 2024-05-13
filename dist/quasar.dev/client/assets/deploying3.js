import{b as k,d as h,w as e,h as s,f as t,e as o,i as n,k as u}from"./vendor.js";import{c as i}from"./_examples_frameless-electron-window.js";import{D as g,a as p}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as a}from"./CopyButton.js";import{_ as y}from"./index.js";const m=s("p",null,"There exist many services that allow deploying applications with ease. To list all of them would not be possible so we will focus on the general deployment process and some specifics for common services.",-1),f=s("p",null,"If your favorite deployment tool is missing feel free to create a pull request on GitHub to add it to the list.",-1),_=s("p",null,"The first step in deploying your Quasar SPA is always to build a production-ready bundle of your files, which gets rid of development statements and minifies your source.",-1),b=s("p",null,"To produce such a build use Quasar CLI with the following command:",-1),w=s("pre",{class:"doc-code"},[s("code",null,"$ quasar build")],-1),v=s("p",null,[n("This command will build your project in SPA mode and output your production ready bundle to a newly created folder "),s("code",{class:"doc-token"},"/dist/spa"),n(".")],-1),x=s("p",null,[n("To serve your production files it is "),s("em",null,"required"),n(" to use a web server, so to serve over http(s):// protocol. Simply opening the "),s("code",{class:"doc-token"},"index.html"),n(" file from within your browser will not work, since this uses the file:// protocol instead.")],-1),$=s("p",null,[n("The web server requires no special setup (unless you built with Vue Router in “history” mode in the "),s("code",{class:"doc-token"},"/quasar.config"),n(" file). The main requirement is to be able to serve static files from a directory, so consult the documentation of your web server on how to set up static file serving.")],-1),C=s("p",null,"An example config for nginx may look like this:",-1),q=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token directive"},[s("span",{class:"token keyword"},"server")]),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"listen"),n(),s("span",{class:"token number"},"80"),n(" http2")]),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"server_name"),n(" quasar.myapp.com")]),s("span",{class:"token punctuation"},";"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"root"),n(" /home/user/quasar.myapp.com/public")]),s("span",{class:"token punctuation"},";"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"add_header"),n(" X-Frame-Options "),s("span",{class:"token string"},'"SAMEORIGIN"')]),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"add_header"),n(" X-XSS-Protection "),s("span",{class:"token string"},'"1; mode=block"')]),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"add_header"),n(" X-Content-Type-Options "),s("span",{class:"token string"},'"nosniff"')]),s("span",{class:"token punctuation"},";"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"index"),n(" index.html")]),s("span",{class:"token punctuation"},";"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"charset"),n(" utf-8")]),s("span",{class:"token punctuation"},";"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"location"),n(" /")]),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"try_files"),n(),s("span",{class:"token variable"},"$uri"),n(),s("span",{class:"token variable"},"$uri"),n("/ /index.html")]),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"location"),n(" = /robots.txt")]),n("  "),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"access_log"),n(),s("span",{class:"token boolean"},"off")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"log_not_found"),n(),s("span",{class:"token boolean"},"off")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token punctuation"},"}"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"access_log"),n(),s("span",{class:"token boolean"},"off")]),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"error_log"),n("  /var/log/nginx/quasar.myapp.com-error.log error")]),s("span",{class:"token punctuation"},";"),n(`

    `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"location"),n(" ~ /\\.(?!well-known).*")]),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token directive"},[s("span",{class:"token keyword"},"deny"),n(" all")]),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}")])],-1),P=s("p",null,[n("It’s important that you do not allow browsers to cache the "),s("code",{class:"doc-token"},"index.html"),n(" file. Because otherwise updates to this file or to your app might slip through the cracks for browsers that load the index.html from cache.")],-1),H=s("p",null,[n("This is why you must always make sure to add "),s("code",{class:"doc-token"},'"Cache-Control": "no-cache"'),n(" to the headers of the "),s("code",{class:"doc-token"},"index.html"),n(" file via your hosting service.")],-1),T=s("p",null,[n("As an example how this is done for Google Firebase, you would add the following to the "),s("code",{class:"doc-token"},"firebase.json"),n(" configuration:")],-1),G=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"hosting"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"headers"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"source"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"/**"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"headers"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
          `),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token property"},'"key"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Cache-Control"'),s("span",{class:"token punctuation"},","),n(`
            `),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"no-cache, no-store, must-revalidate"'),n(`
          `),s("span",{class:"token punctuation"},"}"),n(`
        `),s("span",{class:"token punctuation"},"]"),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"source"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"**/*.@(jpg|jpeg|gif|png|svg|webp|js|css|eot|otf|ttf|ttc|woff|woff2|font.css)"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"headers"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
          `),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token property"},'"key"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Cache-Control"'),s("span",{class:"token punctuation"},","),n(`
            `),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"max-age=604800"'),n(`
          `),s("span",{class:"token punctuation"},"}"),n(`
        `),s("span",{class:"token punctuation"},"]"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}")])],-1),S=s("pre",{class:"doc-code"},[s("code",null,"$ vercel login")],-1),j=s("p",null,"Then proceed to build your Quasar application using the steps described in “General deployment” section.",-1),D=s("p",null,[n("After the build is finished, change directory into your deploy root (example: "),s("code",{class:"doc-token"},"/dist/spa"),n(") and run:")],-1),N=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token comment"},"# from /dist/spa (or your distDir)"),n(`
$ vercel`)])],-1),A=s("p",null,"The Vercel CLI should now display information regarding your deployment, like the URL. That’s it. You’re done.",-1),I=s("p",null,"You should consider adding some additional configurations to your project.",-1),V=s("ul",null,[s("li",null,[s("p",null,[n("Important: Vercel expects the build results to be in "),s("code",{class:"doc-token"},"/public"),n(" directory, and "),s("em",null,"Quasar"),n(" has it in "),s("code",{class:"doc-token"},"/dist/spa"),n(" by default, so you will need to override the "),s("code",{class:"doc-token"},"Output Directory"),n(" in your Vercel project. Set it to "),s("code",{class:"doc-token"},"dist/spa"),n(" through the Vercel web ui under your project’s settings > Build & Development Settings.")])]),s("li",null,[s("p",null,[n("Since Vercel expects the "),s("em",null,"build"),n(" script to be defined, you may add in "),s("code",{class:"doc-token"},"package.json"),n(" the following scripts:")])])],-1),Q=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
    ..
    `),s("span",{class:"token property"},'"scripts"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      ...
      `),s("span",{class:"token property"},'"build"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"quasar build"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"deploy"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vercel"'),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"}")])],-1),B=s("ul",null,[s("li",null,[n("In order to support SPA routing in the deployed app, consider adding "),s("code",{class:"doc-token"},"vercel.json"),n(" file in your root folder:")])],-1),M=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"routes"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"handle"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"filesystem"'),n(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"src"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"/.*"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token property"},'"dest"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"/index.html"'),n(),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}")])],-1),L=s("p",null,"Unfortunately, Heroku does not support static sites out of the box. But don’t worry, we just need to add an HTTP server to our project so Heroku can serve our Quasar application.",-1),Y=s("p",null,"First, we need to install the required dependencies to our project:",-1),F=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(" express serve-static connect-history-api-fallback")])],-1),O=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"--save"),n(" express serve-static connect-history-api-fallback")])],-1),R=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"add"),n(" express serve-static connect-history-api-fallback")])],-1),X=s("pre",{class:"doc-code"},[s("code",null,[n("$ bun "),s("span",{class:"token function"},"add"),n(" express serve-static connect-history-api-fallback")])],-1),E=s("p",null,[n("Now that we have installed the required dependencies, we can add our server. Create a file called "),s("code",{class:"doc-token"},"server.js"),n(" in the root directory of your project.")],-1),U=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token keyword"},"const"),n(`
  express `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'express'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  serveStatic `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'serve-static'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  history `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'connect-history-api-fallback'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  port `),s("span",{class:"token operator"},"="),n(" process"),s("span",{class:"token punctuation"},"."),n("env"),s("span",{class:"token punctuation"},"."),s("span",{class:"token constant"},"PORT"),n(),s("span",{class:"token operator"},"||"),n(),s("span",{class:"token number"},"5000"),n(`

`),s("span",{class:"token keyword"},"const"),n(" app "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"express"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`

app`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"history"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),n(`
app`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"serveStatic"),s("span",{class:"token punctuation"},"("),n("__dirname "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token string"},"'/dist/spa'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),n(`
app`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"listen"),s("span",{class:"token punctuation"},"("),n("port"),s("span",{class:"token punctuation"},")")])],-1),W=s("p",null,[n("Heroku assumes a set of npm scripts to be available, so we have to alter our "),s("code",{class:"doc-token"},"package.json"),n(" and add the following under the "),s("code",{class:"doc-token"},"script"),n(" section:")],-1),K=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token string-property property"},'"build"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"quasar build"'),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token string-property property"},'"start"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"node server.js"'),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token string-property property"},'"heroku-postbuild"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"yarn && yarn build"')])],-1),z=s("p",null,"Now it is time to create an app on Heroku by running:",-1),J=s("pre",{class:"doc-code"},[s("code",null,"$ heroku create")],-1),Z=s("p",null,"and deploy to Heroku using:",-1),ss=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"git"),n(` init
$ heroku git:remote `),s("span",{class:"token parameter variable"},"-a"),n(),s("span",{class:"token operator"},"<"),n("heroku app name"),s("span",{class:"token operator"},">"),n(`

$ `),s("span",{class:"token function"},"git"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token builtin class-name"},"."),n(`
$ `),s("span",{class:"token function"},"git"),n(" commit "),s("span",{class:"token parameter variable"},"-am"),n(),s("span",{class:"token string"},'"make it better"'),n(`
$ `),s("span",{class:"token function"},"git"),n(" push heroku master")])],-1),ns=s("p",null,"For existing Git repositories, simply add the heroku remote:",-1),os=s("pre",{class:"doc-code"},[s("code",null,[n("$ heroku git:remote "),s("span",{class:"token parameter variable"},"-a"),n(),s("span",{class:"token operator"},"<"),n("heroku app name"),s("span",{class:"token operator"},">")])],-1),es=s("p",null,"If you want to deploy your application with Surge you first need to install the Surge CLI tool:",-1),ts=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-g"),n(" surge")])],-1),as=s("p",null,"Next, we will use Quasar CLI to build our app:",-1),ls=s("pre",{class:"doc-code"},[s("code",null,"$ quasar build")],-1),cs=s("p",null,"Now we can deploy our application using Surge by calling:",-1),ps=s("pre",{class:"doc-code"},[s("code",null,"$ surge dist/spa")],-1),is=s("p",null,"Now your application should be successfully deployed using Surge. You should be able to adapt this guide to any other static site deployment tool.",-1),rs=s("p",null,[n("To deploy your Quasar application to GitHub pages the first step is to create a special repository on GitHub which is named "),s("code",{class:"doc-token"},"<username>.github.io"),n(". Clone this repository to your local machine.")],-1),us=s("p",null,[n("Next, you need to build your Quasar application like it is described in the “General deployment section”. This will result in a "),s("code",{class:"doc-token"},"/dist/spa"),n(" directory. Copy the content of this folder to your cloned repository.")],-1),ds=s("p",null,[n("The last step is to add a commit in your repository and push to GitHub. After a short time, you should be able to visit your Quasar application at "),s("code",{class:"doc-token"},"https://<username>.github.io/"),n(".")],-1),ks=s("p",null,"First, install the package with:",-1),hs=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"--dev"),n(" push-dir")])],-1),gs=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(" --save-dev push-dir")])],-1),ys=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"-D"),n(" push-dir")])],-1),ms=s("pre",{class:"doc-code"},[s("code",null,[n("$ bun "),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"--dev"),n(" push-dir")])],-1),fs=s("p",null,[n("Then add a "),s("code",{class:"doc-token"},"deploy"),n(" script command to your "),s("code",{class:"doc-token"},"package.json"),n(":")],-1),_s=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token property"},'"scripts"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"deploy"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"push-dir --dir=dist/spa --remote=gh-pages --branch=master"'),n(`
`),s("span",{class:"token punctuation"},"}")])],-1),bs=s("p",null,[n("Add your GitHub Pages repository as a remote named "),s("code",{class:"doc-token"},"gh-pages"),n(":")],-1),ws=s("pre",{class:"doc-code"},[s("code",null,[n("$ "),s("span",{class:"token function"},"git"),n(" remote "),s("span",{class:"token function"},"add"),n(" gh-pages git@github.com:"),s("span",{class:"token operator"},"<"),n("username"),s("span",{class:"token operator"},">"),n("/"),s("span",{class:"token operator"},"<"),n("username"),s("span",{class:"token operator"},">"),n(".github.io.git")])],-1),vs=s("p",null,"Now you can build and deploy your application using:",-1),xs=s("pre",{class:"doc-code"},[s("code",null,[n(`$ quasar build
$ `),s("span",{class:"token function"},"yarn"),n(" deploy")])],-1),$s=s("p",null,"which will push the content of your build directory to your master branch on your GitHub Pages repository.",-1),Cs={__name:"deploying",setup(qs){const d=[{id:"general-deployment",title:"2. General deployment"},{id:"important-hosting-configuration",title:"3. Important Hosting Configuration"},{id:"deploying-with-vercel",title:"4. Deploying with Vercel"},{id:"vercel-configuration-tips",title:"4.1. Vercel configuration tips",sub:!0},{id:"deploying-with-heroku",title:"5. Deploying with Heroku"},{id:"deploying-with-surge",title:"6. Deploying with Surge"},{id:"deploying-on-github-pages",title:"7. Deploying on GitHub Pages"},{id:"adding-a-custom-domain-to-github-pages",title:"7.1. Adding a custom domain to GitHub pages",sub:!0},{id:"automated-deployment-to-github-pages-with-push-dir",title:"7.2. Automated deployment to GitHub pages with push-dir",sub:!0}];return(Ps,c)=>(k(),h(g,{title:"Deploying a SPA",desc:"(@quasar/app-webpack) How to publish a Single Page App built by Quasar CLI.",overline:"Quasar CLI with Webpack - @quasar/app-webpack",heading:"","edit-link":"quasar-cli-webpack/developing-spa/deploying",toc:d},{default:e(()=>[m,f,s("h2",{id:"general-deployment",class:"doc-heading doc-h2",onClick:c[0]||(c[0]=r=>t(i)("general-deployment"))},"General deployment"),_,b,o(t(l),null,{default:e(()=>[w,o(a,{lang:"bash"})]),_:1}),v,x,s("p",null,[n("Common choices for web servers are "),o(p,{to:"https://www.nginx.com/"},{default:e(()=>[n("nginx")]),_:1}),n(", "),o(p,{to:"https://caddyserver.com/"},{default:e(()=>[n("Caddy")]),_:1}),n(", "),o(p,{to:"https://httpd.apache.org/"},{default:e(()=>[n("Apache")]),_:1}),n(", "),o(p,{to:"https://expressjs.com/"},{default:e(()=>[n("Express")]),_:1}),n("; but you should be able to use whatever web server you want.")]),$,C,o(t(l),null,{default:e(()=>[q,o(a)]),_:1}),s("h2",{id:"important-hosting-configuration",class:"doc-heading doc-h2",onClick:c[1]||(c[1]=r=>t(i)("important-hosting-configuration"))},"Important Hosting Configuration"),P,H,T,o(t(l),null,{default:e(()=>[G,o(a)]),_:1}),s("h2",{id:"deploying-with-vercel",class:"doc-heading doc-h2",onClick:c[2]||(c[2]=r=>t(i)("deploying-with-vercel"))},"Deploying with Vercel"),s("p",null,[n("Deploying your Quasar application with "),o(p,{to:"https://vercel.com/"},{default:e(()=>[n("Vercel")]),_:1}),n(" is really easy. All you have to do is to download the "),o(p,{to:"https://vercel.com/download#now-cli"},{default:e(()=>[n("vercel-cli")]),_:1}),n(" and log in by running:")]),o(t(l),null,{default:e(()=>[S,o(a,{lang:"bash"})]),_:1}),j,D,o(t(l),null,{default:e(()=>[N,o(a,{lang:"bash"})]),_:1}),A,s("h3",{id:"vercel-configuration-tips",class:"doc-heading doc-h3",onClick:c[3]||(c[3]=r=>t(i)("vercel-configuration-tips"))},"Vercel configuration tips"),I,V,o(t(l),null,{default:e(()=>[Q,o(a)]),_:1}),B,o(t(l),null,{default:e(()=>[M,o(a)]),_:1}),s("h2",{id:"deploying-with-heroku",class:"doc-heading doc-h2",onClick:c[4]||(c[4]=r=>t(i)("deploying-with-heroku"))},"Deploying with Heroku"),L,s("p",null,[n("In this example, we will use "),o(p,{to:"https://expressjs.com/"},{default:e(()=>[n("Express")]),_:1}),n(" to create a minimal server which Heroku can use.")]),Y,o(t(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:e(()=>[o(u,{class:"q-pa-none",name:"Yarn"},{default:e(()=>[F,o(a,{lang:"bash"})]),_:1}),o(u,{class:"q-pa-none",name:"NPM"},{default:e(()=>[O,o(a,{lang:"bash"})]),_:1}),o(u,{class:"q-pa-none",name:"PNPM"},{default:e(()=>[R,o(a,{lang:"bash"})]),_:1}),o(u,{class:"q-pa-none",name:"Bun"},{default:e(()=>[X,o(a,{lang:"bash"})]),_:1})]),_:1}),E,o(t(l),null,{default:e(()=>[U,o(a)]),_:1}),W,o(t(l),null,{default:e(()=>[K,o(a)]),_:1}),z,o(t(l),null,{default:e(()=>[J,o(a,{lang:"bash"})]),_:1}),Z,o(t(l),null,{default:e(()=>[ss,o(a,{lang:"bash"})]),_:1}),ns,o(t(l),null,{default:e(()=>[os,o(a,{lang:"bash"})]),_:1}),s("h2",{id:"deploying-with-surge",class:"doc-heading doc-h2",onClick:c[5]||(c[5]=r=>t(i)("deploying-with-surge"))},"Deploying with Surge"),s("p",null,[o(p,{to:"https://surge.sh/"},{default:e(()=>[n("Surge")]),_:1}),n(" is a popular tool to host and deploy static sites.")]),es,o(t(l),null,{default:e(()=>[ts,o(a,{lang:"bash"})]),_:1}),as,o(t(l),null,{default:e(()=>[ls,o(a,{lang:"bash"})]),_:1}),cs,o(t(l),null,{default:e(()=>[ps,o(a,{lang:"bash"})]),_:1}),is,s("h2",{id:"deploying-on-github-pages",class:"doc-heading doc-h2",onClick:c[6]||(c[6]=r=>t(i)("deploying-on-github-pages"))},"Deploying on GitHub Pages"),rs,us,ds,s("h3",{id:"adding-a-custom-domain-to-github-pages",class:"doc-heading doc-h3",onClick:c[7]||(c[7]=r=>t(i)("adding-a-custom-domain-to-github-pages"))},"Adding a custom domain to GitHub pages"),s("p",null,[n("Please see the "),o(p,{to:"https://help.github.com/articles/using-a-custom-domain-with-github-pages/"},{default:e(()=>[n("GitHub pages guides")]),_:1}),n(" for an in-depth explanation on how to set up a custom domain.")]),s("h3",{id:"automated-deployment-to-github-pages-with-push-dir",class:"doc-heading doc-h3",onClick:c[8]||(c[8]=r=>t(i)("automated-deployment-to-github-pages-with-push-dir"))},"Automated deployment to GitHub pages with push-dir"),s("p",null,[n("Manual copying all your files to your GitHub Pages repository can be a cumbersome task to do. This step can be automated by using the "),o(p,{to:"https://github.com/L33T-KR3W/push-dir"},{default:e(()=>[n("push-dir")]),_:1}),n(" package.")]),ks,o(t(l),{tabs:["Yarn","NPM","PNPM","Bun"]},{default:e(()=>[o(u,{class:"q-pa-none",name:"Yarn"},{default:e(()=>[hs,o(a,{lang:"bash"})]),_:1}),o(u,{class:"q-pa-none",name:"NPM"},{default:e(()=>[gs,o(a,{lang:"bash"})]),_:1}),o(u,{class:"q-pa-none",name:"PNPM"},{default:e(()=>[ys,o(a,{lang:"bash"})]),_:1}),o(u,{class:"q-pa-none",name:"Bun"},{default:e(()=>[ms,o(a,{lang:"bash"})]),_:1})]),_:1}),fs,o(t(l),null,{default:e(()=>[_s,o(a)]),_:1}),bs,o(t(l),null,{default:e(()=>[ws,o(a,{lang:"bash"})]),_:1}),vs,o(t(l),null,{default:e(()=>[xs,o(a,{lang:"bash"})]),_:1}),$s]),_:1}))}},Ns=y(Cs,[["__file","deploying.md"]]);export{Ns as default};
