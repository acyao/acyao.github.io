"use strict";(self.webpackChunkmy_document_blog=self.webpackChunkmy_document_blog||[]).push([[749],{5443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(4848),c=t(8453);const i={sidebar_position:2},s="Transaction Scope",a={id:"coding/csharp/transaction-scope",title:"Transaction Scope",description:"Manage a block of code as single transaction.",source:"@site/docs/coding/csharp/transaction-scope.md",sourceDirName:"coding/csharp",slug:"/coding/csharp/transaction-scope",permalink:"/docs/coding/csharp/transaction-scope",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"noteSidebar",previous:{title:"Exception Handling",permalink:"/docs/coding/csharp/exception-handling"},next:{title:"Encrypt & Decrypt CSV - Still In Progress...",permalink:"/docs/coding/csharp/encrypt-decrypt-csv"}},r={},p=[{value:"Example",id:"example",level:4},{value:"Example with timeout",id:"example-with-timeout",level:4}];function l(e){const n={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"transaction-scope",children:"Transaction Scope"}),"\n",(0,o.jsx)(n.p,{children:"Manage a block of code as single transaction."}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c#",children:"//Begin transaction scope\r\nusing (TransactionScope scope = new TransactionScope())\r\n{\r\n    //Do something...\r\n\r\n    //Complete the transaction\r\n    scope.Complete();\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We can set a timeout for ",(0,o.jsx)(n.code,{children:"TransactionScope"}),". If the transaction is not completed within the time, it will be rolled back automatically."]}),"\n",(0,o.jsx)(n.h4,{id:"example-with-timeout",children:"Example with timeout"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c#",children:"// Begin transaction scope with the specified timeout\r\nusing (TransactionScope scope = new TransactionScope(TransactionScopeOption.Required, new TimeSpan(0, 10, 0)))\r\n{\r\n    //Do something...\r\n\r\n    // Complete the transaction\r\n    scope.Complete();\r\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const c={},i=o.createContext(c);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);