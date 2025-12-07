import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { LandinghomepageComponent } from './landinghomepage/landinghomepage.component';
import { RegistrationComponent } from './registration/registration.component';





@NgModule({
  declarations: [
    AppComponent,
    LandinghomepageComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
