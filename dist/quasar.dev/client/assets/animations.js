import{c as i}from"./_examples_frameless-electron-window.js";import{D as d,a as p}from"./DocPage.js";import{D as l}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as k}from"./index.js";import{b as m,d as h,w as s,h as n,i as t,e as a,f as e}from"./vendor.js";const f={class:"doc-note"},g=n("code",{class:"doc-token"},"<transition>",-1),_=n("p",null,[t("Edit the "),n("code",{class:"doc-token"},"/quasar.config"),t(" file:")],-1),b=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"// embedding all animations"),t(`
`),n("span",{class:"token literal-property property"},"animations"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'all'"),t(`

`),n("span",{class:"token comment"},"// or embedding only specific animations"),t(`
`),n("span",{class:"token literal-property property"},"animations"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token string"},"'bounceInLeft'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token string"},"'bounceOutRight'"),t(`
`),n("span",{class:"token punctuation"},"]")])],-1),v=n("p",null,"If you are building a website, you can also skip configuring the quasar.config file and use a CDN link which points to Animate.css like this (following is just an example, Google for latest link). Remember this will require an Internet connection for your user, as opposed to bundling from within the quasar.config file.",-1),I=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token comment"},"<!-- @quasar/app-vite: /index.html -->"),t(`
`),n("span",{class:"token comment"},"<!-- @quasar/app-webpack: src/index.template.html -->"),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("head")]),n("span",{class:"token punctuation"},">")]),t(`
  ...

  `),n("span",{class:"token comment"},"<!-- CDN example for Animate.css -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("link")]),t(`
    `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("stylesheet"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("head")]),n("span",{class:"token punctuation"},">")])])],-1),w={class:"doc-note doc-note--warning"},O=n("p",{class:"doc-note__title"},"WARNING",-1),y=n("code",{class:"doc-token"},"<link>",-1),q=n("code",{class:"doc-token"},"animate__",-1),D=n("br",null,null,-1),B=n("br",null,null,-1),R=n("strong",null,"Quasar CLI",-1),L=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[n("strong",null,"Windows Developers"),t(" If you’re developing on Windows and the animations don’t appear to be working, it’s likely an OS level setting that’s to blame. Try changing "),n("strong",null,"Visual Effects"),t(" to "),n("strong",null,"Adjust for Best Appearance"),t(".")]),n("ol",null,[n("li",null,[t("Right click "),n("code",{class:"doc-token"},"My Computer"),t(" and select "),n("code",{class:"doc-token"},"Properties")]),n("li",null,[t("Click "),n("code",{class:"doc-token"},"Advanced System Settings")]),n("li",null,[t("Click the "),n("code",{class:"doc-token"},"Settings"),t(" button under "),n("code",{class:"doc-token"},"Performance")]),n("li",null,[t("Under the "),n("code",{class:"doc-token"},"Visual Effects"),t(" tab, change the radio option to: "),n("code",{class:"doc-token"},"Adjust for Best Appearance")])])],-1),x=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[t("Notice the string "),n("code",{class:"doc-token"},"animated"),t(" in front of the actual animation class name.")])],-1),C=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("transition")]),t(`
  `),n("span",{class:"token attr-name"},"appear"),t(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animated fadeIn"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),t(`
`),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},"<!-- Wrapping only one DOM element, defined by QBtn -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("q-btn")]),t(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("secondary"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mail"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Email"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("transition")]),n("span",{class:"token punctuation"},">")])])],-1),U=n("p",null,"Quasar also provides some built-in classes to animate the active state between both enter and leave transitions. The animations provided are separated into three groups (click on them to expand):",-1),S={class:"doc-note doc-note--details"},A=n("summary",{class:"doc-note__title"},"General classes",-1),T=n("pre",{class:"doc-code"},[n("code",null,`bounce
flash
flip
headShake
heartBeat
hinge
jello
pulse
rubberBand
shake
shakeX
shakeY
swing
tada
wobble`)],-1),N={class:"doc-note doc-note--details"},M=n("summary",{class:"doc-note__title"},'"In" classes',-1),E=n("pre",{class:"doc-code"},[n("code",null,`backInDown
backInLeft
backInRight
backInUp
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
fadeIn
fadeInBottomLeft
fadeInBottomRight
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInTopLeft
fadeInTopRight
fadeInUp
fadeInUpBig
flipInX
flipInY
jackInTheBox
lightSpeedInLeft
lightSpeedInRight
rollIn
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
slideInDown
slideInLeft
slideInRight
slideInUp
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp`)],-1),j={class:"doc-note doc-note--details"},z=n("summary",{class:"doc-note__title"},'"Out" classes',-1),W=n("pre",{class:"doc-code"},[n("code",null,`backOutDown
backOutLeft
backOutRight
backOutUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeOut
fadeOutBottomLeft
fadeOutBottomRight
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutTopLeft
fadeOutTopRight
fadeOutUp
fadeOutUpBig
flipOutX
flipOutY
lightSpeedOutLeft
lightSpeedOutRight
rollOut
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
slideOutDown
slideOutLeft
slideOutRight
slideOutUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp`)],-1),V=n("p",null,"There are additional classes which delay or repeat or change the speed of the animations (click to expand):",-1),Q={class:"doc-note doc-note--details"},P=n("summary",{class:"doc-note__title"},"Modifier classes",-1),G=n("pre",{class:"doc-code"},[n("code",null,[t(`repeat
repeat`),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),t(`
repeat`),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),t(`
delay`),n("span",{class:"token operator"},"-"),t(`1s
delay`),n("span",{class:"token operator"},"-"),t(`5s
slower
slow
fast
faster`)])],-1),Y=n("p",null,"Example:",-1),$=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("transition")]),t(`
  `),n("span",{class:"token attr-name"},"appear"),t(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animated fadeIn slower delay-5s repeat-2"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),t(`
`),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},"<!-- Wrapping only one DOM element, defined by QBtn -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("q-btn")]),t(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("secondary"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mail"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Email"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("transition")]),n("span",{class:"token punctuation"},">")])])],-1),H=n("p",null,"You can also group components or DOM elements in a transition so that the same effects are applied to all of them simultaneously.",-1),X=n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("transition-group")]),t(`
  `),n("span",{class:"token attr-name"},"appear"),t(`
  `),n("span",{class:"token attr-name"},"enter-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animated fadeIn"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token attr-name"},"leave-active-class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animated fadeOut"),n("span",{class:"token punctuation"},'"')]),t(`
`),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},'<!-- We wrap a "p" tag and a QBtn -->'),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
     Lorem Ipsum
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("q-btn")]),t(`
    `),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("email-button"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("secondary"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mail"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Email"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("transition-group")]),n("span",{class:"token punctuation"},">")])])],-1),F=n("p",null,"Please note some things in the above example:",-1),J=n("ol",null,[n("li",null,[t("Note "),n("code",{class:"doc-token"},"<transition-group>"),t(" instead of "),n("code",{class:"doc-token"},"<transition>"),t(".")]),n("li",null,[t("The components and DOM elements must be keyed, like "),n("code",{class:"doc-token"},'key="text"'),t(" or "),n("code",{class:"doc-token"},'key="email-button"'),t(" in the example above.")]),n("li",null,[t("Both examples above have the Boolean property "),n("code",{class:"doc-token"},"appear"),t(" specified, which makes the entering animation kick in right after component(s) have been rendered. This property is optional.")])],-1),K={__name:"animations",setup(Z){const r=[{id:"installation",title:"2. Installation"},{id:"usage",title:"3. Usage"},{id:"built-in-animation-classes",title:"3.1. Built-in animation classes",sub:!0},{id:"modifier-classes",title:"3.2. Modifier classes",sub:!0},{id:"wrapping-multiple-elements",title:"3.3. Wrapping Multiple Elements",sub:!0}];return(nn,o)=>(m(),h(d,{title:"Animations",desc:"Helper CSS animations supplied by Animate.css for a Quasar app.",heading:"","edit-link":"options/animations",toc:r},{default:s(()=>[n("p",null,[t("CSS Transitions can be handled by the "),a(p,{to:"https://vuejs.org/api/built-in-components.html"},{default:s(()=>[t("Vue Transition Component")]),_:1}),t(". The transitions are used for entering (appearing) or leaving (disappearing) animations.")]),n("p",null,[t("However, Quasar can supply a big list of ready to use CSS animations. The animation effects are borrowed from "),a(p,{to:"https://animate.style/"},{default:s(()=>[t("Animate.css")]),_:1}),t(". So there are 80+ animation types available for you to use out of the box. Check the list either on Animate.css website or on the demo available for this page.")]),n("blockquote",f,[n("p",null,[t("Please refer to "),a(p,{to:"https://vuejs.org/api/built-in-components.html#transition"},{default:s(()=>[t("Vue")]),_:1}),t(" documentation for learning on how to use the Vue supplied "),g,t(" component.")])]),n("h2",{id:"installation",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=u=>e(i)("installation"))},"Installation"),_,a(e(l),{title:"/quasar.config file"},{default:s(()=>[b,a(c)]),_:1}),v,a(e(l),null,{default:s(()=>[I,a(c)]),_:1}),n("div",w,[O,n("p",null,[t("It should be noted that when you import Animate.css through the "),y,t(" tag, all animation CSS classes must be prefixed with "),q,t(". This is a breaking change in the migration of Animate.css from v3 to v4. If you want to avoid using prefixes, you can import the "),a(p,{to:"https://animate.style/#migration"},{default:s(()=>[t("compat version")]),_:1}),t(". "),D,B,t(" However, if you’re using the "),R,t(", no additional changes are needed.")])]),L,n("h2",{id:"usage",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=u=>e(i)("usage"))},"Usage"),x,a(e(l),{title:"Example with wrapping only one DOM element / component"},{default:s(()=>[C,a(c)]),_:1}),n("h3",{id:"built-in-animation-classes",class:"doc-heading doc-h3",onClick:o[2]||(o[2]=u=>e(i)("built-in-animation-classes"))},"Built-in animation classes"),U,n("details",S,[A,a(e(l),null,{default:s(()=>[T,a(c)]),_:1})]),n("details",N,[M,a(e(l),null,{default:s(()=>[E,a(c)]),_:1})]),n("details",j,[z,a(e(l),null,{default:s(()=>[W,a(c)]),_:1})]),n("p",null,[t("You can also go to the "),a(p,{to:"https://vuejs.org/guide/built-ins/transition.html#custom-transition-classes"},{default:s(()=>[t("official Vue documention")]),_:1}),t(" for more information about the use of these classes.")]),n("h3",{id:"modifier-classes",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=u=>e(i)("modifier-classes"))},"Modifier classes"),V,n("details",Q,[P,a(e(l),null,{default:s(()=>[G,a(c)]),_:1})]),Y,a(e(l),null,{default:s(()=>[$,a(c)]),_:1}),n("h3",{id:"wrapping-multiple-elements",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=u=>e(i)("wrapping-multiple-elements"))},"Wrapping Multiple Elements"),H,a(e(l),{title:"Example with wrapping multiple DOM elements / components"},{default:s(()=>[X,a(c)]),_:1}),F,J]),_:1}))}},cn=k(K,[["__file","animations.md"]]);export{cn as default};
