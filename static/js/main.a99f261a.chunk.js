(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__a9jz7"}},2:function(t,e,n){t.exports={inputContainer:"InputForm_inputContainer__1Zzd4",form:"InputForm_form__2ZImR",formItem:"InputForm_formItem__QBTlt",button:"InputForm_button__3IY2c"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(19),n(20),n(13)),s=n(3),u=n(4),l=n(6),m=n(5),b=n(23),j=n(11),d=n.n(j),f=n(0),h=function(t){var e=t.children;return Object(f.jsx)("div",{className:d.a.container,children:e})},p=n(12),O=n(2),x=n.n(O),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",id:Object(b.a)()},t.inputValue=function(e){t.setState(Object(p.a)({},e.currentTarget.name,e.currentTarget.value))},t.addContact=function(e){e.preventDefault(),t.props.onFormSubmit(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsx)("div",{className:x.a.inputContainer,children:Object(f.jsxs)("form",{className:x.a.form,onSubmit:this.addContact,children:[Object(f.jsxs)("label",{className:x.a.formItem,children:["Name"," ",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.inputValue})]}),Object(f.jsxs)("label",{className:x.a.formItem,children:["Number"," ",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.inputValue})]}),Object(f.jsx)("button",{type:"submit",className:x.a.button,children:"Add contact"})]})})}}]),n}(a.Component),_=n(7),C=n.n(_),g=function(t){var e=t.value,n=t.onChangeFilter;return Object(f.jsxs)("label",{className:C.a.filter,children:[Object(f.jsx)("p",{className:C.a.title,children:"Find contacts by name "}),Object(f.jsx)("input",{className:C.a.inputFilter,type:"text",value:e,onChange:n})]})},F=n(9),N=n.n(F),y=function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteList;return Object(f.jsxs)("li",{className:N.a.list,children:[Object(f.jsxs)("p",{children:[n,":"]}),Object(f.jsx)("p",{children:a}),Object(f.jsx)("button",{className:N.a.button,onClick:function(){return r(e)},children:"Delete"})]},e)},I=function(t){var e=t.contacts,n=t.title,a=t.onDeleteList;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:n}),Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(f.jsx)(y,{name:n,number:r,onDeleteList:function(){return a(e)}},e)}))})]})},k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formSubmit=function(e){if(console.log(e),t.state.contacts.some((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var n={id:Object(b.a)(),name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(o.a)(e))}}))}},t.deleteList=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)(h,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{onFormSubmit:this.formSubmit}),Object(f.jsx)(g,{value:t,onChangeFilter:this.changeFilter}),Object(f.jsx)(I,{contacts:e,title:"Contacts",onDeleteList:this.deleteList})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={filter:"Filter_filter__3PRaf",inputFilter:"Filter_inputFilter__1zkXw",title:"Filter_title__d4hrc"}},9:function(t,e,n){t.exports={list:"BookItem_list__11NQ9",button:"BookItem_button__1LH8B"}}},[[22,1,2]]]);
//# sourceMappingURL=main.a99f261a.chunk.js.map