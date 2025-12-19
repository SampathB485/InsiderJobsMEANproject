import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostjobComponent } from './postjob/postjob.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecruiterhomeComponent } from './recruiterhome/recruiterhome.component';
import { ManagejobsComponent } from './managejobs/managejobs.component';
import { ViewapplicantsComponent } from './viewapplicants/viewapplicants.component';



@NgModule({
  declarations: [
    PostjobComponent,
    RecruiterhomeComponent,
    ManagejobsComponent,
    ViewapplicantsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecruitermoduleModule { }
