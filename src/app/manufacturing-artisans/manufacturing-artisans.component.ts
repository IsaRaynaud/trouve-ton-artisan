import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-manufacturing-artisans',
  templateUrl: './manufacturing-artisans.component.html',
  styleUrl: './manufacturing-artisans.component.css'
})
export class ManufacturingArtisansComponent implements OnInit {
  manufacturingArtisans: any[] = [];

  constructor(private artisanService: ArtisansService) {}

  ngOnInit(): void {
    this.manufacturingArtisans = this.artisanService.getArtisansByCategory('Fabrication');
  }
}