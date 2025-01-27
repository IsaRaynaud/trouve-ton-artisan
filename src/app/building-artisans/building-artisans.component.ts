import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-building-artisans',
  templateUrl: './building-artisans.component.html',
  styleUrls: ['./building-artisans.component.css']
})
export class BuildingArtisansComponent implements OnInit {
  buildingArtisans: any[] = [];

  constructor(private artisanService: ArtisansService) {}

  ngOnInit(): void {
    this.buildingArtisans = this.artisanService.getArtisansByCategory('Bâtiment');
  }
}
