import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SicilyImageComponent } from '../sicily-image/sicily-image.component';

interface ItineraryDay {
  day: string;
  date?: string;
  location: string;
  baseCity: string;
  accommodation?: {
    name: string;
    type: string;
    pricePerNight?: number;
  };
  activities: {
    time: string;
    title: string;
    description: string;
    highlights?: string[];
    duration?: string;
    cost?: string;
  }[];
  drivingInfo?: {
    from: string;
    to: string;
    distance: string;
    duration: string;
  };
  budgetBreakdown?: {
    accommodation: number;
    activities: number;
    dining: number;
    transportation: number;
  };
  tips?: string[];
  image: string;
  imageAlt: string;
}

interface ItinerarySection {
  title: string;
  subtitle: string;
  description: string;
  totalDays: number;
  baseLocation: string;
  highlights: string[];
  totalBudget: number;
  days: ItineraryDay[];
}

@Component({
  selector: 'app-itinerary',
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
    <div class="min-h-screen bg-dark-bg">
      
      <!-- Itinerary Overview -->
      <section class="py-12 bg-dark-surface">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-dark-text mb-4 font-serif">
              {{ itinerary.title }}
            </h1>
            <p class="text-xl text-dark-text-secondary mb-8">
              {{ itinerary.subtitle }}
            </p>
            
            <!-- Quick Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">{{ itinerary.totalDays }}</div>
                <div class="text-sm text-dark-text-secondary">Days</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">{{ itinerary.sections.length }}</div>
                <div class="text-sm text-dark-text-secondary">Regions</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">{{ getTotalDestinations() }}</div>
                <div class="text-sm text-dark-text-secondary">Destinations</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-sicilian-gold mb-1">\${{ itinerary.totalBudget.toLocaleString() }}</div>
                <div class="text-sm text-dark-text-secondary">Per Person</div>
              </div>
            </div>
          </div>
          
          <!-- Key Features -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-sea/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-sea">hotel</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Strategic Bases</h3>
              <p class="text-dark-text-secondary">
                Only 2 hotel changes in 10 days. Unpack properly and explore from comfortable 4-star bases.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-sunset/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-sunset">accessible</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Senior-Friendly</h3>
              <p class="text-dark-text-secondary">
                Designed for mixed ages with comfortable pacing, easy access, and flexible activity levels.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-gold">star</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Maximum Impact</h3>
              <p class="text-dark-text-secondary">
                UNESCO sites, spectacular views, authentic culture, and luxury experiences perfectly balanced.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Itinerary Sections -->
      <section class="py-8">
        <div class="max-w-6xl mx-auto px-6">
          <div class="space-y-16">
            
            @for (section of itinerary.sections; track section.title; let sectionIndex = $index) {
              <div class="mb-16">
                
                <!-- Section Header -->
                <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 class="text-3xl font-bold text-dark-text mb-4 font-serif">
                        {{ section.title }}
                      </h2>
                      <p class="text-xl text-dark-text-secondary mb-4">
                        {{ section.subtitle }}
                      </p>
                      <p class="text-dark-text-secondary mb-6 leading-relaxed">
                        {{ section.description }}
                      </p>
                      
                      <!-- Section Highlights -->
                      <div class="flex flex-wrap gap-2 mb-6">
                        @for (highlight of section.highlights; track highlight) {
                          <span class="bg-sicilian-sea/20 text-sicilian-sea px-3 py-1 rounded-full text-sm font-medium">
                            {{ highlight }}
                          </span>
                        }
                      </div>
                      
                      <!-- Budget for section -->
                      <div class="bg-sicilian-gold/20 p-4 rounded-lg border border-sicilian-gold/50">
                        <p class="text-dark-text">
                          <strong class="text-sicilian-gold">Budget: \${{ section.totalBudget.toLocaleString() }}</strong> 
                          <span class="text-dark-text-secondary">per person ({{ section.totalDays }} {{ section.totalDays === 1 ? 'day' : 'days' }})</span>
                        </p>
                      </div>
                    </div>
                    
                    <!-- Section representative image -->
                    <div>
                      <app-sicily-image 
                        [imageName]="getSectionImage(sectionIndex)"
                        [alt]="section.title + ' scenic view'"
                        containerClass="h-80 rounded-xl shadow-lg"
                        imageClass="h-full w-full object-cover">
                      </app-sicily-image>
                    </div>
                  </div>
                </mat-card>

                <!-- Individual Days -->
                <div class="space-y-8">
                  @for (day of section.days; track day.day) {
                    <mat-card class="bg-dark-elevated border border-dark-border rounded-xl shadow-lg text-dark-text">
                      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                        
                        <!-- Day Image -->
                        <div class="lg:col-span-1">
                          <app-sicily-image 
                            [imageName]="day.image"
                            [alt]="day.imageAlt"
                            containerClass="h-64 lg:h-full rounded-lg shadow-lg"
                            imageClass="h-full w-full object-cover">
                          </app-sicily-image>
                        </div>
                        
                        <!-- Day Content -->
                        <div class="lg:col-span-2">
                          <div class="flex flex-col lg:flex-row justify-between items-start mb-4">
                            <div>
                              <h3 class="text-2xl font-bold text-sicilian-sea mb-2">{{ day.day }}</h3>
                              @if (day.date) {
                                <p class="text-sicilian-gold font-medium mb-2">{{ day.date }}</p>
                              }
                              <p class="text-xl font-semibold text-dark-text">{{ day.location }}</p>
                              <p class="text-dark-text-secondary">Base: {{ day.baseCity }}</p>
                            </div>
                            
                            <!-- Accommodation info -->
                            @if (day.accommodation) {
                              <div class="bg-dark-surface p-3 rounded-lg border border-dark-border mt-4 lg:mt-0">
                                <p class="text-sm font-semibold text-dark-text">{{ day.accommodation.name }}</p>
                                <p class="text-xs text-dark-text-secondary">{{ day.accommodation.type }}</p>
                                @if (day.accommodation.pricePerNight) {
                                  <p class="text-xs text-sicilian-gold">\${{ day.accommodation.pricePerNight }}/night</p>
                                }
                              </div>
                            }
                          </div>
                          
                          <!-- Driving Info -->
                          @if (day.drivingInfo) {
                            <div class="bg-sicilian-sunset/20 p-3 rounded-lg mb-4 border border-sicilian-sunset/50">
                              <div class="flex items-center">
                                <mat-icon class="text-sicilian-sunset mr-2">directions_car</mat-icon>
                                <span class="text-dark-text">
                                  <strong>{{ day.drivingInfo.from }} → {{ day.drivingInfo.to }}</strong>
                                  - {{ day.drivingInfo.distance }} ({{ day.drivingInfo.duration }})
                                </span>
                              </div>
                            </div>
                          }
                          
                          <!-- Activities -->
                          <div class="space-y-4">
                            @for (activity of day.activities; track activity.title) {
                              <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                                <div class="flex items-start justify-between mb-2">
                                  <div>
                                    <span class="text-sicilian-sea font-medium text-sm">{{ activity.time }}</span>
                                    <h4 class="text-lg font-semibold text-dark-text">{{ activity.title }}</h4>
                                  </div>
                                  @if (activity.cost) {
                                    <span class="text-sicilian-gold text-sm font-medium">{{ activity.cost }}</span>
                                  }
                                </div>
                                <p class="text-dark-text-secondary mb-3">{{ activity.description }}</p>
                                
                                @if (activity.highlights && activity.highlights.length > 0) {
                                  <div class="mb-3">
                                    <p class="text-sm font-medium text-dark-text mb-2">Highlights:</p>
                                    <ul class="text-sm text-dark-text-secondary space-y-1">
                                      @for (highlight of activity.highlights; track highlight) {
                                        <li class="flex items-start">
                                          <span class="text-sicilian-gold mr-2 mt-1">•</span>
                                          <span>{{ highlight }}</span>
                                        </li>
                                      }
                                    </ul>
                                  </div>
                                }
                                
                                @if (activity.duration) {
                                  <div class="flex items-center text-sm text-dark-text-secondary">
                                    <mat-icon class="text-xs mr-1">schedule</mat-icon>
                                    <span>{{ activity.duration }}</span>
                                  </div>
                                }
                              </div>
                            }
                          </div>
                          
                          <!-- Budget Breakdown -->
                          @if (day.budgetBreakdown) {
                            <div class="mt-4 bg-dark-surface p-4 rounded-lg border border-dark-border">
                              <h5 class="text-sm font-semibold text-dark-text mb-2">Daily Budget Breakdown:</h5>
                              <div class="grid grid-cols-2 gap-2 text-sm">
                                <div class="flex justify-between">
                                  <span class="text-dark-text-secondary">Accommodation:</span>
                                  <span class="text-dark-text">\${{ day.budgetBreakdown.accommodation }}</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-dark-text-secondary">Activities:</span>
                                  <span class="text-dark-text">\${{ day.budgetBreakdown.activities }}</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-dark-text-secondary">Dining:</span>
                                  <span class="text-dark-text">\${{ day.budgetBreakdown.dining }}</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-dark-text-secondary">Transport:</span>
                                  <span class="text-dark-text">\${{ day.budgetBreakdown.transportation }}</span>
                                </div>
                              </div>
                            </div>
                          }
                          
                          <!-- Tips -->
                          @if (day.tips && day.tips.length > 0) {
                            <div class="mt-4 bg-sicilian-sea/20 p-4 rounded-lg border border-sicilian-sea/50">
                              <h5 class="text-sm font-semibold text-sicilian-sea mb-2">💡 Pro Tips:</h5>
                              <ul class="text-sm text-dark-text-secondary space-y-1">
                                @for (tip of day.tips; track tip) {
                                  <li>{{ tip }}</li>
                                }
                              </ul>
                            </div>
                          }
                        </div>
                      </div>
                    </mat-card>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Budget Summary -->
      <section class="py-12 bg-dark-surface">
        <div class="max-w-4xl mx-auto px-6">
          <mat-card class="p-8 bg-dark-elevated border border-dark-border rounded-2xl shadow-xl text-dark-text">
            <h2 class="text-3xl font-bold text-dark-text mb-6 text-center">Budget Summary</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              @for (section of itinerary.sections; track section.title) {
                <div class="text-center">
                  <div class="text-2xl font-bold text-sicilian-gold mb-1">\${{ section.totalBudget.toLocaleString() }}</div>
                  <div class="text-sm text-dark-text-secondary">{{ section.title }}</div>
                </div>
              }
            </div>
            
            <div class="border-t border-dark-border pt-6 text-center">
              <div class="text-3xl font-bold text-sicilian-gold mb-2">\${{ itinerary.totalBudget.toLocaleString() }}</div>
              <div class="text-dark-text-secondary">Total per person (excluding airfare)</div>
              <div class="text-sm text-dark-text-secondary mt-2">Includes accommodation, transportation, dining, and activities</div>
            </div>
          </mat-card>
        </div>
      </section>

      <!-- Essential Bookings -->
      <section class="py-12 bg-dark-bg">
        <div class="max-w-4xl mx-auto px-6">
          <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl text-dark-text">
            <h2 class="text-3xl font-bold text-dark-text mb-6 text-center">📋 Essential Pre-Bookings</h2>
            <div class="space-y-4">
              @for (booking of itinerary.essentialBookings; track booking.item; let i = $index) {
                <div class="flex items-start space-x-4 p-4 bg-dark-elevated rounded-lg border border-dark-border">
                  <div class="flex-shrink-0 w-8 h-8 bg-sicilian-sea text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {{ i + 1 }}
                  </div>
                  <div class="flex-grow">
                    <h3 class="font-semibold text-dark-text">{{ booking.item }}</h3>
                    <p class="text-dark-text-secondary text-sm">{{ booking.reason }}</p>
                    @if (booking.timeline) {
                      <p class="text-sicilian-gold text-sm mt-1">⏰ {{ booking.timeline }}</p>
                    }
                  </div>
                </div>
              }
            </div>
          </mat-card>
        </div>
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

    mat-icon.text-xs {
      font-size: 0.75rem !important;
      width: 0.75rem !important;
      height: 0.75rem !important;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }
  `]
})
export class ItineraryComponent {
  @Input() itinerary!: any; // We'll define the full interface

  getTotalDestinations(): number {
    // Count unique destinations across all sections
    const destinations = new Set();
    this.itinerary.sections.forEach((section: any) => {
      section.days.forEach((day: any) => {
        destinations.add(day.location);
      });
    });
    return destinations.size;
  }

  getSectionImage(sectionIndex: number): string {
    // Return appropriate image for each section
    const images = ['taormina.jpg', 'palermo.jpg', 'siracusa.jpg'];
    return images[sectionIndex] || 'sicily.jpg';
  }
}