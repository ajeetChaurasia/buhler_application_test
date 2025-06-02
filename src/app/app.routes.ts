import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', loadComponent: () => import('./core/overview/overview').then(m => m.Overview),
        loadChildren: () => import('../app/core/overview/overview.routes').then(m => m.routes) ,
     },
    {path: 'profile', loadComponent: () => import('./components/profile/profile').then(m => m.Profile) },
    {path: 'settings', loadComponent: () => import('./components/settings/settings').then(m => m.Settings) },
];
// Note: The above routes are lazy-loaded components, which means they will be loaded only when the user navigates to them.
// This helps in reducing the initial load time of the application by splitting the code into smaller chunks.