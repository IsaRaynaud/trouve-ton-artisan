import { Component, OnInit, Input } from '@angular/core';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-artisan-card',
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.css'
})
export class ArtisanCardComponent implements OnInit {
  @Input() artisan: any;
  artisans: any[] = [];
  selectedArtisan: any;
  filteredArtisans: any[] = [];

  constructor(private ArtisansService: ArtisansService) { }
  
  ngOnInit(): void {
  this.artisans = this.ArtisansService.artisans;
  this.filteredArtisans = [...this.artisans];
  }

  onSearch(query: string): void {
    this.filteredArtisans = this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(query.toLowerCase()) ||
      artisan.category.toLowerCase().includes(query.toLowerCase()) ||
      artisan.location.toLowerCase().includes(query.toLowerCase())
    );
  }

  selectArtisan(artisan:any) : void {
  this.selectedArtisan = artisan;
  }
}