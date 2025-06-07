import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar class="bg-hero-gradient text-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 flex justify-between items-center w-full">
        <a routerLink="/" class="text-xl font-bold hover:opacity-80 transition-opacity no-underline text-white">
          🇮🇹 Sicily Adventure
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6">
          <a routerLink="/" 
             routerLinkActive="bg-white/30 shadow-lg" 
             [routerLinkActiveOptions]="{exact: true}"
             class="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 no-underline text-white">
            🏠 Home
          </a>
          <a routerLink="/planning" 
             routerLinkActive="bg-white/30 shadow-lg"
             class="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 no-underline text-white">
            🗺️ Trip Planning
          </a>
          <a routerLink="/language" 
             routerLinkActive="bg-white/30 shadow-lg"
             class="px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 no-underline text-white">
            🗣️ Learn Italian
          </a>
        </nav>
        
        <!-- Mobile menu button -->
        <button mat-icon-button class="md:hidden" (click)="toggleMobileMenu()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      
      <!-- Mobile menu -->
      @if (mobileMenuOpen) {
        <div class="md:hidden absolute top-full left-0 right-0 bg-hero-gradient border-t border-white/20">
          <nav class="flex flex-col p-4 space-y-2">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-white/30" 
               [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg hover:bg-white/20 transition-all no-underline text-white">
              🏠 Home
            </a>
            <a routerLink="/planning" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-white/30"
               class="px-4 py-2 rounded-lg hover:bg-white/20 transition-all no-underline text-white">
              🗺️ Trip Planning
            </a>
            <a routerLink="/language" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-white/30"
               class="px-4 py-2 rounded-lg hover:bg-white/20 transition-all no-underline text-white">
              🗣️ Learn Italian
            </a>
          </nav>
        </div>
      }
    </mat-toolbar>
  `,
  styles: [`
    a {
      text-decoration: none !important;
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}