import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationsDataService, DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-catania',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="cataniaData"></app-destination-info-sheet>
  `
})
export class CataniaComponent {
  cataniaData: DestinationInfo;

  constructor(private destinationsService: DestinationsDataService) {
    this.cataniaData = {
      name: 'Catania',
      slug: 'catania',
      shortDescription: 'Baroque UNESCO city rebuilt after Mount Etna eruptions with vibrant markets and volcanic architecture',
      heroImage: 'catania.jpg',
      heroImageAlt: 'Catania Cathedral and baroque architecture with Mount Etna in background',
      region: 'Eastern Sicily',
      bestTimeToVisit: 'April-June, September-November',
      recommendedDuration: '2-3 days',
      specialties: ['Baroque Architecture', 'Fish Markets', 'Street Food', 'Volcanic Stone'],
      
      distances: this.destinationsService.getDistancesFrom('catania'),
      
      activities: [
        {
          title: 'Explore Catania Fish Market',
          description: 'Experience one of Italy\'s most vibrant and authentic markets. The Catania fish market (La Pescheria) is a sensory explosion of fresh seafood, local vendors, and centuries-old traditions in the heart of the baroque city.',
          image: 'catania_fish_market.jpg',
          imageAlt: 'Bustling Catania fish market with fresh seafood displays',
          highlights: [
            'Fresh swordfish, tuna, and local Mediterranean catches',
            'Traditional Sicilian street food vendors',
            'Historic market atmosphere dating back centuries',
            'Local cheese and produce stalls nearby',
            'Perfect for authentic cultural immersion'
          ],
          tips: [
            'Visit early morning (7-10 AM) for best selection',
            'Bring cash - most vendors don\'t accept cards',
            'Try arancini and fresh ricotta from nearby stalls'
          ]
        },
        {
          title: 'Discover Baroque Cathedral and Piazza Duomo',
          description: 'Catania\'s cathedral, dedicated to Saint Agatha, showcases stunning baroque architecture rebuilt after the 1693 earthquake. The piazza features the famous elephant fountain (Liotru), the city\'s symbol.',
          image: 'catania_cathedral.jpg',
          imageAlt: 'Catania Cathedral baroque facade with elephant fountain',
          highlights: [
            'Saint Agatha\'s tomb and chapel with precious artifacts',
            'Baroque facade by Giovanni Battista Vaccarini',
            'Liotru elephant fountain made from volcanic stone',
            'Underground Roman thermal baths',
            'Panoramic views from cathedral bell tower'
          ],
          tips: [
            'Cathedral closes 12:30-4 PM for lunch break',
            'Modest dress required for church visit',
            'Climb the bell tower for Mount Etna views (€2)'
          ]
        },
        {
          title: 'Roman Theater and Archaeological Sites',
          description: 'Discover Catania\'s ancient Roman heritage with remarkably preserved theaters and thermal baths. The Roman Theater, carved from volcanic stone, once seated 7,000 spectators.',
          image: 'catania_roman_theater.jpg',
          imageAlt: 'Ancient Roman theater ruins in central Catania',
          highlights: [
            'Roman Theater (Teatro Romano) with original seating',
            'Adjacent Odeon for musical performances',
            'Roman thermal baths (Terme Achilliane)',
            'Amphitheater ruins near Piazza Stesicoro',
            'Archaeological museum with artifacts'
          ],
          tips: [
            'Combined ticket covers multiple Roman sites (€6)',
            'Free entry first Sunday of each month',
            'Best lighting for photos in late afternoon'
          ]
        },
        {
          title: 'Via Etnea Shopping and Baroque Palaces',
          description: 'Stroll down Catania\'s main boulevard, Via Etnea, lined with baroque palaces, designer shops, and historic cafés. This elegant street leads directly toward Mount Etna with stunning volcano views.',
          image: 'catania_via_etnea.jpg',
          imageAlt: 'Via Etnea street with baroque buildings and Mount Etna view',
          highlights: [
            'Palazzo degli Elefanti (City Hall) with baroque details',
            'Historic Caffè del Duomo for granita and brioche',
            'Designer boutiques and local artisan shops',
            'Bellini Garden (Villa Bellini) for relaxation',
            'Clear Mount Etna views on sunny days'
          ],
          tips: [
            'Early evening (5-7 PM) is perfect for passeggiata',
            'Try cannoli at Savia pastry shop',
            'Free WiFi available in many cafés'
          ]
        }
      ],
      
      practicalInfo: {
        parking: 'Limited street parking in historic center. Use Parcheggio AMT Via Etnea or park near Bellini Garden and walk.',
        accessibility: 'Historic center has cobblestone streets. Main attractions have ramp access. Roman Theater not wheelchair accessible.',
        costs: 'Cathedral: Free. Roman sites: €6 combined ticket. Markets: Free to browse. Restaurants: €15-30 per person.',
        booking: 'No advance booking needed for most attractions. Restaurant reservations recommended for dinner.'
      }
    };
  }
}