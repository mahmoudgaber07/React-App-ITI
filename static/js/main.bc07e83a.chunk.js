(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(22),i=c.n(s),o=(c(54),c(55),c(13)),r=c(2),l=c(1),j=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-5 sticky-top noselect",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o.b,{to:"/",className:"text-decoration-none",children:Object(l.jsx)("h3",{className:"text-white ps-5",children:"React-Portfolio"})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link","aria-current":"page",to:"/",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/shop",children:"E-Commerce"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/todo",children:"Todo"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/counter",children:"Counter"})})]})})]})})},d=c.p+"static/media/MahmoudGaber _ LinkedIn.bc86565d.png",b=function(){return Object(l.jsx)("div",{className:"container mb-5 noselect",children:Object(l.jsxs)("div",{className:"row align-items-lg-center",children:[Object(l.jsx)("h2",{children:"Mahmoud Gaber"}),Object(l.jsx)("div",{className:"col-md-5 col-sm-12",children:Object(l.jsx)("img",{src:d,className:"img-fluid rounded-pill",alt:"my-img"})}),Object(l.jsxs)("div",{className:"col-md-5 col-sm-12 offset-md-1",children:[Object(l.jsx)("h3",{className:"py-3",children:"Front-end-Developer"}),Object(l.jsx)("p",{className:"text-start",children:"I'm a frontend developer with almost one year of experience in projects of varying complexity. My expertise is focused on React, HTML5, CSS3,Bootstrap, jQuery, JavaScript, AJAX and responsive coding. Converting layouts from Photoshop, AdobeXD. Experience with frameworks as React and Vue. Confident use of GIT. I consider myself a person who follows modern web development practices and new technologies. I'm working with a team of professional web design developers."})]})]})})},m=c(8),h=c(4),u=c(5),O=c(41),x=c.n(O),p=c(12),f=c(11),v={count:0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COUNT":return Object(f.a)(Object(f.a)({},e),{},{count:e.count+t.payload});case"DECREMENT_COUNT":return Object(f.a)(Object(f.a)({},e),{},{count:e.count-t.payload});default:return e}},N=(Object(p.createStore)(g),c(28)),y={todos:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(f.a)(Object(f.a)({},e),{},{todos:[].concat(Object(N.a)(e.todos),[t.payload])});case"DEL_TODO":return Object(f.a)(Object(f.a)({},e),{},{todos:Object(N.a)(e.todos.filter((function(e){return e.id!==t.payload})))});default:return e}},C=(Object(p.createStore)(w),{isLoading:!1}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return"Set_Loader"===t.type?Object(f.a)(Object(f.a)({},e),{},{isLoading:t.payload}):e},k=(Object(p.createStore)(T),Object(p.combineReducers)({countRed:g,todosRed:w,loadRed:T})),D=c(42),S=c(43),E=Object(p.createStore)(k,Object(D.composeWithDevTools)(Object(p.applyMiddleware)(S.a))),L=E,R=function(e){return{type:"Set_Loader",payload:e}},A=x.a.create({baseURL:"https://dummyjson.com"});A.interceptors.request.use((function(e){return L.dispatch(R(!0)),e}),(function(e){return Promise.reject(e)})),A.interceptors.response.use((function(e){return L.dispatch(R(!1)),e}),(function(e){return Promise.reject(e)}));var M=A,_=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){M.get("/products").then((function(e){return a(e.data.products)})).catch((function(e){return console.log(e)}))};return Object(l.jsx)("div",{className:"container-fluid min-vh-100",children:Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsxs)(o.b,{to:"/shop/".concat(e.id),className:"card col-md-3",style:{textDecoration:"none",color:"inherit"},children:[Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsxs)("div",{className:"mt-2",children:[Object(l.jsx)("h4",{className:"text-uppercase text-nowrap bd-highlight overflow-hidden",style:{width:"15rem"},children:e.title}),Object(l.jsxs)("div",{className:"mt-5 overflow-hidden",children:[Object(l.jsx)("h1",{className:"main-heading mt-0",children:e.category}),Object(l.jsx)("div",{className:"d-flex flex-row justify-content-between",children:Object(l.jsxs)("div",{className:"ratings",children:[Object(l.jsx)(h.a,{icon:u.e}),Object(l.jsx)(h.a,{icon:u.e}),Object(l.jsx)(h.a,{icon:u.e}),Object(l.jsx)(h.a,{icon:u.e})]})}),Object(l.jsx)("h6",{className:"text-muted ml-1 d-block",children:Object(l.jsx)("p",{children:e.rating.rate})}),Object(l.jsxs)("h6",{className:"text-muted ml-1 text-center",children:["Quantity: ",e.rating.count]})]})]}),Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("img",{src:e.thumbnail,style:{width:"100%"},alt:"productimage",className:"img-fluid"})})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-2 mb-2",children:[Object(l.jsx)("span",{children:"Available colors"}),Object(l.jsxs)("div",{className:"colors d-flex",children:[Object(l.jsx)("span",{})," ",Object(l.jsx)("span",{})," ",Object(l.jsx)("span",{})," ",Object(l.jsx)("span",{})]})]}),Object(l.jsx)("p",{children:" A great option weather you are at office or at home. "})]},e.id)}))})})},I=c(10),F=function(){var e=Object(r.g)().id,t=Object(n.useState)({}),c=Object(m.a)(t,2),a=c[0],s=c[1],i=Object(I.c)((function(e){return e.loadRed.isLoading}));return Object(n.useEffect)((function(){M.get("/products/".concat(e)).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[e]),Object(l.jsx)(l.Fragment,{children:!i&&Object(l.jsx)("div",{className:"container min-vh-100",children:Object(l.jsxs)("div",{className:"product text-center",children:[Object(l.jsx)("div",{className:"img w-50 m-auto",children:Object(l.jsx)("img",{src:a.thumbnail,className:"w-50 img-fluid",alt:"poduct-img"})}),Object(l.jsx)("h2",{className:"my-3",children:a.title}),Object(l.jsx)("p",{className:"text-muted",children:a.category}),Object(l.jsx)("p",{className:"p-5",children:a.description}),Object(l.jsxs)("div",{className:"ratings",children:[Object(l.jsx)(h.a,{icon:u.e})," ",Object(l.jsx)(h.a,{icon:u.e}),Object(l.jsx)(h.a,{icon:u.e})," ",Object(l.jsx)(h.a,{icon:u.e})]}),Object(l.jsxs)("p",{className:"col-2 m-auto pt-2",children:[a.price," ","$"]}),Object(l.jsx)("div",{className:"product-buttons d-flex justify-content-between align-items-center mt-2 mb-2",children:Object(l.jsx)(o.b,{to:"/shop",children:Object(l.jsx)("button",{className:"btn btn-dark m-3 p-4",children:Object(l.jsx)(h.a,{icon:u.a})})})})]})},a.id)})},P=function(e){var t=e.addTodo,c=Object(n.useState)(0),a=Object(m.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(""),r=Object(m.a)(o,2),j=r[0],d=r[1],b=Object(n.useState)(""),h=Object(m.a)(b,2),u=h[0],O=h[1];return Object(l.jsxs)("div",{className:"todo-form container",children:[Object(l.jsx)("h1",{children:"Todo List"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.length>0&&u.length>0&&(t({id:s,title:j,content:u}),d(""),O(""),i(s+1))},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control w-25 m-auto",placeholder:"Title",value:j,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("div",{className:"mt-2",children:Object(l.jsx)("textarea",{value:u,onChange:function(e){return O(e.target.value)},name:"",id:"",cols:"35",rows:"5",placeholder:"Content"})})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Add Todo"})]})]})},G=function(e){var t=e.todos,c=e.delTodo,n=t&&t.length>0?t.map((function(e,t){return Object(l.jsx)("ul",{className:"list-unstyled",children:Object(l.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(l.jsxs)("li",{className:"border p-3",children:[Object(l.jsxs)("p",{children:["Title: ",e.title]}),Object(l.jsxs)("p",{children:["Content: ",e.content]})]}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){c(e.id)},children:Object(l.jsx)(h.a,{icon:u.f})})]})},t)})):Object(l.jsx)("p",{className:"mx-5",children:" No items in the list."});return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"text-start",children:[Object(l.jsx)("h5",{className:"mx-5 text-start",children:"Todo List"}),n]})})},U=function(){var e=Object(I.c)((function(e){return e.todosRed.todos})),t=Object(I.b)();return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)(P,{addTodo:function(e){t({type:"ADD_TODO",payload:e})}}),Object(l.jsx)(G,{todos:e,delTodo:function(e){t({type:"DEL_TODO",payload:e})}})]})})},J=(c(85),function(){var e=Object(I.c)((function(e){return e.countRed.count}));return Object(l.jsx)("div",{className:"count-view container",children:Object(l.jsx)("p",{className:"h3 border border-3 p-5 my-5",children:e})})}),B=function(){var e=Object(I.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){e({type:"INCREMENT_COUNT",payload:1})},className:"btnInc",children:"+"}),Object(l.jsx)("button",{onClick:function(){e({type:"DECREMENT_COUNT",payload:1})},className:"btnDec",children:"-"})]})},Q=function(){return Object(l.jsxs)("div",{className:"Counter",children:[Object(l.jsx)("h1",{children:"Counter App"}),Object(l.jsx)(J,{}),Object(l.jsx)(B,{})]})},X=c(15),q=c(45);X.b.add(q.a,u.b,u.c,u.d);var H=function(){return Object(l.jsxs)("footer",{className:"bg-dark text-center text-white",children:[Object(l.jsxs)("div",{className:"container p-3 pb-0",children:[Object(l.jsx)("h3",{className:"contact-me p-3",children:"Contact me:"}),Object(l.jsxs)("section",{className:"mb-4",children:[Object(l.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://www.linkedin.com/in/mahmoudgaber07/",role:"button",children:Object(l.jsx)(h.a,{icon:["fab","linkedin"]})}),Object(l.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://github.com/mahmoudgaber07",role:"button",children:Object(l.jsx)(h.a,{icon:["fab","github"]})}),Object(l.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://www.behance.net/mahmoudgaber16",role:"button",children:Object(l.jsx)(h.a,{icon:["fab","behance"]})}),Object(l.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://www.facebook.com/MahmoudGaber07/",role:"button",children:Object(l.jsx)(h.a,{icon:["fab","facebook"]})}),Object(l.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"mailto: mahmoudgaber94@gmail.com",role:"button",children:Object(l.jsx)(h.a,{icon:["fas","envelope"]})})]})]}),Object(l.jsx)("div",{className:"text-center p-3",children:"All Copyright \xa9 : Mahmoud Gaber 2021"})]})},V=(c(86),c(49)),W=(c(87),function(){return Object(l.jsx)("div",{id:"Loader",children:Object(l.jsx)(V.a,{height:"100",width:"100",color:"#212529",secondaryColor:"#212529",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}),$=function(){var e=Object(I.c)((function(e){return e.loadRed.isLoading}));return Object(l.jsxs)(o.a,{children:[Object(l.jsxs)("main",{className:"App min-vh-100",children:[Object(l.jsx)(j,{}),e&&Object(l.jsx)(W,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",element:Object(l.jsx)(b,{}),exact:!0}),Object(l.jsx)(r.a,{path:"/about",element:Object(l.jsx)(b,{})}),Object(l.jsx)(r.a,{path:"/shop",element:Object(l.jsx)(_,{}),exact:!0}),Object(l.jsx)(r.a,{path:"/shop/:id",element:Object(l.jsx)(F,{})}),Object(l.jsx)(r.a,{path:"/todo",element:Object(l.jsx)(U,{})}),Object(l.jsx)(r.a,{path:"/counter",element:Object(l.jsx)(Q,{})})]})]}),Object(l.jsx)(H,{})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(90),c(91);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I.a,{store:E,children:Object(l.jsx)($,{})})}),document.getElementById("root")),z()},54:function(e,t,c){},55:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.bc07e83a.chunk.js.map