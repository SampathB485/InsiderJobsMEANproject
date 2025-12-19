import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandinghomepageComponent } from './landinghomepage/landinghomepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecruiterhomeComponent } from './recruitermodule/recruiterhome/recruiterhome.component';
import { JobseekerhomeComponent } from './jobseekermodule/jobseekerhome/jobseekerhome.component';
import { AuthGuard } from './guards/auth.guard';
import { PostjobComponent } from './recruitermodule/postjob/postjob.component';
import { ViewapplicantsComponent } from './recruitermodule/viewapplicants/viewapplicants.component';
import { ManagejobsComponent } from './recruitermodule/managejobs/managejobs.component';

const routes: Routes = [

  {path: '', component: LandinghomepageComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'jobseeker/:username', component: JobseekerhomeComponent,  canActivate: [AuthGuard]},
  {path: 'recruiter/:username', component: RecruiterhomeComponent,  canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'managejobs', pathMatch: 'full' },
      {path:'postjob', component: PostjobComponent},
      {path:'managejobs', component: ManagejobsComponent},
      {path:'viewapplicants', component: ViewapplicantsComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
