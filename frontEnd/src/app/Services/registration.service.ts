import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/register';

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    console.log("following is the result")
    const result = this.http.post(this.apiUrl, data); // PROBLEM MIGHT BE HERE
    console.log(result)
    return result;
    
  }
}
