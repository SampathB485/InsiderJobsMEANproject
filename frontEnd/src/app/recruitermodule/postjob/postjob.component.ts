import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobpostingService } from 'src/app/Services/jobposting.service';


@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css'],
})
export class PostjobComponent {
  jobTitle = '';
  jobMode = 'Remote';
  jobDescription = '';
  experience: number | null = null;

  salaryMin = 50000;
  salaryMax = 5000000;
  blueLeft = 0;
  blueWidth = 0;

  skillInput = '';
  skills: string[] = [];

  selectedState = '';
  locations: string[] = [];

  states = [
    'Andhra Pradesh',
    'Telangana',
    'Karnataka',
    'Tamil Nadu',
    'Maharashtra',
    'Kerala',
    'Delhi',
    'Gujarat',
    'West Bengal',
    'Rajasthan',
  ];

  constructor(private jobpostingService: JobpostingService) {
    this.updateSalaryTrack();
  }

  onMinChange() {
    if (this.salaryMin > this.salaryMax) {
      this.salaryMin = this.salaryMax;
    }
    this.updateSalaryTrack();
  }

  onMaxChange() {
    if (this.salaryMax < this.salaryMin) {
      this.salaryMax = this.salaryMin;
    }
    this.updateSalaryTrack();
  }

  updateSalaryTrack() {
    const min = 1;
    const max = 10000000;

    this.blueLeft = ((this.salaryMin - min) / (max - min)) * 100;
    this.blueWidth = ((this.salaryMax - this.salaryMin) / (max - min)) * 100;
  }

  addSkill() {
    if (
      this.skillInput.trim() &&
      !this.skills.includes(this.skillInput.trim())
    ) {
      this.skills.push(this.skillInput.trim());
      this.skillInput = '';
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  addLocation() {
    if (this.selectedState && !this.locations.includes(this.selectedState)) {
      this.locations.push(this.selectedState);
      this.selectedState = '';
    }
  }

  removeLocation(index: number) {
    this.locations.splice(index, 1);
  }

  isFormValid(): boolean {
    return (
      this.jobTitle.trim() !== '' &&
      this.jobMode !== '' &&
      this.jobDescription.trim() !== '' &&
      this.experience !== null &&
      this.locations.length > 0 &&
      this.skills.length > 0
    );
  }
  getValidUntilDate(): string {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString();
  }

  resetForm() {
    this.jobTitle = '';
    this.jobMode = 'Remote';
    this.jobDescription = '';
    this.experience = null;
    this.skills = [];
    this.locations = [];
    this.salaryMin = 50000;
    this.salaryMax = 5000000;
    this.updateSalaryTrack();
  }

  onSubmit() {
    if (!this.isFormValid()) return;

    const payload = {
      jobTitle: this.jobTitle,
      //later here insert the data for the employer
      jobMode: this.jobMode,
      jobDescription: this.jobDescription,
      experience: this.experience,
      salaryRange: {
        minimum: this.salaryMin,
        maximum: this.salaryMax,
      },
      skills: this.skills,
      locations: this.locations,
      posted: {
        validUntil: this.getValidUntilDate(),
      },
    };
    console.log("THIS IS PAYLOAD DATA   "+ this.getValidUntilDate())

    this.jobpostingService.createJob(payload).subscribe({
      next: (res) => {
        alert('Job posted successfully!');
        this.resetForm();

      },
      error: (err) => {
        console.error(err);
        alert('Error posting job');
      }
    });


    
  }

  }

