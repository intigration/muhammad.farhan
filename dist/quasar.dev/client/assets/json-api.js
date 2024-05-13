import{b as i,d as k,w as e,h as s,f as a,e as t,l as d,i as n}from"./vendor.js";import{c as l}from"./_examples_frameless-electron-window.js";import{D as y}from"./DocPage.js";import{D as p}from"./DocPrerender.js";import{C as c}from"./CopyButton.js";import{_ as g}from"./index.js";const m=s("p",null,"This page describes the JSON API Schema used for component App Extensions.",-1),h=s("ol",null,[s("li",null,"Describes your existing data format(s)"),s("li",null,"Provides clear human- and machine- readable documentation"),s("li",null,[n("Validates data which is useful for: "),s("ul",null,[s("li",null,"Automated testing"),s("li",null,"Ensuring quality of submitted data")])])],-1),f=s("p",null,"At its heart, JSON is built on the following data structures:",-1),b=s("p",null,"object:",-1),x=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token property"},'"key1"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"value1"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token property"},'"key2"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"value2"'),n(),s("span",{class:"token punctuation"},"}")])],-1),_=s("p",null,"array:",-1),v=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},'"first"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"second"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"third"'),n(),s("span",{class:"token punctuation"},"]")])],-1),w=s("p",null,"number:",-1),S=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token number"},"42"),n(`
`),s("span",{class:"token number"},"3.1415926")])],-1),A=s("p",null,"string:",-1),j=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token string"},'"This is a string"')])],-1),N=s("p",null,"boolean:",-1),O=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token boolean"},"false")])],-1),I=s("p",null,"null:",-1),M=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token null keyword"},"null")])],-1),T=s("p",null,"The unfilled schema typically looks like this:",-1),D=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token property"},'"props"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"events"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"slots"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token property"},'"methods"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}")])],-1),P=s("p",null,"The first part of a definition is the actual item name itself.",-1),C=s("div",{class:"doc-note doc-note--tip"},[s("p",{class:"doc-note__title"},"TIP"),s("p",null,[n("If in the "),s("code",{class:"doc-token"},"props"),n(" section, this should be the forward facing name. Meaning, if your item being described is in camelCase, then the forward facing item name is in kebab-case. ex: "),s("code",{class:"doc-token"},"myProp"),n(" becomes "),s("code",{class:"doc-token"},"my-prop"),n(".")])],-1),J=s("p",null,"The rest of the definitions can be one of the following:",-1),B=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"},class:"text-left"},"Name"),s("th",{style:{"text-align":"left"},class:"text-left"},"Description")])],-1),q=s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"type"),s("td",{style:{"text-align":"left"}},[n("Optional for everything but "),s("code",{class:"doc-token"},"props"),n(". This can be a single item or array of items. Values are: "),s("code",{class:"doc-token"},'["Array", "Boolean", "Function", "Number", "Object", "String", "Null", "Any"]')])]),s("tr",null,[s("td",{style:{"text-align":"left"}},"desc"),s("td",{style:{"text-align":"left"}},"Any string that describes the item being described")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"required"),s("td",{style:{"text-align":"left"}},"[true,false]")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"values"),s("td",{style:{"text-align":"left"}},[n("an array of constrained values. Ex: "),s("code",{class:"doc-token"},"[0, 0.5, 1.0, 1.5, 2.0]")])]),s("tr",null,[s("td",{style:{"text-align":"left"}},"definition"),s("td",{style:{"text-align":"left"}},[n("Describes an object definition. This is an object that pretty much conforms to the base object. It can contain "),s("code",{class:"doc-token"},'"type"'),n(", "),s("code",{class:"doc-token"},'"desc"'),n(", "),s("code",{class:"doc-token"},'"required"'),n(", "),s("code",{class:"doc-token"},'"examples"'),n(", "),s("code",{class:"doc-token"},'"values"'),n(" and "),s("code",{class:"doc-token"},'"definition"'),n(" (recursive)")])]),s("tr",null,[s("td",{style:{"text-align":"left"}},"params"),s("td",{style:{"text-align":"left"}},[n("Typically is used to describe parameters to a function. This needs one or more parameters as the key to an object that pretty much conforms to the base object. It can contain "),s("code",{class:"doc-token"},'"type"'),n(", "),s("code",{class:"doc-token"},'"desc"'),n(", "),s("code",{class:"doc-token"},'"required"'),n(", "),s("code",{class:"doc-token"},'"examples"'),n(", "),s("code",{class:"doc-token"},'"values"'),n(" and "),s("code",{class:"doc-token"},'"definition"'),n(" (recursive)")])]),s("tr",null,[s("td",{style:{"text-align":"left"}},"returns"),s("td",{style:{"text-align":"left"}},"The returned value (for methods or functions)")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"category"),s("td",{style:{"text-align":"left"}},"Used for grouping")])],-1),F=s("p",null,"All items are optional, but in the very least you should provide a description.",-1),Q=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token property"},'"props"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Boolean"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},`"Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive"`),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"default"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'"v-model=\\"footerState\\""'),n(`
      `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"category"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"model"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"locale"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Object"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Locale formatting options"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},`":locale=\\"{ monthsShort: ['Ian', 'Feb', 'Mar', '...'] }\\""`),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"definition"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"days"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Array"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"List of full day names (DDDD), starting with Sunday"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},`"['Duminica', 'Luni', 'Marti', '...']"`),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"daysShort"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Array"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"List of short day names (DDD), starting with Sunday"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},`"['Dum', 'Lun', 'Mar', '...']"`),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"months"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Array"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"List of full month names (MMMM), starting with January"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},`"['Ianuarie', 'Februarie', 'Martie', '...']"`),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"monthsShort"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Array"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"List of short month names (MMM), starting with January"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},`"['Ian', 'Feb', 'Mar', '...']"`),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"category"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"model"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"options"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Function"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},`"Optionally configure what time is the user allowed to set; Overridden by 'hour-options', 'minute-options' and 'second-options' if those are set"`),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"params"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"hr"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Hour"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"15"),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"min"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Minutes"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"38"),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"sec"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Seconds"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"returns"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token null keyword"},"null"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},'":options=\\"(hr, min, sec) => hr <= 6\\""'),n(`
      `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"category"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"behavior"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"events"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},'"Array"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"Function"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not)"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token string"},`":events=\\"['2018/11/05', '2018/11/06', '2018/11/09', '2018/11/23']\\""`),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token string"},'":events=\\"date => date[9] % 3 === 0\\""'),n(`
      `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"category"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"model"'),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"}")])],-1),E=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token property"},'"events"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"show"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Emitted after component has triggered show()"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"params"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"evt"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Object"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"JS event object"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"required"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"input"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"params"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"String"'),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"reason"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"String"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Reason of the user interaction (what was picked)"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},'"year"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"month"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"day"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"today"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"locale"'),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token string"},'"mask"'),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"details"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Object"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Object of properties on the new model"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"definition"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token property"},'"year"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
              `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),n(`
            `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
            `),s("span",{class:"token property"},'"month"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
              `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),n(`
            `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
            `),s("span",{class:"token property"},'"day"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
              `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),n(`
            `),s("span",{class:"token punctuation"},"}"),n(`
          `),s("span",{class:"token punctuation"},"}"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"}")])],-1),L=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token property"},'"slots"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"default"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"This is where Banner content goes"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token property"},'"avatar"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Slot for displaying an avatar (suggestions: QIcon, QAvatar)"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token property"},'"selected-item"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Override default selection slot; Suggestion: QChip"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"scope"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"index"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Selection index"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"opt"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Any"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Selected option -- its value is taken from model"'),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"selected"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Boolean"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Always true -- passed down as prop to QItem (when using QItem)"'),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"removeAtIndex"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Function"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Remove selected option located at specific index"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"params"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token property"},'"index"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
              `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),s("span",{class:"token punctuation"},","),n(`
              `),s("span",{class:"token property"},'"required"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
              `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Index at which to remove selection"'),s("span",{class:"token punctuation"},","),n(`
              `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),n(`
            `),s("span",{class:"token punctuation"},"}"),n(`
          `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"returns"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token null keyword"},"null"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"toggleOption"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Function"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Add/remove option from model"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"params"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token property"},'"opt"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
              `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Any"'),s("span",{class:"token punctuation"},","),n(`
              `),s("span",{class:"token property"},'"required"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
              `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Option to add to model"'),s("span",{class:"token punctuation"},","),n(`
              `),s("span",{class:"token property"},'"__exemption"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},'"examples"'),n(),s("span",{class:"token punctuation"},"]"),n(`
            `),s("span",{class:"token punctuation"},"}"),n(`
          `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"returns"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token null keyword"},"null"),n(`
        `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"tabindex"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Number"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Tabindex HTML attribute value associated with respective option"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"values"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token number"},"-1"),n(),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},",")])],-1),$=s("pre",{class:"doc-code"},[s("code",null,[s("span",{class:"token property"},'"methods"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token property"},'"focus"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Focus on first focusable element/component in the form"'),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`

    `),s("span",{class:"token property"},'"validate"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Triggers a validation on all applicable inner Quasar components"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"params"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"shouldFocus"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
          `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Boolean"'),s("span",{class:"token punctuation"},","),n(`
          `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},`"Tell if it should focus or not on component with error on submitting form; Overrides 'no-focus-error' prop if specified"`),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token property"},'"returns"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Promise<boolean>"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"desc"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token property"},'"examples"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
          `),s("span",{class:"token string"},'"validate().then(outcome => { ... })"'),n(`
        `),s("span",{class:"token punctuation"},"]"),n(`
      `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"}"),n(`
  `),s("span",{class:"token punctuation"},"}")])],-1),V={__name:"json-api",setup(H){const u=[{id:"benefits-of-using-json-api",title:"2. Benefits of using JSON API"},{id:"json-data-structures",title:"3. JSON Data Structures"},{id:"quasar-json-api",title:"4. Quasar JSON API"},{id:"general",title:"4.1. General",sub:!0},{id:"props-example",title:"4.2. Props example",sub:!0},{id:"events-example",title:"4.3. Events example",sub:!0},{id:"slots-example",title:"4.4. Slots example",sub:!0},{id:"methods-example",title:"4.5. Methods example",sub:!0}];return(R,o)=>(i(),k(y,{title:"Quasar JSON API Schema",desc:"The JSON API used to describe Component App Extensions.",heading:"","edit-link":"app-extensions/tips-and-tricks/json-api",toc:u},{default:e(()=>[m,s("h2",{id:"benefits-of-using-json-api",class:"doc-heading doc-h2",onClick:o[0]||(o[0]=r=>a(l)("benefits-of-using-json-api"))},"Benefits of using JSON API"),h,s("h2",{id:"json-data-structures",class:"doc-heading doc-h2",onClick:o[1]||(o[1]=r=>a(l)("json-data-structures"))},"JSON Data Structures"),f,b,t(a(p),null,{default:e(()=>[x,t(c)]),_:1}),_,t(a(p),null,{default:e(()=>[v,t(c)]),_:1}),w,t(a(p),null,{default:e(()=>[S,t(c)]),_:1}),A,t(a(p),null,{default:e(()=>[j,t(c)]),_:1}),N,t(a(p),null,{default:e(()=>[O,t(c)]),_:1}),I,t(a(p),null,{default:e(()=>[M,t(c)]),_:1}),s("h2",{id:"quasar-json-api",class:"doc-heading doc-h2",onClick:o[2]||(o[2]=r=>a(l)("quasar-json-api"))},"Quasar JSON API"),T,t(a(p),null,{default:e(()=>[D,t(c)]),_:1}),s("h3",{id:"general",class:"doc-heading doc-h3",onClick:o[3]||(o[3]=r=>a(l)("general"))},"General"),P,C,J,t(d,{class:"doc-page-table","wrap-cells":!0,flat:!0,bordered:!0},{default:e(()=>[B,q]),_:1}),F,s("h3",{id:"props-example",class:"doc-heading doc-h3",onClick:o[4]||(o[4]=r=>a(l)("props-example"))},"Props example"),t(a(p),null,{default:e(()=>[Q,t(c)]),_:1}),s("h3",{id:"events-example",class:"doc-heading doc-h3",onClick:o[5]||(o[5]=r=>a(l)("events-example"))},"Events example"),t(a(p),null,{default:e(()=>[E,t(c)]),_:1}),s("h3",{id:"slots-example",class:"doc-heading doc-h3",onClick:o[6]||(o[6]=r=>a(l)("slots-example"))},"Slots example"),t(a(p),null,{default:e(()=>[L,t(c)]),_:1}),s("h3",{id:"methods-example",class:"doc-heading doc-h3",onClick:o[7]||(o[7]=r=>a(l)("methods-example"))},"Methods example"),t(a(p),null,{default:e(()=>[$,t(c)]),_:1})]),_:1}))}},Y=g(V,[["__file","json-api.md"]]);export{Y as default};
