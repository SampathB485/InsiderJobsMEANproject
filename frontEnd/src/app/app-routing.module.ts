import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandinghomepageComponent } from './landinghomepage/landinghomepage.component';


const routes: Routes = [
  {path: '', component: LandinghomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
