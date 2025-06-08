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
  
  // Destination routes
  // {
  //   path: 'destinations/agrigento',
  //   loadComponent: () => import('./pages/destinations/agrigento/agrigento.component').then(m => m.AgrigentoComponent)
  // },
  {
    path: 'destinations/catania',
    loadComponent: () => import('./pages/destinations/catania/catania.component').then(m => m.CataniaComponent)
  },
  {
    path: 'destinations/cefalu',
    loadComponent: () => import('./pages/destinations/cefalu/cefalu.component').then(m => m.CefaluComponent)
  },
  // {
  //   path: 'destinations/erice',
  //   loadComponent: () => import('./pages/destinations/erice/erice.component').then(m => m.EriceComponent)
  // },
  // {
  //   path: 'destinations/gioiosa-marea',
  //   loadComponent: () => import('./pages/destinations/gioiosa-marea/gioiosa-marea.component').then(m => m.GioiosaMareaComponent)
  // },
  // {
  //   path: 'destinations/monreale',
  //   loadComponent: () => import('./pages/destinations/monreale/monreale.component').then(m => m.MonrealeComponent)
  // },
  // {
  //   path: 'destinations/noto',
  //   loadComponent: () => import('./pages/destinations/noto/noto.component').then(m => m.NotoComponent)
  // },
  // {
  //   path: 'destinations/palermo',
  //   loadComponent: () => import('./pages/destinations/palermo/palermo.component').then(m => m.PalermoComponent)
  // },
  // {
  //   path: 'destinations/piazza-armerina',
  //   loadComponent: () => import('./pages/destinations/piazza-armerina/piazza-armerina.component').then(m => m.PiazzaArmerinaComponent)
  // },
  // {
  //   path: 'destinations/ragusa',
  //   loadComponent: () => import('./pages/destinations/ragusa/ragusa.component').then(m => m.RagusaComponent)
  // },
  // {
  //   path: 'destinations/siracusa',
  //   loadComponent: () => import('./pages/destinations/siracusa/siracusa.component').then(m => m.SiracusaComponent)
  // },
  // {
  //   path: 'destinations/taormina',
  //   loadComponent: () => import('./pages/destinations/taormina/taormina.component').then(m => m.TaorminaComponent)
  // },
  // {
  //   path: 'destinations/trapani',
  //   loadComponent: () => import('./pages/destinations/trapani/trapani.component').then(m => m.TrapaniComponent)
  // },
  
  // // Destination overview page (optional)
  // {
  //   path: 'destinations',
  //   loadComponent: () => import('./pages/destinations/destinations-overview.component').then(m => m.DestinationsOverviewComponent)
  // },
  
  {
    path: '**',
    redirectTo: ''
  }
];