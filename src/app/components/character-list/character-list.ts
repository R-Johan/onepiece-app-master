import { Component, OnInit } from '@angular/core';
import { OnepieceApiService } from '../../services/onepiece-api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-list.html',
  styleUrls: ['./character-list.css'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private readonly api: OnepieceApiService) {}

  ngOnInit(): void {
    this.api.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }

  getCleanNumber(value?: string): number {
    if (!value) {
      return 0;
    }
    return Number(value.replace(/\./g, ''));
  }
}
