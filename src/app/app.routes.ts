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
        loadComponent: () => import('./controllers/login-page/login-page.component')
        .then(c => c.LoginPageComponent),
    },
    {
        path: 'home',
        title: 'Home NotiWeb',
        loadComponent: () => import('./controllers/dashboard/dashboard.component')
        .then(c => c.DashboardComponent),
        canActivate: [authGuard],
        children:[
            {path: '',
                redirectTo: '/home/news',
                pathMatch: 'full'},
            {
                path:'news',
                title: 'Noticias y Cursos',
                loadComponent: () => import('./controllers/pages/news-page/news-page.component')
                .then(c => c.NewsPageComponent),
                canActivate: [authGuard],
            },
            // {
            //     path:'articles',
            //     title: 'Articulos',
            //     loadComponent: () => import('./controllers/pages/articles-page/articles-page.component')
            //     .then(c => c.ArticlesPageComponent),
            //     canActivate: [authGuard],
            // },
            {
                path: 'users',
                title: 'Usuarios',
                loadComponent: () => import('./controllers/pages/user-page/user-page.component')
                .then(c => c.UserPageComponent),
                canActivate: [authGuard],
            },
            // {
            //     path:'comments',
            //     title: 'Comentarios',
            //     loadComponent: () => import('./controllers/pages/comments-page/comments-page.component')
            //     .then(c => c.CommentsPageComponent),
            //     canActivate: [authGuard],
            // },
            {
                path:'categoriesnews',
                title: 'Categorias de Noticias',
                loadComponent: () => import('./controllers/pages/categories-news-page/categories-news-page.component')
                .then(c => c.CategoriesNewsPageComponent),
                canActivate: [authGuard],
            },
            {
                path:'categoriescourses',
                title: 'Categorias de Cursos',
                loadComponent: () => import('./controllers/pages/categories-courses-page/categories-courses-page.component')
                .then(c => c.CategoriesCoursesPageComponent),
                canActivate: [authGuard],
            },
            {
                path:'contact',
                title: 'Contacto',
                loadComponent: () => import('./controllers/pages/contact-page/contact-page.component')
                .then(c => c.ContactPageComponent),
                canActivate: [authGuard],
            },

        ]
    },
    {
        path:'**',
        title: 'Not Found',
        loadComponent: () => import('./controllers/pages/not-found-page/not-found-page.component')
        .then(c => c.NotFoundPageComponent),
    }

];
