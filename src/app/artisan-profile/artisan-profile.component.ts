import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_3wovqor', 'template_mu2yivc', e.target as HTMLFormElement, {
        publicKey: 'TL6pbcIbNwOQHIBnl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
