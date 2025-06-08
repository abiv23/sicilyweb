import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-piazza-armerina',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="piazzaArmerinaData"></app-destination-info-sheet>
  `
})
export class PiazzaArmerinaComponent {
  piazzaArmerinaData: DestinationInfo = {
    name: 'Piazza Armerina',
    slug: 'piazza-armerina',
    shortDescription: 'Home to Villa Romana del Casale with the world\'s finest preserved Roman mosaics, showcasing 4th-century imperial luxury',
    heroImage: 'piazza_armerina.jpg',
    heroImageAlt: 'Aerial view of Piazza Armerina hilltop town with Villa Romana del Casale in valley',
    region: 'Central Sicily (Enna Province)',
    bestTimeToVisit: 'April-June, September-October (mild weather), Early morning or late afternoon for villa visit',
    recommendedDuration: '1 full day (half day for villa, half day for town)',
    specialties: ['Roman Mosaics', 'UNESCO Heritage', 'Medieval Town', 'Archaeological Site'],
    
    distances: [
      { city: 'Catania', miles: 55, driveTime: '1h 15m' },
      { city: 'Agrigento', miles: 50, driveTime: '1h 10m' },
      { city: 'Siracusa', miles: 75, driveTime: '1h 30m' },
      { city: 'Ragusa', miles: 65, driveTime: '1h 10m' },
      { city: 'Noto', miles: 80, driveTime: '1h 30m' },
      { city: 'Palermo', miles: 105, driveTime: '2h' },
      { city: 'Taormina', miles: 85, driveTime: '1h 45m' },
      { city: 'Cefalù', miles: 145, driveTime: '2h 30m' },
      { city: 'Trapani', miles: 155, driveTime: '2h 45m' },
      { city: 'Erice', miles: 140, driveTime: '2h 45m' },
      { city: 'Monreale', miles: 110, driveTime: '2h 15m' },
      { city: 'Gioiosa Marea', miles: 120, driveTime: '2h 15m' }
    ],
    
    activities: [
      {
        title: 'Villa Romana del Casale - World\'s Greatest Roman Mosaics',
        description: 'Explore this UNESCO World Heritage site containing the largest and most complex collection of Roman mosaics in the world. This 4th-century imperial villa showcases over 3,500 square meters of perfectly preserved mosaics depicting mythology, daily life, and spectacular hunting scenes.',
        image: 'villa_romana_mosaics.jpg',
        imageAlt: 'Intricate Roman mosaic depicting hunting scenes at Villa Romana del Casale',
        highlights: [
          'Hall of the Great Hunt - 60-meter corridor with African hunting scenes',
          'Room of the Ten Maidens - famous "bikini girls" athletic mosaics',
          'Triclinium mosaics depicting Labors of Hercules',
          'Geometric patterns and mythological scenes throughout 40 rooms',
          'Perfectly preserved after being buried for 700 years'
        ],
        tips: [
          'Visit early morning (8 AM) or late afternoon to avoid crowds',
          'Audio guide essential for understanding complex iconography',
          'Allow 2-3 hours for complete villa exploration',
          'Comfortable shoes and sun protection required',
          'Photography allowed but no flash to preserve mosaics'
        ]
      },
      {
        title: 'The Famous "Bikini Girls" and Athletic Mosaics',
        description: 'Marvel at the world-famous Room of the Ten Maidens, featuring Roman women in what appear to be modern bikinis engaged in athletic competitions. These 4th-century mosaics provide unique insights into Roman women\'s sports and fashion, centuries ahead of their time.',
        image: 'villa_bikini_girls.jpg',
        imageAlt: 'Roman mosaic showing women in two-piece garments performing athletics',
        highlights: [
          'Ten young women in two-piece athletic garments',
          'Various sports: running, discus, ball games, weight lifting',
          'Victory crowns and palm branches for winners',
          'Exceptional preservation showing fine details and colors',
          'Revolutionary evidence of Roman women\'s athletics'
        ],
        tips: [
          'Most photographed mosaic in the villa - expect crowds',
          'Best viewing from raised walkway platform',
          'Demonstrates Roman advanced textile and fashion knowledge',
          'Part of larger complex showing imperial luxury lifestyle',
          'Compare with other villa rooms showing male activities'
        ]
      },
      {
        title: 'Hall of the Great Hunt - Imperial Hunting Spectacle',
        description: 'Walk through the magnificent 60-meter-long corridor showcasing the most spectacular hunting mosaics ever created. This imperial propaganda piece depicts exotic animals from across the Roman Empire being captured for gladiatorial games and private collections.',
        image: 'villa_great_hunt.jpg',
        imageAlt: 'Long corridor with elaborate hunting mosaics showing exotic animals and hunters',
        highlights: [
          'Exotic animals: elephants, tigers, lions, ostriches, hippos',
          'Hunters, trappers, and animal handlers in action',
          'Ships transporting animals across Mediterranean',
          'Geographic representation of Roman Empire\'s extent',
          'Incredible detail in animal anatomy and human expressions'
        ],
        tips: [
          'Central masterpiece of the entire villa complex',
          'Walk slowly to appreciate incredible artistic details',
          'Represents imperial power over nature and distant lands',
          'Notice different hunting techniques for various animals',
          'Elevated walkways provide perfect viewing angles'
        ]
      },
      {
        title: 'Piazza Armerina Historic Town Center',
        description: 'Explore the charming medieval hilltop town that grew around the famous villa. Piazza Armerina features Norman and baroque architecture, traditional Sicilian urban planning, and authentic local culture away from typical tourist routes.',
        image: 'piazza_armerina_town.jpg',
        imageAlt: 'Medieval streets and baroque cathedral of Piazza Armerina historic center',
        highlights: [
          'Cathedral with impressive baroque facade and dome',
          'Castello Aragonese ruins with panoramic valley views',
          'Via Monte for traditional shops and local crafts',
          'Church of Sant\'Andrea with Norman foundations',
          'Traditional Sicilian hilltop urban architecture'
        ],
        tips: [
          'Park in lower town and walk up - steep but scenic',
          'Many shops close 1-4 PM for siesta',
          'Cathedral often closed except for mass times',
          'Local restaurants serve authentic regional cuisine',
          'Evening passeggiata offers lovely town atmosphere'
        ]
      },
      {
        title: 'Archaeological Museum and Roman Context',
        description: 'Visit the local archaeological museum to understand the broader Roman context of Villa Romana del Casale. The museum provides essential background on late Roman Empire society, mosaic techniques, and the villa\'s original purpose.',
        image: 'piazza_museum.jpg',
        imageAlt: 'Archaeological artifacts and mosaic fragments in Piazza Armerina museum',
        highlights: [
          'Mosaic-making techniques and materials demonstrations',
          'Roman artifacts found during villa excavations',
          'Context for villa\'s role in late Roman Empire',
          'Comparative examples from other Roman sites',
          'Interactive displays explaining mosaic iconography'
        ],
        tips: [
          'Visit before or after villa for complete understanding',
          'Museum entry: €3, often combined with villa tickets',
          'English explanations available for major exhibits',
          'Small but well-curated collection',
          'Helps appreciate villa mosaics\' historical significance'
        ]
      },
      {
        title: 'Palio dei Normanni Medieval Festival',
        description: 'Experience Piazza Armerina\'s spectacular medieval festival (August 12-14) celebrating the Norman conquest of Sicily. This colorful pageant features period costumes, horse racing, medieval crafts, and traditional Sicilian festivities.',
        image: 'piazza_palio_normanni.jpg',
        imageAlt: 'Medieval festival with costumed participants and horses in Piazza Armerina',
        highlights: [
          'Authentic medieval costumes and period recreation',
          'Horse racing through historic town streets',
          'Medieval craft demonstrations and markets',
          'Historical reenactment of Norman conquest',
          'Traditional Sicilian music and dancing'
        ],
        tips: [
          'Festival occurs annually August 12-14',
          'Book accommodations well in advance for festival dates',
          'Authentic medieval atmosphere with local participation',
          'Photography opportunities throughout town',
          'Combines with villa visit for complete historical experience'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Villa Romana: Large free parking area at site entrance. Town center: Limited parking, use lower areas and walk up steep streets.',
      accessibility: 'Villa has elevated walkways accessible to wheelchairs and mobility aids. Town center has steep medieval streets and steps - challenging for mobility issues.',
      costs: 'Villa Romana: €10. Audio guide: €5. Museum: €3. Combined tickets available. Restaurants: €15-25 per person. Parking: Free.',
      booking: 'No advance booking required for villa except large groups. Audio guides available on-site. Restaurant reservations recommended for weekend dining.'
    }
  };

  constructor() {
    // Component initialization
  }
}