(this.webpackJsonpnotebook=this.webpackJsonpnotebook||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(17),r=n.n(c),l=(n(36),n(37),n(9)),i=n(10),s=n(14),u=n(11),d=n(15),m=n(12),h=n(13),p=Object(h.b)((function(e){return{notesFR:e.notes}}),(function(e){return{deleteNote:function(t){e(function(e){return{type:"DELETE_NOTE",id:e}}(t))}}}))((function(e){var t=e.notesFR,n=e.deleteNote,a=t.length?t.map((function(e){return o.a.createElement("div",{className:"col-4",key:e.id},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement(m.b,{to:"/"+e.id,style:{textDecoration:"none",color:"black"}},o.a.createElement("h5",{className:"card-title"},e.title)),o.a.createElement("p",{className:"card-subtitle"}," ",e.date," "),o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-outline-danger",style:{marginTop:"20px"},onClick:function(){n(e.id)}},"Delete")))))})):o.a.createElement("div",null,o.a.createElement("h1",null,"There are no notes"));return o.a.createElement("div",{className:"row"}," ",a," ")})),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={id:null},n.handleClick=function(){console.log(n.state.id)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);this.setState({id:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"text-center"},o.a.createElement(m.b,{to:"/"+this.state.id},o.a.createElement("button",{className:"btn btn-primary",style:{marginTop:"20px"},onClick:this.handleClick}," NEW NOTE ")))}}]),t}(a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"dashboard"},o.a.createElement(p,null),o.a.createElement(E,null))}}]),t}(a.Component),f=n(8),N=n(20),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",content:"",id:null},n.handleChange=function(e){n.setState(Object(N.a)({},e.target.id,e.target.value))},n.handleCreate=function(){n.props.addNote(n.state),n.props.history.push("/")},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.note_id;this.setState({id:t},(function(){return console.log(e.state)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Title "),o.a.createElement("input",{type:"text",id:"title",className:"form-control",onChange:this.handleChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{className:"form-control",id:"content",rows:"25",onChange:this.handleChange})),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-outline-primary",onClick:this.handleCreate,style:{margin:"20px"}},"Save"),o.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e.props.history.push("/")},style:{margin:"20px"}},"Cancel"))))}}]),t}(a.Component),y=Object(h.b)((function(e){return{notes:e.notes}}),(function(e){return{addNote:function(t){e({type:"ADD_NOTE",newNote:t})}}}))(v);var g=function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App container"},o.a.createElement("h1",{className:"text-center"},"Notebook"),o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/",component:b}),o.a.createElement(f.a,{path:"/:note_id",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(19),j=n(30),k=n(25),C={notes:[{title:"Note 1",date:"date 1",id:"1023123",content:"content 1"},{title:"Note 2",date:"date 2",id:"2",content:"content 2"},{title:"Note 3",date:"date 3",id:"3",content:"Eric Kim is a phone"},{title:"Note 4",date:"date 4",id:"4",content:"content 4"},{title:"Note 5",date:"date 5",id:"5",content:"content 5"},{title:"Note 6",date:"date 6",id:"6",content:"content 6"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;if("DELETE_NOTE"===t.type){var n=e.notes.filter((function(e){return e.id!==t.id}));return Object(k.a)({},e,{notes:n})}if("ADD_NOTE"===t.type){var a=[].concat(Object(j.a)(e.notes),[t.newNote]);return Object(k.a)({},e,{notes:a})}return e},x=Object(O.b)(w);r.a.render(o.a.createElement(h.a,{store:x},o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.64dcc343.chunk.js.map