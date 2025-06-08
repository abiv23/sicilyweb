import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-trapani',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="trapaniData"></app-destination-info-sheet>
  `
})
export class TrapaniComponent {
  trapaniData: DestinationInfo = {
    name: 'Trapani',
    slug: 'trapani',
    shortDescription: 'Historic port city known for sea salt production, tuna fishing, and gateway to the magical Egadi Islands',
    heroImage: 'trapani.jpg',
    heroImageAlt: 'Trapani historic port with traditional salt windmills and Egadi Islands in distance',
    region: 'Western Sicily (Trapani Province)',
    bestTimeToVisit: 'April-June, September-October (ideal weather), May-September (best for island hopping)',
    recommendedDuration: '1-2 days (plus day trips to islands)',
    specialties: ['Sea Salt Production', 'Tuna Fishing', 'Island Gateway', 'Maritime Heritage'],
    
    distances: [
      { city: 'Erice', miles: 9, driveTime: '30m (via cable car) / 45m (by road)' },
      { city: 'Palermo', miles: 65, driveTime: '1h 30m' },
      { city: 'Monreale', miles: 60, driveTime: '1h 30m' },
      { city: 'Cefalù', miles: 85, driveTime: '1h 45m' },
      { city: 'Agrigento', miles: 75, driveTime: '1h 45m' },
      { city: 'Catania', miles: 150, driveTime: '2h 45m' },
      { city: 'Taormina', miles: 185, driveTime: '3h 30m' },
      { city: 'Siracusa', miles: 220, driveTime: '4h' },
      { city: 'Ragusa', miles: 220, driveTime: '3h 30m' },
      { city: 'Noto', miles: 220, driveTime: '4h' },
      { city: 'Piazza Armerina', miles: 155, driveTime: '2h 45m' },
      { city: 'Gioiosa Marea', miles: 200, driveTime: '3h 45m' }
    ],
    
    activities: [
      {
        title: 'Salt Pans and Ancient Windmills (Saline di Trapani)',
        description: 'Explore the spectacular salt pans that have operated continuously for over 2,000 years, creating a unique landscape of geometric pools, traditional windmills, and white salt pyramids. This UNESCO-protected area represents one of Europe\'s most important wetland ecosystems.',
        image: 'trapani_salt_pans.jpg',
        imageAlt: 'Traditional windmills and geometric salt pans with white salt pyramids',
        highlights: [
          'Ancient Phoenician salt production methods still in use',
          'Traditional windmills pumping seawater into evaporation ponds',
          'Spectacular sunset photography over salt flats',
          'Important bird sanctuary with flamingos and migratory species',
          'Salt Museum (Museo del Sale) explaining 2,000-year history'
        ],
        tips: [
          'Best visited late afternoon for golden hour lighting',
          'Salt Museum entry: €3, includes windmill visit',
          'Bring sunglasses and sun protection - intense reflection',
          'Spring and autumn best for bird watching',
          'Purchase gourmet sea salt as authentic souvenir'
        ]
      },
      {
        title: 'Egadi Islands Day Trips - Favignana, Levanzo, Marettimo',
        description: 'Discover the pristine Egadi Islands archipelago, just 20 minutes by hydrofoil from Trapani. These three islands offer crystal-clear waters, ancient tuna fishing traditions, prehistoric cave paintings, and some of the Mediterranean\'s most beautiful beaches.',
        image: 'egadi_islands.jpg',
        imageAlt: 'Crystal clear turquoise waters and limestone cliffs of Egadi Islands',
        highlights: [
          'Favignana - largest island with historic tuna fishery and pristine beaches',
          'Levanzo - prehistoric cave paintings and charming fishing village',
          'Marettimo - wild island with hiking trails and secluded coves',
          'Traditional mattanza tuna fishing demonstrations (seasonal)',
          'Boat tours exploring hidden caves and crystal-clear swimming spots'
        ],
        tips: [
          'Hydrofoil tickets: €15-25 round trip per island',
          'Day trips possible but overnight stays allow deeper exploration',
          'Rent bikes or scooters on Favignana for island touring',
          'Cave paintings on Levanzo require guided tour',
          'Pack swimming gear and snorkeling equipment'
        ]
      },
      {
        title: 'Historic Center and Baroque Churches',
        description: 'Wander through Trapani\'s atmospheric historic center, built on a sickle-shaped peninsula jutting into the sea. The old town features beautiful baroque churches, noble palaces, and narrow streets that reveal centuries of maritime trading prosperity.',
        image: 'trapani_historic_center.jpg',
        imageAlt: 'Baroque church facade and narrow medieval streets in Trapani old town',
        highlights: [
          'Cathedral of San Lorenzo with baroque facade and art treasures',
          'Chiesa del Purgatorio housing the famous Misteri procession statues',
          'Palazzo della Giudecca in former Jewish quarter',
          'Via Garibaldi - elegant main street with shops and cafés',
          'Torre di Ligny watchtower with panoramic sea views'
        ],
        tips: [
          'Historic center perfect for walking - mostly pedestrian areas',
          'Churches typically close 12:30-3:30 PM',
          'Torre di Ligny houses prehistoric museum (€3)',
          'Former Jewish quarter (Giudecca) has unique architecture',
          'Evening passeggiata along waterfront promenade'
        ]
      },
      {
        title: 'Traditional Tuna Fishing Heritage (Tonnara)',
        description: 'Learn about Trapani\'s ancient tuna fishing traditions, particularly the historic mattanza ritual and the massive tuna traps that made this city wealthy for centuries. Visit former tuna fisheries and discover this unique maritime culture.',
        image: 'trapani_tonnara.jpg',
        imageAlt: 'Historic tuna fishing boats and nets at traditional tonnara facility',
        highlights: [
          'Ex-Stabilimento Florio tonnara - historic tuna processing facility',
          'Traditional mattanza fishing techniques and seasonal migrations',
          'Tuna fishing boats and ancient net systems',
          'Guided tours explaining centuries-old fishing methods',
          'Tuna-based cuisine in traditional restaurants'
        ],
        tips: [
          'Mattanza season typically May-June (weather dependent)',
          'Ex-Stabilimento Florio tours available by appointment',
          'Try traditional tuna dishes: bottarga, ventresca, buzzonaglia',
          'Some tonnare now converted to cultural centers',
          'Best understood through local food and restaurant visits'
        ]
      },
      {
        title: 'Marsala Wine Region Day Trip',
        description: 'Explore the nearby Marsala wine region, famous for its fortified wine and historic wine estates. This area combines wine tasting with archaeological sites, including the ancient Phoenician city of Mozia on a small lagoon island.',
        image: 'marsala_vineyards.jpg',
        imageAlt: 'Marsala wine vineyards with historic winery buildings and tasting room',
        highlights: [
          'Historic Marsala wine cellars and tasting rooms',
          'Florio, Pellegrino, and other renowned wine estates',
          'Mozia archaeological site - ancient Phoenician island city',
          'Traditional Marsala production methods and aging processes',
          'Pairing local wines with Sicilian specialties'
        ],
        tips: [
          'Marsala city 20 minutes south of Trapani',
          'Wine estate tours typically €8-15 with tastings',
          'Mozia island accessed by small boat (€5)',
          'Book winery visits in advance',
          'Designated driver essential for wine touring'
        ]
      },
      {
        title: 'Seafood Cuisine and Maritime Gastronomy',
        description: 'Experience exceptional seafood cuisine in Trapani\'s restaurants, featuring the freshest catches from surrounding waters and traditional recipes passed down through generations of fishing families. The maritime location provides access to unique Mediterranean specialties.',
        image: 'trapani_seafood.jpg',
        imageAlt: 'Fresh seafood platter with local tuna, sea urchins and Mediterranean fish',
        highlights: [
          'Fresh tuna specialties: crudo, carpaccio, and traditional preparations',
          'Couscous alla trapanese - North African influenced dish',
          'Sea urchins, red prawns, and daily fish market catches',
          'Waterfront restaurants with harbor views',
          'Local Marsala wine pairings with seafood dishes'
        ],
        tips: [
          'Fish market near port for freshest selections',
          'Try couscous alla trapanese - unique Sicilian-Arabic fusion',
          'Many restaurants close Mondays during off-season',
          'Waterfront dining provides harbor atmosphere',
          'Reserve harbor-view tables for sunset dining'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Free street parking available in most areas outside historic center. Paid parking near port for ferry connections. Historic center has limited traffic zones.',
      accessibility: 'Historic center mostly flat and walkable. Ferry terminals accessible. Salt pans have uneven terrain. Most churches and main attractions have ramp access.',
      costs: 'Salt Museum: €3. Egadi Islands ferry: €15-25 round trip. Wine tastings: €8-15. Restaurants: €18-30 per person. Island rentals: €15-25/day.',
      booking: 'Ferry tickets can be purchased same day except peak summer. Wine estate tours should be booked in advance. Restaurant reservations recommended for waterfront dining.'
    }
  };

  constructor() {
    // Component initialization
  }
}