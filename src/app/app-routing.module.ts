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
import { BuildingArtisansComponent } from './building-artisans/building-artisans.component';
import { ServiceArtisansComponent } from './service-artisans/service-artisans.component';
import { ManufacturingArtisansComponent } from './manufacturing-artisans/manufacturing-artisans.component';
import { FoodArtisansComponent } from './food-artisans/food-artisans.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "liste-artisans", component: ArtisanCardComponent},
  { path: "fiche-artisan/:id", component: ArtisanProfileComponent },
  { path: "batiment", component: BuildingArtisansComponent},
  { path: "services", component: ServiceArtisansComponent},
  { path: "fabrication", component: ManufacturingArtisansComponent },
  { path: "alimentation", component: FoodArtisansComponent},
  { path: "mentions-legales", component: LegalComponent },
  { path: "donnees-personnelles", component: PersonalDataComponent },
  { path: "accessibilite", component: AccessibilityComponent },
  { path: "presse", component: PressComponent },
  { path: "marches-publics", component: PublicProcurementComponent },
  { path: "contact", component:ContactComponent },
  { path: "gestion-cookies", component: CookiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
