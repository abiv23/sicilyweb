import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
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
}

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, SicilyImageComponent],
  template: `
    <div class="min-h-screen bg-dark-bg py-8">
      <div class="container mx-auto px-6 max-w-6xl">
        <!-- Hero Section -->
        <div class="bg-hero-gradient text-white p-12 rounded-2xl text-center mb-8 shadow-2xl">
          <h1 class="text-5xl font-bold mb-4">🇮🇹 Sicily Family Adventure</h1>
          <div class="text-xl opacity-90">September 1-11, 2026 • 5-6 Adults • Budget: ~$7,000 per person</div>
        </div>

        <!-- Travel Overview -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🏛️ Travel Overview</h2>
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

        <!-- Key Itinerary Highlights -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🗺️ Key Itinerary Highlights</h2>
          
          <!-- Agrigento section -->
          <div class="mb-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-sicilian-gold">Day 4-5: Valley of the Temples</h3>
                <p class="text-dark-text-secondary">
                  Explore the world's largest archaeological site with 8 Greek temples dating to 581 BC. 
                  This UNESCO World Heritage site showcases some of the best-preserved ancient Greek 
                  architecture outside of Greece.
                </p>
                <ul class="list-disc pl-5 text-dark-text-secondary space-y-1">
                  <li>2-hour guided tours available ($52 pp with AAA)</li>
                  <li>Early morning visits to avoid crowds</li>
                  <li>Sunset photography opportunities</li>
                </ul>
              </div>
              <div>
                <app-sicily-image 
                  imageName="agrigento_ruins.jpg"
                  alt="Valley of the Temples Ancient Ruins"
                  containerClass="h-64 rounded-xl shadow-lg"
                  imageClass="h-full w-full object-cover">
                </app-sicily-image>
              </div>
            </div>
          </div>

          <!-- Mount Etna section -->
          <div class="mb-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <app-sicily-image 
                  imageName="etna.jpg"
                  alt="Mount Etna Volcanic Landscape"
                  containerClass="h-64 rounded-xl shadow-lg"
                  imageClass="h-full w-full object-cover">
                </app-sicily-image>
              </div>
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-sicilian-sunset">Day 9: Mount Etna Adventure</h3>
                <p class="text-dark-text-secondary">
                  Europe's highest active volcano offers breathtaking lunar landscapes and unique 
                  volcanic soil wines. Visit Rifugio Sapienza, take cable cars to higher elevations, 
                  and explore lava flows with 4x4 jeep tours.
                </p>
                <ul class="list-disc pl-5 text-dark-text-secondary space-y-1">
                  <li>Oro d'Etna winery tasting on volcano slopes</li>
                  <li>Hiking trails in Etna National Park</li>
                  <li>Volcanic cave exploration opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Syracuse section -->
          <div class="mb-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-sicilian-sea">Day 3: Syracuse & Ortigia</h3>
                <p class="text-dark-text-secondary">
                  Discover the birthplace of Archimedes with its Roman amphitheater, Ear of Dionysius, 
                  and the baroque island of Ortigia. This UNESCO site combines ancient Greek and Roman 
                  history with stunning waterfront architecture.
                </p>
                <ul class="list-disc pl-5 text-dark-text-secondary space-y-1">
                  <li>Archaeological park with Greek theater</li>
                  <li>Ortigia island's medieval streets</li>
                  <li>Traditional granita & brioche breakfast</li>
                </ul>
              </div>
              <div>
                <app-sicily-image 
                  imageName="ruins2.jpg"
                  alt="Syracuse Ancient Ruins"
                  containerClass="h-64 rounded-xl shadow-lg"
                  imageClass="h-full w-full object-cover">
                </app-sicily-image>
              </div>
            </div>
          </div>
        </mat-card>

        <!-- Complete Itinerary -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">📅 Complete Day-by-Day Itinerary</h2>
          <div class="space-y-6">
            @for (day of itineraryDays; track day.day) {
              <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border backdrop-blur-sm">
                <div class="text-2xl font-bold text-sicilian-sea mb-2">{{ day.day }}</div>
                <div class="text-xl font-semibold text-dark-text mb-4">{{ day.location }}</div>
                @if (day.drivingDistance) {
                  <div class="bg-sicilian-gold/20 p-3 rounded-lg text-dark-text-secondary mb-4">
                    <strong>Driving Distance:</strong> {{ day.drivingDistance }}
                  </div>
                }
                @for (activity of day.activities; track activity.title) {
                  <div class="bg-white/10 p-4 rounded-lg mb-3">
                    <strong class="text-sicilian-sea">{{ activity.title }}</strong>
                    <ul class="list-disc pl-5 text-dark-text-secondary">
                      @for (detail of activity.details; track detail) {
                        <li>{{ detail }}</li>
                      }
                    </ul>
                  </div>
                }
                @if (day.luxuryActivities) {
                  <div class="bg-sicilian-wine/20 p-4 rounded-lg mb-3">
                    <strong class="text-italian-red-light">{{ day.luxuryActivities.title }}</strong>
                    <ul class="list-disc pl-5 text-dark-text-secondary">
                      @for (item of day.luxuryActivities.items; track item) {
                        <li>{{ item }}</li>
                      }
                    </ul>
                  </div>
                }
              </div>
            }
          </div>
        </mat-card>

        <!-- Accommodation Strategy -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🏨 Accommodation Strategy</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4 text-sicilian-sea">Hotel Selection Criteria</h3>
              <ul class="space-y-3 text-dark-text-secondary">
                <li><strong class="text-dark-text">Rating:</strong> 4-star minimum for comfort</li>
                <li><strong class="text-dark-text">Location:</strong> Central, walkable to main attractions</li>
                <li><strong class="text-dark-text">Accessibility:</strong> Senior-friendly features</li>
                <li><strong class="text-dark-text">Amenities:</strong> Free breakfast, air conditioning, WiFi</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4 text-italian-red-light">Base Locations</h3>
              <ul class="space-y-3 text-dark-text-secondary">
                <li><strong class="text-dark-text">Syracuse (2 nights):</strong> Ancient sites and Ortigia</li>
                <li><strong class="text-dark-text">Agrigento (2 nights):</strong> Valley of Temples</li>
                <li><strong class="text-dark-text">Palermo (2 nights):</strong> Capital city culture</li>
                <li><strong class="text-dark-text">Taormina (3 nights):</strong> Mount Etna and theater</li>
              </ul>
            </div>
          </div>
        </mat-card>

        <!-- Budget Breakdown -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">💰 Budget Breakdown</h2>
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

        <!-- Booking Timeline -->
        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">📋 Booking Timeline & Tips</h2>
          <div class="space-y-6">
            <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
              <h3 class="text-xl font-bold mb-4 text-sicilian-sea">12 Months Before (September 2025)</h3>
              <ul class="space-y-2 text-dark-text-secondary">
                <li>✈️ Book flights - best prices and seat selection</li>
                <li>🏨 Reserve hotels in Syracuse and Taormina</li>
                <li>🎭 Check for special events in September 2026</li>
              </ul>
            </div>
            
            <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
              <h3 class="text-xl font-bold mb-4 text-italian-green-light">6 Months Before (March 2026)</h3>
              <ul class="space-y-2 text-dark-text-secondary">
                <li>🚗 Book rental cars for 6-person group</li>
                <li>🎫 Pre-book Valley of Temples, Mount Etna tours</li>
                <li>🍷 Reserve cooking classes and wine tastings</li>
              </ul>
            </div>
            
            <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
              <h3 class="text-xl font-bold mb-4 text-sicilian-sunset">1 Month Before (August 2026)</h3>
              <ul class="space-y-2 text-dark-text-secondary">
                <li>📄 Confirm all reservations</li>
                <li>💳 Notify banks of travel plans</li>
                <li>🧳 Pack comfortable walking shoes</li>
              </ul>
            </div>
          </div>
        </mat-card>

        <!-- Final Preview -->
        <mat-card class="p-8 bg-sicilian-gradient text-white shadow-xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-3xl font-bold mb-4">🏛️ Complete Sicily Experience</h3>
              <p class="text-white/90 mb-6 text-lg leading-relaxed">
                From UNESCO World Heritage sites to volcanic wines, your Sicily adventure includes 
                detailed daily schedules and luxury experiences.
              </p>
              <div class="backdrop-blur-sm bg-white/10 p-4 rounded-xl">
                <p class="text-lg font-semibold text-white">
                  <strong class="text-sicilian-gold">✅ Ready:</strong> Complete planning guide for your Sicily adventure!
                </p>
              </div>
            </div>
            <div>
              <app-sicily-image 
                imageName="seaside.jpg"
                alt="Sicilian Coastal Views"
                containerClass="h-80 rounded-xl shadow-2xl"
                imageClass="h-full w-full object-cover"
                [enableHover]="false">
              </app-sicily-image>
            </div>
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
  `]
})
export class PlanningComponent {
  itineraryDays: ItineraryDay[] = [
    {
      day: 'Days 1-2',
      location: 'Denver → Catania → Syracuse',
      drivingDistance: 'Catania to Syracuse: 50 minutes',
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
    },
    {
      day: 'Day 3',
      location: 'Explore Syracuse',
      activities: [
        {
          title: 'Morning',
          details: ['Traditional Sicilian breakfast - granita and brioche']
        },
        {
          title: 'Archaeological Park',
          details: ['Visit Roman amphitheater and Ear of Dionysius']
        },
        {
          title: 'Ortigia Island',
          details: ['Explore baroque architecture and waterfront']
        }
      ],
      luxuryActivities: {
        title: 'Luxury Options',
        items: [
          'Private Baron\'s Palazzo Experience with wine tasting',
          'Sunset sailing around Ortigia island'
        ]
      }
    },
    {
      day: 'Day 4',
      location: 'Noto → Ragusa → Piazza Armerina → Agrigento',
      drivingDistance: 'Total driving: ~5 hours with stops',
      activities: [
        {
          title: 'UNESCO Sites Tour',
          details: [
            'Noto baroque architecture',
            'Ragusa Ibla medieval lanes',
            'Villa Romana del Casale mosaics'
          ]
        }
      ]
    },
    {
      day: 'Day 5',
      location: 'Valley of the Temples',
      activities: [
        {
          title: 'Archaeological Wonder',
          details: ['8 Greek temples dating to 581 BC, guided tour recommended']
        }
      ]
    },
    {
      day: 'Day 6-7',
      location: 'Palermo Experience',
      activities: [
        {
          title: 'Norman Heritage',
          details: ['Palatine Chapel, Teatro Massimo, Ballarò Market']
        }
      ]
    },
    {
      day: 'Day 8-9',
      location: 'Taormina & Mount Etna',
      activities: [
        {
          title: 'Ancient Theater & Volcano',
          details: ['Greek theater with sea views, Mount Etna adventure']
        }
      ]
    },
    {
      day: 'Day 10-11',
      location: 'Departure',
      activities: [
        {
          title: 'Return Journey',
          details: ['Catania Airport departure to Denver']
        }
      ]
    }
  ];
}