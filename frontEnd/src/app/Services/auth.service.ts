import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginURLapi = 'http://localhost:3000/login';
  private PostJobURLapi = 'http://localhost:3000/postjob';
  private RegisterURLapi = 'http://localhost:3000/register';


  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> { //change it here
    const response = this.http.post(this.loginURLapi, credentials);
    return response
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  //This is the function for creating the JOB document
  createJob(data: any): Observable<any> {    
    const result = this.http.post(this.PostJobURLapi, data);
    // console.log('HTTP Observable:', result);
    return result;
  }


  //This is the function that is used for creating the User document
  registerUser(data: any): Observable<any> {
    //this will hit "3000/register" endpoint...   RegisterURLapi = 'http://localhost:3000/register';
    const result = this.http.post(this.RegisterURLapi, data);
    // console.log(result)
    return result;
    
  }
}
