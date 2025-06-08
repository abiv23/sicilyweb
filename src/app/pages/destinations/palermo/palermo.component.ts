import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-palermo',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="palermoData"></app-destination-info-sheet>
  `
})
export class PalermoComponent {
  palermoData: DestinationInfo = {
    name: 'Palermo',
    slug: 'palermo',
    shortDescription: 'Sicily\'s vibrant capital with Norman palaces, bustling markets, and incredible street food scene in a melting pot of cultures',
    heroImage: 'palermo.jpg',
    heroImageAlt: 'Palermo cityscape with Norman palace and baroque architecture',
    region: 'Northwestern Sicily (Capital)',
    bestTimeToVisit: 'April-June, September-November (mild weather), December-March (fewer crowds, cooler)',
    recommendedDuration: '2-3 days minimum',
    specialties: ['Norman Palaces', 'Street Food', 'Markets', 'Multicultural Heritage'],
    
    distances: [
      { city: 'Monreale', miles: 5, driveTime: '20m' },
      { city: 'Cefalù', miles: 43, driveTime: '1h' },
      { city: 'Trapani', miles: 65, driveTime: '1h 30m' },
      { city: 'Erice', miles: 65, driveTime: '1h 30m' },
      { city: 'Agrigento', miles: 80, driveTime: '1h 45m' },
      { city: 'Catania', miles: 120, driveTime: '2h 15m' },
      { city: 'Taormina', miles: 150, driveTime: '2h 45m' },
      { city: 'Siracusa', miles: 170, driveTime: '3h 15m' },
      { city: 'Ragusa', miles: 155, driveTime: '2h 45m' },
      { city: 'Noto', miles: 180, driveTime: '3h 30m' },
      { city: 'Piazza Armerina', miles: 105, driveTime: '2h' },
      { city: 'Gioiosa Marea', miles: 120, driveTime: '2h 15m' }
    ],
    
    activities: [
      {
        title: 'Norman Palace and Palatine Chapel',
        description: 'Explore the magnificent Norman Palace (Palazzo dei Normanni), seat of Sicilian kings and now the regional parliament. The crown jewel is the Palatine Chapel (Cappella Palatina), a masterpiece of Norman art featuring stunning Byzantine mosaics, Arabic honeycomb ceiling, and marble inlays.',
        image: 'palermo_palatine_chapel.jpg',
        imageAlt: 'Interior of Palatine Chapel with golden Byzantine mosaics and ornate ceiling',
        highlights: [
          'Palatine Chapel - UNESCO World Heritage masterpiece',
          'Christ Pantocrator mosaic and biblical narrative scenes',
          'Muqarnas ceiling with Arabic geometric patterns',
          'Royal Apartments with period furniture and tapestries',
          'Pisana Tower with panoramic city views'
        ],
        tips: [
          'Book tickets online in advance - limited daily visitors',
          'Audio guide essential for understanding complex history',
          'Photography allowed but no flash near mosaics',
          'Visit early morning for best lighting',
          'Combine with nearby San Giovanni degli Eremiti'
        ]
      },
      {
        title: 'Ballarò Market and Street Food Tour',
        description: 'Immerse yourself in Palermo\'s most authentic and vibrant market, where Arab, Norman, and Spanish influences create a unique sensory experience. Ballarò offers the best street food in Sicily, with vendors calling out in Sicilian dialect amid colorful displays of fresh produce.',
        image: 'palermo_ballaro_market.jpg',
        imageAlt: 'Bustling Ballarò market with vendors selling fresh produce and street food',
        highlights: [
          'Pani câ meusa - traditional spleen sandwich (for adventurous eaters)',
          'Arancini in dozens of varieties',
          'Fresh sfincione - Sicilian pizza with onions and anchovies',
          'Panelle and cazzilli - chickpea fritters and potato croquettes',
          'Cannoli filled fresh while you wait'
        ],
        tips: [
          'Visit morning (9-11 AM) for peak market energy',
          'Bring cash - most vendors don\'t accept cards',
          'Try multiple small portions rather than full meals',
          'Learn basic Sicilian greetings for better interaction',
          'Follow locals to find the best vendors'
        ]
      },
      {
        title: 'Teatro Massimo and Opera Culture',
        description: 'Visit one of Europe\'s largest opera houses, the magnificent Teatro Massimo, famous for its perfect acoustics and grand neoclassical architecture. This cultural temple represents Palermo\'s sophisticated artistic heritage and offers guided tours of its opulent interiors.',
        image: 'palermo_teatro_massimo.jpg',
        imageAlt: 'Grand neoclassical facade of Teatro Massimo opera house with columns',
        highlights: [
          'Third largest opera house in Europe',
          'Perfect acoustics renowned worldwide',
          'Opulent royal box and period decorations',
          'Grand staircase and foyer architectural details',
          'Rooftop terrace with city panoramic views'
        ],
        tips: [
          'Guided tours: €8, multiple times daily except performance days',
          'Book opera tickets well in advance (season October-June)',
          'Dress code for performances: elegant attire required',
          'English-language tours available',
          'Café Massimo for pre-show aperitivo'
        ]
      },
      {
        title: 'Cathedral and Royal Tombs',
        description: 'Discover Palermo Cathedral, a remarkable architectural palimpsest showing 800 years of Sicilian history. This unique building combines Norman, Gothic, baroque, and neoclassical elements, housing the tombs of Holy Roman Emperors and Norman kings.',
        image: 'palermo_cathedral.jpg',
        imageAlt: 'Palermo Cathedral exterior showing mix of Norman and later architectural styles',
        highlights: [
          'Tombs of Emperor Frederick II and Roger II',
          'Santa Rosalia\'s silver urn and chapel',
          'Treasury with precious religious artifacts',
          'Astronomical meridian line on cathedral floor',
          'Rooftop walkway with panoramic city views'
        ],
        tips: [
          'Cathedral: Free entry, treasury and roof: €7',
          'Royal tombs require separate entrance fee',
          'Best external photography from Via Bonello',
          'Roof tour offers unique perspective on architectural evolution',
          'Combine with nearby Palazzo Abatellis visit'
        ]
      },
      {
        title: 'Quattro Canti and Historic Center',
        description: 'Explore the heart of Palermo at the Quattro Canti (Four Corners), where the city\'s two main baroque streets intersect. This theatrical baroque crossroads divides the historic center into four districts, each with distinct character and attractions.',
        image: 'palermo_quattro_canti.jpg',
        imageAlt: 'Baroque Quattro Canti intersection with ornate building facades',
        highlights: [
          'Piazza Pretoria with baroque fountain (Fontana della Vergogna)',
          'Chiesa di Santa Caterina with stunning baroque interior',
          'Via Maqueda and Corso Vittorio Emanuele - main arteries',
          'Palazzo Abatellis - Regional Gallery with masterpieces',
          'La Martorana church with Byzantine-Norman mosaics'
        ],
        tips: [
          'Start walking tours from Quattro Canti central point',
          'Each corner represents different Spanish rulers',
          'Evening illumination creates magical baroque atmosphere',
          'Many palaces now house shops and restaurants',
          'Free walking tours available from tourist office'
        ]
      },
      {
        title: 'Capuchin Catacombs and Unique Sites',
        description: 'Visit one of the world\'s most unusual and fascinating sites - the Capuchin Catacombs containing thousands of mummified bodies displayed in their clothes. This macabre but historically significant site offers unique insights into Sicilian death customs and social hierarchy.',
        image: 'palermo_catacombs.jpg',
        imageAlt: 'Capuchin Catacombs corridor with preserved bodies in historical dress',
        highlights: [
          '8,000 mummified bodies from 16th-20th centuries',
          'Social hierarchy displayed through dress and positioning',
          'Rosalia Lombardo - perfectly preserved 2-year-old girl',
          'Natural mummification process using dry winds',
          'Historical insight into Sicilian nobility and clergy'
        ],
        tips: [
          'Not suitable for young children or sensitive visitors',
          'Photography prohibited inside catacombs',
          'Entry fee: €3, open daily 9 AM-6 PM',
          'Allow 45 minutes for complete visit',
          'Combine with nearby Cuba and Zisa Arab-Norman sites'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Historic center has limited traffic zones (ZTL). Use Park Centrale near train station or coastal parking areas. Public transport recommended for city center.',
      accessibility: 'Many historic sites have steps and uneven surfaces. Modern areas and major attractions increasingly accessible. Metro and buses have accessibility features.',
      costs: 'Norman Palace: €12. Teatro Massimo tours: €8. Cathedral treasury: €7. Markets: €5-10 for street food tasting. Restaurants: €20-35 per person.',
      booking: 'Norman Palace requires advance online booking. Teatro Massimo tours can be booked on-site. Restaurant reservations recommended, especially in historic center.'
    }
  };

  constructor() {
    // Component initialization
  }
}