import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface CarouselImage {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section with Carousel -->
    <section class="relative h-screen min-h-[600px] overflow-hidden">
      <div class="relative h-full w-full">
        @if (isBrowser) {
          <swiper-container
            #swiperRef
            slides-per-view="1"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            autoplay="true"
            autoplay-delay="5000"
            loop="true"
            effect="fade"
            class="h-full w-full">
            
            @for (image of carouselImages; track image.url) {
              <swiper-slide>
                <div class="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                     [style.background-image]="'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + image.url + ')'">
                  <div class="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-2xl">
                    <h2 class="text-white text-4xl font-bold mb-4">{{ image.title }}</h2>
                    <p class="text-white/90 text-xl leading-relaxed">{{ image.description }}</p>
                  </div>
                </div>
              </swiper-slide>
            }
          </swiper-container>
        } @else {
          <!-- SSR Fallback -->
          <div class="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
               [style.background-image]="'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + carouselImages[0].url + ')'">
            <div class="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-2xl">
              <h2 class="text-white text-4xl font-bold mb-4">{{ carouselImages[0].title }}</h2>
              <p class="text-white/90 text-xl leading-relaxed">{{ carouselImages[0].description }}</p>
            </div>
          </div>
        }
        
        <!-- Hero Text Overlay -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center text-white bg-black/70 backdrop-blur-md p-12 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-4">
            <h1 class="text-6xl font-bold mb-6 text-white">
              Sicily Family Adventure
            </h1>
            <p class="text-2xl mb-8 text-white/90">
              September 1-11, 2026 • An unforgettable journey through Sicily's ancient wonders
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button mat-raised-button 
                      routerLink="/planning"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300">
                🗺️ View Trip Planning
              </button>
              <button mat-raised-button 
                      routerLink="/language"
                      class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300">
                🗣️ Learn Italian
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-slate-800">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16 text-white">
          Your Complete Sicily Experience
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <mat-card class="p-8 bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200"
                    routerLink="/planning">
            <div class="text-6xl text-center mb-6">🏛️</div>
            <mat-card-header class="pb-4">
              <mat-card-title class="text-2xl font-bold text-center text-gray-800">Detailed Itinerary</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                10-day journey through UNESCO sites, baroque cities, Mount Etna and luxury experiences inspired by premium tour operators.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Valley of Temples</span>
                <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Mount Etna</span>
                <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Taormina</span>
              </div>
            </mat-card-content>
          </mat-card>
          
          <mat-card class="p-8 bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200"
                    routerLink="/language">
            <div class="text-6xl text-center mb-6">🗣️</div>
            <mat-card-header class="pb-4">
              <mat-card-title class="text-2xl font-bold text-center text-gray-800">Italian Language Prep</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                Complete guide to learning Italian in 1.5 years with resources, pricing, and Sicily-specific cultural tips.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Essential Phrases</span>
                <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Duolingo & Pimsleur</span>
                <span class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Cultural Tips</span>
              </div>
            </mat-card-content>
          </mat-card>
          
          <mat-card class="p-8 bg-white text-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
            <div class="text-6xl text-center mb-6">✈️</div>
            <mat-card-header class="pb-4">
              <mat-card-title class="text-2xl font-bold text-center text-gray-800">Travel Logistics</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                Flight recommendations, car rentals for 6 adults, accommodation booking tips, and practical information.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">Delta Flights</span>
                <span class="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">4-Star Hotels</span>
                <span class="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Senior-Friendly</span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Sicily Highlights Section -->
    <section class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16">Sicily Highlights</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div class="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-blue-400">🏛️ UNESCO World Heritage Sites</h4>
            <p class="text-gray-200 leading-relaxed">Syracuse, Noto, Ragusa Ibla, Piazza Armerina, Valley of Temples, Mount Etna</p>
          </div>
          
          <div class="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-red-400">🍷 Culinary Experiences</h4>
            <p class="text-gray-200 leading-relaxed">Volcanic soil wines, granita & brioche, cooking classes, street food tours</p>
          </div>
          
          <div class="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-yellow-400">🌟 Luxury Touches</h4>
            <p class="text-gray-200 leading-relaxed">Private palazzo visits, exclusive vineyard tastings, after-hours museum access</p>
          </div>
          
          <div class="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-green-400">👥 Family-Friendly</h4>
            <p class="text-gray-200 leading-relaxed">Comfortable pace for ages 40-80, 4-star accommodations, manageable distances</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Custom swiper styles */
    swiper-container {
      --swiper-theme-color: #3b82f6;
      --swiper-pagination-color: #3b82f6;
      --swiper-navigation-color: #ffffff;
      --swiper-navigation-size: 44px;
    }

    .mat-mdc-card {
      background: white !important;
      color: #374151 !important;
    }

    .mat-mdc-card-title {
      color: #374151 !important;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem !important;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

carouselImages: CarouselImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1594136789908-8d05ebfa88f2?w=1920&q=80',
    title: 'Valley of the Temples',
    description: 'Ancient Greek temples in Agrigento, one of the world\'s largest archaeological sites dating to 581 BC'
  },
  {
    url: 'https://images.unsplash.com/photo-1610056494052-6a4f569a3476?w=1920&q=80',
    title: 'Mount Etna',
    description: 'Europe\'s highest active volcano - UNESCO World Heritage Site with volcanic wines and lunar landscapes'
  },
  {
    url: 'https://images.unsplash.com/photo-1624969862293-84d619f7c46c?w=1920&q=80',
    title: 'Taormina Greek Theater',
    description: 'Ancient amphitheater with stunning views over the Ionian Sea and Mount Etna in the distance'
  },
  {
    url: 'https://images.unsplash.com/photo-1591017939771-29e8c7024c84?w=1920&q=80',
    title: 'Syracuse & Ortigia',
    description: 'Baroque architecture and ancient history where Greek civilization once flourished in Sicily'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    title: 'Sicilian Coastline',
    description: 'Crystal-clear Mediterranean waters and dramatic cliffs along Sicily\'s stunning coastline'
  },
  {
    url: 'https://images.unsplash.com/photo-1559058775-dfcc32339444?w=1920&q=80',
    title: 'Palermo Streets',
    description: 'Vibrant markets, Norman palaces, and authentic street food in Sicily\'s cultural capital'
  }
];

  ngOnInit(): void {
    // Register Swiper elements only in browser
    if (this.isBrowser) {
      import('swiper/element/bundle').then(() => {
        // Swiper elements are now registered
      });
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }
}