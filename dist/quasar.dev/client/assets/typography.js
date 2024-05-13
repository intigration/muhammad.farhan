import{b as n,q as u,F as b,s as k,h as t,e as l,j as p,d as _,D as w,a2 as x,v,w as i,f as o,l as q,i as e}from"./vendor.js";import{c}from"./_examples_frameless-electron-window.js";import{D as C,a as T}from"./DocPage.js";import{D as y}from"./DocPrerender.js";import{C as g}from"./CopyButton.js";import{_ as h}from"./index.js";const H={class:"col-sm-3 col-12"},S={__name:"TypographyHeadings",setup(m){const a=[{label:"Headline 1",cls:"text-h1",equivalent:"h1"},{label:"Headline 2",cls:"text-h2",equivalent:"h2"},{label:"Headline 3",cls:"text-h3",equivalent:"h3"},{label:"Headline 4",cls:"text-h4",equivalent:"h4"},{label:"Headline 5",cls:"text-h5",equivalent:"h5"},{label:"Headline 6",cls:"text-h6",equivalent:"h6"},{label:"Subtitle 1",cls:"text-subtitle1"},{label:"Subtitle 2",cls:"text-subtitle2"},{label:"Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",cls:"text-body1"},{label:"Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.",cls:"text-body2"},{label:"Caption text",cls:"text-caption"},{label:"Overline",cls:"text-overline"}];return(r,f)=>(n(),u("div",null,[(n(),u(b,null,k(a,s=>t("div",{key:s.label,class:"row items-center q-mb-lg"},[t("div",H,[l(p,{color:"brand-primary",outline:"",label:s.cls},null,8,["label"]),s.equivalent?(n(),_(p,{key:0,class:"q-ml-sm",color:"secondary",outline:"",label:s.equivalent},null,8,["label"])):w("",!0)]),t("div",{class:x(["col-sm-9 col-12",s.cls])},v(s.label),3)])),64))]))}},$=h(S,[["__file","TypographyHeadings.vue"]]),D={class:"col-sm-3 col-12"},B={class:"col-sm-9 col-12 q-mb-none q-pl-md q-pt-sm q-pb-sm"},A={__name:"TypographyWeights",setup(m){const a=["thin","light","regular","medium","bold","bolder"];return(r,f)=>(n(),u("div",null,[(n(),u(b,null,k(a,s=>t("div",{key:s,class:"row items-center q-mb-md"},[t("div",D,[l(p,{color:"brand-primary",outline:"",label:`text-weight-${s}`},null,8,["label"])]),t("div",B,[t("div",{class:x(`text-weight-${s}`)}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",2)])])),64))]))}},F=h(A,[["__file","TypographyWeights.vue"]]),N=t("p",null,"We’ll handle the typography supplied by Quasar in the sections below.",-1),W=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Class Name"),t("th",{class:"text-left"},"Description")])],-1),I=t("tbody",null,[t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-right")]),t("td",null,"Align text to the right")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-left")]),t("td",null,"Align text to the left")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-center")]),t("td",null,"Align text to the center")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-justify")]),t("td",null,"Text will be justified")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-bold")]),t("td",null,"Text will be in bold")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-italic")]),t("td",null,"Text will be in italic")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-no-wrap")]),t("td",null,[e("Non wrappable text (applies "),t("code",{class:"doc-token"},"white-space: nowrap"),e(")")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-strike")]),t("td",null,[e("Applies "),t("code",{class:"doc-token"},"text-decoration: line-through")])]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-uppercase")]),t("td",null,"Transform text to uppercase")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-lowercase")]),t("td",null,"Transform text to lowercase")]),t("tr",null,[t("td",null,[t("code",{class:"doc-token"},"text-capitalize")]),t("td",null,"Capitalize first letter of the text")])],-1),L=t("strong",null,"But it is not required",-1),Q=t("p",null,"Roboto comes with 6 different font weights you can use: 100, 300, 400, 500, 700, 900.",-1),V=t("p",null,"This is where Roboto font comes embedded by default, if you are looking to remove it:",-1),R=t("pre",{class:"doc-code"},[t("code",null,[t("span",{class:"token literal-property property"},"extras"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),e(`
  `),t("span",{class:"token string"},"'roboto-font'"),e(`
`),t("span",{class:"token punctuation"},"]")])],-1),j=t("p",null,"It is also possible to include other fonts to use them in the app. The following is one way to do it:",-1),z=t("ol",null,[t("li",null,[e("Copy your new webfont "),t("code",{class:"doc-token"},"[customfont].woff"),e(" (or whatever extension it has; recommended is "),t("code",{class:"doc-token"},"woff"),e(" for compatibility across all browsers) in a directory of your choice, for example: "),t("code",{class:"doc-token"},"./src/css/fonts/[customfont.woff]")]),t("li",null,[e("Declare your font in "),t("code",{class:"doc-token"},"./src/css/app.{css|sass|scss|styl}"),e(" (or in any place you see fit, but correctly update the relative path to the webfont file):")])],-1),P=t("pre",{class:"doc-code language-css"},[t("code",null,[t("span",{class:"token atrule"},[t("span",{class:"token rule"},"@font-face")]),e(),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},"font-family"),t("span",{class:"token punctuation"},":"),e(" customfont"),t("span",{class:"token punctuation"},";"),e(`
  `),t("span",{class:"token property"},"src"),t("span",{class:"token punctuation"},":"),e(),t("span",{class:"token url"},[t("span",{class:"token function"},"url"),t("span",{class:"token punctuation"},"("),e("./fonts/customfont.woff"),t("span",{class:"token punctuation"},")")]),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`

`),t("span",{class:"token selector"},`// declare a class which applies it
.my-font`),e(),t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},"font-family"),t("span",{class:"token punctuation"},":"),e(),t("span",{class:"token string"},"'customfont'"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}")])],-1),E=t("ol",{start:"3"},[t("li",null,"Then use that class where you need it.")],-1),M={__name:"typography",setup(m){const a=[{name:"Visibility",category:"Style & Identity",path:"/style/visibility"},{name:"Positioning",category:"Style & Identity",path:"/style/positioning"},{name:"Spacing",category:"Style & Identity",path:"/style/spacing"}],r=[{id:"headings",title:"2. Headings"},{id:"font-weights",title:"3. Font Weights"},{id:"css-helper-classes",title:"4. CSS Helper Classes"},{id:"default-font",title:"5. Default Font"},{id:"add-custom-fonts",title:"6. Add custom fonts"}];return(f,s)=>(n(),_(C,{title:"Typography",desc:"The typography of a Quasar app and its helper CSS classes.",heading:"","edit-link":"style/typography/typography",toc:r,related:a},{default:i(()=>[N,t("h2",{id:"headings",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=d=>o(c)("headings"))},"Headings"),l($),t("h2",{id:"font-weights",class:"doc-heading doc-h2",onClick:s[1]||(s[1]=d=>o(c)("font-weights"))},"Font Weights"),l(F),t("h2",{id:"css-helper-classes",class:"doc-heading doc-h2",onClick:s[2]||(s[2]=d=>o(c)("css-helper-classes"))},"CSS Helper Classes"),l(q,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:i(()=>[W,I]),_:1}),t("h2",{id:"default-font",class:"doc-heading doc-h2",onClick:s[3]||(s[3]=d=>o(c)("default-font"))},"Default Font"),t("p",null,[e("The default webfont embedded is "),l(T,{to:"https://fonts.google.com/specimen/Roboto"},{default:i(()=>[e("Roboto")]),_:1}),e(". "),L,e(". You can use whatever font(s) you like.")]),Q,V,l(o(y),{title:"/quasar.config file"},{default:i(()=>[R,l(g)]),_:1}),t("h2",{id:"add-custom-fonts",class:"doc-heading doc-h2",onClick:s[4]||(s[4]=d=>o(c)("add-custom-fonts"))},"Add custom fonts"),j,z,l(o(y),null,{default:i(()=>[P,l(g)]),_:1}),E]),_:1}))}},X=h(M,[["__file","typography.md"]]);export{X as default};
