import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-ragusa',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="ragusaData"></app-destination-info-sheet>
  `
})
export class RagusaComponent {
  ragusaData: DestinationInfo = {
    name: 'Ragusa',
    slug: 'ragusa',
    shortDescription: 'Baroque UNESCO gem with Ragusa Ibla\'s winding medieval streets and stunning valley views from dramatic limestone cliffs',
    heroImage: 'ragusa.jpg',
    heroImageAlt: 'Ragusa Ibla baroque architecture cascading down limestone cliffs',
    region: 'Southeast Sicily (Ragusa Province)',
    bestTimeToVisit: 'April-June, September-October (perfect weather), late afternoon golden hour year-round',
    recommendedDuration: '1-2 days',
    specialties: ['Baroque Architecture', 'UNESCO Heritage', 'Medieval Streets', 'Valley Views'],
    
    distances: [
      { city: 'Modica', miles: 9, driveTime: '20m' },
      { city: 'Noto', miles: 35, driveTime: '45m' },
      { city: 'Siracusa', miles: 60, driveTime: '1h 15m' },
      { city: 'Catania', miles: 80, driveTime: '1h 30m' },
      { city: 'Piazza Armerina', miles: 65, driveTime: '1h 10m' },
      { city: 'Agrigento', miles: 90, driveTime: '1h 45m' },
      { city: 'Taormina', miles: 110, driveTime: '2h' },
      { city: 'Palermo', miles: 155, driveTime: '2h 45m' },
      { city: 'Cefalù', miles: 170, driveTime: '3h' },
      { city: 'Trapani', miles: 220, driveTime: '3h 30m' },
      { city: 'Erice', miles: 205, driveTime: '3h 30m' },
      { city: 'Monreale', miles: 160, driveTime: '2h 50m' },
      { city: 'Gioiosa Marea', miles: 170, driveTime: '3h' }
    ],
    
    activities: [
      {
        title: 'Ragusa Ibla - Medieval Baroque Masterpiece',
        description: 'Explore the enchanting lower town of Ragusa Ibla, a UNESCO World Heritage site featuring winding medieval streets lined with spectacular baroque palaces and churches. This ancient settlement cascades down limestone cliffs, creating one of Sicily\'s most photogenic and romantic neighborhoods.',
        image: 'ragusa_ibla_streets.jpg',
        imageAlt: 'Narrow winding streets of Ragusa Ibla with baroque palaces and stone architecture',
        highlights: [
          'Duomo di San Giorgio - stunning baroque cathedral with dramatic facade',
          'Giardini Iblei - public gardens with panoramic valley views',
          'Via del Mercato - charming street with local shops and cafés',
          'Palazzo Cosentini - baroque palace with elaborate stone balconies',
          'Chiesa di Santa Maria delle Scale - church with beautiful views'
        ],
        tips: [
          'Wear comfortable shoes for steep cobblestone streets',
          'Best photography during golden hour (late afternoon)',
          'Many shops close 1-4 PM for siesta',
          'Free parking available at Giardini Iblei',
          'Allow full day to properly explore winding streets'
        ]
      },
      {
        title: 'Duomo di San Giorgio and Baroque Churches',
        description: 'Marvel at Ragusa Ibla\'s crown jewel - the magnificent Duomo di San Giorgio, considered one of the finest examples of Sicilian baroque architecture. This spectacular cathedral anchors a collection of beautiful baroque churches throughout the historic center.',
        image: 'ragusa_duomo_san_giorgio.jpg',
        imageAlt: 'Baroque facade of Duomo di San Giorgio with ornate architectural details',
        highlights: [
          'Dramatic baroque facade with twin bell towers',
          'Ornate interior with marble decorations and frescoes',
          'Spectacular dome visible from throughout the valley',
          'Chiesa del Purgatorio with intricate stone carvings',
          'San Giuseppe church with elegant baroque interior'
        ],
        tips: [
          'Cathedral often closes 12:30-3:30 PM',
          'Best external photos from Salita Commendatore',
          'Interior visits free with modest dress required',
          'Dome illuminated beautifully in evening',
          'Combine with other baroque churches for complete experience'
        ]
      },
      {
        title: 'Ragusa Superiore and Modern Town',
        description: 'Discover the upper town of Ragusa Superiore, rebuilt after the 1693 earthquake with wide streets and elegant baroque architecture. This modern section offers excellent shopping, dining, and serves as a perfect complement to medieval Ibla below.',
        image: 'ragusa_superiore.jpg',
        imageAlt: 'Wide streets and baroque buildings in Ragusa Superiore upper town',
        highlights: [
          'Cathedral of San Giovanni Battista with imposing facade',
          'Corso Italia - main shopping and dining street',
          'Palazzo Vescovile - elegant baroque bishop\'s palace',
          'Municipal museums with local art and archaeology',
          'Modern amenities and excellent restaurant scene'
        ],
        tips: [
          'Connected to Ibla by scenic walking paths and bus service',
          'Better selection of modern hotels and restaurants',
          'Corso Italia perfect for evening passeggiata',
          'Free parking more readily available than in Ibla',
          'Good base for exploring surrounding baroque towns'
        ]
      },
      {
        title: 'Valley Views and Panoramic Terraces',
        description: 'Experience breathtaking panoramic views of the Irminio Valley and surrounding countryside from Ragusa\'s dramatic clifftop position. Multiple viewpoints offer spectacular vistas perfect for photography and appreciating the town\'s stunning natural setting.',
        image: 'ragusa_valley_views.jpg',
        imageAlt: 'Panoramic view of Irminio Valley from Ragusa with baroque architecture',
        highlights: [
          'Giardini Iblei terrace with sweeping valley panoramas',
          'Ponte dei Cappuccini - historic bridge with dramatic views',
          'Santa Maria delle Scale church steps viewpoint',
          'Irminio Valley countryside and ancient settlements',
          'Sunset photography opportunities over limestone landscape'
        ],
        tips: [
          'Best views late afternoon with golden light',
          'Bring camera for spectacular landscape photography',
          'Giardini Iblei free access with benches for relaxation',
          'Clear days offer views to Mediterranean Sea',
          'Valley walks possible for adventurous visitors'
        ]
      },
      {
        title: 'Modica Day Trip - Chocolate and Baroque',
        description: 'Take a short trip to nearby Modica, famous for its unique Aztec-inspired chocolate and additional spectacular baroque architecture. This UNESCO World Heritage town perfectly complements a Ragusa visit with its own dramatic cliff-side setting.',
        image: 'modica_chocolate_baroque.jpg',
        imageAlt: 'Modica baroque architecture with traditional chocolate shops',
        highlights: [
          'Traditional Modica chocolate made with ancient Aztec methods',
          'Duomo di San Giorgio with impressive baroque staircase',
          'Chocolate shops and traditional pastry makers',
          'Dramatic cliff-side baroque palaces and churches',
          'Annual chocolate festival and cultural events'
        ],
        tips: [
          'Only 20 minutes drive from Ragusa',
          'Try various chocolate flavors: cinnamon, chili, vanilla',
          'Best chocolate shops: Antica Dolceria Bonajuto, Ciomod',
          'Combine with Ragusa visit for complete baroque experience',
          'Steep streets require comfortable walking shoes'
        ]
      },
      {
        title: 'Local Cuisine and Sicilian Specialties',
        description: 'Experience exceptional Sicilian cuisine in Ragusa\'s restaurants, featuring traditional recipes, local ingredients, and regional specialties. The town\'s excellent dining scene showcases the rich culinary heritage of southeastern Sicily.',
        image: 'ragusa_sicilian_cuisine.jpg',
        imageAlt: 'Traditional Sicilian dishes and local specialties in Ragusa restaurant',
        highlights: [
          'Scacce ragusane - traditional stuffed flatbread specialty',
          'Fresh ricotta from local sheep and goat farms',
          'Nero d\'Avola and Cerasuolo di Vittoria regional wines',
          'Traditional pasta dishes with local vegetables and cheeses',
          'Excellent gelato and traditional Sicilian desserts'
        ],
        tips: [
          'Scacce best found in local bakeries and tavolas calde',
          'Many restaurants close Monday during off-season',
          'Ibla has romantic dining with valley views',
          'Local markets for fresh produce and regional products',
          'Reserve dinner tables, especially in Ibla during peak season'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Ibla: Limited parking, use Giardini Iblei or walk from Superiore. Superiore: Street parking and paid lots available. Free parking at major viewpoints.',
      accessibility: 'Ibla has steep cobblestone streets and steps - challenging for mobility issues. Superiore more accessible with flat main streets. Major churches have ramp access.',
      costs: 'Churches: Free entry (donations welcome). Museums: €3-5. Restaurants: €18-25 per person. Parking: Mostly free or €1/hour in center.',
      booking: 'No advance booking required for attractions. Restaurant reservations recommended for Ibla dinner dining, especially terrace tables with views.'
    }
  };

  constructor() {
    // Component initialization
  }
}