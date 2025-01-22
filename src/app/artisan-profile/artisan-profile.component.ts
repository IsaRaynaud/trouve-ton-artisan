import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrl: './artisan-profile.component.css'
})
export class ArtisanProfileComponent implements OnInit {
  artisan: any;

  constructor(
    private artisanService: ArtisansService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.artisan = this.artisanService.getArtisanById(id);
    }
  }
}
