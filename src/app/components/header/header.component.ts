import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  template: `
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      [ngClass]="{
        'translate-y-0': isScrolled,
        '-translate-y-full': !isScrolled,
        'backdrop-blur-md': isScrolled,
        'bg-black/30': isScrolled,
        'border-b': isScrolled,
        'border-white/10': isScrolled,
        'shadow-2xl': isScrolled
      }">
      
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          
          <!-- Logo/Brand -->
          <a 
            routerLink="/" 
            class="text-white font-bold text-2xl hover:opacity-80 transition-opacity duration-300 no-underline">
            <span class="font-serif tracking-tight">Sicily Adventure</span>
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              routerLink="/" 
              routerLinkActive="active-link" 
              [routerLinkActiveOptions]="{exact: true}"
              class="nav-link">
              Home
            </a>
            <a 
              routerLink="/planning" 
              routerLinkActive="active-link"
              class="nav-link">
              Planning
            </a>
            <a 
              routerLink="/language" 
              routerLinkActive="active-link"
              class="nav-link">
              Language
            </a>
          </div>
          
          <!-- Mobile menu button -->
          <button 
            class="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
            (click)="toggleMobileMenu()"
            [attr.aria-label]="mobileMenuOpen ? 'Close menu' : 'Open menu'">
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                class="bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"
                [class.rotate-45]="mobileMenuOpen"
                [class.translate-y-1]="mobileMenuOpen">
              </span>
              <span 
                class="bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5"
                [class.opacity-0]="mobileMenuOpen">
              </span>
              <span 
                class="bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"
                [class.-rotate-45]="mobileMenuOpen"
                [class.-translate-y-1]="mobileMenuOpen">
              </span>
            </div>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div 
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!mobileMenuOpen"
          [class.max-h-screen]="mobileMenuOpen"
          [class.opacity-0]="!mobileMenuOpen"
          [class.opacity-100]="mobileMenuOpen">
          
          <div class="pt-6 pb-4 space-y-4 border-t border-white/10 mt-4">
            <a 
              routerLink="/" 
              (click)="closeMobileMenu()"
              routerLinkActive="active-link" 
              [routerLinkActiveOptions]="{exact: true}"
              class="mobile-nav-link">
              Home
            </a>
            <a 
              routerLink="/planning" 
              (click)="closeMobileMenu()"
              routerLinkActive="active-link"
              class="mobile-nav-link">
              Planning
            </a>
            <a 
              routerLink="/language" 
              (click)="closeMobileMenu()"
              routerLinkActive="active-link"
              class="mobile-nav-link">
              Language
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    /* Clean link styles */
    a {
      text-decoration: none !important;
    }
    
    /* Desktop navigation links */
    .nav-link {
      @apply text-white/90 hover:text-white transition-all duration-300 font-medium text-lg;
      @apply hover:scale-105 relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 50%;
      background: linear-gradient(90deg, #60a5fa, #f472b6);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    .nav-link:hover::after,
    .nav-link.active-link::after {
      width: 100%;
    }
    
    .nav-link.active-link {
      @apply text-white;
    }
    
    /* Mobile navigation links */
    .mobile-nav-link {
      @apply block text-white/90 hover:text-white transition-all duration-300;
      @apply font-medium text-lg py-3 px-4 hover:bg-white/10 rounded-lg;
    }
    
    .mobile-nav-link.active-link {
      @apply text-white bg-white/20;
    }
    
    /* Glassmorphism backdrop */
    .backdrop-blur-md {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    
    /* Custom hamburger animation */
    .hamburger-line {
      transition: all 0.3s ease;
    }
    
    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }
    
    /* Hide scrollbar but keep functionality */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  mobileMenuOpen = false;
  private scrollThreshold = 50; // Pixels to scroll before showing nav
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Only check scroll position if running in browser
    if (this.isBrowser) {
      this.checkScrollPosition();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkScrollPosition();
    }
  }

  private checkScrollPosition() {
    if (!this.isBrowser) {
      return;
    }
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > this.scrollThreshold;
    
    // Close mobile menu when scrolling
    if (this.isScrolled && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    // Prevent body scroll when mobile menu is open (only in browser)
    if (this.isBrowser) {
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = 'unset';
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    // Close mobile menu on desktop resize (only in browser)
    if (this.isBrowser && window.innerWidth >= 768 && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}