import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faHatCowboy,
  faHouse,
  faAppleWhole,
  faUserAstronaut,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FontAwesomeModule], // plus HttpClientModule ici
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faHatCowboy,
      faHouse,
      faAppleWhole,
      faUserAstronaut,
      faSkullCrossbones
    );
  }
}
