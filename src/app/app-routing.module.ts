import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { LegalComponent } from './legal/legal.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { PressComponent } from './press/press.component';
import { PublicProcurementComponent } from './public-procurement/public-procurement.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ArtisanCardComponent } from './artisan-card/artisan-card.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "liste-artisans", component: ArtisanCardComponent},
  { path: "fiche-artisan/:id", component: ArtisanProfileComponent },
  { path: "mentions-legales", component: LegalComponent },
  { path: "donnees-personnelles", component: PersonalDataComponent },
  { path: "accessibilite", component: AccessibilityComponent },
  { path: "presse", component: PressComponent },
  { path: "marches-publics", component: PublicProcurementComponent },
  { path: "contact", component:ContactComponent },
  { path: "gestion-cookies", component: CookiesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
