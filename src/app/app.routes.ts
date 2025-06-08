// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'destinations',
    loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent)
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
    path: 'itineraries/andrews-itinerary',
    loadComponent: () => import('./pages/itineraries/andrews-itinerary').then(m => m.AndrewsItineraryComponent)
  },

  // Family Planning Pages
  {
    path: 'planning/nonna',
    loadComponent: () => import('./pages/planning/nonna/nonna.component').then(m => m.NonnaComponent)
  },
  {
    path: 'planning/andrew',
    loadComponent: () => import('./pages/planning/andrew/andrew.component').then(m => m.AndrewComponent)
  },
  {
    path: 'planning/karen',
    loadComponent: () => import('./pages/planning/karen/karen.component').then(m => m.KarenComponent)
  },
  {
    path: 'planning/poppop',
    loadComponent: () => import('./pages/planning/poppop/poppop.component').then(m => m.PoppopComponent)
  },
  {
    path: 'planning/jim',
    loadComponent: () => import('./pages/planning/jim/jim.component').then(m => m.JimComponent)
  },

  // Destination Pages
  {
    path: 'agrigento',
    loadComponent: () => import('./pages/destinations/agrigento/agrigento.component').then(m => m.AgrigentoComponent)
  },
  {
    path: 'catania',
    loadComponent: () => import('./pages/destinations/catania/catania.component').then(m => m.CataniaComponent)
  },
  {
    path: 'cefalu',
    loadComponent: () => import('./pages/destinations/cefalu/cefalu.component').then(m => m.CefaluComponent)
  },
  {
    path: 'erice',
    loadComponent: () => import('./pages/destinations/erice/erice.component').then(m => m.EriceComponent)
  },
  {
    path: 'gioiosa-marea',
    loadComponent: () => import('./pages/destinations/gioiosa-marea/gioiosa-marea.component').then(m => m.GioiosaMareaComponent)
  },
  {
    path: 'monreale',
    loadComponent: () => import('./pages/destinations/monreale/monreale.component').then(m => m.MonrealeComponent)
  },
  {
    path: 'noto',
    loadComponent: () => import('./pages/destinations/noto/noto.component').then(m => m.NotoComponent)
  },
  {
    path: 'palermo',
    loadComponent: () => import('./pages/destinations/palermo/palermo.component').then(m => m.PalermoComponent)
  },
  {
    path: 'piazza-armerina',
    loadComponent: () => import('./pages/destinations/piazza-armerina/piazza-armerina.component').then(m => m.PiazzaArmerinaComponent)
  },
  {
    path: 'ragusa',
    loadComponent: () => import('./pages/destinations/ragusa/ragusa.component').then(m => m.RagusaComponent)
  },
  {
    path: 'siracusa',
    loadComponent: () => import('./pages/destinations/siracusa/siracusa.component').then(m => m.SiracusaComponent)
  },
  {
    path: 'taormina',
    loadComponent: () => import('./pages/destinations/taormina/taormina.component').then(m => m.TaorminaComponent)
  },
  {
    path: 'trapani',
    loadComponent: () => import('./pages/destinations/trapani/trapani.component').then(m => m.TrapaniComponent)
  },

  // Catch-all route - redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];