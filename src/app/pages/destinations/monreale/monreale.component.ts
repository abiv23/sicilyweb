import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-monreale',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="monrealeData"></app-destination-info-sheet>
  `
})
export class MonrealeComponent {
  monrealeData: DestinationInfo = {
    name: 'Monreale',
    slug: 'monreale',
    shortDescription: 'Stunning Norman cathedral with golden Byzantine mosaics overlooking Palermo\'s Conca d\'Oro valley',
    heroImage: 'monreale.jpg',
    heroImageAlt: 'Monreale Cathedral with golden mosaics and Norman architecture',
    region: 'Western Sicily (Palermo Province)',
    bestTimeToVisit: 'April-June, September-October (ideal lighting), November-March (fewer crowds)',
    recommendedDuration: 'Half day to full day',
    specialties: ['Byzantine Mosaics', 'Norman Architecture', 'UNESCO Heritage', 'Panoramic Views'],
    
    distances: [
      { city: 'Palermo', miles: 5, driveTime: '20m' },
      { city: 'Cefalù', miles: 50, driveTime: '1h 15m' },
      { city: 'Trapani', miles: 60, driveTime: '1h 30m' },
      { city: 'Erice', miles: 70, driveTime: '1h 45m' },
      { city: 'Agrigento', miles: 80, driveTime: '1h 45m' },
      { city: 'Catania', miles: 125, driveTime: '2h 30m' },
      { city: 'Taormina', miles: 155, driveTime: '3h' },
      { city: 'Siracusa', miles: 165, driveTime: '3h 15m' },
      { city: 'Ragusa', miles: 160, driveTime: '2h 50m' },
      { city: 'Noto', miles: 180, driveTime: '3h 30m' },
      { city: 'Piazza Armerina', miles: 110, driveTime: '2h 15m' },
      { city: 'Gioiosa Marea', miles: 125, driveTime: '2h 20m' }
    ],
    
    activities: [
      {
        title: 'Cathedral of Monreale (Duomo di Monreale)',
        description: 'Marvel at one of the world\'s greatest examples of Norman architecture and Byzantine art. This UNESCO World Heritage cathedral, built by King William II in the 12th century, contains over 6,400 square meters of golden mosaics depicting biblical scenes from Creation to the New Testament.',
        image: 'monreale_cathedral_interior.jpg',
        imageAlt: 'Interior of Monreale Cathedral showing golden Byzantine mosaics covering walls and ceiling',
        highlights: [
          'Christ Pantocrator mosaic - 20-meter-high apse masterpiece',
          'Complete biblical narrative in golden mosaics',
          'Norman architectural fusion with Byzantine and Islamic elements',
          'Wooden ceiling with Fatimid-style painted decorations',
          'Royal tombs of William I and William II'
        ],
        tips: [
          'Visit early morning (8:30-9:30 AM) for best lighting on mosaics',
          'Audio guides available in multiple languages (€5)',
          'Photography allowed but no flash to preserve mosaics',
          'Cathedral closes 12:30-2:30 PM for lunch break',
          'Modest dress required - shoulders and knees covered'
        ]
      },
      {
        title: 'Cloisters of the Benedictine Monastery',
        description: 'Explore the exquisite cloisters adjacent to the cathedral, featuring 228 twin columns with unique carved capitals. This peaceful courtyard represents the pinnacle of Norman decorative art, with each column capital telling a different story through stone carving.',
        image: 'monreale_cloisters.jpg',
        imageAlt: 'Monreale monastery cloisters with twin columns and carved capitals',
        highlights: [
          '228 paired columns, each with unique carved capitals',
          'Stories from Bible, mythology, and Norman history in stone',
          'Peaceful garden courtyard with fountain centerpiece',
          'Arab-Norman architectural synthesis',
          'Original 12th-century stonework preservation'
        ],
        tips: [
          'Separate entrance fee €6 - worth every euro',
          'Detailed guidebook helps interpret column carvings',
          'Best photography in late afternoon soft light',
          'Allow 45 minutes for thorough exploration',
          'Combine with cathedral visit for full experience'
        ]
      },
      {
        title: 'Bell Tower Climb and Panoramic Views',
        description: 'Climb the cathedral bell tower for breathtaking 360-degree views over the Conca d\'Oro (Golden Shell) valley, Palermo, and the Tyrrhenian Sea. This moderate climb rewards visitors with some of Sicily\'s most spectacular panoramic vistas.',
        image: 'monreale_panoramic_view.jpg',
        imageAlt: 'Panoramic view from Monreale bell tower showing Palermo and Conca d\'Oro valley',
        highlights: [
          'Conca d\'Oro valley with ancient citrus groves',
          'Palermo cityscape and harbor views',
          'Monte Pellegrino and Tyrrhenian Sea coastline',
          'Cathedral rooftop and architectural details from above',
          'Sunset photography opportunities'
        ],
        tips: [
          'Tower climb: €3 additional fee, 184 steps',
          'Not recommended for claustrophobia or mobility issues',
          'Best views 2 hours before sunset',
          'Can be windy at top - secure loose items',
          'Clear days offer views to Aeolian Islands'
        ]
      },
      {
        title: 'Monreale Historic Town Center',
        description: 'Explore the charming medieval town surrounding the cathedral, with traditional Sicilian architecture, artisan workshops, and family-run businesses. The town maintains its authentic character while serving the constant stream of cathedral visitors.',
        image: 'monreale_town_center.jpg',
        imageAlt: 'Traditional stone buildings and narrow streets in Monreale historic center',
        highlights: [
          'Via del Arcivescovado - main street leading to cathedral',
          'Traditional Sicilian ceramic and craft shops',
          'Local restaurants serving regional specialties',
          'Chiesa di Santa Maria la Nuova with baroque interior',
          'Municipal Museum with Norman and Arabic artifacts'
        ],
        tips: [
          'Many shops sell religious souvenirs and local crafts',
          'Lunch restaurants offer views over Palermo valley',
          'Free street parking available throughout town',
          'Most shops close 1-4 PM for siesta',
          'Evening passeggiata offers lovely town atmosphere'
        ]
      },
      {
        title: 'Norman Royal Palace Ruins (Palazzo Reale)',
        description: 'Discover the ruins of the Norman royal palace complex adjacent to the cathedral. King William II built this residence to complement his magnificent cathedral, though only foundations and partial walls remain of this once-grand royal residence.',
        image: 'monreale_palace_ruins.jpg',
        imageAlt: 'Stone ruins of Norman royal palace with cathedral in background',
        highlights: [
          'Foundation remains of 12th-century royal apartments',
          'Archaeological evidence of Norman royal lifestyle',
          'Strategic position overlooking Palermo and coast',
          'Integration with cathedral complex design',
          'Information panels explaining original palace layout'
        ],
        tips: [
          'Free access to ruins area',
          'Best combined with cathedral and cloister visits',
          'Interpretive signs in Italian and English',
          'Good views of cathedral exterior architecture',
          'Peaceful spot for rest during cathedral tour'
        ]
      },
      {
        title: 'Local Cuisine and Sicilian Specialties',
        description: 'Enjoy traditional Sicilian cuisine at family-run restaurants offering spectacular views over the Conca d\'Oro. Monreale\'s restaurants serve authentic regional dishes with the added bonus of panoramic dining terraces.',
        image: 'monreale_restaurant_view.jpg',
        imageAlt: 'Outdoor restaurant terrace in Monreale with panoramic valley views',
        highlights: [
          'Restaurants with panoramic terraces overlooking Palermo',
          'Traditional pasta alla norma and caponata',
          'Local wines from nearby Sicilian vineyards',
          'Fresh seafood brought daily from Palermo markets',
          'Cannoli and cassata for authentic Sicilian desserts'
        ],
        tips: [
          'Reserve terrace tables for lunch with views',
          'Many restaurants close between lunch and dinner',
          'Local specialties: pasta con le sarde, arancini',
          'Sicilian wines pair perfectly with mountain air',
          'Tourist menus near cathedral - explore side streets for authenticity'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Free street parking throughout town. Large parking area near cathedral entrance. No parking restrictions for visitors.',
      accessibility: 'Cathedral main floor accessible via ramp. Bell tower climb not suitable for mobility issues. Town center has some steep streets and steps.',
      costs: 'Cathedral: €4. Cloisters: €6. Bell tower: €3. Combined tickets available. Audio guides: €5. Restaurants: €15-25 per person.',
      booking: 'No advance booking required for cathedral or cloisters. Restaurant reservations recommended for terrace seating, especially lunch with views.'
    }
  };

  constructor() {
    // Component initialization
  }
}