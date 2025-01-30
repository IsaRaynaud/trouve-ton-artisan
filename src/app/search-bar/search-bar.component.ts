import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private router: Router,
    private artisanService: ArtisansService
  ) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      const results = this.artisanService.getArtisansBySearch(this.searchQuery);
      this.router.navigate(['/resultats-recherche'], { queryParams: { query: this.searchQuery } });    }
  }
}
