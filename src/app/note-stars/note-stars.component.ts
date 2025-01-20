import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';

@Component({
  selector: 'app-note-stars',
  templateUrl: './note-stars.component.html',
  styleUrl: './note-stars.component.css'
})
export class NoteStarsComponent implements OnInit {
  artisan : any;

  constructor(private artisanService: ArtisansService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artisan = this.artisanService.artisans;
  }
}
