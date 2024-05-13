import{mergeProps as x,withCtx as c,createTextVNode as t,unref as s,createVNode as e,useSSRContext as A}from"vue";import{ssrRenderComponent as d}from"vue/server-renderer";import{c as r}from"./page-utils-C-QWsEHe.js";import{D as E,a as y}from"./DocPage-DKr-0pQn.js";import{D as h}from"./DocPrerender-DPOnWPFO.js";import{C as u}from"./CopyButton-l3ndfN49.js";import{_ as j}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"vue-router";import"@quasar/extras/fontawesome-v5";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"quasar/icon-set/svg-mdi-v6.mjs";const k={__name:"commit-conventions",__ssrInlineRender:!0,setup(b){const p=[{id:"goals",title:"2. Goals"},{id:"the-rules-of-a-great-git-commit-message",title:"3. The Rules of a Great Git Commit Message"},{id:"format-of-a-commit-message",title:"4. Format of a Commit Message"},{id:"example-of-a-commit-message",title:"4.1. Example of a Commit Message",sub:!0},{id:"message-subject-first-line-",title:"5. Message Subject (First Line)"},{id:"message-body",title:"6. Message Body"},{id:"message-footer",title:"7. Message Footer"},{id:"breaking-changes",title:"7.1. Breaking Changes",sub:!0},{id:"referencing-issues",title:"7.2. Referencing Issues",sub:!0}];return(f,w,v,C)=>{w(d(E,x({title:"Commit Conventions",desc:"Quasar commit conventions",heading:"","edit-link":"how-to-contribute/commit-conventions",toc:p},C),{default:c((T,l,m,n)=>{if(l)l(`<h2 id="goals" class="doc-heading doc-h2"${n}>Goals</h2><ul${n}><li${n}>Allow ignoring commits by git bisect (not important commits like formatting)</li><li${n}>Provide better information when browsing the history</li></ul><div class="doc-note doc-note--warning"${n}><p class="doc-note__title"${n}>WARNING</p><p${n}>This rule applies to ALL `),l(d(y,{to:"https://github.com/quasarframework"},{default:c((i,a,g,o)=>{if(a)a("Quasar repositories");else return[t("Quasar repositories")]}),_:1},m,n)),l(`.</p></div><p${n}>Well-cared log is a beautiful and useful thing. <code class="doc-token"${n}>git blame</code>, <code class="doc-token"${n}>revert</code>, <code class="doc-token"${n}>rebase</code>, <code class="doc-token"${n}>log</code>, <code class="doc-token"${n}>shortlog</code> and other subcommands come to life. Reviewing others’ commits and pull requests becomes something worth doing, and suddenly can be done independently. Understanding why something happened months or years ago becomes not only possible but efficient.</p><h2 id="the-rules-of-a-great-git-commit-message" class="doc-heading doc-h2"${n}>The Rules of a Great Git Commit Message</h2><ol${n}><li${n}>Separate subject from body with a blank line</li><li${n}>Limit the subject line to 70 characters</li><li${n}>Capitalize the subject line</li><li${n}>Do not end the subject line with a period</li><li${n}>Use the imperative mood in the subject line</li><li${n}>Wrap the body at 80 characters</li><li${n}>Use the body to explain what and why vs. how</li></ol><h2 id="format-of-a-commit-message" class="doc-heading doc-h2"${n}>Format of a Commit Message</h2>`),l(d(s(h),null,{default:c((i,a,g,o)=>{if(a)a(`<pre class="doc-code"${o}><code${o}>type(<span class="token tag"${o}><span class="token tag"${o}><span class="token punctuation"${o}>&lt;</span>scope</span><span class="token punctuation"${o}>&gt;</span></span>): <span class="token tag"${o}><span class="token tag"${o}><span class="token punctuation"${o}>&lt;</span>Subject</span><span class="token punctuation"${o}>&gt;</span></span> #<span class="token tag"${o}><span class="token tag"${o}><span class="token punctuation"${o}>&lt;</span>github-ref-id</span><span class="token punctuation"${o}>&gt;</span></span>

<span class="token tag"${o}><span class="token tag"${o}><span class="token punctuation"${o}>&lt;</span>body</span><span class="token punctuation"${o}>&gt;</span></span>

<span class="token tag"${o}><span class="token tag"${o}><span class="token punctuation"${o}>&lt;</span>footer</span><span class="token punctuation"${o}>&gt;</span></span></code></pre>`),a(d(u,null,null,g,o));else return[e("pre",{class:"doc-code"},[e("code",null,[t("type("),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("scope")]),e("span",{class:"token punctuation"},">")]),t("): "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("Subject")]),e("span",{class:"token punctuation"},">")]),t(" #"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("github-ref-id")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("body")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("footer")]),e("span",{class:"token punctuation"},">")])])]),e(u)]}),_:1},m,n)),l(`<h3 id="example-of-a-commit-message" class="doc-heading doc-h3"${n}>Example of a Commit Message</h3>`),l(d(s(h),null,{default:c((i,a,g,o)=>{if(a)a(`<pre class="doc-code"${o}><code${o}>fix(ui): Ensure Range headers adhere more closely to RFC 2616 #2310

To add new dependency use \`range-parser\`to compute the range.
It is more well-tested in the wild.

BREAKING CHANGE:
port-runner command line option has changed to runner-port.
To migrate your project, change all the commands,
where you use --port-runner to --runner-port.</code></pre>`),a(d(u,null,null,g,o));else return[e("pre",{class:"doc-code"},[e("code",null,`fix(ui): Ensure Range headers adhere more closely to RFC 2616 #2310

To add new dependency use \`range-parser\`to compute the range.
It is more well-tested in the wild.

BREAKING CHANGE:
port-runner command line option has changed to runner-port.
To migrate your project, change all the commands,
where you use --port-runner to --runner-port.`)]),e(u)]}),_:1},m,n)),l(`<h2 id="message-subject-first-line-" class="doc-heading doc-h2"${n}>Message Subject (First Line)</h2><p${n}>The first line cannot be longer than 70 characters, the second line is always blank. The type and scope should always be lowercase as shown below.</p><p${n}><strong${n}>Allowed <code class="doc-token"${n}>&lt;type&gt;</code> values:</strong></p><ul${n}><li${n}><strong${n}>feat</strong> - new feature for the user, not a new feature for build script</li><li${n}><strong${n}>fix</strong> - bug fix for the user, not a fix to a build script</li><li${n}><strong${n}>docs</strong> - documentation only changes</li><li${n}><strong${n}>style</strong> - changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)</li><li${n}><strong${n}>refactor</strong> - refactoring production code, a code change that neither fixes a bug nor adds a feature</li><li${n}><strong${n}>chore</strong> - other changes that don’t modify src or test files (<em${n}>no production code change</em>) and dependency updates</li><li${n}><strong${n}>perf</strong> - change that improves performance</li><li${n}><strong${n}>revert</strong> - reverts a previous commit</li><li${n}><strong${n}>test</strong> - adding missing tests, refactoring tests; no production code change</li><li${n}><strong${n}>build</strong> - changes that affect the build system or external dependencies (e.g. <code class="doc-token"${n}>ui/build/*</code>)</li><li${n}><strong${n}>ci</strong> - changes to our Continuous Integrations configuration files and scripts (e.g. GitHub Actions)</li></ul><p${n}><strong${n}>Example <code class="doc-token"${n}>&lt;scope&gt;</code> values:</strong></p><ul${n}><li${n}>Directory/package related: ui, cli, app-webpack, app-vite, etc.</li><li${n}>Feature related: api, TouchSwipe, QTime, etc.</li></ul><div class="doc-note doc-note--tip"${n}><p class="doc-note__title"${n}>TIP</p><p${n}>The <code class="doc-token"${n}>&lt;scope&gt;</code> can contain more values separated by ampersand(<code class="doc-token"${n}>&amp;</code>). Example: <code class="doc-token"${n}>feat(app-vite&amp;app-webpack): Add Capacitor mode</code>.</p><p${n}>The <code class="doc-token"${n}>&lt;scope&gt;</code> can be empty (e.g. if the change is global), in which case the parentheses are omitted. Example: <code class="doc-token"${n}>style: Use semicolons</code></p></div><h2 id="message-body" class="doc-heading doc-h2"${n}>Message Body</h2><ul${n}><li${n}>uses the imperative, present tense: “change” not “changed” nor “changes”</li><li${n}>includes motivation for the change and contrasts with previous behavior</li></ul><h2 id="message-footer" class="doc-heading doc-h2"${n}>Message Footer</h2><h3 id="breaking-changes" class="doc-heading doc-h3"${n}>Breaking Changes</h3><p${n}>All breaking changes have to be mentioned as a breaking change block in the footer, which should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then the description of the change, justification and migration notes.</p>`),l(d(s(h),null,{default:c((i,a,g,o)=>{if(a)a(`<pre class="doc-code"${o}><code${o}>BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: &#39;attribute&#39;,
      myBind: &#39;bind&#39;,
      myExpression: &#39;expression&#39;,
      myEval: &#39;evaluate&#39;,
      myAccessor: &#39;accessor&#39;
    }

    After:

    scope: {
      myAttr: &#39;@&#39;,
      myBind: &#39;@&#39;,
      myExpression: &#39;&amp;&#39;,
      // myEval - usually not useful, but in cases where the expression is assignable, you can use &#39;=&#39;
      myAccessor: &#39;=&#39; // in directive&#39;s template change myAccessor() to myAccessor
    }</code></pre>`),a(d(u,null,null,g,o));else return[e("pre",{class:"doc-code"},[e("code",null,`BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }

    After:

    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }`)]),e(u)]}),_:1},m,n)),l(`<h3 id="referencing-issues" class="doc-heading doc-h3"${n}>Referencing Issues</h3><p${n}>Closed issues should be listed on a separate line in the footer prefixed with “Closes” keyword like this:</p><p${n}><code class="doc-token"${n}>Closes #234</code></p><p${n}>or in the case of multiple issues:</p><p${n}><code class="doc-token"${n}>Closes #123, #245, #992</code></p>`);else return[e("h2",{id:"goals",class:"doc-heading doc-h2",onClick:i=>s(r)("goals")},"Goals",8,["onClick"]),e("ul",null,[e("li",null,"Allow ignoring commits by git bisect (not important commits like formatting)"),e("li",null,"Provide better information when browsing the history")]),e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[t("This rule applies to ALL "),e(y,{to:"https://github.com/quasarframework"},{default:c(()=>[t("Quasar repositories")]),_:1}),t(".")])]),e("p",null,[t("Well-cared log is a beautiful and useful thing. "),e("code",{class:"doc-token"},"git blame"),t(", "),e("code",{class:"doc-token"},"revert"),t(", "),e("code",{class:"doc-token"},"rebase"),t(", "),e("code",{class:"doc-token"},"log"),t(", "),e("code",{class:"doc-token"},"shortlog"),t(" and other subcommands come to life. Reviewing others’ commits and pull requests becomes something worth doing, and suddenly can be done independently. Understanding why something happened months or years ago becomes not only possible but efficient.")]),e("h2",{id:"the-rules-of-a-great-git-commit-message",class:"doc-heading doc-h2",onClick:i=>s(r)("the-rules-of-a-great-git-commit-message")},"The Rules of a Great Git Commit Message",8,["onClick"]),e("ol",null,[e("li",null,"Separate subject from body with a blank line"),e("li",null,"Limit the subject line to 70 characters"),e("li",null,"Capitalize the subject line"),e("li",null,"Do not end the subject line with a period"),e("li",null,"Use the imperative mood in the subject line"),e("li",null,"Wrap the body at 80 characters"),e("li",null,"Use the body to explain what and why vs. how")]),e("h2",{id:"format-of-a-commit-message",class:"doc-heading doc-h2",onClick:i=>s(r)("format-of-a-commit-message")},"Format of a Commit Message",8,["onClick"]),e(s(h),null,{default:c(()=>[e("pre",{class:"doc-code"},[e("code",null,[t("type("),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("scope")]),e("span",{class:"token punctuation"},">")]),t("): "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("Subject")]),e("span",{class:"token punctuation"},">")]),t(" #"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("github-ref-id")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("body")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("footer")]),e("span",{class:"token punctuation"},">")])])]),e(u)]),_:1}),e("h3",{id:"example-of-a-commit-message",class:"doc-heading doc-h3",onClick:i=>s(r)("example-of-a-commit-message")},"Example of a Commit Message",8,["onClick"]),e(s(h),null,{default:c(()=>[e("pre",{class:"doc-code"},[e("code",null,`fix(ui): Ensure Range headers adhere more closely to RFC 2616 #2310

To add new dependency use \`range-parser\`to compute the range.
It is more well-tested in the wild.

BREAKING CHANGE:
port-runner command line option has changed to runner-port.
To migrate your project, change all the commands,
where you use --port-runner to --runner-port.`)]),e(u)]),_:1}),e("h2",{id:"message-subject-first-line-",class:"doc-heading doc-h2",onClick:i=>s(r)("message-subject-first-line-")},"Message Subject (First Line)",8,["onClick"]),e("p",null,"The first line cannot be longer than 70 characters, the second line is always blank. The type and scope should always be lowercase as shown below."),e("p",null,[e("strong",null,[t("Allowed "),e("code",{class:"doc-token"},"<type>"),t(" values:")])]),e("ul",null,[e("li",null,[e("strong",null,"feat"),t(" - new feature for the user, not a new feature for build script")]),e("li",null,[e("strong",null,"fix"),t(" - bug fix for the user, not a fix to a build script")]),e("li",null,[e("strong",null,"docs"),t(" - documentation only changes")]),e("li",null,[e("strong",null,"style"),t(" - changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)")]),e("li",null,[e("strong",null,"refactor"),t(" - refactoring production code, a code change that neither fixes a bug nor adds a feature")]),e("li",null,[e("strong",null,"chore"),t(" - other changes that don’t modify src or test files ("),e("em",null,"no production code change"),t(") and dependency updates")]),e("li",null,[e("strong",null,"perf"),t(" - change that improves performance")]),e("li",null,[e("strong",null,"revert"),t(" - reverts a previous commit")]),e("li",null,[e("strong",null,"test"),t(" - adding missing tests, refactoring tests; no production code change")]),e("li",null,[e("strong",null,"build"),t(" - changes that affect the build system or external dependencies (e.g. "),e("code",{class:"doc-token"},"ui/build/*"),t(")")]),e("li",null,[e("strong",null,"ci"),t(" - changes to our Continuous Integrations configuration files and scripts (e.g. GitHub Actions)")])]),e("p",null,[e("strong",null,[t("Example "),e("code",{class:"doc-token"},"<scope>"),t(" values:")])]),e("ul",null,[e("li",null,"Directory/package related: ui, cli, app-webpack, app-vite, etc."),e("li",null,"Feature related: api, TouchSwipe, QTime, etc.")]),e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[t("The "),e("code",{class:"doc-token"},"<scope>"),t(" can contain more values separated by ampersand("),e("code",{class:"doc-token"},"&"),t("). Example: "),e("code",{class:"doc-token"},"feat(app-vite&app-webpack): Add Capacitor mode"),t(".")]),e("p",null,[t("The "),e("code",{class:"doc-token"},"<scope>"),t(" can be empty (e.g. if the change is global), in which case the parentheses are omitted. Example: "),e("code",{class:"doc-token"},"style: Use semicolons")])]),e("h2",{id:"message-body",class:"doc-heading doc-h2",onClick:i=>s(r)("message-body")},"Message Body",8,["onClick"]),e("ul",null,[e("li",null,"uses the imperative, present tense: “change” not “changed” nor “changes”"),e("li",null,"includes motivation for the change and contrasts with previous behavior")]),e("h2",{id:"message-footer",class:"doc-heading doc-h2",onClick:i=>s(r)("message-footer")},"Message Footer",8,["onClick"]),e("h3",{id:"breaking-changes",class:"doc-heading doc-h3",onClick:i=>s(r)("breaking-changes")},"Breaking Changes",8,["onClick"]),e("p",null,"All breaking changes have to be mentioned as a breaking change block in the footer, which should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then the description of the change, justification and migration notes."),e(s(h),null,{default:c(()=>[e("pre",{class:"doc-code"},[e("code",null,`BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }

    After:

    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }`)]),e(u)]),_:1}),e("h3",{id:"referencing-issues",class:"doc-heading doc-h3",onClick:i=>s(r)("referencing-issues")},"Referencing Issues",8,["onClick"]),e("p",null,"Closed issues should be listed on a separate line in the footer prefixed with “Closes” keyword like this:"),e("p",null,[e("code",{class:"doc-token"},"Closes #234")]),e("p",null,"or in the case of multiple issues:"),e("p",null,[e("code",{class:"doc-token"},"Closes #123, #245, #992")])]}),_:1},v))}}},$=k.setup;k.setup=(b,p)=>{const f=A();return(f.modules||(f.modules=new Set)).add("src/pages/how-to-contribute/commit-conventions.md"),$?$(b,p):void 0};const W=j(k,[["__file","commit-conventions.md"]]);export{W as default};
