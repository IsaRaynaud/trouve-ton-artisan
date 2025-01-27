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
import { SearchResultsComponent } from './search-results/search-results.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "liste-artisans", component: ArtisanCardComponent},
  { path: "fiche-artisan/:id", component: ArtisanProfileComponent },
  { path: "batiment", component: BuildingArtisansComponent},
  { path: "services", component: ServiceArtisansComponent},
  { path: "fabrication", component: ManufacturingArtisansComponent },
  { path: "alimentation", component: FoodArtisansComponent},
  { path: "resultats-recherche", component:SearchResultsComponent},
  { path: "mentions-legales", component: LegalComponent },
  { path: "donnees-personnelles", component: PersonalDataComponent },
  { path: "accessibilite", component: AccessibilityComponent },
  { path: "presse", component: PressComponent },
  { path: "marches-publics", component: PublicProcurementComponent },
  { path: "contact", component:ContactComponent },
  { path: "gestion-cookies", component: CookiesComponent },
  { path: "**", component: NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
