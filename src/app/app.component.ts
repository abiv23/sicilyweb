import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <app-header></app-header>
      <main class="relative">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    /* Ensure smooth scrolling behavior */
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
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sicily Adventure';
  private routerSubscription?: Subscription;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Only set up scroll behavior in browser environment
    if (this.isBrowser) {
      this.setupScrollToTop();
    }
  }

  ngOnDestroy() {
    // Clean up subscription
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private setupScrollToTop() {
    // Subscribe to router events and scroll to top on navigation end
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Scroll to top of the page
        this.scrollToTop();
      });
  }

  private scrollToTop() {
    // Use different methods for better browser compatibility
    try {
      // Method 1: Use window.scrollTo (most reliable)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated
      });
    } catch (error) {
      // Fallback method 2: Use document.documentElement.scrollTop
      try {
        document.documentElement.scrollTop = 0;
      } catch (error2) {
        // Fallback method 3: Use document.body.scrollTop
        document.body.scrollTop = 0;
      }
    }
  }
}