import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router'; // <-- important pour routerLink
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule], // <-- ajoute RouterModule ici
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faInstagram, faGithub);
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/ngreact0/', '_blank');
  }

  openGithub(): void {
    window.open('https://github.com/R-Johan', '_blank');
  }
}
