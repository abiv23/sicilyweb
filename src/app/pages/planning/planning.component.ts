import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="min-h-screen bg-card-gradient py-8">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="bg-hero-gradient text-white p-12 rounded-3xl text-center mb-8 shadow-2xl">
          <h1 class="text-5xl font-bold mb-4">🇮🇹 Sicily Family Adventure</h1>
          <div class="text-xl opacity-90">September 1-11, 2026 • 5-6 Adults • Budget: ~$7,000 per person</div>
        </div>

        <mat-card class="!p-8 !rounded-2xl !shadow-xl mb-8">
          <h2 class="text-3xl font-bold mb-6 text-gray-800">🏛️ Travel Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p class="mb-3"><strong>Group:</strong> 5-6 adults (3-4 ages 40-48, 2 ages 78-80)</p>
              <p class="mb-3"><strong>Duration:</strong> 10-11 days including travel days</p>
              <p class="mb-3"><strong>Departure:</strong> First or second week of September 2026</p>
            </div>
            <div>
              <p class="mb-3"><strong>Budget:</strong> Approximately $7,000 per person (excluding airfare)</p>
              <p class="mb-3"><strong>Accommodations:</strong> 4-star hotels, centrally located, with one beach resort stay</p>
            </div>
          </div>
        </mat-card>

        <mat-card class="!p-8 !rounded-2xl !shadow-xl mb-8">
          <h2 class="text-3xl font-bold mb-6 text-gray-800">✈️ Flight Information</h2>
          <div class="bg-yellow-50 p-6 rounded-xl mb-6">
            <strong class="text-lg">Best Flight Options (1 layover only):</strong>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-green-50 p-6 rounded-xl">
              <h3 class="font-bold text-xl mb-4 text-green-800">Delta Option (Recommended)</h3>
              <ul class="space-y-2">
                <li><strong>Departure:</strong> 7:10 AM MT from Denver</li>
                <li><strong>Layover:</strong> JFK (4 hours)</li>
                <li><strong>Departure from JFK:</strong> 4:45 PM</li>
                <li><strong>Arrival in Catania:</strong> 7:55 AM local</li>
                <li class="text-green-700"><strong>Advantage:</strong> More reasonable departure time</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-6 rounded-xl">
              <h3 class="font-bold text-xl mb-4 text-orange-800">Lufthansa Option</h3>
              <ul class="space-y-2">
                <li><strong>Layover:</strong> Munich (2 hours)</li>
                <li><strong>Arrival:</strong> 2:00 AM MT</li>
                <li><strong>Departure:</strong> 4:00 AM MT</li>
                <li class="text-orange-700"><strong>Disadvantage:</strong> Very early departure</li>
              </ul>
            </div>
          </div>
        </mat-card>

        <div class="text-center">
          <p class="text-gray-600 mb-4">This is a preview of the planning page.</p>
          <p class="text-gray-600">Full itinerary with daily activities, hotels, and logistics coming soon!</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PlanningComponent {}