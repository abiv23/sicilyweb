import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
        
        <!-- Bottom Image Info -->
        <div class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-6 border-t border-white/20">
          <div class="container mx-auto px-4">
            <h2 class="text-white text-3xl md:text-4xl font-bold mb-2">{{ heroData.imageTitle }}</h2>
            <p class="text-white/90 text-lg md:text-xl leading-relaxed">{{ heroData.imageDescription }}</p>
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
               class="bg-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <img [src]="destination.image" 
                 [alt]="destination.title" 
                 class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-white text-xl font-bold mb-2">{{ destination.title }}</h3>
              <p class="text-gray-300">{{ destination.description }}</p>
            </div>
          </div>
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
  `]
})
export class HomeComponent {
  destinations = [
    {
      image: '/images/etna.jpg',
      title: 'Mount Etna',
      description: 'Europe\'s highest active volcano with volcanic wines and lunar landscapes'
    },
    {
      image: '/images/taormina_theater.jpg',
      title: 'Taormina Theater',
      description: 'Ancient amphitheater with stunning views over the Ionian Sea'
    },
    {
      image: '/images/syracuse.jpg',
      title: 'Syracuse & Ortigia',
      description: 'Baroque architecture and ancient Greek civilization history'
    },
    {
      image: '/images/sicilian_coastline.jpg',
      title: 'Sicilian Coastline',
      description: 'Crystal-clear Mediterranean waters and dramatic cliffs'
    },
    {
      image: '/images/palermo.jpg',
      title: 'Palermo Streets',
      description: 'Vibrant markets, Norman palaces, and authentic street food'
    },
    {
      image: '/images/food.jpg',
      title: 'Sicilian Cuisine',
      description: 'Authentic flavors, volcanic soil wines, and culinary traditions'
    }
  ];

  // Hero section data
  heroData = {
    backgroundImage: '/images/mountain_village.jpg',
    title: 'Sicily Family Adventure',
    subtitle: 'September 1-11, 2026 • An unforgettable journey through Sicily\'s ancient wonders',
    imageTitle: 'Mountain Village in Sicily',
    imageDescription: 'ToDo: look up where this is'
  };

  constructor() {
    // Component initialization - no complex setup needed
  }
}