import{a as A}from"./chunk-AOIJYMIP.js";import{a as M,b as m,c as F,d as E,e as S,g as O,h as T,i as k,m as D,n as P}from"./chunk-CIC5IFOZ.js";import{a as V}from"./chunk-MVUBCH6A.js";import"./chunk-QZUWT2GO.js";import"./chunk-IXWLID5M.js";import"./chunk-TGWLULYN.js";import{Ca as l,Ta as u,W as g,Xa as y,_ as h,_a as c,cb as i,db as r,eb as v,fb as _,ga as N,ha as C,ia as f,lb as d,mb as w,pa as b,rb as a,wb as x}from"./chunk-6LMFFRUR.js";function G(t,n){t&1&&(i(0,"h2"),a(1,"Nueva Categor\xEDa"),r())}function j(t,n){t&1&&(i(0,"h2"),a(1,"Editar Categor\xEDa"),r())}function L(t,n){t&1&&(i(0,"p",5),a(1,"La categor\xEDa es obligatorio"),r())}function z(t,n){t&1&&(i(0,"p",5),a(1,"La categor\xEDa debe tener al menos 3 caracteres"),r())}function q(t,n){t&1&&(i(0,"p",5),a(1,"La categor\xEDa debe tener menos de 100 caracteres"),r())}function I(t,n){if(t&1){let p=_();i(0,"button",10),d("click",function(){C(p);let s=w();return f(s.createCategoryNews())}),a(1,"Guardar"),r()}}function B(t,n){if(t&1){let p=_();i(0,"button",11),d("click",function(){C(p);let s=w();return f(s.createCategoryNews())}),a(1,"Actualizar"),r()}}var $=(()=>{let n=class n{constructor(){this.closeModalArticle=!1,this.serviceCategoriesNews=g(A),this.newService=g(V),this.formbuilder=g(D),this.categoriesNewsForm=new S({}),this.modalClose=new b}ngOnInit(){this.validatorsCategoriesNews()}ngOnChanges(){this.changeCategoryNews||setTimeout(()=>{this.categoriesNewsForm.setValue({name:this.nameCategory?this.nameCategory:""}),new FormData().append("name",this.categoriesNewsForm.get("categoriesNewsForm")?.value)},500)}validatorsCategoriesNews(){this.categoriesNewsForm=this.formbuilder.group({name:["",m.compose([m.required,m.maxLength(100),m.minLength(3)])]})}get name(){return this.categoriesNewsForm.get("name")}createCategoryNews(){this.changeCategoryNews?this.serviceCategoriesNews.createCategoryNews(this.categoriesNewsForm.value).subscribe({next:o=>{alert(o.message),this.closeModal()},error:o=>{console.log(o)},complete:()=>{console.log("complete")}}):(console.log("update"),this.serviceCategoriesNews.updateCategoryNews(this.categoriesNewsForm.value,this.idCategory).subscribe({next:o=>{alert(o.message),this.closeModal()},error:o=>{console.log(o)},complete:()=>{console.log("complete")}}))}closeModal(){this.closeModalArticle=!1,this.newService.setModalActive(!1),this.changeCategoryNews=!1,this.categoriesNewsForm.reset(),this.modalClose.emit(this.closeModalArticle)}};n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=h({type:n,selectors:[["app-news-categories"]],inputs:{changeCategoryNews:"changeCategoryNews",nameCategory:"nameCategory",idCategory:"idCategory"},outputs:{modalClose:"modalClose"},standalone:!0,features:[N,x],decls:16,vars:6,consts:[[1,"conteiner-categories"],[1,"conteiner-categories__form",3,"formGroup"],[1,"conteiner-categories__form--labels"],["for","name"],["type","text","id","name","name","name","formControlName","name"],[1,"alert","alert-error"],[1,"conteiner-categories__form--button"],["type","submit",1,"btn","btn-success"],["type","submit",1,"btn","btn-warning"],[1,"btn","btn-danger",3,"click"],["type","submit",1,"btn","btn-success",3,"click"],["type","submit",1,"btn","btn-warning",3,"click"]],template:function(s,e){s&1&&(i(0,"div",0),u(1,G,2,0,"h2")(2,j,2,0,"h2"),i(3,"form",1)(4,"div",2)(5,"label",3),a(6,"Nombre categoria"),r(),v(7,"input",4),u(8,L,2,0,"p",5)(9,z,2,0,"p",5)(10,q,2,0,"p",5),r(),i(11,"div",6),u(12,I,2,0,"button",7)(13,B,2,0,"button",8),i(14,"button",9),d("click",function(){return e.closeModal()}),a(15,"Cancelar"),r()()()()),s&2&&(l(),c(e.changeCategoryNews?1:2),l(2),y("formGroup",e.categoriesNewsForm),l(5),c(!(e.name==null||e.name.errors==null)&&e.name.errors.required&&(e.name!=null&&e.name.touched)?8:-1),l(),c(!(e.name==null||e.name.errors==null)&&e.name.errors.minlength&&(e.name!=null&&e.name.touched)?9:-1),l(),c(!(e.name==null||e.name.errors==null)&&e.name.errors.maxlength&&(e.name!=null&&e.name.touched)?10:-1),l(2),c(e.changeCategoryNews?12:13))},dependencies:[P,O,M,F,E,T,k],styles:[".conteiner-categories[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:start;flex-direction:column}.conteiner-categories__form[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:space-evenly;flex-direction:column}.conteiner-categories__form--labels[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:10px;border:1px solid #ccc}.conteiner-categories__form--labels[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;background:#999;text-align:center;padding:5px;font-size:1.2rem;color:#fff;font-weight:700}.conteiner-categories__form--labels[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:5px;font-size:1rem;border:none;outline:none}.conteiner-categories__form--labels[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{background:#f0efef}.conteiner-categories__form--button[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:1%;padding:10px}"]});let t=n;return t})();export{$ as NewsCategoriesComponent};
