import{a as I}from"./chunk-IHXO3T4F.js";import{a as v,b as C,c as g,g as y,h as H}from"./chunk-6QAIJRBG.js";import{c as d,d as f,e as u,f as h}from"./chunk-IXWLID5M.js";import"./chunk-TGWLULYN.js";import{Ca as n,_ as i,cb as p,db as s,eb as a,rb as m,sb as c,wb as l}from"./chunk-6LMFFRUR.js";var w=(t,e)=>{let r=sessionStorage.getItem("token");return r&&(t=t.clone({setHeaders:{Authorization:`Bearer ${r}`}})),e(t)};var x={providers:[y(I,H()),C(),d(h(),u(),f([w]))]};var F=(()=>{let e=class e{constructor(){this.title="Noticias y cursos"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=i({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:3,vars:1,consts:[[1,"titleh1"]],template:function(o,D){o&1&&(p(0,"h1",0),m(1),s(),a(2,"router-outlet")),o&2&&(n(),c(D.title))},dependencies:[g],styles:[".titleh1[_ngcontent-%COMP%]{display:none}"]});let t=e;return t})();v(F,x).catch(t=>console.error(t));