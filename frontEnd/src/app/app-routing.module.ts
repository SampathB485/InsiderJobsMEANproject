import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandinghomepageComponent } from './landinghomepage/landinghomepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecruiterhomeComponent } from './recruiterhome/recruiterhome.component';
import { JobseekerhomeComponent } from './jobseekerhome/jobseekerhome.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [

  {path: '', component: LandinghomepageComponent},
  {path: 'register', component: RegistrationComponent},
  {
    path: 'jobseeker/:username',
    component: JobseekerhomeComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'jobseeker' }
  },
  {
    path: 'recruiter/:username',
    component: RecruiterhomeComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'recruiter' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
