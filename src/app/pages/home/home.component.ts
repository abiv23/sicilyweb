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

    <!-- Features Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16 text-white">
          Your Complete Sicily Experience
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <mat-card *ngFor="let feature of features"
                    class="p-8 bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200"
                    [routerLink]="feature.route"
                    [class.pointer-events-none]="!feature.route"
                    [class.cursor-default]="!feature.route">
            <div class="text-6xl text-center mb-6">{{ feature.icon }}</div>
            <mat-card-header class="pb-4">
              <mat-card-title class="text-2xl font-bold text-center text-gray-800">{{ feature.title }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                {{ feature.description }}
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span *ngFor="let tag of feature.tags; let i = index"
                      [class]="feature.tagColors[i]"
                      class="px-4 py-2 rounded-full text-sm font-medium">
                  {{ tag }}
                </span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Sicily Highlights Section -->
    <section class="py-20 bg-slate-800 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16">Sicily Highlights</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div *ngFor="let highlight of highlights"
               class="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4" [class]="highlight.color">
              {{ highlight.icon }} {{ highlight.title }}
            </h4>
            <p class="text-gray-200 leading-relaxed">{{ highlight.description }}</p>
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
  // Simple component with no carousel complexity
  
  // Sicily destinations data for the gallery
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
      image: 'https://images.unsplash.com/photo-1591017939771-29e8c7024c84?w=600&q=80',
      title: 'Syracuse & Ortigia',
      description: 'Baroque architecture and ancient Greek civilization history'
    },
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      title: 'Sicilian Coastline',
      description: 'Crystal-clear Mediterranean waters and dramatic cliffs'
    },
    {
      image: 'https://images.unsplash.com/photo-1559058775-dfcc32339444?w=600&q=80',
      title: 'Palermo Streets',
      description: 'Vibrant markets, Norman palaces, and authentic street food'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      title: 'Sicilian Cuisine',
      description: 'Authentic flavors, volcanic soil wines, and culinary traditions'
    }
  ];

  // Trip highlights data
  highlights = [
    {
      icon: '🏛️',
      title: 'UNESCO World Heritage Sites',
      description: 'Syracuse, Noto, Ragusa Ibla, Piazza Armerina, Valley of Temples, Mount Etna',
      color: 'text-blue-400'
    },
    {
      icon: '🍷',
      title: 'Culinary Experiences',
      description: 'Volcanic soil wines, granita & brioche, cooking classes, street food tours',
      color: 'text-red-400'
    },
    {
      icon: '🌟',
      title: 'Luxury Touches',
      description: 'Private palazzo visits, exclusive vineyard tastings, after-hours museum access',
      color: 'text-yellow-400'
    },
    {
      icon: '👥',
      title: 'Family-Friendly',
      description: 'Comfortable pace for ages 40-80, 4-star accommodations, manageable distances',
      color: 'text-green-400'
    }
  ];

  // Feature cards data
  features = [
    {
      icon: '🏛️',
      title: 'Detailed Itinerary',
      description: '10-day journey through UNESCO sites, baroque cities, Mount Etna and luxury experiences inspired by premium tour operators.',
      tags: ['Valley of Temples', 'Mount Etna', 'Taormina'],
      tagColors: ['bg-blue-100 text-blue-800', 'bg-red-100 text-red-800', 'bg-green-100 text-green-800'],
      route: '/planning'
    },
    {
      icon: '🗣️',
      title: 'Italian Language Prep',
      description: 'Complete guide to learning Italian in 1.5 years with resources, pricing, and Sicily-specific cultural tips.',
      tags: ['Essential Phrases', 'Duolingo & Pimsleur', 'Cultural Tips'],
      tagColors: ['bg-orange-100 text-orange-800', 'bg-purple-100 text-purple-800', 'bg-yellow-100 text-yellow-800'],
      route: '/language'
    },
    {
      icon: '✈️',
      title: 'Travel Logistics',
      description: 'Flight recommendations, car rentals for 6 adults, accommodation booking tips, and practical information.',
      tags: ['Delta Flights', '4-Star Hotels', 'Senior-Friendly'],
      tagColors: ['bg-indigo-100 text-indigo-800', 'bg-teal-100 text-teal-800', 'bg-pink-100 text-pink-800'],
      route: null
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