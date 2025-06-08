import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SicilyImageComponent } from '../sicily-image/sicily-image.component';

interface DestinationCard {
  name: string;
  slug: string;
  shortDescription: string;
  region: string;
  category: string; // Add category for one-word descriptors
  heroImage: string;
  specialties: string[];
  recommendedDuration: string;
  highlights: string[];
}

@Component({
  selector: 'app-destinations-cards',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatChipsModule,
    SicilyImageComponent
  ],
  template: `
    <div class="destinations-container">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-dark-text mb-4 font-serif">
          Sicilian Destinations
        </h1>
      </div>

      <!-- Destinations Grid -->
      <div class="destinations-grid">
        <mat-card 
          *ngFor="let destination of destinations; trackBy: trackBySlug"
          class="destination-card group"
          [routerLink]="'/destinations/' + destination.slug">
          
          <!-- Image Section with Overlays -->
          <div class="card-image-container">
            <app-sicily-image
              [imageName]="destination.heroImage"
              [alt]="destination.name + ' - ' + destination.region"
              containerClass="h-full w-full"
              imageClass="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">
            </app-sicily-image>
            
            <!-- Image Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <!-- Top Labels -->
            <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
              <!-- Category Badge -->
              <div class="bg-sicilian-sea/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {{ destination.category }}
              </div>
              
              <!-- Duration Badge -->
              <div class="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {{ destination.recommendedDuration }}
              </div>
            </div>

            <!-- Bottom Content Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <!-- Title -->
              <h3 class="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">
                {{ destination.name }}
              </h3>
              
              <!-- Short Description -->
              <p class="text-white/90 text-sm md:text-base mb-4 drop-shadow-md line-clamp-2">
                {{ destination.shortDescription }}
              </p>
              
              <!-- Specialties as Chips -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  *ngFor="let specialty of destination.specialties.slice(0, 3)" 
                  class="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/30">
                  {{ specialty }}
                </span>
                <span *ngIf="destination.specialties.length > 3" 
                      class="bg-sicilian-gold/20 text-sicilian-gold px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-sicilian-gold/50">
                  +{{ destination.specialties.length - 3 }}
                </span>
              </div>

              <!-- Key Highlights as Quick Tags -->
              <div class="flex flex-wrap gap-2">
                <div 
                  *ngFor="let highlight of destination.highlights.slice(0, 2)" 
                  class="flex items-center bg-black/50 text-white/90 px-3 py-1 rounded-lg text-xs backdrop-blur-sm">
                  <mat-icon class="mr-1 text-xs text-sicilian-gold">star</mat-icon>
                  <span class="line-clamp-1">{{ highlight }}</span>
                </div>
              </div>
            </div>

            <!-- Hover Overlay with Action -->
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-center text-white">
                <mat-icon class="text-4xl mb-2 text-sicilian-gold">info</mat-icon>
                <p class="text-lg font-semibold">Learn More</p>
                <p class="text-sm text-white/80">Click to explore {{ destination.name }}</p>
              </div>
            </div>
          </div>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .destinations-container {
      @apply max-w-7xl mx-auto px-4 py-12;
    }

    .destinations-grid {
      @apply grid gap-8;
      
      /* Responsive grid */
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      
      @media (max-width: 420px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .destination-card {
      @apply bg-dark-surface border border-dark-border rounded-2xl overflow-hidden shadow-xl;
      @apply transition-all duration-300 cursor-pointer;
      @apply hover:shadow-2xl hover:-translate-y-1 hover:border-sicilian-sea/50;
      
      /* Simplified card structure - image only */
      display: flex;
      flex-direction: column;
      height: 400px; /* Fixed height for consistency */
    }

    .card-image-container {
      @apply relative overflow-hidden h-full;
      flex: 1;
    }

    /* Remove old card content and actions styles */

    /* Line clamp utility */
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Material overrides */
    .mat-mdc-card {
      @apply bg-dark-surface text-dark-text;
      --mdc-elevated-card-container-color: rgb(var(--color-dark-surface));
    }

    .mat-mdc-card-content {
      color: inherit !important;
    }

    .mat-mdc-button {
      --mdc-text-button-label-text-color: white;
      --mdc-filled-button-container-color: rgb(var(--color-sicilian-sea));
    }

    mat-icon {
      @apply text-inherit;
      font-size: 1.25rem !important;
      width: 1.25rem !important;
      height: 1.25rem !important;
    }

    /* Text drop shadows for readability on images */
    .drop-shadow-lg {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    .drop-shadow-md {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .destinations-container {
        @apply px-4 py-8;
      }
      
      .destination-card {
        height: 350px;
      }
      
      .card-image-container .absolute.bottom-0 {
        @apply p-4;
      }
      
      .card-image-container h3 {
        @apply text-xl;
      }
      
      .card-image-container p {
        @apply text-sm;
      }
    }

    @media (max-width: 480px) {
      .destination-card {
        height: 320px;
      }
      
      .card-image-container .absolute.top-4 {
        @apply top-3 left-3 right-3;
      }
      
      .card-image-container .absolute.bottom-0 {
        @apply p-3;
      }
    }

    /* Material overrides */
    .mat-mdc-card {
      @apply bg-transparent text-dark-text;
      --mdc-elevated-card-container-color: transparent;
    }

    mat-icon {
      @apply text-inherit;
      font-size: 1rem !important;
      width: 1rem !important;
      height: 1rem !important;
    }

    mat-icon.text-4xl {
      font-size: 2.5rem !important;
      width: 2.5rem !important;
      height: 2.5rem !important;
    }

    mat-icon.text-xs {
      font-size: 0.75rem !important;
      width: 0.75rem !important;
      height: 0.75rem !important;
    }

    /* Line clamp utility */
    .line-clamp-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Focus states for accessibility */
    .destination-card:focus {
      @apply outline-none ring-2 ring-sicilian-sea ring-offset-2 ring-offset-dark-bg;
    }

    .learn-more-button:focus {
      @apply outline-none ring-2 ring-sicilian-sea ring-offset-2 ring-offset-dark-surface;
    }
  `]
})
export class DestinationsCardsComponent {
  
