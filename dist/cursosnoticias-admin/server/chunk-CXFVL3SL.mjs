import './polyfills.server.mjs';
import{i as n}from"./chunk-7VJP5USS.mjs";import{S as e}from"./chunk-RXQUZ4TO.mjs";var o=(t,a)=>sessionStorage.getItem("token")?!0:(e(n).navigate(["/login"]),!1);var h=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-26UYJKRU.mjs").then(t=>t.LoginPageComponent)},{path:"home",title:"Home NotiWeb",loadComponent:()=>import("./chunk-LMZOW63A.mjs").then(t=>t.DashboardComponent),canActivate:[o],children:[{path:"",redirectTo:"/home/news",pathMatch:"full"},{path:"news",title:"Noticias y Cursos",loadComponent:()=>import("./chunk-LW6EARVL.mjs").then(t=>t.NewsPageComponent),canActivate:[o]},{path:"users",title:"Usuarios",loadComponent:()=>import("./chunk-EPG5FA7Y.mjs").then(t=>t.UserPageComponent),canActivate:[o]},{path:"categoriesnews",title:"Categorias de Noticias",loadComponent:()=>import("./chunk-WO32HMCK.mjs").then(t=>t.CategoriesNewsPageComponent),canActivate:[o]},{path:"categoriescourses",title:"Categorias de Cursos",loadComponent:()=>import("./chunk-6DCEUEG6.mjs").then(t=>t.CategoriesCoursesPageComponent),canActivate:[o]},{path:"contact",title:"Contacto",loadComponent:()=>import("./chunk-UIFWPJRL.mjs").then(t=>t.ContactPageComponent),canActivate:[o]}]},{path:"**",title:"Not Found",loadComponent:()=>import("./chunk-QSEHP2XK.mjs").then(t=>t.NotFoundPageComponent)}];export{h as a};
