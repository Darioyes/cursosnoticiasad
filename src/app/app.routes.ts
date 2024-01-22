import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('./controllers/pages/login-page/login-page.component'),
    },
    {
        path: 'home',
        title: 'Home NotiWeb',
        loadComponent: () => import('./controllers/pages/dashboard/dashboard.component'),
    },
    {
        path:'**',
        title: 'Not Found',
        loadComponent: () => import('./controllers/pages/not-found-page/not-found-page.component'),
    }

];
