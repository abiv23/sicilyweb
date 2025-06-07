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
    <mat-toolbar class="bg-hero-gradient text-white shadow-2xl sticky top-0 z-50 border-b border-dark-border">
      <div class="container mx-auto px-4 flex justify-between items-center w-full">
        <a routerLink="/" class="text-2xl font-bold hover:opacity-80 transition-all duration-300 no-underline text-white flex items-center gap-3">
          <span class="text-3xl">🇮🇹</span>
          <span class="font-serif tracking-tight">Sicily Adventure</span>
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-2">
          <a routerLink="/" 
             routerLinkActive="glass-effect scale-105" 
             [routerLinkActiveOptions]="{exact: true}"
             class="px-6 py-3 rounded-full hover:glass-effect transition-all duration-300 hover:scale-105 no-underline text-white font-medium flex items-center gap-2">
            <span class="text-lg">🏠</span>
            <span>Home</span>
          </a>
          <a routerLink="/planning" 
             routerLinkActive="glass-effect scale-105"
             class="px-6 py-3 rounded-full hover:glass-effect transition-all duration-300 hover:scale-105 no-underline text-white font-medium flex items-center gap-2">
            <span class="text-lg">🗺️</span>
            <span>Trip Planning</span>
          </a>
          <a routerLink="/language" 
             routerLinkActive="glass-effect scale-105"
             class="px-6 py-3 rounded-full hover:glass-effect transition-all duration-300 hover:scale-105 no-underline text-white font-medium flex items-center gap-2">
            <span class="text-lg">🗣️</span>
            <span>Learn Italian</span>
          </a>
        </nav>
        
        <!-- Mobile menu button -->
        <button mat-icon-button class="md:hidden text-white" (click)="toggleMobileMenu()">
          <mat-icon class="text-white">menu</mat-icon>
        </button>
      </div>
      
      <!-- Mobile menu -->
      @if (mobileMenuOpen) {
        <div class="md:hidden absolute top-full left-0 right-0 backdrop-blur-dark border-t border-dark-border shadow-2xl">
          <nav class="flex flex-col p-6 space-y-3">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="glass-effect" 
               [routerLinkActiveOptions]="{exact: true}"
               class="px-6 py-4 rounded-xl hover:glass-effect transition-all duration-300 no-underline text-white font-medium flex items-center gap-3">
              <span class="text-xl">🏠</span>
              <span>Home</span>
            </a>
            <a routerLink="/planning" 
               (click)="closeMobileMenu()"
               routerLinkActive="glass-effect"
               class="px-6 py-4 rounded-xl hover:glass-effect transition-all duration-300 no-underline text-white font-medium flex items-center gap-3">
              <span class="text-xl">🗺️</span>
              <span>Trip Planning</span>
            </a>
            <a routerLink="/language" 
               (click)="closeMobileMenu()"
               routerLinkActive="glass-effect"
               class="px-6 py-4 rounded-xl hover:glass-effect transition-all duration-300 no-underline text-white font-medium flex items-center gap-3">
              <span class="text-xl">🗣️</span>
              <span>Learn Italian</span>
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
    
    .mat-toolbar {
      background: linear-gradient(135deg, #1a5f3f 0%, #c41e3a 50%, #d97706 100%) !important;
    }
    
    .mat-icon {
      color: white !important;
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