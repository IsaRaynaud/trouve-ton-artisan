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

  constructor(private ArtisansService: ArtisansService) { }
  
  ngOnInit(): void {
  this.artisans = this.ArtisansService.artisans
  }

  selectArtisan(artisan:any) : void {
  this.selectedArtisan = artisan;
  }
}