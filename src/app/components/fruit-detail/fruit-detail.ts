import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnepieceApiService } from '../../services/onepiece-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fruit-detail.html',
  styleUrls: ['./fruit-detail.css'],
})
export class FruitDetailComponent implements OnInit {
  fruit: any;
  readonly route = inject(ActivatedRoute);
  readonly api = inject(OnepieceApiService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getFruitById(id).subscribe((data) => {
      this.fruit = data;
    });
  }
}

