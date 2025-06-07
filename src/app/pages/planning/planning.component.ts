import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
          <h2 class="text-3xl font-bold mb-6 text-dark-text">🗓️ Tentative Itinerary Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-sicilian-sea/30 p-6 rounded-xl border border-sicilian-sea/50">
              <h4 class="font-bold text-sicilian-sea mb-3">Days 1-3: Eastern Sicily</h4>
              <ul class="text-dark-text-secondary space-y-1 text-sm">
                <li>• Arrive in Catania</li>
                <li>• Taormina & Greek Theater</li>
                <li>• Mount Etna excursion</li>
                <li>• Wine tasting experience</li>
              </ul>
            </div>
            <div class="bg-italian-green/30 p-6 rounded-xl border border-italian-green/50">
              <h4 class="font-bold text-italian-green-light mb-3">Days 4-6: Central Sicily</h4>
              <ul class="text-dark-text-secondary space-y-1 text-sm">
                <li>• Syracuse & Ortigia Island</li>
                <li>• Noto baroque architecture</li>
                <li>• Ragusa Ibla exploration</li>
                <li>• Villa del Casale mosaics</li>
              </ul>
            </div>
            <div class="bg-sicilian-wine/30 p-6 rounded-xl border border-sicilian-wine/50">
              <h4 class="font-bold text-italian-red-light mb-3">Days 7-9: Western Sicily</h4>
              <ul class="text-dark-text-secondary space-y-1 text-sm">
                <li>• Valley of Temples, Agrigento</li>
                <li>• Palermo city highlights</li>
                <li>• Norman Palace & Cappella Palatina</li>
                <li>• Beach resort relaxation</li>
              </ul>
            </div>
          </div>
        </mat-card>

        <!-- Preview of coming attractions -->
        <mat-card class="p-8 bg-sicilian-gradient text-white shadow-xl text-center">
          <h3 class="text-3xl font-bold mb-4">🏛️ Complete Detailed Itinerary</h3>
          <p class="text-white/90 mb-6 text-lg leading-relaxed">
            The full itinerary will include daily schedules, restaurant recommendations, 
            museum booking details, and specific luxury experiences throughout Sicily.
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
              <strong class="text-sicilian-gold">🚀 Coming Soon:</strong> Detailed daily schedules with times, locations, and booking information!
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
export class PlanningComponent {}