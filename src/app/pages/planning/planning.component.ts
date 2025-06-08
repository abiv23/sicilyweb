// src/app/pages/planning/planning.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SicilyImageComponent } from '../../components/sicily-image/sicily-image.component';

interface ItineraryDay {
  day: string;
  location: string;
  drivingDistance?: string;
  activities: { title: string; details: string[] }[];
  hotel?: { name: string; options: string[] };
  restaurant?: { title: string; details: string };
  luxuryActivities?: { title: string; items: string[] };
  tips?: string;
  image?: string;
  imageAlt?: string;
}

interface FamilyMember {
  name: string;
  role: string;
  planningFocus: string[];
  status: 'complete' | 'in-progress' | 'awaiting-notes';
  avatar: string;
  route: string;
}

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, SicilyImageComponent],
  template: `
    <div class="min-h-screen bg-dark-bg">
      <!-- Hero Section with Cathedral Image - Full Viewport Width -->
      <section class="relative h-96 overflow-hidden shadow-2xl">
        <div class="relative h-full w-full">
          <!-- Hero Background using catherdal.jpg -->
          <app-sicily-image 
            imageName="catherdal.jpg"
            alt="Sicilian Cathedral Architecture"
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
                Family Trip Planning
              </h1>
              <p class="text-lg md:text-xl text-white/90">
                Collaborative planning for our Sicily adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content Container -->
      <div class="container mx-auto px-6 max-w-6xl py-8">

        <!-- Planning Instructions -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text flex items-center">
            <mat-icon class="mr-3 text-sicilian-gold">info</mat-icon>
            How Family Planning Works
          </h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-4">
              <div class="bg-sicilian-sea/20 p-6 rounded-xl border border-sicilian-sea/50">
                <h3 class="text-xl font-bold text-sicilian-sea mb-3">📝 Share Your Notes</h3>
                <p class="text-dark-text-secondary leading-relaxed">
                  Send your travel preferences, must-see destinations, hotel suggestions, 
                  accessibility needs, or any special requests to <strong class="text-sicilian-gold">Andrew</strong>.
                </p>
              </div>
              
              <div class="bg-italian-green/20 p-6 rounded-xl border border-italian-green/50">
                <h3 class="text-xl font-bold text-italian-green-light mb-3">🔄 Get Updates</h3>
                <p class="text-dark-text-secondary leading-relaxed">
                  Andrew will organize your notes into your personal planning section and 
                  update the master itinerary to incorporate everyone's preferences.
                </p>
              </div>
              
              <div class="bg-sicilian-sunset/20 p-6 rounded-xl border border-sicilian-sunset/50">
                <h3 class="text-xl font-bold text-sicilian-sunset mb-3">✅ Review & Refine</h3>
                <p class="text-dark-text-secondary leading-relaxed">
                  Check your personal planning page regularly for updates and send additional 
                  feedback to help create the perfect family trip.
                </p>
              </div>
            </div>
            
            <div>
              <app-sicily-image 
                imageName="gioiosa_marea.png"
                alt="Sicily family planning collaboration"
                containerClass="h-80 rounded-xl shadow-lg"
                imageClass="h-full w-full object-cover">
              </app-sicily-image>
            </div>
          </div>
          
          <div class="mt-6 p-4 bg-sicilian-gold/20 rounded-lg border border-sicilian-gold/50 text-center">
            <p class="text-dark-text">
              <strong class="text-sicilian-gold">💡 Pro Tip:</strong> 
              The more specific your notes (hotel accessibility needs, food preferences, energy levels, 
              must-see vs. optional attractions), the better Andrew can tailor the trip for everyone!
            </p>
          </div>
        </mat-card>

        <!-- Family Planning Pages -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text border-l-4 border-sicilian-sea pl-4">
            👨‍👩‍👧‍👦 Individual Family Planning Pages
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div *ngFor="let member of familyMembers" class="group">
              <mat-card class="h-full bg-dark-elevated border border-dark-border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-dark-text cursor-pointer"
                        [routerLink]="member.route">
                
                <!-- Status Badge -->
                <div class="absolute top-4 right-4 z-10">
                  <span [ngClass]="{
                    'bg-italian-green text-white': member.status === 'complete',
                    'bg-sicilian-sunset text-white': member.status === 'in-progress',
                    'bg-gray-500 text-white': member.status === 'awaiting-notes'
                  }" class="px-3 py-1 rounded-full text-xs font-medium">
                    {{ getStatusLabel(member.status) }}
                  </span>
                </div>
                
                <!-- Card Content -->
                <div class="p-6">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-sicilian-gold/20 rounded-full flex items-center justify-center mr-4">
                      <span class="text-2xl">{{ member.avatar }}</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-dark-text">{{ member.name }}</h3>
                      <p class="text-sicilian-sea text-sm">{{ member.role }}</p>
                    </div>
                  </div>
                  
                  <div class="space-y-2 mb-4">
                    <h4 class="font-semibold text-dark-text text-sm">Planning Focus:</h4>
                    <div class="flex flex-wrap gap-1">
                      <span *ngFor="let focus of member.planningFocus.slice(0, 2)" 
                            class="bg-sicilian-gold/20 text-sicilian-gold px-2 py-1 rounded text-xs">
                        {{ focus }}
                      </span>
                      <span *ngIf="member.planningFocus.length > 2" 
                            class="bg-gray-500/20 text-gray-400 px-2 py-1 rounded text-xs">
                        +{{ member.planningFocus.length - 2 }}
                      </span>
                    </div>
                  </div>
                  
                  <button mat-raised-button 
                          class="w-full bg-sicilian-sea hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                    <mat-icon class="mr-2">person</mat-icon>
                    View {{ member.name }}'s Plan
                  </button>
                </div>
              </mat-card>
            </div>
          </div>
          
          <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
            <h3 class="text-xl font-bold text-italian-red-light mb-3">📧 Send Your Notes to Andrew</h3>
            <p class="text-dark-text-secondary mb-4">
              Ready to share your Sicily trip preferences? Send Andrew your notes about:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <ul class="space-y-1 text-dark-text-secondary text-sm">
                <li>• Hotel preferences and accessibility needs</li>
                <li>• Must-see destinations vs. optional stops</li>
                <li>• Activity interests and energy levels</li>
                <li>• Food preferences and dietary restrictions</li>
              </ul>
              <ul class="space-y-1 text-dark-text-secondary text-sm">
                <li>• Transportation concerns or preferences</li>
                <li>• Budget considerations for activities</li>
                <li>• Special family moments you'd like to include</li>
                <li>• Any other thoughts or concerns</li>
              </ul>
            </div>
            <p class="text-sicilian-gold font-medium">
              💌 Email, text, or just tell Andrew your thoughts - he'll organize everything into your personal planning page!
            </p>
          </div>
        </mat-card>

        <!-- Travel Overview -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🧳 Trip Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <p class="text-dark-text-secondary"><strong class="text-dark-text">Group:</strong> 5-6 adults (3-4 ages 40-48, 2 ages 78-80)</p>
              <p class="text-dark-text-secondary"><strong class="text-dark-text">Duration:</strong> 10-11 days including travel days</p>
              <p class="text-dark-text-secondary"><strong class="text-dark-text">Departure:</strong> First or second week of September 2026</p>
            </div>
            <div class="space-y-3">
              <p class="text-dark-text-secondary"><strong class="text-dark-text">Budget:</strong> Approximately $7,000 per person (excluding airfare)</p>
              <p class="text-dark-text-secondary"><strong class="text-dark-text">Accommodations:</strong> 4-star hotels, centrally located, with one beach resort stay</p>
              <p class="text-dark-text-secondary"><strong class="text-dark-text">Transportation:</strong> Rental cars and private transfers for comfort</p>
            </div>
          </div>
        </mat-card>

        <!-- Flight Information -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">✈️ Flight Information</h2>
          <div class="bg-dark-elevated p-6 rounded-xl mb-6 border border-dark-border">
            <strong class="text-lg text-sicilian-gold">Best Flight Options (1 layover only):</strong>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-italian-green/30 p-6 rounded-xl border border-italian-green/50">
              <h3 class="font-bold text-xl mb-4 text-italian-green-light">Delta Option (Recommended)</h3>
              <ul class="space-y-3 text-dark-text-secondary">
                <li><strong class="text-dark-text">Departure:</strong> 7:10 AM MT from Denver</li>
                <li><strong class="text-dark-text">Layover:</strong> JFK (4 hours)</li>
                <li><strong class="text-dark-text">Departure from JFK:</strong> 4:45 PM</li>
                <li><strong class="text-dark-text">Arrival in Catania:</strong> 7:55 AM local time</li>
                <li class="text-italian-green-light"><strong>Advantage:</strong> More reasonable departure time</li>
              </ul>
            </div>
            <div class="bg-sicilian-sunset/30 p-6 rounded-xl border border-sicilian-sunset/50">
              <h3 class="font-bold text-xl mb-4 text-sicilian-sunset">Lufthansa Option</h3>
              <ul class="space-y-3 text-dark-text-secondary">
                <li><strong class="text-dark-text">Layover:</strong> Munich (2 hours)</li>
                <li><strong class="text-dark-text">Arrival:</strong> 2:00 AM MT</li>
                <li><strong class="text-dark-text">Departure:</strong> 4:00 AM MT</li>
                <li class="text-sicilian-sunset"><strong>Disadvantage:</strong> Very early departure</li>
              </ul>
            </div>
          </div>
        </mat-card>

        <!-- Transportation & Catania -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🚗 Transportation & First Stop: Catania</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <app-sicily-image 
                imageName="catania.jpg"
                alt="Catania Cathedral and Architecture"
                containerClass="h-64 rounded-xl shadow-lg"
                imageClass="h-full w-full object-cover">
              </app-sicily-image>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-sicilian-sea">Car Rentals & Logistics</h3>
              <ul class="space-y-2 text-dark-text-secondary">
                <li><strong class="text-dark-text">Group Size:</strong> 2 vehicles for 6 adults</li>
                <li><strong class="text-dark-text">Vehicle Type:</strong> Mid-size SUVs or similar</li>
                <li><strong class="text-dark-text">Pick-up:</strong> Catania Airport</li>
                <li><strong class="text-dark-text">Insurance:</strong> Full coverage recommended</li>
              </ul>
              <p class="text-dark-text-secondary text-sm">
                Catania's baroque architecture, rebuilt after Mount Etna's eruptions, 
                provides a stunning introduction to Sicily's resilient spirit.
              </p>
            </div>
          </div>
        </mat-card>

        <!-- Quick Itinerary Preview -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🗺️ Itinerary Highlights Preview</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-gold">account_balance</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Ancient Wonders</h3>
              <p class="text-dark-text-secondary">
                Valley of the Temples, Greek theaters in Syracuse and Taormina, 
                Roman mosaics at Villa Romana del Casale.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-sicilian-sea/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-sicilian-sea">terrain</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Natural Beauty</h3>
              <p class="text-dark-text-secondary">
                Mount Etna volcanic adventure, coastal views from Taormina, 
                baroque towns perched on dramatic cliffs.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-italian-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-3xl text-italian-green-light">family_restroom</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-dark-text mb-3">Family Heritage</h3>
              <p class="text-dark-text-secondary">
                Visit Gioiosa Marea for family connections, authentic Sicilian 
                village life, and multi-generational experiences.
              </p>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button mat-raised-button 
                    routerLink="/itineraries/andrews-itinerary"
                    class="bg-sicilian-gold hover:bg-yellow-600 text-white px-8 py-3 text-lg font-bold rounded-lg transition-colors duration-300 shadow-lg">
              <mat-icon class="mr-2">calendar_today</mat-icon>
              View Complete Detailed Itinerary
            </button>
          </div>
        </mat-card>

        <!-- Budget Overview -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">💰 Budget Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-sicilian-sea/30 p-6 rounded-xl border border-sicilian-sea/50">
              <h4 class="font-bold text-sicilian-sea mb-2">Accommodations</h4>
              <p class="text-2xl font-bold text-dark-text mb-1">$2,800</p>
              <p class="text-dark-text-secondary text-sm">4-star hotels, 9 nights</p>
            </div>
            <div class="bg-italian-green/30 p-6 rounded-xl border border-italian-green/50">
              <h4 class="font-bold text-italian-green-light mb-2">Transportation</h4>
              <p class="text-2xl font-bold text-dark-text mb-1">$1,200</p>
              <p class="text-dark-text-secondary text-sm">Car rental, gas, insurance</p>
            </div>
            <div class="bg-sicilian-wine/30 p-6 rounded-xl border border-sicilian-wine/50">
              <h4 class="font-bold text-italian-red-light mb-2">Food & Dining</h4>
              <p class="text-2xl font-bold text-dark-text mb-1">$2,000</p>
              <p class="text-dark-text-secondary text-sm">Restaurants and experiences</p>
            </div>
            <div class="bg-sicilian-sunset/30 p-6 rounded-xl border border-sicilian-sunset/50">
              <h4 class="font-bold text-sicilian-sunset mb-2">Activities & Tours</h4>
              <p class="text-2xl font-bold text-dark-text mb-1">$1,000</p>
              <p class="text-dark-text-secondary text-sm">Museums, tours, experiences</p>
            </div>
          </div>
          <div class="mt-6 p-4 bg-sicilian-gold/20 rounded-lg border border-sicilian-gold/50">
            <p class="text-dark-text text-center">
              <strong class="text-sicilian-gold">Total per person: ~$7,000</strong> 
              <span class="text-dark-text-secondary">(excluding airfare)</span>
            </p>
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

    mat-icon.mr-2 {
      font-size: 1.25rem !important;
      width: 1.25rem !important;
      height: 1.25rem !important;
    }
    
    .backdrop-blur-sm {
      backdrop-filter: blur(8px);
    }

    /* Card hover effects */
    .group:hover .group-hover\\:scale-105 {
      transform: scale(1.05);
    }

    /* Focus states for accessibility */
    button:focus-visible,
    a:focus-visible,
    .cursor-pointer:focus-visible {
      @apply outline-none ring-2 ring-sicilian-gold ring-offset-2 ring-offset-dark-bg;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      
      .md\\:grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }

    @media (max-width: 1024px) {
      .lg\\:grid-cols-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `]
})
export class PlanningComponent {
  
