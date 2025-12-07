import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandinghomepageComponent } from './landinghomepage/landinghomepage.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [

  {path: '', component: LandinghomepageComponent},
  {path: 'register', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
