import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enterlogincred',
  templateUrl: './enterlogincred.component.html',
  styleUrls: ['./enterlogincred.component.css'],
})
export class EnterlogincredComponent implements OnInit{
  loginForm!: FormGroup;

  @Output() closeLogin = new EventEmitter<void>();

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

  // ✅ This is used in HTML as f['email'], f['password']
  get f() {
    return this.loginForm.controls;
  }

  // ✅ This matches (ngSubmit)="onLogin()"
  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (res) => {
        // Save JWT
        this.authService.saveToken(res.token);

        // Close modal
        this.closeLogin.emit();

        // Redirect based on user type
        if (res.userType === 'jobseeker') {
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

  close(): void {
    this.closeLogin.emit();
  }
}
