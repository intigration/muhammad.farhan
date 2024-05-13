import{_ as c,a as h}from"./index.js";import{p as m,b as p,d as f,w as o,h as e,i as t,e as l,f as a,l as g}from"./vendor.js";import{c as s}from"./_examples_frameless-electron-window.js";import{D as b,a as w}from"./DocPage.js";import{D as i}from"./DocExample.js";import{D as k}from"./DocPrerender.js";import{C as y}from"./CopyButton.js";import"./DocCode.js";import"./DocCodepen.js";import"./utils.js";import"./DocCardTitle.js";const _=e("p",null,"You can morph one DOM element into another (with animation) or between two states of the same element using Quasar’s morph util described below.",-1),v=e("pre",{class:"doc-code"},[e("code",null,[e("span",{class:"token keyword"},"import"),t(),e("span",{class:"token punctuation"},"{"),t(" morph "),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token keyword"},"from"),t(),e("span",{class:"token string"},"'quasar'"),t(`

`),e("span",{class:"token comment"},"// Morph one DOM element to another:"),t(`
`),e("span",{class:"token keyword"},"const"),t(" cancelMorph "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"morph"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token literal-property property"},"from"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'#from-el'"),e("span",{class:"token punctuation"},","),t(`
  `),e("span",{class:"token literal-property property"},"to"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'#to-el'"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),t(`

`),e("span",{class:"token comment"},"// call cancelMorph() to cancel the morphing")])],-1),x=e("p",null,"The function expects one mandatory Object parameter with the following keys:",-1),M=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Type"),e("th",{class:"text-left"},"Default value"),e("th",{class:"text-left"},"Description")])],-1),S=e("tbody",null,[e("tr",null,[e("td",null,"from"),e("td",null,"DOM"),e("td",null,"-"),e("td",null,[t("("),e("strong",null,"required"),t(") A DOM element or CSS selector or a function returning a DOM element")])]),e("tr",null,[e("td",null,"to"),e("td",null,"DOM"),e("td",null,"-"),e("td",null,"Same as “from”; if “to” is missing, then it is assumes that it is the same as “from”")]),e("tr",null,[e("td",null,"onToggle()"),e("td",null,"Function"),e("td",null,"-"),e("td",null,"A synchronous toggle function that will be executed immediately after the state of the initial element is saved. Use a function that toggles the state of the components so that the destination element becomes available.")]),e("tr",null,[e("td",null,"waitFor"),e("td",null,"Number/‘transitioned’/Promise"),e("td",null,"0"),e("td",null,[t("A number, ‘transitionend’ or a Promise - it will delay animation start for that number of milliseconds, or until a ‘transitionend’ event is emitted by the destination element, or until the promise is resolved (if the promise is rejected the morphing will abort, but the "),e("code",{class:"doc-token"},"toggle function"),t(" was already called)")])]),e("tr",null,[e("td",null,"duration"),e("td",null,"Number"),e("td",null,"300"),e("td",null,"The duration in milliseconds for the animation")]),e("tr",null,[e("td",null,"easing"),e("td",null,"String"),e("td",null,"‘ease-in-out’"),e("td",null,"The timing function for the animation (CSS easing format)")]),e("tr",null,[e("td",null,"delay"),e("td",null,"Number"),e("td",null,"0"),e("td",null,"The delay in milliseconds for the animation")]),e("tr",null,[e("td",null,"fill"),e("td",null,"String"),e("td",null,"‘none’"),e("td",null,"The fill mode for the animation")]),e("tr",null,[e("td",null,"style"),e("td",null,"String/Object"),e("td",null,"-"),e("td",null,"The extra style to be applied to the morphing element while it is animated (either as string or a CSSStyleDeclaration object)")]),e("tr",null,[e("td",null,"classes"),e("td",null,"String"),e("td",null,"-"),e("td",null,"The extra classes to be applied to the morphing element while it is animated (as string)")]),e("tr",null,[e("td",null,"resize"),e("td",null,"Boolean"),e("td",null,[e("em",null,"false")]),e("td",null,"Force resizing instead of the default scaling transformation")]),e("tr",null,[e("td",null,"useCSS"),e("td",null,"Boolean"),e("td",null,[e("em",null,"false")]),e("td",null,"Force use of CSS instead of the Animation API")]),e("tr",null,[e("td",null,"hideFromClone"),e("td",null,"Boolean"),e("td",null,[e("em",null,"false")]),e("td",null,"By default a clone of the initial element is used to fill the space after the element is removed - set this flag if the initial element is not removed or resizing of the space occupied by the initial element is not desired")]),e("tr",null,[e("td",null,"keepToClone"),e("td",null,"Boolean"),e("td",null,[e("em",null,"false")]),e("td",null,"By default the final element is removed from it’s final position to be animated - set this flag to keep a copy in the final position")]),e("tr",null,[e("td",null,"tween"),e("td",null,"Boolean"),e("td",null,[e("em",null,"false")]),e("td",null,"By default the final element is morphed from the position and aspect of the initial element to the ones of the final element - set this flag to use an opacity tween between the initial and final elements")]),e("tr",null,[e("td",null,"tweenFromOpacity"),e("td",null,"Number"),e("td",null,"0.6"),e("td",null,[t("If using "),e("strong",null,"tween"),t(" it is the initial opacity of the initial element (will be animated to 0) - the initial element is placed on top of the destination element")])]),e("tr",null,[e("td",null,"tweenToOpacity"),e("td",null,"Number"),e("td",null,"0.5"),e("td",null,[t("If using "),e("strong",null,"tween"),t(" it is the initial opacity of the destination element (will be animated to 1)")])]),e("tr",null,[e("td",null,"onEnd(direction, aborted)"),e("td",null,"Function"),e("td",null,"-"),e("td",null,"A function that will be called once the morphing is finalized - receives two params: “direction” is a string (‘to’ if the morphing was finished in the final state or ‘from’ if it was finished in the initial state) and “aborted” is a boolean (true means that the animation was aborted)")])],-1),D=e("ol",null,[e("li",null,"Get the aspect and position of the initial element (if a function is provided for getting the initial element it will be called)"),e("li",null,"Calculate the size and position of the container of the initial element"),e("li",null,"If another morphing was using the same element that morphing will be aborted"),e("li",null,"Execute the onToggle() function (if present)"),e("li",null,"Recalculate the size and position of the container of the initial element to check if they are changed"),e("li",null,"In the next tick (to allow Vue to process the state changes) the final element will be identified (if a function is provided for getting the final element it will be called)"),e("li",null,"If another morphing was using the same element that morphing will be aborted"),e("li",null,"Calculate the size and position of the container of the final element"),e("li",null,[t("If a "),e("strong",null,"waitFor"),t(" is provided, wait that number of milliseconds, for a ‘transitionend’ event or until the promise is resolved (if the promise is rejected then the morphing is aborted)")]),e("li",null,"Recalculate the size and position of the container of the final element to check if they are changed"),e("li",null,"Get the aspect and position of the final element"),e("li",null,"Start the animation")],-1),C=e("p",null,"Regarding the cancel() function (the return value of a call to morph()):",-1),I=e("ul",null,[e("li",null,[t("If the "),e("code",{class:"doc-token"},"cancel"),t(" function that was returned is called during steps 1 to 11 then the morphing will be aborted (the "),e("code",{class:"doc-token"},"toggle function"),t(" will still be called if the cancel comes after step 4) and the returned value will be "),e("strong",null,"false"),t(".")]),e("li",null,[t("If the "),e("code",{class:"doc-token"},"cancel"),t(" function is called between the start and end of the animation then the animation will be reversed and the returned value will be "),e("strong",null,"true"),t(".")]),e("li",null,[t("If the "),e("code",{class:"doc-token"},"cancel"),t(" function is called after the end of the animation nothing will happen and the returned value will be "),e("strong",null,"false"),t(".")])],-1),T={__name:"morph-utils",setup(B){m("_q_ex",{name:"MorphUtils",list:h(()=>import("./e.MorphUtils.js"),[])});const u=[{name:"Morph",category:"Vue Directives",path:"/vue-directives/morph"}],d=[{id:"basic-usage",title:"2. Basic usage"},{id:"morphing-lifecycle",title:"3. Morphing lifecycle"},{id:"examples",title:"4. Examples"}];return(O,n)=>(p(),f(b,{title:"Morph Utils",desc:"Morph one DOM element into another (with animation) or between two states of the same element using Quasar's morph util.",heading:"","edit-link":"quasar-utils/morph-utils",toc:d,related:u},{default:o(()=>[_,e("p",null,[t("Might also be worth to look at the "),l(w,{to:"/vue-directives/morph"},{default:o(()=>[t("Morph directive")]),_:1}),t(" which uses this util but it’s simpler to use.")]),e("h2",{id:"basic-usage",class:"doc-heading doc-h2",onClick:n[0]||(n[0]=r=>a(s)("basic-usage"))},"Basic usage"),l(a(k),null,{default:o(()=>[v,l(y)]),_:1}),x,l(g,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:o(()=>[M,S]),_:1}),e("h2",{id:"morphing-lifecycle",class:"doc-heading doc-h2",onClick:n[1]||(n[1]=r=>a(s)("morphing-lifecycle"))},"Morphing lifecycle"),D,C,I,e("h2",{id:"examples",class:"doc-heading doc-h2",onClick:n[2]||(n[2]=r=>a(s)("examples"))},"Examples"),l(i,{title:"Morphing the same element",file:"SameElement"}),l(i,{title:"Morphing a QCard from a QFabAction",file:"FabCard"}),l(i,{title:"Image gallery ",file:"ImageGallery"}),l(i,{title:"Horizontal image strip ",file:"ImageStripHorizontal"}),l(i,{title:"Vertical image strip ",file:"ImageStripVertical"})]),_:1}))}},U=c(T,[["__file","morph-utils.md"]]);export{U as default};
