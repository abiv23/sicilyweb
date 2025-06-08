import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-taormina',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="taorminaData"></app-destination-info-sheet>
  `
})
export class TaorminaComponent {
  taorminaData: DestinationInfo = {
    name: 'Taormina',
    slug: 'taormina',
    shortDescription: 'Dramatic hilltop town with ancient Greek theater overlooking Mount Etna and the Ionian Sea - Sicily\'s most scenic destination',
    heroImage: 'taormina.jpg',
    heroImageAlt: 'Taormina ancient Greek theater with Mount Etna and Ionian Sea panoramic view',
    region: 'Eastern Sicily (Messina Province)',
    bestTimeToVisit: 'April-June, September-October (perfect weather), November-March (fewer crowds, cooler)',
    recommendedDuration: '2-3 days',
    specialties: ['Greek Theater', 'Mount Etna Views', 'Luxury Resort', 'Scenic Beauty'],
    
    distances: [
      { city: 'Catania', miles: 30, driveTime: '45m' },
      { city: 'Mount Etna (Rifugio Sapienza)', miles: 35, driveTime: '1h' },
      { city: 'Siracusa', miles: 70, driveTime: '1h 30m' },
      { city: 'Messina', miles: 35, driveTime: '50m' },
      { city: 'Gioiosa Marea', miles: 40, driveTime: '1h' },
      { city: 'Cefalù', miles: 140, driveTime: '2h 30m' },
      { city: 'Ragusa', miles: 110, driveTime: '2h' },
      { city: 'Noto', miles: 90, driveTime: '1h 45m' },
      { city: 'Piazza Armerina', miles: 85, driveTime: '1h 45m' },
      { city: 'Agrigento', miles: 140, driveTime: '2h 45m' },
      { city: 'Palermo', miles: 150, driveTime: '2h 45m' },
      { city: 'Trapani', miles: 185, driveTime: '3h 30m' }
    ],
    
    activities: [
      {
        title: 'Ancient Greek Theater with Mount Etna Backdrop',
        description: 'Experience one of the world\'s most dramatically situated ancient theaters, where Greek tragedies and Roman spectacles played out against the stunning backdrop of Mount Etna and the Ionian Sea. This 3rd-century BC theater continues to host world-class performances today.',
        image: 'taormina_theater_etna.jpg',
        imageAlt: 'Ancient Greek theater ruins with Mount Etna volcano and sea view',
        highlights: [
          'Spectacular Mount Etna and Ionian Sea panoramic views',
          'Well-preserved Greek cavea (seating) carved into hillside',
          'Roman-era stage modifications and architectural elements',
          'Modern summer festival performances and concerts',
          'Perfect acoustics still functional after 2,300 years'
        ],
        tips: [
          'Visit early morning or late afternoon for best lighting',
          'Entry fee: €10, audio guide recommended',
          'Check summer performance schedule (June-September)',
          'Bring camera for spectacular Etna views',
          'Can be very crowded midday during tourist season'
        ]
      },
      {
        title: 'Corso Umberto I - Elegant Medieval Main Street',
        description: 'Stroll down Taormina\'s sophisticated pedestrian main street, lined with medieval palaces, designer boutiques, art galleries, and elegant cafés. This charming thoroughfare connects the ancient theater to the town center through historic gates and piazzas.',
        image: 'taormina_corso_umberto.jpg',
        imageAlt: 'Elegant medieval street with shops, cafes and historic architecture in Taormina',
        highlights: [
          'Porta Messina and Porta Catania - medieval town gates',
          'Palazzo Corvaja - 15th-century Sicilian-Gothic palace',
          'Piazza IX Aprile with café terraces and sea views',
          'Designer boutiques and traditional Sicilian craft shops',
          'Historic churches and noble family palaces'
        ],
        tips: [
          'Perfect for evening passeggiata (5-7 PM)',
          'Many shops close 1-4 PM for siesta',
          'Café terraces offer spectacular views - prices reflect location',
          'Free to walk and window shop',
          'Photography opportunities at every corner'
        ]
      },
      {
        title: 'Cable Car to Isola Bella Beach',
        description: 'Take the scenic cable car down to Isola Bella, Taormina\'s famous heart-shaped pebble beach connected to a tiny island nature reserve. This dramatic coastline offers crystal-clear waters and spectacular views back up to the hilltop town.',
        image: 'taormina_isola_bella.jpg',
        imageAlt: 'Isola Bella beach with heart-shaped island and cable car station',
        highlights: [
          'Heart-shaped island connected to beach by narrow sandbar',
          'Nature reserve with Mediterranean vegetation and wildlife',
          'Crystal-clear turquoise waters perfect for swimming',
          'Beach clubs with loungers, umbrellas, and restaurants',
          'Dramatic views of Taormina perched on cliffs above'
        ],
        tips: [
          'Cable car: €3 each way, runs every 15 minutes',
          'Beach club prices higher than typical Sicilian beaches',
          'Pebble beach - bring water shoes for comfort',
          'Best swimming May through October',
          'Alternative: drive down winding coastal road'
        ]
      },
      {
        title: 'Villa Comunale Gardens and Panoramic Views',
        description: 'Explore Taormina\'s beautiful public gardens created by English aristocrat Lady Florence Trevelyan. These terraced gardens offer peaceful walking paths, exotic plants, and some of the most spectacular panoramic views in Sicily.',
        image: 'taormina_villa_comunale.jpg',
        imageAlt: 'Terraced gardens with panoramic views of Etna and coastline from Villa Comunale',
        highlights: [
          'Exotic plants and flowers from around the Mediterranean',
          'Victorian follies and decorative pavilions',
          'Panoramic terraces with Mount Etna and sea views',
          'Peaceful escape from crowded main streets',
          'Perfect sunset photography location'
        ],
        tips: [
          'Free entry, open dawn to dusk',
          'Best views from upper terraces',
          'Ideal for picnic with purchased supplies',
          'Less crowded early morning or late afternoon',
          'Benches throughout for rest and view appreciation'
        ]
      },
      {
        title: 'Mount Etna Day Trip Adventures',
        description: 'Use Taormina as your base for exploring Mount Etna, Europe\'s highest active volcano. Multiple tour options range from gentle wine tastings on volcanic slopes to adventurous crater hikes and 4x4 jeep tours through lunar landscapes.',
        image: 'etna_from_taormina.jpg',
        imageAlt: 'Mount Etna volcanic landscape with lunar terrain and active craters',
        highlights: [
          'Rifugio Sapienza cable car to 2,500 meters elevation',
          '4x4 jeep tours to higher altitudes and recent lava flows',
          'Volcanic wine tastings at high-altitude vineyards',
          'Hiking trails through Etna National Park',
          'Lava tube cave explorations with helmets and flashlights'
        ],
        tips: [
          'Book tours in advance during peak season',
          'Bring warm clothes - temperature drops with altitude',
          'Half-day tours available from Taormina (€45-65)',
          'Full-day adventures include multiple activities',
          'Weather dependent - tours may cancel for safety'
        ]
      },
      {
        title: 'Luxury Dining and Sicilian Gastronomy',
        description: 'Experience some of Sicily\'s finest dining in Taormina\'s sophisticated restaurants, from Michelin-starred establishments to charming family trattorias. The combination of fresh seafood, volcanic soil produce, and spectacular views creates unforgettable culinary experiences.',
        image: 'taormina_restaurant_view.jpg',
        imageAlt: 'Elegant restaurant terrace with Mount Etna view and fine dining setup',
        highlights: [
          'Michelin-starred restaurants with innovative Sicilian cuisine',
          'Terrace dining with panoramic Etna and sea views',
          'Fresh seafood from Ionian waters',
          'Volcanic soil wines from Etna region vineyards',
          'Traditional Sicilian pastries and granita'
        ],
        tips: [
          'Reserve terrace tables well in advance',
          'Lunch typically 12:30-2:30 PM, dinner after 7:30 PM',
          'Prices higher than elsewhere in Sicily due to tourist location',
          'Try local specialties: pasta alla norma, arancini',
          'Many restaurants offer tasting menus showcasing regional cuisine'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Very limited parking in historic center. Use Porta Catania parking garage (€2/hour) or park outside town and walk. Many hotels offer shuttle service.',
      accessibility: 'Historic center is pedestrian-friendly but has steep streets and steps. Cable car to beach is accessible. Theater has limited wheelchair access due to ancient construction.',
      costs: 'Greek Theater: €10. Cable car: €3 each way. Restaurants: €25-50+ per person. Hotels: €100-400+ per night. Parking: €2/hour in center.',
      booking: 'Theater performance tickets should be booked in advance. Restaurant reservations essential for terrace dining. Hotel bookings recommended well in advance for peak season.'
    }
  };

  constructor() {
    // Component initialization
  }
}