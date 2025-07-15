import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnepieceApiService } from '../../services/onepiece-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.html',
  styleUrls: ['./character-detail.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  readonly route = inject(ActivatedRoute);
  readonly api = inject(OnepieceApiService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getCharacterById(id).subscribe((data) => {
      this.character = data;
    });
  }
}
