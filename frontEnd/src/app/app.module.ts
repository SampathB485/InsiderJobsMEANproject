import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { LandinghomepageComponent } from './landinghomepage/landinghomepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobseekerhomeComponent } from './jobseekermodule/jobseekerhome/jobseekerhome.component';
import { RecruitermoduleModule } from './recruitermodule/recruitermodule.module';





@NgModule({
  declarations: [
    AppComponent,
    LandinghomepageComponent,
    RegistrationComponent,
    JobseekerhomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecruitermoduleModule,
    LandingpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
