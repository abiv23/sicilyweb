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
      { city: 'Agrigento', miles: 85, driveTime: '1h 45m' },
      { city: 'Erice', miles: 155, driveTime: '3h' },
      { city: 'Monreale', miles: 125, driveTime: '2h 30m' },
      { city: 'Trapani', miles: 150, driveTime: '2h 45m' },
      { city: 'Ragusa', miles: 85, driveTime: '1h 30m' },
      { city: 'Noto', miles: 60, driveTime: '1h 15m' },
      { city: 'Gioiosa Marea', miles: 80, driveTime: '1h 30m' },
      { city: 'Palermo', miles: 120, driveTime: '2h 15m' }
    ],
    
    ragusa: [
      { city: 'Catania', miles: 85, driveTime: '1h 30m' },
      { city: 'Siracusa', miles: 60, driveTime: '1h 15m' },
      { city: 'Noto', miles: 35, driveTime: '45m' },
      { city: 'Modica', miles: 10, driveTime: '20m' },
      { city: 'Agrigento', miles: 90, driveTime: '2h' },
      { city: 'Palermo', miles: 155, driveTime: '2h 45m' },
      { city: 'Taormina', miles: 110, driveTime: '2h' },
      { city: 'Cefalù', miles: 180, driveTime: '3h' },
      { city: 'Trapani', miles: 220, driveTime: '3h 30m' },
      { city: 'Monreale', miles: 160, driveTime: '2h 50m' },
      { city: 'Piazza Armerina', miles: 65, driveTime: '1h 10m' },
      { city: 'Erice', miles: 225, driveTime: '3h 35m' },
      { city: 'Gioiosa Marea', miles: 140, driveTime: '2h 30m' }
    ],
    
    // Add more distance arrays for each destination...
    // This is a simplified example - you would continue for all destinations
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