import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-agrigento',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="agrigentoData"></app-destination-info-sheet>
  `
})
export class AgrigentoComponent {
  agrigentoData: DestinationInfo = {
    name: 'Agrigento',
    slug: 'agrigento',
    shortDescription: 'Valley of the Temples - eight magnificent Greek temples in the world\'s largest archaeological site outside Greece',
    heroImage: 'agrigento.jpg',
    heroImageAlt: 'Temple of Concordia at sunset in Agrigento Valley of the Temples',
    region: 'Southern Sicily (Agrigento Province)',
    bestTimeToVisit: 'March-May, September-November (mild weather), February (almond blossoms)',
    recommendedDuration: '1-2 days',
    specialties: ['Greek Temples', 'UNESCO Heritage', 'Archaeological Museum', 'Almond Blossoms'],
    
    distances: [
      { city: 'Palermo', miles: 80, driveTime: '1h 45m' },
      { city: 'Trapani', miles: 75, driveTime: '1h 45m' },
      { city: 'Catania', miles: 105, driveTime: '2h' },
      { city: 'Piazza Armerina', miles: 50, driveTime: '1h 10m' },
      { city: 'Ragusa', miles: 90, driveTime: '1h 45m' },
      { city: 'Siracusa', miles: 105, driveTime: '2h' },
      { city: 'Taormina', miles: 140, driveTime: '2h 45m' },
      { city: 'Cefalù', miles: 120, driveTime: '2h 15m' },
      { city: 'Noto', miles: 85, driveTime: '1h 45m' },
      { city: 'Erice', miles: 85, driveTime: '1h 45m' },
      { city: 'Monreale', miles: 80, driveTime: '1h 45m' },
      { city: 'Gioiosa Marea', miles: 185, driveTime: '3h 30m' }
    ],
    
    activities: [
      {
        title: 'Valley of the Temples (Valle dei Templi)',
        description: 'Explore the world\'s largest archaeological site outside Greece, featuring eight magnificent Greek temples dating from the 5th-6th centuries BC. This UNESCO World Heritage site represents the pinnacle of ancient Greek architecture and urban planning in the western Mediterranean.',
        image: 'agrigento_valley_temples.jpg',
        imageAlt: 'Panoramic view of Valley of the Temples with ancient Greek temples',
        highlights: [
          'Temple of Concordia - best preserved Greek temple in the world',
          'Temple of Juno (Hera) with panoramic valley views',
          'Temple of Hercules - oldest temple in the valley',
          'Temple of Zeus Olympian - would have been largest Greek temple',
          'Garden of Kolymbethra - ancient garden with almond and olive trees'
        ],
        tips: [
          'Visit early morning or late afternoon to avoid crowds and heat',
          'Combined ticket (€13.50) includes temples and museum',
          'Allow 3-4 hours for complete exploration',
          'Comfortable shoes essential for ancient stone paths',
          'Audio guide highly recommended for historical context'
        ]
      },
      {
        title: 'Temple of Concordia - World\'s Best Preserved Greek Temple',
        description: 'Marvel at the Temple of Concordia, considered the best-preserved Greek temple in the world. Built around 440 BC, this magnificent Doric temple survived because it was converted into a Christian church in the 6th century AD, protecting it from destruction.',
        image: 'temple_concordia_agrigento.jpg',
        imageAlt: 'Temple of Concordia with perfect Doric columns against blue sky',
        highlights: [
          'Perfect preservation with all 34 Doric columns intact',
          'Classical Greek proportions and architectural harmony',
          'Golden stone that glows magnificently at sunset',
          'Original temple foundations and ancient altar remains',
          'Views across the valley to the Mediterranean Sea'
        ],
        tips: [
          'Best photography 1 hour before sunset - golden light',
          'Central location makes it perfect landmark for valley exploration',
          'Compare with Parthenon in Athens - similar scale and preservation',
          'Circumnavigate the temple to appreciate all architectural details',
          'Evening illumination creates magical atmosphere'
        ]
      },
      {
        title: 'Archaeological Museum (Museo Archeologico)',
        description: 'Discover one of Italy\'s finest archaeological museums, housing extraordinary artifacts from ancient Akragas and surrounding Greek settlements. The museum provides essential context for understanding the Valley of the Temples and ancient Greek Sicily.',
        image: 'agrigento_museum.jpg',
        imageAlt: 'Ancient Greek statues and artifacts in Agrigento Archaeological Museum',
        highlights: [
          'Telamones (giant Atlas figures) from Temple of Zeus',
          'Ephebe of Agrigento - stunning 5th century BC marble statue',
          'Ancient Greek pottery, coins, and jewelry collections',
          'Roman mosaics and sculptures from later periods',
          'Interactive displays explaining temple construction techniques'
        ],
        tips: [
          'Visit museum before temples for better historical understanding',
          'Museum entry: €8, or combined with valley ticket',
          'English audio guides available',
          'Allow 1.5-2 hours for complete visit',
          'Photography allowed in most sections'
        ]
      },
      {
        title: 'Temple of Zeus Olympian - Ancient World Wonder',
        description: 'Explore the impressive ruins of what would have been the largest Greek temple ever built. Though never completed due to the Carthaginian invasion of 406 BC, the massive scale and innovative design demonstrate the ambition and wealth of ancient Akragas.',
        image: 'temple_zeus_agrigento.jpg',
        imageAlt: 'Massive stone blocks and ruins of Temple of Zeus Olympian',
        highlights: [
          'Colossal Telamones (Atlas figures) - 7.5 meters tall stone giants',
          'Massive foundation blocks demonstrating incredible engineering',
          'Innovative pseudo-peripteral design unique in Greek architecture',
          'Would have been 113 meters long - larger than Parthenon',
          'Carthaginian destruction evidence and historical significance'
        ],
        tips: [
          'Replica Telamon on-site - originals in museum',
          'Climb viewing platform for scale perspective',
          'Best understood after museum visit explaining construction',
          'Impressive even in ruined state - imagine original grandeur',
          'Compare with completed temples to appreciate ancient ambition'
        ]
      },
      {
        title: 'Garden of Kolymbethra and Ancient Landscapes',
        description: 'Stroll through the restored Garden of Kolymbethra, an ancient garden in the heart of the Valley of the Temples. This archaeological landscape showcases traditional Sicilian agriculture with ancient olive trees, almond groves, and Mediterranean vegetation.',
        image: 'kolymbethra_garden.jpg',
        imageAlt: 'Ancient olive trees and Mediterranean vegetation in Kolymbethra Garden',
        highlights: [
          'Ancient olive trees over 1,000 years old',
          'Traditional Sicilian almond groves and citrus trees',
          'Archaeological remains integrated with natural landscape',
          'Traditional irrigation systems and agricultural techniques',
          'Peaceful walking paths with temple views'
        ],
        tips: [
          'Separate entrance fee (€3) or combined ticket',
          'Best visited during almond blossom season (February)',
          'Shaded paths provide relief during summer heat',
          'Perfect spot for picnic with temple views',
          'Early morning visits offer peaceful atmosphere'
        ]
      },
      {
        title: 'Almond Blossom Festival and Seasonal Beauty',
        description: 'Experience Agrigento during the magical almond blossom season (February-March) when the entire valley is covered in white and pink flowers. The annual Almond Blossom Festival celebrates this spectacular natural event with folklore performances and traditional celebrations.',
        image: 'agrigento_almond_blossoms.jpg',
        imageAlt: 'Greek temples surrounded by blooming almond trees in white and pink',
        highlights: [
          'Thousands of almond trees in full bloom throughout the valley',
          'Traditional Sicilian folklore performances and music',
          'Local almond-based cuisine and traditional sweets',
          'Photography opportunities with temples framed by blossoms',
          'International folklore festival with performances from around the world'
        ],
        tips: [
          'Festival typically first weekend in February',
          'Book accommodations well in advance for festival period',
          'Weather can be unpredictable - bring layers',
          'Blossoms typically last 2-3 weeks depending on weather',
          'Combine with other spring activities - mild temperatures perfect for exploration'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Large free parking area at Valley of the Temples entrance. Additional parking at museum. Free shuttle bus connects parking to main temple area.',
      accessibility: 'Main temple path is accessible with some assistance. Temple of Concordia area fully accessible. Museum has full accessibility features. Some temples require climbing for best views.',
      costs: 'Valley of Temples: €13.50. Museum: €8. Combined ticket: €17. Audio guide: €5. Kolymbethra Garden: €3. Free first Sunday of month (EU residents).',
      booking: 'No advance booking required except for large groups. Audio guides available on-site. Consider guided tours for deeper historical understanding.'
    }
  };

  constructor() {
    // Component initialization
  }
}