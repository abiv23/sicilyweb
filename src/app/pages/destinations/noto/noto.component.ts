import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-noto',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="notoData"></app-destination-info-sheet>
  `
})
export class NotoComponent {
  notoData: DestinationInfo = {
    name: 'Noto',
    slug: 'noto',
    shortDescription: 'The crown jewel of Sicilian Baroque architecture with honey-colored limestone buildings creating a harmonious "Stone Garden"',
    heroImage: 'noto.jpg',
    heroImageAlt: 'Noto Cathedral and baroque buildings in golden honey-colored limestone',
    region: 'Southeast Sicily (Syracuse Province)',
    bestTimeToVisit: 'April-June, September-October (perfect lighting), late afternoon golden hour year-round',
    recommendedDuration: '1 full day',
    specialties: ['Baroque Architecture', 'UNESCO Heritage', 'Limestone Buildings', 'Infiorata Festival'],
    
    distances: [
      { city: 'Siracusa', miles: 20, driveTime: '30m' },
      { city: 'Ragusa', miles: 35, driveTime: '45m' },
      { city: 'Modica', miles: 25, driveTime: '35m' },
      { city: 'Catania', miles: 60, driveTime: '1h 15m' },
      { city: 'Taormina', miles: 90, driveTime: '1h 45m' },
      { city: 'Agrigento', miles: 85, driveTime: '1h 45m' },
      { city: 'Palermo', miles: 180, driveTime: '3h 30m' },
      { city: 'Cefalù', miles: 175, driveTime: '3h' },
      { city: 'Trapani', miles: 220, driveTime: '4h' },
      { city: 'Erice', miles: 220, driveTime: '4h' },
      { city: 'Monreale', miles: 180, driveTime: '3h 30m' },
      { city: 'Piazza Armerina', miles: 80, driveTime: '1h 30m' },
      { city: 'Gioiosa Marea', miles: 130, driveTime: '2h 30m' }
    ],
    
    activities: [
      {
        title: 'Corso Vittorio Emanuele - The Baroque Promenade',
        description: 'Stroll down Noto\'s magnificent main street, a perfect linear showcase of baroque architecture. This pedestrian thoroughfare features three spectacular piazzas connected by honey-colored limestone palaces, churches, and noble residences that create one of Europe\'s most harmonious baroque ensembles.',
        image: 'noto_corso_vittorio.jpg',
        imageAlt: 'Corso Vittorio Emanuele with baroque palaces and honey-colored limestone buildings',
        highlights: [
          'Porta Reale - triumphal arch entrance to the baroque city',
          'Three magnificent piazzas: Immacolata, Municipio, and XVI Maggio',
          'Palazzo Ducezio - elegant town hall with curved facade',
          'Chiesa di San Francesco all\'Immacolata',
          'Continuous baroque streetscape without architectural interruption'
        ],
        tips: [
          'Best lighting for photography: late afternoon golden hour',
          'Walk the entire corso (1.2 km) for complete baroque experience',
          'Many palaces have ground-floor shops and cafés',
          'Free walking tours available from tourist office',
          'Evening illumination creates magical atmosphere'
        ]
      },
      {
        title: 'Noto Cathedral and Piazza del Municipio',
        description: 'Admire the crown jewel of Noto\'s baroque architecture - the Cathedral of San Nicolò with its magnificent facade and recently restored dome. The cathedral anchors Piazza del Municipio, considered one of Sicily\'s most beautiful baroque squares.',
        image: 'noto_cathedral.jpg',
        imageAlt: 'Noto Cathedral facade with baroque architectural details and twin bell towers',
        highlights: [
          'Spectacular baroque facade with twin bell towers',
          'Recently restored dome and interior after 1996 collapse',
          'Monumental staircase leading to cathedral entrance',
          'Palazzo Vescovile (Bishop\'s Palace) with elegant balconies',
          'Perfect baroque urban planning and architectural harmony'
        ],
        tips: [
          'Cathedral interior: €2 entrance fee',
          'Climb the staircase for elevated views of the piazza',
          'Best photos from palazzo steps across the square',
          'Interior restoration completed in 2007 - pristinely preserved',
          'Cathedral illuminated beautifully in evening'
        ]
      },
      {
        title: 'Palazzo Nicolaci and Balcony Art',
        description: 'Explore the most ornate of Noto\'s baroque palaces, famous for its incredibly detailed stone balconies supported by carved figures (mensoloni). Palazzo Nicolaci represents the pinnacle of baroque decorative art with every surface showcasing masterful stonework.',
        image: 'noto_palazzo_nicolaci.jpg',
        imageAlt: 'Palazzo Nicolaci baroque balconies with carved stone figures and ornate details',
        highlights: [
          'Six baroque balconies with unique carved supporting figures',
          'Mensoloni depicting lions, horses, cherubs, and mythical creatures',
          'Elegant palace interior with period furniture and frescoes',
          'Piano nobile with original 18th-century decorations',
          'Rooftop terrace with panoramic views over baroque Noto'
        ],
        tips: [
          'Palace interior tours: €5, guided tours available',
          'Best balcony photography from street level',
          'Interior visits limited to small groups',
          'Rooftop access sometimes available for special events',
          'Each balcony tells different story through stone carvings'
        ]
      },
      {
        title: 'Chiesa di Santa Chiara and Santissimo Salvatore',
        description: 'Discover Noto\'s remarkable baroque churches beyond the cathedral, each showcasing unique architectural elements and decorative details. These churches demonstrate the wealth and artistic ambition of 18th-century Noto\'s noble families and religious orders.',
        image: 'noto_santa_chiara.jpg',
        imageAlt: 'Interior of Santa Chiara church with baroque decorations and altar',
        highlights: [
          'Santa Chiara - elliptical interior design and baroque altar',
          'Santissimo Salvatore - elegant facade and cloistered convent',
          'Chiesa del Carmine with distinctive dome',
          'San Domenico - theatrical baroque facade',
          'Each church represents different baroque architectural approaches'
        ],
        tips: [
          'Most churches free entry with donation suggested',
          'Churches typically close 12:30-3:30 PM',
          'Modest dress required for church visits',
          'Some churches open only for mass - check schedules',
          'Combined church visits create complete baroque experience'
        ]
      },
      {
        title: 'Upper Noto and Panoramic Views',
        description: 'Climb to Noto Alta (Upper Noto) for spectacular panoramic views over the baroque city and surrounding Hyblaean hills. This elevated area also contains the ruins of the original medieval Noto, destroyed in the 1693 earthquake.',
        image: 'noto_panoramic_view.jpg',
        imageAlt: 'Panoramic view of baroque Noto from Upper Noto with hills in background',
        highlights: [
          'Complete aerial view of baroque city\'s urban planning',
          'Ruins of medieval Noto Antica (Old Noto)',
          'Hyblaean Mountains and almond grove landscapes',
          'Sanctuary of the Santissimo Crocifisso',
          'Sunset photography over baroque cityscape'
        ],
        tips: [
          'Drive or taxi to upper area - steep uphill walk',
          'Best views 2 hours before sunset',
          'Bring camera for spectacular baroque city overview',
          'Medieval ruins free to explore',
          'Clear days offer views to the Mediterranean Sea'
        ]
      },
      {
        title: 'Infiorata Festival and Cultural Events',
        description: 'Experience Noto\'s world-famous Infiorata flower festival (third weekend in May) when Via Corrado Nicolaci is carpeted with elaborate flower petal artworks. This spectacular event transforms the baroque street into a colorful living canvas.',
        image: 'noto_infiorata.jpg',
        imageAlt: 'Elaborate flower petal carpet artwork during Noto Infiorata festival',
        highlights: [
          'Intricate flower petal carpets covering entire street',
          'Artists create detailed designs using millions of flower petals',
          'International flower artists and local community participation',
          'Baroque architecture backdrop for colorful floral art',
          'Evening illumination of completed flower artworks'
        ],
        tips: [
          'Infiorata occurs third weekend in May annually',
          'Book accommodations well in advance for festival weekend',
          'Artworks best viewed from palazzo balconies',
          'Festival creates significant crowds - arrive early',
          'Year-round cultural events celebrate baroque heritage'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Free parking in designated areas outside historic center. Via XXV Aprile and Piazza Marconi offer closest free parking with 5-minute walk to Corso.',
      accessibility: 'Historic center is pedestrian-friendly with smooth stone paving. Some palazzo interiors have steps. Cathedral and main churches have ramp access.',
      costs: 'Most churches: Free (donations welcome). Palace interiors: €3-5. Guided tours: €8-12. Restaurants: €18-28 per person.',
      booking: 'No advance booking required for most attractions. Palace tours may require reservation. Restaurant reservations recommended for dinner.'
    }
  };

  constructor() {
    // Component initialization
  }
}