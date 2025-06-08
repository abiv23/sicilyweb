import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SicilyImageComponent } from '../../components/sicily-image/sicily-image.component';
import { ItineraryComponent } from '../../components/itinerary/itinerary.component';

@Component({
  selector: 'app-andrews-itinerary',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    SicilyImageComponent,
    ItineraryComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-bg">
      <!-- Hero Section -->
      <section class="relative h-96 overflow-hidden shadow-2xl">
        <div class="relative h-full w-full">
          <app-sicily-image 
            imageName="mountain_village.jpg"
            alt="Sicilian hilltop village with ancient architecture"
            containerClass="absolute inset-0 h-full w-full"
            imageClass="h-full w-full object-cover"
            [enableHover]="false">
          </app-sicily-image>
          
          <div class="absolute inset-0 bg-black/60"></div>
          
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center text-white bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">
                📅 AI's Sicily Itinerary
              </h1>
              <p class="text-lg md:text-xl text-white/90 mb-4">
                Strategic 10-Day Family Adventure
              </p>
              <p class="text-base text-white/80">
                Optimized for multi-generational travel with luxury comfort and maximum cultural impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Introduction -->
      <section class="py-12 bg-dark-surface">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <mat-card class="p-8 bg-dark-elevated border border-dark-border rounded-2xl shadow-xl text-dark-text">
            <h2 class="text-3xl font-bold text-dark-text mb-6">🎯 The Strategy Behind This Itinerary</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-sicilian-sea/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <mat-icon class="text-3xl text-sicilian-sea">hotel</mat-icon>
                </div>
                <h3 class="text-xl font-bold text-dark-text mb-3">Smart Bases</h3>
                <p class="text-dark-text-secondary">
                  Only 2 hotel changes in 10 days. Strategic locations to minimize packing while maximizing experiences.
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-sicilian-sunset/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <mat-icon class="text-3xl text-sicilian-sunset">accessibility</mat-icon>
                </div>
                <h3 class="text-xl font-bold text-dark-text mb-3">Senior-Friendly</h3>
                <p class="text-dark-text-secondary">
                  Comfortable pacing, 4-star accommodations, easy access, and flexible activity levels for ages 40-80.
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
            
            <div class="bg-sicilian-gold/20 p-6 rounded-lg border border-sicilian-gold/50">
              <p class="text-dark-text leading-relaxed">
                <strong class="text-sicilian-gold">Why This Works:</strong> 
                This itinerary uses the "Sicily Triangle Plus" approach - three strategic bases covering Eastern Sicily's drama, 
                Western Sicily's culture, and Southern Sicily's ancient wonders. Each base minimizes driving while maximizing 
                authentic experiences, luxury comfort, and multigenerational appeal.
              </p>
            </div>
          </mat-card>
        </div>
      </section>

      <!-- The Complete Itinerary -->
      <app-itinerary [itinerary]="andrewsItinerary"></app-itinerary>

      <!-- Why This Itinerary Excels -->
      <section class="py-16 bg-dark-surface">
        <div class="max-w-6xl mx-auto px-6">
          <mat-card class="p-8 bg-dark-elevated border border-dark-border rounded-2xl shadow-xl text-dark-text">
            <h2 class="text-3xl font-bold text-dark-text mb-8 text-center">🌟 What Makes This Itinerary Special</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="text-2xl font-bold text-sicilian-sea mb-4">Complete Sicily Experience</h3>
                <ul class="space-y-3 text-dark-text-secondary">
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-gold mr-3 mt-1">check_circle</mat-icon>
                    <span><strong>Ancient Greek:</strong> Syracuse theaters, Taormina drama, Agrigento temples</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-gold mr-3 mt-1">check_circle</mat-icon>
                    <span><strong>Norman Heritage:</strong> Palermo palaces, Monreale mosaics, Cefalù cathedral</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-gold mr-3 mt-1">check_circle</mat-icon>
                    <span><strong>Baroque Masterpieces:</strong> Noto "stone garden", Ragusa cliff-side beauty</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-gold mr-3 mt-1">check_circle</mat-icon>
                    <span><strong>Volcanic Wonders:</strong> Mount Etna adventure, volcanic wine tastings</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-gold mr-3 mt-1">check_circle</mat-icon>
                    <span><strong>Cultural Immersion:</strong> Markets, cooking classes, local families</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-2xl font-bold text-italian-green-light mb-4">Smart Travel Design</h3>
                <ul class="space-y-3 text-dark-text-secondary">
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-sunset mr-3 mt-1">schedule</mat-icon>
                    <span><strong>Flexible Pacing:</strong> Mix of active exploration and gentle cultural days</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-sunset mr-3 mt-1">directions_car</mat-icon>
                    <span><strong>Strategic Driving:</strong> Longest drive 3h 15m, mostly scenic routes</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-sunset mr-3 mt-1">hotel</mat-icon>
                    <span><strong>Luxury Bases:</strong> 4-star comfort in perfect locations</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-sunset mr-3 mt-1">restaurant</mat-icon>
                    <span><strong>Culinary Journey:</strong> Street food to Michelin-level dining</span>
                  </li>
                  <li class="flex items-start">
                    <mat-icon class="text-sicilian-sunset mr-3 mt-1">account_balance_wallet</mat-icon>
                    <span><strong>Budget Optimized:</strong> $7,000 pp including luxury where it matters most</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="bg-sicilian-gradient p-6 rounded-xl text-white text-center">
              <h4 class="text-2xl font-bold mb-4">🎉 The Bottom Line</h4>
              <p class="text-lg leading-relaxed">
                This itinerary delivers <strong>world-class history</strong>, <strong>spectacular scenery</strong>, 
                <strong>authentic culture</strong>, and <strong>luxury comfort</strong> - all while respecting different 
                energy levels and staying within budget. Your multi-generational group gets the complete Sicily experience 
                designed specifically for success!
              </p>
            </div>
          </mat-card>
        </div>
      </section>

      <!-- Alternative Options -->
      <section class="py-12 bg-dark-bg">
        <div class="max-w-4xl mx-auto px-6">
          <mat-card class="p-8 bg-dark-surface border border-dark-border rounded-2xl shadow-xl text-dark-text">
            <h2 class="text-3xl font-bold text-dark-text mb-6 text-center">🔄 Alternative Considerations</h2>
            
            <div class="space-y-6">
              <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
                <h3 class="text-xl font-bold text-sicilian-sea mb-3">🏖️ Beach Extension Option</h3>
                <p class="text-dark-text-secondary mb-3">
                  Consider adding 2-3 days at a beach resort (Cefalù or coastal Taormina) for relaxation, 
                  especially appealing for seniors who might want pool/beach time.
                </p>
                <p class="text-sm text-dark-text-secondary">
                  <strong>Trade-off:</strong> Less cultural sites, but more relaxation and family bonding time.
                </p>
              </div>
              
              <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
                <h3 class="text-xl font-bold text-italian-green-light mb-3">🏝️ Aeolian Islands Add-On</h3>
                <p class="text-dark-text-secondary mb-3">
                  From your Gioiosa Marea family connection base, day trips to Vulcano (mud baths great for seniors) 
                  or Lipari (charming and accessible) could add a unique island experience.
                </p>
                <p class="text-sm text-dark-text-secondary">
                  <strong>Trade-off:</strong> More travel time, weather dependent, but unique volcanic island experience.
                </p>
              </div>
              
              <div class="bg-dark-elevated p-6 rounded-xl border border-dark-border">
                <h3 class="text-xl font-bold text-sicilian-wine mb-3">🍫 Modica Chocolate Extension</h3>
                <p class="text-dark-text-secondary mb-3">
                  Add half-day in Modica (20 minutes from Ragusa) for unique Aztec-method chocolate and 
                  additional baroque architecture - perfect for food lovers in your group.
                </p>
                <p class="text-sm text-dark-text-secondary">
                  <strong>Trade-off:</strong> Minimal - easy addition that enhances the baroque triangle experience.
                </p>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-sicilian-gold/20 rounded-lg border border-sicilian-gold/50 text-center">
              <p class="text-dark-text">
                <strong class="text-sicilian-gold">💡 Flexibility Note:</strong> 
                This itinerary provides the perfect foundation. You can always add, subtract, or modify based 
                on your group's specific interests and energy levels as the trip approaches!
              </p>
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
    
    .backdrop-blur-sm {
      backdrop-filter: blur(8px);
    }
    
    /* Focus states for accessibility */
    button:focus-visible,
    a:focus-visible {
      @apply outline-none ring-2 ring-sicilian-gold ring-offset-2 ring-offset-dark-bg;
    }
  `]
})
export class AndrewsItineraryComponent {
  
  andrewsItinerary = {
    title: "Sicily Family Adventure: Strategic 10-Day Itinerary",
    subtitle: "September 1-11, 2026 | Multi-Generational Excellence",
    totalDays: 10,
    totalBudget: 7000,
    
    sections: [
      {
        title: "Eastern Sicily: Taormina Base",
        subtitle: "Days 1-3: Spectacular Introduction",
        description: "Begin your Sicily adventure with the most dramatic setting - ancient Greek theater overlooking Mount Etna, luxury accommodations, and gentle acclimatization to Sicilian pace.",
        totalDays: 3,
        baseLocation: "Taormina", 
        highlights: ["Mount Etna Views", "Greek Theater", "Luxury Hotels", "Volcanic Wine"],
        totalBudget: 2100,
        days: [
          {
            day: "Day 1",
            date: "September 1, 2026",
            location: "Arrival & Taormina Introduction",
            baseCity: "Taormina",
            accommodation: {
              name: "Belmond Grand Hotel Timeo",
              type: "5-star luxury with Etna views",
              pricePerNight: 300
            },
            drivingInfo: {
              from: "Catania Airport",
              to: "Taormina",
              distance: "30 miles",
              duration: "45 minutes"
            },
            activities: [
              {
                time: "Morning",
                title: "Arrival & Car Collection",
                description: "Land in Catania, collect rental cars, drive scenic route to Taormina",
                duration: "3 hours",
                cost: "Included"
              },
              {
                time: "Afternoon", 
                title: "Gentle Taormina Introduction",
                description: "Check into luxury hotel, light lunch on Corso Umberto I, gentle exploration",
                highlights: ["Hotel check-in with Mount Etna views", "Traditional Sicilian lunch", "First glimpse of Greek Theater", "Medieval street exploration"],
                duration: "4 hours",
                cost: "$60"
              },
              {
                time: "Evening",
                title: "Welcome Dinner",
                description: "Early dinner with Mount Etna backdrop, rest to combat jet lag",
                duration: "2 hours", 
                cost: "$80"
              }
            ],
            budgetBreakdown: {
              accommodation: 300,
              activities: 0,
              dining: 140,
              transportation: 60
            },
            tips: [
              "Take it easy on arrival day - jet lag affects seniors more",
              "Hotel concierge can recommend best Etna viewing spots",
              "Early dinner helps adjust to Italian time"
            ],
            image: "taormina.jpg",
            imageAlt: "Taormina hilltop town with Mount Etna in background"
          },
          {
            day: "Day 2", 
            date: "September 2, 2026",
            location: "Ancient Theater & Mount Etna Views",
            baseCity: "Taormina",
            activities: [
              {
                time: "Morning",
                title: "Greek Theater with Mount Etna Backdrop", 
                description: "Explore one of the world's most dramatically situated ancient theaters",
                highlights: ["3rd-century BC Greek architecture", "Spectacular Mount Etna views", "Perfect acoustics demonstration", "Roman-era modifications"],
                duration: "2.5 hours",
                cost: "$15"
              },
              {
                time: "Afternoon",
                title: "Villa Comunale Gardens",
                description: "Peaceful walking through terraced gardens with panoramic views",
                highlights: ["Victorian-era exotic plants", "Panoramic terraces", "Sunset photography spots", "Rest areas with benches"],
                duration: "2 hours", 
                cost: "Free"
              },
              {
                time: "Evening",
                title: "Cable Car to Isola Bella",
                description: "Scenic cable car ride to heart-shaped beach (weather permitting)",
                duration: "3 hours",
                cost: "$8"
              }
            ],
            budgetBreakdown: {
              accommodation: 300,
              activities: 23,
              dining: 120,
              transportation: 10
            },
            tips: [
              "Visit theater early morning for best lighting",
              "Cable car may close in high winds",
              "Villa Comunale perfect for senior-friendly walking"
            ],
            image: "taormina_theater_etna.jpg",
            imageAlt: "Ancient Greek theater with Mount Etna volcano backdrop"
          },
          {
            day: "Day 3",
            date: "September 3, 2026", 
            location: "Mount Etna Adventure Day",
            baseCity: "Taormina",
            activities: [
              {
                time: "Full Day",
                title: "Mount Etna Volcanic Experience",
                description: "Europe's highest active volcano with 4x4 tours, lava caves, and high-altitude wine tasting",
                highlights: ["4x4 jeep tour to recent lava flows", "Volcanic cave exploration with helmets", "High-altitude vineyard wine tasting", "Lunar landscape photography"],
                duration: "8 hours",
                cost: "$120"
              }
            ],
            budgetBreakdown: {
              accommodation: 300,
              activities: 120,
              dining: 100,
              transportation: 40
            },
            tips: [
              "Bring warm clothes - temperature drops with altitude", 
              "Tours weather dependent - have backup indoor plans",
              "Volcanic soil wines are unique to Sicily"
            ],
            image: "etna.jpg",
            imageAlt: "Mount Etna volcanic landscape with lava flows"
          }
        ]
      },
      
      {
        title: "Western Sicily: Palermo Cultural Hub",
        subtitle: "Days 4-7: Norman Heritage & Cultural Immersion", 
        description: "Experience Sicily's richest cultural diversity with Norman palaces, Byzantine mosaics, vibrant markets, and day trips to medieval hilltop towns.",
        totalDays: 4,
        baseLocation: "Palermo",
        highlights: ["Norman Palaces", "Byzantine Mosaics", "Street Markets", "Medieval Towns"],
        totalBudget: 2800,
        days: [
          {
            day: "Day 4",
            date: "September 4, 2026",
            location: "Cross-Island Journey & Palermo Introduction", 
            baseCity: "Palermo",
            accommodation: {
              name: "Grand Hotel Villa Igiea",
              type: "Historic luxury hotel",
              pricePerNight: 275
            },
            drivingInfo: {
              from: "Taormina",
              to: "Palermo", 
              distance: "150 miles",
              duration: "2h 45m via scenic mountain routes"
            },
            activities: [
              {
                time: "Morning",
                title: "Scenic Cross-Island Drive",
                description: "Beautiful mountain and countryside route across Sicily's heart",
                duration: "3.5 hours",
                cost: "Gas only"
              },
              {
                time: "Afternoon", 
                title: "Palermo Introduction & Quattro Canti",
                description: "Explore the baroque crossroads and historic center orientation",
                highlights: ["Quattro Canti baroque intersection", "Piazza Pretoria fountain", "Historic center orientation", "Traditional aperitivo"],
                duration: "3 hours",
                cost: "$30"
              }
            ],
            budgetBreakdown: {
              accommodation: 275,
              activities: 30,
              dining: 100,
              transportation: 50
            },
            tips: [
              "Break up drive with scenic stops",
              "Palermo can be overwhelming - start gentle",
              "Hotel concierge invaluable for navigation"
            ],
            image: "palermo.jpg",
            imageAlt: "Palermo historic center with baroque architecture"
          },
          {
            day: "Day 5",
            date: "September 5, 2026",
            location: "Norman Masterpieces Day",
            baseCity: "Palermo",
            activities: [
              {
                time: "Morning",
                title: "Palatine Chapel & Norman Palace",
                description: "UNESCO World Heritage masterpiece with golden Byzantine mosaics",
                highlights: ["Golden Byzantine mosaics", "Arabic honeycomb ceiling", "Royal apartments", "Norman-Arab-Byzantine fusion"],
                duration: "3 hours",
                cost: "$15"
              },
              {
                time: "Afternoon",
                title: "Monreale Day Trip",
                description: "World's finest cathedral mosaics and peaceful cloisters",
                highlights: ["Christ Pantocrator mosaic", "Biblical narrative mosaics", "Benedictine cloisters", "Panoramic valley views"],
                duration: "4 hours",
                cost: "$8"
              },
              {
                time: "Evening",
                title: "Teatro Massimo Guided Tour",
                description: "One of Europe's largest opera houses with perfect acoustics",
                duration: "1.5 hours",
                cost: "$12"
              }
            ],
            budgetBreakdown: {
              accommodation: 275,
              activities: 35,
              dining: 110,
              transportation: 25
            },
            tips: [
              "Book Palatine Chapel tickets in advance",
              "Monreale cathedral closes for lunch 12:30-2:30",
              "Teatro Massimo tours cancelled on performance days"
            ],
            image: "monreale.jpg",
            imageAlt: "Monreale Cathedral with golden mosaics"
          },
          {
            day: "Day 6",
            date: "September 6, 2026",
            location: "Markets & Medieval Charm",
            baseCity: "Palermo",
            activities: [
              {
                time: "Morning",
                title: "Ballarò Market Guided Food Tour",
                description: "Sensory explosion of Sicilian flavors and authentic street food",
                highlights: ["Traditional street food tastings", "Local vendors interaction", "Sicilian specialties", "Cultural immersion"],
                duration: "3 hours",
                cost: "$45"
              },
              {
                time: "Afternoon",
                title: "Cefalù Excursion",
                description: "Norman cathedral and charming coastal medieval town",
                highlights: ["Norman cathedral with stunning mosaics", "Medieval streets exploration", "Coastal views", "La Rocca fortress option"],
                duration: "5 hours",
                cost: "$8"
              }
            ],
            budgetBreakdown: {
              accommodation: 275,
              activities: 53,
              dining: 90,
              transportation: 40
            },
            tips: [
              "Bring cash for market vendors",
              "Cefalù gets crowded - visit early",
              "La Rocca climb optional for seniors"
            ],
            image: "cefalu.jpg",
            imageAlt: "Cefalù Norman cathedral and medieval streets"
          },
          {
            day: "Day 7",
            date: "September 7, 2026",
            location: "Mountain Magic & Ancient Salt",
            baseCity: "Palermo",
            activities: [
              {
                time: "Morning",
                title: "Erice Cable Car Experience",
                description: "Medieval hilltop town with panoramic views and famous almond pastries",
                highlights: ["Medieval stone streets", "Panoramic coastal views", "Famous almond pastries", "Ancient temple foundations"],
                duration: "4 hours",
                cost: "$12"
              },
              {
                time: "Afternoon",
                title: "Trapani Salt Pans",
                description: "2,000-year-old salt production with traditional windmills",
                highlights: ["Ancient salt production methods", "Traditional windmills", "Sunset photography", "Salt museum visit"],
                duration: "3 hours",
                cost: "$5"
              },
              {
                time: "Evening",
                title: "Farewell Palermo Dinner",
                description: "Elegant rooftop restaurant with city views",
                duration: "2 hours",
                cost: "$100"
              }
            ],
            budgetBreakdown: {
              accommodation: 275,
              activities: 17,
              dining: 130,
              transportation: 50
            },
            tips: [
              "Cable car can close in high winds",
              "Salt pans best in late afternoon light",
              "Make dinner reservations for rooftop tables"
            ],
            image: "erice.jpg",
            imageAlt: "Medieval Erice with misty mountain atmosphere"
          }
        ]
      },
      
      {
        title: "Southern Sicily: Syracuse Ancient Finale",
        subtitle: "Days 8-10: Greek Heritage & UNESCO Baroque",
        description: "Conclude with Sicily's greatest ancient Greek sites, charming Ortigia island, and the UNESCO baroque triangle - the perfect historical finale.",
        totalDays: 3,
        baseLocation: "Syracuse",
        highlights: ["Greek Archaeology", "Ortigia Island", "UNESCO Baroque", "Ancient Theaters"],
        totalBudget: 1800,
        days: [
          {
            day: "Day 8",
            date: "September 8, 2026",
            location: "Journey to Syracuse & Ancient Greek Immersion",
            baseCity: "Syracuse",
            accommodation: {
              name: "Grand Hotel Ortigia",
              type: "Waterfront luxury with harbor views",
              pricePerNight: 220
            },
            drivingInfo: {
              from: "Palermo",
              to: "Syracuse",
              distance: "170 miles",
              duration: "3h 15m via scenic route"
            },
            activities: [
              {
                time: "Morning",
                title: "Scenic Drive to Syracuse",
                description: "Beautiful countryside route across central Sicily",
                duration: "4 hours",
                cost: "Gas only"
              },
              {
                time: "Afternoon",
                title: "Neapolis Archaeological Park",
                description: "Greek Theater, Roman Amphitheater, and Ear of Dionysius",
                highlights: ["5th-century BC Greek Theater", "Roman Amphitheater", "Ear of Dionysius acoustic cave", "Paradise Quarry ancient stone quarries"],
                duration: "3 hours",
                cost: "$15"
              },
              {
                time: "Evening",
                title: "Ortigia Island Sunset Stroll",
                description: "Charming island historic center with harbor views",
                duration: "2 hours",
                cost: "Free"
              }
            ],
            budgetBreakdown: {
              accommodation: 220,
              activities: 15,
              dining: 95,
              transportation: 45
            },
            tips: [
              "Break up drive with lunch stop",
              "Archaeological park best in morning light",
              "Ortigia perfect for evening passeggiata"
            ],
            image: "siracusa.jpg",
            imageAlt: "Syracuse Greek Theater and archaeological park"
          },
          {
            day: "Day 9",
            date: "September 9, 2026",
            location: "UNESCO Baroque Triangle Expedition",
            baseCity: "Syracuse",
            activities: [
              {
                time: "Morning",
                title: "Noto - The Stone Garden",
                description: "UNESCO baroque masterpiece with honey-colored limestone architecture",
                highlights: ["Corso Vittorio Emanuele baroque promenade", "Cathedral with restored dome", "Palazzo Nicolaci ornate balconies", "Harmonious baroque urban planning"],
                duration: "3 hours",
                cost: "$5"
              },
              {
                time: "Afternoon",
                title: "Ragusa Ibla - Cliff-side Baroque",
                description: "Dramatic medieval town with spectacular baroque churches",
                highlights: ["Ragusa Ibla winding medieval streets", "Duomo di San Giorgio baroque cathedral", "Panoramic valley views", "Traditional Sicilian atmosphere"],
                duration: "3 hours",
                cost: "$3"
              },
              {
                time: "Evening",
                title: "Return to Syracuse",
                description: "Traditional granita and brioche dessert experience",
                duration: "1 hour",
                cost: "$15"
              }
            ],
            budgetBreakdown: {
              accommodation: 220,
              activities: 23,
              dining: 105,
              transportation: 60
            },
            tips: [
              "Noto beautiful in golden hour light",
              "Ragusa Ibla has steep streets - wear good shoes",
              "Try granita con brioche - Sicilian specialty"
            ],
            image: "noto.jpg",
            imageAlt: "Noto baroque architecture in golden limestone"
          },
          {
            day: "Day 10",
            date: "September 10, 2026",
            location: "Ortigia Island & Roman Mosaics Finale",
            baseCity: "Syracuse",
            activities: [
              {
                time: "Morning",
                title: "Cathedral & Temple of Athena Integration",
                description: "Unique architectural palimpsest - baroque cathedral built inside 5th-century BC Greek temple",
                highlights: ["Ancient Doric columns visible in cathedral walls", "Baroque facade hiding 2,500-year-old temple", "Santa Lucia chapel", "Architectural evolution spanning 25 centuries"],
                duration: "2 hours",
                cost: "$3"
              },
              {
                time: "Mid-Morning",
                title: "Ortigia Island Exploration",
                description: "Arethusa Fountain, local markets, and waterfront charm",
                highlights: ["Arethusa Fountain with papyrus plants", "Temple of Apollo ruins", "Local artisan workshops", "Castello Maniace fortress"],
                duration: "3 hours",
                cost: "$8"
              },
              {
                time: "Afternoon",
                title: "Piazza Armerina Day Trip - Villa Romana del Casale",
                description: "World's finest preserved Roman mosaics including famous 'Bikini Girls'",
                highlights: ["Hall of the Great Hunt - 60-meter hunting scenes", "Room of Ten Maidens - 'Bikini Girls' athletics", "Triclinium Hercules mosaics", "3,500 square meters of perfect mosaics"],
                duration: "4 hours",
                cost: "$12"
              },
              {
                time: "Evening",
                title: "Farewell Dinner with Sicilian Wine Tasting",
                description: "Celebration dinner on Ortigia waterfront with local wine pairings",
                duration: "3 hours",
                cost: "$120"
              }
            ],
            budgetBreakdown: {
              accommodation: 220,
              activities: 23,
              dining: 140,
              transportation: 70
            },
            tips: [
              "Cathedral closes for lunch 12:30-3:30",
              "Villa Romana requires 2-3 hours - don't rush",
              "Book waterfront table for farewell dinner",
              "Villa mosaics are world-class - bring camera"
            ],
            image: "villa_romana_mosaics.jpg",
            imageAlt: "Roman mosaics at Villa Romana del Casale"
          }
        ]
      }
    ],
    
    essentialBookings: [
      {
        item: "Palatine Chapel Tickets",
        reason: "Limited daily visitors - must book in advance online",
        timeline: "Book 6 months ahead"
      },
      {
        item: "Luxury Hotels (Taormina & Palermo)", 
        reason: "Best rooms and rates disappear quickly",
        timeline: "Book 12 months ahead"
      },
      {
        item: "Mount Etna 4x4 Tours",
        reason: "Weather dependent with limited group sizes",
        timeline: "Book 3 months ahead"
      },
      {
        item: "Car Rentals for 6 People",
        reason: "Two vehicles needed - better rates with advance booking",
        timeline: "Book 6 months ahead"
      },
      {
        item: "Flights (Delta via JFK recommended)",
        reason: "Best seat selection and pricing for group travel",
        timeline: "Book 12 months ahead"
      },
      {
        item: "Teatro Massimo Tours",
        reason: "Popular attraction with limited tour times",
        timeline: "Book 1-2 months ahead"
      }
    ]
  };
}