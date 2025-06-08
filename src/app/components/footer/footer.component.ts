import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <footer class="bg-dark-surface border-t border-dark-border mt-auto">
      <div class="container mx-auto px-6 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Brand Section -->
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold text-white mb-4 font-serif">
              🇮🇹 Sicily Family Adventure
            </h3>
            <p class="text-dark-text-secondary mb-4 leading-relaxed">
                September 1-11, 2026.
            </p>
            <div class="flex items-center space-x-4">
              <span class="text-sicilian-gold">✈️</span>
              <span class="text-dark-text-secondary">Denver → Sicily</span>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav class="space-y-2">
              <a routerLink="/" 
                 class="block text-dark-text-secondary hover:text-white transition-colors duration-300 no-underline">
                Home
              </a>
              <a routerLink="/planning" 
                 class="block text-dark-text-secondary hover:text-white transition-colors duration-300 no-underline">
                Trip Planning
              </a>
              <a routerLink="/language" 
                 class="block text-dark-text-secondary hover:text-white transition-colors duration-300 no-underline">
                Learn Italian
              </a>
            </nav>
          </div>
          
          <!-- Sicily Highlights -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Sicily Highlights</h4>
            <ul class="space-y-2 text-dark-text-secondary text-sm">
              <li>🏛️ Valley of the Temples</li>
              <li>🌋 Mount Etna Adventure</li>
              <li>🎭 Taormina Greek Theater</li>
              <li>🏰 Syracuse & Ortigia</li>
              <li>🍷 Sicilian Wine Tasting</li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="border-t border-dark-border mt-8 pt-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <!-- Copyright -->
            <div class="text-dark-text-secondary text-sm">
              © 2025 Sicily Family Adventure. Built with ❤️ using Angular 19.
            </div>
            
            <!-- Travel Dates -->
            <div class="flex items-center space-x-2 text-sicilian-gold">
              <mat-icon class="text-lg">event</mat-icon>
              <span class="text-sm font-medium">September 1-11, 2026</span>
            </div>
            
            <!-- Social Links or Additional Info -->
            <div class="flex items-center space-x-4">
              <a href="https://angular.dev" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-dark-text-secondary hover:text-white transition-colors duration-300 no-underline"
                 title="Built with Angular">
                <mat-icon class="text-lg">code</mat-icon>
              </a>
              <a href="https://tailwindcss.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-dark-text-secondary hover:text-white transition-colors duration-300 no-underline"
                 title="Styled with Tailwind CSS">
                <mat-icon class="text-lg">palette</mat-icon>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Final Italian Touch -->
        <div class="text-center mt-6 pt-4 border-t border-dark-border/50">
          <p class="text-dark-text-secondary text-sm italic">
            "Buon viaggio in Sicilia!" - Have a wonderful trip to Sicily! 🇮🇹
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Remove underlines from all links */
    a {
      text-decoration: none !important;
    }
    
    /* Smooth hover transitions */
    a:hover {
      transform: translateY(-1px);
    }
    
    /* Material icon sizing */
    mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
      .container {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  constructor() {
    // Simple footer component - no complex initialization needed
  }
}