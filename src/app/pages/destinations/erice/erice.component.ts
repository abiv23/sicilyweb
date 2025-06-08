import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-erice',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="ericeData"></app-destination-info-sheet>
  `
})
export class EriceComponent {
  ericeData: DestinationInfo = {
    name: 'Erice',
    slug: 'erice',
    shortDescription: 'Enchanting medieval hilltop town famous for almond pastries and misty mountain views at 750 meters above sea level',
    heroImage: 'erice.jpg',
    heroImageAlt: 'Medieval stone streets of Erice with misty mountain atmosphere',
    region: 'Western Sicily',
    bestTimeToVisit: 'April-June, September-October (clear views), December-February (atmospheric mist)',
    recommendedDuration: 'Half day to 1 day',
    specialties: ['Medieval Architecture', 'Almond Pastries', 'Mountain Views', 'Ancient Temples'],
    
    distances: [
      { city: 'Trapani', miles: 9, driveTime: '30m (via cable car) / 45m (by road)' },
      { city: 'Palermo', miles: 65, driveTime: '1h 30m' },
      { city: 'Monreale', miles: 70, driveTime: '1h 45m' },
      { city: 'Cefalù', miles: 90, driveTime: '2h' },
      { city: 'Agrigento', miles: 75, driveTime: '1h 45m' },
      { city: 'Catania', miles: 155, driveTime: '3h' },
      { city: 'Taormina', miles: 185, driveTime: '3h 30m' },
      { city: 'Siracusa', miles: 195, driveTime: '3h 45m' },
      { city: 'Ragusa', miles: 225, driveTime: '4h' },
      { city: 'Noto', miles: 220, driveTime: '4h' },
      { city: 'Piazza Armerina', miles: 140, driveTime: '2h 45m' },
      { city: 'Gioiosa Marea', miles: 125, driveTime: '2h 30m' }
    ],
    
    activities: [
      {
        title: 'Medieval Town Exploration',
        description: 'Step into a fairy tale as you wander Erice\'s perfectly preserved medieval streets. This ancient Elymian settlement, later sacred to Venus, maintains its mystical atmosphere with cobblestone alleys, Norman gates, and stone houses that seem frozen in time.',
        image: 'erice_medieval_streets.jpg',
        imageAlt: 'Cobblestone medieval streets of Erice with ancient stone buildings',
        highlights: [
          'Porta Trapani - main Norman gate entrance to the town',
          'Via Vittorio Emanuele - main medieval thoroughfare',
          'Chiesa Madre (Duomo) - 14th-century Gothic cathedral',
          'Perfectly preserved city walls and defensive towers',
          'Quartiere Spagnolo - Spanish Quarter with panoramic terraces'
        ],
        tips: [
          'Erice can be foggy - check weather for clear mountain views',
          'Wear warm layers - temperatures 10°F cooler than sea level',
          'Best photography in morning light or late afternoon',
          'Many shops close during siesta (1-4 PM)'
        ]
      },
      {
        title: 'Temple of Venus and Castello di Venere',
        description: 'Explore the ruins of the ancient Temple of Venus (Aphrodite), once one of the most important religious sites in the Mediterranean. The medieval Castello di Venere was built on the temple foundations, offering spectacular views over western Sicily.',
        image: 'erice_castello_venere.jpg',
        imageAlt: 'Castello di Venere ruins with panoramic views over western Sicily',
        highlights: [
          'Ancient Elymian and Roman temple foundations',
          'Medieval Norman castle ruins (12th century)',
          'Panoramic views of Trapani, salt pans, and Egadi Islands',
          'Sacred well and ancient religious artifacts',
          'Balio Gardens with exotic plants and sea views'
        ],
        tips: [
          'Entry fee €3 - includes access to castle and gardens',
          'Can be very windy at the castle - bring jacket',
          'Clear days offer views to Tunisia (100+ miles)',
          'Sunset from castle terraces is magical when visibility allows'
        ]
      },
      {
        title: 'Famous Almond Pastries and Sweets',
        description: 'Erice is renowned throughout Sicily for its traditional almond pastries, particularly the delicate genovesi and cubbura. Local convents have perfected these recipes for centuries, creating some of Sicily\'s finest dolci.',
        image: 'erice_pastry_shop.jpg',
        imageAlt: 'Traditional Sicilian almond pastries display in Erice bakery',
        highlights: [
          'Pasticceria Grammatico - famous for traditional convent recipes',
          'Genovesi - delicate pastry filled with custard cream',
          'Cubbura - Easter bread with hard-boiled eggs',
          'Frutta martorana - marzipan fruits works of art',
          'Local almond biscotti and cannoli variations'
        ],
        tips: [
          'Maria Grammatico\'s shop is a must-visit institution',
          'Try \'mustazzoli\' - ancient honey and almond cookies',
          'Many pastries are seasonal - ask about specialties',
          'Purchase boxes for gifts - they travel well',
          'Pair with local Marsala wine or strong espresso'
        ]
      },
      {
        title: 'Funivia Cable Car Experience',
        description: 'Take the thrilling cable car (funivia) from Trapani to Erice for spectacular aerial views of the coast, salt pans, and surrounding countryside. This scenic journey is an attraction itself, offering unique perspectives of western Sicily.',
        image: 'erice_cable_car_view.jpg',
        imageAlt: 'Aerial view from Erice cable car showing Trapani coastline and salt pans',
        highlights: [
          '10-minute scenic cable car ride from Trapani',
          'Aerial views of ancient salt pans and windmills',
          'Egadi Islands visible on clear days',
          'Modern cable car system (renovated 2005)',
          'Alternative to winding mountain road drive'
        ],
        tips: [
          'Cable car: €9 round trip, runs every 15 minutes',
          'Operating hours: 7:30 AM - 8:00 PM (longer in summer)',
          'Can close during strong winds - check before visiting',
          'Parking available at Trapani cable car station',
          'Advance tickets not required - purchase on-site'
        ]
      },
      {
        title: 'Churches and Religious Heritage',
        description: 'Erice\'s sacred history spans millennia, from ancient goddess worship to Christian pilgrimage. The town\'s churches showcase centuries of architectural evolution and contain precious artworks and religious artifacts.',
        image: 'erice_chiesa_madre.jpg',
        imageAlt: 'Interior of Erice Chiesa Madre with Gothic architecture',
        highlights: [
          'Chiesa Madre - Gothic cathedral with detached bell tower',
          'Chiesa di San Martino with baroque interior',
          'Chiesa di San Cataldo - Norman foundations',
          'Chiesa di San Giovanni Battista with medieval frescoes',
          'Convent of San Salvatore - now houses the mayor\'s office'
        ],
        tips: [
          'Churches typically close 12:30-3:30 PM',
          'Some churches open only for mass - check schedules',
          'Modest dress required for church visits',
          'Chiesa Madre bell tower climb offers best town views (€2)',
          'Many churches built on ancient pagan temple sites'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Limited parking within medieval walls. Main parking outside Porta Trapani (€1/hour). Cable car eliminates parking concerns.',
      accessibility: 'Medieval town has steep cobblestone streets and many stairs. Cable car is accessible. Main square and some shops have level access.',
      costs: 'Cable car: €9 round trip. Castle: €3. Churches: Free (donations welcome). Pastries: €1-3 each. Restaurants: €15-25 per person.',
      booking: 'No advance booking needed for attractions. Restaurant reservations recommended for dinner, especially with view terraces.'
    }
  };

  constructor() {
    // Component initialization
  }
}