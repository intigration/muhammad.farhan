import{_ as h,a as g}from"./index.js";import{c as a}from"./_examples_frameless-electron-window.js";import{D as v,a as c}from"./DocPage.js";import{D as i}from"./DocExample.js";import{D as r}from"./DocApi.js";import{p as f,b as m,d as _,w as d,h as e,i as t,e as o,f as n}from"./vendor.js";import"./DocCode.js";import"./CopyButton.js";import"./DocCodepen.js";import"./utils.js";import"./DocCardTitle.js";const k=e("p",null,[t("The "),e("code",{class:"doc-token"},"QStepperNavigation"),t(" component allows you to place buttons within "),e("code",{class:"doc-token"},"QStepper"),t(" or "),e("code",{class:"doc-token"},"QStep"),t(" to navigate through the steps. It is up to you to add whatever buttons you require.")],-1),y=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[t("To use global navigation, you must add it to the "),e("code",{class:"doc-token"},"QStepper"),t(" “navigation” slot.")])],-1),S=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[t("If the QStep content also has images and you want to use swipe actions to navigate, you might want to add "),e("code",{class:"doc-token"},'draggable="false"'),t(" to them, otherwise the native browser behavior might interfere in a negative way.")])],-1),w=e("div",{class:"doc-note doc-note--danger"},[e("p",{class:"doc-note__title"},"Keep Alive"),e("ul",null,[e("li",null,[t("Please take notice of the Boolean "),e("code",{class:"doc-token"},"keep-alive"),t(" prop for QStepper, if you need this behavior. Do NOT use Vue’s native "),e("code",{class:"doc-token"},"<keep-alive>"),t(" component over QStep.")]),e("li",null,[t("Should you need the "),e("code",{class:"doc-token"},"keep-alive-include"),t(" or "),e("code",{class:"doc-token"},"keep-alive-exclude"),t(" props then the QStep "),e("code",{class:"doc-token"},"name"),t("s must be valid Vue component names (no spaces allowed, don’t start with a number etc).")])])],-1),b={class:"doc-note doc-note--tip"},Q=e("p",{class:"doc-note__title"},"TIP",-1),x=e("code",{class:"doc-token"},"contracted",-1),C=e("code",{class:"doc-token"},"$q.screen",-1),T=e("code",{class:"doc-token"},':contracted="$q.screen.lt.md"',-1),P=e("p",null,[t("Play with coloring using the "),e("code",{class:"doc-token"},"*-icon"),t(" and "),e("code",{class:"doc-token"},"*-color"),t(" props (on QStepper or override on specific QStep).")],-1),H=e("p",null,[t("You can also use "),e("code",{class:"doc-token"},"prefix"),t(" prop (max 2 characters) instead of an icon for each step’s header. This will be displayed if the step is not currently being edited and it isn’t marked with error or as “done”.")],-1),I=e("p",null,[t("You can use the "),e("code",{class:"doc-token"},"header-class"),t(" prop to apply any CSS class(es) to the header. In the example below, we are applying bolded text:")],-1),N={__name:"stepper",setup(V){f("_q_ex",{name:"QStepper",list:g(()=>import("./e.QStepper.js"),[])});const p=[{name:"Transitions",category:"Options & Helpers",path:"/options/transitions"}],u=[{id:"qstepper-api",title:"2. QStepper API",deep:!0},{id:"qstep-api",title:"3. QStep API",deep:!0},{id:"qsteppernavigation-api",title:"4. QStepperNavigation API",deep:!0},{id:"usage",title:"5. Usage"},{id:"horizontal",title:"5.1. Horizontal",sub:!0},{id:"vertical",title:"5.2. Vertical",sub:!0},{id:"header-navigation",title:"5.3. Header navigation",sub:!0},{id:"header-options",title:"5.4. Header options",sub:!0},{id:"style",title:"5.5. Style",sub:!0},{id:"message-slot",title:"5.6. Message slot",sub:!0}];return(z,s)=>(m(),_(v,{title:"Stepper",desc:"The QStepper Vue component conveys progress through a sequence of numbered steps. It may also be used for navigation. It's usually useful when the user has to follow steps to complete a process, like in a wizard.",heading:"","edit-link":"vue-components/stepper",toc:u,related:p},{default:d(()=>[e("p",null,[t("Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. They’re usually useful when the user has to follow steps to complete a process, like in a "),o(c,{to:"https://en.wikipedia.org/wiki/Wizard_(software)"},{default:d(()=>[t("wizard")]),_:1}),t(".")]),o(r,{file:"QStepper"}),o(r,{file:"QStep"}),o(r,{file:"QStepperNavigation"}),k,y,e("h2",{id:"usage",class:"doc-heading doc-h2",onClick:s[0]||(s[0]=l=>n(a)("usage"))},"Usage"),S,w,e("h3",{id:"horizontal",class:"doc-heading doc-h3",onClick:s[1]||(s[1]=l=>n(a)("horizontal"))},"Horizontal"),o(i,{title:"Horizontal",file:"TypeHorizontal"}),e("h3",{id:"vertical",class:"doc-heading doc-h3",onClick:s[2]||(s[2]=l=>n(a)("vertical"))},"Vertical"),o(i,{title:"Vertical",file:"TypeVertical"}),e("h3",{id:"header-navigation",class:"doc-heading doc-h3",onClick:s[3]||(s[3]=l=>n(a)("header-navigation"))},"Header navigation"),o(i,{title:"Non-linear header navigation",file:"NonLinearNavigation"}),o(i,{title:"Linear header navigation",file:"LinearNavigation"}),e("h3",{id:"header-options",class:"doc-heading doc-h3",onClick:s[4]||(s[4]=l=>n(a)("header-options"))},"Header options"),o(i,{title:"Signaling step error",file:"StepError"}),o(i,{title:"Alternative labels",file:"AlternativeLabels"}),e("div",b,[Q,e("p",null,[t("You can also connect "),x,t(" prop to "),C,t(" to create a responsive behavior, like "),T,t(". More info: "),o(c,{to:"/options/screen-plugin"},{default:d(()=>[t("Quasar Screen Plugin")]),_:1}),t(".")])]),o(i,{title:"Contracted",file:"Contracted"}),e("h3",{id:"style",class:"doc-heading doc-h3",onClick:s[5]||(s[5]=l=>n(a)("style"))},"Style"),P,o(i,{title:"Coloring",file:"Coloring"}),H,o(i,{title:"Step prefix",file:"Prefix"}),o(i,{title:"Force dark mode",file:"Dark"}),I,o(i,{title:"Header Class",file:"HeaderClass"}),e("h3",{id:"message-slot",class:"doc-heading doc-h3",onClick:s[6]||(s[6]=l=>n(a)("message-slot"))},"Message slot"),o(i,{title:"Message slot with fixed height steps",file:"MessageSlot"})]),_:1}))}},F=h(N,[["__file","stepper.md"]]);export{F as default};
