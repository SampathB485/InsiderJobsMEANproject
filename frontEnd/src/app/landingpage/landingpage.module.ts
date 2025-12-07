import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CasualsearchComponent } from './casualsearch/casualsearch.component';
import { TrustedbyComponent } from './trustedby/trustedby.component';
import { BetterexperienceComponent } from './betterexperience/betterexperience.component';
import { FooterComponent } from './footer/footer.component';
import { EnterlogincredComponent } from './enterlogincred/enterlogincred.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    CasualsearchComponent,
    TrustedbyComponent,
    BetterexperienceComponent,
    FooterComponent,
    EnterlogincredComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, CasualsearchComponent, TrustedbyComponent, FooterComponent, BetterexperienceComponent, EnterlogincredComponent]
})
export class LandingpageModule { }
