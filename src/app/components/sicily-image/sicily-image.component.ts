import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sicily-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="relative overflow-hidden transition-all duration-300"
      [class]="containerClass"
      [class.hover:scale-105]="enableHover">
      <img 
        [src]="getImagePath()"
        [alt]="alt || imageName"
        [class]="imageClass"
        class="w-full h-full object-cover transition-transform duration-300"
        loading="lazy"
        (error)="onImageError($event)"
      />
      
      <!-- Optional overlay -->
      <div 
        *ngIf="overlay" 
        class="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div class="text-white text-center p-4">
          <h3 *ngIf="overlayTitle" class="text-xl font-bold mb-2">{{ overlayTitle }}</h3>
          <p *ngIf="overlayDescription" class="text-sm opacity-90">{{ overlayDescription }}</p>
        </div>
      </div>
      
      <!-- Bottom caption -->
      <div 
        *ngIf="caption" 
        class="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 text-white">
        <p class="text-sm font-medium">{{ caption }}</p>
      </div>
    </div>
  `,
  styles: [`
    .image-container {
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .image-container:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
  `]
})
export class SicilyImageComponent {
  @Input() imageName!: string;
  @Input() alt?: string;
  @Input() containerClass: string = 'rounded-xl shadow-lg image-container';
  @Input() imageClass: string = '';
  @Input() overlay: boolean = false;
  @Input() overlayTitle?: string;
  @Input() overlayDescription?: string;
  @Input() caption?: string;
  @Input() enableHover: boolean = true;

  getImagePath(): string {
    return `./images/${this.imageName}`;
  }

  onImageError(event: any): void {
    console.warn(`Failed to load image: ${this.imageName}`);
    // Fallback to a default Sicily image
    event.target.src = 'https://images.unsplash.com/photo-1594136789908-8d05ebfa88f2?w=800&q=80';
  }
}