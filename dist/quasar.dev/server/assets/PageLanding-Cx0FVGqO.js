import{resolveComponent as b,mergeProps as R,withCtx as v,unref as x,createVNode as e,openBlock as z,createBlock as C,Fragment as I,renderList as B,toDisplayString as h,createCommentVNode as re,useSSRContext as D,ref as P}from"vue";import{ssrRenderComponent as a,ssrRenderList as A,ssrInterpolate as S,ssrRenderAttrs as se,ssrRenderClass as X}from"vue/server-renderer";import{useMeta as de,scroll as ce}from"quasar";import{D as me}from"./DocStars-3se0rnZh.js";import{s as V,S as G}from"./sponsors-Bav54rlT.js";import{_ as Q,s as Z}from"../server-entry.js";import{fabLinkedin as W}from"@quasar/extras/fontawesome-v5";import{mdiChevronLeft as ue,mdiChevronRight as ge}from"@quasar/extras/mdi-v7";import"vue-router";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"quasar/icon-set/svg-mdi-v6.mjs";const N={__name:"SponsorList",__ssrInlineRender:!0,setup(y){return(n,m,_,L)=>{const t=b("q-intersection");m(a(t,R({once:""},L),{default:v((g,u,k,i)=>{if(u)u(`<div class="text-center"${i}><!--[-->`),A(x(V),(l,r)=>{u("<!--[-->"),l.length>0?(u(`<!--[--><div class="q-my-md text-capitalize text-size-16 text-weight-bold"${i}>${S(r)} Tooling</div><div class="row justify-center logos-container"${i}><!--[-->`),A(l,({src:c,name:p,href:o},d)=>{u(a(G,{key:`${r}-${d}`,src:c,name:p,href:o},null,k,i))}),u("<!--]--></div><!--]-->")):u("<!---->"),u("<!--]-->")}),u("<!--]--></div>");else return[e("div",{class:"text-center"},[(z(!0),C(I,null,B(x(V),(l,r)=>(z(),C(I,{key:r},[l.length>0?(z(),C(I,{key:0},[e("div",{class:"q-my-md text-capitalize text-size-16 text-weight-bold"},h(r)+" Tooling",1),e("div",{class:"row justify-center logos-container"},[(z(!0),C(I,null,B(l,({src:c,name:p,href:o},d)=>(z(),C(G,{key:`${r}-${d}`,src:c,name:p,href:o},null,8,["src","name","href"]))),128))])],64)):re("",!0)],64))),128))])]}),_:1},_))}}},ee=N.setup;N.setup=(y,n)=>{const m=D();return(m.modules||(m.modules=new Set)).add("src/pages/landing/SponsorList.vue"),ee?ee(y,n):void 0};const he=Q(N,[["__file","SponsorList.vue"]]),j="twitter-cards__arrow--hidden",O={__name:"TwitterCards",__ssrInlineRender:!0,setup(y){const n=P(null),m=P(j),_=P(null);let L,t=0;const g=()=>{clearTimeout(L),Date.now()-t>150?u():L=setTimeout(u,50)};function u(){const i=n.value;if(i){t=Date.now();const{scrollLeft:l,offsetWidth:r,scrollWidth:c}=i;m.value=l<=0?j:null,_.value=l+r>=c?j:null}}const k=[{author:"Naseer",handle:"Ahmed",avatar:"ibex",Title:"Software Quality Assurance Architect",message:"I am pleased to provide this recommendation for Muhammad Farhan, who I have had the privilege of working with closely during his tenure as the leader of the QA team at Sensys. Farhan consistently demonstrated exceptional skills in team and task management, making significant contributions to the success of projects. He fostered a positive working environment and actively supported his colleagues, embodying the qualities of a true team player.  I highly recommend Farhan for any roles where his skills in team and task management are valued. He has experience managing large to medium-sized teams and has demonstrated proficiency in areas such as big data and warehouse testing, ETL verification, and cybersecurity. Farhan's analytical and critical thinking skills, coupled with his technical communication abilities, make him well-equipped to build strong relationships with customers and management teams. During his tenure managing teams, Farhan effectively utilized prompts and RAG (Red, Amber, Green) indicators to enhance visibility and preemptively address potential issues.   Additionally, Farhan's expertise in designing and defining processes ensures that quality is never compromised. He has a proven track record of delivering high-quality results while leading and managing team. He is a dedicated professional who consistently delivers exceptional results, and I wholeheartedly recommend him for any position that values leadership, teamwork, and quality-driven outcomes",stamp:"03/20/24, 02:16 PM",id:"VISIBLE"},{author:"Shay",handle:"Benchorin",avatar:"Siemens Factory Automation",Title:"Director Technology & Innovation Advanced AI Systems",message:"During his eight-year tenure, Farhan consistently demonstrated a remarkable ability to understand the big picture with attention to details, analytical mindset, and strong leadership.   Farhan greatly contributed to streamlining our quality processes and system integration adaptability to the evolving needs of the technology innovation.  I am confident Farhan would be a valuable asset to any organization seeking an individual who can deliver results, inspire their team, and uphold the highest standards of product and process quality.",stamp:"09/30/23, 05:01 PM",id:"VISIBLE"},{author:"Asif",handle:"Ahmad",avatar:"LHE Consulting Inc.",Title:"Founder",message:"Farhan is knowledgeable, intelligent, committed and skilled as well as a great team player and a good leader. I am sure he'll be a great asset wherever he goes. Wish him all the best in personal and professional life.",stamp:"06/30/15, 06:33 PM",id:"VISIBLE"},{author:"Adeel",handle:"Akhtar",avatar:"Sadara Chemical Company",Title:"Sr. Process Automation Engineer",message:"Muhammad is all about commitment. I always found him up for the challenges. He is very social, friendly and full of life. With his dedication, keen eye on quality and in depth technical knowledge, he has the potential to step up the corporate ladder very quickly. I wish him all the best.",stamp:"05/16/15, 06:36 AM",id:"VISIBLE"},{author:"Muhmmad Qamar",handle:"Hayat",avatar:"ShopDev",Title:"Delivery Director",message:"Mr. Farhan was one of the best team members at SENSYS. He is very dedicated, honest and hard working. He always delivered his comprehensive and quality work on time. He works well under pressure and handle every situation very tectfully.    He is a vital member of the QA team performing Quality Assurance and Testing of the IntelliMax Product. He also has excellent knowledge competitor products.    He is one of the bright Quality Control Engineers in company having detailed eye on all quality aspects of on going projects/products. I wish him best of luck for his bright future.",stamp:"07/28/11, 05:07 AM",id:"VISIBLE"}].map(i=>({...i,avatar:`${i.avatar}`,link:`https://twitter.com/${i.handle}/status/${i.id}`}));return(i,l,r,c)=>{const p=b("q-card"),o=b("q-card-section"),d=b("q-avatar"),f=b("q-img"),w=b("q-icon"),M=b("q-btn"),ie=b("q-resize-observer");l(`<div${se(R({class:"twitter-cards row no-wrap relative-position"},c))}><div class="twitter-cards__content col row items-stretch no-wrap q-pa-xl"><!--[-->`),A(x(k),s=>{l(a(p,{key:s.id,class:"twitter-cards__entry bg-white text-dark column q-ma-md"},{default:v((be,F,H,E)=>{if(F)F(a(o,{class:"row items-center no-wrap"},{default:v((Y,$,T,q)=>{if($)$(a(d,{class:"q-mr-sm"},{default:v((fe,J,le,oe)=>{if(J)J(a(f,{src:s.avatar},null,le,oe));else return[e(f,{src:s.avatar},null,8,["src"])]}),_:2},T,q)),$(`<div class="col"${q}><div class="text-weight-bold"${q}>${S(s.author)} ${S(s.handle)}</div><div class="twitter-cards__stamp text-grey-8"${q}>@${S(s.avatar)}</div><div class="text-weight-bold"${q}>${S(s.Title)}</div></div>`),$(a(w,{name:x(W),size:"24px",color:"blue",class:"float-right"},null,T,q));else return[e(d,{class:"q-mr-sm"},{default:v(()=>[e(f,{src:s.avatar},null,8,["src"])]),_:2},1024),e("div",{class:"col"},[e("div",{class:"text-weight-bold"},h(s.author)+" "+h(s.handle),1),e("div",{class:"twitter-cards__stamp text-grey-8"},"@"+h(s.avatar),1),e("div",{class:"text-weight-bold"},h(s.Title),1)]),e(w,{name:x(W),size:"24px",color:"blue",class:"float-right"},null,8,["name"])]}),_:2},H,E)),F(a(o,{class:"q-py-none col"},{default:v((Y,$,T,q)=>{if($)$(`<div${q}>${S(s.message)}</div><div class="twitter-cards__stamp text-grey-8 q-pt-sm"${q}>${S(s.stamp)}</div>`);else return[e("div",null,h(s.message),1),e("div",{class:"twitter-cards__stamp text-grey-8 q-pt-sm"},h(s.stamp),1)]}),_:2},H,E)),F(a(o,null,{default:v((Y,$,T,q)=>{if($)$(a(M,{class:"twitter-cards__read-btn text-weight-bold full-width",href:s.link,target:"_blank",label:"Read on LinkedIn",size:"12px",padding:"","no-caps":"",flat:"",color:"blue-8"},null,T,q));else return[e(M,{class:"twitter-cards__read-btn text-weight-bold full-width",href:s.link,target:"_blank",label:"Read on LinkedIn",size:"12px",padding:"","no-caps":"",flat:"",color:"blue-8"},null,8,["href"])]}),_:2},H,E));else return[e(o,{class:"row items-center no-wrap"},{default:v(()=>[e(d,{class:"q-mr-sm"},{default:v(()=>[e(f,{src:s.avatar},null,8,["src"])]),_:2},1024),e("div",{class:"col"},[e("div",{class:"text-weight-bold"},h(s.author)+" "+h(s.handle),1),e("div",{class:"twitter-cards__stamp text-grey-8"},"@"+h(s.avatar),1),e("div",{class:"text-weight-bold"},h(s.Title),1)]),e(w,{name:x(W),size:"24px",color:"blue",class:"float-right"},null,8,["name"])]),_:2},1024),e(o,{class:"q-py-none col"},{default:v(()=>[e("div",null,h(s.message),1),e("div",{class:"twitter-cards__stamp text-grey-8 q-pt-sm"},h(s.stamp),1)]),_:2},1024),e(o,null,{default:v(()=>[e(M,{class:"twitter-cards__read-btn text-weight-bold full-width",href:s.link,target:"_blank",label:"Read on LinkedIn",size:"12px",padding:"","no-caps":"",flat:"",color:"blue-8"},null,8,["href"])]),_:2},1024)]}),_:2},r))}),l("<!--]-->"),l(a(ie,{onResize:g,debounce:"0"},null,r)),l(`</div><div class="${X([m.value,"twitter-cards__arrow twitter-cards__arrow--left cursor-pointer absolute-left row items-center"])}">`),l(a(w,{name:x(ue),size:"56px",color:"brand-primary"},null,r)),l(`</div><div class="${X([_.value,"twitter-cards__arrow twitter-cards__arrow--right cursor-pointer absolute-right row items-center"])}">`),l(a(w,{name:x(ge),size:"56px",color:"brand-primary"},null,r)),l("</div></div>")}}},te=O.setup;O.setup=(y,n)=>{const m=D();return(m.modules||(m.modules=new Set)).add("src/pages/landing/TwitterCards.vue"),te?te(y,n):void 0};const ve=Q(O,[["__file","TwitterCards.vue"]]),K={__name:"WhyQuasarCard",__ssrInlineRender:!0,props:{icon:String,title:String,body:String,btnLabel:String,btnLink:String},setup(y){const n=y;return(m,_,L,t)=>{const g=b("q-card"),u=b("q-card-section"),k=b("q-icon"),i=b("q-btn");_(a(g,R({class:"why-quasar-card bg-white q-px-lg text-center column justify-between items-center shadow-bottom-large"},t),{default:v((l,r,c,p)=>{if(r)r(a(u,{class:"q-pa-none"},{default:v((o,d,f,w)=>{if(d)d(a(k,{size:"xl",name:n.icon},null,f,w)),d(`<div class="why-quasar-card__title text-uppercase heading--medium q-py-md"${w}>${S(n.title)}</div><div class="text-dark text-size-16 text-weight-medium q-pb-md letter-spacing-300 primary-line-height"${w}>${S(n.body)}</div>`);else return[e(k,{size:"xl",name:n.icon},null,8,["name"]),e("div",{class:"why-quasar-card__title text-uppercase heading--medium q-py-md"},h(n.title),1),e("div",{class:"text-dark text-size-16 text-weight-medium q-pb-md letter-spacing-300 primary-line-height"},h(n.body),1)]}),_:1},c,p)),r(a(u,{class:"q-pa-none"},{default:v((o,d,f,w)=>{if(d)d(a(i,{outline:"",class:"call-to-action-btn no-border-radius",color:"brand-accent",label:n.btnLabel,to:n.btnLink},null,f,w));else return[e(i,{outline:"",class:"call-to-action-btn no-border-radius",color:"brand-accent",label:n.btnLabel,to:n.btnLink},null,8,["label","to"])]}),_:1},c,p));else return[e(u,{class:"q-pa-none"},{default:v(()=>[e(k,{size:"xl",name:n.icon},null,8,["name"]),e("div",{class:"why-quasar-card__title text-uppercase heading--medium q-py-md"},h(n.title),1),e("div",{class:"text-dark text-size-16 text-weight-medium q-pb-md letter-spacing-300 primary-line-height"},h(n.body),1)]),_:1}),e(u,{class:"q-pa-none"},{default:v(()=>[e(i,{outline:"",class:"call-to-action-btn no-border-radius",color:"brand-accent",label:n.btnLabel,to:n.btnLink},null,8,["label","to"])]),_:1})]}),_:1},L))}}},ae=K.setup;K.setup=(y,n)=>{const m=D();return(m.modules||(m.modules=new Set)).add("src/pages/landing/WhyQuasarCard.vue"),ae?ae(y,n):void 0};const pe=Q(K,[["__file","WhyQuasarCard.vue"]]),U={__name:"PageLanding",__ssrInlineRender:!0,setup(y){de({title:"Quasar Framework",titleTemplate:""});const n=[{icon:"img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg",title:"Top Class Components",body:"A library of more than 70 high performance customizable Material Design web components for all your needs",btnLabel:"Browse components",btnLink:"/components"},{icon:"img:https://cdn.quasar.dev/img/custom-svg-icons/source.svg",title:"One codebase many integrations",body:"Keep your favorite technology, we provide all the needed integrations out of the box.",btnLabel:"Discover Integrations",btnLink:"/integrations"},{icon:"img:https://cdn.quasar.dev/img/custom-svg-icons/documentation.svg",title:"Great documentation",body:"All the details you deserve to start working properly. Every star-pilot needs a good manual.",btnLabel:"Get Started",btnLink:"/start/quick-start"}];function m(L){const t=document.getElementById(L);t&&ce.setVerticalScrollPosition(window,t.offsetTop,400)}const _={whyQuasar:()=>m("why-quasar-section"),sponsors:()=>m("sponsors-section")};return(L,t,g,u)=>{const k=b("q-img"),i=b("q-btn"),l=b("q-icon");t(`<div${se(R({class:"landing-page q-px-lg doc-brand"},u))}>`),t(a(me,null,null,g)),t('<div><div class="column items-center intro-section letter-spacing-300">'),t(a(k,{src:"quasar-api/logo.png",width:"250px",height:"255px"},null,g)),t('<h1 class="letter-spacing-375 landing-my-large text-center text-white text-size-20 primary-line-height"> Next genertaion AI lab </h1>'),t(a(i,{label:"Are you ready to lift off with Automation?",class:"call-to-action-btn shadow-bottom-small",onClick:_.whyQuasar},null,g)),t(a(i,{flat:"",round:"",icon:"arrow_downward",class:"text-white q-mt-md",size:"lg",padding:"none",onClick:_.whyQuasar},null,g)),t('<div class="intro-section__sponsors-heading q-mt-xl text-weight-bold text-brand-primary text-size-16 text-capitalize"> Our Platinum Work </div><div class="row justify-center full-width"><!--[-->'),A(x(V).platinum,({src:r,name:c,href:p},o)=>{t(a(G,{key:o,src:r,name:c,href:p},null,g))}),t("<!--]--></div>"),t(a(i,{flat:"",padding:"0 8px","text-color":"white-54","no-caps":"",label:"Full sponsor's list",class:"btn-underline text-size-16 letter-spacing-300",onClick:_.sponsors},null,g)),t('</div><div class="q-my-xl" id="why-quasar-section"><h2 class="heading heading--large">Why should you choose Genislab?</h2><div class="q-gutter-lg row justify-center"><!--[-->'),A(n,({icon:r,title:c,body:p,btnLabel:o,btnLink:d},f)=>{t(a(pe,{key:f,icon:r,title:c,body:p,"btn-label":o,"btn-link":d},null,g))}),t('<!--]--></div></div><div class="showcase-section"><div class="column items-center">'),t(a(l,{size:"xl",name:"img:https://cdn.quasar.dev/img/custom-svg-icons/astronaut.svg"},null,g)),t('<h2 class="heading heading--large q-my-lg">What my colleques think of Me</h2><q class="heading heading--small"> See recommedations I received from team members. <br></q></div>'),t(a(ve,{class:"q-mt-xl"},null,g)),t('</div><div class="support-quasar-section q-px-lg row justify-center"><div class="support-quasar-section__content"><h2 class="text-uppercase heading--large support-quasar-section__title">If you have any topic to discuss, I would love to collaborate and contribute , please contact!</h2><div class="heading--small"> Are you looking for a work, or wants to upskill yourself, needs career or technology advice, don&#39;t hesitate to contact me. </div><q class="q-my-md heading--quote primary-line-height landing-my-large"></q>'),t(a(i,{label:"Connect me at LinkedIn",class:"call-to-action-btn shadow-bottom-small",href:"https://linkedin.com/in/engr-farhan",target:"_blank"},null,g)),t('</div></div><div class="text-center sponsors-section" id="sponsors-section">'),t(a(l,{size:"xl",name:"img:https://cdn.quasar.dev/img/custom-svg-icons/medal.svg"},null,g)),t('<h2 class="heading heading--large">My Toolings Chain</h2><div class="heading heading--small"></div><div class="q-pt-lg">'),t(a(he,null,null,g)),t('</div></div><div class="text-center social-channels-call-to-action">'),t(a(k,{src:"https://cdn.quasar.dev/img/landing-page/planet.png",height:"600px"},{default:v((r,c,p,o)=>{if(c)c(`<div class="bg-transparent absolute-bottom"${o}>`),c(a(l,{size:"xl",name:"img:https://cdn.quasar.dev/img/custom-svg-icons/satellite.svg"},null,p,o)),c(`<div class="heading heading--large"${o}>Don&#39;t miss the news</div><div class="heading heading--small"${o}>Follow our social pages to stay up to date</div><div class="landing-mb--large row reverse justify-center q-mt-md q-gutter-md"${o}><!--[-->`),A(x(Z).children.slice(1),(d,f)=>{c(a(i,{key:f,label:d.name,class:"call-to-action-btn no-border-radius",color:"brand-accent",outline:"",href:d.path,target:"__blank"},null,p,o))}),c("<!--]--></div></div>");else return[e("div",{class:"bg-transparent absolute-bottom"},[e(l,{size:"xl",name:"img:https://cdn.quasar.dev/img/custom-svg-icons/satellite.svg"}),e("div",{class:"heading heading--large"},"Don't miss the news"),e("div",{class:"heading heading--small"},"Follow our social pages to stay up to date"),e("div",{class:"landing-mb--large row reverse justify-center q-mt-md q-gutter-md"},[(z(!0),C(I,null,B(x(Z).children.slice(1),(d,f)=>(z(),C(i,{key:f,label:d.name,class:"call-to-action-btn no-border-radius",color:"brand-accent",outline:"",href:d.path,target:"__blank"},null,8,["label","href"]))),128))])])]}),_:1},g)),t("</div></div></div>")}}},ne=U.setup;U.setup=(y,n)=>{const m=D();return(m.modules||(m.modules=new Set)).add("src/pages/landing/PageLanding.vue"),ne?ne(y,n):void 0};const Te=Q(U,[["__file","PageLanding.vue"]]);export{Te as default};
