import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('./controllers/login-page/login-page.component'),
    },
    {
        path: 'home',
        title: 'Home NotiWeb',
        loadComponent: () => import('./controllers/dashboard/dashboard.component'),
        canActivate: [authGuard],
        children:[
            {
                path: 'users',
                title: 'Usuarios',
                loadComponent: () => import('./controllers/pages/user-page/user-page.component'),
                canActivate: [authGuard],
            },
            {
                path:'news',
                title: 'Noticias y Cursos',
                loadComponent: () => import('./controllers/pages/news-page/news-page.component'),
                canActivate: [authGuard],
            },
            {
                path:'contact',
                title: 'Contacto',
                loadComponent: () => import('./controllers/pages/contact-page/contact-page.component'),
                canActivate: [authGuard],
            },
            {
                path:'comments',
                title: 'Comentarios',
                loadComponent: () => import('./controllers/pages/comments-page/comments-page.component'),
                canActivate: [authGuard],
            },
            {
                path:'categoriesnews',
                title: 'Categorias de Noticias',
                loadComponent: () => import('./controllers/pages/categories-news-page/categories-news-page.component'),
                canActivate: [authGuard],
            },
            {
                path:'categoriescourses',
                title: 'Categorias de Cursos',
                loadComponent: () => import('./controllers/pages/categories-courses-page/categories-courses-page.component'),
                canActivate: [authGuard],
            },
            {
                path:'articles',
                title: 'Articulos',
                loadComponent: () => import('./controllers/pages/articles-page/articles-page.component'),
                canActivate: [authGuard],
            },
        ]
    },
    {
        path:'**',
        title: 'Not Found',
        loadComponent: () => import('./controllers/pages/not-found-page/not-found-page.component'),
    }

];
