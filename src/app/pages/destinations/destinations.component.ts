// src/app/pages/destinations/destinations.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DestinationsCardsComponent } from '../../components/destinations-cards/destinations-cards.component';
import { SicilyImageComponent } from '../../components/sicily-image/sicily-image.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatButtonModule, 
    MatIconModule,
    DestinationsCardsComponent,
    SicilyImageComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-bg">
      
      <!-- Page Header Section -->
      <section class="relative h-80 overflow-hidden">
        <div class="relative h-full w-full">
          <!-- Header Background Image -->
          <app-sicily-image
            imageName="sicily_destinations_header.jpg"
            alt="Sicily destinations overview with ancient temples and coastal views"
            containerClass="absolute inset-0 h-full w-full"
            imageClass="h-full w-full object-cover"
            [enableHover]="false">
          </app-sicily-image>
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/50"></div>
          
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

          <!-- Quick Planning Tips -->
          <div class="bg-dark-elevated p-8 rounded-2xl border border-dark-border">
            <h3 class="text-2xl font-bold text-dark-text mb-6 flex items-center">
              <mat-icon class="mr-3 text-sicilian-sea">lightbulb</mat-icon>
              Planning Your Sicily Journey
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-sicilian-sea mb-2">🚗 Getting Around</h4>
                <p class="text-dark-text-secondary text-sm mb-4">
                  A rental car offers the most flexibility to explore Sicily's destinations. 
                  Distances range from 30 minutes to 3.5 hours between destinations.
                </p>
                
                <h4 class="font-semibold text-italian-green-light mb-2">⏰ Recommended Duration</h4>
                <p class="text-dark-text-secondary text-sm">
                  Plan 10-14 days to visit the major destinations, or focus on 2-3 regions 
                  for a more relaxed 7-day experience.
                </p>
              </div>
              <div>
                <h4 class="font-semibold text-sicilian-sunset mb-2">🌅 Best Time to Visit</h4>
                <p class="text-dark-text-secondary text-sm mb-4">
                  Spring (April-May) and autumn (September-October) offer perfect weather. 
                  Winter is mild but some mountain destinations may be cooler.
                </p>
                
                <h4 class="font-semibold text-italian-red-light mb-2">🎯 Must-See Priority</h4>
                <p class="text-dark-text-secondary text-sm">
                  First-time visitors should prioritize Agrigento, Taormina, Siracusa, and Palermo 
                  for the most iconic Sicilian experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- All Destinations Cards -->
      <section class="py-16 bg-dark-bg">
        <app-destinations-cards></app-destinations-cards>
      </section>

      <!-- Interactive Map Placeholder -->
      <section class="py-16 bg-dark-surface">
        <div class="max-w-6xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-dark-text mb-6">
            Sicily Destinations Map
          </h2>
          <p class="text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Visualize the locations of all destinations and plan your route across the island. 
            Click on any destination below to learn more about distances and travel times.
          </p>
          
          <!-- Placeholder for future interactive map -->
          <div class="bg-dark-elevated rounded-2xl p-12 border border-dark-border">
            <div class="text-center">
              <mat-icon class="text-6xl text-dark-text-secondary mb-4">map</mat-icon>
              <h3 class="text-xl font-bold text-dark-text mb-2">Interactive Map Coming Soon</h3>
              <p class="text-dark-text-secondary mb-6">
                We're working on an interactive map to help you visualize all destinations and plan your perfect Sicily itinerary.
              </p>
              <button 
                mat-raised-button 
                class="bg-sicilian-sea hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                routerLink="/plan">
                <mat-icon class="mr-2">route</mat-icon>
                Plan Your Route
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="py-16 bg-sicilian-gradient">
        <div class="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Sicily?
          </h2>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            Each destination offers unique experiences and unforgettable memories. 
            Start planning your Sicilian adventure today and discover the magic of this incredible island.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              mat-raised-button 
              class="cta-button primary"
              routerLink="/plan">
              <mat-icon class="mr-2">map</mat-icon>
              Create Your Itinerary
            </button>
            
            <button 
              mat-raised-button 
              class="cta-button secondary"
              routerLink="/contact">
              <mat-icon class="mr-2">support_agent</mat-icon>
              Get Expert Advice
            </button>
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