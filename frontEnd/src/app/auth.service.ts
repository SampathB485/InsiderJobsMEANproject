import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  storeUserRole(role: string): void {
    localStorage.setItem('role', role);
  }

  logout(): void {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
