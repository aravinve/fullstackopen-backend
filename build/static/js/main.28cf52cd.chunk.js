(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(6),r=n(3),o=n(1),s=n.n(o),u=n(15),i=n.n(u);var d=function(e){var t=e.handleSearchInput;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Filter Contacts"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",placeholder:"Search ...",onChange:t})})]})};var l=function(e){var t=e.message,n=e.type,a="".concat(n," notify-bar");return Object(c.jsx)("div",{className:a,children:t})};var j=function(e){var t=e.handleContactNameChange,n=e.contactName,a=e.contactNumber,r=e.handleContactNumberChange,o=e.submitFormHandler;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Contact Add Form"}),Object(c.jsxs)("form",{onSubmit:o,children:[Object(c.jsx)("input",{type:"text",value:n,onChange:t,placeholder:"Contact Name",required:!0}),Object(c.jsx)("input",{type:"number",value:a,onChange:r,placeholder:"Contact Number",required:!0}),Object(c.jsx)("button",{type:"submit",children:"Add"})]})]})};var m=function(e){var t=e.person,n=e.removeContactHandler;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.number}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){return n(t)},children:"Remove"})})]})};var b=function(e){var t=e.persons,n=e.filteredPersons,a=e.loadingStatus,r=e.removeContactHandler,o=n.length>0?n:t;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Contacts"}),a?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:Object(c.jsx)("h4",{children:"Loading ...."})})}):Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:o.map((function(e){return Object(c.jsx)(m,{person:e,removeContactHandler:r},e.name)}))})})]})},h=(n(21),n(4)),f=n.n(h),p="/api/persons",O={getAll:function(){return f.a.get(p).then((function(e){return e.data}))},create:function(e){return f.a.post(p,e).then((function(e){return e.data}))},update:function(e,t){return f.a.put("".concat(p,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return f.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))}},g=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],u=Object(o.useState)([]),i=Object(r.a)(u,2),m=i[0],h=i[1],f=Object(o.useState)(""),p=Object(r.a)(f,2),g=p[0],v=p[1],x=Object(o.useState)(""),C=Object(r.a)(x,2),y=C[0],S=C[1],w=Object(o.useState)(!1),N=Object(r.a)(w,2),F=N[0],k=N[1],E=Object(o.useState)({message:null,type:null}),H=Object(r.a)(E,2),L=H[0],A=H[1];Object(o.useEffect)((function(){k(!0),O.getAll().then((function(e){s(e),k(!1),A({message:"Loaded Contacts Successfully",type:"success"}),D()})).catch((function(e){s([]),k(!1),A({message:"Error: ".concat(e.message),type:"danger"}),D()}))}),[]);var D=function(){setTimeout((function(){A({message:null,type:null})}),5e3)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Phone Book App"}),L.message&&Object(c.jsx)(l,{message:L.message,type:L.type}),Object(c.jsx)(d,{handleSearchInput:function(e){var t=e.target.value.toLowerCase();h(""!==t?n.filter((function(e){return e.name.toLowerCase().includes(t)})):[])}}),Object(c.jsx)(j,{submitFormHandler:function(e){if(e.preventDefault(),function(e,t){var c=n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}));if(void 0===c)return!0;if(c.number!==t){if(window.confirm("Do you want to update ".concat(c.name,"'s number from ").concat(c.number," to ").concat(t))){var r=Object(a.a)(Object(a.a)({},c),{},{number:t});O.update(c.id,r).then((function(e){s(n.map((function(t){return t.id!==e.id?t:e}))),A({message:"Updated ".concat(e.name," Contact Successfully"),type:"success"}),D(),v(""),S("")})).catch((function(e){v(""),S(""),A({message:"Error: ".concat(e.message),type:"danger"}),D()}))}}else A({message:"".concat(e," already present in the phonebook with number: ").concat(t),type:"danger"}),D()}(g,y)){var t={name:g,number:y};O.create(t).then((function(e){s(n.concat(e)),A({message:"Created ".concat(e.name," Contact Successfully"),type:"success"}),D(),v(""),S("")})).catch((function(e){v(""),S(""),A({message:"Error: ".concat(e.message),type:"danger"}),D()}))}},contactName:g,handleContactNameChange:function(e){v(e.target.value)},handleContactNumberChange:function(e){S(e.target.value)},contactNumber:y}),Object(c.jsx)(b,{persons:n,filteredPersons:m,loadingStatus:F,removeContactHandler:function(e){window.confirm("Do you want to delete ".concat(e.name))&&O.remove(e.id).then((function(t){s(n.filter((function(t){return t.id!==e.id}))),A({message:"Deleted ".concat(e.name," Contact Successfully"),type:"success"}),D()})).catch((function(e){A({message:"Error: ".concat(e.message),type:"danger"}),D()}))}})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.28cf52cd.chunk.js.map