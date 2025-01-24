import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  searchQuery: string = '';
  filteredArtisans: any[] = [];

  constructor(private route: ActivatedRoute, private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.filterArtisans();
    });
  }

  filterArtisans(): void {
    this.filteredArtisans = this.artisansService.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      artisan.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      artisan.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
