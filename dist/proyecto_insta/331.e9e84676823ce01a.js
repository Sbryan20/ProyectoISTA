"use strict";(self.webpackChunkproyecto_insta=self.webpackChunkproyecto_insta||[]).push([[331],{331:(S,b,c)=>{c.r(b),c.d(b,{AuthModule:()=>R});var m=c(9808),p=c(0),e=c(5e3);const k=function(){return["/auth/login"]};let A=(()=>{class t{constructor(o){this.router=o}ngOnInit(){}direction(){this.router.navigate(["/panelusuario/proyecto/login"]).then(()=>{window.location.reload()})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-bienvenida"]],decls:14,vars:2,consts:[[2,"position","relative"],["src","assets\\img\\logo desenfocado4.png",2,"width","100%"],[2,"background-color","rgba(39,46,86,255)"],[2,"margin-left","1150px","color","white","margin-top","1px","background-color","transparent","border-color","transparent",3,"routerLink"],[2,"position","absolute",";margin-top","250px","margin-left","25px","color","darkblue","background-color","lightsteelblue"],[2,"position","absolute",";margin-top","350px","margin-left","25px","color","darkblue","background-color","lightsteelblue"],[2,"position","absolute",";margin-top","450px","margin-left","25px","color","darkblue","background-color","lightsteelblue"],["src","assets\\img\\fondo_principal.jpg",2,"height","100%","width","100%"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2)(3,"button",3)(4,"h3"),e._uU(5,"Iniciar Sesion"),e.qZA()()(),e.TgZ(6,"div",0)(7,"h1",4),e._uU(8,"Bienvenido"),e.qZA(),e.TgZ(9,"h1",5),e._uU(10,"Sistema Gestion de Proyectos"),e.qZA(),e.TgZ(11,"h1",6),e._uU(12,"Instituto Superior Tecnologico del Azuay"),e.qZA(),e._UZ(13,"img",7),e.qZA()),2&o&&(e.xp6(3),e.Q6J("routerLink",e.DdM(1,k)))},directives:[p.rH],styles:[""]}),t})();var C=c(5226),U=c.n(C);class v{}var T=c(4120);let x=(()=>{class t{constructor(o,n){this.document=o,this.platformId=n,this.documentIsAccessible=(0,m.NF)(this.platformId)}static getCookieRegExp(o){const n=o.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+n+"|;\\s*"+n+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(o){try{return decodeURIComponent(o)}catch(n){return o}}check(o){return!!this.documentIsAccessible&&(o=encodeURIComponent(o),t.getCookieRegExp(o).test(this.document.cookie))}get(o){if(this.documentIsAccessible&&this.check(o)){o=encodeURIComponent(o);const r=t.getCookieRegExp(o).exec(this.document.cookie);return r[1]?t.safeDecodeURIComponent(r[1]):""}return""}getAll(){if(!this.documentIsAccessible)return{};const o={},n=this.document;return n.cookie&&""!==n.cookie&&n.cookie.split(";").forEach(r=>{const[s,l]=r.split("=");o[t.safeDecodeURIComponent(s.replace(/^ /,""))]=t.safeDecodeURIComponent(l)}),o}set(o,n,r,s,l,g,f){if(!this.documentIsAccessible)return;if("number"==typeof r||r instanceof Date||s||l||g||f)return void this.set(o,n,{expires:r,path:s,domain:l,secure:g,sameSite:f||"Lax"});let d=encodeURIComponent(o)+"="+encodeURIComponent(n)+";";const i=r||{};i.expires&&(d+="number"==typeof i.expires?"expires="+new Date((new Date).getTime()+1e3*i.expires*60*60*24).toUTCString()+";":"expires="+i.expires.toUTCString()+";"),i.path&&(d+="path="+i.path+";"),i.domain&&(d+="domain="+i.domain+";"),!1===i.secure&&"None"===i.sameSite&&(i.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${o} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),i.secure&&(d+="secure;"),i.sameSite||(i.sameSite="Lax"),d+="sameSite="+i.sameSite+";",this.document.cookie=d}delete(o,n,r,s,l="Lax"){if(!this.documentIsAccessible)return;const g=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(o,"",{expires:g,path:n,domain:r,secure:s,sameSite:l})}deleteAll(o,n,r,s="Lax"){if(!this.documentIsAccessible)return;const l=this.getAll();for(const g in l)l.hasOwnProperty(g)&&this.delete(g,o,n,r,s)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(m.K0),e.LFG(e.Lbi))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=c(3075);const Z=function(){return{standalone:!0}},y=function(){return["/verificar"]},I=[{path:"bienvenida",component:A},{path:"login",component:(()=>{class t{constructor(o,n,r){this.router=o,this.LoginService=n,this.cookieService=r,this.issloading=!0,this.erro="",this.userRequest=new v}ngOnInit(){}loginAuth(){sessionStorage,this.LoginService.Login(this.userRequest).subscribe(o=>{sessionStorage,sessionStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("token",JSON.stringify(o)),this.router.navigate(["/panelusuario/proyecto/administrador"]).then(()=>{})},o=>{console.log(o),U().fire({title:"Error",text:"Credenciales incorrectas",icon:"warning",color:"#FDFEFE",confirmButtonColor:"#0c3255",background:"#EBEE93 "})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.F0),e.Y36(T.r),e.Y36(x))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:23,vars:6,consts:[[1,"example-form"],["src","assets\\img\\logoLogin.png",2,"width","45%",";margin-top","15px","margin-top","50px","margin-left","320px"],[2,"color","darkgoldenrod","margin-top","5px","margin-left","430px"],[1,"form-floating","mb-3",2,"margin-left","360px","margin-right","400px"],["type","text","placeholder","name@example.com",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","floatingInput"],[1,"form-floating",2,"margin-left","360px","margin-right","400px"],["type","password","placeholder","Password",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","floatingPassword"],[2,"width","150px","height","50px","margin-left","600px","margin-right","400px","color","azure","background-color","darkblue","border-radius","7px","border-color","transparent",3,"click"],["routerLink","/auth/restablecercontra",2,"color","darkblue","margin-left","350px"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e._UZ(1,"img",1)(2,"br")(3,"br"),e.TgZ(4,"h3",2),e._uU(5," SISTEMA DE GESTION DE PROYECTOS"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"div",3)(8,"input",4),e.NdJ("ngModelChange",function(s){return n.userRequest.username=s}),e.qZA(),e.TgZ(9,"label",5),e._uU(10,"USUARIO"),e.qZA()(),e._UZ(11,"br"),e.TgZ(12,"div",6)(13,"input",7),e.NdJ("ngModelChange",function(s){return n.userRequest.password=s}),e.qZA(),e.TgZ(14,"label",8),e._uU(15,"CONTRASE\xd1A"),e.qZA()(),e._UZ(16,"br"),e.TgZ(17,"button",9),e.NdJ("click",function(){return n.loginAuth()}),e._uU(18," INGRESAR"),e.qZA(),e._UZ(19,"br")(20,"br"),e.TgZ(21,"a",10),e._uU(22,"\xbfHas olvidado tu contrase\xf1a?"),e.qZA()()),2&o&&(e.xp6(8),e.Q6J("ngModel",n.userRequest.username)("ngModelOptions",e.DdM(4,Z)),e.xp6(5),e.Q6J("ngModel",n.userRequest.password)("ngModelOptions",e.DdM(5,Z)))},directives:[u._Y,u.JL,u.F,u.Fj,u.JJ,u.On,p.yS],styles:[""]}),t})()},{path:"restablecercontra",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-restpassword"]],decls:23,vars:2,consts:[["src","assets\\img\\logoLogin.png",2,"width","45%",";margin-top","15px","margin-top","50px","margin-left","320px"],[2,"color","black","margin-top","5px","margin-left","525px"],[2,"margin-left","430px","color","black"],[2,"margin-left","460px","color","black"],[2,"margin-left","520px","color","black"],[2,"margin-left","360px","margin-right","400px"],[1,"form-floating",2,"margin-left","360px","margin-right","300px"],["type","email","id","floatingPassword","placeholder","Password",1,"form-control"],[2,"margin-left","995px","margin-right","400px","color","azure","background-color","darkblue","border-radius","7px","border-color","transparent",3,"routerLink"],[2,"color","black","margin-left","450px"]],template:function(o,n){1&o&&(e._UZ(0,"img",0),e.TgZ(1,"h3",1),e._uU(2," Restablecer Contrase\xf1a"),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"p",2),e._uU(5," Introduce tu direccion de correo electronico que usaste para registrate "),e.qZA(),e.TgZ(6,"p",3),e._uU(7," Te enviaremos un correo electronico con tu nombre de usuario "),e.qZA(),e.TgZ(8,"p",4),e._uU(9,"y un enlace para restablecer la contrase\xf1a."),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"h6",5),e._uU(12," Correo Electronico"),e.qZA(),e.TgZ(13,"div",6),e._UZ(14,"input",7)(15,"label"),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"button",8),e._uU(18," ENVIAR "),e.qZA(),e._UZ(19,"br")(20,"br"),e.TgZ(21,"label",9),e._uU(22,"Si nececitas mas ayuda contactate con soporte tecnico."),e.qZA()),2&o&&(e.xp6(17),e.Q6J("routerLink",e.DdM(1,y)))},directives:[p.rH],styles:[""]}),t})()}];let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[x],imports:[[m.ez,u.u5,u.UX,p.Bz.forChild(I)],p.Bz]}),t})()}}]);