
import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-service-artisans',
  templateUrl: './service-artisans.component.html',
  styleUrl: './service-artisans.component.css'
})

export class ServiceArtisansComponent implements OnInit {
  serviceArtisans: any[] = [];

  constructor(private artisanService: ArtisansService) {}

  ngOnInit(): void {
    this.serviceArtisans = this.artisanService.getArtisansByCategory('Services');
  }
}
