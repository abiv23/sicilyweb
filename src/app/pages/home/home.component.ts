import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DestinationsCardsComponent } from '../../components/destinations-cards/destinations-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule,
    DestinationsCardsComponent
  ],
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
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white font-serif">
              {{ heroData.title }}
            </h1>
            <p class="text-lg md:text-2xl mb-8 text-white/90">
              {{ heroData.subtitle }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                mat-raised-button 
                (click)="scrollToDestinations()"
                class="bg-sicilian-sea hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <mat-icon class="mr-2">explore</mat-icon>
                Explore Destinations
              </button>
              <button 
                mat-raised-button 
                routerLink="/planning"
                class="bg-sicilian-sunset hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <mat-icon class="mr-2">map</mat-icon>
                Plan Your Trip
              </button>
            </div>
            
            <!-- Quick Stats -->
            <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">13</div>
                <div class="text-sm text-white/80">Destinations</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">7</div>
                <div class="text-sm text-white/80">UNESCO Sites</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">2500+</div>
                <div class="text-sm text-white/80">Years History</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">11</div>
                <div class="text-sm text-white/80">Days Adventure</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            (click)="scrollToDestinations()"
            class="text-white hover:text-sicilian-gold transition-colors duration-300">
            <mat-icon class="text-4xl">keyboard_arrow_down</mat-icon>
          </button>
        </div>
      </div>
    </section>

    <!-- Destinations Section -->
    <section id="destinations" class="py-16 bg-dark-bg">
      <!-- Destinations Header -->
      <div class="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-dark-text mb-4 font-serif">
          Sicilian Destinations
        </h2>
        <p class="text-lg text-dark-text-secondary max-w-2xl mx-auto">
          Click on any of the below destinations to go to the destination detail page.

          If you want one added contact Andrew.

          If you want one updated with activities, send Andrew an email with the info.
        </p>
      </div>
      
      <app-destinations-cards></app-destinations-cards>
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

    /* Hero and CTA Buttons */
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

    mat-icon.text-3xl {
      font-size: 1.875rem !important;
      width: 1.875rem !important;
      height: 1.875rem !important;
    }

    mat-icon.text-4xl {
      font-size: 2.25rem !important;
      width: 2.25rem !important;
      height: 2.25rem !important;
    }

    /* Animation for scroll indicator */
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(-50%, 0, 0);
      }
      40%, 43% {
        transform: translate3d(-50%, -10px, 0);
      }
      70% {
        transform: translate3d(-50%, -5px, 0);
      }
      90% {
        transform: translate3d(-50%, -2px, 0);
      }
    }

    .animate-bounce {
      animation: bounce 2s infinite;
    }

    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem !important;
      }
      
      .cta-button {
        @apply text-base px-6 py-3 min-w-40 h-12;
      }
    }

    /* Focus states for accessibility */
    .cta-button:focus {
      @apply outline-none ring-2 ring-offset-2 ring-sicilian-gold;
    }

    /* Add hover effects for destination cards */
    .cursor-pointer:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class HomeComponent {
  // Hero section data
  heroData = {
    backgroundImage: '/images/mountain_village.jpg',
    title: 'Sicily Family Adventure',
    subtitle: 'September 1-11, 2026'
  };

  constructor(private router: Router) {
    // Component initialization
  }

  /**
   * Smooth scroll to destinations section
   */
  scrollToDestinations(): void {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}