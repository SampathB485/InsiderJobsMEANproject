import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userType: ['jobseeker', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    
    if (this.registerForm.invalid) {
      
      return;
    }
    
    const payload = {
      userType: this.registerForm.value.userType,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      profilePassword: this.registerForm.value.password, //  match backend field
      mobileNo: this.registerForm.value.mobile
    };

    this.registrationService.registerUser(payload).subscribe({
      next: (res) => {
        
        alert('Registration successful!');
        this.registerForm.reset();
      },
      error: (err) => {
        console.log("sampathyyyyyyyyy")
        console.error(err);
        alert('Registration failed');
      }
    });
  }

  

}
