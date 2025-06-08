import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SicilyImageComponent } from '../sicily-image/sicily-image.component';
import { MapImageComponent } from '../map-image/map-image.component';
import { DestinationsCardsComponent } from '../destinations-cards/destinations-cards.component';

interface DestinationDistance {
  city: string;
  miles: number;
  driveTime: string;
}

interface ActivitySection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  highlights: string[];
  tips?: string[];
}

interface DestinationInfo {
  name: string;
  slug?: string; // Add optional slug property
  shortDescription: string;
  heroImage: string;
  heroImageAlt?: string;
  region: string;
  bestTimeToVisit: string;
  recommendedDuration: string;
  specialties: string[];
  distances: DestinationDistance[];
  activities: ActivitySection[];
  practicalInfo?: {
    parking?: string;
    accessibility?: string;
    costs?: string;
    booking?: string;
  };
}

@Component({
  selector: 'app-destination-info-sheet',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, SicilyImageComponent, MapImageComponent, DestinationsCardsComponent],
  template: `
    <div class="min-h-screen bg-dark-bg" *ngIf="destination">
      
      <!-- Hero Section -->
      <section class="relative h-96 overflow-hidden shadow-2xl">
        <div class="relative h-full w-full">
          <app-sicily-image 
            [imageName]="destination.heroImage"
            [alt]="destination.heroImageAlt || destination.name + ' landscape'"
            containerClass="absolute inset-0 h-full w-full"
            imageClass="h-full w-full object-cover"
            [enableHover]="false">
          </app-sicily-image>
          
          <div class="absolute inset-0 bg-black/50"></div>
          
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center text-white bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">
                {{ destination.name }}
              </h1>
              <p class="text-lg md:text-xl text-white/90 mb-2">
                {{ destination.shortDescription }}
              </p>
              <div class="text-sicilian-gold">
                📍 {{ destination.region }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container mx-auto px-6 max-w-6xl py-8">
        
        <!-- Quick Info Grid - Updated with activities section below -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-2xl font-bold mb-6 text-dark-text">🗺️ Quick Information</h2>
          
          <!-- Top row with 3 main info sections -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="space-y-2">
              <h3 class="font-semibold text-sicilian-sea">Best Time to Visit</h3>
              <p class="text-dark-text-secondary">{{ destination.bestTimeToVisit }}</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-semibold text-italian-green-light">Recommended Duration</h3>
              <p class="text-dark-text-secondary">{{ destination.recommendedDuration }}</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-semibold text-sicilian-sunset">Famous For</h3>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let specialty of destination.specialties" 
                      class="bg-sicilian-sunset/20 text-sicilian-sunset px-3 py-1 rounded-full text-sm">
                  {{ specialty }}
                </span>
              </div>
            </div>
          </div>

          <!-- Activities Section - Full Width Below -->
          <div class="border-t border-dark-border pt-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-sicilian-gold">Main Activities</h3>
              <button (click)="navigateToAnchor('activities-section')" 
                      class="text-sicilian-sea hover:text-blue-400 text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer">
                View All {{ destination.name }} Activities →
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <button *ngFor="let activity of destination.activities; let i = index" 
                      (click)="navigateToAnchor('activity-' + i)"
                      class="text-dark-text-secondary hover:text-dark-text text-sm flex items-start transition-colors duration-300 cursor-pointer group bg-transparent border-none text-left p-0">
                <span class="text-sicilian-gold group-hover:text-sicilian-sunset mr-2 mt-0.5 transition-colors duration-300">•</span>
                <span class="group-hover:text-sicilian-sea transition-colors duration-300">{{ activity.title }}</span>
              </button>
            </div>
          </div>
        </mat-card>

        <!-- Sicily Map showing destination location -->
        <app-map-image
          [imageSrc]="getMapImagePath()"
          [altText]="'Sicily map showing ' + destination.name + ' location'">
        </app-map-image>

        <!-- Distance Information -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-2xl font-bold mb-6 text-dark-text">🚗 Distances from {{ destination.name }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div *ngFor="let distance of destination.distances" 
                 class="bg-dark-elevated p-4 rounded-xl border border-dark-border">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold text-dark-text">{{ distance.city }}</h3>
                  <p class="text-dark-text-secondary text-sm">{{ distance.driveTime }}</p>
                </div>
                <div class="text-right">
                  <p class="text-lg font-bold text-sicilian-sea">{{ distance.miles }}</p>
                  <p class="text-dark-text-secondary text-xs">miles</p>
                </div>
              </div>
            </div>
          </div>
        </mat-card>

        <!-- Practical Information (if provided) -->
        <mat-card *ngIf="destination.practicalInfo" 
                  class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-2xl font-bold mb-6 text-dark-text">📋 Practical Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngIf="destination.practicalInfo.parking" class="space-y-2">
              <h3 class="font-semibold text-sicilian-sea flex items-center">
                <mat-icon class="mr-2">local_parking</mat-icon>
                Parking
              </h3>
              <p class="text-dark-text-secondary">{{ destination.practicalInfo.parking }}</p>
            </div>
            
            <div *ngIf="destination.practicalInfo.accessibility" class="space-y-2">
              <h3 class="font-semibold text-italian-green-light flex items-center">
                <mat-icon class="mr-2">accessible</mat-icon>
                Accessibility
              </h3>
              <p class="text-dark-text-secondary">{{ destination.practicalInfo.accessibility }}</p>
            </div>
            
            <div *ngIf="destination.practicalInfo.costs" class="space-y-2">
              <h3 class="font-semibold text-sicilian-sunset flex items-center">
                <mat-icon class="mr-2">euro</mat-icon>
                Costs
              </h3>
              <p class="text-dark-text-secondary">{{ destination.practicalInfo.costs }}</p>
            </div>
            
            <div *ngIf="destination.practicalInfo.booking" class="space-y-2">
              <h3 class="font-semibold text-italian-red-light flex items-center">
                <mat-icon class="mr-2">book_online</mat-icon>
                Booking
              </h3>
              <p class="text-dark-text-secondary">{{ destination.practicalInfo.booking }}</p>
            </div>
          </div>
        </mat-card>

        <!-- Activities and Things to Do -->
        <div id="activities-section" class="space-y-8">
          <h2 class="text-3xl font-bold text-dark-text border-l-4 border-sicilian-sea pl-4">
            🏛️ Things to Do in {{ destination.name }}
          </h2>
          
          <div *ngFor="let activity of destination.activities; let i = index" 
               [id]="'activity-' + i"
               class="mb-12 scroll-mt-20">
            <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl text-dark-text">
              
              <!-- Alternate layout: odd indexes have image on right -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                   [class.lg:grid-flow-col-dense]="i % 2 === 1">
                
                <!-- Content Section -->
                <div [class.lg:col-start-2]="i % 2 === 1">
                  <h3 class="text-2xl font-bold mb-4 text-sicilian-gold">
                    {{ activity.title }}
                  </h3>
                  <p class="text-dark-text-secondary mb-6 leading-relaxed">
                    {{ activity.description }}
                  </p>
                  
                  <!-- Highlights -->
                  <div class="mb-6">
                    <h4 class="font-semibold text-sicilian-sea mb-3">✨ Highlights</h4>
                    <ul class="space-y-2">
                      <li *ngFor="let highlight of activity.highlights" 
                          class="flex items-start space-x-2">
                        <span class="text-sicilian-gold mt-1">•</span>
                        <span class="text-dark-text-secondary">{{ highlight }}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Tips (if available) -->
                  <div *ngIf="activity.tips && activity.tips.length > 0" 
                       class="bg-sicilian-sea/20 p-4 rounded-lg border border-sicilian-sea/50">
                    <h4 class="font-semibold text-sicilian-sea mb-2">💡 Pro Tips</h4>
                    <ul class="space-y-1">
                      <li *ngFor="let tip of activity.tips" 
                          class="text-dark-text-secondary text-sm">
                        {{ tip }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- Image Section -->
                <div [class.lg:col-start-1]="i % 2 === 1">
                  <app-sicily-image 
                    *ngIf="activity.image"
                    [imageName]="activity.image"
                    [alt]="activity.imageAlt || activity.title"
                    containerClass="h-80 rounded-xl shadow-lg"
                    imageClass="h-full w-full object-cover">
                  </app-sicily-image>
                </div>
              </div>
            </mat-card>
          </div>
        </div>
      </div>

      <!-- All Destinations Cards -->
      <section class="py-16 bg-dark-bg">
        <app-destinations-cards></app-destinations-cards>
      </section>
    </div>
  `,
  styles: [`
    .mat-mdc-card {
      color: inherit !important;
    }

    .mat-mdc-card-title {
      color: inherit !important;
    }
    
    .backdrop-blur-sm {
      backdrop-filter: blur(8px);
    }

    .grid-flow-col-dense {
      grid-auto-flow: column dense;
    }
    
    mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    /* Button reset styles for anchor navigation */
    button.bg-transparent {
      background: transparent;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    button.text-left {
      text-align: left;
    }

    /* Smooth scrolling and anchor offset */
    .scroll-mt-20 {
      scroll-margin-top: 5rem;
    }

    /* Hover effects for activity links */
    .group:hover .group-hover\\:text-sicilian-sunset {
      color: rgb(217 119 6) !important;
    }

    .group:hover .group-hover\\:text-sicilian-sea {
      color: rgb(3 105 161) !important;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .md\\:grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }

    @media (max-width: 1024px) {
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `]
})
export class DestinationInfoSheetComponent {
  @Input() destination!: DestinationInfo;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Navigate to anchor within current page
   */
  navigateToAnchor(anchor: string): void {
    if (this.isBrowser) {
      // Get current route and add anchor
      const currentUrl = this.router.url.split('#')[0]; // Remove any existing anchors
      this.router.navigateByUrl(currentUrl + '#' + anchor);
    }
  }

  /**
   * Generate the map image path based on destination data
   * Uses destination slug or name to create consistent file naming
   */
  getMapImagePath(): string {
    if (!this.destination) {
      return '/images/sicily-map-default.jpg';
    }

    // Check if destination has a slug property, otherwise create one from name
    let slug: string;
    if (this.destination.slug && this.destination.slug.length > 0) {
      slug = this.destination.slug;
    } else {
      // Convert destination name to slug format (lowercase, spaces to hyphens)
      slug = this.destination.name.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .replace(/[àáâãäå]/g, 'a')      // Handle accented characters
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ç]/g, 'c')
        .replace(/[ñ]/g, 'n')
        .replace(/[^a-z0-9-]/g, '');    // Remove any other special characters
    }

    return `/images/maps/map-${slug}.png`;
  }
}