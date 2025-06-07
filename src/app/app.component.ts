import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'Sicily Family Adventure';
}