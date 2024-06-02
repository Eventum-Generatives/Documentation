"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6779],{6869:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(4848),s=i(8453);const r={},d="Linspace",c={id:"plugins/input_plugins/linspace/index",title:"Linspace",description:"Description",source:"@site/docs/plugins/input_plugins/linspace/index.md",sourceDirName:"plugins/input_plugins/linspace",slug:"/plugins/input_plugins/linspace/",permalink:"/Website/docs/plugins/input_plugins/linspace/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"pluginsSidebar",previous:{title:"Cron",permalink:"/Website/docs/plugins/input_plugins/cron/"},next:{title:"Sample",permalink:"/Website/docs/plugins/input_plugins/sample/"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"linspace",children:"Linspace"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Input plugin for generating specified count of events linearly spaced in time interval."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Usage name: ",(0,t.jsx)(n.code,{children:"linspace"})]}),"\n",(0,t.jsxs)(n.p,{children:["Supported modes: ",(0,t.jsx)(n.code,{children:"sample"})]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("th",{children:"Parameter"}),(0,t.jsx)("th",{children:"Expected value"}),(0,t.jsx)("th",{children:"Required"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"start"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"<datetime>"})," (see format ",(0,t.jsx)(n.a,{href:"https://docs.pydantic.dev/2.0/usage/types/datetime/#validation-of-datetime-types",children:"here"}),")"]}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"Start time of interval"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"end"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"<datetime>"})}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"End time of interval"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"count"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"<int>"})}),(0,t.jsx)("td",{children:"Yes"}),(0,t.jsx)("td",{children:"Number of events within interval"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"endpoint"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"<bool>"})}),(0,t.jsxs)("td",{children:["No, default is ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)("td",{children:"Whether to include end point of interval"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'linspace:\n  start: "2024-01-01T00:00:00.000Z"\n  end: "2024-01-31T00:00:00.000Z"\n  count: 31\n  endpoint: true\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);