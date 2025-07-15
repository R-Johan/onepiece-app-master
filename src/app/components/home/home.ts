import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // pour routerLink
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faInstagram);
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/ngreact0/', '_blank');
  }
}
