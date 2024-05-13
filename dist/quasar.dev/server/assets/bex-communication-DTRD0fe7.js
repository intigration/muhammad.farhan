import{mergeProps as T,withCtx as c,unref as o,createVNode as n,createTextVNode as a,useSSRContext as B}from"vue";import{ssrRenderComponent as p}from"vue/server-renderer";import{c as k}from"./page-utils-C-QWsEHe.js";import{D as E}from"./DocPage-DKr-0pQn.js";import{D as u}from"./DocPrerender-DPOnWPFO.js";import{C as i}from"./CopyButton-l3ndfN49.js";import{_ as x}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const f={__name:"bex-communication",__ssrInlineRender:!0,setup($){const h=[{id:"communication-rules",title:"2. Communication Rules"},{id:"the-bridge",title:"3. The Bridge"},{id:"trigger-an-event-and-wait-for-the-response",title:"3.1. Trigger an event and wait for the response",sub:!0},{id:"listen-for-an-event-and-sending-a-response",title:"3.2. Listen for an event and sending a response",sub:!0},{id:"clean-up-your-listeners",title:"3.3. Clean up your listeners",sub:!0}];return(g,v,b,y)=>{v(p(E,T({title:"BEX Communication",desc:"(@quasar/app-vite) How to communicate between different parts of your Browser Extension (BEX) in Quasar.",overline:"Quasar CLI with Vite - @quasar/app-vite",heading:"","edit-link":"quasar-cli-vite/developing-browser-extensions/bex-communication",toc:h},y),{default:c((C,l,m,s)=>{if(l)l(`<p${s}>Allowing a Quasar App to communicate with the various parts of the BEX is essential. Quasar closes this gap using a <code class="doc-token"${s}>bridge</code>.</p><p${s}>There are 4 areas in a BEX which will need a communication layer:</p><ol${s}><li${s}>The Quasar App itself - this is true for all types of BEX i.e Popup, Options Page, Dev Tools or Web Page</li><li${s}>Background Script</li><li${s}>Content Script</li><li${s}>The web page that the BEX is running on</li></ol><h2 id="communication-rules" class="doc-heading doc-h2"${s}>Communication Rules</h2><p${s}>There is a fundamental rule to understand with the communication bridge in Quasar.</p><p${s}><strong${s}>Not all BEX types have a content script</strong> - Only BEX which run in the context of a web page will have a content script. This is how browser extensions in general work. This means if you’re adding a listener for an event on a content script and trying to trigger it from a Quasar BEX running as Dev Tools, Options Page or Popup - <strong${s}>it won’t work</strong>.</p><p${s}>If you want to allow your Dev Tools, Popup or Options Page BEX to communicate with a web page, you will need to use the background script as a proxy. You would do this by:</p><ol${s}><li${s}>Adding a listener on the background script which in turn emits another event.</li><li${s}>Add a listener to your Quasar App running in the Web Page context which listens for the event the background script is raising</li><li${s}>Emitting the event to your background script from your Dev Tools, Popup or Options Page.</li></ol><p${s}>Once you get your head around this concept, there are no limits to how the BEX can communicate with each part.</p><h2 id="the-bridge" class="doc-heading doc-h2"${s}>The Bridge</h2><p${s}>The bridge is a promise based event system which is shared between all parts of the BEX and as such allows you to listen for events in your Quasar App, emit them from other parts or vice versa. This is what gives Quasar BEX mode it’s power.</p><p${s}>To access the bridge from within your Quasar App you can use <code class="doc-token"${s}>$q.bex</code>. In other areas, the bridge is made available via the <code class="doc-token"${s}>bridge</code> parameter in the respective hook files.</p><p${s}>Let’s see how it works.</p><h3 id="trigger-an-event-and-wait-for-the-response" class="doc-heading doc-h3"${s}>Trigger an event and wait for the response</h3>`),l(p(o(u),null,{default:c((r,e,d,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}><span class="token keyword"${t}>const</span> <span class="token punctuation"${t}>{</span> data <span class="token punctuation"${t}>}</span> <span class="token operator"${t}>=</span> <span class="token keyword"${t}>await</span> bridge<span class="token punctuation"${t}>.</span><span class="token function"${t}>send</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;some.event&#39;</span><span class="token punctuation"${t}>,</span> <span class="token punctuation"${t}>{</span> <span class="token literal-property property"${t}>someKey</span><span class="token operator"${t}>:</span> <span class="token string"${t}>&#39;aValue&#39;</span> <span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span>
console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;Some response from the other side&#39;</span><span class="token punctuation"${t}>,</span> data<span class="token punctuation"${t}>)</span></code></pre>`),e(p(i,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" data "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(" bridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some.event'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"someKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'aValue'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some response from the other side'"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},")")])]),n(i)]}),_:1},m,s)),l(`<h3 id="listen-for-an-event-and-sending-a-response" class="doc-heading doc-h3"${s}>Listen for an event and sending a response</h3><p${s}>You can respond to let the caller know the operation is done. You can optionally return back some data too.</p>`),l(p(o(u),null,{default:c((r,e,d,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>bridge<span class="token punctuation"${t}>.</span><span class="token function"${t}>on</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;some.event&#39;</span><span class="token punctuation"${t}>,</span> <span class="token punctuation"${t}>(</span><span class="token parameter"${t}><span class="token punctuation"${t}>{</span> data<span class="token punctuation"${t}>,</span> respond <span class="token punctuation"${t}>}</span></span><span class="token punctuation"${t}>)</span> <span class="token operator"${t}>=&gt;</span> <span class="token punctuation"${t}>{</span>
  console<span class="token punctuation"${t}>.</span><span class="token function"${t}>log</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;Event receieved, responding...&#39;</span><span class="token punctuation"${t}>)</span>
  <span class="token function"${t}>respond</span><span class="token punctuation"${t}>(</span>data<span class="token punctuation"${t}>.</span>someKey <span class="token operator"${t}>+</span> <span class="token string"${t}>&#39; hey!&#39;</span><span class="token punctuation"${t}>)</span>
<span class="token punctuation"${t}>}</span><span class="token punctuation"${t}>)</span></code></pre>`),e(p(i,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a("bridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some.event'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" data"),n("span",{class:"token punctuation"},","),a(" respond "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Event receieved, responding...'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("someKey "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token string"},"' hey!'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(i)]}),_:1},m,s)),l(`<div class="doc-note doc-note--warning"${s}><p class="doc-note__title"${s}>WARNING</p><p${s}>If you omit <code class="doc-token"${s}>respond()</code> the promise on <code class="doc-token"${s}>.send()</code> will not resolve.</p></div><p${s}>The Quasar bridge does some work behind the scenes to convert the normal event based communication into promises and as such, in order for the promise to resolve, we need to call <code class="doc-token"${s}>respond</code>.</p><h3 id="clean-up-your-listeners" class="doc-heading doc-h3"${s}>Clean up your listeners</h3>`),l(p(o(u),null,{default:c((r,e,d,t)=>{if(e)e(`<pre class="doc-code"${t}><code${t}>bridge<span class="token punctuation"${t}>.</span><span class="token function"${t}>off</span><span class="token punctuation"${t}>(</span><span class="token string"${t}>&#39;some.event&#39;</span><span class="token punctuation"${t}>,</span> <span class="token keyword"${t}>this</span><span class="token punctuation"${t}>.</span>someFunction<span class="token punctuation"${t}>)</span></code></pre>`),e(p(i,null,null,d,t));else return[n("pre",{class:"doc-code"},[n("code",null,[a("bridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"off"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some.event'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("someFunction"),n("span",{class:"token punctuation"},")")])]),n(i)]}),_:1},m,s)),l(`<div class="doc-note doc-note--tip"${s}><p class="doc-note__title"${s}>TIP</p><p${s}>The bridge also does some work to split large data which is too big to be transmitted in one go due to the browser extension 60mb data transfer limit. In order for this to happen, the payload must be an array.</p></div>`);else return[n("p",null,[a("Allowing a Quasar App to communicate with the various parts of the BEX is essential. Quasar closes this gap using a "),n("code",{class:"doc-token"},"bridge"),a(".")]),n("p",null,"There are 4 areas in a BEX which will need a communication layer:"),n("ol",null,[n("li",null,"The Quasar App itself - this is true for all types of BEX i.e Popup, Options Page, Dev Tools or Web Page"),n("li",null,"Background Script"),n("li",null,"Content Script"),n("li",null,"The web page that the BEX is running on")]),n("h2",{id:"communication-rules",class:"doc-heading doc-h2",onClick:r=>o(k)("communication-rules")},"Communication Rules",8,["onClick"]),n("p",null,"There is a fundamental rule to understand with the communication bridge in Quasar."),n("p",null,[n("strong",null,"Not all BEX types have a content script"),a(" - Only BEX which run in the context of a web page will have a content script. This is how browser extensions in general work. This means if you’re adding a listener for an event on a content script and trying to trigger it from a Quasar BEX running as Dev Tools, Options Page or Popup - "),n("strong",null,"it won’t work"),a(".")]),n("p",null,"If you want to allow your Dev Tools, Popup or Options Page BEX to communicate with a web page, you will need to use the background script as a proxy. You would do this by:"),n("ol",null,[n("li",null,"Adding a listener on the background script which in turn emits another event."),n("li",null,"Add a listener to your Quasar App running in the Web Page context which listens for the event the background script is raising"),n("li",null,"Emitting the event to your background script from your Dev Tools, Popup or Options Page.")]),n("p",null,"Once you get your head around this concept, there are no limits to how the BEX can communicate with each part."),n("h2",{id:"the-bridge",class:"doc-heading doc-h2",onClick:r=>o(k)("the-bridge")},"The Bridge",8,["onClick"]),n("p",null,"The bridge is a promise based event system which is shared between all parts of the BEX and as such allows you to listen for events in your Quasar App, emit them from other parts or vice versa. This is what gives Quasar BEX mode it’s power."),n("p",null,[a("To access the bridge from within your Quasar App you can use "),n("code",{class:"doc-token"},"$q.bex"),a(". In other areas, the bridge is made available via the "),n("code",{class:"doc-token"},"bridge"),a(" parameter in the respective hook files.")]),n("p",null,"Let’s see how it works."),n("h3",{id:"trigger-an-event-and-wait-for-the-response",class:"doc-heading doc-h3",onClick:r=>o(k)("trigger-an-event-and-wait-for-the-response")},"Trigger an event and wait for the response",8,["onClick"]),n(o(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" data "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"await"),a(" bridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some.event'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"someKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'aValue'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Some response from the other side'"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},")")])]),n(i)]),_:1}),n("h3",{id:"listen-for-an-event-and-sending-a-response",class:"doc-heading doc-h3",onClick:r=>o(k)("listen-for-an-event-and-sending-a-response")},"Listen for an event and sending a response",8,["onClick"]),n("p",null,"You can respond to let the caller know the operation is done. You can optionally return back some data too."),n(o(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("bridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some.event'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" data"),n("span",{class:"token punctuation"},","),a(" respond "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Event receieved, responding...'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("someKey "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token string"},"' hey!'"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])]),n(i)]),_:1}),n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,[a("If you omit "),n("code",{class:"doc-token"},"respond()"),a(" the promise on "),n("code",{class:"doc-token"},".send()"),a(" will not resolve.")])]),n("p",null,[a("The Quasar bridge does some work behind the scenes to convert the normal event based communication into promises and as such, in order for the promise to resolve, we need to call "),n("code",{class:"doc-token"},"respond"),a(".")]),n("h3",{id:"clean-up-your-listeners",class:"doc-heading doc-h3",onClick:r=>o(k)("clean-up-your-listeners")},"Clean up your listeners",8,["onClick"]),n(o(u),null,{default:c(()=>[n("pre",{class:"doc-code"},[n("code",null,[a("bridge"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"off"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'some.event'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),a("someFunction"),n("span",{class:"token punctuation"},")")])]),n(i)]),_:1}),n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"The bridge also does some work to split large data which is too big to be transmitted in one go due to the browser extension 60mb data transfer limit. In order for this to happen, the payload must be an array.")])]}),_:1},b))}}},w=f.setup;f.setup=($,h)=>{const g=B();return(g.modules||(g.modules=new Set)).add("src/pages/quasar-cli-vite/developing-browser-extensions/bex-communication.md"),w?w($,h):void 0};const Y=x(f,[["__file","bex-communication.md"]]);export{Y as default};
