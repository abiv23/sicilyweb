import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SicilyImageComponent } from '../sicily-image/sicily-image.component';
import { MapImageComponent } from '../map-image/map-image.component';

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
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, SicilyImageComponent, MapImageComponent],
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
        
        <!-- Quick Info Grid -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-2xl font-bold mb-6 text-dark-text">🗺️ Quick Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <!-- Activities and Things to Do -->
        <div class="space-y-8">
          <h2 class="text-3xl font-bold text-dark-text border-l-4 border-sicilian-sea pl-4">
            🏛️ Things to Do in {{ destination.name }}
          </h2>
          
          <div *ngFor="let activity of destination.activities; let i = index" 
               class="mb-12">
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

        <!-- Call to Action -->
        <mat-card class="p-8 bg-sicilian-gradient text-white shadow-xl">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Explore {{ destination.name }}?</h3>
            <p class="text-white/90 mb-6 text-lg">
              Add this destination to your Sicily itinerary for an unforgettable experience.
            </p>
            <button mat-raised-button 
                    class="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm border border-white/30 transition-all duration-300">
              <mat-icon class="mr-2">add</mat-icon>
              Add to Itinerary
            </button>
          </div>
        </mat-card>
      </div>
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
  `]
})
export class DestinationInfoSheetComponent {
  @Input() destination!: DestinationInfo;

  constructor() {
    // Component for displaying detailed destination information
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