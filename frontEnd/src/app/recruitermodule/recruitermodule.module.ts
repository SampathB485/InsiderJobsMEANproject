import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostjobComponent } from './postjob/postjob.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecruiterhomeComponent } from './recruiterhome/recruiterhome.component';



@NgModule({
  declarations: [
    PostjobComponent,
    RecruiterhomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecruitermoduleModule { }
