import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enterlogincred',
  templateUrl: './enterlogincred.component.html',
  styleUrls: ['./enterlogincred.component.css'],
})
export class EnterlogincredComponent implements OnInit{
  @Output() closeLogin = new EventEmitter<void>();

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  close() {
    this.closeLogin.emit();
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const payload = this.loginForm.value;

    this.authService.login(payload).subscribe({
      next: (res) => {
        // 🔐 Store JWT
        this.authService.storeToken(res.token);
        this.authService.storeUserRole(res.role);

        // Close modal
        this.close();

        // 🚦 Route based on role
        if (res.role === 'jobseeker') {
          this.router.navigate(['/jobseeker', res.username]);
        } else {
          this.router.navigate(['/recruiter', res.username]);
        }
      },
      error: (err) => {
        alert(err.error?.message || 'Login failed');
      }
    });
  }
}
