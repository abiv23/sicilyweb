import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationInfoSheetComponent } from '../../../components/destination-info-sheet/destination-info-sheet.component';
import { DestinationInfo } from '../../../services/destinations-data.service';

@Component({
  selector: 'app-siracusa',
  standalone: true,
  imports: [CommonModule, DestinationInfoSheetComponent],
  template: `
    <app-destination-info-sheet [destination]="siracusaData"></app-destination-info-sheet>
  `
})
export class SiracusaComponent {
  siracusaData: DestinationInfo = {
    name: 'Siracusa',
    slug: 'siracusa',
    shortDescription: 'Birthplace of Archimedes with stunning Ortigia island and ancient Greek archaeological treasures rivaling Athens',
    heroImage: 'siracusa.jpg',
    heroImageAlt: 'Ortigia island waterfront with baroque cathedral and ancient Greek columns',
    region: 'Southeast Sicily (Syracuse Province)',
    bestTimeToVisit: 'April-June, September-October (perfect weather), November-March (fewer crowds, mild temperatures)',
    recommendedDuration: '2 full days minimum',
    specialties: ['Ancient Greek Sites', 'Ortigia Island', 'Archaeology', 'Baroque Architecture'],
    
    distances: [
      { city: 'Noto', miles: 20, driveTime: '30m' },
      { city: 'Ragusa', miles: 60, driveTime: '1h 15m' },
      { city: 'Catania', miles: 40, driveTime: '1h' },
      { city: 'Taormina', miles: 70, driveTime: '1h 30m' },
      { city: 'Piazza Armerina', miles: 75, driveTime: '1h 30m' },
      { city: 'Agrigento', miles: 105, driveTime: '2h' },
      { city: 'Palermo', miles: 170, driveTime: '3h 15m' },
      { city: 'Cefalù', miles: 150, driveTime: '2h 45m' },
      { city: 'Trapani', miles: 220, driveTime: '4h' },
      { city: 'Erice', miles: 225, driveTime: '4h 15m' },
      { city: 'Monreale', miles: 165, driveTime: '3h 15m' },
      { city: 'Gioiosa Marea', miles: 140, driveTime: '2h 30m' }
    ],
    
    activities: [
      {
        title: 'Neapolis Archaeological Park - Ancient Greek Theater',
        description: 'Explore one of the most important archaeological sites in the Mediterranean, featuring a magnificent 5th-century BC Greek theater carved directly into living rock. This UNESCO World Heritage site showcases the pinnacle of ancient Greek engineering and continues to host performances today.',
        image: 'siracusa_greek_theater.jpg',
        imageAlt: 'Ancient Greek theater carved into rock overlooking Syracuse with sea in background',
        highlights: [
          'Greek Theater - 15,000 seat capacity carved from living rock',
          'Roman Amphitheater for gladiatorial combats',
          'Ear of Dionysius (Orecchio di Dionisio) - acoustic cave',
          'Paradise Quarry (Latomia del Paradiso) with ancient stone quarries',
          'Modern performances in 2,500-year-old theater setting'
        ],
        tips: [
          'Visit early morning for best lighting and fewer crowds',
          'Combined ticket includes all park attractions (€13.50)',
          'Check summer performance schedule for Greek tragedies',
          'Comfortable shoes essential for uneven ancient surfaces',
          'Audio guide provides essential historical context'
        ]
      },
      {
        title: 'Ortigia Island - Medieval and Baroque Jewel',
        description: 'Discover the enchanting heart of ancient Syracuse on this small island connected to the mainland by bridges. Ortigia combines Greek foundations, medieval streets, and stunning baroque architecture in one of Sicily\'s most beautiful historic centers.',
        image: 'ortigia_waterfront.jpg',
        imageAlt: 'Ortigia island waterfront with colorful buildings and baroque cathedral',
        highlights: [
          'Cathedral built inside ancient Greek Temple of Athena',
          'Temple of Apollo ruins - oldest Doric temple in Sicily',
          'Arethusa Fountain with papyrus plants and legend of nymph',
          'Palazzo Bellomo Regional Gallery with Caravaggio\'s "Burial of St. Lucy"',
          'Castello Maniace fortress guarding harbor entrance'
        ],
        tips: [
          'Ortigia perfect for walking - entire island explorable on foot',
          'Best gelato at multiple artisanal shops along waterfront',
          'Evening aperitivo with harbor views highly recommended',
          'Many churches close 12:30-3:30 PM for lunch break',
          'Photography magical during golden hour on waterfront'
        ]
      },
      {
        title: 'Cathedral and Temple of Athena Integration',
        description: 'Marvel at one of the world\'s most unique architectural palimpsests - Syracuse Cathedral built directly inside a 5th-century BC Greek temple. Ancient Doric columns are perfectly integrated into the baroque cathedral walls, creating an extraordinary fusion of civilizations.',
        image: 'siracusa_cathedral_columns.jpg',
        imageAlt: 'Interior of Syracuse Cathedral showing ancient Greek columns integrated into baroque walls',
        highlights: [
          'Ancient Doric columns visible inside cathedral walls',
          'Baroque facade hiding 2,500-year-old Greek temple',
          'Santa Lucia chapel with silver statue of patron saint',
          'Original Greek temple floor plan still evident',
          'Architectural evolution spanning 25 centuries'
        ],
        tips: [
          'Cathedral entry: €2, well worth the historical significance',
          'Look for Greek column capitals and ancient stonework',
          'Best appreciated with knowledge of Greek temple architecture',
          'Compare with pure Greek temples at Agrigento',
          'Photography shows incredible architectural synthesis'
        ]
      },
      {
        title: 'Ear of Dionysius and Ancient Quarries',
        description: 'Explore the legendary limestone cave known as the "Ear of Dionysius" for its perfect acoustics and ear-like shape. These ancient quarries provided stone for Syracuse\'s monuments while serving as prisons for Athenian captives after the disastrous Sicilian Expedition.',
        image: 'ear_of_dionysius.jpg',
        imageAlt: 'Interior of Ear of Dionysius cave showing dramatic limestone formations',
        highlights: [
          'Perfect acoustics - whispers audible throughout cave',
          'Named by Caravaggio for its ear-like appearance',
          'Prison for 7,000 Athenian soldiers (413 BC)',
          'Paradise Quarry with ancient extraction techniques',
          'Dramatic limestone formations and underground chambers'
        ],
        tips: [
          'Test the acoustics - speak softly to hear amplification',
          'Cool temperature inside provides relief from summer heat',
          'Part of Neapolis Archaeological Park ticket',
          'Historically significant site of Athenian defeat',
          'Combine with Greek Theater visit for complete experience'
        ]
      },
      {
        title: 'Regional Archaeological Museum',
        description: 'Discover one of Sicily\'s finest archaeological collections, showcasing treasures from ancient Syracuse and eastern Sicily. The museum provides essential context for understanding the archaeological sites and Syracuse\'s role as a major Greek polis.',
        image: 'siracusa_museum.jpg',
        imageAlt: 'Ancient Greek statues and artifacts in Syracuse Archaeological Museum',
        highlights: [
          'Venus Landolina - headless but stunning ancient Greek statue',
          'Greek and Roman coins from Syracuse mints',
          'Sarcophagi and sculptures from ancient necropolises',
          'Prehistoric artifacts from Sicilian sites',
          'Interactive displays explaining ancient Syracuse society'
        ],
        tips: [
          'Museum entry: €8, essential for archaeology enthusiasts',
          'Visit before or after archaeological park for context',
          'English descriptions available for major pieces',
          'Allow 1.5-2 hours for thorough exploration',
          'Photography allowed in most sections'
        ]
      },
      {
        title: 'Traditional Sicilian Cuisine and Seafood',
        description: 'Experience exceptional Sicilian cuisine in Syracuse\'s restaurants, featuring ultra-fresh seafood from Ionian waters and traditional recipes passed down through generations. Ortigia\'s waterfront restaurants offer dining with spectacular harbor views.',
        image: 'siracusa_seafood.jpg',
        imageAlt: 'Fresh seafood platter with sea urchins and local fish at Syracuse restaurant',
        highlights: [
          'Sea urchins (ricci) - Syracuse specialty from local waters',
          'Fresh swordfish, tuna, and Mediterranean catches',
          'Traditional pasta alla norma with Sicilian eggplant',
          'Granita and brioche for authentic Sicilian breakfast',
          'Local wines from nearby Noto and Pachino regions'
        ],
        tips: [
          'Reserve waterfront tables for sunset dining',
          'Try sea urchin pasta - unique Syracuse delicacy',
          'Many restaurants close Monday during off-season',
          'Local markets (Via Trento) for fresh ingredients',
          'Ortigia evening dining creates magical atmosphere'
        ]
      }
    ],
    
    practicalInfo: {
      parking: 'Ortigia has limited access - park on mainland and walk across bridge. Neapolis Park has free parking at entrance. Talete parking garage near Ortigia bridge.',
      accessibility: 'Ortigia relatively flat and walkable. Archaeological park has uneven ancient surfaces and steps. Cathedral and main sites have ramp access where possible.',
      costs: 'Neapolis Park: €13.50. Cathedral: €2. Museum: €8. Combined tickets available. Restaurants: €20-35 per person. Parking: €1-2/hour in central areas.',
      booking: 'No advance booking required for most attractions. Summer theater performances require advance tickets. Restaurant reservations recommended for waterfront dining.'
    }
  };

  constructor() {
    // Component initialization
  }
}