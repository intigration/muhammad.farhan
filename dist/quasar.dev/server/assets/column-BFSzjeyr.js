import{provide as b,resolveComponent as C,mergeProps as $,withCtx as u,createTextVNode as l,createVNode as t,unref as s,useSSRContext as F}from"vue";import{ssrRenderComponent as n}from"vue/server-renderer";import{c}from"./page-utils-C-QWsEHe.js";import{D as z,a as p}from"./DocPage-DKr-0pQn.js";import{D as i}from"./DocExample-BcaABDtE.js";import{_ as q}from"../server-entry.js";import"quasar";import"@quasar/extras/mdi-v6";import"@quasar/extras/fontawesome-v6";import"@quasar/extras/mdi-v7";import"./DocCode-BVg0tuSc.js";import"prismjs";import"./CopyButton-l3ndfN49.js";import"./DocCodepen-BPVszLIH.js";import"./utils-DKnLoYai.js";import"./DocCardTitle-BSnqQsiz.js";import"vue-router";import"@quasar/extras/fontawesome-v5";import"quasar/icon-set/svg-mdi-v6.mjs";const g={__name:"column",__ssrInlineRender:!0,setup(m){b("_q_ex",{name:"grid"});const h=[{name:"Introduction to Flexbox",category:"Flex Grid",path:"/layout/grid/introduction-to-flexbox"},{name:"Grid Row",category:"Flex Grid",path:"/layout/grid/row"},{name:"Grid Gutter",category:"Flex Grid",path:"/layout/grid/gutter"},{name:"Flex Playground",category:"Flex Grid",path:"/layout/grid/flex-playground"}],d=[{id:"equal-height",title:"2. Equal-height"},{id:"setting-one-row-height",title:"3. Setting one row height"},{id:"variable-height-content",title:"4. Variable height content"},{id:"responsive-classes",title:"5. Responsive classes"},{id:"all-breakpoints",title:"5.1. All breakpoints",sub:!0},{id:"mix-and-match",title:"5.2. Mix and match",sub:!0},{id:"alignment",title:"5.3. Alignment",sub:!0},{id:"wrapping",title:"5.4. Wrapping",sub:!0},{id:"reordering",title:"5.5. Reordering",sub:!0},{id:"nesting",title:"5.6. Nesting",sub:!0},{id:"flex-grid-playground",title:"6. Flex Grid Playground"}];return(A,x,k,v)=>{const f=C("q-btn");x(n(z,$({title:"Grid Column",desc:"How to use the Quasar grid for columns.",heading:"","edit-link":"layout/grid/column",toc:d,related:h},v),{default:u((R,o,a,e)=>{if(o)o(`<p${e}>In the hope that you’ve previously read the `),o(n(p,{to:"/layout/grid/introduction-to-flexbox"},{default:u((r,w,S,T)=>{if(w)w("Introduction to Flexbox");else return[l("Introduction to Flexbox")]}),_:1},a,e)),o(` theory, let’s get deeper into Columns.</p><p${e}>Utilize breakpoint-specific row classes for equal-height rows. Add any number of unit-less classes for each breakpoint you need and every row will be the same height.</p><h2 id="equal-height" class="doc-heading doc-h2"${e}>Equal-height</h2><p${e}>For example, here are two grid layouts that apply to every device and viewport, from xs to xl.</p>`),o(n(i,{title:"Equal Height Example",file:"ColumnEqualWidth"},null,a,e)),o(`<h2 id="setting-one-row-height" class="doc-heading doc-h2"${e}>Setting one row height</h2><p${e}>Auto-layout for flexbox grid rows also means you can set the height of one row and the others will automatically resize around it. You may use predefined grid classes (as shown below) or inline heights. Note that the other rows will resize no matter the height of the center row.</p>`),o(n(i,{title:"Setting one row height",file:"ColumnRowWidth"},null,a,e)),o(`<h2 id="variable-height-content" class="doc-heading doc-h2"${e}>Variable height content</h2><p${e}>Using the <code class="doc-token"${e}>col-{breakpoint}-auto</code> classes, rows can size itself based on the natural height of its content. This is super handy with single line content like inputs, numbers, etc. This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven row sizes as viewport height changes.</p>`),o(n(i,{title:"Variable height content",file:"ColumnVariableWidth"},null,a,e)),o(`<h2 id="responsive-classes" class="doc-heading doc-h2"${e}>Responsive classes</h2><p${e}>The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your rows on extra small, small, medium, large, or extra large devices however you see fit.</p><h3 id="all-breakpoints" class="doc-heading doc-h3"${e}>All breakpoints</h3><p${e}>For grids that are the same from the smallest of devices to the largest, use the <code class="doc-token"${e}>.col</code> and <code class="doc-token"${e}>.col-*</code> classes. Specify a numbered class when you need a particularly sized row; otherwise, feel free to stick to .col.</p>`),o(n(i,{title:"All breakpoints",file:"ColumnAllBreakpoints"},null,a,e)),o(`<h3 id="mix-and-match" class="doc-heading doc-h3"${e}>Mix and match</h3><p${e}>Don’t want your rows to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>`),o(n(i,{title:"Mix and match",file:"ColumnMixAndMatch"},null,a,e)),o(`<h3 id="alignment" class="doc-heading doc-h3"${e}>Alignment</h3><p${e}>Use flexbox alignment utilities to vertically and horizontally align columns.</p>`),o(n(i,{title:"Horizontal alignment",file:"ColumnHorizontalAlignment"},null,a,e)),o(n(i,{title:"Vertical alignment",file:"ColumnVerticalAlignment"},null,a,e)),o(`<div class="doc-note doc-note--tip"${e}><p class="doc-note__title"${e}>TIP</p><p${e}>There is also the convenience <code class="doc-token"${e}>flex-center</code> CSS class which is equivalent to <code class="doc-token"${e}>items-center</code> + <code class="doc-token"${e}>justify-center</code>. Use it along with <code class="doc-token"${e}>flex</code>, <code class="doc-token"${e}>row</code> or <code class="doc-token"${e}>column</code>.</p></div><h3 id="wrapping" class="doc-heading doc-h3"${e}>Wrapping</h3><p${e}>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>`),o(n(i,{title:"Wrapping",file:"ColumnRowWrapping"},null,a,e)),o(`<h3 id="reordering" class="doc-heading doc-h3"${e}>Reordering</h3>`),o(n(i,{title:"Reverse",file:"ColumnReverse"},null,a,e)),o(n(i,{title:"Flex order",file:"ColumnFlexOrder"},null,a,e)),o(`<h3 id="nesting" class="doc-heading doc-h3"${e}>Nesting</h3><p${e}>To nest your content with the default grid, add a new <code class="doc-token"${e}>.row</code> and set of <code class="doc-token"${e}>.col-sm-*</code> columns within an existing <code class="doc-token"${e}>.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>`),o(n(i,{title:"Nesting",file:"ColumnNesting"},null,a,e)),o(`<h2 id="flex-grid-playground" class="doc-heading doc-h2"${e}>Flex Grid Playground</h2><p${e}>To see the Flex in action, you can use the Flex Playground to interactively learn more.</p>`),o(n(f,{"icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"},null,a,e));else return[t("p",null,[l("In the hope that you’ve previously read the "),t(p,{to:"/layout/grid/introduction-to-flexbox"},{default:u(()=>[l("Introduction to Flexbox")]),_:1}),l(" theory, let’s get deeper into Columns.")]),t("p",null,"Utilize breakpoint-specific row classes for equal-height rows. Add any number of unit-less classes for each breakpoint you need and every row will be the same height."),t("h2",{id:"equal-height",class:"doc-heading doc-h2",onClick:r=>s(c)("equal-height")},"Equal-height",8,["onClick"]),t("p",null,"For example, here are two grid layouts that apply to every device and viewport, from xs to xl."),t(i,{title:"Equal Height Example",file:"ColumnEqualWidth"}),t("h2",{id:"setting-one-row-height",class:"doc-heading doc-h2",onClick:r=>s(c)("setting-one-row-height")},"Setting one row height",8,["onClick"]),t("p",null,"Auto-layout for flexbox grid rows also means you can set the height of one row and the others will automatically resize around it. You may use predefined grid classes (as shown below) or inline heights. Note that the other rows will resize no matter the height of the center row."),t(i,{title:"Setting one row height",file:"ColumnRowWidth"}),t("h2",{id:"variable-height-content",class:"doc-heading doc-h2",onClick:r=>s(c)("variable-height-content")},"Variable height content",8,["onClick"]),t("p",null,[l("Using the "),t("code",{class:"doc-token"},"col-{breakpoint}-auto"),l(" classes, rows can size itself based on the natural height of its content. This is super handy with single line content like inputs, numbers, etc. This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven row sizes as viewport height changes.")]),t(i,{title:"Variable height content",file:"ColumnVariableWidth"}),t("h2",{id:"responsive-classes",class:"doc-heading doc-h2",onClick:r=>s(c)("responsive-classes")},"Responsive classes",8,["onClick"]),t("p",null,"The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your rows on extra small, small, medium, large, or extra large devices however you see fit."),t("h3",{id:"all-breakpoints",class:"doc-heading doc-h3",onClick:r=>s(c)("all-breakpoints")},"All breakpoints",8,["onClick"]),t("p",null,[l("For grids that are the same from the smallest of devices to the largest, use the "),t("code",{class:"doc-token"},".col"),l(" and "),t("code",{class:"doc-token"},".col-*"),l(" classes. Specify a numbered class when you need a particularly sized row; otherwise, feel free to stick to .col.")]),t(i,{title:"All breakpoints",file:"ColumnAllBreakpoints"}),t("h3",{id:"mix-and-match",class:"doc-heading doc-h3",onClick:r=>s(c)("mix-and-match")},"Mix and match",8,["onClick"]),t("p",null,"Don’t want your rows to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works."),t(i,{title:"Mix and match",file:"ColumnMixAndMatch"}),t("h3",{id:"alignment",class:"doc-heading doc-h3",onClick:r=>s(c)("alignment")},"Alignment",8,["onClick"]),t("p",null,"Use flexbox alignment utilities to vertically and horizontally align columns."),t(i,{title:"Horizontal alignment",file:"ColumnHorizontalAlignment"}),t(i,{title:"Vertical alignment",file:"ColumnVerticalAlignment"}),t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,[l("There is also the convenience "),t("code",{class:"doc-token"},"flex-center"),l(" CSS class which is equivalent to "),t("code",{class:"doc-token"},"items-center"),l(" + "),t("code",{class:"doc-token"},"justify-center"),l(". Use it along with "),t("code",{class:"doc-token"},"flex"),l(", "),t("code",{class:"doc-token"},"row"),l(" or "),t("code",{class:"doc-token"},"column"),l(".")])]),t("h3",{id:"wrapping",class:"doc-heading doc-h3",onClick:r=>s(c)("wrapping")},"Wrapping",8,["onClick"]),t("p",null,"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line."),t(i,{title:"Wrapping",file:"ColumnRowWrapping"}),t("h3",{id:"reordering",class:"doc-heading doc-h3",onClick:r=>s(c)("reordering")},"Reordering",8,["onClick"]),t(i,{title:"Reverse",file:"ColumnReverse"}),t(i,{title:"Flex order",file:"ColumnFlexOrder"}),t("h3",{id:"nesting",class:"doc-heading doc-h3",onClick:r=>s(c)("nesting")},"Nesting",8,["onClick"]),t("p",null,[l("To nest your content with the default grid, add a new "),t("code",{class:"doc-token"},".row"),l(" and set of "),t("code",{class:"doc-token"},".col-sm-*"),l(" columns within an existing "),t("code",{class:"doc-token"},".col-sm-*"),l(" column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).")]),t(i,{title:"Nesting",file:"ColumnNesting"}),t("h2",{id:"flex-grid-playground",class:"doc-heading doc-h2",onClick:r=>s(c)("flex-grid-playground")},"Flex Grid Playground",8,["onClick"]),t("p",null,"To see the Flex in action, you can use the Flex Playground to interactively learn more."),t(f,{"icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"})]}),_:1},k))}}},y=g.setup;g.setup=(m,h)=>{const d=F();return(d.modules||(d.modules=new Set)).add("src/pages/layout/grid/column.md"),y?y(m,h):void 0};const Z=q(g,[["__file","column.md"]]);export{Z as default};
