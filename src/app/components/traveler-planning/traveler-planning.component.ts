// src/app/components/traveler-planning/traveler-planning.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SicilyImageComponent } from '../sicily-image/sicily-image.component';

export interface AccommodationNote {
  destination: string;
  recommendations: {
    name: string;
    type: string;
    highlights: string[];
    bookingInfo?: string;
    website?: string;
  }[];
  generalNotes?: string[];
}

export interface DestinationNote {
  name: string;
  region: string;
  priority: 'must-see' | 'recommended' | 'optional' | 'skip';
  duration: string;
  highlights: string[];
  activities: {
    name: string;
    description: string;
    tips: string[];
    timing?: string;
    cost?: string;
    bookingRequired?: boolean;
  }[];
  practicalities: {
    parking?: string;
    accessibility?: string;
    timing?: string;
    booking?: string;
  };
  personalNotes?: string[];
  logisticsNotes?: string[];
}

export interface TravelerPlan {
  travelerName: string;
  travelerDescription?: string;
  priorities: string[];
  accommodations: AccommodationNote[];
  destinations: DestinationNote[];
  generalNotes: {
    category: string;
    notes: string[];
  }[];
  specialConsiderations?: string[];
}

@Component({
  selector: 'app-traveler-planning',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatChipsModule,
    SicilyImageComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-bg">
      
      <!-- Hero Section -->
      <section class="relative h-80 overflow-hidden shadow-2xl">
        <div class="relative h-full w-full">
          <app-sicily-image 
            [imageName]="heroImage"
            [alt]="plan.travelerName + ' Sicily planning'"
            containerClass="absolute inset-0 h-full w-full"
            imageClass="h-full w-full object-cover"
            [enableHover]="false">
          </app-sicily-image>
          
          <div class="absolute inset-0 bg-black/60"></div>
          
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center text-white bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">
                {{ plan.travelerName }}'s Sicily Plan
              </h1>
              <p *ngIf="plan.travelerDescription" class="text-lg md:text-xl text-white/90">
                {{ plan.travelerDescription }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="container mx-auto px-6 max-w-6xl py-8">

        <!-- Traveler Priorities -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🎯 {{ plan.travelerName }}'s Priorities</h2>
          <div class="flex flex-wrap gap-3">
            <span *ngFor="let priority of plan.priorities" 
                  class="bg-sicilian-gold/20 text-sicilian-gold px-4 py-2 rounded-full text-sm font-medium border border-sicilian-gold/50">
              {{ priority }}
            </span>
          </div>
        </mat-card>

        <!-- Special Considerations -->
        <mat-card *ngIf="plan.specialConsiderations && plan.specialConsiderations.length > 0" 
                  class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">⚠️ Special Considerations</h2>
          <div class="space-y-3">
            <div *ngFor="let consideration of plan.specialConsiderations" 
                 class="bg-sicilian-sunset/20 p-4 rounded-lg border border-sicilian-sunset/50">
              <p class="text-dark-text-secondary">{{ consideration }}</p>
            </div>
          </div>
        </mat-card>

        <!-- Accommodation Recommendations -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 text-dark-text border-l-4 border-sicilian-sea pl-4">
            🏨 {{ plan.travelerName }}'s Hotel Recommendations
          </h2>
          
          <div class="space-y-8">
            <div *ngFor="let accommodation of plan.accommodations" class="mb-8">
              <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl text-dark-text">
                <h3 class="text-2xl font-bold mb-4 text-sicilian-sea">{{ accommodation.destination }}</h3>
                
                <!-- General notes for destination -->
                <div *ngIf="accommodation.generalNotes && accommodation.generalNotes.length > 0" 
                     class="mb-6 bg-dark-elevated p-4 rounded-lg border border-dark-border">
                  <h4 class="font-semibold text-dark-text mb-2">General Notes:</h4>
                  <ul class="space-y-1">
                    <li *ngFor="let note of accommodation.generalNotes" 
                        class="text-dark-text-secondary text-sm flex items-start">
                      <span class="text-sicilian-gold mr-2 mt-1">•</span>
                      <span>{{ note }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Hotel recommendations -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div *ngFor="let hotel of accommodation.recommendations" 
                       class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
                    <div class="flex items-center justify-between mb-3">
                      <h4 class="text-xl font-bold text-dark-text">{{ hotel.name }}</h4>
                      <span class="bg-italian-green/20 text-italian-green-light px-3 py-1 rounded-full text-sm">
                        {{ hotel.type }}
                      </span>
                    </div>
                    
                    <div class="space-y-3">
                      <div>
                        <h5 class="font-semibold text-sicilian-sea mb-2">Highlights:</h5>
                        <ul class="space-y-1">
                          <li *ngFor="let highlight of hotel.highlights" 
                              class="text-dark-text-secondary text-sm flex items-start">
                            <span class="text-sicilian-gold mr-2 mt-1">✓</span>
                            <span>{{ highlight }}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div *ngIf="hotel.bookingInfo" class="bg-sicilian-sea/20 p-3 rounded-lg border border-sicilian-sea/50">
                        <p class="text-dark-text-secondary text-sm">
                          <strong class="text-sicilian-sea">Booking:</strong> {{ hotel.bookingInfo }}
                        </p>
                      </div>
                      
                      <a *ngIf="hotel.website" 
                         [href]="hotel.website" 
                         target="_blank"
                         class="inline-block bg-sicilian-sea hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 no-underline">
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </div>
              </mat-card>
            </div>
          </div>
        </div>

        <!-- Destination Notes -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 text-dark-text border-l-4 border-italian-green pl-4">
            📍 Destination Insights & Activities
          </h2>
          
          <div class="space-y-8">
            <div *ngFor="let destination of plan.destinations; let i = index" class="mb-8">
              <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl text-dark-text">
                
                <!-- Destination header -->
                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h3 class="text-2xl font-bold mb-2 text-dark-text">{{ destination.name }}</h3>
                    <p class="text-dark-text-secondary">{{ destination.region }} • {{ destination.duration }}</p>
                  </div>
                  <div class="flex items-center space-x-3 mt-4 lg:mt-0">
                    <span [ngClass]="{
                      'bg-sicilian-gold text-white': destination.priority === 'must-see',
                      'bg-italian-green text-white': destination.priority === 'recommended', 
                      'bg-sicilian-sea text-white': destination.priority === 'optional',
                      'bg-gray-500 text-white': destination.priority === 'skip'
                    }" class="px-3 py-1 rounded-full text-sm font-medium">
                      {{ destination.priority | titlecase }}
                    </span>
                  </div>
                </div>

                <!-- Highlights -->
                <div class="mb-6">
                  <h4 class="font-semibold text-sicilian-gold mb-3">✨ Key Highlights</h4>
                  <div class="flex flex-wrap gap-2">
                    <span *ngFor="let highlight of destination.highlights" 
                          class="bg-sicilian-gold/20 text-sicilian-gold px-3 py-1 rounded-full text-sm border border-sicilian-gold/50">
                      {{ highlight }}
                    </span>
                  </div>
                </div>

                <!-- Activities -->
                <div class="mb-6">
                  <h4 class="font-semibold text-italian-green-light mb-4">🎯 Recommended Activities</h4>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div *ngFor="let activity of destination.activities" 
                         class="bg-dark-elevated p-4 rounded-lg border border-dark-border">
                      <div class="flex items-start justify-between mb-2">
                        <h5 class="font-semibold text-dark-text">{{ activity.name }}</h5>
                        <div class="flex space-x-2">
                          <span *ngIf="activity.cost" 
                                class="bg-sicilian-sunset/20 text-sicilian-sunset px-2 py-1 rounded text-xs">
                            {{ activity.cost }}
                          </span>
                          <span *ngIf="activity.bookingRequired" 
                                class="bg-italian-red/20 text-italian-red-light px-2 py-1 rounded text-xs">
                            Booking Required
                          </span>
                        </div>
                      </div>
                      
                      <p class="text-dark-text-secondary text-sm mb-3">{{ activity.description }}</p>
                      
                      <div *ngIf="activity.timing" class="mb-3">
                        <span class="text-sicilian-sea text-sm">
                          <mat-icon class="text-sm mr-1">schedule</mat-icon>
                          {{ activity.timing }}
                        </span>
                      </div>
                      
                      <div *ngIf="activity.tips.length > 0">
                        <h6 class="font-medium text-dark-text text-sm mb-2">💡 Tips:</h6>
                        <ul class="space-y-1">
                          <li *ngFor="let tip of activity.tips" 
                              class="text-dark-text-secondary text-xs flex items-start">
                            <span class="text-sicilian-gold mr-1 mt-0.5">•</span>
                            <span>{{ tip }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Practicalities -->
                <div class="mb-6 bg-dark-elevated p-4 rounded-lg border border-dark-border">
                  <h4 class="font-semibold text-dark-text mb-3">📋 Practical Information</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div *ngIf="destination.practicalities.parking">
                      <strong class="text-sicilian-sea">Parking:</strong>
                      <p class="text-dark-text-secondary text-sm">{{ destination.practicalities.parking }}</p>
                    </div>
                    <div *ngIf="destination.practicalities.accessibility">
                      <strong class="text-italian-green-light">Accessibility:</strong>
                      <p class="text-dark-text-secondary text-sm">{{ destination.practicalities.accessibility }}</p>
                    </div>
                    <div *ngIf="destination.practicalities.timing">
                      <strong class="text-sicilian-sunset">Best Timing:</strong>
                      <p class="text-dark-text-secondary text-sm">{{ destination.practicalities.timing }}</p>
                    </div>
                    <div *ngIf="destination.practicalities.booking">
                      <strong class="text-italian-red-light">Booking:</strong>
                      <p class="text-dark-text-secondary text-sm">{{ destination.practicalities.booking }}</p>
                    </div>
                  </div>
                </div>

                <!-- Personal Notes -->
                <div *ngIf="destination.personalNotes && destination.personalNotes.length > 0" 
                     class="mb-4">
                  <h4 class="font-semibold text-sicilian-wine mb-3">📝 {{ plan.travelerName }}'s Personal Notes</h4>
                  <div class="bg-sicilian-wine/20 p-4 rounded-lg border border-sicilian-wine/50">
                    <ul class="space-y-1">
                      <li *ngFor="let note of destination.personalNotes" 
                          class="text-dark-text-secondary text-sm flex items-start">
                        <span class="text-sicilian-wine mr-2 mt-1">📌</span>
                        <span>{{ note }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Logistics Notes -->
                <div *ngIf="destination.logisticsNotes && destination.logisticsNotes.length > 0">
                  <h4 class="font-semibold text-sicilian-sea mb-3">🚗 Logistics & Transportation</h4>
                  <div class="bg-sicilian-sea/20 p-4 rounded-lg border border-sicilian-sea/50">
                    <ul class="space-y-1">
                      <li *ngFor="let note of destination.logisticsNotes" 
                          class="text-dark-text-secondary text-sm flex items-start">
                        <span class="text-sicilian-sea mr-2 mt-1">🗺️</span>
                        <span>{{ note }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </mat-card>
            </div>
          </div>
        </div>

        <!-- General Notes by Category -->
        <div *ngIf="plan.generalNotes.length > 0" class="mb-12">
          <h2 class="text-3xl font-bold mb-8 text-dark-text border-l-4 border-sicilian-sunset pl-4">
            📋 Additional Planning Notes
          </h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <mat-card *ngFor="let category of plan.generalNotes" 
                      class="p-6 bg-dark-surface border border-dark-border rounded-xl shadow-lg text-dark-text">
              <h3 class="text-xl font-bold mb-4 text-sicilian-sunset">{{ category.category }}</h3>
              <ul class="space-y-2">
                <li *ngFor="let note of category.notes" 
                    class="text-dark-text-secondary flex items-start">
                  <span class="text-sicilian-sunset mr-2 mt-1">•</span>
                  <span>{{ note }}</span>
                </li>
              </ul>
            </mat-card>
          </div>
        </div>

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
    
    mat-icon {
      @apply text-inherit;
      font-size: 1rem !important;
      width: 1rem !important;
      height: 1rem !important;
    }

    mat-icon.text-sm {
      font-size: 0.875rem !important;
      width: 0.875rem !important;
      height: 0.875rem !important;
    }
    
    a {
      text-decoration: none !important;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .grid-cols-1.lg\\:grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }

    /* Focus states for accessibility */
    button:focus-visible,
    a:focus-visible {
      @apply outline-none ring-2 ring-sicilian-gold ring-offset-2 ring-offset-dark-bg;
    }
  `]
})
export class TravelerPlanningComponent {
  @Input() plan!: TravelerPlan;
  @Input() heroImage: string = 'ruins_ortega.jpg';

  constructor() {
    // Component initialization
  }
}