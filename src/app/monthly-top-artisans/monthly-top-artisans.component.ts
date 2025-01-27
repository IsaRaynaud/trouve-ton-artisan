import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-monthly-top-artisans',
  templateUrl: './monthly-top-artisans.component.html',
  styleUrl: './monthly-top-artisans.component.css'
})
export class MonthlyTopArtisansComponent {
  monthlyTopArtisans: any[] = [];

  constructor(private artisanService: ArtisansService) {}

  ngOnInit(): void {
    this.monthlyTopArtisans = this.artisanService.getArtisansByTop(true);
  }
}
