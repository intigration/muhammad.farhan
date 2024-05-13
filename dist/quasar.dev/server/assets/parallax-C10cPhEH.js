import{provide as C,mergeProps as P,withCtx as d,createTextVNode as a,createVNode as t,unref as c,useSSRContext as Q}from"vue";import{ssrRenderComponent as i}from"vue/server-renderer";import{c as g}from"./page-utils-C-QWsEHe.js";import{D as S,a as u}from"./DocPage-DKr-0pQn.js";import{D as n}from"./DocExample-BcaABDtE.js";import{D as b}from"./DocApi-Df9ryd6x.js";import{_ as N}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const p={__name:"parallax",__ssrInlineRender:!0,setup(f){C("_q_ex",{name:"QParallax"});const m=[{name:"Video",category:"Vue Components",path:"/vue-components/video"}],h=[{id:"qparallax-api",title:"2. QParallax API",deep:!0},{id:"usage",title:"3. Usage"},{id:"image-background",title:"3.1. Image background",sub:!0},{id:"video-background",title:"3.2. Video background",sub:!0},{id:"custom-speed",title:"3.3. Custom speed",sub:!0},{id:"using-slot",title:"3.4. Using slot",sub:!0}];return(R,k,w,x)=>{k(i(S,P({title:"Parallax",desc:"The QParallax Vue component makes it easy to embed a parallax scrolling effect into a page.",heading:"","edit-link":"vue-components/parallax",toc:h,related:m},x),{default:d((V,o,l,e)=>{if(o)o(`<p${e}>Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion.</p><p${e}>QParallax takes care of a lot of quirks, including image/video size which can actually be smaller than the window width/height.</p>`),o(i(b,{file:"QParallax"},null,l,e)),o(`<h2 id="usage" class="doc-heading doc-h2"${e}>Usage</h2><div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>Scrolling container</p><p${e}>Please read `),o(i(u,{to:"/vue-components/scroll-observer#determining-scrolling-container"},{default:d((r,s,$,y)=>{if(s)s("here");else return[a("here")]}),_:1},l,e)),o(` about how Quasar determines the container to attach scrolling events to.</p></div><h3 id="image-background" class="doc-heading doc-h3"${e}>Image background</h3>`),o(i(n,{title:"Image background",file:"Image"},null,l,e)),o(`<h3 id="video-background" class="doc-heading doc-h3"${e}>Video background</h3><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>On some iOS platforms there may be problems regarding the autoplay feature of the native <code class="doc-token"${e}>&lt;video&gt;</code> tag. `),o(i(u,{to:"https://webkit.org/blog/6784/new-video-policies-for-ios/"},{default:d((r,s,$,y)=>{if(s)s("Reference");else return[a("Reference")]}),_:1},l,e)),o(`. QParallax and Quasar are not interfering in any way with the client browser’s ability/restrictions on the <code class="doc-token"${e}>&lt;video&gt;</code> tag.</p></div><div class="doc-note doc-note--warning"${e}><p class="doc-note__title"${e}>WARNING</p><p${e}>When using the <code class="doc-token"${e}>video</code> tag inside QParallax, you <strong${e}>must</strong> provide the <code class="doc-token"${e}>width</code> and <code class="doc-token"${e}>height</code> attributes in order for QParallax to work properly because of the intrinsic resizing capabilities of this type of media. Also, be aware that the actual video width and height are not available until the video’s metadata has been loaded.</p></div>`),o(i(n,{title:"Custom height with video background",file:"Video"},null,l,e)),o(`<h3 id="custom-speed" class="doc-heading doc-h3"${e}>Custom speed</h3>`),o(i(n,{title:"Custom speed",file:"Speed"},null,l,e)),o(`<h3 id="using-slot" class="doc-heading doc-h3"${e}>Using slot</h3>`),o(i(n,{title:"Using the slot",file:"ScopedSlot"},null,l,e));else return[t("p",null,"Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion."),t("p",null,"QParallax takes care of a lot of quirks, including image/video size which can actually be smaller than the window width/height."),t(b,{file:"QParallax"}),t("h2",{id:"usage",class:"doc-heading doc-h2",onClick:r=>c(g)("usage")},"Usage",8,["onClick"]),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"Scrolling container"),t("p",null,[a("Please read "),t(u,{to:"/vue-components/scroll-observer#determining-scrolling-container"},{default:d(()=>[a("here")]),_:1}),a(" about how Quasar determines the container to attach scrolling events to.")])]),t("h3",{id:"image-background",class:"doc-heading doc-h3",onClick:r=>c(g)("image-background")},"Image background",8,["onClick"]),t(n,{title:"Image background",file:"Image"}),t("h3",{id:"video-background",class:"doc-heading doc-h3",onClick:r=>c(g)("video-background")},"Video background",8,["onClick"]),t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("p",null,[a("On some iOS platforms there may be problems regarding the autoplay feature of the native "),t("code",{class:"doc-token"},"<video>"),a(" tag. "),t(u,{to:"https://webkit.org/blog/6784/new-video-policies-for-ios/"},{default:d(()=>[a("Reference")]),_:1}),a(". QParallax and Quasar are not interfering in any way with the client browser’s ability/restrictions on the "),t("code",{class:"doc-token"},"<video>"),a(" tag.")])]),t("div",{class:"doc-note doc-note--warning"},[t("p",{class:"doc-note__title"},"WARNING"),t("p",null,[a("When using the "),t("code",{class:"doc-token"},"video"),a(" tag inside QParallax, you "),t("strong",null,"must"),a(" provide the "),t("code",{class:"doc-token"},"width"),a(" and "),t("code",{class:"doc-token"},"height"),a(" attributes in order for QParallax to work properly because of the intrinsic resizing capabilities of this type of media. Also, be aware that the actual video width and height are not available until the video’s metadata has been loaded.")])]),t(n,{title:"Custom height with video background",file:"Video"}),t("h3",{id:"custom-speed",class:"doc-heading doc-h3",onClick:r=>c(g)("custom-speed")},"Custom speed",8,["onClick"]),t(n,{title:"Custom speed",file:"Speed"}),t("h3",{id:"using-slot",class:"doc-heading doc-h3",onClick:r=>c(g)("using-slot")},"Using slot",8,["onClick"]),t(n,{title:"Using the slot",file:"ScopedSlot"})]}),_:1},w))}}},v=p.setup;p.setup=(f,m)=>{const h=Q();return(h.modules||(h.modules=new Set)).add("src/pages/vue-components/parallax.md"),v?v(f,m):void 0};const Z=N(p,[["__file","parallax.md"]]);export{Z as default};
