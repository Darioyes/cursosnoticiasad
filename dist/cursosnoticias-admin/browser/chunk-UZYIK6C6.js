import{a as B}from"./chunk-SVQ25E35.js";import{a as z}from"./chunk-QZUWT2GO.js";import{a as w,b as $}from"./chunk-IXWLID5M.js";import"./chunk-TGWLULYN.js";import{$a as T,Ca as c,Q as E,Ta as f,Ua as k,Va as U,W as h,Xa as D,_ as F,_a as x,ab as b,bb as M,cb as r,db as l,eb as P,fb as m,ga as S,ha as p,ia as u,lb as g,mb as _,nb as V,o as y,rb as s,sb as I,tb as d,ub as j,wb as A,xb as N,yb as O,z as C,zb as v}from"./chunk-6LMFFRUR.js";var H=(()=>{let o=class o{constructor(){this.http=h($),this.baseurl=z.apiUrlBase+"api/"}sendError(i){let n="Algo ha ocurrido mal, por favor intentalo de nuevo",a="true";return i.status===400&&i.error&&i.error.errors?(n=i.error.message,a=i.error.errorNews):(n=i.error,a=i.error),y(()=>({message:n,errors:i.error.errors,errorNews:a}))}getUsers(i){let n="";i?n=this.baseurl+"users/"+i:n=this.baseurl+"users";let a={Accept:"application/json"};return this.http.get(n,{headers:a}).pipe(C(this.sendError))}deleteUser(i){let n=this.baseurl+"users/"+i,a=new w({Accept:"application/json"});return this.http.delete(n,{headers:a}).pipe(C(this.sendError))}updateUser(i,n){let a=this.baseurl+"users/"+i,q=new w({Accept:"application/json"});return this.http.put(a,n,{headers:q}).pipe(C(this.sendError))}getPagination(i){let n=i,a=new w({Accept:"application/json"});return this.http.get(n,{headers:a}).pipe(C(this.sendError))}};o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var W=(t,o)=>o==null?null:o.id,G=()=>[import("./chunk-ANOWGRSL.js").then(t=>t.TitleComponent),import("./chunk-Z2P6D4UB.js").then(t=>t.DatePipe),import("./chunk-Z2P6D4UB.js").then(t=>t.NgClass)],J=t=>({"active-page":t});function K(t,o){if(t&1&&P(0,"app-title",2),t&2){let e=_(2);V("title",e.userFull==null?null:e.userFull.message)}}function Q(t,o){t&1&&P(0,"app-title",3)}function R(t,o){if(t&1){let e=m();r(0,"i",11),g("click",function(){p(e);let n=_().$implicit,a=_(3);return u(a.userUpdate(n==null?null:n.id,n==null?null:n.admin_news))}),l()}}function X(t,o){if(t&1){let e=m();r(0,"i",12),g("click",function(){p(e);let n=_().$implicit,a=_(3);return u(a.userUpdate(n==null?null:n.id,n==null?null:n.admin_news))}),l()}}function Y(t,o){if(t&1){let e=m();r(0,"tr")(1,"td"),s(2),l(),r(3,"td"),s(4),l(),r(5,"td"),s(6),l(),r(7,"td"),s(8),l(),r(9,"td"),s(10),l(),r(11,"td"),s(12),l(),r(13,"td"),s(14),O(15,"date"),l(),r(16,"td"),s(17),O(18,"date"),l(),r(19,"td"),f(20,R,1,0,"i",8)(21,X,1,0,"i",9),r(22,"i",10),g("click",function(){let n=p(e).$implicit,a=_(3);return u(a.userDelete(n==null?null:n.id))}),l()()()}if(t&2){let e=o.$implicit;c(2),d(" ",e==null?null:e.name," "),c(2),d(" ",e==null?null:e.lastname," "),c(2),d(" ",e==null?null:e.email," "),c(2),d(" ",(e==null?null:e.admin_news)==="true"?"Si":"No"," "),c(2),d(" ",e==null?null:e.email_verified_at," "),c(2),d(" ",(e==null?null:e.terms)==="true"?"Si":"No"," "),c(2),d(" ",v(15,9,e==null?null:e.created_at,"dd/MM/yyyy")," "),c(3),d(" ",v(18,12,e==null?null:e.updated_at,"dd/MM/yyyy")," "),c(3),x((e==null?null:e.admin_news)==="true"?20:21)}}function Z(t,o){t&1&&(r(0,"tr")(1,"td",13)(2,"p"),s(3,"No hay noticias"),l()()())}function ee(t,o){if(t&1&&b(0,Y,23,15,"tr",null,W,!1,Z,4,0,"tr"),t&2){let e=_(2);M(e.users)}}function te(t,o){t&1&&(r(0,"tr")(1,"td",14),s(2," Error al buscar la informaci\xF3n "),l()())}function ne(t,o){if(t&1){let e=m();r(0,"a",16),g("click",function(){p(e);let n=_(3);return u(n.pagination(n.userFull.data.prev_page_url))}),s(1,"Anterior"),l()}}function ie(t,o){if(t&1){let e=m();r(0,"a",16),g("click",function(){p(e);let n=_(3);return u(n.pagination(n.userFull.data.next_page_url))}),s(1,"Siguiente"),l()}}function oe(t,o){if(t&1){let e=m();r(0,"a",17),g("click",function(){p(e);let n=_().$implicit,a=_(2);return u(a.pagination(n.url))}),s(1),l()}if(t&2){let e=_().$implicit;D("ngClass",N(2,J,e.active)),c(),I(e.label)}}function re(t,o){if(t&1&&f(0,ne,2,0,"a")(1,ie,2,0,"a")(2,oe,2,4,"a",15),t&2){let e=o.$implicit;x(e.label==="&laquo; Anterior"?0:e.label==="Siguiente &raquo;"?1:2)}}function le(t,o){if(t&1&&(r(0,"div",1),f(1,K,1,1,"app-title",2)(2,Q,1,0,"app-title",3),l(),r(3,"div",4)(4,"table")(5,"thead")(6,"tr")(7,"th"),s(8," Nombre "),l(),r(9,"th"),s(10," Apellido "),l(),r(11,"th"),s(12," Email "),l(),r(13,"th"),s(14," Admin "),l(),r(15,"th"),s(16," Email verificado "),l(),r(17,"th"),s(18," Acepta terminos "),l(),r(19,"th"),s(20," Creado "),l(),r(21,"th"),s(22," Modificado "),l(),r(23,"th"),s(24," Acciones "),l()()(),r(25,"tbody"),f(26,ee,3,1)(27,te,3,0,"tr"),l()()(),r(28,"div",5)(29,"div",6),b(30,re,3,1,null,null,T),l(),r(32,"div",7)(33,"p"),s(34),l()()()),t&2){let e=_();c(),x((e.userFull==null?null:e.userFull.error)===!1?1:2),c(25),x((e.userFull==null?null:e.userFull.error)===!1?26:27),c(4),M(e.userFull==null||e.userFull.data==null?null:e.userFull.data.links),c(4),j("",e.userFull==null||e.userFull.data==null?null:e.userFull.data.to," / ",e.userFull==null||e.userFull.data==null?null:e.userFull.data.total," ")}}function ae(t,o){t&1&&P(0,"app-loading",18)}var xe=(()=>{let o=class o{constructor(){this.usersServices=h(H)}ngOnInit(){this.getUsers()}ngOnChanges(){this.getUsers()}getUsers(){this.usersServices.getUsers().subscribe({next:i=>{this.userFull=i,this.users=i.data.data},error:i=>{console.log(i)},complete:()=>{console.log("complete")}})}userUpdate(i,n){n==="true"?this.admin="false":this.admin="true",this.admin={admin_news:this.admin},this.usersServices.updateUser(i,this.admin).subscribe({next:a=>{alert(a.message),this.getUsers()},error:a=>{console.log(a)},complete:()=>{console.log("complete")}})}userDelete(i){confirm("\xBFEstas seguro de eliminar este usuario?")&&this.usersServices.deleteUser(i).subscribe({next:a=>{alert(a.message),this.getUsers()},error:a=>{console.log(a)},complete:()=>{console.log("complete")}})}pagination(i){this.usersServices.getPagination(i).subscribe({next:n=>{this.userFull=n},error:n=>{console.log(n)},complete:()=>{console.log("complete")}})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=F({type:o,selectors:[["app-user-page"]],standalone:!0,features:[S,A],decls:5,vars:1,consts:[[1,"conteiner-news"],[1,"conteiner-news__title"],[3,"title"],["title","Buscando usuarios"],[1,"conteiner-news__table"],[1,"conteiner-news__pagination"],[1,"container-pagination__links"],[1,"container-pagination__page"],[1,"fa-solid","fa-unlock-keyhole"],[1,"fa-solid","fa-lock"],[1,"fa-solid","fa-trash-can",3,"click"],[1,"fa-solid","fa-unlock-keyhole",3,"click"],[1,"fa-solid","fa-lock",3,"click"],["colspan","8"],["colspan","4"],[3,"ngClass"],[3,"click"],[3,"click","ngClass"],[1,"table-loading"]],template:function(n,a){n&1&&(r(0,"section",0),f(1,le,35,4)(2,ae,1,0),k(3,1,G,null,2),l()),n&2&&(c(3),U((a.userFull==null?null:a.userFull.error)===!1))},dependencies:[B],styles:[".conteiner-news[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.conteiner-news__dialog[_ngcontent-%COMP%]{width:80%;height:80%;border:none;box-shadow:none}.conteiner-news__title[_ngcontent-%COMP%]{width:100%;padding:10px}.conteiner-news__table[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;overflow:hidden;overflow-x:scroll}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;height:100%;border-collapse:collapse;border-top:1px solid rgba(0,0,0,.2823529412);border-bottom:1px solid rgba(0,0,0,.2823529412);text-align:center;color:#000;background:#fff;overflow:hidden;overflow-y:scroll;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#000000 #ffffff}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#fff2e6;border-bottom:1px solid rgba(0,0,0,.2823529412)}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:#96e9aa}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#47cbef;font-weight:700;cursor:pointer}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;font-size:1rem;font-weight:400;font-size:1.1rem}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30px;height:30px;text-align:center;padding:0;margin:0 5px}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:5px}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .table-loading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}.conteiner-news__pagination[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row;gap:10px}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600;color:#47cbef;cursor:pointer}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2e9cb5}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   .active-page[_ngcontent-%COMP%]{border-bottom:2px solid #b31d15}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__page[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600;color:#ff9c03}"]});let t=o;return t})();export{xe as UserPageComponent};
