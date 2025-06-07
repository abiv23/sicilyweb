import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="min-h-screen bg-dark-bg py-8">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="bg-hero-gradient text-white p-12 rounded-2xl text-center mb-8 shadow-2xl">
          <h1 class="text-5xl font-bold mb-4">🇮🇹 Sicily Family Adventure</h1>
          <div class="text-xl opacity-90">September 1-11, 2026 • 5-6 Adults • Budget: ~$7,000 per person</div>
        </div>

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

        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🚗 Transportation & Logistics</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4 text-sicilian-sea">Car Rentals</h3>
              <ul class="space-y-2 text-dark-text-secondary">
                <li><strong class="text-dark-text">Group Size:</strong> 2 vehicles for 6 adults</li>
                <li><strong class="text-dark-text">Vehicle Type:</strong> Mid-size SUVs or similar</li>
                <li><strong class="text-dark-text">Pick-up:</strong> Catania Airport</li>
                <li><strong class="text-dark-text">Insurance:</strong> Full coverage recommended</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4 text-italian-red-light">Accommodation Strategy</h3>
              <ul class="space-y-2 text-dark-text-secondary">
                <li><strong class="text-dark-text">Base Locations:</strong> 2-3 central hotels</li>
                <li><strong class="text-dark-text">Rating:</strong> 4-star minimum</li>
                <li><strong class="text-dark-text">Accessibility:</strong> Senior-friendly features</li>
                <li><strong class="text-dark-text">Beach Resort:</strong> 2-3 nights by the coast</li>
              </ul>
            </div>
          </div>
        </mat-card>

        <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl mb-8 text-dark-text">
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🗺️ Detailed Itinerary</h2>
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
                @if (day.hotel) {
                  <div class="bg-italian-green/20 p-4 rounded-lg mb-3">
                    <strong class="text-italian-green-light">{{ day.hotel.name }}</strong>
                    <ul class="list-disc pl-5 text-dark-text-secondary">
                      @for (option of day.hotel.options; track option) {
                        <li>{{ option }}</li>
                      }
                    </ul>
                  </div>
                }
                @if (day.restaurant) {
                  <div class="bg-sicilian-sunset/20 p-4 rounded-lg mb-3">
                    <strong class="text-sicilian-sunset">{{ day.restaurant.title }}</strong>
                    <p class="text-dark-text-secondary">{{ day.restaurant.details }}</p>
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
                @if (day.tips) {
                  <div class="bg-sicilian-gold/20 p-4 rounded-lg">
                    <strong class="text-sicilian-gold">Tips:</strong>
                    <p class="text-dark-text-secondary">{{ day.tips }}</p>
                  </div>
                }
              </div>
            }
          </div>
        </mat-card>

        <!-- Preview of coming attractions -->
        <mat-card class="p-8 bg-sicilian-gradient text-white shadow-xl text-center">
          <h3 class="text-3xl font-bold mb-4">🏛️ Complete Detailed Itinerary</h3>
          <p class="text-white/90 mb-6 text-lg leading-relaxed">
            Explore daily schedules, restaurant recommendations, museum booking details, and luxury experiences throughout Sicily.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <span class="text-4xl mb-3 block">🏛️</span>
              <h4 class="font-bold text-white mb-2">UNESCO Sites</h4>
              <p class="text-white/80 text-sm">Valley of Temples, Mount Etna, Syracuse, Noto & more</p>
            </div>
            <div class="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <span class="text-4xl mb-3 block">🍷</span>
              <h4 class="font-bold text-white mb-2">Culinary Experiences</h4>
              <p class="text-white/80 text-sm">Wine tastings, cooking classes, local food tours</p>
            </div>
            <div class="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <span class="text-4xl mb-3 block">🏨</span>
              <h4 class="font-bold text-white mb-2">Premium Accommodations</h4>
              <p class="text-white/80 text-sm">4-5 star hotels, boutique properties, beach resorts</p>
            </div>
          </div>
          <div class="backdrop-blur-sm bg-white/10 p-6 rounded-xl inline-block">
            <p class="text-lg font-semibold text-white">
              <strong class="text-sicilian-gold">✅ Now Available:</strong> Full daily schedules with times, locations, and booking information!
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
    
    /* Add glassmorphism effects */
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
      ],
      hotel: {
        name: 'Syracuse Hotel Options',
        options: [
          'Grande Albergo Alfeo - 4-star, centrally located, free breakfast',
          'Grand Hotel Villa Politi - 4-star, old world charm, free breakfast',
          'Hotel Borgo Pantano - 4-star, countryside setting (7 miles from center)'
        ]
      }
    },
    {
      day: 'Day 3',
      location: 'Explore Syracuse',
      activities: [
        {
          title: 'Morning',
          details: ['Traditional Sicilian breakfast at Café Voglia Matta - granita and brioche']
        },
        {
          title: 'Mid-Morning',
          details: ['Visit the Roman amphitheater and Ear of Dionysius archaeological park']
        },
        {
          title: 'Afternoon',
          details: ['Cross to Ortigia island - explore bustling piazzas, baroque architecture, and waterfront']
        }
      ],
      restaurant: {
        title: 'Recommended Walking Tours',
        details: 'Syracuse offers excellent guided tours of the archaeological park and Ortigia\'s historic center. Book through local tour operators for small group experiences.'
      },
      luxuryActivities: {
        title: 'Additional Luxury Activities to Consider',
        items: [
          'Private Baron\'s Palazzo Experience - Exclusive lunch at a historic palazzo with wine tasting from family vineyard (Tauck exclusive style)',
          'Sunset Sailing - Private boat charter around Ortigia island with aperitivo',
          'After-Hours Museum Visit - Private guided tour of Paolo Orsi Archaeological Museum',
          'Papyrus Workshop - Learn ancient paper-making techniques at the Papyrus Museum',
          'Local Artisan Visits - Meet ceramic artists and traditional craftspeople in their workshops'
        ]
      }
    },
    {
      day: 'Day 4',
      location: 'Noto → Ragusa Ibla → Piazza Armerina → Agrigento',
      drivingDistance: 'Syracuse to Noto: 50 min | Noto to Ragusa: 50 min | Ragusa to Piazza Armerina: 1h 40min | Piazza Armerina to Agrigento: 1h 40min',
      activities: [
        {
          title: 'Early Morning Noto (UNESCO Site)',
          details: [
            'Breakfast at 124-year-old Caffè Sicilia - famous granita and gelato with brioche',
            'Walk Corso Vittorio Emanuele promenade',
            'Admire baroque architecture and almond orchards'
          ]
        },
        {
          title: 'Late Morning Ragusa Ibla (UNESCO Site)',
          details: [
            'Explore ancient labyrinthine lanes',
            'Visit main town Piazza',
            'Optional lunch break'
          ]
        },
        {
          title: 'Afternoon Piazza Armerina (UNESCO Site)',
          details: [
            'Villa Romana del Casale - world\'s most beautiful preserved mosaics',
            'Famous "Bikini Girls" mosaics',
            '2-hour guided tour recommended ($52 pp with AAA, $16 regular)'
          ]
        },
        {
          title: 'Evening',
          details: ['Arrive in Agrigento, dinner and overnight']
        }
      ]
    },
    {
      day: 'Day 5',
      location: 'Agrigento - Valley of the Temples & Beach Day',
      activities: [
        {
          title: 'Morning',
          details: ['Valley of the Temples (UNESCO Site) - 8 Greek temples dating to 581 BC, one of the world\'s largest archaeological sites']
        },
        {
          title: 'Afternoon',
          details: ['Beach relaxation - consider staying at luxury Verdura Resort for beach access']
        }
      ],
      hotel: {
        name: 'Agrigento Beach Hotels',
        options: [
          'Verdura Resort - 5-star luxury coastal resort (splurge option)',
          'Baia di Ulisse - 4-star, near coast'
        ]
      },
      restaurant: {
        title: 'Wine Opportunity',
        details: 'This region produces excellent wines from volcanic soil. Look for Nero d\'Avola and Frappato varietals.'
      },
      luxuryActivities: {
        title: 'Additional Luxury Activities to Consider',
        items: [
          'Private Vineyard Experience - Exclusive tasting at Planeta or other premium wineries with lunch',
          'Helicopter Tour - Aerial views of Valley of Temples and coastline',
          'Exclusive Temple Access - Early morning private visit before crowds',
          'Local Olive Oil Tasting - Visit family-run olive groves and learn traditional pressing methods',
          'Sunset Photography Workshop - Capture golden hour at the temples with professional guidance',
          'Private Beach Club - VIP access to exclusive coastal resorts'
        ]
      }
    },
    {
      day: 'Day 6',
      location: 'Agrigento → Palermo',
      drivingDistance: 'Agrigento to Palermo: 2 hours',
      activities: [
        {
          title: 'Morning',
          details: ['Early departure to Palermo']
        },
        {
          title: 'Afternoon/Evening Palermo Highlights',
          details: [
            'UNESCO Palatine Chapel',
            'Teatro Massimo (largest opera house in Italy, Godfather Part III filming location)',
            'Ballarò Market - chaotic 1,000-year-old institution',
            'Famous street food scene'
          ]
        }
      ],
      hotel: {
        name: 'Palermo Hotel',
        options: ['Centrale Palace Hotel - Excellent central location, 4-star']
      },
      restaurant: {
        title: 'Must-Try Foods',
        details: 'Arancini (invented in Sicily), Pasta alla Norma (eggplant pasta), street food at markets. Evening food tours highly recommended.'
      },
      luxuryActivities: {
        title: 'Additional Luxury Activities to Consider',
        items: [
          'Private Palazzo Visit - Exclusive art tour at baroness\'s villa with dinner (Tauck-style exclusive)',
          'Teatro Massimo Private Tour - Behind-the-scenes access to Italy\'s largest opera house',
          'VIP Market Experience - Chef-guided tour of Ballarò market with cooking class',
          'Capuchin Catacombs Private Visit - After-hours exclusive access',
          'Monreale Cathedral VIP Access - Private viewing of Norman mosaics',
          'Street Food Safari - Insider\'s guide to authentic Palermo cuisine',
          'Norman Palace Extended Tour - Private access to restricted areas'
        ]
      }
    },
    {
      day: 'Day 7',
      location: 'Palermo → Cefalù → Gioiosa Marea → Taormina',
      drivingDistance: 'Palermo to Cefalù: 1h | Cefalù to Gioiosa Marea: 1h 15min | Gioiosa Marea to Taormina: 2h',
      activities: [
        {
          title: 'Morning Cefalù',
          details: [
            'Breakfast stop',
            'Winding medieval streets',
            'Norman cathedral',
            'Beach promenade west of old town'
          ]
        },
        {
          title: 'Midday Gioiosa Marea',
          details: [
            'Explore Biviano family hometown',
            'Lunch with sea views'
          ]
        },
        {
          title: 'Afternoon',
          details: ['Arrive in Taormina, check in, evening stroll along Corso Umberto']
        }
      ],
      hotel: {
        name: 'Taormina Hotels (Corso Umberto recommended for easier walking)',
        options: [
          'Hotel Taodomus - Boutique hotel',
          'Albergo Victoria - Historic building',
          'Hotel Excelsior Palace - 4-star, sea views (10-min walk to Corso Umberto)',
          'NH Collection Taormina - 5-star, good location (premium pricing)'
        ]
      }
    },
    {
      day: 'Day 8',
      location: 'Taormina Exploration',
      activities: [
        {
          title: 'Morning Activities (Choose One)',
          details: [
            'Sicilian cooking class (multiple offerings available)',
            'Walking tour of historic center'
          ]
        },
        {
          title: 'Must-See Taormina',
          details: [
            'Teatro Greco (built 3rd century BC by Greeks)',
            'Corso Umberto cobblestone historic center',
            '13th century Piazza Duomo',
            'Cafes and terraces overlooking the sea'
          ]
        },
        {
          title: 'Optional',
          details: ['Visit Giardini Naxos beach below Taormina']
        }
      ],
      restaurant: {
        title: 'Cooking Classes',
        details: 'Taormina offers numerous cooking class options. Many include market visits and wine pairings. Book in advance for September.'
      },
      luxuryActivities: {
        title: 'Additional Luxury Activities to Consider',
        items: [
          'Private Norman Cathedral Tour - Exclusive access to medieval architectural treasures',
          'Sea-to-Table Experience - Join local fishermen and dine on fresh catch',
          'Marquis Garden Visit - Private tour of botanical gardens with aperitivo',
          'Traditional Almond Pastry Workshop - Learn Erice\'s famous dolci recipes',
          'Coastal Photography Tour - Capture dramatic cliff and sea views',
          'Private Beach Club Access - VIP experience at exclusive coastal resorts',
          'Private Greek Theater Performance - Exclusive evening classical music or opera',
          'Villa San Pancrazio Visit - Private tour of historic villa and gardens',
          'Michelin-Star Dining - Reservations at exclusive restaurants with sea views',
          'Sicilian Ceramic Workshop - Learn traditional pottery techniques',
          'Boat Trip to Isola Bella - Private charter to the "Pearl of the Ionian Sea"',
          'Gondola-style Evening Tour - Romantic sunset cruise along coast',
          'VIP Shopping Experience - Personal shopping guide for local artisans'
        ]
      }
    },
    {
      day: 'Day 9',
      location: 'Mount Etna Adventure → Taormina',
      drivingDistance: 'Taormina to Mt. Etna: 1h 15min',
      activities: [
        {
          title: 'Mount Etna (UNESCO Site) - Europe\'s highest active volcano',
          details: [
            'Visit Rifugio Sapienza visitor center',
            'Cable car to higher elevations',
            '4x4 jeep tour to lava flows (book in advance)',
            'Hiking trails in Etna National Park'
          ]
        },
        {
          title: 'Wine Experience',
          details: ['Oro d\'Etna winery tasting on volcano slopes - wines from volcanic soil']
        },
        {
          title: 'Evening',
          details: ['Return to Taormina for farewell dinner']
        }
      ],
      tips: 'Weather can change quickly. Bring layers and sturdy shoes. Full-day and half-day tours available. Volcanic soil produces unique Nerello Mascalese and Carricante wines.',
      luxuryActivities: {
        title: 'Additional Luxury Activities to Consider',
        items: [
          '4x4 Range Rover Adventure - Private guided tour with volcanologist to lava flows',
          'Helicopter Tour - Fly over active craters and volcanic landscapes',
          'Exclusive Winery Experience - Private tasting at Oro d\'Etna with vineyard lunch',
          'Volcanic Cave Exploration - Guided tour through lava tubes',
          'Sunset Wine Tasting - Premium volcanic wines with Mount Etna backdrop',
          'Private Astronomy Experience - Stargazing from volcanic slopes with expert guide',
          'Hot Springs Visit - Relaxation at thermal springs near the volcano'
        ]
      }
    },
    {
      day: 'Day 10',
      location: 'Taormina → Catania Airport → Denver',
      drivingDistance: 'Taormina to Catania Airport: 1 hour',
      activities: [
        {
          title: 'Morning',
          details: ['Leisurely departure, drive to Catania International Airport']
        },
        {
          title: 'Important',
          details: ['Arrive 3 hours before departure for international flight']
        },
        {
          title: 'Evening',
          details: ['Overnight flight to Denver']
        }
      ]
    },
    {
      day: 'Day 11',
      location: 'Arrive Denver',
      activities: [
        {
          title: 'Arrival',
          details: ['Land in Denver, end of Sicily adventure']
        }
      ]
    }
  ];
}