import { Component, OnInit } from '@angular/core';
import { OnepieceApiService } from '../../services/onepiece-api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fruit-list.html',
  styleUrls: ['./fruit-list.css'],
})
export class FruitListComponent implements OnInit {
  fruits: any[] = [];

  constructor(private readonly api: OnepieceApiService) {}

  ngOnInit(): void {
    this.api.getFruits().subscribe((data: any[]) => {
      console.log('Fruits API data:', data);
      this.fruits = data;
    });
  }
}
