(this["webpackJsonpexpress-todo-tutorial"]=this["webpackJsonpexpress-todo-tutorial"]||[]).push([[0],{21:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var a=n(6),l=n(7),o=n(10),r=n(9),m=n(0),i=n.n(m),c=n(19),u=n.n(c),d=n(11),p=n(1),h=n(8),s=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={employees:[]},l.loadEmployeeList=l.loadEmployeeList.bind(Object(h.a)(l)),l}return Object(l.a)(n,[{key:"loadEmployeeList",value:function(){var e=this;return fetch("/_api/employees").then((function(e){return e.json()})).then((function(t){return e.setState({employees:t.employees})})).catch((function(e){console.error(e)}))}},{key:"componentWillMount",value:function(){this.loadEmployeeList()}},{key:"render",value:function(){var e=this.state.employees.map((function(e){return i.a.createElement("tr",{key:"EmployeeList-".concat(e.id)},i.a.createElement("td",null,i.a.createElement(d.b,{to:"/employees/".concat(e.id)},e.id)),i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.department),i.a.createElement("td",null,e.gender),i.a.createElement("td",null,i.a.createElement(d.b,{to:"/employees/".concat(e.id,"/edit")},i.a.createElement("button",null,"Edit")),i.a.createElement("form",{action:"/_api/employees/"+e.id+"?_method=DELETE",method:"post"},i.a.createElement("input",{name:"_method",type:"hidden",value:"DELETE",readOnly:!0}),i.a.createElement("input",{name:"id",type:"hidden",value:e.id,readOnly:!0}),i.a.createElement("input",{type:"submit",value:"Delete"}))))}));return i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Department"),i.a.createElement("th",null,"Gender"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,e))}}]),n}(i.a.Component),y=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={id:l.props.match.params.id,employee:{}},l.loadEmployee=l.loadEmployee.bind(Object(h.a)(l)),l}return Object(l.a)(n,[{key:"loadEmployee",value:function(){var e=this;return fetch("/_api/employees/".concat(this.state.id)).then((function(e){return e.json()})).then((function(t){return e.setState({employee:t.employee})})).catch((function(e){console.error(e)}))}},{key:"componentWillMount",value:function(){this.loadEmployee()}},{key:"render",value:function(){var e=this,t=["name","department","gender","birth","joined_date","pay","note"].map((function(t){return{name:t,val:"undefined"===typeof e.state.employee[0]?"...loading":e.state.employee[0][t].toString()}}));return i.a.createElement("dl",null,t.reduce((function(e,t,n){return e.concat([i.a.createElement("dt",{key:"attrname-".concat(n)},t.name),i.a.createElement("dd",{key:"attrval-".concat(n)},t.val)])}),[]))}}]),n}(i.a.Component),E=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={employee:{}},l.onChangeField=l.onChangeField.bind(Object(h.a)(l)),l}return Object(l.a)(n,[{key:"componentWillMount",value:function(){}},{key:"onChangeField",value:function(e){var t=this.state.employee;t[e.target.name]=e.target.value,this.setState({employee:t})}},{key:"render",value:function(){var e=this.state.employee||{},t=e.id?i.a.createElement("div",null,"ID: ",e.id):"";return i.a.createElement("form",{action:"/_api/employees",method:"post"},i.a.createElement("input",{name:"_method",type:"hidden",value:"put",readOnly:!0}),t,i.a.createElement("div",null,"Name: ",i.a.createElement("input",{type:"text",name:"name",defaultValue:e.name,placeholder:"Input Employee's Name",onChange:this.onChangeField})),i.a.createElement("div",null,"Department: ",i.a.createElement("input",{type:"text",name:"department",defaultValue:e.department,placeholder:"",onChange:this.onChangeField})),i.a.createElement("div",null,"Gender:",i.a.createElement("input",{type:"radio",name:"gender",defaultValue:"male",checked:"male"===e.gender,onChange:this.onChangeField})," male",i.a.createElement("input",{type:"radio",name:"gender",defaultValue:"female",checked:"female"===e.gender,onChange:this.onChangeField})," female",i.a.createElement("input",{type:"radio",name:"gender",defaultValue:"other",checked:"male"!==e.gender&&"female"!==e.gender,onChange:this.onChangeField})," other"),i.a.createElement("div",null,"Birthday: ",i.a.createElement("input",{type:"text",name:"birth",defaultValue:e.birth,placeholder:"Input Employee's Birthday",onChange:this.onChangeField})),i.a.createElement("div",null,"Joined Date: ",i.a.createElement("input",{type:"text",name:"joined_date",defaultValue:e.joined_date,placeholder:"Input Employee's Joined Date",onChange:this.onChangeField})),i.a.createElement("div",null,"Payment: ",i.a.createElement("input",{type:"text",name:"payment",defaultValue:e.payment,placeholder:"Input Employee's Payment",onChange:this.onChangeField})),i.a.createElement("div",null,"Note: ",i.a.createElement("input",{type:"text",name:"note",defaultValue:e.note,placeholder:"Input Note",onChange:this.onChangeField})),i.a.createElement("div",null,i.a.createElement("input",{type:"submit",value:"Submit",readOnly:!0})))}}]),n}(i.a.Component),v=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={id:l.props.match.params.id,employee:{}},l.loadEmployee=l.loadEmployee.bind(Object(h.a)(l)),l.onChangeField=l.onChangeField.bind(Object(h.a)(l)),l}return Object(l.a)(n,[{key:"loadEmployee",value:function(){var e=this;return fetch("/_api/employees/".concat(this.state.id)).then((function(e){return e.json()})).then((function(t){return e.setState({employee:t.employee})})).catch((function(e){console.error(e)}))}},{key:"onChangeField",value:function(e){var t=this.state.employee;t[e.target.name]=e.target.value,this.setState({employee:t})}},{key:"componentWillMount",value:function(){this.loadEmployee()}},{key:"render",value:function(){var e=this.state.employee||{},t=e.id?i.a.createElement("div",null,"ID: ",e.id):"";return i.a.createElement("form",{action:"/_api/employees/"+e.id+"?_method=PUT",method:"post"},i.a.createElement("input",{name:"_method",type:"hidden",value:"PUT",readOnly:!0}),t,i.a.createElement("div",null,"Name: ",i.a.createElement("input",{type:"text",name:"name",value:e.name,placeholder:"Input Employee's Name",onChange:this.onChangeField})),i.a.createElement("div",null,"Department: ",i.a.createElement("input",{type:"text",name:"department",value:e.department,placeholder:"",onChange:this.onChangeField})),i.a.createElement("div",null,"Gender:",i.a.createElement("input",{type:"radio",name:"gender",defaultValue:"male",checked:"male"===e.gender,onChange:this.onChangeField})," male",i.a.createElement("input",{type:"radio",name:"gender",defaultValue:"female",checked:"female"===e.gender,onChange:this.onChangeField})," female",i.a.createElement("input",{type:"radio",name:"gender",defaultValue:"other",checked:"male"!==e.gender&&"female"!==e.gender,onChange:this.onChangeField})," other"),i.a.createElement("div",null,"Birthday: ",i.a.createElement("input",{type:"text",name:"birth",value:e.birth,placeholder:"Input Employee's Birthday",onChange:this.onChangeField})),i.a.createElement("div",null,"Joined Date: ",i.a.createElement("input",{type:"text",name:"joined_date",value:e.joined_date,placeholder:"Input Employee's Joined Date",onChange:this.onChangeField})),i.a.createElement("div",null,"Payment: ",i.a.createElement("input",{type:"text",name:"payment",value:e.payment,placeholder:"Input Employee's Payment",onChange:this.onChangeField})),i.a.createElement("div",null,"Note: ",i.a.createElement("input",{type:"text",name:"note",value:e.note,placeholder:"Input Note",onChange:this.onChangeField})),i.a.createElement("div",null,i.a.createElement("input",{type:"submit",value:"Submit",readOnly:!0})))}}]),n}(i.a.Component),f=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.b,{to:"/employees"},"employee"))),i.a.createElement(p.a,{exact:!0,path:"/",component:g}),i.a.createElement(p.a,{exact:!0,path:"/employees",component:s}),i.a.createElement(p.a,{exact:!0,path:"/employees/:id([0-9]+)",component:y}),i.a.createElement(p.a,{exact:!0,path:"/employees/new",component:E}),i.a.createElement(p.a,{exact:!0,path:"/employees/:id([0-9]+)/edit",component:v}),i.a.createElement(d.b,{to:"/employees/new"},"New")))}}]),n}(i.a.Component),g=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Home"))}}]),n}(i.a.Component);u.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b96a726f.chunk.js.map