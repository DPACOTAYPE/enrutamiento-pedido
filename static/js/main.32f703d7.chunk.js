(this["webpackJsonppedido-enrutamiento"]=this["webpackJsonppedido-enrutamiento"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(23),o=a.n(l),r=a(12),i=a(3),s=a(1),m=function(e){var t=e.tipo,a=e.texto,n="";switch(t){case"success":n="alert alert-success text-center";break;case"danger":n="alert alert-danger text-center";break;case"warning":n="alert alert-warning text-center";break;case"info":n="alert alert-info text-center";break;default:n="alert alert-light text-center"}return c.a.createElement("div",{className:n,role:"alert"},c.a.createElement("h4",{className:"alert-heading"},"Cargando"),c.a.createElement("p",null,a),c.a.createElement("p",{className:"mb-0"}))},d=a(9),u=a(4),p=a(2),b=a.n(p),E="https://5ec86498155c130016a909dd.mockapi.io",f=function(e){var t=e.getClientes,a=e.setObjCliente,l=e.objCliente,o={cli_nom:"",cli_ape:"",cli_est:"",cli_dni:""},r=Object(n.useState)({}),i=Object(s.a)(r,2),m=i[0],p=i[1];Object(n.useEffect)((function(){console.log("efecto objCliente"),p(l||o)}),[l]);var f=function(e){p(Object(u.a)(Object(u.a)({},m),{},Object(d.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",{className:"card-title"},"Registrar Cliente")),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"row",onSubmit:function(e){e.preventDefault(),""===m.cli_nom.trim()||""===m.cli_ape.trim()||""===m.cli_dni.trim()||""===m.cli_est.trim()?b.a.fire({icon:"error",title:"Cuidado!",text:"Todos los campos deben estar llenos"}):l?b.a.fire({title:"\xbfSeguro que desea editar el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS EDITAR AL  CLIENTE"),function(e){var n="".concat(E,"/cliente/").concat(l.id);fetch(n,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){b.a.fire({title:"Actualizado!",text:"Registro actualizado correctamente",icon:"success",timer:1500}),t(),a(null)}))}))}(m))})):b.a.fire({title:"\xbfSeguro que desea crear el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS CREAR AL USUARIO"),function(e){var a="".concat(E,"/cliente");fetch(a,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){e.json().then((function(e){b.a.fire({title:"\xc9xito!",icon:"success",text:"El Cliente ha sido creado con \xe9xito en la base de datos",timer:2e3}),t()}))}))}(m))}))}},c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Nombre:"),c.a.createElement("input",{type:"text",name:"cli_nom",className:"form-control",onChange:f,value:m.cli_nom})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Apellido:"),c.a.createElement("input",{type:"text",name:"cli_ape",className:"form-control",onChange:f,value:m.cli_ape})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Estado:"),c.a.createElement("select",{className:"form-control",name:"cli_est",onChange:f,value:m.cli_est},c.a.createElement("option",{value:""},"-Seleccione-"),c.a.createElement("option",{value:"true"},"Habilitado"),c.a.createElement("option",{value:"false"},"Inhabilitado"))),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Dni:"),c.a.createElement("input",{type:"text",name:"cli_dni",className:"form-control",onChange:f,value:m.cli_dni})),c.a.createElement("div",{className:"form-group col-md-6"},l?c.a.createElement("button",{className:"btn btn-success btn-block",type:"submit"},"Actualizar Cliente"):c.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Crear Cliente")),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("button",{className:"btn btn-danger btn-block",type:"submit"},"Cancelar")))))},h=a(11),v=a.n(h),g=function(e){var t=e.cliente,a=e.numero,l=e.setObjCliente,o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=r[0],m=r[1];return Object(n.useEffect)((function(){"true"===t.cli_est&&m(!0)}),[]),c.a.createElement("tr",null,c.a.createElement("td",null,a),c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.cli_nom),c.a.createElement("td",null,t.cli_ape),c.a.createElement("td",null,i?c.a.createElement("span",{className:"badge badge-success"},"Habilitado"):c.a.createElement("span",{className:"badge badge-danger"},"Inhabilitado"),c.a.createElement(v.a,{checked:i,onChange:function(){var e=Object(u.a)({},t);e.cli_est=!i+"";var a="".concat(E,"/cliente/").concat(t.id);fetch(a,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){console.log(e),m(!i)}))}))}})),c.a.createElement("td",null,t.cli_dni),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-info",onClick:function(){l(t)}},"Editar")))},j=function(e){var t=e.clientes,a=e.setObjCliente;return c.a.createElement("table",{className:"table table-hover table-bordered table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("strong",null,"#")),c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"Nombre"),c.a.createElement("th",null,"Apellido"),c.a.createElement("th",null,"Estado"),c.a.createElement("th",null,"Dni"),c.a.createElement("th",null,"Acciones"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(g,{numero:t,cliente:e,key:e.id,setObjCliente:a})}))))},O=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),r=Object(s.a)(o,2),i=r[0],d=r[1],u=Object(n.useState)(null),p=Object(s.a)(u,2),b=p[0],E=p[1],h=function(){a||l(!0),fetch("https://5ec86498155c130016a909dd.mockapi.io/cliente").then((function(e){e.json().then((function(e){l(!1),d(e)}))}))};return Object(n.useEffect)((function(){h()}),[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(f,{getClientes:h,objCliente:b,setObjCliente:E}))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},!0===a?c.a.createElement(m,{tipo:"info",texto:"Cargando repartidores"}):c.a.createElement(j,{clientes:i,setObjCliente:E}))))},N=a(10),_=a.n(N),y=a(14),C=a(15),S=a(16),P=function(){function e(){Object(C.a)(this,e),this.endpoint="/repartidor"}return Object(S.a)(e,[{key:"getAllRepartidores",value:function(){var e=this;return new Promise((function(t,a){fetch("".concat(E).concat(e.endpoint)).then((function(e){e.json().then((function(e){t(e)}))}))}))}}]),e}(),x=function(){function e(){Object(C.a)(this,e),this.endpoint="/cliente"}return Object(S.a)(e,[{key:"getAllClientes",value:function(){var e=Object(y.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E).concat(this.endpoint));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=function(){function e(){Object(C.a)(this,e),this.endpoint="/producto"}return Object(S.a)(e,[{key:"getAllProductos",value:function(){var e=Object(y.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E).concat(this.endpoint));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),R={id_pro:"",id_rep:"",id_cli:"",ped_ini:"",ped_fin:"",ped_est:"",ped_fecha:""},w=function(e,t,a){var l=Object(n.useState)({}),o=Object(s.a)(l,2),r=o[0],i=o[1],m=Object(n.useState)([]),p=Object(s.a)(m,2),f=p[0],h=p[1],v=Object(n.useState)([]),g=Object(s.a)(v,2),j=g[0],O=g[1],N=Object(n.useState)([]),C=Object(s.a)(N,2),S=C[0],w=C[1],A=new P,I=new x,F=new k;Object(n.useEffect)((function(){T()}),[]),Object(n.useEffect)((function(){console.log("efecto objPedido"),i(e||R)}),[e]);var D=function(e){i(Object(u.a)(Object(u.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))},T=function(){var e=Object(y.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,A.getAllRepartidores();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=O,e.next=8,I.getAllClientes();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=w,e.next=13,F.getAllProductos();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",{className:"card-title"},"Formulario de Pedidos")),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"row",onSubmit:function(n){n.preventDefault(),""===r.id_pro.trim()||""===r.id_rep.trim()||""===r.id_cli.trim()||""===r.ped_ini.trim()||""===r.ped_fin.trim()||""===r.ped_est.trim()||""===r.ped_fecha.trim()?b.a.fire({icon:"error",title:"Cuidado!",text:"Todos los campos deben estar llenos"}):e?b.a.fire({title:"\xbfSeguro que desea editar el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(n){n.value&&(console.log("OK PODEMOS EDITAR AL PEDIDO"),function(n){var c="".concat(E,"/pedido/").concat(e.id);fetch(c,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.json().then((function(e){b.a.fire({title:"Actualizado!",text:"Registro actualizado correctamente",icon:"success",timer:1500}),a(),t(null)}))}))}(r))})):b.a.fire({title:"\xbfSeguro que desea crear el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS CREAR AL USUARIO"),function(e){var t="".concat(E,"/pedido");fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){e.json().then((function(e){b.a.fire({title:"\xc9xito!",icon:"success",text:"El Pedido ha sido creado con \xe9xito en la base de datos",timer:2e3}),a()}))}))}(r))}))}},c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Seleccione Producto"),c.a.createElement("select",{name:"id_pro",onChange:D,value:r.id_pro,id:"",className:"form-control"},S.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.pro_nom," | S/.",e.pro_pre)})))),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Seleccione Repartidor"),c.a.createElement("select",{name:"id_rep",onChange:D,value:r.id_rep,id:"",className:"form-control"},f.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.rep_nom," ",e.rep_ape)})))),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Seleccione Cliente"),c.a.createElement("select",{name:"id_cli",onChange:D,value:r.id_cli,id:"",className:"form-control"},j.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.cli_nom," ",e.cli_ape)})))),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Entrega Inicio"),c.a.createElement("input",{type:"text",name:"ped_ini",onChange:D,value:r.ped_ini,className:"form-control"})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Entrega Fin"),c.a.createElement("input",{type:"text",name:"ped_fin",onChange:D,value:r.ped_fin,className:"form-control"})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Estado"),c.a.createElement("select",{name:"ped_est",onChange:D,id:"",className:"form-control",value:r.ped_est},c.a.createElement("option",{value:""},"Seleccione"),c.a.createElement("option",{value:"true"},"Solicitado"),c.a.createElement("option",{value:"false"},"Realizado"))),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Fecha"),c.a.createElement("input",{type:"date",name:"ped_fecha",onChange:D,value:r.ped_fecha,className:"form-control"})),c.a.createElement("div",{className:"form-group col-md-6"},e?c.a.createElement("button",{className:"btn btn-success btn-block",type:"submit"},"Actualizar Pedido"):c.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Crear Pedido")),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("button",{className:"btn btn-danger btn-block",type:"submit"},"Cancelar")))))))},A=function(e){var t=e.pedido,a=e.numero,l=e.setObjPedido,o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=r[0],m=r[1];return Object(n.useEffect)((function(){"true"===t.ped_est&&m(!0)}),[]),c.a.createElement("tr",null,c.a.createElement("td",null,a),c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.id_pro),c.a.createElement("td",null,t.id_rep),c.a.createElement("td",null,t.id_cli),c.a.createElement("td",null,t.ped_ini),c.a.createElement("td",null,t.ped_fin),c.a.createElement("td",null,i?c.a.createElement("span",{className:"badge badge-success"},"Solicitado"):c.a.createElement("span",{className:"badge badge-warning"},"Realizado"),c.a.createElement(v.a,{checked:i,onChange:function(){var e=Object(u.a)({},t);e.ped_est=!i+"";var a="".concat(E,"/pedido/").concat(t.id);fetch(a,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){console.log(e),m(!i)}))}))}})),c.a.createElement("td",null,t.ped_fecha),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-info",onClick:function(){l(t)}},"Editar")))},I=function(e){var t=e.pedidos,a=e.setObjPedido;return c.a.createElement("table",{className:"table table-hover table-bordered table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("strong",null,"#")),c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"Id Producto"),c.a.createElement("th",null,"Id Repartidor"),c.a.createElement("th",null,"Id Cliente"),c.a.createElement("th",null,"Pedido Inicio"),c.a.createElement("th",null,"Pedido Final"),c.a.createElement("th",null,"Estado de Pedido"),c.a.createElement("th",null,"Fecha de Pedido"),c.a.createElement("th",null,"Acciones"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(A,{numero:t,pedido:e,key:e.id,setObjPedido:a})}))))},F=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),r=Object(s.a)(o,2),i=r[0],d=r[1],u=Object(n.useState)(null),p=Object(s.a)(u,2),b=p[0],E=p[1],f=function(){a||l(!0),fetch("https://5ec86498155c130016a909dd.mockapi.io/pedido").then((function(e){e.json().then((function(e){l(!1),d(e)}))}))};return Object(n.useEffect)((function(){f()}),[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(w,{getPedidos:f,objPedido:b,setObjPedido:E}))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},!0===a?c.a.createElement(m,{tipo:"info",texto:"Cargando pedidos"}):c.a.createElement(I,{pedidos:i,setObjPedido:E}))))},D=function(e){var t=e.repartidor,a=e.numero,l=e.setObjRepartidor,o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=r[0],m=r[1];return Object(n.useEffect)((function(){"true"===t.rep_est&&m(!0)}),[]),c.a.createElement("tr",null,c.a.createElement("td",null,a),c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.rep_nom),c.a.createElement("td",null,t.rep_ape),c.a.createElement("td",null,i?c.a.createElement("span",{className:"badge badge-success"},"Habilitado"):c.a.createElement("span",{className:"badge badge-danger"},"Inhabilitado"),c.a.createElement(v.a,{checked:i,onChange:function(){var e=Object(u.a)({},t);e.rep_est=!i+"";var a="".concat(E,"/repartidor/").concat(t.id);fetch(a,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){console.log(e),m(!i)}))}))}})),c.a.createElement("td",null,t.rep_dni),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-info",onClick:function(){l(t)}},"Editar")))},T=function(e){var t=e.repartidores,a=e.setObjRepartidor;return c.a.createElement("table",{className:"table table-hover table-bordered table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("strong",null,"#")),c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"Nombre"),c.a.createElement("th",null,"Apellido"),c.a.createElement("th",null,"Estado"),c.a.createElement("th",null,"Dni"),c.a.createElement("th",null,"Acciones"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(D,{numero:t,repartidor:e,key:e.id,setObjRepartidor:a})}))))},L=function(e){var t=e.getRepartidores,a=e.setObjRepartidor,l=e.objRepartidor,o={rep_nom:"",rep_ape:"",rep_est:"",rep_dni:""},r=Object(n.useState)({}),i=Object(s.a)(r,2),m=i[0],p=i[1];Object(n.useEffect)((function(){console.log("efecto objRepartidor"),p(l||o)}),[l]);var f=function(e){p(Object(u.a)(Object(u.a)({},m),{},Object(d.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",{className:"card-title"},"Registrar Repartidor")),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"row",onSubmit:function(e){e.preventDefault(),""===m.rep_nom.trim()||""===m.rep_ape.trim()||""===m.rep_dni.trim()||""===m.rep_est.trim()?b.a.fire({icon:"error",title:"Cuidado!",text:"Todos los campos deben estar llenos"}):l?b.a.fire({title:"\xbfSeguro que desea editar el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS EDITAR AL REPARTIDOR"),function(e){var n="".concat(E,"/repartidor/").concat(l.id);fetch(n,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){b.a.fire({title:"Actualizado!",text:"Registro actualizado correctamente",icon:"success",timer:1500}),t(),a(null)}))}))}(m))})):b.a.fire({title:"\xbfSeguro que desea crear el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS CREAR AL USUARIO"),function(e){var a="".concat(E,"/repartidor");fetch(a,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){e.json().then((function(e){b.a.fire({title:"\xc9xito!",icon:"success",text:"El Repartidor ha sido creado con \xe9xito en la base de datos",timer:2e3}),t()}))}))}(m))}))}},c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Nombre:"),c.a.createElement("input",{type:"text",name:"rep_nom",className:"form-control",onChange:f,value:m.rep_nom})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Apellido:"),c.a.createElement("input",{type:"text",name:"rep_ape",className:"form-control",onChange:f,value:m.rep_ape})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Estado:"),c.a.createElement("select",{className:"form-control",name:"rep_est",onChange:f,value:m.rep_est},c.a.createElement("option",{value:""},"-Seleccione-"),c.a.createElement("option",{value:"true"},"Habilitado"),c.a.createElement("option",{value:"false"},"Inhabilitado"))),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Dni:"),c.a.createElement("input",{type:"text",name:"rep_dni",className:"form-control",onChange:f,value:m.rep_dni})),c.a.createElement("div",{className:"form-group col-md-6"},l?c.a.createElement("button",{className:"btn btn-success btn-block",type:"submit"},"Actualizar Repartidor"):c.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Crear Repartidor")),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("button",{className:"btn btn-danger btn-block",type:"submit"},"Cancelar")))))},U=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),r=Object(s.a)(o,2),i=r[0],d=r[1],u=Object(n.useState)(null),p=Object(s.a)(u,2),b=p[0],E=p[1],f=function(){a||l(!0),fetch("https://5ec86498155c130016a909dd.mockapi.io/repartidor").then((function(e){e.json().then((function(e){l(!1),d(e)}))}))};return Object(n.useEffect)((function(){f()}),[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(L,{getRepartidores:f,objRepartidor:b,setObjRepartidor:E}))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},!0===a?c.a.createElement(m,{tipo:"info",texto:"Cargando repartidores"}):c.a.createElement(T,{repartidores:i,setObjRepartidor:E}))))},z=function(e){var t=e.producto,a=e.numero,l=e.setObjProducto,o=Object(n.useState)(!1),r=Object(s.a)(o,2),i=r[0],m=r[1];return Object(n.useEffect)((function(){"true"===t.pro_est&&m(!0)}),[]),c.a.createElement("tr",null,c.a.createElement("td",null,a),c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.pro_nom),c.a.createElement("td",null,t.pro_pre),c.a.createElement("td",null,i?c.a.createElement("span",{className:"badge badge-success"},"Habilitado"):c.a.createElement("span",{className:"badge badge-danger"},"Inhabilitado"),c.a.createElement(v.a,{checked:i,onChange:function(){var e=Object(u.a)({},t);e.pro_est=!i+"";var a="".concat(E,"/producto/").concat(t.id);fetch(a,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){console.log(e),m(!i)}))}))}})),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-info",onClick:function(){l(t)}},"Editar")))},J=function(e){var t=e.productos,a=e.setObjProducto;return c.a.createElement("table",{className:"table table-hover table-bordered table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("strong",null,"#")),c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"Nombre"),c.a.createElement("th",null,"Precio"),c.a.createElement("th",null,"Estado"),c.a.createElement("th",null,"Acciones"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(z,{numero:t,producto:e,key:e.id,setObjProducto:a})}))))},B=function(e){var t=e.getProductos,a=e.setObjProducto,l=e.objProducto,o={pro_nom:"",pro_pre:"",pro_est:""},r=Object(n.useState)({}),i=Object(s.a)(r,2),m=i[0],p=i[1];Object(n.useEffect)((function(){console.log("efecto objProducto"),p(l||o)}),[l]);var f=function(e){p(Object(u.a)(Object(u.a)({},m),{},Object(d.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",{className:"card-title"},"Registrar Producto")),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"row",onSubmit:function(e){e.preventDefault(),""===m.pro_nom.trim()||""===m.pro_pre.trim()||""===m.pro_est.trim()?b.a.fire({icon:"error",title:"Cuidado!",text:"Todos los campos deben estar llenos"}):l?b.a.fire({title:"\xbfSeguro que desea editar el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS EDITAR AL PRODUCTO"),function(e){var n="".concat(E,"/producto/").concat(l.id);fetch(n,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){b.a.fire({title:"Actualizado!",text:"Registro actualizado correctamente",icon:"success",timer:1500}),t(),a(null)}))}))}(m))})):b.a.fire({title:"\xbfSeguro que desea crear el registro?",icon:"info",text:"Los cambios har\xe1n efecto de inmediato en la base de datos",showCancelButton:!0}).then((function(e){e.value&&(console.log("OK PODEMOS CREAR AL USUARIO"),function(e){var a="".concat(E,"/producto");fetch(a,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){e.json().then((function(e){b.a.fire({title:"\xc9xito!",icon:"success",text:"El producto ha sido creado con \xe9xito en la base de datos",timer:2e3}),t()}))}))}(m))}))}},c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Nombre:"),c.a.createElement("input",{type:"text",name:"pro_nom",className:"form-control",onChange:f,value:m.pro_nom})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Precio:"),c.a.createElement("input",{type:"text",name:"pro_pre",className:"form-control",onChange:f,value:m.pro_pre})),c.a.createElement("div",{className:"form-group col-md-3"},c.a.createElement("label",{htmlFor:""},"Estado:"),c.a.createElement("select",{className:"form-control",name:"pro_est",onChange:f,value:m.pro_est},c.a.createElement("option",{value:""},"-Seleccione-"),c.a.createElement("option",{value:"true"},"Habilitado"),c.a.createElement("option",{value:"false"},"Inhabilitado"))),c.a.createElement("div",{className:"form-group col-md-6"},l?c.a.createElement("button",{className:"btn btn-success btn-block",type:"submit"},"Actualizar Producto"):c.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Crear Producto")),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("button",{className:"btn btn-danger btn-block",type:"submit"},"Cancelar")))))},M=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),r=Object(s.a)(o,2),i=r[0],d=r[1],u=Object(n.useState)(null),p=Object(s.a)(u,2),b=p[0],E=p[1],f=function(){a||l(!0),fetch("https://5ec86498155c130016a909dd.mockapi.io/producto").then((function(e){e.json().then((function(e){l(!1),d(e)}))}))};return Object(n.useEffect)((function(){f()}),[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(B,{getProductos:f,objProducto:b,setObjProducto:E}))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},!0===a?c.a.createElement(m,{tipo:"info",texto:"Cargando repartidores"}):c.a.createElement(J,{productos:i,setObjProducto:E}))))},q=function(){return c.a.createElement("div",null,"Home")},K=function(){return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"!#"},"Pedidos"),c.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"!#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),c.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},c.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(r.b,{to:"/clientes",className:"nav-link"},"Clientes")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/productos",className:"nav-link"},"Productos")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/pedidos",className:"nav-link"},"Pedidos")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/repartidores",className:"nav-link"},"Repartidores"))))))};var H=function(){return c.a.createElement(r.a,null,c.a.createElement(K,null),c.a.createElement("main",{className:"container-fluid pt-3"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/clientes",component:O}),c.a.createElement(i.a,{path:"/pedidos",component:F}),c.a.createElement(i.a,{path:"/repartidores",component:U}),c.a.createElement(i.a,{path:"/productos",component:M}),c.a.createElement(i.a,{path:"/",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.32f703d7.chunk.js.map