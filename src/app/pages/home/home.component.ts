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
            autoplay-delay="4000"
            loop="true"
            effect="fade"
            class="h-full w-full">
            
            @for (image of carouselImages; track image.url) {
              <swiper-slide>
                <div class="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                     [style.background-image]="'url(' + image.url + ')'">
                  <div class="absolute bottom-16 left-16 right-16 bg-gradient-to-r from-black/80 to-black/40 p-8 rounded-2xl backdrop-blur-md border border-white/20">
                    <h2 class="text-white text-4xl font-bold mb-4 drop-shadow-lg">{{ image.title }}</h2>
                    <p class="text-white/90 text-xl leading-relaxed">{{ image.description }}</p>
                  </div>
                </div>
              </swiper-slide>
            }
          </swiper-container>
        } @else {
          <!-- SSR Fallback -->
          <div class="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
               [style.background-image]="'url(' + carouselImages[0].url + ')'">
            <div class="absolute bottom-16 left-16 right-16 bg-gradient-to-r from-black/80 to-black/40 p-8 rounded-2xl backdrop-blur-md border border-white/20">
              <h2 class="text-white text-4xl font-bold mb-4 drop-shadow-lg">{{ carouselImages[0].title }}</h2>
              <p class="text-white/90 text-xl leading-relaxed">{{ carouselImages[0].description }}</p>
            </div>
          </div>
        }
        
        <!-- Hero Text Overlay -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center text-white bg-gradient-to-br from-black/70 to-black/40 p-12 rounded-3xl backdrop-blur-lg border-2 border-white/30 max-w-4xl mx-4">
            <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl">
              Sicily Family Adventure
            </h1>
            <p class="text-2xl mb-8 text-white/95 drop-shadow-lg">
              September 1-11, 2026 • An unforgettable journey through Sicily's ancient wonders
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button mat-raised-button 
                      routerLink="/planning"
                      class="!bg-gradient-to-r !from-sicily-blue !to-sicily-purple !text-white !px-8 !py-4 !text-lg !font-bold !rounded-full hover:!shadow-2xl hover:!scale-105 !transition-all !duration-300">
                🗺️ View Trip Planning
              </button>
              <button mat-raised-button 
                      routerLink="/language"
                      class="!bg-gradient-to-r !from-pink-400 !to-red-500 !text-white !px-8 !py-4 !text-lg !font-bold !rounded-full hover:!shadow-2xl hover:!scale-105 !transition-all !duration-300">
                🗣️ Learn Italian
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sicily-blue to-sicily-purple bg-clip-text text-transparent">
          Your Complete Sicily Experience
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <mat-card class="!p-8 !rounded-3xl hover:!shadow-2xl !transition-all !duration-300 hover:!-translate-y-2 cursor-pointer !border-2 hover:!border-sicily-blue"
                    routerLink="/planning">
            <div class="text-6xl text-center mb-6">🏛️</div>
            <mat-card-header class="!pb-4">
              <mat-card-title class="!text-2xl !font-bold !text-center !text-gray-800">Detailed Itinerary</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                10-day journey through UNESCO sites, baroque cities, Mount Etna, and luxury experiences inspired by premium tour operators.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-gradient-to-r from-sicily-blue to-sicily-purple text-white px-4 py-2 rounded-full text-sm font-medium">Valley of Temples</span>
                <span class="bg-gradient-to-r from-sicily-blue to-sicily-purple text-white px-4 py-2 rounded-full text-sm font-medium">Mount Etna</span>
                <span class="bg-gradient-to-r from-sicily-blue to-sicily-purple text-white px-4 py-2 rounded-full text-sm font-medium">Taormina</span>
              </div>
            </mat-card-content>
          </mat-card>
          
          <mat-card class="!p-8 !rounded-3xl hover:!shadow-2xl !transition-all !duration-300 hover:!-translate-y-2 cursor-pointer !border-2 hover:!border-pink-500"
                    routerLink="/language">
            <div class="text-6xl text-center mb-6">🗣️</div>
            <mat-card-header class="!pb-4">
              <mat-card-title class="!text-2xl !font-bold !text-center !text-gray-800">Italian Language Prep</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                Complete guide to learning Italian in 1.5 years with resources, pricing, and Sicily-specific cultural tips.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">Essential Phrases</span>
                <span class="bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">Duolingo & Pimsleur</span>
                <span class="bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">Cultural Tips</span>
              </div>
            </mat-card-content>
          </mat-card>
          
          <mat-card class="!p-8 !rounded-3xl hover:!shadow-2xl !transition-all !duration-300 hover:!-translate-y-2 !border-2 hover:!border-green-500">
            <div class="text-6xl text-center mb-6">✈️</div>
            <mat-card-header class="!pb-4">
              <mat-card-title class="!text-2xl !font-bold !text-center !text-gray-800">Travel Logistics</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-gray-600 text-center text-lg leading-relaxed mb-6">
                Flight recommendations, car rentals for 6 adults, accommodation booking tips, and practical information.
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Delta Flights</span>
                <span class="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">4-Star Hotels</span>
                <span class="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Senior-Friendly</span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="py-20 bg-hero-gradient text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16 text-yellow-300">Sicily Highlights</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-yellow-300">🏛️ UNESCO World Heritage Sites</h4>
            <p class="text-white/90 leading-relaxed">Syracuse, Noto, Ragusa Ibla, Piazza Armerina, Valley of Temples, Mount Etna</p>
          </div>
          
          <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-yellow-300">🍷 Culinary Experiences</h4>
            <p class="text-white/90 leading-relaxed">Volcanic soil wines, granita & brioche, cooking classes, street food tours</p>
          </div>
          
          <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-yellow-300">🌟 Luxury Touches</h4>
            <p class="text-white/90 leading-relaxed">Private palazzo visits, exclusive vineyard tastings, after-hours museum access</p>
          </div>
          
          <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <h4 class="text-2xl font-bold mb-4 text-yellow-300">👥 Family-Friendly</h4>
            <p class="text-white/90 leading-relaxed">Comfortable pace for ages 40-80, 4-star accommodations, manageable distances</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Custom swiper styles */
    swiper-container {
      --swiper-theme-color: #ffffff;
      --swiper-pagination-color: #ffffff;
      --swiper-navigation-color: #ffffff;
    }

    @media (max-width: 768px) {
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .hero-text p {
        font-size: 1.1rem;
      }
      
      .slide-overlay {
        bottom: 30px;
        left: 30px;
        right: 30px;
        padding: 20px;
      }
      
      .slide-title {
        font-size: 1.8rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  carouselImages: CarouselImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73273?w=1920&q=80',
      title: 'Valley of the Temples',
      description: 'Ancient Greek temples in Agrigento, one of the world\'s largest archaeological sites dating to 581 BC'
    },
    {
      url: 'https://images.unsplash.com/photo-1602673221577-20b6b4d79b06?w=1920&q=80',
      title: 'Mount Etna',
      description: 'Europe\'s highest active volcano - UNESCO World Heritage Site with volcanic wines and lunar landscapes'
    },
    {
      url: 'https://images.unsplash.com/photo-1566992863596-c3c1b6d84e11?w=1920&q=80',
      title: 'Taormina Greek Theater',
      description: 'Ancient amphitheater with stunning views over the Ionian Sea and Mount Etna in the distance'
    },
    {
      url: 'https://images.unsplash.com/photo-1558549395-5fc99a40c1d0?w=1920&q=80',
      title: 'Syracuse & Ortigia',
      description: 'Baroque architecture and ancient history where Greek civilization once flourished in Sicily'
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
      title: 'Sicilian Coastline',
      description: 'Crystal-clear Mediterranean waters and dramatic cliffs along Sicily\'s stunning coastline'
    },
    {
      url: 'https://images.unsplash.com/photo-1592831167740-86063de0e1d0?w=1920&q=80',
      title: 'Palermo Streets',
      description: 'Vibrant markets, Norman palaces, and authentic street food in Sicily\'s cultural capital'
    }
  ];

  ngOnInit() {
    // Register Swiper elements only in browser
    if (this.isBrowser) {
      import('swiper/element/bundle').then(() => {
        // Swiper elements are now registered
      });
    }
  }

  ngOnDestroy() {
    // Cleanup if needed
  }
}