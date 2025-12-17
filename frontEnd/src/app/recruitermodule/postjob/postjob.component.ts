import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit{
  indianStates: string[] = [
    'Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Karnataka',
    'Kerala', 'Maharashtra', 'Delhi', 'Gujarat',
    'Rajasthan', 'Uttar Pradesh', 'West Bengal'
  ];

  tempSelectedStates: string[] = [];
  selectedStates: string[] = [];

  skillInput = '';

  postJobForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    experience: [0, Validators.required],
    jobMode: ['Remote', Validators.required], // DEFAULT SET
    salary: [0],
    skills: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get skills(): FormArray {
    return this.postJobForm.get('skills') as FormArray;
  }

  get f() {
    return this.postJobForm.controls;
  }

  toggleTempState(state: string) {
    if (this.tempSelectedStates.includes(state)) {
      this.tempSelectedStates =
        this.tempSelectedStates.filter(s => s !== state);
    } else {
      this.tempSelectedStates.push(state);
    }
  }

  addStates() {
    this.tempSelectedStates.forEach(state => {
      if (!this.selectedStates.includes(state)) {
        this.selectedStates.push(state);
      }
    });
    this.tempSelectedStates = [];
  }

  removeState(index: number) {
    this.selectedStates.splice(index, 1);
  }

  addSkill() {
    if (this.skillInput.trim()) {
      this.skills.push(this.fb.control(this.skillInput.trim()));
      this.skillInput = '';
    }
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.postJobForm.invalid) return;

    const payload = {
      ...this.postJobForm.value,
      locations: this.selectedStates
    };

    console.log('Job Payload:', payload);
  }
}
