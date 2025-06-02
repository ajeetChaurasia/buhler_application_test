import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'scale', loadComponent: () => import('../../components/scale/scale').then(m => m.Scale) },
    {path: 'attacher', loadComponent: () => import('../../components/attacher/attacher').then(m => m.Attacher) },
    {path: 'packer', loadComponent: () => import('../../components/packer/packer').then(m => m.Packer) },
    {path: 'closer', loadComponent: () => import('../../components/closer/closer').then(m => m.Closer) },
];
// Note: The above routes are lazy-loaded components, which means they will be loaded only when the user navigates to them.
// This helps in reducing the initial load time of the application by splitting the code into smaller chunks.