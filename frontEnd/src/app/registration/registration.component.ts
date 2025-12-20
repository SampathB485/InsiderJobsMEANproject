import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userType: ['jobseeker', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      recruitingFor: [''],   // dynamic field
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    this.registerForm.get('userType')?.valueChanges.subscribe(value => {
      const recruitingForControl = this.registerForm.get('recruitingFor');

      if (value === 'recruiter') {
        recruitingForControl?.setValidators([Validators.required]);
      } else {
        recruitingForControl?.clearValidators();
        recruitingForControl?.reset();
      }

      recruitingForControl?.updateValueAndValidity();
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
      profilePassword: this.registerForm.value.password,
      mobileNo: this.registerForm.value.mobile,
      recruitingFor: ''
    };

    if (this.registerForm.value.userType === 'recruiter') {
      payload.recruitingFor = this.registerForm.value.recruitingFor;
    }

    this.authService.registerUser(payload).subscribe({
      next: () => {
        alert('Registration successful!');
        this.registerForm.reset({ userType: 'jobseeker' });
      },
      error: (err) => {
        if (err.status === 409) {
          alert('Email already registered');
        } else {
          alert('Registration failed');
        }
      },
    });
  }
}