  destinations: DestinationCard[] = [
    {
      name: 'Agrigento',
      slug: 'agrigento',
      shortDescription: 'Valley of the Temples - eight magnificent Greek temples in the world\'s largest archaeological site outside Greece.',
      region: 'Southern Sicily',
      category: 'Ancient Greek',
      heroImage: 'agrigento.jpg',
      specialties: ['Greek Temples', 'UNESCO Heritage', 'Archaeological Museum', 'Almond Blossoms'],
      recommendedDuration: '1-2 days',
      highlights: [
        'Temple of Concordia - best preserved Greek temple worldwide',
        'Valley of the Temples archaeological park'
      ]
    },
    {
      name: 'Catania',
      slug: 'catania',
      shortDescription: 'Vibrant baroque city at the foot of Mount Etna, with volcanic stone architecture and bustling markets.',
      region: 'Eastern Sicily',
      category: 'Baroque City',
      heroImage: 'catania.jpg',
      specialties: ['Baroque Architecture', 'Mount Etna Views', 'Street Food', 'Fish Markets'],
      recommendedDuration: '2-3 days',
      highlights: [
        'Piazza del Duomo with Elephant Fountain',
        'Via Etnea shopping street and Etna views'
      ]
    },
    {
      name: 'Taormina',
      slug: 'taormina',
      shortDescription: 'Spectacular hilltop town with ancient Greek theater offering breathtaking views of Mount Etna and the sea.',
      region: 'Eastern Sicily',
      category: 'Ancient Sites',
      heroImage: 'taormina.jpg',
      specialties: ['Greek Theater', 'Scenic Views', 'Luxury Resort', 'Historic Center'],
      recommendedDuration: '2-3 days',
      highlights: [
        'Ancient Greek Theater with Etna backdrop',
        'Corso Umberto pedestrian street'
      ]
    },
    {
      name: 'Siracusa',
      slug: 'siracusa',
      shortDescription: 'Ancient Greek city with remarkable archaeological park and charming Ortigia island old town.',
      region: 'Southeastern Sicily',
      category: 'UNESCO Heritage',
      heroImage: 'siracusa.jpg',
      specialties: ['Greek History', 'Ortigia Island', 'Archaeological Park', 'Baroque Churches'],
      recommendedDuration: '2-3 days',
      highlights: [
        'Neapolis Archaeological Park with Greek theater',
        'Ortigia island historic center'
      ]
    },
    {
      name: 'Palermo',
      slug: 'palermo',
      shortDescription: 'Sicily\'s vibrant capital blending Norman, Arab, and Byzantine influences with incredible street food culture.',
      region: 'Northwestern Sicily',
      category: 'Capital City',
      heroImage: 'palermo.jpg',
      specialties: ['Norman Architecture', 'Street Markets', 'Multicultural Heritage', 'Street Food'],
      recommendedDuration: '3-4 days',
      highlights: [
        'Palatine Chapel with golden mosaics',
        'Ballarò and Vucciria markets'
      ]
    },
    {
      name: 'Cefalù',
      slug: 'cefalu',
      shortDescription: 'Picturesque coastal town dominated by a magnificent Norman cathedral and beautiful sandy beaches.',
      region: 'Northern Sicily',
      category: 'Beach Town',
      heroImage: 'cefalu.jpg',
      specialties: ['Norman Cathedral', 'Beach Resort', 'Medieval Streets', 'Coastal Views'],
      recommendedDuration: '1-2 days',
      highlights: [
        'Norman Cathedral with stunning mosaics',
        'La Rocca fortress climb with panoramic views'
      ]
    },
    {
      name: 'Monreale',
      slug: 'monreale',
      shortDescription: 'Mountain town famous for its extraordinary Norman cathedral covered in golden Byzantine mosaics.',
      region: 'Near Palermo',
      category: 'Religious Site',
      heroImage: 'monreale.jpg',
      specialties: ['Norman Cathedral', 'Byzantine Mosaics', 'Mountain Views', 'Cloisters'],
      recommendedDuration: 'Half day',
      highlights: [
        'Cathedral with world\'s finest Byzantine mosaics',
        'Benedictine cloister with carved columns'
      ]
    },
    {
      name: 'Noto',
      slug: 'noto',
      shortDescription: 'UNESCO World Heritage baroque masterpiece, entirely rebuilt in golden limestone after 1693 earthquake.',
      region: 'Southeastern Sicily',
      category: 'Baroque Jewel',
      heroImage: 'noto.jpg',
      specialties: ['Baroque Architecture', 'UNESCO Heritage', 'Golden Stone', 'Historic Center'],
      recommendedDuration: '1 day',
      highlights: [
        'Corso Vittorio Emanuele baroque palaces',
        'Cathedral and Palazzo Ducezio'
      ]
    },
    {
      name: 'Ragusa',
      slug: 'ragusa',
      shortDescription: 'Two-part baroque city with stunning Ragusa Ibla old town perched dramatically on a hillside.',
      region: 'Southeastern Sicily',
      category: 'Baroque Town',
      heroImage: 'ragusa.jpg',
      specialties: ['Baroque UNESCO Site', 'Ragusa Ibla', 'Historic Churches', 'Valley Views'],
      recommendedDuration: '1-2 days',
      highlights: [
        'Ragusa Ibla with San Giorgio Cathedral',
        'Panoramic views from upper Ragusa'
      ]
    },
    {
      name: 'Trapani',
      slug: 'trapani',
      shortDescription: 'Western Sicily\'s gateway with salt pans, windmills, and access to Egadi Islands and Erice.',
      region: 'Western Sicily',
      category: 'Port City',
      heroImage: 'trapani.jpg',
      specialties: ['Salt Pans', 'Seafood', 'Island Access', 'Windmills'],
      recommendedDuration: '1-2 days',
      highlights: [
        'Trapani Salt Pans with traditional windmills',
        'Historic center and seafood restaurants'
      ]
    },
    {
      name: 'Erice',
      slug: 'erice',
      shortDescription: 'Medieval mountaintop town with cobblestone streets, ancient walls, and panoramic coastal views.',
      region: 'Western Sicily',
      category: 'Mountain Town',
      heroImage: 'erice.jpg',
      specialties: ['Medieval Town', 'Mountain Views', 'Ancient Walls', 'Traditional Pastries'],
      recommendedDuration: 'Half day',
      highlights: [
        'Medieval streets and Norman castle',
        'Panoramic views over western Sicily'
      ]
    },
    {
      name: 'Piazza Armerina',
      slug: 'piazza-armerina',
      shortDescription: 'Home to Villa Romana del Casale with the world\'s finest collection of Roman mosaics.',
      region: 'Central Sicily',
      category: 'Roman Heritage',
      heroImage: 'piazza_armerina.jpg',
      specialties: ['Roman Mosaics', 'UNESCO Heritage', 'Villa Romana', 'Ancient History'],
      recommendedDuration: 'Half day',
      highlights: [
        'Villa Romana del Casale with "Bikini Girls" mosaics',
        'UNESCO World Heritage Roman villa'
      ]
    },
    {
      name: 'Gioiosa Marea',
      slug: 'gioiosa-marea',
      shortDescription: 'Charming coastal town offering spectacular views of the Aeolian Islands and pristine beaches.',
      region: 'Northern Sicily',
      category: 'Coastal Village',
      heroImage: 'gioiosa_marea.jpg',
      specialties: ['Aeolian Views', 'Beaches', 'Coastal Town', 'Island Access'],
      recommendedDuration: '1-2 days',
      highlights: [
        'Panoramic views of Aeolian Islands',
        'Beautiful beaches and coastal walks'
      ]
    }
  ];

  trackBySlug(index: number, destination: DestinationCard): string {
    return destination.slug;
  }
}