// src/app/components/map-image/map-image.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="map-container" [class]="containerClass">
      <div class="map-wrapper">
        <img 
          [src]="imageSrc" 
          [alt]="altText"
          [class]="imageClass"
          class="map-image"
          loading="lazy"
          (error)="onImageError($event)"
          (load)="onImageLoad()">
        
        <!-- Loading state -->
        <div *ngIf="isLoading" class="loading-overlay">
          <div class="loading-spinner"></div>
        </div>
        
        <!-- Error state -->
        <div *ngIf="hasError" class="error-overlay">
          <div class="error-content">
            <span class="error-icon">🗺️</span>
            <p class="error-text">Map unavailable</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .map-container {
      @apply w-full;
      
      /* Mobile: full width with small padding */
      @apply px-4 py-6;
      
      /* Tablet and up: centered with margins */
      @apply md:px-8 md:py-8;
      @apply lg:px-16 lg:py-10;
      @apply xl:px-24 xl:py-12;
      
      /* Extra large screens: max width with auto margins */
      @apply 2xl:max-w-6xl 2xl:mx-auto 2xl:px-8;
    }
    
    .map-wrapper {
      @apply relative w-full overflow-hidden;
      @apply rounded-xl shadow-2xl;
      @apply bg-gradient-to-br from-slate-100 to-slate-200;
      
      /* Aspect ratio container - adjust as needed */
      aspect-ratio: 16 / 10;
      
      /* Subtle border for definition */
      @apply border border-slate-300/50;
    }
    
    .map-image {
      @apply w-full h-full object-cover;
      @apply transition-all duration-500 ease-out;
      
      /* Subtle hover effect */
      @apply hover:scale-105;
      
      /* Smooth loading transition */
      opacity: 0;
      animation: fadeIn 0.5s ease-out forwards;
    }
    
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
    
    .loading-overlay {
      @apply absolute inset-0 flex items-center justify-center;
      @apply bg-gradient-to-br from-slate-100 to-slate-200;
    }
    
    .loading-spinner {
      @apply w-8 h-8 border-4 border-slate-300 border-t-blue-600 rounded-full;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    .error-overlay {
      @apply absolute inset-0 flex items-center justify-center;
      @apply bg-gradient-to-br from-slate-100 to-slate-200;
    }
    
    .error-content {
      @apply text-center text-slate-500;
    }
    
    .error-icon {
      @apply block text-4xl mb-2;
    }
    
    .error-text {
      @apply text-sm font-medium;
    }
    
    /* Responsive adjustments */
    @media (max-width: 640px) {
      .map-wrapper {
        @apply rounded-lg shadow-xl;
        aspect-ratio: 4 / 3;
      }
      
      .map-image:hover {
        transform: none; /* Disable hover effects on mobile */
      }
    }
    
    @media (min-width: 1024px) {
      .map-wrapper {
        @apply rounded-2xl;
        aspect-ratio: 16 / 9;
      }
    }
    
    /* Print styles */
    @media print {
      .map-container {
        @apply px-0 py-4;
      }
      
      .map-wrapper {
        @apply shadow-none border border-slate-400;
      }
      
      .map-image {
        @apply hover:scale-100;
      }
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .map-wrapper {
        @apply border-2 border-slate-600;
      }
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .map-image {
        @apply transition-none hover:scale-100;
      }
      
      .loading-spinner {
        animation: none;
      }
    }
  `]
})
export class MapImageComponent {
  @Input() imageSrc!: string;
  @Input() altText: string = 'Sicily destination map';
  @Input() containerClass: string = '';
  @Input() imageClass: string = '';
  
  isLoading: boolean = true;
  hasError: boolean = false;

  onImageLoad() {
    this.isLoading = false;
    this.hasError = false;
  }

  onImageError(event: any) {
    this.isLoading = false;
    this.hasError = true;
    console.warn(`Failed to load map image: ${this.imageSrc}`);
  }
}