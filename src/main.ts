import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes, 
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Always scroll to top on route change
        anchorScrolling: 'enabled' // Enable anchor scrolling for hash links
      })
    ),
    provideClientHydration()
  ]
}).catch(err => console.error(err));