"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[792],{7171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(4848),i=t(8453);const r={},a="Overview",l={id:"getting_started/overview/index",title:"Overview",description:"What is Eventum",source:"@site/docs/getting_started/overview/index.md",sourceDirName:"getting_started/overview",slug:"/getting_started/overview/",permalink:"/Website/docs/getting_started/overview/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"gettingStartedSidebar",next:{title:"Installation",permalink:"/Website/docs/getting_started/installation/"}},o={},d=[{value:"What is Eventum",id:"what-is-eventum",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Events Scheduling",id:"events-scheduling",level:2},{value:"Time modes",id:"time-modes",level:3},{value:"Scheduling methods",id:"scheduling-methods",level:3},{value:"Event Templates",id:"event-templates",level:2},{value:"Stateful rendering",id:"stateful-rendering",level:3},{value:"Use your own samples",id:"use-your-own-samples",level:3},{value:"Connect to reality",id:"connect-to-reality",level:3},{value:"Use modules",id:"use-modules",level:3},{value:"Outputting",id:"outputting",level:2},{value:"Send events anywhere",id:"send-events-anywhere",level:3},{value:"Designing with Eventum Studio",id:"designing-with-eventum-studio",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h2,{id:"what-is-eventum",children:"What is Eventum"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Eventum"})," is a flexible event generator that provides synthetic data for various purposes."]}),"\n",(0,s.jsx)(n.p,{children:"The most popular tasks where Eventum is used are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generation of datasets"}),"\n",(0,s.jsx)(n.li,{children:"Simulation of processes in real time"}),"\n",(0,s.jsx)(n.li,{children:"Filling different systems with demo data"}),"\n",(0,s.jsx)(n.li,{children:"Testing on arbitrary data and stress testing"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(n.p,{children:"The working pipeline of Eventum consists of three parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input plugin"})," - it creates signals in time represented as timestamps"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Event plugin"})," - for each incoming signal, renders the event according to the template"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output plugin"})," - sends generated events to specified endpoints"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(2095).A+"",width:"1215",height:"414"})}),"\n",(0,s.jsx)(n.p,{children:"Thus, to launch the application you only need to set parameters for these three parts in a single configuration file."}),"\n",(0,s.jsx)(n.p,{children:'You may notice that parts are called "plugins". It is so because in addition to using existing ones, you can develop your own plugins and use them easily.'}),"\n",(0,s.jsx)(n.h2,{id:"events-scheduling",children:"Events Scheduling"}),"\n",(0,s.jsx)(n.h3,{id:"time-modes",children:"Time modes"}),"\n",(0,s.jsx)(n.p,{children:"Eventum supports two time modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sample mode"})," - it is applicable when you want to generate events without reference to the present time (e.g. create a dataset)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Live mode"})," - in this case, each event will be published as the present time passes event timestamp"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scheduling-methods",children:"Scheduling methods"}),"\n",(0,s.jsxs)(n.p,{children:["With the variety of input plugins you can flexibly adjust when to generate the events. For example, in case when events linearly spaced in time you can use ",(0,s.jsx)(n.strong,{children:"Timer input plugin"})," for live mode and ",(0,s.jsx)(n.strong,{children:"Linspace input plugin"})," for sample mode. For more detailed uncomplicated scheduling the ",(0,s.jsx)(n.strong,{children:"Cron input plugin"})," is a great choice. If you want maximum flexibility, then just use ",(0,s.jsx)(n.strong,{children:"Time patterns input plugin"})," which offers you to operate probability distribution functions and mix them if needed. There are many others plugins, you can explore all them ",(0,s.jsx)(n.a,{href:"/Website/docs/getting_started/overview/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"event-templates",children:"Event Templates"}),"\n",(0,s.jsx)(n.h3,{id:"stateful-rendering",children:"Stateful rendering"}),"\n",(0,s.jsxs)(n.p,{children:["In the default event plugin Eventum uses Jinja template engine. With basic use of Jinja, we cannot access variables from previous template renders. But with ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/Website/docs/getting_started/overview/",children:"State API"})})," of ",(0,s.jsx)(n.strong,{children:"Jinja event plugin"})," it is easy to achieve it."]}),"\n",(0,s.jsx)(n.p,{children:"Template:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// highlight-next-line\n{% set id = locals.get('id', 1) %}\n\n{\n    \"userID\": {{ id }}\n}\n\n// highlight-next-line\n{% set id = locals.set('id', id + 1) %}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// first render\n{\n    "userID": 1,\n}\n// second render\n{\n    "userID": 2,\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"use-your-own-samples",children:"Use your own samples"}),"\n",(0,s.jsxs)(n.p,{children:["It's easy to use data samples in templates because Jinja event plugin provides ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/Website/docs/getting_started/overview/",children:"Sample API"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Need to change data in your events? - Just update your sample and keep template without any changes."}),"\n",(0,s.jsx)(n.p,{children:"Template:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// highlight-next-line\n{% set computer = samples.computers | random %}\n{% set hostname = computer[0] %}\n{% set ip = computer[1] %}\n\n{\n    "sampleRow": "{{ computer }}",\n    "hostname": "{{ hostname }}",\n    "ip": "{{ ip }}"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "sampleRow": "(\'wks02\', \'172.16.0.4\')",\n    "hostname": "wks02",\n    "ip": "172.16.0.4"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, sample ",(0,s.jsx)(n.code,{children:"computers"})," is accessed by its alias which is set along with the csv file path in application configuration."]}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-reality",children:"Connect to reality"}),"\n",(0,s.jsxs)(n.p,{children:["Eventum is not only about synthetic data. You can run subprocesses and obtain their result in templates using ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/Website/docs/getting_started/overview/",children:"Subprocess API"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Template:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// highlight-next-line\n{% set my_name = subprocess.run(\'git config user.name\', true) | trim %}\n\n{\n    "name": "Shell says, that I\'m {{ my_name }}"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Shell says, that I\'m Nikita Reznikov"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"use-modules",children:"Use modules"}),"\n",(0,s.jsxs)(n.p,{children:["You are able to write any python function and run it from template just referencing to it. For example there is default module named ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/Website/docs/getting_started/overview/",children:(0,s.jsx)(n.code,{children:"rand"})})})," with different functions for generating random values."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// highlight-next-line\n{% set ip = rand.network.ip_v4() %}\n\n{\n    "ip": "{{ ip }}"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "ip": "244.203.128.130"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Content of ",(0,s.jsx)(n.code,{children:"rand.py"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'...\nclass network:\n    @staticmethod\n    def ip_v4() -> str:\n        """Return random IPv4 address."""\n        return \'.\'.join(str(random.randint(0, 255)) for _ in range(4))\n...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The only think you need to do to make this work is to put your python module to ",(0,s.jsx)(n.code,{children:"jinja_modules"})," directory of Jinja event plugin. All modules in this directory are accessible from all templates."]}),"\n",(0,s.jsx)(n.h2,{id:"outputting",children:"Outputting"}),"\n",(0,s.jsx)(n.h3,{id:"send-events-anywhere",children:"Send events anywhere"}),"\n",(0,s.jsx)(n.p,{children:"Direct your generated events with output plugins easily. Use different destinations like stdout, files, OpenSearch. There is also the possibility to specify multiple destination per running instance of Eventum. That gives you the flexibility to manage and utilize your data as needed."}),"\n",(0,s.jsx)(n.h2,{id:"designing-with-eventum-studio",children:"Designing with Eventum Studio"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Eventum Studio"})," is the important part of Eventum that empowers you to develop content such as time distribution configurations and event templates in user friendly way."]}),"\n",(0,s.jsxs)(n.p,{children:["Using Eventum Studio you can change parameters and visualize the result on the fly.\n",(0,s.jsx)(n.img,{src:t(3136).A+"",width:"1907",height:"888"})]}),"\n",(0,s.jsxs)(n.p,{children:["It's available to edit event templates, render them with pretty highlighting and even debug them by exploring state of render runs. Once you are done with it, you can save your result to file directly from Eventum Studio interface.\n",(0,s.jsx)(n.img,{src:t(836).A+"",width:"1407",height:"470"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3136:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/distribution-5e89321121ead0741e76758e7e2fb084.png"},836:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/rendering-71e919aa125949dce18d6500b690571c.png"},2095:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scheme-13af59d719fae060a2e85e14ccb3656e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);