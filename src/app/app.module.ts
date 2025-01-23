import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { PressComponent } from './press/press.component';
import { PublicProcurementComponent } from './public-procurement/public-procurement.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';

import { ArtisansService } from './artisans.service';
import { HomeComponent } from './home/home.component';
import { ArtisanCardComponent } from './artisan-card/artisan-card.component';
import { BuildingArtisansComponent } from './building-artisans/building-artisans.component';
import { ServiceArtisansComponent } from './service-artisans/service-artisans.component';
import { ManufacturingArtisansComponent } from './manufacturing-artisans/manufacturing-artisans.component';
import { FoodArtisansComponent } from './food-artisans/food-artisans.component';
import { MonthlyTopArtisansComponent } from './monthly-top-artisans/monthly-top-artisans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LegalComponent,
    PersonalDataComponent,
    AccessibilityComponent,
    PressComponent,
    PublicProcurementComponent,
    ContactComponent,
    CookiesComponent,
    ArtisanProfileComponent,
    HomeComponent,
    ArtisanCardComponent,
    BuildingArtisansComponent,
    ServiceArtisansComponent,
    ManufacturingArtisansComponent,
    FoodArtisansComponent,
    MonthlyTopArtisansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ArtisansService,
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
