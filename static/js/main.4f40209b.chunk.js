(this["webpackJsonptask-list"]=this["webpackJsonptask-list"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(10),s=n.n(c),i=n(6),o=n(11),u=n(2),d=n.n(u),j=n(4),p=n(3),l=(n(9),n(0)),f=function(e){return Object(l.jsx)("button",{className:"btn",onClick:e.onClick,children:e.text})},b=function(e){return Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("h1",{children:"TASK TRACKER"}),Object(l.jsx)(f,{text:e.addForm?"Close":"Add",onClick:function(){e.setAddForm(!e.addForm)}})]})},m=function(e){return Object(l.jsxs)("li",{className:"task".concat(e.task.reminder?"-rem":""),onDoubleClick:function(){return e.toggleRem(e.task.id)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.task.text}),Object(l.jsx)("p",{children:e.task.day})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-minus-circle del",onClick:function(){return e.onDelete(e.task.id)}}),Object(l.jsx)("i",{className:"fas fa-edit del",onClick:function(){return t=e.task.id,e.setAddForm(!0),e.setEditData(!0),void e.Edit_func(t);var t}})]})]})},h=function(e){return Object(l.jsx)("ul",{className:"task-list",children:e.tasks.map((function(t,n){return Object(l.jsx)(m,{addForm:e.addForm,setAddForm:e.setAddForm,setEditData:e.setEditData,Edit_func:e.Edit_func,task:t,toggleRem:e.toggleRem,onDelete:e.onDelete},n)}))})},O=function(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(p.a)(s,2),o=i[0],u=i[1],d=Object(r.useState)(!1),j=Object(p.a)(d,2),f=j[0],b=j[1];return Object(r.useEffect)((function(){e.editData&&(c(e.taskToEdit.text),u(e.taskToEdit.day),b(e.taskToEdit.reminder))}),[e.editData,e.taskToEdit]),Object(l.jsxs)("form",{id:"Add-Form",className:"task-form",onSubmit:function(t){t.preventDefault();var n={text:a,day:o,reminder:f};e.onAdd(n),c(""),u(""),b(!1),e.setTaskToEdit({text:"",day:"",reminder:!1,id:0})},children:[Object(l.jsx)("h1",{children:"Add Task"}),Object(l.jsxs)("div",{className:"form-controller",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",name:"",placeholder:"Add Task",value:a,required:!0,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",name:"",placeholder:"Add Date",value:o,required:!0,onChange:function(e){return u(e.target.value)}}),Object(l.jsxs)("div",{className:"checkbox",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",name:"",checked:f,value:f,onChange:function(e){return b(e.currentTarget.checked)}})]})]}),Object(l.jsx)("input",{type:"submit",className:"btn"})]})};var k=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(p.a)(c,2),u=s[0],f=s[1],m=Object(r.useState)(!1),k=Object(p.a)(m,2),x=k[0],v=k[1],y=Object(r.useState)({text:"",day:"",reminder:!1,id:0}),T=Object(p.a)(y,2),E=T[0],S=T[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/Shrey19702/Task-Tracker-react-app/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/Shrey19702/Task-Tracker-react-app/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/Shrey19702/Task-Tracker-react-app/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,a([].concat(Object(o.a)(n),[c]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/Shrey19702/Task-Tracker-react-app/tasks/".concat(t),{method:"DELETE"});case 2:a(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return r=e.sent,c=Object(i.a)(Object(i.a)({},r),{},{reminder:!r.reminder}),e.next=6,fetch("https://my-json-server.typicode.com/Shrey19702/Task-Tracker-react-app/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 6:a(n.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:!e.reminder}):e})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:n=e.sent,S(n),D(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{addForm:u,setAddForm:f}),n.length>0?Object(l.jsx)(h,{addForm:u,setAddForm:f,setEditData:v,Edit_func:C,tasks:n,toggleRem:N,onDelete:D}):Object(l.jsx)("p",{className:"no-task",children:"No Task To Show"}),u&&Object(l.jsx)(O,{taskToEdit:E,setTaskToEdit:S,editData:x,onAdd:A})]})};n(18);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.4f40209b.chunk.js.map