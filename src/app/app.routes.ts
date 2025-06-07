import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'planning',
    loadComponent: () => import('./pages/planning/planning.component').then(m => m.PlanningComponent)
  },
  {
    path: 'language',
    loadComponent: () => import('./pages/language/language.component').then(m => m.LanguageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];