import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DestinationsCardsComponent } from '../../components/destinations-cards/destinations-cards.component';
import { SicilyImageComponent } from '../../components/sicily-image/sicily-image.component';
import { MapImageComponent } from '../../components/map-image/map-image.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatButtonModule, 
    MatIconModule,
    DestinationsCardsComponent,
    SicilyImageComponent,
    MapImageComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-bg">
      
      <!-- Page Header Section -->
      <section class="relative h-80 overflow-hidden">
        <div class="relative h-full w-full">
          <!-- Header Background Image -->
          <app-sicily-image
            imageName="etna.jpg"
            alt="Sicily destinations overview with ancient temples and coastal views"
            containerClass="absolute inset-0 h-full w-full"
            imageClass="h-full w-full object-cover"
            [enableHover]="false">
          </app-sicily-image>
          
          <!-- Header Content -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center text-white max-w-4xl mx-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">
                Sicily Destinations
              </h1>
              <p class="text-lg md:text-xl text-white/90 leading-relaxed">
                Explore 13 extraordinary destinations across Sicily, from ancient Greek temples 
                to volcanic landscapes, medieval hilltop towns to pristine coastal paradises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- All Destinations Cards -->
      <section class="py-16 bg-dark-bg">
        <app-destinations-cards></app-destinations-cards>
      </section>

      <!-- Sicily Destinations Map -->
      <section class="py-16 bg-dark-surface">
        <div class="max-w-6xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-dark-text mb-6">
            Sicily
          </h2>
          
          <!-- Sicily Map -->
          <app-map-image
            imageSrc="/images/maps/map-sicily.png"
            altText="Sicily destinations map showing locations of all 13 featured destinations">
          </app-map-image>

        </div>
      </section>

            <!-- Destinations Overview -->
      <section class="py-12 bg-dark-surface">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            <!-- Eastern Sicily -->
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-sea/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-sea">terrain</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Eastern Sicily</h3>
              <p class="text-dark-text-secondary mb-4">
                Discover Taormina's ancient theater, Catania's baroque splendor, and Siracusa's Greek heritage, 
                all dominated by the magnificent Mount Etna.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-sicilian-sea/20 text-sicilian-sea px-3 py-1 rounded-full text-sm">Taormina</span>
                <span class="bg-sicilian-sea/20 text-sicilian-sea px-3 py-1 rounded-full text-sm">Catania</span>
                <span class="bg-sicilian-sea/20 text-sicilian-sea px-3 py-1 rounded-full text-sm">Siracusa</span>
              </div>
            </div>

            <!-- Western Sicily -->
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-sunset/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-sunset">castle</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Western Sicily</h3>
              <p class="text-dark-text-secondary mb-4">
                Experience Palermo's multicultural heritage, Erice's medieval charm, and Trapani's salt pans 
                in Sicily's most diverse cultural region.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-sicilian-sunset/20 text-sicilian-sunset px-3 py-1 rounded-full text-sm">Palermo</span>
                <span class="bg-sicilian-sunset/20 text-sicilian-sunset px-3 py-1 rounded-full text-sm">Erice</span>
                <span class="bg-sicilian-sunset/20 text-sicilian-sunset px-3 py-1 rounded-full text-sm">Trapani</span>
              </div>
            </div>

            <!-- Southern Sicily -->
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-gold">account_balance</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Southern Sicily</h3>
              <p class="text-dark-text-secondary mb-4">
                Marvel at Agrigento's Greek temples, Noto's baroque perfection, and Ragusa's dramatic hilltop setting 
                in this UNESCO-rich region.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-sicilian-gold/20 text-sicilian-gold px-3 py-1 rounded-full text-sm">Agrigento</span>
                <span class="bg-sicilian-gold/20 text-sicilian-gold px-3 py-1 rounded-full text-sm">Noto</span>
                <span class="bg-sicilian-gold/20 text-sicilian-gold px-3 py-1 rounded-full text-sm">Ragusa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
  styles: [`
    /* CTA Buttons */
    .cta-button {
      @apply px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300;
      @apply min-w-48 h-14;
    }

    .cta-button.primary {
      @apply bg-white hover:bg-gray-100 text-sicilian-sea;
      @apply shadow-lg hover:shadow-xl hover:scale-105;
      @apply border-2 border-white;
    }

    .cta-button.secondary {
      @apply bg-white/20 hover:bg-white/30 text-white;
      @apply backdrop-blur-sm border-2 border-white/30 hover:border-white/50;
      @apply hover:scale-105;
    }

    /* Material Design Overrides */
    .mat-mdc-button {
      --mdc-text-button-label-text-color: inherit;
      --mdc-filled-button-container-color: transparent;
    }

    mat-icon {
      @apply text-inherit;
      font-size: 1.5rem !important;
      width: 1.5rem !important;
      height: 1.5rem !important;
    }

    /* Small icons in content */
    .text-sm mat-icon, 
    h4 mat-icon {
      font-size: 1.25rem !important;
      width: 1.25rem !important;
      height: 1.25rem !important;
    }

    /* Large icons */
    .text-3xl mat-icon {
      font-size: 1.875rem !important;
      width: 1.875rem !important;
      height: 1.875rem !important;
    }

    /* Focus states for accessibility */
    .cta-button:focus {
      @apply outline-none ring-2 ring-offset-2 ring-sicilian-gold;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .cta-button {
        @apply text-base px-6 py-3 min-w-40 h-12;
      }
    }
  `]
})
export class DestinationsComponent {
  
  constructor() {}
}