  familyMembers: FamilyMember[] = [
    {
      name: 'Nonna',
      role: 'Logistics & Accessibility Coordinator',
      planningFocus: ['Hotel Research', 'Accessibility', 'Parking Solutions', 'Family Heritage'],
      status: 'complete',
      avatar: '👵',
      route: '/planning/nonna'
    },
    {
      name: 'Andrew',
      role: 'Trip Organizer & Cultural Guide',
      planningFocus: ['Itinerary Planning', 'Historical Sites', 'UNESCO Locations', 'Group Coordination'],
      status: 'in-progress',
      avatar: '👨‍💼',
      route: '/planning/andrew'
    },
    {
      name: 'Karen',
      role: 'Cultural Experience Enthusiast',
      planningFocus: ['Local Cuisine', 'Art & Culture', 'Shopping', 'Family Activities'],
      status: 'awaiting-notes',
      avatar: '👩',
      route: '/planning/karen'
    },
    {
      name: 'Poppop',
      role: 'Senior Traveler & Heritage Seeker',
      planningFocus: ['Comfort', 'Accessibility', 'Historical Interest', 'Relaxed Pacing'],
      status: 'awaiting-notes',
      avatar: '👴',
      route: '/planning/poppop'
    },
    {
      name: 'Jim',
      role: 'Adventure & Photography Specialist',
      planningFocus: ['Active Adventures', 'Photography', 'Wine Experiences', 'Unique Activities'],
      status: 'awaiting-notes',
      avatar: '👨‍🎨',
      route: '/planning/jim'
    }
  ];

  getStatusLabel(status: string): string {
    switch(status) {
      case 'complete': return 'Complete';
      case 'in-progress': return 'In Progress';
      case 'awaiting-notes': return 'Awaiting Notes';
      default: return 'Unknown';
    }
  }

  // Keep existing itinerary data for the lower sections
  itineraryDays: ItineraryDay[] = [
    {
      day: 'Days 1-2',
      location: 'Denver → Catania → Syracuse',
      drivingDistance: 'Catania to Syracuse: 50 minutes',
      image: 'catania.jpg',
      imageAlt: 'Catania Cathedral and baroque architecture',
      activities: [
        {
          title: 'Arrival Day',
          details: ['Land in Catania, pick up rental car, drive to Syracuse']
        },
        {
          title: 'Evening',
          details: ['Check into hotel, light dinner, rest and adjust to time zone']
        }
      ]
    }
    // Add other days as needed...
  ];
}