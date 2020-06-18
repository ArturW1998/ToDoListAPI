(this.webpackJsonptodolistapi=this.webpackJsonptodolistapi||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=a(15),s=a(11),u=a(31),m=a(44),d=a.n(m),p=a(136),f=a(134),E=Object(f.a)({button:{margin:"1rem 0"}}),h=function(e){var t=e.children,a=e.color,n=e.className,c=e.onClick,o=e.component,i=Object(u.a)(e,["children","color","className","onClick","component"]),l=E(),s=d()(l.button,n);return r.a.createElement(p.a,Object.assign({},i,{color:a,className:s,onClick:c,component:o,variant:"contained",fullWidth:!0}),t)};h.defaultProps={color:"primary",className:"",onClick:function(){},component:"button"};var b=h,g=function(){return r.a.createElement(b,{component:l.b,to:"/tasks"},"Go to the todo list")},v=a(112),O=a(141),j=a(142),k=a(17),T=a(25),S=a.n(T),x=a(36),A={KEY:"tasks"},w=a(14),C={getDataById:function(e,t){return e.filter((function(e){return e.id===t}))[0]||{}},sortById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.sort((function(e,t){return e.id-t.id}))},addToLocalStorage:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))},getFromLocalStorage:function(e){return window.localStorage.getItem(e)},getApiInstance:function(){var e=Object(x.a)(S.a.mark((function e(t,a,n){var r,c,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:t},c={headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},r=n?Object(w.a)(Object(w.a)({},r),c):r,e.prev=3,e.next=6,fetch(a,r);case 6:return o=e.sent,e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(3),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,a,n){return e.apply(this,arguments)}}()},y={BASE_PATH:"https://5ee4fc53ddcea00016a37177.mockapi.io/api/v1",TASKS_PATH:"/tasks"},I={getTasks:function(){return C.getApiInstance("GET","".concat(y.BASE_PATH).concat(y.TASKS_PATH))},deleteTask:function(e){return C.getApiInstance("DELETE","".concat(y.BASE_PATH).concat(y.TASKS_PATH,"/").concat(e))},createTask:function(e,t){return C.getApiInstance("POST","".concat(y.BASE_PATH).concat(y.TASKS_PATH),{text:t})},changeTask:function(e,t){return C.getApiInstance("PUT","".concat(y.BASE_PATH).concat(y.TASKS_PATH,"/").concat(e),{id:e,text:t})}},N=function(e,t,a){var r=Object(n.useReducer)(a,t,(function(){var a;try{var n=C.getFromLocalStorage(e)||"".concat(t);a=JSON.parse(n)}catch(r){a=t}return a})),c=Object(k.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){C.addToLocalStorage(e,o)}),[e,o]),[o,i]},_=a(62),L={FETCH_INIT:"FETCH_INIT",FETCH_SUCCESS:"FETCH_SUCCESS",FETCH_FAILURE:"FETCH_FAILURE",ADD_TASK:"ADD_TASK",REMOVE_TASK:"REMOVE_TASK",EDIT_TASK:"EDIT_TASK"},D={isLoading:!0,isError:!1,tasks:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.tasks,r=t.id,c=t.text;switch(a){case L.FETCH_INIT:return Object(w.a)(Object(w.a)({},e),{},{isLoading:!0,isError:!1});case L.FETCH_SUCCESS:return Object(w.a)(Object(w.a)({},e),{},{isLoading:!1,isError:!1,tasks:n});case L.FETCH_FAILURE:return Object(w.a)(Object(w.a)({},e),{},{isLoading:!1,isError:!0});case L.ADD_TASK:return Object(w.a)(Object(w.a)({},e),{},{tasks:[].concat(Object(_.a)(e.tasks),[{id:r,text:c}])});case L.REMOVE_TASK:return Object(w.a)(Object(w.a)({},e),{},{tasks:Object(_.a)(e.tasks).filter((function(e){return e.id!==r}))});case L.EDIT_TASK:return Object(w.a)(Object(w.a)({},e),{},{tasks:Object(_.a)(e.tasks).map((function(e){return e.id===r?Object(w.a)(Object(w.a)({},e),{},{text:c}):e}))});default:return e}},F=function(e,t){return{type:L.ADD_TASK,id:e,text:t}},H=function(e,t){return{type:L.EDIT_TASK,id:e,text:t}},K=function(e){return{type:L.REMOVE_TASK,id:e}},R=function(){var e=N(A.KEY,D,P),t=Object(k.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)(Object(x.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:L.FETCH_INIT}),e.prev=1,e.next=4,I.getTasks();case 4:t=e.sent,a=C.sortById(t),r({type:L.FETCH_SUCCESS,tasks:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r({type:L.FETCH_FAILURE});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[r]);return Object(n.useEffect)((function(){c()}),[c]),[a,r,c]},B=a(43),U=Object(f.a)({paper:{margin:"1rem 0",padding:function(e){return e?"1rem 1rem 0":"1rem"}}}),M=function(e){var t=e.children,a=U(!!t);return r.a.createElement(v.a,{className:a.paper},r.a.createElement(B.a,{color:"inherit",align:"center"},"Something went wrong!"),t)};M.defaultProps={children:null};var W=M,G=a(137),J=a(138),z=Object(f.a)({loader:{height:function(e){return"calc(100vh - ".concat(e,"px)")}}}),V=function(e){var t=e.size,a=e.color,n=e.className,c=Object(u.a)(e,["size","color","className"]),o=z(t),i=d()(o.loader,n);return r.a.createElement(G.a,{className:i,justify:"center",alignItems:"center",container:!0},r.a.createElement(J.a,Object.assign({},c,{size:t,color:a})))};V.defaultProps={size:100,color:"primary",className:""};var Y=V,X=Object(n.createContext)(D.tasks),$=Object(n.createContext)((function(){})),q=function(e){var t=e.children,a=R(),n=Object(k.a)(a,3),c=n[0],o=n[1],i=n[2],l=c.tasks,s=c.isLoading;return c.isError?r.a.createElement(W,null,r.a.createElement(b,{onClick:i},"Try again")):s?r.a.createElement(Y,null):r.a.createElement(X.Provider,{value:l},r.a.createElement($.Provider,{value:o},t))},Q=a(139),Z=a(140),ee=Object(f.a)({listItem:{height:"64px"},listItemText:{color:"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginRight:"7rem"}}),te=function(e){var t=e.text,a=e.id,n=Object(s.i)().url,c=ee();return r.a.createElement(Q.a,{className:c.listItem,component:l.b,to:"".concat(n,"/").concat(a),button:!0},r.a.createElement(Z.a,{className:c.listItemText},t))};te.defaultProps={text:"Simple todo"};var ae=Object(n.memo)(te),ne=function(){var e=Object(n.useContext)(X),t=e.length-1;return e.length?r.a.createElement(O.a,null,e.map((function(e,a){return r.a.createElement("li",{key:e.id},r.a.createElement(ae,e),a<t&&r.a.createElement(j.a,null))}))):null},re=function(){var e=Object(s.i)().url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{component:l.b,to:"".concat(e,"/new")},"Create a new todo"),r.a.createElement(v.a,null,r.a.createElement(ne,null)))},ce=a(165),oe=a(160),ie={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)(e),a=Object(k.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target.value;c(t)},i=function(){c("")};return[r,o,i]},se=function(e){var t=Object(n.useState)(e),a=Object(k.a)(t,2),r=a[0],c=a[1];return[r,function(){c(!0)},function(){c(!1)}]},ue=a(21),me=a(143),de=function(e){var t=Object(ue.a)().breakpoints;return Object(me.a)(t.down(e))},pe=a(164),fe=a(145),Ee=a(146),he=a(147),be=a(148),ge=function(e){var t=e.children,a=e.title,n=e.fullScreen,c=e.open,o=e.handleClose,i=Object(u.a)(e,["children","title","fullScreen","open","handleClose"]);return r.a.createElement(pe.a,Object.assign({},i,{fullScreen:n,open:c,onClose:o,"aria-labelledby":"responsive-dialog-title"}),r.a.createElement(fe.a,{id:"responsive-dialog-title"},a),r.a.createElement(Ee.a,null,r.a.createElement(he.a,null,t)),r.a.createElement(be.a,null,r.a.createElement(p.a,{onClick:o,color:"primary",autoFocus:!0},"OK")))};ge.defaultProps={children:null,title:"Dialog title",fullScreen:!1,open:!1,handleClose:function(){}};var ve=ge,Oe=Object(f.a)({paper:{margin:"1rem 0",padding:"1rem 1rem 0"}}),je=function(){var e=Object(s.f)(),t=Object(s.h)().id,a=Object(n.useContext)($),c=Object(n.useContext)(X),o=se(!1),i=Object(k.a)(o,3),l=i[0],u=i[1],m=i[2],d=de(ie.SMALL),p=C.getDataById(c,t),f=le(p.text),E=Object(k.a)(f,3),h=E[0],b=E[1],g=E[2],O=Oe(),j=p.id?"Edit the todo":"Add a new todo",T=function(){var t=Object(x.a)(S.a.mark((function t(n){var r,c,o,i,l;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=p.id?H:F,c=p.id?I.changeTask:I.createTask,t.prev=3,t.next=6,c(p.id,h);case 6:o=t.sent,i=o.id,l=o.text,a(r(i,l)),g(),e.push("/tasks/".concat(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),u();case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:O.paper},r.a.createElement("form",{onSubmit:T},r.a.createElement(ce.a,{htmlFor:"text",shrink:!0},j),r.a.createElement(oe.a,{value:h,onChange:b,id:"text",margin:"normal",fullWidth:!0,autoFocus:!0}))),r.a.createElement(ve,{open:l,handleClose:m,fullScreen:d,title:"Something went wrong..."},"Error, please try again later."))},ke=a(151),Te=a(161),Se=a(152),xe=a(153),Ae=a(154),we=a(163),Ce=a(150),ye=function(e){var t=e.children,a=e.title,n=e.ariaLabel,c=e.className,o=Object(u.a)(e,["children","title","ariaLabel","className"]);return r.a.createElement(we.a,Object.assign({},o,{className:c,title:a,"aria-label":n,TransitionComponent:Ce.a,arrow:!0}),t)};ye.defaultProps={ariaLabel:"",className:""};var Ie=ye,Ne=Object(f.a)({container:{height:"64px",display:"flex",position:"relative",textAlign:"left",alignItems:"center",padding:"8px 16px",justifyContent:"flex-start",textDecoration:"none",backgroundColor:"#fff"},textBox:{flex:"1 1 auto",minWidth:0,margin:"4px 0"},typography:{color:"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginRight:"7rem"},secondaryAction:{top:"50%",right:"16px",position:"absolute",transform:"translateY(-50%)"}}),_e=[{id:"home",exact:!0,path:"/",component:g},{id:"tasks",exact:!0,path:"/tasks",component:re},{id:"newTask",path:"/tasks/new",component:je},{id:"task",exact:!0,path:"/tasks/:id",component:function(){var e=Object(s.i)().url,t=Object(s.f)(),a=Object(s.h)().id,c=Object(n.useContext)($),o=Object(n.useContext)(X),i=se(!1),u=Object(k.a)(i,3),m=u[0],d=u[1],p=u[2],f=de(ie.SMALL),E=Ne(),h=C.getDataById(o,a),g=function(){var e=Object(x.a)(S.a.mark((function e(a){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,I.deleteTask(h.id);case 4:n=e.sent,r=n.id,c(K(r)),t.push("/tasks"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),d();case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{component:l.b,to:"/tasks"},"Go back to the todo list"),r.a.createElement(v.a,null,r.a.createElement(ke.a,{className:E.container},r.a.createElement(Te.a,{className:E.textBox},r.a.createElement(B.a,{className:E.typography,component:"span"},h.text)),r.a.createElement(Te.a,{className:E.secondaryAction},r.a.createElement(Ie,{title:"Delete","aria-label":"delete"},r.a.createElement(Se.a,{onClick:g},r.a.createElement(xe.a,null))),r.a.createElement(Ie,{title:"Edit","aria-label":"edit"},r.a.createElement(Se.a,{onClick:function(a){a.preventDefault(),t.push("".concat(e,"/edit"))}},r.a.createElement(Ae.a,null)))))),r.a.createElement(ve,{open:m,handleClose:p,fullScreen:f,title:"Something went wrong..."},"Error, please try again later."))}},{id:"editTask",path:"/tasks/:id/edit",component:je},{id:"NoMatch",component:function(){return r.a.createElement(W,null,r.a.createElement(b,{component:l.b,to:"/tasks"},"Go to the home page"))}}],Le=a(156),De=a(157),Pe=a(158),Fe=a(159),He=a(155),Ke=Object(f.a)({link:{"&:hover":{textDecoration:"none"}}}),Re=function(e){var t=e.children,a=e.href,n=e.color,c=e.className,o=Object(u.a)(e,["children","href","color","className"]),i=Ke(),s=d()(i.link,c);return r.a.createElement(He.a,Object.assign({},o,{component:l.b,to:a,color:n,className:s}),t)};Re.defaultProps={color:"inherit",className:""};var Be=Re,Ue=Object(f.a)({paper:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"},appBar:{height:"64px"},grid:{margin:"1rem 0"},fab:{margin:"1rem",position:"fixed",bottom:0,right:0}}),Me=function(e){var t=e.children,a=Object(s.f)(),n=Object(s.g)().pathname,c=Ue(),o=n.includes("tasks");return r.a.createElement(v.a,{className:c.paper,elevation:0},r.a.createElement(Le.a,{className:c.appBar,color:"primary",position:"static"},r.a.createElement(De.a,null,r.a.createElement(Be,{href:"/"},"ToDo List API"))),r.a.createElement(G.a,{className:c.grid,justify:"center",container:!0},r.a.createElement(G.a,{xs:11,md:8,lg:4,item:!0},r.a.createElement(q,null,t))),o&&r.a.createElement(Ie,{title:"Go back","aria-label":"back"},r.a.createElement(Pe.a,{className:c.fab,onClick:a.goBack,color:"primary"},r.a.createElement(Fe.a,null))))},We=a(78),Ge=a(79),Je=a(81),ze=a(80),Ve=function(e){Object(Je.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(We.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isError:!1},e.reload=function(){return window.location.reload()},e}return Object(Ge.a)(a,[{key:"render",value:function(){var e=this.state.isError,t=this.props.children;return e?r.a.createElement(W,null,r.a.createElement(b,{onClick:this.reload},"Reload the page")):t}}],[{key:"getDerivedStateFromError",value:function(){return{isError:!0}}}]),a}(n.Component),Ye=function(){return r.a.createElement(n.StrictMode,null,r.a.createElement(Ve,null,r.a.createElement(l.a,null,r.a.createElement(Me,null,r.a.createElement(s.c,null,_e.map((function(e){var t=e.id,a=e.exact,n=e.path,c=e.component;return r.a.createElement(s.a,{key:t,exact:a,path:n},r.a.createElement(c,null))})))))))};a(108);Object(c.render)(r.a.createElement(Ye,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ToDoListAPI",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ToDoListAPI","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()},98:function(e,t,a){e.exports=a(109)}},[[98,1,2]]]);
//# sourceMappingURL=main.c491ec3e.chunk.js.map