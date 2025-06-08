import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SicilyImageComponent } from '../../components/sicily-image/sicily-image.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, SicilyImageComponent],
  template: `
    <div class="min-h-screen bg-dark-bg">
      <!-- Hero Section -->
      <section class="relative h-96 overflow-hidden shadow-2xl">
        <div class="relative h-full w-full">
          <!-- Hero Background -->
          <app-sicily-image 
            imageName="ruins_ortega.jpg"
            alt="Sicilian Ancient Ruins and Archaeological Sites"
            containerClass="absolute inset-0 h-full w-full"
            imageClass="h-full w-full object-cover"
            [enableHover]="false">
          </app-sicily-image>
          
          <!-- Dark overlay for text readability -->
          <div class="absolute inset-0 bg-black/60"></div>
          
          <!-- Hero Text Overlay -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center text-white bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">
                🏛️ Sicily Destinations
              </h1>
              <p class="text-lg md:text-xl text-white/90 mb-2">
                Discover UNESCO Sites, Ancient Greek Temples & Baroque Architecture
              </p>
              <div class="text-sicilian-gold">
                📍 13 Incredible Destinations Across Sicily
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content Container -->
      <div class="container mx-auto px-6 max-w-6xl py-8">
        
        <!-- Introduction Section -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dark-text mb-6 border-l-4 border-sicilian-sea pl-4 text-left">
            🗺️ Explore Sicily's Greatest Treasures
          </h2>
          <p class="text-dark-text-secondary text-lg leading-relaxed max-w-4xl mx-auto">
            From ancient Greek temples to baroque masterpieces, from volcanic landscapes to charming fishing villages, 
            Sicily offers an incredible diversity of destinations. Each location tells a unique story of the island's 
            rich cultural heritage spanning over 3,000 years.
          </p>
        </div>

        <!-- Destinations Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div *ngFor="let destination of destinations" 
               class="bg-dark-surface rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-dark-border shadow-xl hover:shadow-2xl"
               (click)="navigateToDestination(destination.slug)">
            
            <!-- Destination Image -->
            <div class="relative h-48 overflow-hidden">
              <img [src]="destination.image" 
                   [alt]="destination.title" 
                   class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
              
              <!-- Category Badge -->
              <div class="absolute top-3 left-3">
                <span class="bg-sicilian-sea/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {{ destination.category }}
                </span>
              </div>
              
              <!-- Quick Info Badge -->
              <div class="absolute top-3 right-3">
                <span class="bg-sicilian-gold/90 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {{ destination.duration }}
                </span>
              </div>
            </div>
            
            <!-- Destination Content -->
            <div class="p-6">
              <h3 class="text-white text-xl font-bold mb-2">{{ destination.title }}</h3>
              <p class="text-dark-text-secondary mb-4 text-sm leading-relaxed">{{ destination.description }}</p>
              
              <!-- Highlights -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let highlight of destination.highlights" 
                      class="bg-dark-elevated text-dark-text-secondary px-2 py-1 rounded-full text-xs border border-dark-border">
                  {{ highlight }}
                </span>
              </div>
              
              <!-- Navigation button -->
              <button mat-raised-button 
                      (click)="navigateToDestination(destination.slug); $event.stopPropagation()"
                      class="bg-sicilian-sea hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 w-full">
                <mat-icon class="mr-2">explore</mat-icon>
                Explore {{ destination.title }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="text-center">
          <div class="bg-dark-surface border border-dark-border rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-dark-text mb-4">Ready to Plan Your Sicily Adventure?</h3>
            <p class="text-dark-text-secondary mb-6 text-lg">
              Explore our complete trip planning guide with detailed itineraries, accommodations, and insider tips.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button mat-raised-button 
                      routerLink="/planning"
                      class="bg-italian-green hover:bg-green-600 text-white px-8 py-3 text-lg font-bold rounded-lg transition-all duration-300">
                <mat-icon class="mr-2">map</mat-icon>
                View Trip Planning
              </button>
              <button mat-raised-button 
                      routerLink="/language"
                      class="bg-italian-red hover:bg-red-600 text-white px-8 py-3 text-lg font-bold rounded-lg transition-all duration-300">
                <mat-icon class="mr-2">translate</mat-icon>
                Learn Italian
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mat-mdc-card {
      background: white !important;
      color: #374151 !important;
    }

    .mat-mdc-card-title {
      color: #374151 !important;
    }

    /* Add hover effects for destination cards */
    .cursor-pointer:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    }

    /* Glassmorphism backdrop */
    .backdrop-blur-md {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem !important;
      }
    }
  `]
})
export class DestinationsComponent {
  destinations = [
    {
      image: '/images/catania_ruins_etna.jpg',
      title: 'Catania',
      description: 'Baroque UNESCO city rebuilt after Mount Etna eruptions, famous for fish markets and lava stone architecture',
      slug: 'catania',
      category: 'Baroque City',
      duration: '2-3 days',
      highlights: ['Fish Markets', 'Baroque Architecture', 'Mount Etna Base']
    },
    {
      image: '/images/taormina.jpg',
      title: 'Taormina',
      description: 'Dramatic hilltop town with ancient Greek theater overlooking Mount Etna and the Ionian Sea',
      slug: 'taormina',
      category: 'Ancient Sites',
      duration: '2-3 days',
      highlights: ['Greek Theater', 'Mount Etna Views', 'Luxury Resort']
    },
    {
      image: '/images/siracusa.jpg',
      title: 'Siracusa',
      description: 'Birthplace of Archimedes with stunning Ortigia island and ancient Greek archaeological treasures',
      slug: 'siracusa',
      category: 'UNESCO Heritage',
      duration: '2 days',
      highlights: ['Greek Theater', 'Ortigia Island', 'Archaeology']
    },
    {
      image: '/images/agrigento.jpg',
      title: 'Agrigento',
      description: 'Valley of the Temples - eight magnificent Greek temples in the world\'s largest archaeological site',
      slug: 'agrigento',
      category: 'Ancient Greek',
      duration: '1-2 days',
      highlights: ['Valley of Temples', 'UNESCO Site', 'Greek Heritage']
    },
    {
      image: '/images/palermo.jpg',
      title: 'Palermo',
      description: 'Sicily\'s vibrant capital with Norman palaces, bustling markets, and incredible street food scene',
      slug: 'palermo',
      category: 'Capital City',
      duration: '2-3 days',
      highlights: ['Norman Palaces', 'Street Food', 'Markets']
    },
    {
      image: '/images/cefalu.jpg',
      title: 'Cefalù',
      description: 'Medieval fishing village with Norman cathedral and pristine beaches beneath dramatic cliffs',
      slug: 'cefalu',
      category: 'Beach Town',
      duration: '1-2 days',
      highlights: ['Norman Cathedral', 'Beach Resort', 'Medieval Streets']
    },
    {
      image: '/images/monreale.jpg',
      title: 'Monreale',
      description: 'Stunning Norman cathedral with golden Byzantine mosaics overlooking Palermo\'s Conca d\'Oro',
      slug: 'monreale',
      category: 'Religious Site',
      duration: 'Half day',
      highlights: ['Byzantine Mosaics', 'Norman Architecture', 'Valley Views']
    },
    {
      image: '/images/noto.jpg',
      title: 'Noto',
      description: 'The crown jewel of Sicilian Baroque architecture with honey-colored limestone buildings',
      slug: 'noto',
      category: 'Baroque Jewel',
      duration: '1 day',
      highlights: ['Baroque Architecture', 'UNESCO Heritage', 'Stone Garden']
    },
    {
      image: '/images/ragusa.jpg',
      title: 'Ragusa',
      description: 'Baroque UNESCO gem with Ragusa Ibla\'s winding medieval streets and stunning valley views',
      slug: 'ragusa',
      category: 'Baroque Town',
      duration: '1-2 days',
      highlights: ['Medieval Streets', 'Valley Views', 'UNESCO Site']
    },
    {
      image: '/images/piazza_armerina.jpg',
      title: 'Piazza Armerina',
      description: 'Home to Villa Romana del Casale with the world\'s finest preserved Roman mosaics',
      slug: 'piazza-armerina',
      category: 'Roman Heritage',
      duration: '1 day',
      highlights: ['Roman Mosaics', 'Villa Romana', 'Archaeological']
    },
    {
      image: '/images/trapani.jpg',
      title: 'Trapani',
      description: 'Historic port city known for sea salt production, tuna fishing, and gateway to Egadi Islands',
      slug: 'trapani',
      category: 'Port City',
      duration: '1-2 days',
      highlights: ['Salt Pans', 'Island Gateway', 'Maritime Heritage']
    },
    {
      image: '/images/erice.jpg',
      title: 'Erice',
      description: 'Enchanting medieval hilltop town famous for almond pastries and misty mountain views',
      slug: 'erice',
      category: 'Mountain Town',
      duration: 'Half day',
      highlights: ['Medieval Architecture', 'Almond Pastries', 'Mountain Views']
    },
    {
      image: '/images/gioiosa_marea.png',
      title: 'Gioiosa Marea',
      description: 'Charming coastal town with family connections and beautiful views of the Aeolian Islands',
      slug: 'gioiosa-marea',
      category: 'Coastal Village',
      duration: '1-2 days',
      highlights: ['Family Heritage', 'Aeolian Views', 'Fishing Village']
    }
  ];

  constructor(private router: Router) {
    // Component initialization
  }

  navigateToDestination(slug: string) {
    this.router.navigate(['/' + slug]);
  }
}