import './polyfills.server.mjs';
import{i as n}from"./chunk-7VJP5USS.mjs";import{S as e}from"./chunk-RXQUZ4TO.mjs";var o=(t,a)=>sessionStorage.getItem("token")?!0:(e(n).navigate(["/login"]),!1);var h=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-O6QZWTVR.mjs").then(t=>t.LoginPageComponent)},{path:"home",title:"Home NotiWeb",loadComponent:()=>import("./chunk-WYYZ3SZW.mjs").then(t=>t.DashboardComponent),canActivate:[o],children:[{path:"",redirectTo:"/home/news",pathMatch:"full"},{path:"news",title:"Noticias y Cursos",loadComponent:()=>import("./chunk-HBYBDH3Q.mjs").then(t=>t.NewsPageComponent),canActivate:[o]},{path:"users",title:"Usuarios",loadComponent:()=>import("./chunk-VTMID4YS.mjs").then(t=>t.UserPageComponent),canActivate:[o]},{path:"categoriesnews",title:"Categorias de Noticias",loadComponent:()=>import("./chunk-6OWV7ZP4.mjs").then(t=>t.CategoriesNewsPageComponent),canActivate:[o]},{path:"categoriescourses",title:"Categorias de Cursos",loadComponent:()=>import("./chunk-AVU5U35B.mjs").then(t=>t.CategoriesCoursesPageComponent),canActivate:[o]},{path:"contact",title:"Contacto",loadComponent:()=>import("./chunk-F4ODXIAI.mjs").then(t=>t.ContactPageComponent),canActivate:[o]}]},{path:"**",title:"Not Found",loadComponent:()=>import("./chunk-QSEHP2XK.mjs").then(t=>t.NotFoundPageComponent)}];export{h as a};
