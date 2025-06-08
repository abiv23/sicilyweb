import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-cefalu',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="cefaluData"></app-destination-info-sheet>
  `
})
export class CefaluComponent {
  cefaluData: DestinationInfo = {
    name: 'Cefalù',
    slug: 'cefalu',
    shortDescription: 'Medieval fishing village with magnificent Norman cathedral and pristine beaches beneath dramatic cliffs',
    heroImage: 'cefalu.jpg',
    heroImageAlt: 'Cefalù Norman cathedral and medieval town with dramatic cliff backdrop',
    region: 'Northern Sicily',
    bestTimeToVisit: 'May-September (peak beach season), April & October (fewer crowds)',
    recommendedDuration: '1-2 days',
    specialties: ['Norman Architecture', 'Beach Resort', 'Medieval Streets', 'Seafood'],
    
    distances: [
      { city: 'Palermo', miles: 43, driveTime: '1h' },
      { city: 'Catania', miles: 110, driveTime: '2h' },
      { city: 'Taormina', miles: 140, driveTime: '2h 30m' },
      { city: 'Monreale', miles: 50, driveTime: '1h 15m' },
      { city: 'Trapani', miles: 85, driveTime: '1h 45m' },
      { city: 'Agrigento', miles: 120, driveTime: '2h 15m' },
      { city: 'Siracusa', miles: 150, driveTime: '2h 45m' },
      { city: 'Ragusa', miles: 180, driveTime: '3h' },
      { city: 'Noto', miles: 175, driveTime: '3h' },
      { city: 'Erice', miles: 90, driveTime: '2h' },
      { city: 'Piazza Armerina', miles: 145, driveTime: '2h 30m' },
      { city: 'Gioiosa Marea', miles: 85, driveTime: '1h 30m' }
    ],
    
    activities: [
      {
        title: 'Norman Cathedral (Duomo di Cefalù)',
        description: 'Marvel at one of Sicily\'s most magnificent Norman cathedrals, commissioned by King Roger II in 1131. This UNESCO World Heritage site features stunning Byzantine mosaics, twin towers, and represents the perfect fusion of Norman, Byzantine, and Islamic architectural styles.',
        image: 'cefalu_cathedral_interior.jpg',
        imageAlt: 'Interior of Cefalù Cathedral with golden Byzantine mosaics',
        highlights: [
          'Christ Pantocrator mosaic - one of Sicily\'s finest Byzantine artworks',
          'Twin Norman towers with commanding views over the town',
          'Royal tombs and medieval stone carvings',
          'Cloister with delicate twin columns and carved capitals',
          'Treasury with precious medieval artifacts and vestments'
        ],
        tips: [
          'Visit early morning for best lighting on mosaics',
          'Cathedral closes 12:30-3:30 PM for lunch',
          'Climb the towers for panoramic views (additional fee €3)',
          'Photography allowed but no flash near mosaics'
        ]
      },
      {
        title: 'Medieval Old Town and Corso Ruggero',
        description: 'Wander through Cefalù\'s enchanting medieval streets, where narrow alleys lead to hidden courtyards, artisan workshops, and family-run trattorias. The main street, Corso Ruggero, connects the cathedral to the sea with charming shops and historic palaces.',
        image: 'cefalu_medieval_streets.jpg',
        imageAlt: 'Narrow medieval stone streets of Cefalù old town',
        highlights: [
          'Palazzo Osterio Magno - medieval royal residence ruins',
          'Via del Saraceno with traditional craft shops',
          'Piazza del Duomo - perfect for evening aperitivo',
          'Medieval wash house (Lavatoio) fed by natural springs',
          'Arab-Norman archways and stone doorways'
        ],
        tips: [
          'Best explored on foot - wear comfortable shoes',
          'Many shops close 1-4 PM for siesta',
          'Evening passeggiata (5-7 PM) is magical',
          'Try local ceramics and handmade lacework'
        ]
      },
      {
        title: 'La Rocca Fortress Hike',
        description: 'Climb the dramatic cliff fortress (La Rocca) that towers 270 meters above Cefalù. This ancient megalithic site offers breathtaking panoramic views of the coast, town, and Madonie Mountains. The ruins include a pre-Roman temple and medieval fortifications.',
        image: 'cefalu_la_rocca_view.jpg',
        imageAlt: 'Panoramic view from La Rocca fortress overlooking Cefalù and coastline',
        highlights: [
          'Temple of Diana - mysterious pre-Roman megalithic ruins',
          '360-degree views of the Tyrrhenian coast',
          'Medieval castle ruins and defensive walls',
          'Sunset photography opportunities',
          'Wildflower meadows in spring (March-May)'
        ],
        tips: [
          'Moderate hike - allow 1.5-2 hours round trip',
          'Bring water and wear sturdy shoes',
          'Best times: early morning or 2 hours before sunset',
          'Free entrance, open dawn to dusk',
          'Can be windy at the top - bring light jacket'
        ]
      },
      {
        title: 'Beach Life and Coastal Activities',
        description: 'Enjoy Cefalù\'s pristine sandy beach, consistently rated among Sicily\'s best. The crescent-shaped bay offers calm, crystal-clear waters perfect for swimming, with the dramatic backdrop of the Norman cathedral and medieval town.',
        image: 'cefalu_beach_cathedral.jpg',
        imageAlt: 'Cefalù beach with cathedral and medieval town backdrop',
        highlights: [
          'Main beach (Spiaggia di Cefalù) with golden sand',
          'Beach clubs with umbrellas, loungers, and restaurants',
          'Water sports: kayaking, paddleboarding, snorkeling',
          'Boat trips to hidden coves and Aeolian Islands',
          'Beachfront promenade perfect for evening strolls'
        ],
        tips: [
          'Beach gets crowded July-August - arrive early',
          'Free beach areas available east of the main beach',
          'Beach clubs charge €15-25 for umbrella and 2 chairs',
          'Water temperature perfect May-October',
          'Sunset views best from western end of beach'
        ]
      },
      {
        title: 'Sicilian Culinary Experiences',
        description: 'Cefalù offers exceptional seafood dining with restaurants specializing in fresh catches from the Tyrrhenian Sea. The town\'s coastal location provides access to both mountain and sea ingredients, creating a unique culinary fusion.',
        image: 'cefalu_seafood_restaurant.jpg',
        imageAlt: 'Fresh seafood platter at Cefalù seaside restaurant',
        highlights: [
          'Fresh swordfish, tuna, and sea bream daily specials',
          'Traditional pasta con le sarde (sardines and wild fennel)',
          'Local anchovy and caper specialties',
          'Gelaterias with unique Sicilian flavors',
          'Wine bars featuring Sicilian regional wines'
        ],
        tips: [
          'Restaurants with sea views: book sunset dinner reservations',
          'Try granita con brioche for authentic Sicilian breakfast',
          'Local markets (Wednesday mornings) for fresh produce',
          'Avoid tourist traps near cathedral - explore side streets',
          'Lunch typically served 12:30-2:30 PM, dinner after 7:30 PM'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Limited parking in old town. Use Parcheggio Comunale near train station (€1/hour) or free parking outside town center with 10-minute walk.',
      accessibility: 'Old town has many stairs and cobblestones. Beach level areas are accessible. Cathedral has ramp access. La Rocca hike not suitable for mobility issues.',
      costs: 'Cathedral: €3. La Rocca: Free. Beach clubs: €15-25. Restaurants: €20-40 per person. Museums: €3-5.',
      booking: 'No advance booking needed for attractions. Beach club and restaurant reservations recommended July-August, especially sunset dining.'
    }
  };

  constructor() {
    // Component initialization
  }
}