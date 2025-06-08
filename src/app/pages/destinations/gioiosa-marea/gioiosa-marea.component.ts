import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-gioiosa-marea',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="gioiosaMareaData"></app-destination-info-sheet>
  `
})
export class GioiosaMareaComponent {
  gioiosaMareaData: DestinationInfo = {
    name: 'Gioiosa Marea',
    slug: 'gioiosa-marea',
    shortDescription: 'Charming coastal town with family connections and spectacular views of the volcanic Aeolian Islands',
    heroImage: 'gioiosa_marea.png',
    heroImageAlt: 'Gioiosa Marea coastline with Aeolian Islands visible in the distance',
    region: 'Northern Sicily (Messina Province)',
    bestTimeToVisit: 'May-October (warm weather), April & November (mild temperatures, fewer crowds)',
    recommendedDuration: '1-2 days (perfect for family connections and relaxation)',
    specialties: ['Family Heritage', 'Aeolian Island Views', 'Fishing Village', 'Beach Life'],
    
    distances: [
      { city: 'Messina', miles: 35, driveTime: '45m' },
      { city: 'Taormina', miles: 40, driveTime: '1h' },
      { city: 'Catania', miles: 80, driveTime: '1h 30m' },
      { city: 'Cefalù', miles: 85, driveTime: '1h 30m' },
      { city: 'Palermo', miles: 120, driveTime: '2h 15m' },
      { city: 'Milazzo (ferry to Aeolian Islands)', miles: 25, driveTime: '35m' },
      { city: 'Siracusa', miles: 140, driveTime: '2h 30m' },
      { city: 'Ragusa', miles: 170, driveTime: '3h' },
      { city: 'Agrigento', miles: 185, driveTime: '3h 30m' },
      { city: 'Trapani', miles: 200, driveTime: '3h 45m' },
      { city: 'Erice', miles: 205, driveTime: '3h 50m' },
      { city: 'Monreale', miles: 125, driveTime: '2h 20m' }
    ],
    
    activities: [
      {
        title: 'Family Heritage and Local Connections',
        description: 'Discover the personal family history that connects your group to this authentic Sicilian coastal community. Gioiosa Marea offers a unique opportunity to experience Sicily through the lens of family heritage, exploring ancestral neighborhoods and meeting local families who have preserved traditions for generations.',
        image: 'gioiosa_family_heritage.jpg',
        imageAlt: 'Traditional family gathering in Gioiosa Marea with local residents',
        highlights: [
          'Visit ancestral family neighborhoods and historic properties',
          'Meet with local families who share historical connections',
          'Explore the town cemetery and historical records',
          'Traditional family-style meals with local residents',
          'Stories and oral histories passed down through generations'
        ],
        tips: [
          'Arrange family meetings in advance through local contacts',
          'Bring family photos and documents to share',
          'Learn key Italian phrases for meaningful conversations',
          'Consider hiring a local translator if needed',
          'Traditional gifts from America are always appreciated'
        ]
      },
      {
        title: 'Aeolian Islands Panoramic Views',
        description: 'Gioiosa Marea\'s elevated coastal position provides some of Sicily\'s most spectacular views of the volcanic Aeolian Islands archipelago. On clear days, you can see Vulcano, Lipari, Salina, and other islands rising dramatically from the Tyrrhenian Sea.',
        image: 'gioiosa_aeolian_view.jpg',
        imageAlt: 'Panoramic view of Aeolian Islands from Gioiosa Marea coastline',
        highlights: [
          'Vulcano Island with active volcanic crater clearly visible',
          'Lipari - largest island with white pumice quarries',
          'Salina\'s twin volcanic peaks and green terraces',
          'Stromboli\'s volcanic glow visible at night (weather permitting)',
          'Sunset photography with islands silhouetted against sky'
        ],
        tips: [
          'Best views from elevated areas above the town center',
          'Early morning offers clearest visibility to islands',
          'Bring binoculars for detailed island observation',
          'Sunset viewpoints: Capo Calavà and coastal terraces',
          'Weather apps help predict clear viewing days'
        ]
      },
      {
        title: 'Traditional Fishing Village Life',
        description: 'Experience authentic Sicilian coastal life in this working fishing village. Gioiosa Marea maintains its traditional character with local fishermen bringing daily catches, family-run trattorias, and a slower pace of life that represents the real Sicily.',
        image: 'gioiosa_fishing_boats.jpg',
        imageAlt: 'Traditional fishing boats in Gioiosa Marea harbor with nets and equipment',
        highlights: [
          'Morning fish market with daily catches from local boats',
          'Traditional fishing techniques still practiced by local families',
          'Seasonal fishing calendar: tuna, swordfish, sardines, anchovies',
          'Family-run restaurants serving ultra-fresh seafood',
          'Authentic Sicilian pace of life and village traditions'
        ],
        tips: [
          'Fish market best visited 6-8 AM when boats return',
          'Ask fishermen about their catches - most love to share stories',
          'Restaurants often prepare daily catch not on written menus',
          'Siesta time 1-4 PM - plan activities accordingly',
          'Evening passeggiata (5-7 PM) is perfect for village exploration'
        ]
      },
      {
        title: 'Beach Life and Coastal Relaxation',
        description: 'Enjoy peaceful beaches with pebbles and crystal-clear waters, far from tourist crowds. Gioiosa Marea\'s coastline offers intimate coves, rocky swimming areas, and family-friendly beaches with the constant backdrop of the majestic Aeolian Islands.',
        image: 'gioiosa_beach_islands.jpg',
        imageAlt: 'Peaceful beach at Gioiosa Marea with Aeolian Islands in background',
        highlights: [
          'Capo Calavà beach with dramatic coastal cliffs',
          'Protected coves perfect for swimming and snorkeling',
          'Pebble beaches with exceptionally clear water',
          'Beach clubs with local Sicilian atmosphere',
          'Coastal walking paths with panoramic sea views'
        ],
        tips: [
          'Beach shoes recommended for pebble areas',
          'Less crowded than major tourist beaches',
          'Local beach clubs very reasonably priced',
          'Best swimming May through October',
          'Afternoon sea breezes provide natural cooling'
        ]
      },
      {
        title: 'Day Trips to Aeolian Islands',
        description: 'Use Gioiosa Marea as a base for exploring the UNESCO World Heritage Aeolian Islands. The nearby port of Milazzo offers regular ferry and hydrofoil services to these volcanic islands, each with unique character and attractions.',
        image: 'aeolian_islands_ferry.jpg',
        imageAlt: 'Ferry approaching Aeolian Islands with volcanic peaks visible',
        highlights: [
          'Vulcano - therapeutic mud baths and volcanic crater hikes',
          'Lipari - largest island with archaeological museum and beaches',
          'Stromboli - active volcano with nighttime lava shows',
          'Salina - green island famous for capers and Malvasia wine',
          'Panarea - chic island with upscale beach clubs'
        ],
        tips: [
          'Drive to Milazzo port (25 minutes) for ferry connections',
          'Book return tickets in advance during summer',
          'Vulcano day trip: 3-4 hours including mud baths',
          'Stromboli night tours available (volcano permitting)',
          'Island hopping packages available from Milazzo'
        ]
      },
      {
        title: 'Local Cuisine and Family Traditions',
        description: 'Experience authentic Sicilian home cooking and family food traditions in this genuine coastal community. Local restaurants serve recipes passed down through generations, emphasizing ultra-fresh seafood and traditional Sicilian ingredients.',
        image: 'gioiosa_family_meal.jpg',
        imageAlt: 'Traditional Sicilian family meal with fresh seafood and local wine',
        highlights: [
          'Ultra-fresh swordfish, tuna, and sardine preparations',
          'Traditional pasta con le sarde with wild fennel',
          'Local Sicilian wines from nearby Mamertino region',
          'Family-style dining in homes and local trattorias',
          'Seasonal specialties based on daily fishing catches'
        ],
        tips: [
          'Family meals often arranged through local connections',
          'Restaurant menus change based on daily fish catches',
          'Local olive oil and wine make excellent gifts',
          'Breakfast typically light - espresso and cornetto',
          'Dinner served late (8:30-9:30 PM) in true Sicilian style'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Free street parking throughout town. No parking restrictions in most areas. Beach parking available near coastal access points.',
      accessibility: 'Town center is relatively flat and walkable. Beaches require some walking on uneven paths. Family homes vary in accessibility.',
      costs: 'Very reasonable - local restaurants €12-20 per person. Beach clubs €5-10. Ferry to Aeolian Islands €15-25. Family visits: typically gifts/contributions.',
      booking: 'Family visits should be arranged in advance. Restaurant reservations recommended for weekend dinners. Ferry tickets can be purchased same-day except peak summer.'
    }
  };

  constructor() {
    // Component initialization
  }
}