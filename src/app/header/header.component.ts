import { Component, OnInit } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  artisans: any[] = [];
  filteredArtisans: any[] = [];

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.artisans = this.artisansService.artisans;
    this.filteredArtisans = [...this.artisans];
  }
  
  onSearch(query: string): void {
    this.filteredArtisans = this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(query.toLowerCase()) ||
      artisan.category.toLowerCase().includes(query.toLowerCase()) ||
      artisan.location.toLowerCase().includes(query.toLowerCase())
    );
  }
}
