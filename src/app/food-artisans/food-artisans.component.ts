import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-food-artisans',
  templateUrl: './food-artisans.component.html',
  styleUrl: './food-artisans.component.css'
})
export class FoodArtisansComponent implements OnInit {
  foodArtisans: any[] = [];

  constructor(private artisanService: ArtisansService) {}

  ngOnInit(): void {
    this.foodArtisans = this.artisanService.getArtisansByCategory('Alimentation');
  }
}
