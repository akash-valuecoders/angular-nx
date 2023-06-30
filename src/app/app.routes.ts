import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@news-app-workspace/dashboard').then((m) => m.DashboardComponent)
    },
    {
        path: 'news',
        loadComponent: () => import('@news-app-workspace/news-item').then((m) => m.NewsItemComponent)
    }
];
