import{provide as C,mergeProps as z,withCtx as $,createVNode as e,unref as l,createTextVNode as u,useSSRContext as b}from"vue";import{ssrRenderComponent as o}from"vue/server-renderer";import{c as n}from"./page-utils-C-QWsEHe.js";import{D as k}from"./DocPage-DKr-0pQn.js";import{D as i}from"./DocExample-BcaABDtE.js";import{D as f}from"./DocApi-Df9ryd6x.js";import{_ as y}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const h={__name:"chat",__ssrInlineRender:!0,setup(m){C("_q_ex",{name:"QChatMessage"});const r=[{id:"qchatmessage-api",title:"2. QChatMessage API",deep:!0},{id:"usage",title:"3. Usage"},{id:"the-basics",title:"3.1. The basics",sub:!0},{id:"customization",title:"3.2. Customization",sub:!0},{id:"slots",title:"3.3. Slots",sub:!0},{id:"sanitization",title:"3.4. Sanitization",sub:!0}];return(d,p,v,S)=>{p(o(k,z({title:"Chat Message",desc:"The QChatMessage Vue component displays a chat entry containing one or more user messages.",heading:"","edit-link":"vue-components/chat",toc:r},S),{default:$((T,a,s,t)=>{if(a)a(`<p${t}>Quasar supplies a chat component called QChatMessage which is really a chat entry that renders the data given by the props.</p><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>To mix messages with avatar and without avatar in the same thread, use a placeholder avatar image.</p></div>`),a(o(f,{file:"QChatMessage"},null,s,t)),a(`<h2 id="usage" class="doc-heading doc-h2"${t}>Usage</h2><h3 id="the-basics" class="doc-heading doc-h3"${t}>The basics</h3><div class="doc-note doc-note--tip"${t}><p class="doc-note__title"${t}>TIP</p><p${t}>Using the property <code class="doc-token"${t}>sent</code> is intended for the sender of the chat message. The other side is for received messages.</p></div>`),a(o(i,{title:"Basic",file:"Basic"},null,s,t)),a(o(i,{title:"Name",file:"Name"},null,s,t)),a(o(i,{title:"Avatar",file:"Avatar"},null,s,t)),a(o(i,{title:"Stamp",file:"Stamp"},null,s,t)),a(o(i,{title:"Label",file:"Label"},null,s,t)),a(`<h3 id="customization" class="doc-heading doc-h3"${t}>Customization</h3>`),a(o(i,{title:"Text and background color",file:"Color"},null,s,t)),a(o(i,{title:"Size",file:"Size"},null,s,t)),a(`<h3 id="slots" class="doc-heading doc-h3"${t}>Slots</h3>`),a(o(i,{title:"Default slot",file:"SlotDefault"},null,s,t)),a(o(i,{title:"Avatar/Stamp/Name slots",file:"SlotAvatarStampName"},null,s,t)),a(`<h3 id="sanitization" class="doc-heading doc-h3"${t}>Sanitization</h3><div class="doc-note doc-note--warning"${t}><p class="doc-note__title"${t}>WARNING</p><p${t}>Always sanitize values if you do not trust the origin (if the value comes from user input).</p></div>`),a(o(i,{title:"Sanitized content",file:"Sanitize"},null,s,t));else return[e("p",null,"Quasar supplies a chat component called QChatMessage which is really a chat entry that renders the data given by the props."),e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,"To mix messages with avatar and without avatar in the same thread, use a placeholder avatar image.")]),e(f,{file:"QChatMessage"}),e("h2",{id:"usage",class:"doc-heading doc-h2",onClick:c=>l(n)("usage")},"Usage",8,["onClick"]),e("h3",{id:"the-basics",class:"doc-heading doc-h3",onClick:c=>l(n)("the-basics")},"The basics",8,["onClick"]),e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[u("Using the property "),e("code",{class:"doc-token"},"sent"),u(" is intended for the sender of the chat message. The other side is for received messages.")])]),e(i,{title:"Basic",file:"Basic"}),e(i,{title:"Name",file:"Name"}),e(i,{title:"Avatar",file:"Avatar"}),e(i,{title:"Stamp",file:"Stamp"}),e(i,{title:"Label",file:"Label"}),e("h3",{id:"customization",class:"doc-heading doc-h3",onClick:c=>l(n)("customization")},"Customization",8,["onClick"]),e(i,{title:"Text and background color",file:"Color"}),e(i,{title:"Size",file:"Size"}),e("h3",{id:"slots",class:"doc-heading doc-h3",onClick:c=>l(n)("slots")},"Slots",8,["onClick"]),e(i,{title:"Default slot",file:"SlotDefault"}),e(i,{title:"Avatar/Stamp/Name slots",file:"SlotAvatarStampName"}),e("h3",{id:"sanitization",class:"doc-heading doc-h3",onClick:c=>l(n)("sanitization")},"Sanitization",8,["onClick"]),e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"Always sanitize values if you do not trust the origin (if the value comes from user input).")]),e(i,{title:"Sanitized content",file:"Sanitize"})]}),_:1},v))}}},g=h.setup;h.setup=(m,r)=>{const d=b();return(d.modules||(d.modules=new Set)).add("src/pages/vue-components/chat.md"),g?g(m,r):void 0};const J=y(h,[["__file","chat.md"]]);export{J as default};
