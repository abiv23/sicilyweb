import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <!-- Hero Section with Static Image -->
    <section class="relative h-screen min-h-[600px] overflow-hidden">
      <div class="relative h-full w-full">
        <!-- Hero Background -->
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          [style.background-image]="'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + heroData.backgroundImage + ')'">
        </div>
        
        <!-- Hero Text Overlay -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center text-white bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
              {{ heroData.title }}
            </h1>
            <p class="text-lg md:text-2xl mb-8 text-white/90">
              {{ heroData.subtitle }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button mat-raised-button 
                      routerLink="/planning"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300">
                🗺️ View Trip Planning
              </button>
              <button mat-raised-button 
                      routerLink="/language"
                      class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300">
                🗣️ Learn Italian
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Gallery Section -->
    <section class="py-20 bg-slate-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">
          Sicily Destinations Preview
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          <div *ngFor="let destination of destinations" 
               class="bg-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
               (click)="navigateToDestination(destination.slug)">
            <img [src]="destination.image" 
                 [alt]="destination.title" 
                 class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-white text-xl font-bold mb-2">{{ destination.title }}</h3>
              <p class="text-gray-300 mb-4">{{ destination.description }}</p>
              
              <!-- Navigation button to destination page -->
              <button mat-raised-button 
                      (click)="navigateToDestination(destination.slug); $event.stopPropagation()"
                      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 w-full">
                <mat-icon class="mr-2">explore</mat-icon>
                Explore {{ destination.title }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- View All Destinations Button -->
        <div class="text-center">
          <button mat-raised-button 
                  routerLink="/planning"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300">
            <mat-icon class="mr-2">map</mat-icon>
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mat-mdc-card {
      background: white !important;
      color: #374151 !important;
    }

    .mat-mdc-card-title {
      color: #374151 !important;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem !important;
      }
    }

    /* Add hover effects for destination cards */
    .cursor-pointer:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class HomeComponent {
  destinations = [
    {
      image: '/images/catania_ruins_etna.jpg',
      title: 'Catania',
      description: 'Baroque UNESCO city rebuilt after Mount Etna eruptions, famous for fish markets and lava stone architecture',
      slug: 'catania'
    },
    {
      image: '/images/taormina.jpg',
      title: 'Taormina',
      description: 'Dramatic hilltop town with ancient Greek theater overlooking Mount Etna and the Ionian Sea',
      slug: 'taormina'
    },
    {
      image: '/images/siracusa.jpg',
      title: 'Siracusa',
      description: 'Birthplace of Archimedes with stunning Ortigia island and ancient Greek archaeological treasures',
      slug: 'siracusa'
    },
    {
      image: '/images/cefalu.jpg',
      title: 'Cefalù',
      description: 'Medieval fishing village with Norman cathedral and pristine beaches beneath dramatic cliffs',
      slug: 'cefalu'
    },
    {
      image: '/images/piazza_armerina.jpg',
      title: 'Piazza Armerina',
      description: 'Home to Villa Romana del Casale with the world\'s finest preserved Roman mosaics',
      slug: 'piazza-armerina'
    },
    {
      image: '/images/agrigento.jpg',
      title: 'Agrigento',
      description: 'Valley of the Temples - eight magnificent Greek temples in the world\'s largest archaeological site',
      slug: 'agrigento'
    },
    {
      image: '/images/erice.jpg',
      title: 'Erice',
      description: 'Enchanting medieval hilltop town famous for almond pastries and misty mountain views',
      slug: 'erice'
    },
    {
      image: '/images/monreale.jpg',
      title: 'Monreale',
      description: 'Stunning Norman cathedral with golden Byzantine mosaics overlooking Palermo\'s Conca d\'Oro',
      slug: 'monreale'
    },
    {
      image: '/images/trapani.jpg',
      title: 'Trapani',
      description: 'Historic port city known for sea salt production, tuna fishing, and gateway to Egadi Islands',
      slug: 'trapani'
    },
    {
      image: '/images/ragusa.jpg',
      title: 'Ragusa',
      description: 'Baroque UNESCO gem with Ragusa Ibla\'s winding medieval streets and stunning valley views',
      slug: 'ragusa'
    },
    {
      image: '/images/noto.jpg',
      title: 'Noto',
      description: 'The crown jewel of Sicilian Baroque architecture with honey-colored limestone buildings',
      slug: 'noto'
    },
    {
      image: '/images/gioiosa_marea.png',
      title: 'Gioiosa Marea',
      description: 'Charming coastal town with family connections and beautiful views of the Aeolian Islands',
      slug: 'gioiosa-marea'
    },
    {
      image: '/images/palermo.jpg',
      title: 'Palermo',
      description: 'Sicily\'s vibrant capital with Norman palaces, bustling markets, and incredible street food scene',
      slug: 'palermo'
    }
  ];

  // Hero section data
  heroData = {
    backgroundImage: '/images/mountain_village.jpg',
    title: 'Sicily Family Adventure',
    subtitle: 'September 1-11, 2026',
    imageTitle: '',
    imageDescription: ''
  };

  constructor(private router: Router) {
    // Component initialization
  }

  navigateToDestination(slug: string) {
    this.router.navigate(['/' + slug]);
  }
}