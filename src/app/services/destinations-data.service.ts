import { Injectable } from '@angular/core';

export interface DestinationDistance {
  city: string;
  miles: number;
  driveTime: string;
}

export interface ActivitySection {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  highlights: string[];
  tips?: string[];
}

export interface DestinationInfo {
  name: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  heroImageAlt?: string;
  region: string;
  bestTimeToVisit: string;
  recommendedDuration: string;
  specialties: string[];
  distances: DestinationDistance[];
  activities: ActivitySection[];
  practicalInfo?: {
    parking?: string;
    accessibility?: string;
    costs?: string;
    booking?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DestinationsDataService {

  // Base destinations with coordinates for distance calculations
  private readonly baseDestinations = [
    { name: 'Catania', slug: 'catania' },
    { name: 'Taormina', slug: 'taormina' },
    { name: 'Siracusa', slug: 'siracusa' },
    { name: 'Cefalù', slug: 'cefalu' },
    { name: 'Piazza Armerina', slug: 'piazza-armerina' },
    { name: 'Agrigento', slug: 'agrigento' },
    { name: 'Erice', slug: 'erice' },
    { name: 'Monreale', slug: 'monreale' },
    { name: 'Trapani', slug: 'trapani' },
    { name: 'Ragusa', slug: 'ragusa' },
    { name: 'Noto', slug: 'noto' },
    { name: 'Gioiosa Marea', slug: 'gioiosa-marea' },
    { name: 'Palermo', slug: 'palermo' }
  ];

  // Distance matrix (simplified - in real app you might calculate from coordinates)
private readonly distanceMatrix: { [key: string]: DestinationDistance[] } = {
  catania: [
    { city: 'Taormina', miles: 30, driveTime: '45m' },
    { city: 'Siracusa', miles: 40, driveTime: '1h' },
    { city: 'Cefalù', miles: 110, driveTime: '2h' },
    { city: 'Piazza Armerina', miles: 55, driveTime: '1h 15m' },
    { city: 'Agrigento', miles: 105, driveTime: '2h' },
    { city: 'Erice', miles: 155, driveTime: '3h' },
    { city: 'Monreale', miles: 125, driveTime: '2h 30m' },
    { city: 'Trapani', miles: 150, driveTime: '2h 45m' },
    { city: 'Ragusa', miles: 80, driveTime: '1h 30m' },
    { city: 'Noto', miles: 60, driveTime: '1h 15m' },
    { city: 'Gioiosa Marea', miles: 80, driveTime: '1h 30m' },
    { city: 'Palermo', miles: 120, driveTime: '2h 15m' }
  ],

  ragusa: [
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

  taormina: [
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

  siracusa: [
    { city: 'Noto', miles: 20, driveTime: '30m' },
    { city: 'Catania', miles: 40, driveTime: '1h' },
    { city: 'Ragusa', miles: 60, driveTime: '1h 15m' },
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

  palermo: [
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

  agrigento: [
    { city: 'Piazza Armerina', miles: 50, driveTime: '1h 10m' },
    { city: 'Trapani', miles: 75, driveTime: '1h 45m' },
    { city: 'Palermo', miles: 80, driveTime: '1h 45m' },
    { city: 'Noto', miles: 85, driveTime: '1h 45m' },
    { city: 'Ragusa', miles: 90, driveTime: '1h 45m' },
    { city: 'Catania', miles: 105, driveTime: '2h' },
    { city: 'Siracusa', miles: 105, driveTime: '2h' },
    { city: 'Cefalù', miles: 120, driveTime: '2h 15m' },
    { city: 'Taormina', miles: 140, driveTime: '2h 45m' },
    { city: 'Erice', miles: 85, driveTime: '1h 45m' },
    { city: 'Monreale', miles: 80, driveTime: '1h 45m' },
    { city: 'Gioiosa Marea', miles: 185, driveTime: '3h 30m' }
  ],

  trapani: [
    { city: 'Erice', miles: 9, driveTime: '30m (via cable car) / 45m (by road)' },
    { city: 'Marsala', miles: 20, driveTime: '35m' },
    { city: 'Palermo', miles: 65, driveTime: '1h 30m' },
    { city: 'Monreale', miles: 60, driveTime: '1h 30m' },
    { city: 'Agrigento', miles: 75, driveTime: '1h 45m' },
    { city: 'Cefalù', miles: 85, driveTime: '1h 45m' },
    { city: 'Catania', miles: 150, driveTime: '2h 45m' },
    { city: 'Piazza Armerina', miles: 155, driveTime: '2h 45m' },
    { city: 'Taormina', miles: 185, driveTime: '3h 30m' },
    { city: 'Gioiosa Marea', miles: 200, driveTime: '3h 45m' },
    { city: 'Ragusa', miles: 220, driveTime: '3h 30m' },
    { city: 'Siracusa', miles: 220, driveTime: '4h' },
    { city: 'Noto', miles: 220, driveTime: '4h' }
  ],

  erice: [
    { city: 'Trapani', miles: 9, driveTime: '30m (via cable car) / 45m (by road)' },
    { city: 'Marsala', miles: 25, driveTime: '45m' },
    { city: 'Palermo', miles: 65, driveTime: '1h 30m' },
    { city: 'Monreale', miles: 60, driveTime: '1h 30m' },
    { city: 'Agrigento', miles: 85, driveTime: '1h 45m' },
    { city: 'Cefalù', miles: 90, driveTime: '1h 45m' },
    { city: 'Catania', miles: 155, driveTime: '3h' },
    { city: 'Piazza Armerina', miles: 140, driveTime: '2h 45m' },
    { city: 'Taormina', miles: 185, driveTime: '3h 30m' },
    { city: 'Gioiosa Marea', miles: 205, driveTime: '3h 50m' },
    { city: 'Ragusa', miles: 205, driveTime: '3h 30m' },
    { city: 'Siracusa', miles: 225, driveTime: '4h 15m' },
    { city: 'Noto', miles: 220, driveTime: '4h' }
  ],

  cefalu: [
    { city: 'Palermo', miles: 43, driveTime: '1h' },
    { city: 'Monreale', miles: 50, driveTime: '1h 15m' },
    { city: 'Trapani', miles: 85, driveTime: '1h 45m' },
    { city: 'Erice', miles: 90, driveTime: '1h 45m' },
    { city: 'Catania', miles: 110, driveTime: '2h' },
    { city: 'Agrigento', miles: 120, driveTime: '2h 15m' },
    { city: 'Gioiosa Marea', miles: 85, driveTime: '1h 30m' },
    { city: 'Taormina', miles: 140, driveTime: '2h 30m' },
    { city: 'Piazza Armerina', miles: 145, driveTime: '2h 30m' },
    { city: 'Siracusa', miles: 150, driveTime: '2h 45m' },
    { city: 'Ragusa', miles: 170, driveTime: '3h' },
    { city: 'Noto', miles: 175, driveTime: '3h' }
  ],

  monreale: [
    { city: 'Palermo', miles: 5, driveTime: '20m' },
    { city: 'Cefalù', miles: 50, driveTime: '1h 15m' },
    { city: 'Trapani', miles: 60, driveTime: '1h 30m' },
    { city: 'Erice', miles: 60, driveTime: '1h 30m' },
    { city: 'Agrigento', miles: 80, driveTime: '1h 45m' },
    { city: 'Catania', miles: 125, driveTime: '2h 30m' },
    { city: 'Piazza Armerina', miles: 110, driveTime: '2h 15m' },
    { city: 'Gioiosa Marea', miles: 125, driveTime: '2h 20m' },
    { city: 'Taormina', miles: 155, driveTime: '3h' },
    { city: 'Ragusa', miles: 160, driveTime: '2h 50m' },
    { city: 'Siracusa', miles: 165, driveTime: '3h 15m' },
    { city: 'Noto', miles: 180, driveTime: '3h 30m' }
  ],

  noto: [
    { city: 'Siracusa', miles: 20, driveTime: '30m' },
    { city: 'Ragusa', miles: 35, driveTime: '45m' },
    { city: 'Catania', miles: 60, driveTime: '1h 15m' },
    { city: 'Piazza Armerina', miles: 80, driveTime: '1h 30m' },
    { city: 'Agrigento', miles: 85, driveTime: '1h 45m' },
    { city: 'Taormina', miles: 90, driveTime: '1h 45m' },
    { city: 'Gioiosa Marea', miles: 130, driveTime: '2h 30m' },
    { city: 'Cefalù', miles: 175, driveTime: '3h' },
    { city: 'Palermo', miles: 180, driveTime: '3h 30m' },
    { city: 'Monreale', miles: 180, driveTime: '3h 30m' },
    { city: 'Trapani', miles: 220, driveTime: '4h' },
    { city: 'Erice', miles: 220, driveTime: '4h' }
  ],

  "piazza-armerina": [
    { city: 'Agrigento', miles: 50, driveTime: '1h 10m' },
    { city: 'Catania', miles: 55, driveTime: '1h 15m' },
    { city: 'Ragusa', miles: 65, driveTime: '1h 10m' },
    { city: 'Siracusa', miles: 75, driveTime: '1h 30m' },
    { city: 'Noto', miles: 80, driveTime: '1h 30m' },
    { city: 'Taormina', miles: 85, driveTime: '1h 45m' },
    { city: 'Palermo', miles: 105, driveTime: '2h' },
    { city: 'Monreale', miles: 110, driveTime: '2h 15m' },
    { city: 'Gioiosa Marea', miles: 120, driveTime: '2h 15m' },
    { city: 'Cefalù', miles: 145, driveTime: '2h 30m' },
    { city: 'Erice', miles: 140, driveTime: '2h 45m' },
    { city: 'Trapani', miles: 155, driveTime: '2h 45m' }
  ],

  "gioiosa-marea": [
    { city: 'Messina', miles: 35, driveTime: '45m' },
    { city: 'Taormina', miles: 40, driveTime: '1h' },
    { city: 'Milazzo (ferry to Aeolian Islands)', miles: 25, driveTime: '35m' },
    { city: 'Catania', miles: 80, driveTime: '1h 30m' },
    { city: 'Cefalù', miles: 85, driveTime: '1h 30m' },
    { city: 'Palermo', miles: 120, driveTime: '2h 15m' },
    { city: 'Piazza Armerina', miles: 120, driveTime: '2h 15m' },
    { city: 'Monreale', miles: 125, driveTime: '2h 20m' },
    { city: 'Noto', miles: 130, driveTime: '2h 30m' },
    { city: 'Siracusa', miles: 140, driveTime: '2h 30m' },
    { city: 'Ragusa', miles: 170, driveTime: '3h' },
    { city: 'Agrigento', miles: 185, driveTime: '3h 30m' },
    { city: 'Trapani', miles: 200, driveTime: '3h 45m' },
    { city: 'Erice', miles: 205, driveTime: '3h 50m' }
  ]
};

  /**
   * Get distances from a specific destination to all others
   */
  getDistancesFrom(destinationSlug: string): DestinationDistance[] {
    return this.distanceMatrix[destinationSlug] || [];
  }

  /**
   * Get all destination slugs for routing
   */
  getAllDestinationSlugs(): string[] {
    return this.baseDestinations.map(dest => dest.slug);
  }

  /**
   * Get destination name from slug
   */
  getDestinationName(slug: string): string {
    const dest = this.baseDestinations.find(d => d.slug === slug);
    return dest?.name || '';
  }

  /**
   * Validate if a destination slug exists
   */
  isValidDestination(slug: string): boolean {
    return this.baseDestinations.some(dest => dest.slug === slug);
  }

  /**
   * Get sample destination data (you'll expand this with real data)
   */
  getSampleDestinationData(slug: string): DestinationInfo | null {
    // This is where you'd return actual destination data
    // For now, returning null - you'll implement specific destination data
    return null;
  }
}