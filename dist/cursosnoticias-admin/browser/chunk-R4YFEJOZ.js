import{a as F}from"./chunk-2LSXDOOM.js";import{a as M}from"./chunk-S3PDG7CB.js";import{a as V}from"./chunk-SVQ25E35.js";import{a as T}from"./chunk-P3L3KALH.js";import"./chunk-T23ZY6V2.js";import"./chunk-IXWLID5M.js";import"./chunk-TGWLULYN.js";import{$a as S,Ca as g,Ta as m,Ua as O,Va as v,W as h,Xa as f,_ as y,_a as u,ab as P,bb as w,cb as r,db as a,eb as x,fb as d,ha as _,ia as C,lb as p,mb as l,rb as c,sb as k,tb as b,ub as D,wb as E,xb as N}from"./chunk-6LMFFRUR.js";var j=(t,o)=>o.id,A=()=>[M,import("./chunk-ZADP7OFK.js").then(t=>t.CoursesCategoriesComponent),import("./chunk-Z2P6D4UB.js").then(t=>t.NgClass)],$=t=>({"active-page":t});function I(t,o){t&1&&x(0,"app-title",1)}function z(t,o){if(t&1){let e=d();r(0,"dialog",2)(1,"app-courses-categories",10),p("modalClose",function(n){_(e);let s=l(2);return C(s.closeModal(n))}),a()()}if(t&2){let e=l(2);f("open",e.openModal),g(),f("changeCategoryNews",e.changeCategoryNews)("nameCategory",e.nameCategory)("idCategory",e.idCategory)}}function q(t,o){if(t&1){let e=d();r(0,"tr")(1,"td"),c(2),a(),r(3,"td"),c(4),a(),r(5,"td")(6,"i",11),p("click",function(){let n=_(e).$implicit,s=l(3);return C(s.createCategoryNews(!1,n.name,n.id))}),a()(),r(7,"td")(8,"i",12),p("click",function(){let n=_(e).$implicit,s=l(3);return C(s.categoryDelete(n.id))}),a()()()}if(t&2){let e=o.$implicit;g(2),b(" ",e.name," "),g(2),b(" ",e.slug," ")}}function B(t,o){t&1&&(r(0,"tr")(1,"td",13)(2,"p"),c(3,"No hay noticias"),a()()())}function L(t,o){if(t&1&&P(0,q,9,2,"tr",null,j,!1,B,4,0,"tr"),t&2){let e=l(2);w(e.responseCategories==null?null:e.responseCategories.data.data)}}function W(t,o){t&1&&(r(0,"tr")(1,"td",13)(2,"p"),c(3,"Error en la petici\xF3n"),a()()())}function G(t,o){if(t&1){let e=d();r(0,"a",15),p("click",function(){_(e);let n=l(3);return C(n.pagination(n.responseCategories.data.prev_page_url))}),c(1,"Anterior"),a()}}function H(t,o){if(t&1){let e=d();r(0,"a",15),p("click",function(){_(e);let n=l(3);return C(n.pagination(n.responseCategories.data.next_page_url))}),c(1,"Siguiente"),a()}}function J(t,o){if(t&1){let e=d();r(0,"a",16),p("click",function(){_(e);let n=l().$implicit,s=l(2);return C(s.pagination(n.url))}),c(1),a()}if(t&2){let e=l().$implicit;f("ngClass",N(2,$,e.active)),g(),k(e.label)}}function K(t,o){if(t&1&&m(0,G,2,0,"a")(1,H,2,0,"a")(2,J,2,4,"a",14),t&2){let e=o.$implicit;u(e.label==="&laquo; Anterior"?0:e.label==="Siguiente &raquo;"?1:2)}}function Q(t,o){if(t&1){let e=d();m(0,z,2,4,"dialog",2),x(1,"app-title",3),r(2,"div",4)(3,"table")(4,"thead")(5,"tr")(6,"th"),c(7," Nombre "),a(),r(8,"th"),c(9," Slug "),a(),r(10,"th"),c(11," Editar "),a(),r(12,"th"),c(13," Eliminar "),a()()(),r(14,"tbody"),m(15,L,3,1)(16,W,4,0,"tr"),a()()(),r(17,"div",5)(18,"div",6),P(19,K,3,1,null,null,S),a(),r(21,"div",7)(22,"p"),c(23),a()()(),r(24,"div",8)(25,"button",9),p("click",function(){_(e);let n=l();return C(n.createCategoryNews(!0))}),c(26,"Crear"),a()()}if(t&2){let e=l();u(e.modalopencategory?0:-1),g(),f("title",e.responseCategories==null?null:e.responseCategories.message),g(14),u((e.responseCategories==null?null:e.responseCategories.error)===!1?15:16),g(4),w(e.responseCategories==null||e.responseCategories.data==null?null:e.responseCategories.data.links),g(4),D("",e.responseCategories==null||e.responseCategories.data==null?null:e.responseCategories.data.to," / ",e.responseCategories==null||e.responseCategories.data==null?null:e.responseCategories.data.total,"")}}function R(t,o){t&1&&(r(0,"p",17),c(1,"Error en la petici\xF3n"),a())}function U(t,o){t&1&&x(0,"app-loading",18)}function X(t,o){if(t&1&&m(0,R,2,0,"p",17)(1,U,1,0,"app-loading",18),t&2){let e=l();u(e.errorCategoriesNews?0:1)}}var ae=(()=>{let o=class o{constructor(){this.categoriesNewsServices=h(F),this.newsServices=h(T),this.modalopencategory=!1,this.changeCategoryNews=!1,this.changeCategoryCourses=!1,this.openModal=!1}ngOnInit(){this.getAllCategoriesNews()}getAllCategoriesNews(){this.categoriesNewsServices.getCategoriesNews().subscribe({next:i=>{this.responseCategories=i,this.categories=i.data.data,this.categoriesError=i.error},error:i=>{console.log(i),this.errorCategoriesNews=i.message.message},complete:()=>{console.log("complete")}})}createCategoryNews(i,n,s){this.openModal=!0,this.newsServices.setModalActive(!0),this.changeCategoryNews=i,this.modalopencategory=!0,this.nameCategory=n,this.idCategory=s}categoryDelete(i){confirm("\xBFEstas seguro de eliminar esta categor\xEDa?")&&this.categoriesNewsServices.deleteCategoryNews(i).subscribe({next:s=>{this.getAllCategoriesNews(),alert(s.message)},error:s=>{console.log(s)},complete:()=>{console.log("complete")}})}closeModal(i){this.openModal=i,this.getAllCategoriesNews(),this.changeCategoryNews=!this.changeCategoryNews}pagination(i){this.categoriesNewsServices.getPagination(i).subscribe({next:n=>{this.responseCategories=n},error:n=>{console.log(n)},complete:()=>{console.log("complete")}})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=y({type:o,selectors:[["app-categories-courses-page"]],outputs:{openModal:"openModal"},standalone:!0,features:[E],decls:6,vars:2,consts:[[1,"conteiner-categories"],["title","Buscando Categorias"],[1,"conteiner-categories__dialog",3,"open"],[3,"title"],[1,"conteiner-categories__table"],[1,"conteiner-categories__pagination"],[1,"container-pagination__links"],[1,"container-pagination__page"],[1,"conteiner-categories__button"],[1,"btn",3,"click"],[3,"modalClose","changeCategoryNews","nameCategory","idCategory"],[1,"fa-solid","fa-pen-to-square",3,"click"],[1,"fa-solid","fa-trash-can",3,"click"],["colspan","3"],[3,"ngClass"],[3,"click"],[3,"click","ngClass"],[1,"alert","alert-error"],[1,"table-loading"]],template:function(n,s){n&1&&(r(0,"section",0),m(1,I,1,0,"app-title",1)(2,Q,27,5)(3,X,2,1),O(4,2,A,null,3),a()),n&2&&(g(),u(s.categories?-1:1),g(3),v(s.categoriesError===!1))},dependencies:[M,V],styles:[".conteiner-categories[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.conteiner-categories__dialog[_ngcontent-%COMP%]{width:40%;height:40%;border:none;box-shadow:none}.conteiner-categories__table[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;height:100%;border-collapse:collapse;border-top:1px solid rgba(0,0,0,.2823529412);border-bottom:1px solid rgba(0,0,0,.2823529412);text-align:center;color:#000;background:#fff;overflow:hidden;overflow-y:scroll;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#000000 #ffffff}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#fff2e6;border-bottom:1px solid rgba(0,0,0,.2823529412)}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:#96e9aa}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#47cbef;font-weight:700;cursor:pointer}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;font-size:1rem;font-weight:400;font-size:1.1rem}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30px;height:30px;text-align:center;padding:0;margin:0 5px}.conteiner-categories__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .table-loading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}.conteiner-categories__pagination[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.conteiner-categories__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row;gap:10px}.conteiner-categories__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600;color:#47cbef;cursor:pointer}.conteiner-categories__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2e9cb5}.conteiner-categories__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   .active-page[_ngcontent-%COMP%]{border-bottom:2px solid #b31d15}.conteiner-categories__pagination[_ngcontent-%COMP%]   .container-pagination__page[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row}.conteiner-categories__pagination[_ngcontent-%COMP%]   .container-pagination__page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600;color:#ff9c03}"]});let t=o;return t})();export{ae as CategoriesCoursesPageComponent};